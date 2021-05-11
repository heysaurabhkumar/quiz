(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{23:function(e,t,c){},25:function(e,t,c){},36:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),r=c(17),a=c.n(r),o=(c(23),c(24),c(25),c(3)),i=c(4),l=c(0),j=function(){return Object(l.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light fixed-top",children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)(o.b,{className:"navbar-brand",to:"/",children:"Quiz Website"}),Object(l.jsx)("div",{className:"collapse navbar-collapse",id:"navbarTogglerDemo02",children:Object(l.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(o.b,{className:"nav-link",to:"/student",children:"Student"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(o.b,{className:"nav-link",to:"/teacher",children:"Teacher"})})]})})]})})},u=function(){var e=Object(i.f)();return Object(l.jsx)("div",{className:"selector",children:"/"===e.pathname&&Object(l.jsxs)("div",{children:[Object(l.jsx)("h3",{children:"Are you a Student or Teacher?"}),Object(l.jsx)("br",{}),Object(l.jsx)(o.b,{className:"btn btn-primary",to:"/student",children:"Student"}),Object(l.jsx)(o.b,{className:"btn btn-primary",to:"/teacher",children:"Teacher"})]})})},b=c(2),d=function(){var e=Object(n.useState)(""),t=Object(b.a)(e,2),c=t[0],s=t[1],r=Object(n.useState)(""),a=Object(b.a)(r,2),j=a[0],u=a[1],d=Object(i.e)();return Object(l.jsxs)("form",{children:[Object(l.jsx)("h3",{children:"Teacher Sign In"}),Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{children:"Email address"}),Object(l.jsx)("input",{type:"email",className:"form-control",placeholder:"Enter email",onChange:function(e){s(e.target.value)},required:!0})]}),Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{children:"Password"}),Object(l.jsx)("input",{type:"password",className:"form-control",placeholder:"Enter password",onChange:function(e){u(e.target.value)},required:!0})]}),Object(l.jsx)("button",{type:"submit",className:"btn btn-primary btn-block",onClick:function(){fetch("/teacher/sign-in",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:c,password:j})}),d.push("/create-course")},children:"Submit"}),Object(l.jsxs)("p",{className:"forgot-password text-right",children:["New Teacher ",Object(l.jsx)(o.b,{to:"/teacher/sign-up",children:"Register?"})]})]})},h=function(){var e=Object(i.f)();return Object(l.jsx)(l.Fragment,{children:"/teacher"===e.pathname&&Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(d,{})})})},O=function(){var e=Object(n.useState)(""),t=Object(b.a)(e,2),c=t[0],s=t[1],r=Object(n.useState)(""),a=Object(b.a)(r,2),j=a[0],u=a[1],d=Object(i.e)();return Object(l.jsxs)("form",{children:[Object(l.jsx)("h3",{children:"Student Sign In"}),Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{children:"Email address"}),Object(l.jsx)("input",{type:"email",className:"form-control",placeholder:"Enter email",onChange:function(e){s(e.target.value)},required:!0})]}),Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{children:"Password"}),Object(l.jsx)("input",{type:"password",className:"form-control",placeholder:"Enter password",onChange:function(e){u(e.target.value)},required:!0})]}),Object(l.jsx)("button",{type:"submit",className:"btn btn-primary btn-block",onClick:function(){fetch("/student/sign-in",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:c,password:j})}),d.push("/list-courses")},children:"Submit"}),Object(l.jsxs)("p",{className:"forgot-password text-right",children:["New Student ",Object(l.jsx)(o.b,{to:"/student/sign-up",children:"Register?"})]})]})},m=function(){var e=Object(i.f)();return Object(l.jsx)(l.Fragment,{children:"/student"===e.pathname&&Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(O,{})})})},p=function(){var e=Object(n.useState)(""),t=Object(b.a)(e,2),c=t[0],s=t[1],r=Object(n.useState)(""),a=Object(b.a)(r,2),i=a[0],j=a[1],u=Object(n.useState)(""),d=Object(b.a)(u,2),h=d[0],O=d[1],m=Object(n.useState)(""),p=Object(b.a)(m,2),x=p[0],f=p[1];return Object(l.jsxs)("form",{children:[Object(l.jsx)("h3",{children:"Student Sign Up"}),Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{children:"First name"}),Object(l.jsx)("input",{type:"text",className:"form-control",placeholder:"First name",onChange:function(e){s(e.target.value)},required:!0})]}),Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{children:"Last name"}),Object(l.jsx)("input",{type:"text",className:"form-control",placeholder:"Last name",onChange:function(e){j(e.target.value)},required:!0})]}),Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{children:"Email address"}),Object(l.jsx)("input",{type:"email",className:"form-control",placeholder:"Enter email",onChange:function(e){O(e.target.value)},required:!0})]}),Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{children:"Password"}),Object(l.jsx)("input",{type:"password",className:"form-control",placeholder:"Enter password",onChange:function(e){f(e.target.value)},required:!0})]}),Object(l.jsx)("button",{type:"submit",className:"btn btn-primary btn-block",onClick:function(){fetch("/student/sign-up",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({fname:c,lname:i,email:h,password:x})})},children:"Sign Up"}),Object(l.jsxs)("p",{className:"forgot-password text-right",children:["Already registered ",Object(l.jsx)(o.b,{to:"/student/sign-in",children:"sign in?"})]})]})},x=function(){var e=Object(n.useState)(""),t=Object(b.a)(e,2),c=t[0],s=t[1],r=Object(n.useState)(""),a=Object(b.a)(r,2),i=a[0],j=a[1],u=Object(n.useState)(""),d=Object(b.a)(u,2),h=d[0],O=d[1],m=Object(n.useState)(""),p=Object(b.a)(m,2),x=p[0],f=p[1];return Object(l.jsxs)("form",{children:[Object(l.jsx)("h3",{children:"Teacher Sign Up"}),Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{children:"First name"}),Object(l.jsx)("input",{type:"text",className:"form-control",placeholder:"First name",onChange:function(e){s(e.target.value)},required:!0})]}),Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{children:"Last name"}),Object(l.jsx)("input",{type:"text",className:"form-control",placeholder:"Last name",onChange:function(e){j(e.target.value)},required:!0})]}),Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{children:"Email address"}),Object(l.jsx)("input",{type:"email",className:"form-control",placeholder:"Enter email",onChange:function(e){O(e.target.value)},required:!0})]}),Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{children:"Password"}),Object(l.jsx)("input",{type:"password",className:"form-control",placeholder:"Enter password",onChange:function(e){f(e.target.value)},required:!0})]}),Object(l.jsx)("button",{type:"submit",className:"btn btn-primary btn-block",onClick:function(){fetch("/teacher/sign-up",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({fname:c,lname:i,email:h,password:x})})},children:"Sign Up"}),Object(l.jsxs)("p",{className:"forgot-password text-right",children:["Already registered ",Object(l.jsx)(o.b,{to:"/teacher/sign-in",children:"sign in?"})]})]})},f=c(10),g=c.n(f),v=c(12),N=function(){var e,t,c=Object(i.g)().course,s=Object(n.useState)(),r=Object(b.a)(s,2),a=r[0],o=r[1],j=Object(n.useState)([]),u=Object(b.a)(j,2),d=u[0],h=u[1];Object(n.useEffect)((function(){fetch("/list-quiz?course=".concat(c),{headers:{"Content-Type":"application/json"}}).then(function(){var e=Object(v.a)(g.a.mark((function e(t){var c;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:return c=e.sent,e.next=5,h(c.questions);case 5:return e.next=7,o(c.courseTitle);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[c]);var O=Object(n.useState)(0),m=Object(b.a)(O,2),p=m[0],x=m[1],f=Object(n.useState)(!1),N=Object(b.a)(f,2),q=N[0],y=N[1],S=Object(n.useState)(0),C=Object(b.a)(S,2),k=C[0],T=C[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("center",{children:Object(l.jsx)("h2",{children:a})}),Object(l.jsx)("br",{}),Object(l.jsx)("div",{className:"app",children:q?Object(l.jsxs)("div",{className:"score-section",children:["You scored ",k," out of ",d.length]}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"question-section",children:[Object(l.jsxs)("div",{className:"question-count",children:[Object(l.jsxs)("span",{children:["Question ",p+1]}),"/",d.length]}),Object(l.jsx)("div",{className:"question-text",children:null===(e=d[p])||void 0===e?void 0:e.questionText})]}),Object(l.jsx)("div",{className:"answer-section",children:d&&(null===(t=d[p])||void 0===t?void 0:t.answerOptions.map((function(e){return Object(l.jsx)("button",{onClick:function(){return function(e){e&&T(k+1);var t=p+1;t<d.length?x(t):y(!0)}(null===e||void 0===e?void 0:e.isCorrect)},children:e.answerText})})))})]})})]})},q=function(){var e=Object(n.useState)(""),t=Object(b.a)(e,2),c=t[0],s=t[1],r=Object(n.useState)(""),a=Object(b.a)(r,2),o=a[0],i=a[1],j=Object(n.useState)(""),u=Object(b.a)(j,2),d=u[0],h=u[1],O=Object(n.useState)(!1),m=Object(b.a)(O,2),p=m[0],x=m[1],f=Object(n.useState)(""),g=Object(b.a)(f,2),v=g[0],N=g[1],q=Object(n.useState)(!1),y=Object(b.a)(q,2),S=y[0],C=y[1],k=Object(n.useState)(""),T=Object(b.a)(k,2),w=T[0],E=T[1],F=Object(n.useState)(!1),P=Object(b.a)(F,2),J=P[0],L=P[1],Q=Object(n.useState)(""),A=Object(b.a)(Q,2),z=A[0],I=A[1],U=Object(n.useState)(!1),B=Object(b.a)(U,2),D=B[0],R=B[1],G=Object(n.useState)(""),M=Object(b.a)(G,2),W=M[0],Y=M[1],H=Object(n.useState)(""),K=Object(b.a)(H,2),V=K[0],X=K[1],Z=Object(n.useState)(!1),$=Object(b.a)(Z,2),_=$[0],ee=$[1],te=Object(n.useState)(""),ce=Object(b.a)(te,2),ne=ce[0],se=ce[1],re=Object(n.useState)(!1),ae=Object(b.a)(re,2),oe=ae[0],ie=ae[1],le=Object(n.useState)(""),je=Object(b.a)(le,2),ue=je[0],be=je[1],de=Object(n.useState)(!1),he=Object(b.a)(de,2),Oe=he[0],me=he[1],pe=Object(n.useState)(""),xe=Object(b.a)(pe,2),fe=xe[0],ge=xe[1],ve=Object(n.useState)(!1),Ne=Object(b.a)(ve,2),qe=Ne[0],ye=Ne[1];return Object(l.jsxs)("form",{children:[Object(l.jsx)("h3",{children:"Create New Course"}),Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{children:"Course Title"}),Object(l.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter Course Title",onChange:function(e){s(e.target.value)},required:!0})]}),Object(l.jsx)("br",{}),Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{children:"Question 1"}),Object(l.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter Question",onChange:function(e){i(e.target.value)},required:!0})]}),Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{children:"Option 1"}),Object(l.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter Option 1",onChange:function(e){h(e.target.value)},required:!0})]}),Object(l.jsx)("div",{className:"form-group",children:Object(l.jsxs)("div",{className:"custom-control custom-checkbox",children:[Object(l.jsx)("input",{type:"checkbox",className:"custom-control-input",id:"ques1option1",onChange:function(e){return x(e.currentTarget.checked)}}),Object(l.jsx)("label",{className:"custom-control-label",htmlFor:"ques1option1",children:"Tick if ths is right option"})]})}),Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{children:"Option 2"}),Object(l.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter Option 2",onChange:function(e){N(e.target.value)},required:!0})]}),Object(l.jsx)("div",{className:"form-group",children:Object(l.jsxs)("div",{className:"custom-control custom-checkbox",children:[Object(l.jsx)("input",{type:"checkbox",className:"custom-control-input",id:"ques1option2",onChange:function(e){return C(e.currentTarget.checked)}}),Object(l.jsx)("label",{className:"custom-control-label",htmlFor:"ques1option2",children:"Tick if ths is right option"})]})}),Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{children:"Option 3"}),Object(l.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter Option 3",onChange:function(e){E(e.target.value)},required:!0})]}),Object(l.jsx)("div",{className:"form-group",children:Object(l.jsxs)("div",{className:"custom-control custom-checkbox",children:[Object(l.jsx)("input",{type:"checkbox",className:"custom-control-input",id:"ques1option3",onChange:function(e){return L(e.currentTarget.checked)}}),Object(l.jsx)("label",{className:"custom-control-label",htmlFor:"ques1option3",children:"Tick if ths is right option"})]})}),Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{children:"Option 4"}),Object(l.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter Option 4",onChange:function(e){I(e.target.value)},required:!0})]}),Object(l.jsx)("div",{className:"form-group",children:Object(l.jsxs)("div",{className:"custom-control custom-checkbox",children:[Object(l.jsx)("input",{type:"checkbox",className:"custom-control-input",id:"ques1option4",onChange:function(e){return R(e.currentTarget.checked)}}),Object(l.jsx)("label",{className:"custom-control-label",htmlFor:"ques1option4",children:"Tick if ths is right option"})]})}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{children:"Question 2"}),Object(l.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter Question",onChange:function(e){Y(e.target.value)},required:!0})]}),Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{children:"Option 1"}),Object(l.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter Option 1",onChange:function(e){X(e.target.value)},required:!0})]}),Object(l.jsx)("div",{className:"form-group",children:Object(l.jsxs)("div",{className:"custom-control custom-checkbox",children:[Object(l.jsx)("input",{type:"checkbox",className:"custom-control-input",id:"ques2option1",onChange:function(e){return ee(e.currentTarget.checked)}}),Object(l.jsx)("label",{className:"custom-control-label",htmlFor:"ques2option1",children:"Tick if ths is right option"})]})}),Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{children:"Option 2"}),Object(l.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter Option 2",onChange:function(e){se(e.target.value)},required:!0})]}),Object(l.jsx)("div",{className:"form-group",children:Object(l.jsxs)("div",{className:"custom-control custom-checkbox",children:[Object(l.jsx)("input",{type:"checkbox",className:"custom-control-input",id:"ques2option2",onChange:function(e){return ie(e.currentTarget.checked)}}),Object(l.jsx)("label",{className:"custom-control-label",htmlFor:"ques2option2",children:"Tick if ths is right option"})]})}),Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{children:"Option 3"}),Object(l.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter Option 3",onChange:function(e){be(e.target.value)},required:!0})]}),Object(l.jsx)("div",{className:"form-group",children:Object(l.jsxs)("div",{className:"custom-control custom-checkbox",children:[Object(l.jsx)("input",{type:"checkbox",className:"custom-control-input",id:"ques2option3",onChange:function(e){return me(e.currentTarget.checked)}}),Object(l.jsx)("label",{className:"custom-control-label",htmlFor:"ques2option3",children:"Tick if ths is right option"})]})}),Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{children:"Option 4"}),Object(l.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter Option 4",onChange:function(e){ge(e.target.value)},required:!0})]}),Object(l.jsx)("div",{className:"form-group",children:Object(l.jsxs)("div",{className:"custom-control custom-checkbox",children:[Object(l.jsx)("input",{type:"checkbox",className:"custom-control-input",id:"ques2option4",onChange:function(e){return ye(e.currentTarget.checked)}}),Object(l.jsx)("label",{className:"custom-control-label",htmlFor:"ques2option4",children:"Tick if ths is right option"})]})}),Object(l.jsx)("br",{}),Object(l.jsx)("button",{type:"submit",className:"btn btn-primary btn-block",onClick:function(){fetch("/create-course",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({courseTitle:c,q1:o,q1o1:d,q1o1c:p,q1o2:v,q1o2c:S,q1o3:w,q1o3c:J,q1o4:z,q1o4c:D,q2:W,q2o1:V,q2o1c:_,q2o2:ne,q2o2c:oe,q2o3:ue,q2o3c:Oe,q2o4:fe,q2o4c:qe})})},children:"Create"})]})},y=function(){var e=Object(n.useState)(),t=Object(b.a)(e,2),c=t[0],s=t[1];return Object(n.useEffect)((function(){fetch("/list-courses",{method:"GET"}).then(function(){var e=Object(v.a)(g.a.mark((function e(t){var c;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:c=e.sent,s(c);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]),Object(l.jsxs)("div",{children:[Object(l.jsx)("h3",{children:"All Courses Available"}),Object(l.jsx)("ul",{children:c&&c[0]?c.map((function(e){var t="/quiz/".concat(e.courseTitle);return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(o.b,{to:t,children:e.courseTitle})," ",Object(l.jsx)("br",{})]})})):null})]})},S=function(){return Object(l.jsxs)(o.a,{children:[Object(l.jsx)(j,{}),Object(l.jsx)(u,{}),Object(l.jsx)(i.a,{path:"/student",component:m}),Object(l.jsx)(i.a,{path:"/teacher",component:h}),Object(l.jsx)(i.a,{path:"/student/sign-up",component:p}),Object(l.jsx)(i.a,{path:"/student/sign-in",component:O}),Object(l.jsx)(i.a,{path:"/teacher/sign-up",component:x}),Object(l.jsx)(i.a,{path:"/teacher/sign-in",component:d}),Object(l.jsx)(i.a,{path:"/quiz/:course",children:Object(l.jsx)(N,{})}),Object(l.jsx)(i.a,{path:"/create-course",component:q}),Object(l.jsx)(i.a,{path:"/list-courses",component:y})]})},C=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,37)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,a=t.getTTFB;c(e),n(e),s(e),r(e),a(e)}))};a.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(S,{})}),document.getElementById("root")),C()}},[[36,1,2]]]);
//# sourceMappingURL=main.1abcc6a6.chunk.js.map