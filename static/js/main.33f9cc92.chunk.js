(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(22)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(8),u=n.n(c),s=n(6),o=n(1),i=n.n(o),m=n(2),l=n(3),p=(n(15),n(16),n(17),function(e){var t=e.posts,n=e.onSelect,c=Object(a.useState)(0),u=Object(l.a)(c,2),s=u[0],o=u[1];return r.a.createElement("div",{className:"PostsList"},r.a.createElement("h2",null,"Posts:"),r.a.createElement("ul",{className:"PostsList__list"},t.map((function(e){var t=e.userId,a=e.title,c=e.id;return r.a.createElement("li",{key:c,className:"PostsList__item"},r.a.createElement("div",null,r.a.createElement("b",null,"[User #".concat(t,"]: ")),a),r.a.createElement("button",{type:"button",className:"PostsList__button button",onClick:function(){return function(e){if(s===e)return n(0),void o(0);o(e),n(e)}(c)}},c===s?"Close":"Open"))}))))}),f=(n(18),function(e){var t=e.postId,n=e.createComment,c=Object(a.useState)(""),u=Object(l.a)(c,2),s=u[0],o=u[1],i=Object(a.useState)(""),m=Object(l.a)(i,2),p=m[0],f=m[1],b=Object(a.useState)(""),d=Object(l.a)(b,2),v=d[0],E=d[1];return r.a.createElement("form",{className:"NewCommentForm",onSubmit:function(e){e.preventDefault(),n(s,p,v,t),o(""),f(""),E("")}},r.a.createElement("div",{className:"form-field"},r.a.createElement("input",{value:s,onChange:function(e){return function(e){var t=e.target.value;o(t)}(e)},type:"text",name:"name",placeholder:"Your name",className:"NewCommentForm__input"})),r.a.createElement("div",{className:"form-field"},r.a.createElement("input",{value:p,onChange:function(e){return function(e){var t=e.target.value;f(t)}(e)},type:"text",name:"email",placeholder:"Your email",className:"NewCommentForm__input"})),r.a.createElement("div",{className:"form-field"},r.a.createElement("textarea",{value:v,onChange:function(e){return function(e){var t=e.target.value;E(t)}(e)},name:"body",placeholder:"Type comment here",className:"NewCommentForm__input"})),r.a.createElement("button",{type:"submit",className:"NewCommentForm__submit-button button"},"Add a comment"))}),b=(n(19),function(e){var t=e.comment,n=e.onDeleteComment;return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{type:"button",className:"PostDetails__remove-button button",onClick:function(){n(t.id)}},"X"),r.a.createElement("p",null,t.body))}),d=(n(20),function(e){var t=e.post,n=e.comments,c=e.onDeleteComment,u=e.onLoadComments,s=e.onAddComment,o=Object(a.useState)(!1),i=Object(l.a)(o,2),m=i[0],p=i[1],d=t.body,v=t.id,E=function(){u(v)};return Object(a.useEffect)((function(){p(!1)}),[v]),Object(a.useEffect)((function(){return E()}),[]),r.a.createElement("div",{className:"PostDetails"},r.a.createElement("h2",null,"Post details:"),r.a.createElement("section",{className:"PostDetails__post"},r.a.createElement("p",null,d)),r.a.createElement("section",{className:"PostDetails__comments"},r.a.createElement("button",{type:"button",className:"button",onClick:function(){p((function(e){return!e})),E()}},"".concat(m?"Show":"Hide"," ").concat(n.length," comments")),!m&&r.a.createElement("ul",{className:"PostDetails__list"},n.map((function(e){return r.a.createElement("li",{key:e.id,className:"PostDetails__list-item"},r.a.createElement(b,{comment:e,onDeleteComment:c}))})))),r.a.createElement("section",null,r.a.createElement("div",{className:"PostDetails__form-wrapper"},r.a.createElement(f,{postId:v,createComment:s}))))}),v=(n(21),function(){return r.a.createElement("div",{className:"Loader"},r.a.createElement("div",{className:"Loader__content"}))}),E=function(){var e=Object(m.a)(i.a.mark((function e(t,n){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://mate-api.herokuapp.com").concat(t),n);case 2:if((a=e.sent).ok){e.next=5;break}throw new Error("".concat(a.status," - ").concat(a.statusText));case 5:return e.abrupt("return",a.json());case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),h=function(){var e=Object(m.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",E("/posts"));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(m.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",E("/posts/".concat(t)));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(){var e=Object(m.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",E("/comments"));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),_=function(){var e=Object(m.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",E("/comments/".concat(t),{method:"DELETE"}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(m.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",E("/comments",{method:"POST",body:JSON.stringify(t)}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(m.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",E("/users"));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],c=t[1],u=Object(a.useState)([]),o=Object(l.a)(u,2),f=o[0],b=o[1],E=Object(a.useState)(0),y=Object(l.a)(E,2),x=y[0],k=y[1],C=Object(a.useState)(!1),S=Object(l.a)(C,2),P=S[0],g=S[1],D=Object(a.useState)([]),A=Object(l.a)(D,2),L=A[0],I=A[1],F=Object(a.useState)(!1),T=Object(l.a)(F,2),J=T[0],Y=T[1],B=Object(a.useState)(0),H=Object(l.a)(B,2),U=H[0],X=H[1];Object(a.useEffect)((function(){K(),Q()}),[]),Object(a.useEffect)((function(){G()}),[]),Object(a.useEffect)((function(){M()}),[U]);var q=function(){var e=Object(m.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_(t);case 2:return e.next=4,G(x.id);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),z=function(){var e=Object(m.a)(i.a.mark((function e(t,n,a,r){var c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t&&n&&a){e.next=2;break}return e.abrupt("return");case 2:return c={name:t,email:n,body:a,postId:r},e.next=5,w(c);case 5:return e.next=7,G(r);case 7:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),G=function(){var e=Object(m.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j();case 2:n=e.sent,I(Object(s.a)(n.data).filter((function(e){return e.postId===t})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),K=function(){var e=Object(m.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Y(!0),e.next=3,N();case 3:t=e.sent,Y(!1),b(t.data);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),M=function(){var e=Object(m.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h();case 2:t=e.sent,c(0===U?t.data:Object(s.a)(t.data).filter((function(e){return e.userId===U})));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Q=function(){var e=Object(m.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==t){e.next=3;break}return g(!1),e.abrupt("return");case 3:return e.next=5,O(t);case 5:n=e.sent,g(!0),k(n.data);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App__header"},r.a.createElement("label",null,"Select a user: \xa0",r.a.createElement("select",{value:U,onChange:function(e){var t=e.target;return X(+t.value)},className:"App__user-selector"},r.a.createElement("option",{value:"0"},"All users"),f.map((function(e){return r.a.createElement("option",{value:e.id,key:e.id},e.name)}))))),r.a.createElement("main",{className:"App__main"},r.a.createElement("div",{className:"App__sidebar"},n.length||J?r.a.createElement(p,{posts:n,onSelect:Q}):r.a.createElement("div",{className:"PostsList__item"},"No posts yet"),J&&r.a.createElement(v,null)),P&&x&&r.a.createElement("div",{className:"App__content"},r.a.createElement(d,{post:x,comments:L,onLoadComments:G,onDeleteComment:q,onAddComment:z}))))};u.a.render(r.a.createElement(y,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.33f9cc92.chunk.js.map