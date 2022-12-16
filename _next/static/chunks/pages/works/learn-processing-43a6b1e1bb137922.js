(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[809],{394:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/works/learn-processing",function(){return t(5629)}])},9868:function(e,s,t){"use strict";t.d(s,{H2:function(){return r}});var l=t(5893);let r=e=>(0,l.jsx)("h2",{className:"text-3xl font-light text-yellow-400",children:e.title})},9813:function(e,s,t){"use strict";t.d(s,{J:function(){return c}});var l=t(5893),r=t(1664),n=t.n(r),i=t(8357),a=t(9352);let c=e=>{let{icon:s,to:t,text:r}=e;return(0,l.jsxs)(n(),{href:t,className:"flex text-green-500 duration-500 hover:text-green-300",target:"__blank",children:[(0,l.jsxs)(i.Pd.Provider,{value:{size:"2rem"},children:["github"===s&&(0,l.jsx)(a.ioR,{}),"twitter"===s&&(0,l.jsx)(a.HSY,{}),"external"===s&&(0,l.jsx)(a.uXP,{})]}),(0,l.jsx)("p",{className:"text-xl",children:r})]})}},8467:function(e,s,t){"use strict";t.d(s,{h:function(){return o}});var l=t(5893),r=t(1163),n=t(1664),i=t.n(n),a=t(7294);let c=e=>{let[s,t]=(0,a.useState)(),r=e=>{if(s){var t;let l=null!==(t=s.getBoundingClientRect().top)&&void 0!==t?t:0,r=l-0+window.pageYOffset;window.scrollTo({top:r,behavior:"smooth"}),e.preventDefault()}};return(0,a.useEffect)(()=>{t(document.getElementById(e.to))},[e.to,s]),(0,l.jsx)(i(),{href:e.to?"/#".concat(e.to):"/",className:"cursor-pointer",onClick:r,children:e.children})},o=()=>{let e=(0,r.useRouter)();return(0,l.jsxs)("div",{className:"w-screen bg-transparent p-4 md:flex md:items-center md:justify-between md:px-8",children:[(0,l.jsx)(c,{to:"/"===e.pathname?"start":"",children:(0,l.jsxs)("h1",{className:"text-xl font-bold text-white",children:["Rere","'","s Portfolio"]})}),(0,l.jsxs)("nav",{className:"hidden md:flex md:gap-10",children:[(0,l.jsx)(c,{to:"about",children:(0,l.jsx)("p",{className:"text-xl font-bold text-gray-200",children:"ABOUT"})}),(0,l.jsx)(c,{to:"profile",children:(0,l.jsx)("p",{className:"text-xl font-bold text-gray-200",children:"PROFILE"})}),(0,l.jsx)(c,{to:"works",children:(0,l.jsx)("p",{className:"text-xl font-bold text-gray-200",children:"WORKS"})})]})]})}},7928:function(e,s,t){"use strict";t.d(s,{i:function(){return a}});var l=t(5893),r=t(9868),n=t(9813),i=t(8467);let a=e=>(0,l.jsxs)("div",{className:"flex-col bg-gray-900 md:flex md:h-screen",children:[(0,l.jsx)("div",{className:"h-max",children:(0,l.jsx)(i.h,{})}),(0,l.jsxs)("main",{className:"flex flex-1 flex-col gap-y-8 gap-x-4 p-4 md:flex-row-reverse md:items-start md:justify-between md:overflow-y-auto",children:[(0,l.jsxs)("div",{className:"space-y-8 scrollbar-thin scrollbar-thumb-blue-700 scrollbar-thumb-rounded-full md:h-full md:w-2/5 md:overflow-y-auto md:pr-4",children:[(0,l.jsxs)("div",{className:"space-y-4",children:[(0,l.jsx)("p",{className:"text-5xl font-bold text-white",children:e.name}),(0,l.jsx)("div",{children:e.explains.map((e,s)=>(0,l.jsx)("p",{className:"text-xl font-bold text-gray-400",children:e},s))})]}),e.charge&&(0,l.jsxs)("div",{className:"space-y-4",children:[(0,l.jsx)(r.H2,{title:"Charge"}),(0,l.jsx)("div",{children:(0,l.jsx)("p",{className:"text-2xl text-white",children:e.charge})})]}),(e.languages||e.frameworks)&&(0,l.jsxs)("div",{className:"space-y-4",children:[(0,l.jsx)(r.H2,{title:"Language, Frameworks and Library"}),(0,l.jsxs)("div",{children:[e.languages&&(0,l.jsx)("p",{className:"text-2xl text-white",children:e.languages}),e.frameworks&&(0,l.jsx)("p",{className:"text-2xl text-white",children:e.frameworks})]})]}),e.feelings&&(0,l.jsxs)("div",{className:"space-y-4",children:[(0,l.jsx)(r.H2,{title:"Feelings"}),(0,l.jsx)("div",{children:e.feelings.map((e,s)=>(0,l.jsx)("p",{className:"text-2xl text-white",children:e},s))})]}),(e.linkWork||e.linkGitHub)&&(0,l.jsxs)("div",{className:"space-y-4",children:[(0,l.jsx)(r.H2,{title:"Links"}),(0,l.jsxs)("div",{className:"space-y-2",children:[e.linkWork&&(0,l.jsx)(n.J,{text:"Work Website",to:e.linkWork,icon:"external"}),e.linkGitHub&&(0,l.jsx)(n.J,{text:"GitHub Repository",to:e.linkGitHub,icon:"github"})]})]})]}),(0,l.jsx)("div",{className:"space-y-4 scrollbar-thin scrollbar-thumb-blue-700 scrollbar-thumb-rounded-full md:h-full md:w-3/5 md:overflow-y-auto md:pr-4",children:e.images.map((e,s)=>(0,l.jsx)("img",{src:e,className:"w-full",alt:"work image",loading:"lazy"},s))})]})]})},5629:function(e,s,t){"use strict";t.r(s);var l=t(5893),r=t(9008),n=t.n(r),i=t(7928);let a=()=>(0,l.jsxs)("div",{children:[(0,l.jsxs)(n(),{children:[(0,l.jsxs)("title",{children:["Rere","'","s Portfolio - Learn Processing more"]}),(0,l.jsx)("meta",{name:"description",content:"Rere's Portfolio - Learn Processing more"}),(0,l.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,l.jsx)(i.i,{name:"Learn Processing more",explains:["部内用のより発展的なProcessingの解説","配列, リスト, クラスについて説明"],linkWork:"https://github.com/HitsujiRere/LearnProcessing#readme",images:["/img/LearnProcessing.png"]})]});s.default=a}},function(e){e.O(0,[937,636,774,888,179],function(){return e(e.s=394)}),_N_E=e.O()}]);