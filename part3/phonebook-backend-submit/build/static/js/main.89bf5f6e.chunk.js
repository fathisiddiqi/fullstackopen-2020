(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{14:function(e,n,t){e.exports=t(37)},19:function(e,n,t){},37:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),u=t(13),c=t.n(u),o=(t(19),t(2)),l=function(e){var n=e.filter,t=e.handleFilterChange;return r.a.createElement("div",null,"filter shown with ",r.a.createElement("input",{value:n,onChange:t}))},i=function(e){var n=e.newName,t=e.handleNameChange,a=e.newNumber,u=e.handleNumberChange,c=e.handleSubmit;return r.a.createElement("form",{onSubmit:c},r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:n,onChange:t})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{value:a,onChange:u})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add")))},d=function(e){var n=e.id,t=e.name,a=e.number,u=e.handleDelete;return r.a.createElement("div",null,t," ",a," ",r.a.createElement("button",{onClick:function(){return u(n)}},"delete"))},m=function(e){var n=e.messageType,t=e.message,a="success"===n?{color:"green",background:"lightgrey",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10}:{color:"red",background:"lightgrey",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10};return null===t?null:r.a.createElement("div",{style:a},t)},s=t(3),f=t.n(s),h="/api/persons",b=function(){return f.a.get(h).then((function(e){return e.data}))},g=function(e){return f.a.post(h,e).then((function(e){return e.data}))},p=function(e){return f.a.delete("".concat(h,"/").concat(e)).then((function(e){return e.data}))},v=function(e,n){return f.a.put("".concat(h,"/").concat(e),n).then((function(e){return e.data}))},E=function(){var e=Object(a.useState)([]),n=Object(o.a)(e,2),t=n[0],u=n[1],c=Object(a.useState)(""),s=Object(o.a)(c,2),f=s[0],h=s[1],E=Object(a.useState)(""),w=Object(o.a)(E,2),j=w[0],O=w[1],S=Object(a.useState)(""),y=Object(o.a)(S,2),C=y[0],k=y[1],N=Object(a.useState)(null),D=Object(o.a)(N,2),B=D[0],z=D[1],F=Object(a.useState)(null),I=Object(o.a)(F,2),J=I[0],L=I[1],R=Object(a.useState)(null),T=Object(o.a)(R,2),x=T[0],M=T[1];Object(a.useEffect)((function(){b().then((function(e){return u(e)}))}),[]);var P=C?t.filter((function(e){return e.name.toLowerCase().includes(C.toLowerCase())})):t,q=function(e){var n=t.find((function(n){return n.id===e}));window.confirm("Delete ".concat(n.name," ?"))&&p(e).then((function(n){u(t.filter((function(n){return n.id!==e}))),z("deleted ".concat(n.name)),M("success")})).catch((function(e){L("Information of ".concat(n.name," has already been removed from server")),M("error")}))},A=null!==B?B:J;return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(m,{message:A,messageType:x}),r.a.createElement(l,{filter:C,handleFilterChange:function(e){k(e.target.value)}}),r.a.createElement("h2",null,"add a new"),r.a.createElement(i,{newName:f,handleNameChange:function(e){var n=e.target.value;h(n)},newNumber:j,handleNumberChange:function(e){O(e.target.value)},handleSubmit:function(e){e.preventDefault();var n={name:f,number:j},a=t.find((function(e){return e.name===f}));a?window.confirm("".concat(a.name," already added to phonebook, replace the old number with a new one?"))?v(a.id,n).then((function(e){u(t.map((function(n){return n.name!==f?n:e}))),h(""),O(""),z("updated ".concat(e.name)),M("success")})):(h(""),O("")):g(n).then((function(e){u(t.concat(e)),h(""),O(""),z("added ".concat(e.name)),M("success")})).catch((function(e){L(e.response.data.error),M("error")}))}}),r.a.createElement("h2",null,"Numbers"),P.map((function(e){return r.a.createElement(d,{key:e.id,id:e.id,name:e.name,number:e.number,handleDelete:q})})))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.89bf5f6e.chunk.js.map