(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{50:function(e,t,n){},51:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n.n(c),a=n(17),o=n.n(a),r=(n(50),n(21)),i=n(45),l=(n(51),n(71)),j=n(69),d=n(73),b=n(72),u=n(43),h=n(70),x=n(29),O=n(1);function m(e){return Object(O.jsx)(l.a,{collapseOnSelect:!0,bg:"dark",variant:"dark",expand:"md",children:Object(O.jsxs)(j.a,{children:[Object(O.jsx)(x.LinkContainer,{to:"/",children:Object(O.jsx)(l.a.Brand,{children:e.title})}),Object(O.jsx)(l.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(O.jsxs)(l.a.Collapse,{id:"basic-navbar-nav",children:[Object(O.jsxs)(d.a,{className:"me-auto",children:[Object(O.jsx)(x.LinkContainer,{to:"/",children:Object(O.jsx)(d.a.Link,{children:"Home"})}),Object(O.jsx)(x.LinkContainer,{to:"/about",children:Object(O.jsx)(d.a.Link,{children:"About"})})]}),Object(O.jsx)(d.a,{children:e.searchBar?Object(O.jsxs)(b.a,{className:"d-flex",children:[Object(O.jsx)(u.a,{type:"search",placeholder:"Search",className:"mr-2","aria-label":"Search",style:{marginRight:"5px"}}),Object(O.jsx)(h.a,{variant:"outline-success",children:"Search"})]}):""})]})]})})}m.defaultProps={title:"Your title here",searchBar:!0};var g=function(e){var t=e.todo,n=e.onDelete;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("div",{className:"my-3",children:[Object(O.jsxs)("h5",{children:[t.sno,") ",t.title]}),Object(O.jsxs)("p",{children:["  ",t.desc]}),Object(O.jsx)(h.a,{variant:"danger btn-sm",onClick:function(){n(t)},children:"Delete"})]}),Object(O.jsx)("hr",{})]})},p=function(e){return Object(O.jsxs)("div",{className:"container my-3",children:[Object(O.jsx)("h3",{className:"text-center my-3",children:"Todos List"}),0===e.todos.length?"No Todos to display":e.todos.map((function(t){return Object(O.jsx)(g,{todo:t,onDelete:e.onDelete},t.sno)}))]})},f=function(){return Object(O.jsx)("footer",{className:"bg-dark text-light fixed-bottom",style:{},children:Object(O.jsx)("p",{className:"text-center",children:"Copyright \xa9 MyTodoList.com"})})},v=function(e){var t=Object(c.useState)(""),n=Object(r.a)(t,2),s=n[0],a=n[1],o=Object(c.useState)(""),i=Object(r.a)(o,2),l=i[0],j=i[1];return Object(O.jsx)("div",{className:"container mt-3",children:Object(O.jsxs)(b.a,{onSubmit:function(t){t.preventDefault(),s&&l?(e.addTodo(s,l),a(""),j("")):alert("Title or Description cannot be blank")},children:[Object(O.jsxs)(b.a.Group,{className:"mb-3",controlId:"title",children:[Object(O.jsx)(b.a.Label,{children:"Todo Title"}),Object(O.jsx)(b.a.Control,{type:"text",value:s,onChange:function(e){a(e.target.value)},placeholder:"Enter Title"})]}),Object(O.jsxs)(b.a.Group,{className:"mb-3",controlId:"desc",children:[Object(O.jsx)(b.a.Label,{children:"Description"}),Object(O.jsx)(b.a.Control,{type:"text",value:l,onChange:function(e){j(e.target.value)},placeholder:"Enter Description"})]}),Object(O.jsx)(h.a,{variant:"success",type:"submit",children:"Add Todo"})]})})},S=n(22),y=n(7),T=function(){return Object(O.jsxs)("div",{children:["This is an about component",Object(O.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem, ratione! Tempore, id consequatur? Quod vero nostrum, veritatis accusantium perferendis qui quasi, doloribus ea iste maxime laboriosam animi quos iure ex modi impedit vitae quisquam!"})]})},N=n(44),C=n.n(N);var k=function(){var e;e=null===localStorage.getItem("todos")?[]:JSON.parse(localStorage.getItem("todos"));var t=Object(c.useState)(e),n=Object(r.a)(t,2),s=n[0],a=n[1];return Object(c.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(s))}),[s]),Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)(S.BrowserRouter,{children:[Object(O.jsx)(C.a,{children:Object(O.jsx)(m,{title:"My Todos",searchBar:!0})}),Object(O.jsxs)(y.g,{children:[Object(O.jsxs)(y.d,{exact:!0,path:"/",children:[Object(O.jsx)(v,{addTodo:function(e,t){var n=0===s.length?1:s[s.length-1].sno+1;console.log("I am adding this todo",n,e,t);var c={sno:n,title:e,desc:t};console.log(c),a([].concat(Object(i.a)(s),[c]))}}),Object(O.jsx)(p,{todos:s,onDelete:function(e){console.log("I am onDelete of todo",e),a(s.filter((function(t){return t!==e}))),localStorage.setItem("todos",JSON.stringify(s))}})]}),Object(O.jsx)(y.d,{path:"/about",children:Object(O.jsx)(T,{})})]}),Object(O.jsx)(f,{})]})})},L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,74)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),s(e),a(e),o(e)}))};n(66);o.a.render(Object(O.jsx)(s.a.StrictMode,{children:Object(O.jsx)(k,{})}),document.getElementById("root")),L()}},[[67,1,2]]]);
//# sourceMappingURL=main.d08730cb.chunk.js.map