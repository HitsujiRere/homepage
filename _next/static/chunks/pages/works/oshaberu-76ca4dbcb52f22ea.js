(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[802],{7028:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/works/oshaberu",function(){return t(9337)}])},2196:function(e,s,t){"use strict";t.d(s,{H2:function(){return i}});var l=t(5893);let i=e=>(0,l.jsx)("h2",{className:"text-3xl font-light text-yellow-400",children:e.title})},3696:function(e,s,t){"use strict";t.d(s,{J:function(){return c}});var l=t(5893),i=t(1664),r=t.n(i),n=t(8357),a=t(9352);let c=e=>{let{icon:s,to:t,text:i}=e;return(0,l.jsxs)(r(),{href:t,className:"flex text-green-500 duration-500 hover:text-green-300",target:"__blank",children:[(0,l.jsxs)(n.Pd.Provider,{value:{size:"2rem"},children:["github"===s&&(0,l.jsx)(a.ioR,{}),"twitter"===s&&(0,l.jsx)(a.HSY,{}),"external"===s&&(0,l.jsx)(a.uXP,{})]}),(0,l.jsx)("p",{className:"text-xl",children:i})]})}},1464:function(e,s,t){"use strict";t.d(s,{h:function(){return o}});var l=t(5893),i=t(1163),r=t(1664),n=t.n(r),a=t(7294);let c=e=>{let[s,t]=(0,a.useState)(),i=e=>{if(s){var t;let l=null!==(t=s.getBoundingClientRect().top)&&void 0!==t?t:0,i=l-0+window.pageYOffset;window.scrollTo({top:i,behavior:"smooth"}),e.preventDefault()}};return(0,a.useEffect)(()=>{t(document.getElementById(e.to))},[e.to,s]),(0,l.jsx)(n(),{href:e.to?"/#".concat(e.to):"/",className:"cursor-pointer",onClick:i,children:e.children})},o=()=>{let e=(0,i.useRouter)();return(0,l.jsxs)("header",{className:"w-screen bg-gray-900 p-8 md:fixed md:z-10 md:flex md:items-center md:justify-between md:bg-transparent",children:[(0,l.jsx)(c,{to:"/"===e.pathname?"start":"",children:(0,l.jsxs)("h1",{className:"text-xl font-bold text-white",children:["Rere","'","s Portfolio"]})}),(0,l.jsxs)("nav",{className:"hidden md:flex md:gap-10",children:[(0,l.jsx)(c,{to:"about",children:(0,l.jsx)("p",{className:"text-xl font-bold text-gray-200",children:"ABOUT"})}),(0,l.jsx)(c,{to:"profile",children:(0,l.jsx)("p",{className:"text-xl font-bold text-gray-200",children:"PROFILE"})}),(0,l.jsx)(c,{to:"works",children:(0,l.jsx)("p",{className:"text-xl font-bold text-gray-200",children:"WORKS"})})]})]})}},739:function(e,s,t){"use strict";t.d(s,{i:function(){return n}});var l=t(5893),i=t(2196),r=t(3696);let n=e=>(0,l.jsx)("div",{className:"bg-gray-900 md:h-screen",children:(0,l.jsxs)("div",{className:"md:flex md:h-full md:items-center md:justify-between md:pt-24",children:[(0,l.jsx)("div",{className:"m-4 space-y-4 md:h-full md:w-3/5 md:overflow-y-scroll md:pr-4 md:scrollbar-thin md:scrollbar-thumb-blue-700 md:scrollbar-thumb-rounded-full",children:e.images.map((e,s)=>(0,l.jsx)("img",{src:e,className:"w-full",alt:"work image",loading:"lazy"},s))}),(0,l.jsxs)("div",{className:"m-4 space-y-12 md:h-full md:w-2/5 md:pr-4 md:scrollbar-thin md:scrollbar-thumb-blue-700 md:scrollbar-thumb-rounded-full",children:[(0,l.jsxs)("div",{className:"space-y-4",children:[(0,l.jsx)("p",{className:"text-5xl font-bold text-white",children:e.name}),(0,l.jsx)("div",{children:e.explains.map((e,s)=>(0,l.jsx)("p",{className:"text-xl font-bold text-gray-400",children:e},s))})]}),e.charge&&(0,l.jsxs)("div",{className:"space-y-4",children:[(0,l.jsx)(i.H2,{title:"Charge"}),(0,l.jsx)("div",{children:(0,l.jsx)("p",{className:"text-2xl text-white",children:e.charge})})]}),(e.languages||e.frameworks)&&(0,l.jsxs)("div",{className:"space-y-4",children:[(0,l.jsx)(i.H2,{title:"Language, Frameworks and Library"}),(0,l.jsxs)("div",{children:[e.languages&&(0,l.jsx)("p",{className:"text-2xl text-white",children:e.languages}),e.frameworks&&(0,l.jsx)("p",{className:"text-2xl text-white",children:e.frameworks})]})]}),e.feelings&&(0,l.jsxs)("div",{className:"space-y-4",children:[(0,l.jsx)(i.H2,{title:"Feelings"}),(0,l.jsx)("div",{children:e.feelings.map((e,s)=>(0,l.jsx)("p",{className:"text-2xl text-white",children:e},s))})]}),(e.linkWork||e.linkGitHub)&&(0,l.jsxs)("div",{className:"space-y-4",children:[(0,l.jsx)(i.H2,{title:"Links"}),(0,l.jsxs)("div",{className:"space-y-2",children:[e.linkWork&&(0,l.jsx)(r.J,{text:"Work Website",to:e.linkWork,icon:"external"}),e.linkGitHub&&(0,l.jsx)(r.J,{text:"GitHub Repository",to:e.linkGitHub,icon:"github"})]})]})]})]})})},9337:function(e,s,t){"use strict";t.r(s);var l=t(5893),i=t(9008),r=t.n(i),n=t(1464),a=t(739);let c=()=>(0,l.jsxs)("div",{children:[(0,l.jsxs)(r(),{children:[(0,l.jsxs)("title",{children:["Rere","'","s Portfolio - おしゃべる"]}),(0,l.jsx)("meta",{name:"description",content:"Rere's Portfolio - おしゃべる"}),(0,l.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,l.jsx)(n.h,{}),(0,l.jsx)("main",{children:(0,l.jsx)(a.i,{name:"おしゃべる",explains:["自由な声とおしゃべりできるスマートスピーカーの追加コンテンツ","DCON2021にて発表し、7位を獲得した。"],charge:"音声合成, APIサーバ",languages:"JavaScript, Python",frameworks:"Node.js, Tacotron2",feelings:["初めて深層学習を用いたが、うまくチームメンバーなどの音声を合成することができた。"],linkGitHub:"https://github.com/HitsujiRere/hitsujirere.github.io",images:["/img/oshaberu/cover.png","/img/oshaberu/system.png","/img/oshaberu/voice-1.png","/img/oshaberu/voice-2.png"]})})]});s.default=c}},function(e){e.O(0,[937,636,774,888,179],function(){return e(e.s=7028)}),_N_E=e.O()}]);