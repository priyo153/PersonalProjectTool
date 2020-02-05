package com.demoProject.security;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;

import com.demoProject.exceptions.InvalidLoginResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;

@Component
public class JwtAuthenticationEntryPoint implements AuthenticationEntryPoint {

	@Override
	public void commence(HttpServletRequest request, HttpServletResponse response,
			AuthenticationException authException) throws IOException, ServletException {

		InvalidLoginResponse res = new InvalidLoginResponse();

		ObjectMapper mapper = new ObjectMapper();
		String res_json = mapper.writeValueAsString(res);

		response.setContentType("application/json");
		response.setStatus(401);
		response.getWriter().print(res_json);

	}

}
