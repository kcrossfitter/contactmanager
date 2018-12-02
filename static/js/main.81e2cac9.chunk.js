(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{31:function(e,t,a){e.exports=a(64)},61:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(26),o=a.n(c),l=a(4),s=a(5),i=a(7),m=a(6),u=a(8),p=a(66),d=a(68),h=a(67),b=a(3),f=a.n(b),E=a(12),v=a(65),y=a(13),g=a.n(y),C=a(30),N=a(15),j=r.a.createContext(),O=function(e,t){switch(t.type){case"DELETE_CONTACT":return Object(N.a)({},e,{contacts:e.contacts.filter(function(e){return e.id!==t.payload})});case"ADD_CONTACT":return Object(N.a)({},e,{contacts:[t.payload].concat(Object(C.a)(e.contacts))});case"EDIT_CONTACT":return Object(N.a)({},e,{contacts:e.contacts.map(function(e){return e.id===t.payload.id?t.payload:e})});default:return e}},x=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={contacts:[],loading:!1,dispatch:function(e){return a.setState(function(t){return O(t,e)})}},a.componentDidMount=Object(E.a)(f.a.mark(function e(){var t;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.setState({loading:!0}),e.next=3,g()("https://jsonplaceholder.typicode.com/users",{method:"GET"});case 3:t=e.sent,a.setState({contacts:t.data,loading:!1});case 5:case"end":return e.stop()}},e,this)})),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return this.state.loading?r.a.createElement("h1",{className:"text-center"},"Loading..."):r.a.createElement(j.Provider,{value:this.state},this.props.children)}}]),t}(n.Component),k=j.Consumer,w=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={showContactInfo:!1,adding:!1},a.onShowClick=function(){a.setState(function(e){return{showContactInfo:!e.showContactInfo}})},a.onDeleteClick=function(){var e=Object(E.a)(f.a.mark(function e(t,a){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g()({method:"delete",url:"https://jsonplaceholder.typicode.com/users/".concat(t)});case 3:a({type:"DELETE_CONTACT",payload:t}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),a({type:"DELETE_CONTACT",payload:t});case 9:case"end":return e.stop()}},e,this,[[0,6]])}));return function(t,a){return e.apply(this,arguments)}}(),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.contact,a=t.id,n=t.name,c=t.email,o=t.phone;return r.a.createElement(k,null,function(t){var l=t.dispatch;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h4",null,n," ",r.a.createElement("i",{className:"fas fa-sort-down",style:{cursor:"pointer"},onClick:e.onShowClick}),r.a.createElement("i",{className:"fas fa-times float-right text-danger",style:{cursor:"pointer"},onClick:function(){return e.onDeleteClick(a,l)}}),r.a.createElement(v.a,{to:"/contact/edit/".concat(a)},r.a.createElement("i",{className:"fas fa-pencil-alt float-right mr-3 text-secondary"}))),e.state.showContactInfo&&r.a.createElement("ul",{className:"list-group float-none"},r.a.createElement("li",{className:"list-group-item"},"Email: ",c),r.a.createElement("li",{className:"list-group-item"},"Phone: ",o))))})}}]),t}(n.Component),S=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(k,null,function(e){var t=e.contacts;return r.a.createElement(n.Fragment,null,r.a.createElement("h3",{className:"display-4 mb-2 text-center text-danger"},"Contact List"),t.map(function(e){return r.a.createElement(w,{key:e.id,contact:e})}))})}}]),t}(n.Component),A=function(e){var t=e.branding;return r.a.createElement("nav",{className:"navbar navbar-expand-md navbar-dark bg-danger mb-3"},r.a.createElement("div",{className:"container"},r.a.createElement(v.a,{className:"navbar-brand",to:"/"},t),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navCollapse"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navCollapse"},r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(v.a,{className:"nav-link",to:"/"},r.a.createElement("i",{className:"fas fa-home"})," Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(v.a,{className:"nav-link",to:"/contact/add"},r.a.createElement("i",{className:"fas fa-plus"})," Add Contact")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(v.a,{className:"nav-link",to:"/about"},r.a.createElement("i",{className:"fas fa-question"})," About"))))))};A.defaultProps={branding:"My App"};var T=A,D=function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"},"About Contact Manager"),r.a.createElement("p",{className:"lead"},"Simple App to Manage Context"),r.a.createElement("p",{className:"text-secondary"},"Version 1.0.0"))},P=function(){return r.a.createElement("div",{className:"text-center"},r.a.createElement("h1",{className:"display-4 text-danger"},"404 Page Not Found"),r.a.createElement("p",{className:"lead"},"Sorry that page does not exist"))},q=a(14),I=a(27),M=a.n(I),_=a(28),L=a.n(_),F=function(e){var t=e.label,a=e.name,n=e.value,c=e.placeholder,o=e.type,l=e.onChange,s=e.error;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"name"},t),r.a.createElement("input",{className:L()("form-control form-control-lg",{"is-invalid":s}),type:o,name:a,id:a,placeholder:c,value:n,onChange:l}),s&&r.a.createElement("div",{className:"invalid-feedback"},s))};F.defaultProps={type:"text"};var J=F,B=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",email:"",phone:"",errors:{}},a.onChange=function(e){a.setState(Object(q.a)({},e.target.name,e.target.value))},a.onSubmit=function(){var e=Object(E.a)(f.a.mark(function e(t,n){var r,c,o,l,s;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r=a.state,c=r.name,o=r.email,l=r.phone,""!==c){e.next=5;break}return a.setState({errors:{name:"Name is required"}}),e.abrupt("return");case 5:if(""!==o){e.next=8;break}return a.setState({errors:{email:"Email is required"}}),e.abrupt("return");case 8:if(""!==l){e.next=11;break}return a.setState({errors:{phone:"Phone is required"}}),e.abrupt("return");case 11:return e.next=13,g()({method:"post",url:"https://jsonplaceholder.typicode.com/users",data:{name:c,email:o,phone:l}});case 13:s=e.sent,console.log(s.data),t({type:"ADD_CONTACT",payload:Object(N.a)({},s.data,{id:M()()})}),a.setState({name:"",email:"",phone:"",errors:{}}),a.props.history.push("/");case 18:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}(),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.name,n=t.email,c=t.phone,o=t.errors;return r.a.createElement(k,null,function(t){var l=t.dispatch;return r.a.createElement("div",{className:"col-8 mx-auto"},r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"Add Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:function(t){return e.onSubmit(l,t)}},r.a.createElement(J,{label:"Name",type:"text",name:"name",id:"name",placeholder:"Enter name...",value:a,onChange:e.onChange,error:o.name}),r.a.createElement(J,{label:"Email",type:"email",name:"email",id:"email",placeholder:"Enter email...",value:n,onChange:e.onChange,error:o.email}),r.a.createElement(J,{label:"Phone",type:"text",name:"phone",id:"phone",placeholder:"Enter phone...",value:c,onChange:e.onChange,error:o.phone}),r.a.createElement("button",{type:"submit",className:"btn btn-lg btn-block btn-secondary"},"Add Contact")))))})}}]),t}(n.Component),G=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",email:"",phone:"",errors:{}},a.componentDidMount=Object(E.a)(f.a.mark(function e(){var t,n,r,c,o,l;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.props.match.params.id,e.next=3,g()({url:"https://jsonplaceholder.typicode.com/users/".concat(t),method:"get"});case 3:n=e.sent,r=n.data,c=r.name,o=r.email,l=r.phone,a.setState({name:c,email:o,phone:l});case 7:case"end":return e.stop()}},e,this)})),a.onChange=function(e){a.setState(Object(q.a)({},e.target.name,e.target.value))},a.onSubmit=function(){var e=Object(E.a)(f.a.mark(function e(t,n){var r,c,o,l,s,i;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r=a.state,c=r.name,o=r.email,l=r.phone,s=a.props.match.params.id,""!==c){e.next=6;break}return a.setState({errors:{name:"Name is required"}}),e.abrupt("return");case 6:if(""!==o){e.next=9;break}return a.setState({errors:{email:"Email is required"}}),e.abrupt("return");case 9:if(""!==l){e.next=12;break}return a.setState({errors:{phone:"Phone is required"}}),e.abrupt("return");case 12:return e.next=14,g()({method:"put",url:"https://jsonplaceholder.typicode.com/users/".concat(s),data:{name:c,email:o,phone:l}});case 14:i=e.sent,t({type:"EDIT_CONTACT",payload:i.data}),a.setState({name:"",email:"",phone:"",errors:{}}),a.props.history.push("/");case 18:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}(),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.name,n=t.email,c=t.phone,o=t.errors;return r.a.createElement(k,null,function(t){var l=t.dispatch;return r.a.createElement("div",{className:"col-8 mx-auto"},r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"Edit Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:function(t){return e.onSubmit(l,t)}},r.a.createElement(J,{label:"Name",type:"text",name:"name",id:"name",placeholder:"Enter name...",value:a,onChange:e.onChange,error:o.name}),r.a.createElement(J,{label:"Email",type:"email",name:"email",id:"email",placeholder:"Enter email...",value:n,onChange:e.onChange,error:o.email}),r.a.createElement(J,{label:"Phone",type:"text",name:"phone",id:"phone",placeholder:"Enter phone...",value:c,onChange:e.onChange,error:o.phone}),r.a.createElement("button",{type:"submit",className:"btn btn-lg btn-block btn-secondary"},"Edit Contact")))))})}}]),t}(n.Component),H=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={title:"",body:""},a.componentDidMount=Object(E.a)(f.a.mark(function e(){var t,n;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/posts/1");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,a.setState({title:n.title,body:n.body});case 7:case"end":return e.stop()}},e,this)})),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state,t=e.title,a=e.body;return r.a.createElement("div",null,r.a.createElement("h1",null,t),r.a.createElement("p",null,a))}}]),t}(n.Component),V=(a(61),function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(x,null,r.a.createElement(p.a,{basename:"/contactmanager"},r.a.createElement("div",{className:"App"},r.a.createElement(T,{branding:"Contact Manager"}),r.a.createElement("div",{className:"container"},r.a.createElement(d.a,null,r.a.createElement(h.a,{exact:!0,path:"/",component:S}),r.a.createElement(h.a,{exact:!0,path:"/contact/add",component:B}),r.a.createElement(h.a,{exact:!0,path:"/contact/edit/:id",component:G}),r.a.createElement(h.a,{exact:!0,path:"/about",component:D}),r.a.createElement(h.a,{exact:!0,path:"/test",component:H}),r.a.createElement(h.a,{component:P}))))))}}]),t}(n.Component));o.a.render(r.a.createElement(V,null),document.getElementById("root"))}},[[31,2,1]]]);
//# sourceMappingURL=main.81e2cac9.chunk.js.map