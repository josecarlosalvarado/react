(this.webpackJsonpejercicio5=this.webpackJsonpejercicio5||[]).push([[0],{26:function(e,t,c){},27:function(e,t,c){},29:function(e,t,c){},30:function(e,t,c){},40:function(e,t,c){"use strict";c.r(t);var o=c(1),a=c.n(o),i=c(20),n=c.n(i),r=(c(26),c(10)),s=c(2),l=(c(27),c(0));function d(e){var t=e.imagen,c=e.title,o=e.textoBoton,a=e.parrafo,i=e.href;return Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"card w-50 m-auto",children:[Object(l.jsx)("img",{className:"card-img-top",src:t,alt:"Card image cap"}),Object(l.jsxs)("div",{className:"card-body",children:[Object(l.jsx)("h5",{className:"card-title",children:c}),Object(l.jsx)("p",{className:"card-text",children:a}),Object(l.jsx)("a",{href:i,className:"btn btn-primary",children:o})]})]})})}var j=function(){return Object(l.jsx)(d,{href:"https://google.com",title:"titulo",parrafo:"lorem lorem lorem lorem lorem",textoBoton:"enviar",imagen:"https://images.pexels.com/photos/3007317/pexels-photo-3007317.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"})};function m(e){var t=e.categoria,c=e.productos;return Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{className:"bg-dark text-light",children:t}),Object(l.jsx)("ul",{className:"list-group",children:c.map((function(e){return Object(l.jsxs)("li",{className:"list-group-item bg-light ",children:[e.nombre,e.marca,",",e.modelo,"Precio:",e.precio,","]})}))})]})}function u(){var e={electronica:[{id:27,producto:"Televisor",marca:"LG",modelo:"XP7302",precio:399},{id:28,producto:"Equipo Hi-FI",marca:"Samsung",modelo:"VF235",precio:179},{id:29,producto:"Televisor",marca:"Sony",modelo:"Bravia-173",precio:498}],alimentacion:[{id:30,producto:"Galletas",marca:"Mar\xeda",precio:.9},{id:31,producto:"Ensalada",marca:"Imizurra",precio:1.3},{id:32,producto:"Patatas",marca:"McKain",precio:.9},{id:33,producto:"Pasta",marca:"Gallo",precio:.9}],mascotas:[{id:34,producto:"Croquetas para gato",marca:"Purina",precio:4.9},{id:35,producto:"Arena de gato",marca:"Limpior",precio:1.1}]};return Object(l.jsxs)("div",{children:[Object(l.jsx)(m,{categoria:"electronica",productos:e.electronica}),Object(l.jsx)(m,{categoria:"alimentacion",productos:e.alimentacion}),Object(l.jsx)(m,{categoria:"mascotas",productos:e.mascotas})]})}var b=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsx)(u,{})})},p=c(7);function x(e){var t=e.contacto,c=e.eliminar,o=function(e){return function(o){c(t.filter((function(t){return t.telefono!==e})))}};return Object(l.jsx)("div",{className:"row",children:t.map((function(e,t){return Object(l.jsxs)("ul",{className:"list-group mb-3 col-6",children:[Object(l.jsxs)("li",{className:"list-group-item active",children:["contacto ",t]}),Object(l.jsx)("li",{className:"list-group-item",children:e.nombre}),Object(l.jsx)("li",{className:"list-group-item",children:e.apellidos}),Object(l.jsx)("li",{className:"list-group-item",children:e.telefono}),Object(l.jsxs)("li",{className:"list-group-item",children:[e.direccion,", ",e.codigoPostal,", ",e.ciudad]}),Object(l.jsx)("li",{className:"list-group-item",children:Object(l.jsx)("button",{className:" btn btn-warning",onClick:o(e.telefono),children:"Eliminar"})})]},e.telefono)}))})}var h=c(9),O=c(14),f=c(17);function g(e){var t=e.setContactos,c=Object(o.useState)({nombre:"",apellidos:"",direccion:"",codigoPostal:"",telefono:"",ciudad:""}),a=Object(p.a)(c,2),i=a[0],n=a[1];function r(e){var t=e.target.id,c=e.target.value;n(Object(f.a)(Object(f.a)({},i),Object(O.a)({},t,c)))}return Object(l.jsxs)("form",{className:"form-group",onSubmit:function(e){e.preventDefault(),t((function(e){return[].concat(Object(h.a)(e),[i])})),e.target.reset()},children:[Object(l.jsx)("input",{className:"form-control mb-3",type:"text",value:i.nombre,id:"nombre",onChange:r,placeholder:"introduce el nombre"}),Object(l.jsx)("input",{className:"form-control mb-3",type:"text",value:i.apellidos,id:"apellidos",onChange:r,placeholder:"introduce los apellidos"}),Object(l.jsx)("input",{className:"form-control mb-3",type:"text",value:i.telefono,id:"telefono",onChange:r,placeholder:"introduce el telefono"}),Object(l.jsx)("input",{className:"form-control mb-3",type:"text",value:i.direccion,id:"direccion",onChange:r,placeholder:"introduce la direccion"}),Object(l.jsx)("input",{className:"form-control mb-3",type:"text",value:i.codigoPostal,id:"codigoPostal",onChange:r,placeholder:"introduce el codigo postal"}),Object(l.jsx)("input",{className:"form-control mb-3",type:"text",value:i.ciudad,id:"ciudad",onChange:r,placeholder:"introduce la ciudad"}),Object(l.jsx)("input",{type:"submit",className:"btn btn-warning",value:"Registrar"})]})}var v=function(){var e=Object(o.useState)([{nombre:"carlos",apellidos:"alvarado",direccion:"calle alvarez",ciudad:"Malaga",codigoPostal:"20465",telefono:"666666666"},{nombre:"Jose",apellidos:"gamez",direccion:"calle molina",ciudad:"madrid",codigoPostal:"45678",telefono:"777777777"},{nombre:"carlota",apellidos:"martinez",direccion:"calle larios",ciudad:"Malaga",codigoPostal:"87695",telefono:"888888888"}]),t=Object(p.a)(e,2),c=t[0],a=t[1];return Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h2",{className:"my-4",children:"Agenda"}),Object(l.jsx)(x,{contacto:c,eliminar:a}),Object(l.jsx)("h2",{className:"my-4",children:"Formulario"}),Object(l.jsx)(g,{setContactos:a})]})};c(29);function N(e){var t=e.todos,c=e.setTodos;return Object(l.jsx)("ul",{className:"list-group",children:t.map((function(e,o){return Object(l.jsxs)("li",{className:" d-flex justify-content-between list-group-item ".concat(e.completed?"completed":""),onClick:function(e){return function(e,o){if("button"!==e.target.tagName){var a=Object(h.a)(t);a[o].completed=!a[o].completed,c(a)}}(e,o)},children:[Object(l.jsxs)("span",{children:[o,": ",e.title," "]}),Object(l.jsx)("button",{className:"btn btn-danger",onClick:function(){return o=e.title,void c(t.filter((function(e){return e.title!==o})));var o},children:"X"})]})}))})}function y(e){var t=e.setTodos,c=Object(o.useState)(""),a=Object(p.a)(c,2),i=a[0],n=a[1];return Object(l.jsx)("form",{onSubmit:function(e){e.preventDefault(),t((function(e){return[{title:i,completed:!1}].concat(Object(h.a)(e))})),n("")},className:"my-4 mx-4",children:Object(l.jsx)("input",{type:"text",placeholder:"introduce un nuevo to do",className:"form-control",onChange:function(e){return n(e.target.value)},value:i})})}var C=function(){var e,t,c=Object(o.useState)([]),a=Object(p.a)(c,2),i=a[0],n=a[1];return e="https://jsonplaceholder.typicode.com/todos",t=n,Object(o.useEffect)((function(){fetch(e).then((function(e){return e.json()})).then((function(e){return t(e.slice(0,20))}))}),[]),Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h2",{children:"Todo List"}),Object(l.jsx)(y,{setTodos:n}),Object(l.jsx)(N,{todos:i,setTodos:n})]})};c(30);var P=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsxs)(r.a,{children:[Object(l.jsxs)("nav",{className:"bg-dark container mb-5 mt-3 navbar",children:[Object(l.jsx)(r.b,{exact:!0,className:"mr-5 text-light text-decoration-none",to:"/",activeClassName:"active",children:"ejercicio1"}),Object(l.jsx)(r.b,{className:"mr-5 text-light text-decoration-none",to:"/ejercicio2",activeClassName:"active",children:"ejercicio2"}),Object(l.jsx)(r.b,{className:"mr-5 text-light text-decoration-none",to:"/ejercicio3",activeClassName:"active",children:"ejercicio3"}),Object(l.jsx)(r.b,{className:"text-light text-decoration-none",to:"/ejercicio4",activeClassName:"active",children:"ejercicio4"})]}),Object(l.jsxs)(s.c,{children:[Object(l.jsx)(s.a,{exact:!0,path:"/",component:j}),Object(l.jsx)(s.a,{path:"/Ejercicio2",component:b}),Object(l.jsx)(s.a,{path:"/Ejercicio3",component:v}),Object(l.jsx)(s.a,{path:"/Ejercicio4",component:C})]})]})})};c(39);n.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(P,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.4d119765.chunk.js.map