(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),r=a(2),c=a.n(r);a(12),a(13);function o(e){return n.a.createElement("div",null,n.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode)},n.a.createElement("div",{className:"container-fluid"},n.a.createElement("a",{className:"navbar-brand",href:"/"},e.title),n.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},n.a.createElement("span",{className:"navbar-toggler-icon"})),n.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},n.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{className:"nav-link active","aria-current":"page",href:"/"},"Home")),n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{className:"nav-link",href:"/"},"About"))),n.a.createElement("div",{className:"form-check form-switch"},n.a.createElement("input",{className:"form-check-input",onClick:e.toggleValue,type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"}),n.a.createElement("label",{className:"form-check-label text-".concat("light"===e.mode?"dark":"light"),htmlFor:"flexSwitchCheckDefault"},"Enable ","light"===e.mode?"Dark":"Light"," Mode"))))))}function s(e){const[t,a]=Object(l.useState)("");return n.a.createElement("div",null,n.a.createElement("h1",{style:{color:"light"===e.mode?"black":"white"}},e.heading),n.a.createElement("div",{className:"mb-3"},n.a.createElement("label",{htmlFor:"myInput",className:"form-label",style:{color:"light"===e.mode?"black":"white"}},"Email address"),n.a.createElement("input",{type:"email",className:"form-control",id:"myInput",placeholder:"name@example.com",style:{backgroundColor:"light"===e.mode?"white":"lightgray",color:"light"===e.mode?"black":"white"}})),n.a.createElement("div",{className:"mb-3"},n.a.createElement("label",{htmlFor:"myBox",className:"form-label",style:{color:"light"===e.mode?"black":"white"}},"Enter text"),n.a.createElement("textarea",{className:"form-control",id:"myBox",rows:"5",value:t,placeholder:"Enter text here...",onChange:e=>{a(e.target.value)},style:{backgroundColor:"light"===e.mode?"white":"lightgray",color:"light"===e.mode?"black":"white"}}),n.a.createElement("div",{className:"my-4"},n.a.createElement("button",{className:"btn btn-primary mx-1",onClick:()=>{var l=t.toUpperCase();a(l),e.showAlert("Converted to UpperCase...","success")}},"Convert to upper case"),n.a.createElement("button",{className:"btn btn-primary mx-1",onClick:()=>{var t=document.getElementById("myBox");t.select(),navigator.clipboard.writeText(t.value),e.showAlert("Copy to Clipboard...","success")}},"Copy Text"),n.a.createElement("button",{className:"btn btn-primary mx-1",onClick:()=>{let l=t.split(/[ ]+/);a(l.join(" ")),e.showAlert("Removed extra spaces from text...","success")}},"Remove Spaces"),n.a.createElement("button",{className:"btn btn-primary mx-1",onClick:()=>{a(""),e.showAlert("Text box is cleared","success")}},"Clear Text")),n.a.createElement("div",{className:"container"},n.a.createElement("h1",{style:{color:"light"===e.mode?"black":"white"}},"Your text summary"),n.a.createElement("p",{style:{color:"light"===e.mode?"black":"white"}},t.split(" ").length," words and ",t.length," characters"))))}o.defaultProps={title:"Select Navbar Name"};var m=function(e){return e.alert&&n.a.createElement("div",{class:"alert alert-".concat(e.alert.type),role:"alert"},(e=>{const t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)})(e.alert.type),": ",e.alert.msg)};var i=function(){const[e,t]=Object(l.useState)("light"),[a,r]=Object(l.useState)(null),c=(e,t)=>{r({msg:e,type:t}),setTimeout(()=>{r(null)},1500)};return n.a.createElement(n.a.Fragment,null,n.a.createElement(o,{title:"My React App",mode:e,toggleValue:()=>{"light"===e?(t("dark"),document.body.style.backgroundColor="gray",c("Dark mode has been enabled","success")):(t("light"),document.body.style.backgroundColor="white",c("Light mode has been enabled","success"))}}),n.a.createElement("div",{className:"container my-3"},n.a.createElement(m,{alert:a}),n.a.createElement(s,{heading:"Give your suggestions..",mode:e,showAlert:c})))};var d=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,15)).then(t=>{let{getCLS:a,getFID:l,getFCP:n,getLCP:r,getTTFB:c}=t;a(e),l(e),n(e),r(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(i,null))),d()},3:function(e,t,a){e.exports=a(14)}},[[3,1,2]]]);
//# sourceMappingURL=main.c8aae339.chunk.js.map