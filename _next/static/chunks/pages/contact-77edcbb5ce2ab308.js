(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[335],{6405:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact",function(){return a(7024)}])},7024:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return x}});var n=a(5893),s=a(7294),l=a(3750),r=a(2023),i=a(6356),c=a(6462),o=a(3977);let u=(0,o.ZF)({apiKey:"AIzaSyD6-bsyfjcTu9Qy5BB1-zq89B7PMuIFBd4",authDomain:"ar-alhabbal.firebaseapp.com",projectId:"ar-alhabbal",storageBucket:"ar-alhabbal.appspot.com",messagingSenderId:"833340912233",appId:"1:833340912233:web:35c8b8532b1e18967628f8",measurementId:"G-MWBBN14867"}),d=(0,c.ad)(u),p=async e=>{let{name:t,email:a,subject:n,message:s}=e;try{let e=(0,c.hJ)(d,"contact");return await (0,c.ET)(e,{sentAt:c.EK.now().toDate(),name:t,email:a,subject:n,message:s}),0}catch(e){return console.log(e),-1}},h=()=>{let[e,t]=(0,s.useState)(""),a=(0,s.useRef)(),c=async e=>{e.preventDefault(),console.log(e);let n=await p({name:e.target[0].value,email:e.target[1].value,subject:e.target[2].value,message:e.target[3].value});0==n?(t("Thank you for contacting me!"),a.current.reset()):t("Something went wrong! Please try again")};return(0,n.jsx)("div",{className:"h-full bg-primary/30",children:(0,n.jsx)("div",{className:"container mx-auto py-32 mt-4 text-center xl:text-left flex items-center justify-center h-full",children:(0,n.jsxs)("div",{className:"flex flex-col w-full max-w-[700px]",children:[(0,n.jsxs)(r.E.h2,{variants:(0,i.J)("up",.2),initial:"hidden",animate:"show",exit:"hidden",className:"h2 text-center",children:["Let us ",(0,n.jsx)("span",{className:"text-accent",children:"connect."})]}),(0,n.jsxs)("div",{className:"w-full mx-auto flex items-center gap-x-6 justify-center py-2",children:[e,(0,n.jsx)("span",{onClick:()=>t(""),className:"".concat(e?"block":"hidden"," text-xl hover:text-accent cursor-pointer"),children:"\xd7"})]}),(0,n.jsxs)(r.E.form,{variants:(0,i.J)("up",.4),initial:"hidden",animate:"show",exit:"hidden",className:"flex-1 flex flex-col gap-6 w-full mx-auto",ref:a,onSubmit:c,children:[(0,n.jsxs)("div",{className:"flex gap-x-6 w-full",children:[(0,n.jsx)("input",{type:"text",placeholder:"name",className:"input h-10"}),(0,n.jsx)("input",{type:"email",placeholder:"email",className:"input h-10"})]}),(0,n.jsx)("input",{type:"text",placeholder:"subject",className:"input h-10"}),(0,n.jsx)("textarea",{placeholder:"message",className:"textarea h-300"}),(0,n.jsxs)("button",{type:"submit",className:"btn h-10 rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group",children:[(0,n.jsx)("span",{className:"group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500",children:"Let us talk"}),(0,n.jsx)(l.lzl,{className:"-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]"})]})]})]})})})};var x=h},6356:function(e,t,a){"use strict";a.d(t,{J:function(){return n}});let n=(e,t)=>({hidden:{y:"up"===e?80:"down"===e?-80:0,opacity:0,x:"left"===e?80:"right"===e?-80:0,transition:{type:"tween",duration:1.5,delay:t,ease:[.25,.6,.3,.8]}},show:{y:0,x:0,opacity:1,transition:{type:"tween",duration:1.4,delay:t,ease:[.25,.25,.25,.75]}}})}},function(e){e.O(0,[13,243,899,774,888,179],function(){return e(e.s=6405)}),_N_E=e.O()}]);