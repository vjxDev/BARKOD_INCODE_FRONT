(this["webpackJsonpbarkod-incode-front"]=this["webpackJsonpbarkod-incode-front"]||[]).push([[0],{63:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(30),s=a.n(r),i=a(19),l=a(2),o=a(11),j=a.n(o),u=a(15),b=a(8),d=a(9),x=a.n(d),h=a(31),p=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=new Date;return t.setDate(t.getDate()-1),e?new Date(t.toDateString()):t},m=["RSD","EUR","USD","JPY"],v={RSD:["Srpski dinar","Srpskih dinara"],EUR:["Evro","Evra"],USD:["Dolar","Dolara"],JPY:["Japanski jen","Japanskih jena"]},O=a(0),f=function(e){var t=e.children,a=e.fill;return Object(O.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:a,children:t})},g=Object(O.jsx)("path",{xmlns:"http://www.w3.org/2000/svg",d:"M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6h-6z"});var w=function(){var e=Object(n.useState)([]),t=Object(b.a)(e,2),a=t[0],c=t[1];Object(n.useEffect)((function(){console.log("Alo"),r()}),[]);var r=function(){var e=Object(u.a)(j.a.mark((function e(){var t,a,n,r,s,i,l,o,u,b,d,v;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=[],a=Object(h.a)(m),e.prev=2,a.s();case 4:if((n=a.n()).done){e.next=24;break}if("RSD"!==(r=n.value)){e.next=8;break}return e.abrupt("continue",22);case 8:return e.next=10,x.a.get("conversion?from=RSD&to=".concat(r,"&amount=1"));case 10:return s=e.sent,i=p(!0).toISOString().slice(0,10),e.next=14,x.a.get("conversion?from=RSD&to=".concat(r,"&amount=1&date=").concat(i));case 14:l=e.sent,o=s.data.result,u=l.data.result,b=o==u,d=o>u?"text-green-700":b?"text-gray-700":"text-red-700",v=o/u*100-100,t.push(Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{className:"".concat(d),children:[Object(O.jsx)("span",{children:Object(O.jsxs)(f,{children:[" ",g]})}),"|",Object(O.jsx)("div",{children:Object(O.jsxs)("span",{children:[v.toFixed(3),"% "]})})]})}));case 22:e.next=4;break;case 24:e.next=29;break;case 26:e.prev=26,e.t0=e.catch(2),a.e(e.t0);case 29:return e.prev=29,a.f(),e.finish(29);case 32:c(t);case 33:case"end":return e.stop()}}),e,null,[[2,26,29,32]])})));return function(){return e.apply(this,arguments)}}();return a},k=function(){var e=[];for(var t in v)if(Object.hasOwnProperty.call(v,t)){var a=v[t];e.push(Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("option",{value:t,children:[t," - ",a[0]]})}))}return e};var N=function(){var e=Object(n.useState)("EUR"),t=Object(b.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)("RSD"),s=Object(b.a)(r,2),i=s[0],l=s[1],o=Object(n.useState)(1),d=Object(b.a)(o,2),h=d[0],p=d[1],m=Object(n.useState)(""),f=Object(b.a)(m,2),g=f[0],N=f[1],S=Object(n.useState)(),y=Object(b.a)(S,2),D=y[0],E=y[1],R=function(){var e;e=a,c(i),l(e);var t=h;p(g),N(t)};Object(n.useEffect)((function(){z()}),[a,i]);var z=function(){var e=Object(u.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=3;break}return e.next=3,new Promise((function(e){return setTimeout(e,t)}));case 3:return e.next=5,x.a.get("conversion?from=".concat(a,"&to=").concat(i,"&amount=").concat(h));case 5:n=e.sent,N(n.data.result.toFixed(2)),console.log(n.data),E(new Date(1e3*n.data.info.timestamp));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(O.jsxs)("div",{className:"container grid mx-auto gap-8 relative p-10 sm:px-60 sm:mt-10 main-container",children:[Object(O.jsx)("h1",{className:"webpage-title text-center",children:"BARKODE EXCANGE"}),Object(O.jsx)("div",{className:"bg-primery absolute h-[20wh] w-screen"}),Object(O.jsxs)("div",{className:"grid p-8 gap-8 bg-white border-primery border-2 rounded-xl",children:[Object(O.jsxs)("div",{className:"flex flex-col sm:flex-row gap-4 w-full items-end ",children:[Object(O.jsxs)("label",{className:" input-text",children:[Object(O.jsx)("span",{className:"text-gray-700",children:"Koli\u010dina:"}),Object(O.jsx)("input",{type:"text",value:h,onChange:function(e){p(e.target.value)},className:"form-input mt-1 block w-full",placeholder:"1.00"})]}),Object(O.jsxs)("label",{className:" input-text",children:[Object(O.jsx)("span",{className:"text-gray-700",children:"Konverzija iz:"}),Object(O.jsx)("select",{className:"form-select mt-1 block w-full",value:a,onChange:function(e){var t=e.target.value;t===i?R():c(t)},children:Object(O.jsx)(k,{})})]}),Object(O.jsx)("button",{onClick:R,className:"grid items-center justify-center h-12 w-full sm:w-auto rounded-full  bg-primery text-white ",children:Object(O.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-8 h-8 mx-2",viewBox:"0 0 24 24",fill:"white",children:[Object(O.jsx)("path",{d:"M0 0h24v24H0z",fill:"none"}),Object(O.jsx)("path",{d:"M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z"})]})}),Object(O.jsxs)("label",{className:" input-text",children:[Object(O.jsx)("span",{className:"text-gray-700",children:"Konverzija u:"}),Object(O.jsx)("select",{className:"form-select mt-1 block w-full",value:i,onChange:function(e){var t=e.target.value;t===a?R():l(t)},children:Object(O.jsx)(k,{})})]})]}),Object(O.jsxs)("div",{className:"flex gap-4 flex-col-reverse sm:flex-row justify-between sm:items-end  ",children:[Object(O.jsxs)("div",{className:"grid gap-1",children:[Object(O.jsxs)("span",{className:"text-lg",children:[h," ",v[a][0]," = ",Object(O.jsx)("br",{})]}),Object(O.jsxs)("span",{className:" text-4xl text-primery font-semibold",children:[!g&&"..."," ",g," ",v[i][1]]}),Object(O.jsx)("span",{className:"text-gray-500",children:null!=D&&Object(O.jsxs)(O.Fragment,{children:["Vreme konverzije: ",D.getMilliseconds()]})})]}),Object(O.jsx)("button",{className:"btn",onClick:z,children:"Izvr\u0161i konverzija"})]})]}),Object(O.jsx)("div",{className:"grid p-8 gap-8 bg-white border-primery border-2 rounded-xl",children:Object(O.jsx)(w,{})})]})};var S=function(){return Object(O.jsx)(l.c,{children:Object(O.jsx)(l.a,{path:"/",children:Object(O.jsx)(N,{})})})};a(63);x.a.defaults.baseURL="https://barkod-incode-back.herokuapp.com/api",s.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(i.a,{children:Object(O.jsx)(S,{})})}),document.getElementById("root"))}},[[64,1,2]]]);
//# sourceMappingURL=main.03511b2b.chunk.js.map