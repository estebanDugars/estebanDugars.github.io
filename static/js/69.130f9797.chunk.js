"use strict";(self.webpackChunkblogging=self.webpackChunkblogging||[]).push([[69],{82069:function(e,n,t){function r(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}t.r(n),t.d(n,{default:function(){return b}});var s,l,a,u,i=t(70885),c=t(72791),o=t(16871),f=t(59117),d=t(15751),m=t(80184),x={loginBut:{marginLeft:"1rem"}},b=function(e){var n=e.logged,t=e.setLogged,r=(0,c.useState)(""),s=(0,i.Z)(r,2),l=s[0],a=s[1],u=(0,o.s0)();return(0,m.jsx)("main",{children:(0,m.jsx)("div",{className:"d-flex flex-column align-items-center fs-5 ",children:(0,m.jsxs)("div",{className:"text-start p-2",children:[(0,m.jsx)("h1",{children:"Page maison"}),(0,m.jsx)("div",{className:"w-100 h-10",children:(0,m.jsx)("hr",{})}),!n&&(0,m.jsxs)("form",{onSubmit:function(e){e.preventDefault(),"admin"===l?(t(!0),u("/Kanban")):a("")},children:[(0,m.jsx)("label",{htmlFor:"inputField",children:"Value :\xa0"}),(0,m.jsx)("input",{className:"my-2 form-control",type:"text",value:l,onChange:function(e){a(e.target.value)},placeholder:"admin"}),(0,m.jsxs)("p",{children:["You entered : ",l]}),(0,m.jsx)("button",{className:"btn btn-outline-secondary",type:"submit",children:"Submit"}),(0,m.jsx)("button",{className:"btn btn-outline-secondary",style:x.loginBut,type:"reset",value:"Reset",onClick:function(){return a("")},children:"Reset"})]})," ",(0,m.jsx)("br",{}),(0,m.jsx)("hr",{}),(0,m.jsx)(j,{}),(0,m.jsx)("br",{}),(0,m.jsx)("br",{}),(0,m.jsx)("br",{}),(0,m.jsx)("hr",{}),(0,m.jsx)(y,{}),(0,m.jsx)(o.j3,{})]})})})},j=function(e){var n=(0,c.useState)(""),t=(0,i.Z)(n,2),r=t[0],s=t[1],l=(0,c.useState)(""),a=(0,i.Z)(l,2),u=a[0],o=a[1],d=(0,c.useState)(1),x=(0,i.Z)(d,2),b=x[0],j=x[1],y=(0,f.createRef)(),C=(0,f.createRef)(),S=N(b);(0,c.useEffect)((function(){var e,n;2===S&&1===b&&(null===(e=y.current)||void 0===e||e.focus()),1===S&&2===b&&(null===(n=C.current)||void 0===n||n.focus())}),[b,y,C,S]);var k=function(e){e.preventDefault(),1===b?s(e.target.value):o(e.target.value)};return(0,m.jsx)("div",{children:(0,m.jsxs)("form",{onSubmit:function(e){e.preventDefault()},children:[(0,m.jsx)("br",{}),1===b&&(0,m.jsxs)(m.Fragment,{children:[" ",(0,m.jsxs)("label",{children:["Login:",(0,m.jsx)(h,{ref:y,type:"email",value:r,onChange:k,className:"form-control"})]}),(0,m.jsx)("br",{}),(0,m.jsx)(g,{onClick:function(){var e;j(2),null===(e=C.current)||void 0===e||e.focus()},className:"btn btn-outline-secondary",children:"Next step"})]}),2===b&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)("label",{children:["Password:",(0,m.jsx)(h,{ref:C,type:"password",value:u,onChange:k,className:"form-control"})]}),(0,m.jsx)("br",{}),(0,m.jsx)(p,{type:"submit",className:"btn btn-outline-secondary",children:"Submit"}),(0,m.jsx)(v,{onClick:function(){var e;j(1),null===(e=y.current)||void 0===e||e.focus()},className:"btn btn-outline-secondary",children:"Prev step"})]})]})})},h=d.default.input(s||(s=r(["\n  margin-left: 1rem;\n"]))),g=d.default.button(l||(l=r(["\n  float: right;\n  margin-top: 1rem;\n"]))),v=d.default.button(a||(a=r(["\n  float: left;\n  margin-top: 1rem;\n"]))),p=d.default.button(u||(u=r(["\n  float: right;\n  margin-top: 1rem;\n"]))),y=function(){var e=(0,c.useState)(0),n=(0,i.Z)(e,2),t=n[0],r=n[1],s=N(t);return(0,m.jsxs)("h1",{children:["Now: ",t,", before: ",s,(0,m.jsx)("button",{onClick:function(){return r((function(e){return e+1}))},children:"Increment"})]})};function N(e){var n=(0,c.useRef)();return(0,c.useEffect)((function(){n.current=e}),[e]),n.current}}}]);
//# sourceMappingURL=69.130f9797.chunk.js.map