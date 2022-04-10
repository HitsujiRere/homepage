(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[622],{3505:function(e,t,r){"use strict";var n=r(5893),l=r(7294),a=r(1664),o=function(e){var t=(0,l.useState)(),r=t[0],o=t[1];return(0,l.useEffect)((function(){o(document.getElementById(e.to))}),[e.to,r]),(0,n.jsx)(a.default,{href:"/#".concat(e.to),children:(0,n.jsx)("a",{className:"cursor-pointer",onClick:function(t){if(r){var n=document.getElementById("scroll-scapegoat");r.id="",console.log(n),n&&(n.id=e.to),location.hash="#".concat(e.to),r.id=e.to,n&&(n.id="scroll-scapegoat");var l,a=(null!==(l=r.getBoundingClientRect().top)&&void 0!==l?l:0)-0+window.pageYOffset;window.scrollTo({top:a,behavior:"smooth"}),t.preventDefault()}},children:e.children})})};t.Z=function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{id:"scroll-scapegoat",className:"fixed"}),(0,n.jsxs)("header",{className:"w-screen p-8 bg-gray-900 md:bg-transparent md:fixed md:flex md:justify-between md:items-center md:z-10",children:[(0,n.jsx)(o,{to:"start",children:(0,n.jsxs)("h1",{className:"text-xl font-bold text-white",children:["Rere","'","s Portfolio"]})}),(0,n.jsxs)("nav",{className:"hidden md:flex md:gap-10",children:[(0,n.jsx)(o,{to:"about",children:(0,n.jsx)("p",{className:"text-xl font-bold text-gray-200",children:"ABOUT"})}),(0,n.jsx)(o,{to:"profile",children:(0,n.jsx)("p",{className:"text-xl font-bold text-gray-200",children:"PROFILE"})}),(0,n.jsx)(o,{to:"works",children:(0,n.jsx)("p",{className:"text-xl font-bold text-gray-200",children:"WORKS"})})]})]})]})}},9472:function(e,t,r){"use strict";var n=r(5893),l=r(1664);t.Z=function(e){return(0,n.jsx)("div",{className:"md:h-screen bg-gray-900",children:(0,n.jsxs)("div",{className:"md:pt-24 md:h-full md:flex md:justify-between md:items-center",children:[(0,n.jsxs)("div",{className:"md:w-2/5 md:h-full px-4 py-4 md:overflow-y-scroll md:hide-scrollbar space-y-12 md:text-right",children:[(0,n.jsxs)("div",{className:"space-y-4",children:[(0,n.jsx)("p",{className:"text-5xl font-bold text-white",children:e.name}),(0,n.jsx)("div",{children:e.explains.map((function(e,t){return(0,n.jsx)("p",{className:"text-xl font-bold text-gray-400",children:e},t)}))})]}),e.charge&&(0,n.jsxs)("div",{className:"space-y-4",children:[(0,n.jsx)("h2",{className:"text-2xl font-light text-yellow-400",children:"Charge"}),(0,n.jsx)("div",{children:(0,n.jsx)("p",{className:"text-2xl text-white",children:e.charge})})]}),(e.languages||e.frameworks)&&(0,n.jsxs)("div",{className:"space-y-4",children:[(0,n.jsx)("h2",{className:"text-2xl font-light text-yellow-400",children:"Language and Frameworks"}),(0,n.jsxs)("div",{children:[e.languages&&(0,n.jsx)("p",{className:"text-2xl text-white",children:e.languages}),e.frameworks&&(0,n.jsx)("p",{className:"text-2xl text-white",children:e.frameworks})]})]}),e.feelings&&(0,n.jsxs)("div",{className:"space-y-4",children:[(0,n.jsx)("h2",{className:"text-2xl font-light text-yellow-400",children:"Feelings"}),(0,n.jsx)("div",{children:e.feelings.map((function(e,t){return(0,n.jsx)("p",{className:"text-2xl text-white",children:e},t)}))})]}),(e.linkWork||e.linkGitHub)&&(0,n.jsxs)("div",{className:"space-y-4",children:[(0,n.jsx)("h2",{className:"text-2xl font-light text-yellow-400",children:"Links"}),(0,n.jsxs)("div",{className:"space-y-2",children:[e.linkWork&&(0,n.jsx)("div",{className:"text-green-300 hover:text-green-600 duration-500",children:(0,n.jsx)(l.default,{href:e.linkWork,children:(0,n.jsxs)("a",{className:"flex justify-start md:justify-end",children:[(0,n.jsx)("p",{className:"text-xl",children:"Work Website"}),(0,n.jsxs)("svg",{className:"h-8 w-8",width:"24",height:"24",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:["  ",(0,n.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z"}),"  ",(0,n.jsx)("path",{d:"M11 7h-5a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-5"}),"  ",(0,n.jsx)("line",{x1:"10",y1:"14",x2:"20",y2:"4"}),"  ",(0,n.jsx)("polyline",{points:"15 4 20 4 20 9"})]})]})})}),e.linkGitHub&&(0,n.jsx)("div",{className:"text-green-300 hover:text-green-600 duration-500",children:(0,n.jsx)(l.default,{href:e.linkGitHub,children:(0,n.jsxs)("a",{className:"flex justify-start md:justify-end",children:[(0,n.jsx)("p",{className:"text-xl",children:"GitHub Repository"}),(0,n.jsxs)("svg",{className:"h-8 w-8",width:"24",height:"24",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:["  ",(0,n.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z"}),"  ",(0,n.jsx)("path",{d:"M9 19c-4.286 1.35-4.286-2.55-6-3m12 5v-3.5c0-1 .099-1.405-.5-2 2.791-.3 5.5-1.366 5.5-6.04a4.567 4.567 0 0 0 -1.333 -3.21 4.192 4.192 0 00-.08-3.227s-1.05-.3-3.476 1.267a12.334 12.334 0 0 0 -6.222 0C6.462 2.723 5.413 3.023 5.413 3.023a4.192 4.192 0 0 0 -.08 3.227A4.566 4.566 0 004 9.486c0 4.64 2.709 5.68 5.5 6.014-.591.589-.56 1.183-.5 2V21"})]})]})})})]})]})]}),(0,n.jsx)("div",{className:"md:w-3/5 md:h-full p-4 md:overflow-y-scroll md:hide-scrollbar space-y-4",children:e.images.map((function(e,t){return(0,n.jsx)("img",{src:e,alt:"work image",loading:"lazy"},t)}))})]})})}},1551:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,l,a=[],o=!0,s=!1;try{for(r=r.call(e);!(o=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);o=!0);}catch(i){s=!0,l=i}finally{try{o||null==r.return||r.return()}finally{if(s)throw l}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var a,o=(a=r(7294))&&a.__esModule?a:{default:a},s=r(1003),i=r(880),c=r(9246);var u={};function d(e,t,r,n){if(e&&s.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var l=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;u[t+"%"+r+(l?"%"+l:"")]=!0}}var f=function(e){var t,r=!1!==e.prefetch,n=i.useRouter(),a=o.default.useMemo((function(){var t=l(s.resolveHref(n,e.href,!0),2),r=t[0],a=t[1];return{href:r,as:e.as?s.resolveHref(n,e.as):a||r}}),[n,e.href,e.as]),f=a.href,h=a.as,x=e.children,m=e.replace,p=e.shallow,v=e.scroll,y=e.locale;"string"===typeof x&&(x=o.default.createElement("a",null,x));var g=(t=o.default.Children.only(x))&&"object"===typeof t&&t.ref,j=l(c.useIntersection({rootMargin:"200px"}),2),b=j[0],w=j[1],N=o.default.useCallback((function(e){b(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,b]);o.default.useEffect((function(){var e=w&&r&&s.isLocalURL(f),t="undefined"!==typeof y?y:n&&n.locale,l=u[f+"%"+h+(t?"%"+t:"")];e&&!l&&d(n,f,h,{locale:t})}),[h,f,w,y,r,n]);var k={ref:N,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,l,a,o,i){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&s.isLocalURL(r))&&(e.preventDefault(),t[l?"replace":"push"](r,n,{shallow:a,locale:i,scroll:o}))}(e,n,f,h,m,p,v,y)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),s.isLocalURL(f)&&d(n,f,h,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var L="undefined"!==typeof y?y:n&&n.locale,C=n&&n.isLocaleDomain&&s.getDomainLocale(h,L,n&&n.locales,n&&n.domainLocales);k.href=C||s.addBasePath(s.addLocale(h,L,n&&n.defaultLocale))}return o.default.cloneElement(t,k)};t.default=f},9246:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,l,a=[],o=!0,s=!1;try{for(r=r.call(e);!(o=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);o=!0);}catch(i){s=!0,l=i}finally{try{o||null==r.return||r.return()}finally{if(s)throw l}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,r=e.rootMargin,n=e.disabled||!s,u=a.useRef(),d=l(a.useState(!1),2),f=d[0],h=d[1],x=l(a.useState(t?t.current:null),2),m=x[0],p=x[1],v=a.useCallback((function(e){u.current&&(u.current(),u.current=void 0),n||f||e&&e.tagName&&(u.current=function(e,t,r){var n=function(e){var t,r={root:e.root||null,margin:e.rootMargin||""},n=c.find((function(e){return e.root===r.root&&e.margin===r.margin}));n?t=i.get(n):(t=i.get(r),c.push(r));if(t)return t;var l=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=l.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return i.set(r,t={id:r,observer:a,elements:l}),t}(r),l=n.id,a=n.observer,o=n.elements;return o.set(e,t),a.observe(e),function(){if(o.delete(e),a.unobserve(e),0===o.size){a.disconnect(),i.delete(l);var t=c.findIndex((function(e){return e.root===l.root&&e.margin===l.margin}));t>-1&&c.splice(t,1)}}}(e,(function(e){return e&&h(e)}),{root:m,rootMargin:r}))}),[n,m,r,f]);return a.useEffect((function(){if(!s&&!f){var e=o.requestIdleCallback((function(){return h(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[f]),a.useEffect((function(){t&&p(t.current)}),[t]),[v,f]};var a=r(7294),o=r(4686),s="undefined"!==typeof IntersectionObserver;var i=new Map,c=[]},9008:function(e,t,r){e.exports=r(3121)},1664:function(e,t,r){e.exports=r(1551)}}]);