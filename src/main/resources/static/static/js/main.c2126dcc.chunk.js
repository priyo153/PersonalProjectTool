(this["webpackJsonpppm-tool-front-end"]=this["webpackJsonpppm-tool-front-end"]||[]).push([[0],{46:function(e,t,a){e.exports=a(78)},51:function(e,t,a){},52:function(e,t,a){},78:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(25),o=a.n(c),s=(a(51),a(52),a(2)),i=a(3),l=a(6),m=a(4),u=a(7),p=a(9),d=a(5),h=a(10),v=a.n(h),f=a(12),b=a.n(f),E="GET_ERRORS",j=function(e){function t(){var e,a;Object(s.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).onDeleteClick=function(e){a.props.deleteProject(e)},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.project;return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"card card-body bg-light mb-3"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-2"},n.a.createElement("span",{className:"mx-auto"},e.projectIdentifier)),n.a.createElement("div",{className:"col-lg-6 col-md-4 col-8"},n.a.createElement("h3",null,e.projectName),n.a.createElement("p",null,e.description)),n.a.createElement("div",{className:"col-md-4 d-none d-lg-block"},n.a.createElement("ul",{className:"list-group"},n.a.createElement(p.b,{to:"/projectBoard/".concat(e.projectIdentifier)},n.a.createElement("li",{className:"list-group-item board"},n.a.createElement("i",{className:"fa fa-flag-checkered pr-1"}," Project Board"))),n.a.createElement(p.b,{to:"/updateProject/".concat(e.projectIdentifier)},n.a.createElement("li",{className:"list-group-item update"},n.a.createElement("i",{className:"fa fa-edit pr-1"}," Update Project Info"))),n.a.createElement("li",{className:"list-group-item delete",onClick:this.onDeleteClick.bind(this,e.projectIdentifier)},n.a.createElement("i",{className:"fa fa-minus-circle pr-1"}," Delete Project")))))))}}]),t}(r.Component),g=Object(d.b)(null,{deleteProject:function(e){return function(t){return v.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:if(!window.confirm("Are you sure you want to delete the project with ID ".concat(e,"   ? "))){a.next=4;break}return a.next=3,v.a.awrap(b.a.delete("/projects/".concat(e)));case 3:t({type:"DELETE_PROJECT",payload:e});case 4:case"end":return a.stop()}}))}}})(j),y=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(p.b,{to:"/addProject",className:"btn btn-lg btn-info"},"Create a Project"))},N=a(19),k=a(44),O={},C=a(20),D={projects:[],project:{}},w={project_tasks:[],project_task:{}},S={validToken:!1,user:{}},P=function(e){return!!e},x=Object(N.c)({errors:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return t.payload;default:return e}},project:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_PROJECTS":return Object(C.a)({},e,{projects:t.payload});case"GET_PROJECT":return Object(C.a)({},e,{project:t.payload});case"DELETE_PROJECT":return Object(C.a)({},e,{projects:e.projects.filter((function(e){return e.projectIdentifier!==t.payload}))});default:return e}},backlog:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_BACKLOG":return Object(C.a)({},e,{project_tasks:t.payload});case"GET_PROJECT_TASK":return Object(C.a)({},e,{project_task:t.payload});case"DELETE_PROJECT_TASK":return Object(C.a)({},e,{project_tasks:e.project_tasks.filter((function(e){return e.projectSequence!==t.payload}))});default:return e}},security:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CURRENT_USER":return Object(C.a)({},e,{validToken:P(t.payload),user:t.payload});default:return e}},rendered:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RENDERED":return!0;default:return e}}}),T={},_=[k.a],I=window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__(),R=window.navigator.userAgent.includes("Chrome")&&I?Object(N.e)(x,T,Object(N.d)(N.a.apply(void 0,_),I)):Object(N.e)(x,T,Object(N.d)(N.a.apply(void 0,_)));function U(){R.dispatch({type:"RENDERED"})}var A=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.getProjects()}},{key:"render",value:function(){U();var e=this.props.project.projects;return n.a.createElement("div",{className:"projects"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12"},n.a.createElement("h1",{className:"display-4 text-center"},"Projects"),n.a.createElement("br",null),n.a.createElement(y,null),n.a.createElement("br",null),n.a.createElement("hr",null),e.map((function(e){return n.a.createElement(g,{key:e.id,project:e})}))))))}}]),t}(r.Component),B=Object(d.b)((function(e){return{project:e.project}}),{getProjects:function(){return function(e){var t;return v.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,v.a.awrap(b.a.get("/projects"));case 2:t=a.sent,e({type:"GET_PROJECTS",payload:t.data});case 4:case"end":return a.stop()}}))}}})(A),G=function(e){e?b.a.defaults.headers.common.Authorization=e:delete b.a.defaults.headers.common.Authorization},q=a(27),L=a.n(q),M=function(){return function(e){console.log("hi"),localStorage.removeItem("jwtToken"),G(!1),e({type:"SET_CURRENT_USER",payload:{}})}},J=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"logout",value:function(){this.props.logout(),window.location.href="/"}},{key:"render",value:function(){var e,t=this.props.security,a=t.validToken,r=t.user,c=n.a.createElement("div",{className:"container"},n.a.createElement(p.b,{className:"navbar-brand",to:"/"},"Personal Project Management Tool"),n.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#mobile-nav"},n.a.createElement("span",{className:"navbar-toggler-icon"})),n.a.createElement("div",{className:"collapse navbar-collapse",id:"mobile-nav"},n.a.createElement("ul",{className:"navbar-nav ml-auto"},n.a.createElement("li",{className:"nav-item"},n.a.createElement(p.b,{className:"nav-link ",to:"/login"},"Login")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(p.b,{className:"nav-link",to:"/register"},"Register"))))),o=n.a.createElement("div",{className:"container"},n.a.createElement(p.b,{className:"navbar-brand",to:"/dashboard"},"Personal Project Management Tool"),n.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#mobile-nav"},n.a.createElement("span",{className:"navbar-toggler-icon"})),n.a.createElement("div",{className:"collapse navbar-collapse",id:"mobile-nav"},n.a.createElement("ul",{className:"navbar-nav mr-auto"},n.a.createElement("li",{className:"nav-item"},n.a.createElement(p.b,{className:"nav-link",to:"/dashboard"},"Dashboard"))),n.a.createElement("ul",{className:"navbar-nav ml-auto"},n.a.createElement("li",{className:"nav-item"},n.a.createElement(p.b,{className:"nav-link ",to:"/dashboard"},n.a.createElement("i",{className:"fas fa-user-circle mr-2"}),r.name)),n.a.createElement("li",{className:"nav-item"},n.a.createElement(p.b,{className:"nav-link",to:"/logout",onClick:this.logout.bind(this)},"Logout")))));return e=r&&a?o:c,n.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark bg-primary mb-4"},e)}}]),t}(r.Component),W=Object(d.b)((function(e){return{security:e.security}}),{logout:M})(J),K=a(23),H=a(15),X=a(11),F=a(1),V=a.n(F),z=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(m.a)(t).call(this))).state={projectName:"",projectIdentifier:"",description:"",startDate:"",endDate:"",errors:{}},e.onChange=e.onChange.bind(Object(X.a)(e)),e.onSubmit=e.onSubmit.bind(Object(X.a)(e)),e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentWillReceiveProps",value:function(e){e.errors&&this.setState({errors:e.errors})}},{key:"onChange",value:function(e){this.setState(Object(H.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){e.preventDefault();var t={projectName:this.state.projectName,projectIdentifier:this.state.projectIdentifier,description:this.state.description,startDate:this.state.startDate,endDate:this.state.endDate};this.props.createProject(t,this.props.history)}},{key:"render",value:function(){var e=this.state.errors;return U(),n.a.createElement("div",null,n.a.createElement("div",{className:"project"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-8 m-auto"},n.a.createElement("h5",{className:"display-4 text-center"},"Create Project form"),n.a.createElement("hr",null),n.a.createElement("form",{onSubmit:this.onSubmit},n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",className:V()("form-control form-control-lg",{"is-invalid":e.projectName}),placeholder:"Project Name",name:"projectName",value:this.state.projectName,onChange:this.onChange}),e.projectName&&n.a.createElement("div",{className:"invalid-feedback"},e.projectName)),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",className:V()("form-control form-control-lg",{"is-invalid":e.projectIdentifier}),placeholder:"Unique Project ID",name:"projectIdentifier",value:this.state.projectIdentifier,onChange:this.onChange}),e.projectIdentifier&&n.a.createElement("div",{className:"invalid-feedback"},e.projectIdentifier)),n.a.createElement("div",{className:"form-group"},n.a.createElement("textarea",{className:V()("form-control form-control-lg",{"is-invalid":e.description}),placeholder:"Project Description",name:"description",value:this.state.description,onChange:this.onChange}),e.description&&n.a.createElement("div",{className:"invalid-feedback"},e.description)),n.a.createElement("h6",null,"Start Date"),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"date",className:V()("form-control form-control-lg",{"is-invalid":e.startDate}),name:"startDate",value:this.state.startDate,onChange:this.onChange}),e.startDate&&n.a.createElement("div",{className:"invalid-feedback"},e.startDate)),n.a.createElement("h6",null,"Estimated End Date"),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"date",className:V()("form-control form-control-lg",{"is-invalid":e.endDate}),name:"endDate",value:this.state.endDate,onChange:this.onChange}),e.endDate&&n.a.createElement("div",{className:"invalid-feedback"},e.endDate)),n.a.createElement("input",{type:"submit",className:"btn btn-primary btn-block mt-4"})))))))}}]),t}(r.Component),$=Object(d.b)((function(e){return{errors:e.errors}}),{createProject:function(e,t){return function(a){return v.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,v.a.awrap(b.a.post("/projects",e));case 3:t.push("/dashboard"),a({type:E,payload:{}}),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),a({type:E,payload:r.t0.response.data});case 10:case"end":return r.stop()}}),null,null,[[0,7]])}}})(z),Q=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(m.a)(t).call(this))).state={id:"",projectName:"",projectIdentifier:"",description:"",startDate:"",endDate:"",errors:{}},e.onChange=e.onChange.bind(Object(X.a)(e)),e.onSubmit=e.onSubmit.bind(Object(X.a)(e)),e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.project,a=t.id,r=t.projectName,n=t.projectIdentifier,c=t.description,o=t.startDate,s=t.endDate;this.setState({id:a,projectName:r,projectIdentifier:n,description:c,startDate:o,endDate:s}),e.errors&&this.setState({errors:e.errors})}},{key:"componentDidMount",value:function(){var e=this.props.match.params.id;this.props.getProject(e,this.props.history)}},{key:"onChange",value:function(e){this.setState(Object(H.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){e.preventDefault();var t={id:this.state.id,projectName:this.state.projectName,projectIdentifier:this.state.projectIdentifier,description:this.state.description,startDate:this.state.startDate,endDate:this.state.endDate};this.props.updateProject(t,this.props.history)}},{key:"render",value:function(){var e=this.state.errors;return n.a.createElement("div",null,n.a.createElement("div",{className:"project"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-8 m-auto"},n.a.createElement("h5",{className:"display-4 text-center"},"Create Project form"),n.a.createElement("hr",null),n.a.createElement("form",{onSubmit:this.onSubmit},n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",className:V()("form-control form-control-lg",{"is-invalid":e.projectName}),placeholder:"Project Name",name:"projectName",value:this.state.projectName,onChange:this.onChange}),e.projectName&&n.a.createElement("div",{className:"invalid-feedback"},e.projectName)),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",className:V()("form-control form-control-lg",{"is-invalid":e.projectIdentifier}),placeholder:"Unique Project ID",name:"projectIdentifier",value:this.state.projectIdentifier,disabled:!0}),e.projectIdentifier&&n.a.createElement("div",{className:"invalid-feedback"},e.projectIdentifier)),n.a.createElement("div",{className:"form-group"},n.a.createElement("textarea",{className:V()("form-control form-control-lg",{"is-invalid":e.description}),placeholder:"Project Description",name:"description",value:this.state.description,onChange:this.onChange}),e.description&&n.a.createElement("div",{className:"invalid-feedback"},e.description)),n.a.createElement("h6",null,"Start Date"),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"date",className:V()("form-control form-control-lg",{"is-invalid":e.startDate}),name:"startDate",value:this.state.startDate,onChange:this.onChange}),e.startDate&&n.a.createElement("div",{className:"invalid-feedback"},e.startDate)),n.a.createElement("h6",null,"Estimated End Date"),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"date",className:V()("form-control form-control-lg",{"is-invalid":e.endDate}),name:"endDate",value:this.state.endDate,onChange:this.onChange}),e.endDate&&n.a.createElement("div",{className:"invalid-feedback"},e.endDate)),n.a.createElement("input",{type:"submit",className:"btn btn-primary btn-block mt-4"})))))))}}]),t}(r.Component),Y=Object(d.b)((function(e){return{project:e.project.project,errors:e.errors}}),{getProject:function(e,t){return function(a){var r;return v.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,v.a.awrap(b.a.get("/projects/".concat(e)));case 3:r=n.sent,a({type:"GET_PROJECT",payload:r.data}),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),t.push("/dashboard");case 10:case"end":return n.stop()}}),null,null,[[0,7]])}},updateProject:function(e,t){return function(a){return v.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,v.a.awrap(b.a.put("/projects",e));case 3:t.push("/dashboard"),a({type:E,payload:{}}),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),a({type:E,payload:r.t0.response.data});case 10:case"end":return r.stop()}}),null,null,[[0,7]])}}})(Q),Z=function(e,t,a){return function(r){return v.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,v.a.awrap(b.a.post("/backlog/".concat(e),t));case 3:a.push("/projectBoard/".concat(e)),r({type:E,payload:{}}),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),r({type:E,payload:n.t0.response.data});case 10:case"end":return n.stop()}}),null,null,[[0,7]])}},ee=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"onDeleteClick",value:function(e,t){this.props.deleteProjectTask(e,t)}},{key:"render",value:function(){U();var e,t,a=this.props.project_task;return 1===a.priority&&(t="bg-danger text-light",e="HIGH"),2===a.priority&&(t="bg-warning text-light",e="MEDIUM"),3===a.priority&&(t="bg-info text-light",e="LOW"),n.a.createElement("div",{className:"card mb-1 bg-light"},n.a.createElement("div",{className:"card-header text-primary ".concat(t)},"ID: ",a.projectSequence," -- Priority: ",e),n.a.createElement("div",{className:"card-body bg-light"},n.a.createElement("h5",{className:"card-title"},a.summary),n.a.createElement("p",{className:"card-text text-truncate "},a.acceptanceCriteria),n.a.createElement(p.b,{to:"/updateProjectTask/".concat(a.projectIdentifier,"/").concat(a.projectSequence),className:"btn btn-primary"},"View / Update"),n.a.createElement("button",{className:"btn btn-danger ml-4",onClick:this.onDeleteClick.bind(this,a.projectIdentifier,a.projectSequence)},"Delete")))}}]),t}(r.Component),te=Object(d.b)(null,{deleteProjectTask:function(e,t){return function(a){return v.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:if(!window.confirm("Are you sure you want to delete project task ".concat(t," ?"))){r.next=4;break}return r.next=3,v.a.awrap(b.a.delete("/backlog/".concat(e,"/").concat(t)));case 3:a({type:"DELETE_PROJECT_TASK",payload:t});case 4:case"end":return r.stop()}}))}}})(ee),ae=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){U();for(var e=this.props.project_tasks_prop.map((function(e){return n.a.createElement(te,{key:e.id,project_task:e})})),t=[],a=[],r=[],c=0;c<e.length;c++)"TO_DO"===e[c].props.project_task.status&&t.push(e[c]),"IN_PROGRESS"===e[c].props.project_task.status&&a.push(e[c]),"DONE"===e[c].props.project_task.status&&r.push(e[c]);return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-4"},n.a.createElement("div",{className:"card text-center mb-2"},n.a.createElement("div",{className:"card-header bg-secondary text-white"},n.a.createElement("h3",null,"TO DO"))),t),n.a.createElement("div",{className:"col-md-4"},n.a.createElement("div",{className:"card text-center mb-2"},n.a.createElement("div",{className:"card-header bg-primary text-white"},n.a.createElement("h3",null,"In Progress"))),a),n.a.createElement("div",{className:"col-md-4"},n.a.createElement("div",{className:"card text-center mb-2"},n.a.createElement("div",{className:"card-header bg-success text-white"},n.a.createElement("h3",null,"Done"))),r)))}}]),t}(r.Component),re=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(m.a)(t).call(this))).state={errors:{}},e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.id;this.props.getBacklog(e)}},{key:"componentWillReceiveProps",value:function(e){e.errors&&this.setState({errors:e.errors})}},{key:"render",value:function(){U();var e,t=this.props.match.params.id,a=this.props.backlog.project_tasks;return e=function(e,t){return t.length<1?"The Project was not found"===e.message?n.a.createElement("div",{className:"alert alert-danger text-center",role:"alert"},e.message):n.a.createElement("div",{className:"alert alert-info text-center",role:"info"},"No project tasks on this board"):n.a.createElement(ae,{project_tasks_prop:t})}(this.state.errors,a),n.a.createElement("div",{className:"container"},n.a.createElement(p.b,{to:"/addProjectTask/".concat(t),className:"btn btn-primary mb-3"},n.a.createElement("i",{className:"fas fa-plus-circle"}," Create Project Task")),n.a.createElement("br",null),n.a.createElement("hr",null),e)}}]),t}(r.Component),ne=Object(d.b)((function(e){return{backlog:e.backlog,errors:e.errors}}),{getBacklog:function(e){return function(t){var a;return v.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,v.a.awrap(b.a.get("/backlog/".concat(e)));case 2:a=r.sent;try{t({type:"GET_BACKLOG",payload:a.data})}catch(n){t({type:E,payload:n.response.data})}case 4:case"end":return r.stop()}}))}}})(re),ce=a(14),oe=a.n(ce),se=function(e){function t(e){var a;Object(s.a)(this,t);var r=(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).props.match.params.id;return a.state={summary:"",acceptanceCriteria:"",status:"",priority:0,dueDate:"",projectIdentifier:r,errors:{}},a.onChange=a.onChange.bind(Object(X.a)(a)),a.onSubmit=a.onSubmit.bind(Object(X.a)(a)),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"onChange",value:function(e){this.setState(Object(H.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){e.preventDefault();var t={summary:this.state.summary,acceptanceCriteria:this.state.acceptanceCriteria,status:this.state.status,priority:this.state.priority,dueDate:this.state.dueDate};console.log(t),this.props.addProjectTask(this.state.projectIdentifier,t,this.props.history)}},{key:"componentWillReceiveProps",value:function(e){e.errors&&this.setState({errors:e.errors})}},{key:"render",value:function(){U();var e=this.props.match.params.id,t=this.state.errors;return n.a.createElement("div",{className:"add-PBI"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-8 m-auto"},n.a.createElement(p.b,{to:"/projectBoard/".concat(e),className:"btn btn-light"},"Back to Project Board"),n.a.createElement("h4",{className:"display-4 text-center"},"Add Project Task"),n.a.createElement("p",{className:"lead text-center"},"Project Name + Project Code"),n.a.createElement("form",{onSubmit:this.onSubmit},n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",className:V()("form-control form-control-lg",{"is-invalid":t.summary}),name:"summary",placeholder:"Project Task summary",value:this.state.summary,onChange:this.onChange}),t.summary&&n.a.createElement("div",{className:"invalid-feedback"},t.summary)),n.a.createElement("div",{className:"form-group"},n.a.createElement("textarea",{className:V()("form-control form-control-lg",{"is-invalid":t.acceptanceCriteria}),placeholder:"Acceptance Criteria",name:"acceptanceCriteria",value:this.state.acceptanceCriteria,onChange:this.onChange}),t.acceptanceCriteria&&n.a.createElement("div",{className:"invalid-feedback"},t.acceptanceCriteria)),n.a.createElement("h6",null,"Due Date"),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"date",className:V()("form-control form-control-lg",{"is-invalid":t.dueDate}),name:"dueDate",value:this.state.dueDate,onChange:this.onChange}),t.dueDate&&n.a.createElement("div",{className:"invalid-feedback"},t.dueDate)),n.a.createElement("div",{className:"form-group"},n.a.createElement("select",{className:V()("form-control form-control-lg",{"is-invalid":t.priority}),name:"priority",value:this.state.priority,onChange:this.onChange},n.a.createElement("option",{value:0},"Select Priority"),n.a.createElement("option",{value:1},"High"),n.a.createElement("option",{value:2},"Medium"),n.a.createElement("option",{value:3},"Low")),t.priority&&n.a.createElement("div",{className:"invalid-feedback"},t.priority)),n.a.createElement("div",{className:"form-group"},n.a.createElement("select",{className:V()("form-control form-control-lg",{"is-invalid":t.status}),name:"status",value:this.state.status,onChange:this.onChange},n.a.createElement("option",{value:""},"Select Status"),n.a.createElement("option",{value:"TO_DO"},"TO DO"),n.a.createElement("option",{value:"IN_PROGRESS"},"IN PROGRESS"),n.a.createElement("option",{value:"DONE"},"DONE")),t.status&&n.a.createElement("div",{className:"invalid-feedback"},t.status)),n.a.createElement("input",{type:"submit",className:"btn btn-primary btn-block mt-4"}))))))}}]),t}(r.Component);Z.PropTypes={addProjectTask:oe.a.func.isRequired,errors:oe.a.object.isRequired};var ie=Object(d.b)((function(e){return{errors:e.errors}}),{addProjectTask:Z})(se),le=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(m.a)(t).call(this))).state={id:"",projectSequence:"",summary:"",acceptanceCriteria:"",status:"",priority:"",dueDate:"",projectIdentifier:"",errors:""},e.onChange=e.onChange.bind(Object(X.a)(e)),e.onSubmit=e.onSubmit.bind(Object(X.a)(e)),e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params,t=e.backlog_id,a=e.task_id;this.props.getProjectTask(t,a,this.props.history)}},{key:"componentWillReceiveProps",value:function(e){e.errors&&this.setState({errors:e.errors});var t=e.project_task,a=t.id,r=t.projectSequence,n=t.summary,c=t.acceptanceCriteria,o=t.status,s=t.priority,i=t.dueDate,l=t.projectIdentifier;this.setState({id:a,projectSequence:r,summary:n,acceptanceCriteria:c,status:o,priority:s,dueDate:i,projectIdentifier:l})}},{key:"onChange",value:function(e){this.setState(Object(H.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){e.preventDefault();var t={id:this.state.id,projectSequence:this.state.projectSequence,summary:this.state.summary,acceptanceCriteria:this.state.acceptanceCriteria,status:this.state.status,priority:this.state.priority,dueDate:this.state.dueDate,projectIdentifier:this.state.projectIdentifier};console.log(t),this.props.updateProjectTask(this.state.projectIdentifier,this.state.projectSequence,t,this.props.history)}},{key:"render",value:function(){U();var e=this.state.errors;return n.a.createElement("div",{className:"add-PBI"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-8 m-auto"},n.a.createElement(p.b,{to:"/projectBoard/".concat(this.state.projectIdentifier),className:"btn btn-light"},"Back to Project Board"),n.a.createElement("h4",{className:"display-4 text-center"},"Update Project Task"),n.a.createElement("p",{className:"lead text-center"},"Project Name: ",this.state.projectIdentifier," | Project task ID:",this.state.projectSequence),n.a.createElement("form",{onSubmit:this.onSubmit},n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",className:V()("form-control form-control-lg",{"is-invalid":e.summary}),name:"summary",placeholder:"Project Task summary",value:this.state.summary,onChange:this.onChange}),e.summary&&n.a.createElement("div",{className:"invalid-feedback"},e.summary)),n.a.createElement("div",{className:"form-group"},n.a.createElement("textarea",{className:V()("form-control form-control-lg",{"is-invalid":e.acceptanceCriteria}),placeholder:"Acceptance Criteria",name:"acceptanceCriteria",value:this.state.acceptanceCriteria,onChange:this.onChange}),e.acceptanceCriteria&&n.a.createElement("div",{className:"invalid-feedback"},e.acceptanceCriteria)),n.a.createElement("h6",null,"Due Date"),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"date",className:V()("form-control form-control-lg",{"is-invalid":e.dueDate}),name:"dueDate",value:this.state.dueDate,onChange:this.onChange}),e.dueDate&&n.a.createElement("div",{className:"invalid-feedback"},e.dueDate)),n.a.createElement("div",{className:"form-group"},n.a.createElement("select",{className:V()("form-control form-control-lg",{"is-invalid":e.priority}),name:"priority",value:this.state.priority,onChange:this.onChange},n.a.createElement("option",{value:0},"Select Priority"),n.a.createElement("option",{value:1},"High"),n.a.createElement("option",{value:2},"Medium"),n.a.createElement("option",{value:3},"Low")),e.priority&&n.a.createElement("div",{className:"invalid-feedback"},e.priority)),n.a.createElement("div",{className:"form-group"},n.a.createElement("select",{className:V()("form-control form-control-lg",{"is-invalid":e.status}),name:"status",value:this.state.status,onChange:this.onChange},n.a.createElement("option",{value:""},"Select Status"),n.a.createElement("option",{value:"TO_DO"},"TO DO"),n.a.createElement("option",{value:"IN_PROGRESS"},"IN PROGRESS"),n.a.createElement("option",{value:"DONE"},"DONE")),e.status&&n.a.createElement("div",{className:"invalid-feedback"},e.status)),n.a.createElement("input",{type:"submit",className:"btn btn-primary btn-block mt-4"}))))))}}]),t}(r.Component),me=Object(d.b)((function(e){return{project_task:e.backlog.project_task,errors:e.errors}}),{getProjectTask:function(e,t,a){return function(r){var n;return v.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,v.a.awrap(b.a.get("/backlog/".concat(e,"/").concat(t)));case 3:n=c.sent,r({type:"GET_PROJECT_TASK",payload:n.data}),c.next=10;break;case 7:c.prev=7,c.t0=c.catch(0),a.push("/dashboard");case 10:case"end":return c.stop()}}),null,null,[[0,7]])}},updateProjectTask:function(e,t,a,r){return function(n){return v.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,v.a.awrap(b.a.put("/backlog/".concat(e,"/").concat(t),a));case 3:r.push("/projectBoard/".concat(e)),n({type:E,payload:{}}),c.next=10;break;case 7:c.prev=7,c.t0=c.catch(0),n({type:E,payload:c.t0.response.data});case 10:case"end":return c.stop()}}),null,null,[[0,7]])}}})(le),ue=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return U(),n.a.createElement("div",{className:"landing"},n.a.createElement("div",{className:"light-overlay landing-inner text-dark"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12 text-center"},n.a.createElement("h1",{className:"display-3 mb-4"},"Personal Project Management Tool"),n.a.createElement("p",{className:"lead"},"Create your account and start working on your own Project"),n.a.createElement("hr",null),n.a.createElement(p.b,{to:"/register",className:"btn btn-lg btn-primary mr-2"},"Sign Up"),n.a.createElement(p.b,{to:"/login",className:"btn btn-lg btn-secondary mr-2"},"Login"))))))}}]),t}(r.Component),pe=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(m.a)(t).call(this))).state={username:"",name:"",password:"",confirm:"",errors:{}},e.onChange=e.onChange.bind(Object(X.a)(e)),e.onSubmit=e.onSubmit.bind(Object(X.a)(e)),e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"onChange",value:function(e){this.setState(Object(H.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){e.preventDefault();var t={username:this.state.username,name:this.state.name,password:this.state.password,confirm:this.state.confirm};this.props.createNewUser(t,this.props.history)}},{key:"componentDidMount",value:function(){this.props.security.validToken&&this.props.history.push("/dashboard")}},{key:"componentWillReceiveProps",value:function(e){e.errors&&this.setState({errors:e.errors})}},{key:"render",value:function(){U();var e=this.state.errors;return n.a.createElement("div",{className:"register"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-8 m-auto"},n.a.createElement("h1",{className:"display-4 text-center"},"Sign Up"),n.a.createElement("p",{className:"lead text-center"},"Create your Account"),n.a.createElement("form",{onSubmit:this.onSubmit},n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",className:V()("form-control form-control-lg",{"is-invalid":e.name}),placeholder:"Full Name",name:"name",value:this.state.name,onChange:this.onChange}),e.name&&n.a.createElement("div",{className:"invalid-feedback"},e.name," ")),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"email",className:V()("form-control form-control-lg",{"is-invalid":e.username}),placeholder:"Email Address(Username)",name:"username",value:this.state.username,onChange:this.onChange}),e.username&&n.a.createElement("div",{className:"invalid-feedback"},e.username," ")),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"password",className:V()("form-control form-control-lg",{"is-invalid":e.password}),placeholder:"Password",name:"password",value:this.state.password,onChange:this.onChange}),e.password&&n.a.createElement("div",{className:"invalid-feedback"},e.password," ")),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"password",className:V()("form-control form-control-lg",{"is-invalid":e.confirm}),placeholder:"Confirm Password",name:"confirm",value:this.state.confirm,onChange:this.onChange}),e.confirm&&n.a.createElement("div",{className:"invalid-feedback"},e.confirm," ")),n.a.createElement("input",{type:"submit",className:"btn btn-info btn-block mt-4"}))))))}}]),t}(r.Component),de=Object(d.b)((function(e){return{errors:e.errors,security:e.security}}),{createNewUser:function(e,t){return function(a){return v.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,v.a.awrap(b.a.post("/users/register",e));case 3:t.push("/login"),a({type:E,payload:{}}),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),a({type:E,payload:r.t0.response.data});case 10:case"end":return r.stop()}}),null,null,[[0,7]])}}})(pe),he=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(m.a)(t).call(this))).state={username:"",password:"",errors:{}},e.onSubmit=e.onSubmit.bind(Object(X.a)(e)),e.onChange=e.onChange.bind(Object(X.a)(e)),e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"onChange",value:function(e){this.setState(Object(H.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){e.preventDefault();var t={username:this.state.username,password:this.state.password};this.props.login(t)}},{key:"componentWillReceiveProps",value:function(e){e.security.validToken&&this.props.history.push("/dashboard"),e.errors&&this.setState({errors:e.errors})}},{key:"render",value:function(){U();var e=this.state.errors;return n.a.createElement("div",{className:"login"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-8 m-auto"},n.a.createElement("h1",{className:"display-4 text-center"},"Log In"),n.a.createElement("form",{onSubmit:this.onSubmit},n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"email",className:V()("form-control form-control-lg",{"is-invalid":e.username}),placeholder:"Email Address",name:"username",value:this.state.username,onChange:this.onChange}),e.username&&n.a.createElement("div",{className:"invalid-feedback"},e.username)),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"password",className:V()("form-control form-control-lg",{"is-invalid":e.password}),placeholder:"Password",name:"password",value:this.state.password,onChange:this.onChange}),e.password&&n.a.createElement("div",{className:"invalid-feedback"},e.password)),n.a.createElement("input",{type:"submit",className:"btn btn-info btn-block mt-4"}))))))}}]),t}(r.Component),ve=Object(d.b)((function(e){return{security:e.security,errors:e.errors}}),{login:function(e){return function(t){var a,r,n;return v.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,v.a.awrap(b.a.post("/users/login",e));case 3:a=c.sent,r=a.data.token,localStorage.setItem("jwtToken",r),G(r),n=L()(r),t({type:"SET_CURRENT_USER",payload:n}),c.next=14;break;case 11:c.prev=11,c.t0=c.catch(0),t({type:E,payload:c.t0.response.data});case 14:case"end":return c.stop()}}),null,null,[[0,11]])}}})(he),fe=a(45),be=Object(d.b)((function(e){return{security:e.security}}))((function(e){var t=e.component,a=e.security,r=Object(fe.a)(e,["component","security"]),c=Date.now();return c=(c=c.toString()).slice(0,-3),c=parseInt(c),a.user.exp<c&&(R.dispatch(M()),window.location.href="/login"),n.a.createElement(K.b,Object.assign({},r,{render:function(e){return!0===a.validToken?n.a.createElement(t,e):n.a.createElement(K.a,{to:"/login"})}}))})),Ee=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={rendered:e.rendered},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){}},{key:"componentWillReceiveProps",value:function(e){this.setState({rendered:e.rendered})}},{key:"render",value:function(){return!1===this.state.rendered?n.a.createElement("div",{class:"d-flex flex-column  align-items-center"},n.a.createElement("h1",{class:"errormsg d-flex"},"404"),n.a.createElement("h4",{class:"errormsg d-flex pb-5"},"The page you are looking for doesnt exist"),n.a.createElement("div",{class:"notFoundPic"})):n.a.createElement("div",null)}}]),t}(r.Component),je=Object(d.b)((function(e){return{rendered:e.rendered}}))(Ee),ge=localStorage.jwtToken;if(ge){G(ge);var ye=L()(ge);R.dispatch({type:"SET_CURRENT_USER",payload:ye});var Ne=Date.now();Ne=(Ne=Ne.toString()).slice(0,-3),Ne=parseInt(Ne),ye.exp<Ne&&(R.dispatch(M()),window.location.href="/")}var ke=function(){return n.a.createElement(d.a,{store:R},n.a.createElement(p.a,null,n.a.createElement("div",{className:"App"},n.a.createElement(W,null),n.a.createElement(K.b,{exact:!0,path:"/",component:ue}),n.a.createElement(K.b,{exact:!0,path:"/register",component:de}),n.a.createElement(K.b,{exact:!0,path:"/login",component:ve}),n.a.createElement(K.d,null,n.a.createElement(be,{exact:!0,path:"/dashboard",component:B}),n.a.createElement(be,{exact:!0,path:"/addProject",component:$}),n.a.createElement(be,{exact:!0,path:"/updateProject/:id",component:Y}),n.a.createElement(be,{exact:!0,path:"/projectBoard/:id",component:ne}),n.a.createElement(be,{exact:!0,path:"/addProjectTask/:id",component:ie}),n.a.createElement(be,{exact:!0,path:"/updateProjectTask/:backlog_id/:task_id",component:me})),n.a.createElement(K.b,{exact:!0,path:"*",component:je}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(ke,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[46,1,2]]]);
//# sourceMappingURL=main.c2126dcc.chunk.js.map