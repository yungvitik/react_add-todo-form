(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var s=a(4),i=a.n(s),n=a(3),r=a(5),o=a(6),c=a(9),l=a(8),d=a(1),u=a.n(d),m=(a(14),[{userId:1,id:1,title:"delectus aut autem",completed:!1},{userId:1,id:2,title:"quis ut nam facilis et officia qui",completed:!1}]),h=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",address:{street:"Kulas Light",suite:"Apt. 556",city:"Gwenborough",zipcode:"92998-3874",geo:{lat:"-37.3159",lng:"81.1496"}},phone:"1-770-736-8031 x56442",website:"hildegard.org",company:{name:"Romaguera-Crona",catchPhrase:"Multi-layered client-server neural-net",bs:"harness real-time e-markets"}},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv",address:{street:"Victor Plains",suite:"Suite 879",city:"Wisokyburgh",zipcode:"90566-7771",geo:{lat:"-43.9509",lng:"-34.4618"}},phone:"010-692-6593 x09125",website:"anastasia.net",company:{name:"Deckow-Crist",catchPhrase:"Proactive didactic contingency",bs:"synergize scalable supply-chains"}},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net",address:{street:"Douglas Extension",suite:"Suite 847",city:"McKenziehaven",zipcode:"59590-4157",geo:{lat:"-68.6102",lng:"-47.0653"}},phone:"1-463-123-4447",website:"ramiro.info",company:{name:"Romaguera-Jacobson",catchPhrase:"Face to face bifurcated interface",bs:"e-enable strategic applications"}},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org",address:{street:"Hoeger Mall",suite:"Apt. 692",city:"South Elvis",zipcode:"53919-4257",geo:{lat:"29.4572",lng:"-164.2990"}},phone:"493-170-9623 x156",website:"kale.biz",company:{name:"Robel-Corkery",catchPhrase:"Multi-tiered zero tolerance productivity",bs:"transition cutting-edge web services"}},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca",address:{street:"Skiles Walks",suite:"Suite 351",city:"Roscoeview",zipcode:"33263",geo:{lat:"-31.8129",lng:"62.5342"}},phone:"(254)954-1289",website:"demarco.info",company:{name:"Keebler LLC",catchPhrase:"User-centric fault-tolerant solution",bs:"revolutionize end-to-end systems"}},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info",address:{street:"Norberto Crossing",suite:"Apt. 950",city:"South Christy",zipcode:"23505-1337",geo:{lat:"-71.4197",lng:"71.7478"}},phone:"1-477-935-8478 x6430",website:"ola.org",company:{name:"Considine-Lockman",catchPhrase:"Synchronised bottom-line interface",bs:"e-enable innovative applications"}},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz",address:{street:"Rex Trail",suite:"Suite 280",city:"Howemouth",zipcode:"58804-1099",geo:{lat:"24.8918",lng:"21.8984"}},phone:"210.067.6132",website:"elvis.io",company:{name:"Johns Group",catchPhrase:"Configurable multimedia task-force",bs:"generate enterprise e-tailers"}},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me",address:{street:"Ellsworth Summit",suite:"Suite 729",city:"Aliyaview",zipcode:"45169",geo:{lat:"-14.3990",lng:"-120.7677"}},phone:"586.493.6943 x140",website:"jacynthe.com",company:{name:"Abernathy Group",catchPhrase:"Implemented secondary concept",bs:"e-enable extensible e-tailers"}},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io",address:{street:"Dayna Park",suite:"Suite 449",city:"Bartholomebury",zipcode:"76495-3109",geo:{lat:"24.6463",lng:"-168.8889"}},phone:"(775)976-6794 x41206",website:"conrad.com",company:{name:"Yost and Sons",catchPhrase:"Switchable contextually-based project",bs:"aggregate real-time technologies"}},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz",address:{street:"Kattie Turnpike",suite:"Suite 198",city:"Lebsackbury",zipcode:"31428-2261",geo:{lat:"-38.2386",lng:"57.2232"}},phone:"024-648-3804",website:"ambrose.net",company:{name:"Hoeger LLC",catchPhrase:"Centralized empowering task-force",bs:"target end-to-end models"}}],b=(a(15),a(7)),p=a.n(b),j=a(0),g=function(e){var t=e.status,a=e.title;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:p()("todo-list__item-status",{"todo-list__item-status--completed":t})}),Object(j.jsx)("span",{children:a})]})},y=function(e){var t=e.user;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("span",{children:["\ud83d\udc64",t.name]}),Object(j.jsxs)("span",{children:["\ud83d\udce7",t.email]}),Object(j.jsxs)("span",{children:["\ud83d\udcde",t.phone]})]})},x=function(e){var t=e.todos;return Object(j.jsx)("ul",{className:"todo-list",children:t.map((function(e){var t=e.id,a=e.completed,s=e.title,i=e.user;return i&&Object(j.jsxs)("li",{className:"todo-list__item",children:[Object(j.jsx)(g,{title:s,status:a}),Object(j.jsx)(y,{user:i})]},t)}))})},f=m.map((function(e){var t=h.find((function(t){return t.id===e.userId}));return Object.assign(e,{user:t})})),v=function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(r.a)(this,a);for(var s=arguments.length,i=new Array(s),o=0;o<s;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).state={todos:f,todoTitle:"",todoUserId:0,titleErrorVisible:!1,userErrorVisible:!1},e.addTodo=function(){var t=e.state,a=t.todoTitle,s=t.todoUserId,i=t.todos;if(""===a&&e.setState({titleErrorVisible:!0}),0===s&&e.setState({userErrorVisible:!0}),0!==s&&""!==a){var r={userId:s,id:Object(n.a)(i).sort((function(e,t){return e.id-t.id}))[0].id+1,title:a,completed:!1,user:h.find((function(e){return e.id===s}))};e.setState((function(e){return{todos:[].concat(Object(n.a)(e.todos),[r]),todoTitle:"",todoUserId:0}}))}},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.todoTitle,s=t.todoUserId,i=t.titleErrorVisible,n=t.userErrorVisible;return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h1",{children:"Add todo:"}),Object(j.jsxs)("form",{action:"#",className:"todoForm",children:[Object(j.jsxs)("div",{className:"todoForm__errors",children:[Object(j.jsx)("div",{children:i&&Object(j.jsx)("span",{className:"todoForm__error",children:"Please enter todo title --\x3e"})}),Object(j.jsx)("div",{children:n&&Object(j.jsx)("span",{className:"todoForm__error",children:"Please choose a user --\x3e"})})]}),Object(j.jsxs)("div",{className:"todoForm__elements",children:[Object(j.jsx)("input",{className:"todoForm__element",type:"text",placeholder:"Enter todo title",value:a,onChange:function(t){e.setState({todoTitle:t.target.value}),""!==a&&e.setState({titleErrorVisible:!1})}}),Object(j.jsx)("label",{htmlFor:"userId",children:Object(j.jsxs)("select",{className:"todoForm__element",name:"userId",id:"userid",value:s,onChange:function(t){return e.setState({todoUserId:parseInt(t.target.value,10),userErrorVisible:!1})},children:[Object(j.jsx)("option",{value:0,children:"Choose a user"}),h.map((function(e){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("option",{value:e.id,children:e.name})})}))]})})]}),Object(j.jsx)("button",{type:"button",onClick:this.addTodo,children:"Add"})]}),Object(j.jsx)("h1",{children:"List of todos"}),Object(j.jsx)(x,{todos:this.state.todos})]})}}]),a}(u.a.Component),O=v;i.a.render(Object(j.jsx)(O,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.5eff6193.chunk.js.map