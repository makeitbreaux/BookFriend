(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{143:function(e,t,a){e.exports=a(285)},148:function(e,t,a){},150:function(e,t,a){},158:function(e,t,a){},175:function(e,t,a){},179:function(e,t){},181:function(e,t){},194:function(e,t){},196:function(e,t){},224:function(e,t){},226:function(e,t){},227:function(e,t){},232:function(e,t){},234:function(e,t){},253:function(e,t){},265:function(e,t){},268:function(e,t){},285:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(136),c=a.n(s),l=(a(148),a(3)),o=a.n(l),m=a(6),u=a(4),i=a(8);var p=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=localStorage.getItem(e)||t,r=Object(n.useState)(a),s=Object(u.a)(r,2),c=s[0],l=s[1];return Object(n.useEffect)((function(){console.debug("hooks useLocalStorage useEffect","item=",c),null===c?localStorage.removeItem(e):localStorage.setItem(e,c)}),[e,c]),[c,l]},f=r.a.createContext();a(150);var d=function(e){var t=e.logout,a=Object(n.useContext)(f).currentUser;return console.debug("Navigation","currentUser=",a),r.a.createElement("nav",{className:"Navigation navbar navbar-dark bg-dark navbar-expand-md"},r.a.createElement("img",{src:"bookfriendimg.png",width:"100",height:"100",className:"d-inline-block align-top",alt:""}),r.a.createElement(i.b,{className:"navbar-brand",to:"/"},"BookFriend"),a?r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item mr-4"},r.a.createElement(i.c,{className:"nav-link",to:"/authors"},"Authors")),r.a.createElement("li",{className:"nav-item mr-4"},r.a.createElement(i.c,{className:"nav-link",to:"/works"},"Works")),r.a.createElement("li",{className:"nav-item mr-4"},r.a.createElement(i.c,{className:"nav-link",to:"/profile"},"Profile")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(i.b,{className:"nav-link",to:"/",onClick:t},"Log out ",a.first_name||a.username))):r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item mr-4"},r.a.createElement(i.c,{className:"nav-link",to:"/login"},"Login")),r.a.createElement("li",{className:"nav-item mr-4"},r.a.createElement(i.c,{className:"nav-link",to:"/signup"},"Sign Up"))))},b=a(5);a(158);var g=function(){var e=Object(n.useContext)(f).currentUser;return console.debug("Homepage","currentUser=",e),r.a.createElement("div",{className:"Homepage"},r.a.createElement("div",{className:"container text-center"},r.a.createElement("h1",{className:"mb-4 font-weight-bold"},"BookFriend"),r.a.createElement("img",{className:"mx-auto h-30 p-0 m-0 pt-0",src:"./bookfriendimg1.png",alt:"BookFriend"}),r.a.createElement("p",{className:"lead"},"Search for your favorite authors and books information."),e?r.a.createElement("h2",null,"Welcome Back, ",e.firstName||e.username,"! ",r.a.createElement("div",null,r.a.createElement(i.b,{className:"btn btn-info font-weight-bold mr-3",to:"/authors"},"Authors "),r.a.createElement(i.b,{className:"btn btn-info font-weight-bold mr-3",to:"/works"}," Works"))):r.a.createElement("p",null,r.a.createElement(i.b,{className:"btn btn-primary font-weight-bold mr-3",to:"/login"},"Log in"),r.a.createElement(i.b,{className:"btn btn-primary font-weight-bold mr-3",to:"/signup"},"Sign up"))))},v=a(19),E=a(11);var h=function(e){var t=e.type,a=void 0===t?"danger":t,n=e.messages,s=void 0===n?[]:n;return console.debug("Alert","type=",a,"messages=",s),r.a.createElement("div",{className:"alert alert-".concat(a),role:"alert"},s.map((function(e){return r.a.createElement("p",{className:"mb-0 small",key:e},e)})))};var N=function(e){var t=e.login,a=Object(b.g)(),s=Object(n.useState)({username:"",password:""}),c=Object(u.a)(s,2),l=c[0],i=c[1],p=Object(n.useState)([]),f=Object(u.a)(p,2),d=f[0],g=f[1];function N(e){return x.apply(this,arguments)}function x(){return(x=Object(m.a)(o.a.mark((function e(n){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,t(l);case 3:(r=e.sent).success?a.push("/"):g(r.errors);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(e){var t=e.target,a=t.name,n=t.value;i((function(e){return Object(E.a)(Object(E.a)({},e),{},Object(v.a)({},a,n))}))}return console.debug("LoginForm","login=",typeof t,"formData=",l,"formErrors",d),r.a.createElement("div",{className:"LoginForm"},r.a.createElement("div",{className:"container col-md-6 offset-md-3 col-lg-4 offset-lg-4"},r.a.createElement("h3",{className:"mb-3"},"Log In"),r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:N},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Username"),r.a.createElement("input",{name:"username",className:"form-control",value:l.username,onChange:y,autoComplete:"username",required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Password"),r.a.createElement("input",{type:"password",name:"password",className:"form-control",value:l.password,onChange:y,autoComplete:"current-password",required:!0})),d.length?r.a.createElement(h,{type:"danger",messages:d}):null,r.a.createElement("button",{className:"btn btn-primary float-right",onSubmit:N},"Submit"))))))},x=a(139),y=a(140),j=a(141),O=a.n(j),k=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_BASE_URL||"https://book-friend.herokuapp.com",w=function(){function e(){Object(x.a)(this,e)}return Object(y.a)(e,null,[{key:"request",value:function(){var t=Object(m.a)(o.a.mark((function t(a){var n,r,s,c,l,m,u=arguments;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=u.length>1&&void 0!==u[1]?u[1]:{},r=u.length>2&&void 0!==u[2]?u[2]:"get",console.debug("API Call:",a,n,r),s="".concat(k,"/").concat(a),c={Authorization:"Bearer ".concat(e.token)},l="get"===r?n:{},t.prev=6,t.next=9,O()({url:s,method:r,data:n,params:l,headers:c});case 9:return t.abrupt("return",t.sent.data);case 12:throw t.prev=12,t.t0=t.catch(6),console.error("API Error:",t.t0.message),m=t.t0.response.data.error,Array.isArray(m)?m:[m];case 17:case"end":return t.stop()}}),t,null,[[6,12]])})));return function(e){return t.apply(this,arguments)}}()},{key:"getCurrentUser",value:function(){var e=Object(m.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.request("users/".concat(t));case 2:return a=e.sent,e.abrupt("return",a.user);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"login",value:function(){var e=Object(m.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.request("auth/token",t,"post");case 2:return a=e.sent,e.abrupt("return",a.token);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"signup",value:function(){var e=Object(m.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.request("auth/register",t,"post");case 2:return a=e.sent,e.abrupt("return",a.token);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"saveProfile",value:function(){var e=Object(m.a)(o.a.mark((function e(t,a){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.request("users/".concat(t),a,"patch");case 2:return n=e.sent,e.abrupt("return",n.user);case 4:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()}]),e}();var S=function(){var e=Object(n.useContext)(f),t=e.currentUser,a=e.setCurrentUser,s=Object(n.useState)({firstName:t.firstName,lastName:t.lastName,email:t.email,username:t.username,password:""}),c=Object(u.a)(s,2),l=c[0],i=c[1],p=Object(n.useState)([]),d=Object(u.a)(p,2),b=d[0],g=d[1],N=Object(n.useState)(!1),x=Object(u.a)(N,2),y=x[0],j=x[1];function O(){return(O=Object(m.a)(o.a.mark((function e(t){var n,r,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={firstName:l.firstName,lastName:l.lastName,email:l.email,password:l.password},r=l.username,e.prev=3,e.next=6,w.saveProfile(r,n);case 6:s=e.sent,e.next=14;break;case 9:return e.prev=9,e.t0=e.catch(3),g(e.t0),e.abrupt("return");case 14:i((function(e){return Object(E.a)(Object(E.a)({},e),{},{password:""})})),g([]),j(!0),a(s);case 18:case"end":return e.stop()}}),e,null,[[3,9]])})))).apply(this,arguments)}function k(e){var t=e.target,a=t.name,n=t.value;i((function(e){return Object(E.a)(Object(E.a)({},e),{},Object(v.a)({},a,n))})),g([])}return console.debug("ProfileForm","currentUser=",t,"formData=",l,"formErrors=",b,"saveConfirmed=",y),r.a.createElement("div",{className:"col-md-6 col-lg-4 offset-md-3 offset-lg-4"},r.a.createElement("h3",null,"Profile"),r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Username"),r.a.createElement("p",{className:"form-control-plaintext"},l.username)),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"First Name"),r.a.createElement("input",{name:"firstName",className:"form-control",value:l.firstName,onChange:k})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Last Name"),r.a.createElement("input",{name:"lastName",className:"form-control",value:l.lastName,onChange:k})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Email"),r.a.createElement("input",{name:"email",className:"form-control",value:l.email,onChange:k})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Confirm password to make changes:"),r.a.createElement("input",{type:"password",name:"password",className:"form-control",value:l.password,onChange:k})),b.length?r.a.createElement(h,{type:"danger",messages:b}):null,y?r.a.createElement(h,{type:"success",messages:["Updated successfully."]}):null,r.a.createElement("button",{className:"btn btn-primary btn-block mt-4",onClick:function(e){return O.apply(this,arguments)}},"Save Changes")))))};var C=function(e){var t=e.signup,a=Object(b.g)(),s=Object(n.useState)({username:"",password:"",firstName:"",lastName:"",email:""}),c=Object(u.a)(s,2),l=c[0],i=c[1],p=Object(n.useState)([]),f=Object(u.a)(p,2),d=f[0],g=f[1];function N(){return(N=Object(m.a)(o.a.mark((function e(n){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,t(l);case 3:(r=e.sent).success?a.push("/"):g(r.errors);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e){var t=e.target,a=t.name,n=t.value;i((function(e){return Object(E.a)(Object(E.a)({},e),{},Object(v.a)({},a,n))}))}return console.debug("SignupForm","signup=",typeof t,"formData=",l,"formErrors=",d),r.a.createElement("div",{className:"SignupForm"},r.a.createElement("div",{className:"container col-md-6 offset-md-3 col-lg-4 offset-lg-4"},r.a.createElement("h2",{className:"mb-3"},"Sign Up"),r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:function(e){return N.apply(this,arguments)}},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Username"),r.a.createElement("input",{name:"username",className:"form-control",value:l.username,onChange:x})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Password"),r.a.createElement("input",{type:"password",name:"password",className:"form-control",value:l.password,onChange:x})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"First name"),r.a.createElement("input",{name:"firstName",className:"form-control",value:l.firstName,onChange:x})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Last name"),r.a.createElement("input",{name:"lastName",className:"form-control",value:l.lastName,onChange:x})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Email"),r.a.createElement("input",{type:"email",name:"email",className:"form-control",value:l.email,onChange:x})),d.length?r.a.createElement(h,{type:"danger",messages:d}):null,r.a.createElement("button",{type:"submit",className:"btn btn-primary float-right"},"Submit"))))))};var _=function(e){var t=e.exact,a=e.path,s=e.children,c=Object(n.useContext)(f).currentUser;return console.debug("PrivateRoute","exact=",t,"path=",a,"currentUser=",c),c?r.a.createElement(b.b,{exact:t,path:a},s):r.a.createElement(b.a,{to:"/login"})};var U=function(e){var t=e.authorName,a=e.birthDate,n=e.topWork,s=e.topSubjects;return r.a.createElement("div",{className:"bg-white shadow overflow-hidden sm:rounded-lg"},r.a.createElement("div",{className:"px-4 py-5 sm:px-6"},r.a.createElement("h3",{className:"text-lg leading-6 font-medium text-gray-900"},"Author Information")),r.a.createElement("div",{className:"border-t border-gray-200"},r.a.createElement("dl",null,r.a.createElement("div",{className:"bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},r.a.createElement("dt",{className:"text-sm font-medium text-gray-500"},"Author Name"),r.a.createElement("dd",{className:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},t)),r.a.createElement("div",{className:"bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},r.a.createElement("dt",{className:"text-sm font-medium text-gray-500"},"Date of Birth"),r.a.createElement("dd",{className:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},a)),r.a.createElement("div",{className:"bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},r.a.createElement("dt",{className:"text-sm font-medium text-gray-500"},"Top Work"),r.a.createElement("dd",{className:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},n)),r.a.createElement("div",{className:"bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},r.a.createElement("dt",{className:"text-sm font-medium text-gray-500"},"Top Subjects"),r.a.createElement("dd",{className:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},s)))))},A=function(){var e=Object(n.useState)({first_name:"",last_name:""}),t=Object(u.a)(e,2),a=t[0],s=t[1],c=Object(n.useState)(""),l=Object(u.a)(c,2),i=l[0],p=l[1],f=Object(n.useState)(""),d=Object(u.a)(f,2),b=d[0],g=d[1],h=Object(n.useState)(""),N=Object(u.a)(h,2),x=N[0],y=N[1],j=Object(n.useState)(""),O=Object(u.a)(j,2),k=O[0],w=O[1],S=r.a.useState(!1),C=Object(u.a)(S,2),_=C[0],A=C[1],L=a.first_name,P=a.last_name,D=function(){return r.a.createElement("div",{id:"results",className:"search-results"},r.a.createElement(U,{authorName:i,birthDate:b,topWork:x,topSubjects:k}))},W=function(e){s(Object(E.a)(Object(E.a)({},a),{},Object(v.a)({},e.target.name,e.target.value)))},F=function(){var e=Object(m.a)(o.a.mark((function e(t){var n,r,s,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,n=a.first_name,r=a.last_name,e.next=5,fetch("https://openlibrary.org/search/authors.json?q="+"".concat(n)+"%20"+"".concat(r),{method:"GET"});case 5:return s=e.sent,e.next=8,s.json();case 8:c=e.sent,p(c.docs[0].name),g(c.docs[0].birth_date),y(c.docs[0].top_work),w(c.docs[0].top_subjects),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(1),console.error(e.t0);case 18:case"end":return e.stop()}}),e,null,[[1,15]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"col-md-6 col-lg-4 offset-md-3 offset-lg-4"},r.a.createElement("h1",{className:"text-center text-lg leading-6 font-medium px-4 py-5 "},"Search for Author Information"),r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:F},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"First Name"),r.a.createElement("input",{type:"text",name:"first_name",placeholder:"First Name",value:L,onChange:function(e){return W(e)},className:"form-control"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Last Name"),r.a.createElement("input",{type:"text",name:"last_name",placeholder:"Last Name",value:P,onChange:function(e){return W(e)},className:"form-control"})),r.a.createElement("div",{className:"d-grid gap-2"},r.a.createElement("button",{type:"submit",onClick:function(){return A(!0)},className:"btn btn-info btn-block mt-4"}," Search for Author Information "),_?r.a.createElement(D,null):null)))))};var L=function(e){var t=e.name,a=e.works;return r.a.createElement("div",{className:"bg-white shadow overflow-hidden sm:rounded-lg"},r.a.createElement("div",{className:"px-4 py-5 sm:px-6"},r.a.createElement("h3",{className:"text-lg leading-6 font-medium text-gray-900"},"Work Information")),r.a.createElement("div",{className:"border-t border-gray-200"},r.a.createElement("dl",null,r.a.createElement("div",{className:"bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},r.a.createElement("dt",{className:"text-sm font-medium text-gray-500"},"Author Name"),r.a.createElement("dd",{className:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},t)),r.a.createElement("div",{className:"bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},r.a.createElement("dt",{className:"text-sm font-medium text-gray-500"},"Works"),a.map((function(e){return r.a.createElement("div",{key:e},r.a.createElement("ul",{className:"list-disc"},r.a.createElement("li",{key:e.toString()},r.a.createElement("dd",{className:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},e.title))))}))))))},P=function(){var e=Object(n.useState)({first_name:"",last_name:""}),t=Object(u.a)(e,2),a=t[0],s=t[1],c=Object(n.useState)([]),l=Object(u.a)(c,2),i=l[0],p=l[1],f=Object(n.useState)(""),d=Object(u.a)(f,2),b=d[0],g=d[1],h=Object(n.useState)(""),N=Object(u.a)(h,2),x=N[0],y=N[1],j=r.a.useState(!1),O=Object(u.a)(j,2),k=O[0],w=O[1],S=a.first_name,C=a.last_name,_=function(){return r.a.createElement("div",{id:"results",className:"search-results"},r.a.createElement(L,{works:i,name:b}))},U=function(e){s(Object(E.a)(Object(E.a)({},a),{},Object(v.a)({},e.target.name,e.target.value)))},A=function(){var e=Object(m.a)(o.a.mark((function e(t){var n,r,s,c,l,m,u,i,f;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,n=a.first_name,r=a.last_name,e.next=5,fetch("https://openlibrary.org/search/authors.json?q="+"".concat(n)+"%20"+"".concat(r),{method:"GET"});case 5:return s=e.sent,e.next=8,s.json();case 8:return c=e.sent,l=c.docs[0].key,m=c.docs[0].name,y(l),g(m),console.log(x),e.next=16,fetch("https://openlibrary.org/authors/".concat(l,"/works.json?language=eng"),{method:"GET"});case 16:return u=e.sent,e.next=19,u.json();case 19:i=e.sent,f=i.entries,p(f),console.log(i),e.next=28;break;case 25:e.prev=25,e.t0=e.catch(1),console.error(e.t0);case 28:case"end":return e.stop()}}),e,null,[[1,25]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"col-md-6 col-lg-4 offset-md-3 offset-lg-4"},r.a.createElement("h1",{className:"text-center text-lg leading-6 px-4 py-5 font-medium "},"Search for All Works by an Author "),r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:A},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"First Name"),r.a.createElement("input",{type:"text",name:"first_name",id:"first_name",placeholder:"First Name",value:S,onChange:function(e){return U(e)},className:"form-control"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Last Name"),r.a.createElement("input",{type:"text",name:"last_name",id:"last_name",placeholder:"Last Name",value:C,onChange:function(e){return U(e)},className:"form-control"})),r.a.createElement("div",{className:"d-grid gap-2"},r.a.createElement("button",{type:"submit",onClick:function(){return w(!0)},className:"btn btn-info btn-block mt-4"}," Search for Works of Author "),k?r.a.createElement(_,null):null)))))};var D=function(e){var t=e.login,a=e.signup;return console.debug("Routes","login=".concat(typeof t),"signup=".concat(typeof a)),r.a.createElement("div",{className:"pt-5"},r.a.createElement(b.d,null,r.a.createElement(b.b,{exact:!0,path:"/"},r.a.createElement(g,null)),r.a.createElement(b.b,{exact:!0,path:"/login"},r.a.createElement(N,{login:t})),r.a.createElement(b.b,{exact:!0,path:"/signup"},r.a.createElement(C,{signup:a})),r.a.createElement(b.b,{exact:!0,path:"/authors"},r.a.createElement(A,null)),r.a.createElement(b.b,{exact:!0,path:"/works"},r.a.createElement(P,null)),r.a.createElement(_,{path:"/profile"},r.a.createElement(S,null)),r.a.createElement(b.a,{to:"/"})))};a(175);var W=function(){return r.a.createElement("div",{className:"LoadingSpinner"},"Loading ...")},F=a(142),I=a.n(F);var T=function(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),a=t[0],s=t[1],c=Object(n.useState)(null),l=Object(u.a)(c,2),b=l[0],g=l[1],v=p("bookfriend-token"),E=Object(u.a)(v,2),h=E[0],N=E[1];function x(){return(x=Object(m.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.signup(t);case 3:return a=e.sent,N(a),e.abrupt("return",{success:!0});case 8:return e.prev=8,e.t0=e.catch(0),console.error("signup failed",e.t0),e.abrupt("return",{success:!1,errors:e.t0});case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function y(){return(y=Object(m.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.login(t);case 3:return a=e.sent,N(a),e.abrupt("return",{success:!0});case 8:return e.prev=8,e.t0=e.catch(0),console.error("login failed",e.t0),e.abrupt("return",{success:!1,errors:e.t0});case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}return console.debug("App","infoLoaded=",a,"currentUser=",b,"token=",h),Object(n.useEffect)((function(){function e(){return(e=Object(m.a)(o.a.mark((function e(){var t,a,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!h){e.next=14;break}return e.prev=1,t=I.a.decode(h),a=t.username,w.token=h,e.next=6,w.getCurrentUser(a);case 6:n=e.sent,g(n),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(1),console.error("App loadUserInfo: problem loading",e.t0),g(null);case 14:s(!0);case 15:case"end":return e.stop()}}),e,null,[[1,10]])})))).apply(this,arguments)}console.debug("App useEffect loadUserInfo","token=",h),s(!1),function(){e.apply(this,arguments)}()}),[h]),a?r.a.createElement(i.a,null,r.a.createElement(f.Provider,{value:{currentUser:b,setCurrentUser:g}},r.a.createElement("div",{className:"App"},r.a.createElement(d,{logout:function(){g(null),N(null)}}),r.a.createElement(D,{login:function(e){return y.apply(this,arguments)},signup:function(e){return x.apply(this,arguments)}})))):r.a.createElement(W,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[143,1,2]]]);
//# sourceMappingURL=main.afbed17f.chunk.js.map