package com.demoProject.controllers;

import java.security.Principal;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demoProject.entities.ProjectTask;
import com.demoProject.exceptions.RequestHasErrorsException;
import com.demoProject.exceptions.TaskNotFoundException;
import com.demoProject.services.ProjectService;
import com.demoProject.services.ProjectTaskService;

@RestController
@RequestMapping("/backlog")
@CrossOrigin
public class BacklogController {

	@Autowired
	private ProjectTaskService projectTaskService;

	@Autowired
	private ProjectService projectService;

	@PostMapping("/{backlogId}")
	public ResponseEntity<?> addProjectTaskToBacklog(@PathVariable String backlogId,
			@Valid @RequestBody ProjectTask projectTask, BindingResult result, Principal principal) throws Exception {

		projectService.findByIdentifier(backlogId, principal.getName());
		projectTask.setId(null);

		if (result.hasErrors()) {
			throw new RequestHasErrorsException(result.getFieldErrors());
		}

		ProjectTask projectTask1 = projectTaskService.addProjectTask(backlogId, projectTask);
		return new ResponseEntity<ProjectTask>(projectTask1, HttpStatus.CREATED);

	}

	@PutMapping("/{backlogId}/{sequenceId}")
	public ProjectTask updateProjectTask(@Valid @RequestBody ProjectTask projectTask, BindingResult result,
			@PathVariable String backlogId, @PathVariable String sequenceId, Principal principal) throws Exception {

		ProjectTask p = getProjectTask(backlogId, sequenceId, principal);

		projectTask.setId(p.getId());
		projectTask.setProjectSequence(p.getProjectSequence());
		projectTask.setCreatedAt(p.getCreatedAt());

		if (result.hasErrors()) {
			throw new RequestHasErrorsException(result.getFieldErrors());
		}

		ProjectTask projectTask1 = projectTaskService.addProjectTask(backlogId, projectTask);

		return projectTask1;

	}

	@GetMapping("/{backlogId}")
	public List<ProjectTask> getProjectTasks(@PathVariable String backlogId, Principal principal) {
		projectService.findByIdentifier(backlogId, principal.getName());
		return projectTaskService.findBacklogById(backlogId);

	}

	@GetMapping("/{backlogId}/{sequenceId}")
	public ProjectTask getProjectTask(@PathVariable String backlogId, @PathVariable String sequenceId,
			Principal principal) {

		projectService.findByIdentifier(backlogId, principal.getName());
		ProjectTask p = projectTaskService.findProjectTask(sequenceId);

		if (!p.getProjectIdentifier().equals(backlogId)) {
			throw new TaskNotFoundException();
		}
		return p;

	}

	@DeleteMapping("/{backlogId}/{sequenceId}")
	public ResponseEntity<String> deleteProjectTask(@PathVariable String backlogId, @PathVariable String sequenceId,
			Principal principal) {

		ProjectTask p = getProjectTask(backlogId, sequenceId, principal);

		projectTaskService.deleteProjectTask(p);
		return new ResponseEntity<>("Project task successfully deleted", HttpStatus.OK);

	}

}
