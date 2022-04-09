(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(5165)}])},3505:function(e,t,s){"use strict";var n=s(5893),i=s(7294),a=function(e){var t=(0,i.useState)(),s=t[0],a=t[1];return(0,i.useEffect)((function(){a(document.getElementById(e.to))}),[e.to,s]),(0,n.jsx)("a",{href:"/#".concat(e.to),className:"cursor-pointer",onClick:function(t){if(s){var n=document.getElementById("scroll-scapegoat");s.id="",console.log(n),n&&(n.id=e.to),location.hash="#".concat(e.to),s.id=e.to,n&&(n.id="scroll-scapegoat");var i,a=(null!==(i=s.getBoundingClientRect().top)&&void 0!==i?i:0)-0+window.pageYOffset;window.scrollTo({top:a,behavior:"smooth"}),t.preventDefault()}},children:e.children})};t.Z=function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{id:"scroll-scapegoat",className:"fixed"}),(0,n.jsxs)("header",{className:"w-screen p-8 bg-gray-900 md:bg-transparent md:fixed md:flex md:justify-between md:items-center md:z-10",children:[(0,n.jsx)(a,{to:"start",children:(0,n.jsxs)("h1",{className:"text-xl font-bold text-white",children:["Rere","'","s Portfolio"]})}),(0,n.jsxs)("nav",{className:"hidden md:flex md:gap-10",children:[(0,n.jsx)(a,{to:"about",children:(0,n.jsx)("p",{className:"text-xl font-bold text-gray-200",children:"ABOUT"})}),(0,n.jsx)(a,{to:"profile",children:(0,n.jsx)("p",{className:"text-xl font-bold text-gray-200",children:"PROFILE"})}),(0,n.jsx)(a,{to:"works",children:(0,n.jsx)("p",{className:"text-xl font-bold text-gray-200",children:"WORKS"})})]})]})]})}},5165:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return w}});var n=s(5893),i=s(9008),a=s(3505),r=(0,s(5152).default)((function(){return s.e(257).then(s.t.bind(s,4210,23))}),{loadableGenerated:{webpack:function(){return[4210]}},ssr:!1}),o=function(){var e=[],t=0;return(0,n.jsx)(r,{setup:function(t,s){if(t.createCanvas(t.windowWidth,t.windowHeight).parent(s),0===e.length)for(var n=0;n<10;n++)e.push({x:t.random(0,t.width),y:t.height/10*n,angle:t.random(0,t.TWO_PI),angleSpeed:t.random(-5e-4,5e-4),size:t.random(20,100)})},draw:function(s){if(s.background(16),s.millis()>=t+700){t=s.millis();var n=s.random(20,100);e.push({x:s.random(0,s.width),y:-100,angle:s.random(0,s.TWO_PI),angleSpeed:s.random(-5e-4,5e-4),size:n})}e.forEach((function(e){e.y+=3/e.size*s.deltaTime,e.angle+=e.angleSpeed*s.deltaTime,s.push(),s.translate(e.x,e.y),s.rotate(e.angle),s.noStroke(),s.fill("#4e54c880"),s.rectMode(s.CENTER),s.rect(0,0,e.size,e.size,e.size/5),s.pop()}))},windowResized:function(e){e.resizeCanvas(e.windowWidth,e.windowHeight)},className:"fixed inset-0 -z-10 bg-gray-900"})},c=function(){return(0,n.jsxs)("div",{id:"start",children:[(0,n.jsx)(o,{}),(0,n.jsx)("div",{className:"h-screen mx-auto max-w-screen-lg bg-transparent flex items-center px-4",children:(0,n.jsxs)("div",{className:"space-y-5",children:[(0,n.jsxs)("h2",{className:"text-2xl font-light text-yellow-400",children:["Let","'","s go!"]}),(0,n.jsx)("p",{className:"text-5xl font-bold text-white",children:"What will we make with a computer?"}),(0,n.jsxs)("div",{children:[(0,n.jsxs)("p",{className:"text-xl font-bold text-gray-400",children:["Hello! I","'","m Dejima Mikihide."]}),(0,n.jsxs)("p",{className:"text-xl font-bold text-gray-400",children:["I","'","m a student studying to become a computer programmer."]})]})]})})]})},l=s(1664),d=function(){return(0,n.jsx)("div",{id:"about",className:"px-4 py-20 bg-gray-900 md:hover:bg-gray-800 duration-500",children:(0,n.jsxs)("div",{className:"mx-auto max-w-screen-lg space-y-5",children:[(0,n.jsx)("h2",{className:"text-2xl font-light text-yellow-400",children:"ABOUT"}),(0,n.jsxs)("div",{className:"md:flex md:justify-between space-x-1",children:[(0,n.jsxs)("div",{className:"md:w-2/3 space-y-5",children:[(0,n.jsx)("p",{className:"text-5xl tracking-wide font-bold text-white",children:"Rere / Dejima Mikihide"}),(0,n.jsx)("p",{className:"text-sm text-gray-400",children:"\u77f3\u5ddd\u5de5\u696d\u9ad8\u7b49\u5c02\u9580\u5b66\u6821 \u96fb\u5b50\u60c5\u5831\u5de5\u5b66\u79d1 5\u5e74"}),(0,n.jsxs)("div",{className:"text-xl text-gray-200",children:[(0,n.jsx)("p",{children:"\u79c1\u306f\u300c\u597d\u5947\u5fc3\u300d\u304c\u3068\u3066\u3082\u5f37\u304f\u3001\u4f55\u306b\u3067\u3082\u8208\u5473\u304c\u3042\u308a\u307e\u3059\u3002"}),(0,n.jsx)("p",{children:"Processing \u3084 Siv3D \u3001 Unity \u3067\u30b2\u30fc\u30e0\u3092\u4f5c\u3063\u305f\u308a\u3001 Node.js \u3067\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u306e\u52c9\u5f37\u3092\u3001 Next.js \u3067\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u306e\u52c9\u5f37\u3092\u3057\u3066\u3044\u307e\u3059\u3002"}),(0,n.jsx)("p",{children:"\u307e\u305f\u30aa\u30ea\u30b8\u30ca\u30eb\u306e\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u8a00\u8a9e\u3092\u4f5c\u3063\u305f\u308a\u3001\u7af6\u6280\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u3092\u697d\u3057\u3093\u3067\u3044\u307e\u3059\u3002"}),(0,n.jsx)("p",{children:"\u9ad8\u5c02\u30d7\u30ed\u30b3\u30f32020 \u3084 DCON2021 \u306b\u30c1\u30fc\u30e0\u3067\u51fa\u5834\u3055\u305b\u3066\u3044\u305f\u3060\u3044\u305f\u7d4c\u9a13\u3092\u6d3b\u304b\u3057\u3066\u3001\u30c1\u30fc\u30e0\u5236\u4f5c\u6d3b\u52d5\u3067\u306f\u500b\u4eba\u306e\u9577\u6240\u3092\u6d3b\u304b\u305b\u308b\u30c1\u30fc\u30e0\u3065\u304f\u308a\u306b\u53d6\u308a\u7d44\u3093\u3067\u3044\u307e\u3059\u3002"})]}),(0,n.jsxs)("div",{className:"flex space-x-5",children:[(0,n.jsx)("div",{className:"text-green-300 hover:text-green-600 duration-500",children:(0,n.jsx)(l.default,{href:"https://twitter.com/HitsujiRere",children:(0,n.jsxs)("a",{className:"flex",children:[(0,n.jsxs)("svg",{className:"h-8 w-8",width:"24",height:"24",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:["  ",(0,n.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z"}),"  ",(0,n.jsx)("path",{d:"M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497 -3.753C20.18 7.773 21.692 5.25 22 4.009z"})]}),(0,n.jsx)("p",{className:"text-xl",children:"HitsujiRere"})]})})}),(0,n.jsx)("div",{className:"text-green-300 hover:text-green-600 duration-500",children:(0,n.jsx)(l.default,{href:"https://github.com/HitsujiRere",children:(0,n.jsxs)("a",{className:"flex",children:[(0,n.jsxs)("svg",{className:"h-8 w-8",width:"24",height:"24",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:["  ",(0,n.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z"}),"  ",(0,n.jsx)("path",{d:"M9 19c-4.286 1.35-4.286-2.55-6-3m12 5v-3.5c0-1 .099-1.405-.5-2 2.791-.3 5.5-1.366 5.5-6.04a4.567 4.567 0 0 0 -1.333 -3.21 4.192 4.192 0 00-.08-3.227s-1.05-.3-3.476 1.267a12.334 12.334 0 0 0 -6.222 0C6.462 2.723 5.413 3.023 5.413 3.023a4.192 4.192 0 0 0 -.08 3.227A4.566 4.566 0 004 9.486c0 4.64 2.709 5.68 5.5 6.014-.591.589-.56 1.183-.5 2V21"})]}),(0,n.jsx)("p",{className:"text-xl",children:"HitsujiRere"})]})})})]})]}),(0,n.jsx)("div",{className:"w-1/3 hidden md:flex bg-contain bg-no-repeat bg-center",style:{backgroundImage:"url(/img/myself.png)"}})]})]})})},x=s(5966),h=s(7580),m=function(e){return(0,n.jsx)(x.ZP,{value:e.code.trim(),height:"100%",extensions:[(0,h.eJ)({jsx:!0,typescript:!0})],theme:"dark",className:"text-lg"})},g=new Date("2003-3-31"),j="\nclass DejimaMikihide {\n  realName = '\u51fa\u5cf6 \u5e79\u82f1';\n  penName = '\u3072\u3064\u3058 \u308c\u308c';\n  birthday = new Date('2003-3-31');\n  age = ".concat(function(e){var t=new Date,s=new Date(t.getFullYear(),e.getMonth(),e.getDate()),n=t.getFullYear()-e.getFullYear();return t>=s?n:n-1}(g),";\n  languages = {\n    good: [\n      'C', 'C++', 'C#', 'JavaScript', 'Python',\n    ],\n    hadUsed: [\n      'Java', 'TypeScript',\n    ],\n    learning: [\n      'Rust', 'TypeScript', 'Go',\n    ],\n  };\n  frameworks = {\n    good: [\n      'Node.js', 'Processing', '.NET Framework',\n    ],\n    hadUsed: [\n      'Next.js',\n    ],\n  };\n  skills = {\n    competitiveProgramming: {\n      language: ['C++'],\n      AtCoder: {\n        user: 'Deji',\n        highestRate: 1455,\n      }\n    }\n  };\n}\n"),u=function(){return(0,n.jsx)("div",{id:"profile",className:"px-4 py-20 bg-gray-900 md:hover:bg-gray-800 duration-500",children:(0,n.jsxs)("div",{className:"mx-auto max-w-screen-lg space-y-5",children:[(0,n.jsx)("h2",{className:"text-2xl font-light text-yellow-400",children:"PROFILE"}),(0,n.jsx)(m,{code:j})]})})},p=function(e){return(0,n.jsx)(l.default,{href:e.href,children:(0,n.jsx)("a",{className:"h-60",children:(0,n.jsx)("img",{src:e.image,className:"h-full w-full rounded-xl ".concat(e.size," ").concat(e.position," ").concat("object-contain"===e.size&&"bg-gray-100"),alt:"cover image",loading:"lazy"})})})},f=function(e){return(0,n.jsx)(l.default,{href:e.href,children:(0,n.jsx)("a",{className:"h-60 p-4 rounded-xl bg-gray-100 flex items-center",children:(0,n.jsx)("div",{className:"w-full text-center space-y-5",children:e.children})})})},v=function(){return(0,n.jsx)("div",{id:"works",className:"px-4 py-20 bg-gray-900 md:hover:bg-gray-800 duration-500",children:(0,n.jsxs)("div",{className:"mx-auto max-w-screen-lg space-y-5",children:[(0,n.jsx)("h2",{className:"text-2xl font-light text-yellow-400",children:"WORKS"}),(0,n.jsxs)("div",{className:"grid md:grid-cols-2 gap-5 md:gap-20",children:[(0,n.jsx)(p,{href:"/works/my-webpage",image:"/img/my-webpage.png",size:"object-cover",position:"object-top"}),(0,n.jsx)(p,{href:"/works/logic-connect-block",image:"/img/LogicConnectBlock/cover.jpg",size:"object-cover",position:"object-center"}),(0,n.jsx)(p,{href:"/",image:"/img/oshaberu_logo.png",size:"object-contain",position:"object-center"}),(0,n.jsx)(p,{href:"/",image:"/img/twattaa.png",size:"object-cover",position:"object-top"}),(0,n.jsx)(p,{href:"/",image:"/img/LearnProcessing.png",size:"object-cover",position:"object-top"}),(0,n.jsxs)(f,{href:"/",children:[(0,n.jsx)("p",{className:"text-7xl text-black",children:"Fall Texts"}),(0,n.jsx)("p",{className:"text-xl text-black",children:"\u307f\u3093\u306a\u3067\u8a00\u8449\u3092\u964d\u3089\u305b\u3088\u3046"})]}),(0,n.jsx)(p,{href:"/",image:"/img/shimale_logo.png",size:"object-contain",position:"object-center"}),(0,n.jsx)(p,{href:"/",image:"/img/siritoriVS.jpg",size:"object-cover",position:"object-top"}),(0,n.jsx)(p,{href:"/",image:"/img/HexCalcurator.png",size:"object-cover",position:"object-top"}),(0,n.jsx)(p,{href:"/",image:"/img/just10game.png",size:"object-cover",position:"object-center"}),(0,n.jsx)(p,{href:"/",image:"/img/yudetamago2.png",size:"object-cover",position:"object-top"})]})]})})},b=function(){return(0,n.jsx)("header",{className:"p-8 text-center bg-gray-900 hover:bg-gray-800 duration-500",children:(0,n.jsx)("p",{className:"text-xs text-gray-200",children:"DEJIMA MIKIHIDE - 2022"})})},w=function(){return(0,n.jsxs)("div",{children:[(0,n.jsxs)(i.default,{children:[(0,n.jsxs)("title",{children:["Rere","'","s Portfolio"]}),(0,n.jsx)("meta",{name:"description",content:"Rere's Portfolio"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,n.jsx)(a.Z,{}),(0,n.jsxs)("main",{children:[(0,n.jsx)(c,{}),(0,n.jsx)(d,{}),(0,n.jsx)(u,{}),(0,n.jsx)(v,{})]}),(0,n.jsx)(b,{})]})}}},function(e){e.O(0,[762,496,774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);