(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(8804)}])},8418:function(e,r,t){"use strict";function n(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function s(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,s,a=[],l=!0,c=!1;try{for(t=t.call(e);!(l=(n=t.next()).done)&&(a.push(n.value),!r||a.length!==r);l=!0);}catch(i){c=!0,s=i}finally{try{l||null==t.return||t.return()}finally{if(c)throw s}}return a}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return n(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.default=void 0;var a,l=(a=t(7294))&&a.__esModule?a:{default:a},c=t(6273),i=t(387),o=t(7190);var d={};function u(e,r,t,n){if(e&&c.isLocalURL(r)){e.prefetch(r,t,n).catch((function(e){0}));var s=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;d[r+"%"+t+(s?"%"+s:"")]=!0}}var p=function(e){var r,t=!1!==e.prefetch,n=i.useRouter(),a=l.default.useMemo((function(){var r=s(c.resolveHref(n,e.href,!0),2),t=r[0],a=r[1];return{href:t,as:e.as?c.resolveHref(n,e.as):a||t}}),[n,e.href,e.as]),p=a.href,h=a.as,f=e.children,x=e.replace,m=e.shallow,j=e.scroll,y=e.locale;"string"===typeof f&&(f=l.default.createElement("a",null,f));var v=(r=l.default.Children.only(f))&&"object"===typeof r&&r.ref,b=s(o.useIntersection({rootMargin:"200px"}),2),N=b[0],g=b[1],w=l.default.useCallback((function(e){N(e),v&&("function"===typeof v?v(e):"object"===typeof v&&(v.current=e))}),[v,N]);l.default.useEffect((function(){var e=g&&t&&c.isLocalURL(p),r="undefined"!==typeof y?y:n&&n.locale,s=d[p+"%"+h+(r?"%"+r:"")];e&&!s&&u(n,p,h,{locale:r})}),[h,p,g,y,t,n]);var C={ref:w,onClick:function(e){r.props&&"function"===typeof r.props.onClick&&r.props.onClick(e),e.defaultPrevented||function(e,r,t,n,s,a,l,i){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var r=e.currentTarget.target;return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(t))&&(e.preventDefault(),r[s?"replace":"push"](t,n,{shallow:a,locale:i,scroll:l}))}(e,n,p,h,x,m,j,y)},onMouseEnter:function(e){r.props&&"function"===typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),c.isLocalURL(p)&&u(n,p,h,{priority:!0})}};if(e.passHref||"a"===r.type&&!("href"in r.props)){var O="undefined"!==typeof y?y:n&&n.locale,k=n&&n.isLocaleDomain&&c.getDomainLocale(h,O,n&&n.locales,n&&n.domainLocales);C.href=k||c.addBasePath(c.addLocale(h,O,n&&n.defaultLocale))}return l.default.cloneElement(r,C)};r.default=p},7190:function(e,r,t){"use strict";function n(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function s(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,s,a=[],l=!0,c=!1;try{for(t=t.call(e);!(l=(n=t.next()).done)&&(a.push(n.value),!r||a.length!==r);l=!0);}catch(i){c=!0,s=i}finally{try{l||null==t.return||t.return()}finally{if(c)throw s}}return a}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return n(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(r,"__esModule",{value:!0}),r.useIntersection=function(e){var r=e.rootRef,t=e.rootMargin,n=e.disabled||!c,d=a.useRef(),u=s(a.useState(!1),2),p=u[0],h=u[1],f=s(a.useState(r?r.current:null),2),x=f[0],m=f[1],j=a.useCallback((function(e){d.current&&(d.current(),d.current=void 0),n||p||e&&e.tagName&&(d.current=function(e,r,t){var n=function(e){var r,t={root:e.root||null,margin:e.rootMargin||""},n=o.find((function(e){return e.root===t.root&&e.margin===t.margin}));n?r=i.get(n):(r=i.get(t),o.push(t));if(r)return r;var s=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var r=s.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;r&&t&&r(t)}))}),e);return i.set(t,r={id:t,observer:a,elements:s}),r}(t),s=n.id,a=n.observer,l=n.elements;return l.set(e,r),a.observe(e),function(){if(l.delete(e),a.unobserve(e),0===l.size){a.disconnect(),i.delete(s);var r=o.findIndex((function(e){return e.root===s.root&&e.margin===s.margin}));r>-1&&o.splice(r,1)}}}(e,(function(e){return e&&h(e)}),{root:x,rootMargin:t}))}),[n,x,t,p]);return a.useEffect((function(){if(!c&&!p){var e=l.requestIdleCallback((function(){return h(!0)}));return function(){return l.cancelIdleCallback(e)}}}),[p]),a.useEffect((function(){r&&m(r.current)}),[r]),[j,p]};var a=t(7294),l=t(9311),c="undefined"!==typeof IntersectionObserver;var i=new Map,o=[]},8804:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return d}});var n=t(5893),s=t(9008),a=t(1664),l=t(7294),c=function(){return(0,n.jsxs)("header",{className:"flex justify-between items-center p-8",children:[(0,n.jsx)(a.default,{href:"/",children:(0,n.jsx)("a",{className:"text-2xl font-bold",children:(0,n.jsx)("h1",{children:"Hitsuji Rere"})})}),(0,n.jsxs)("nav",{className:"flex gap-10",children:[(0,n.jsx)(a.default,{href:"/#about",children:(0,n.jsx)("a",{className:"text-lg font-bold",children:"About"})}),(0,n.jsx)(a.default,{href:"/#skill",children:(0,n.jsx)("a",{className:"text-lg font-bold",children:"Skill"})}),(0,n.jsx)(a.default,{href:"/#awards",children:(0,n.jsx)("a",{className:"text-lg font-bold",children:"Awards"})}),(0,n.jsx)(a.default,{href:"/#products",children:(0,n.jsx)("a",{className:"text-lg font-bold",children:"Products"})})]})]})},i=function(){return(0,n.jsx)("footer",{children:(0,n.jsx)("div",{className:"m-10 text-center",children:(0,n.jsx)("p",{className:"",children:"Made by HitsujiRere in 2022"})})})},o=function(e){var r,t=(0,l.useState)(null!==(r=e.startOpen)&&void 0!==r&&r),s=t[0],a=t[1],c=(0,l.useState)(!1),i=c[0],o=c[1];return(0,n.jsxs)("div",{className:e.className,onMouseEnter:function(){return o(!0)},onMouseLeave:function(){return o(!1)},children:[(0,n.jsxs)("div",{className:"cursor-pointer relative",onClick:function(){return a(!s)},children:[(0,n.jsx)("span",{className:"font-mono text-gray-300 absolute -left-6 duration-500 "+(!i&&"text-opacity-0"),children:s?"v":">"}),s?e.summaryOpen:e.summaryClose]}),(0,n.jsx)("div",{className:s?"":"hidden",children:e.child})]})},d=function(){return(0,n.jsxs)("div",{children:[(0,n.jsxs)(s.default,{children:[(0,n.jsx)("title",{children:"Hitsuji Rere"}),(0,n.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,n.jsxs)("div",{className:"max-w-screen-xl mx-auto",children:[(0,n.jsx)(c,{}),(0,n.jsxs)("main",{children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("h2",{id:"about",className:"text-3xl font-bold text-center p-6 typewriter",children:"About"}),(0,n.jsx)("div",{className:"bg-black p-8 text-white text-xl w-max mx-auto my-6",children:(0,n.jsxs)("div",{className:"space-y-6 whitespace-pre-wrap",children:[(0,n.jsxs)("p",{children:["const Name = ","'","Hitsuji Rere","'",";"]}),(0,n.jsxs)("p",{children:["const \u306a\u307e\u3048 = ","'","\u3072\u3064\u3058 \u308c\u308c","'",";"]}),(0,n.jsxs)("p",{children:["const Twitter = ",(0,n.jsx)(a.default,{href:"https://twitter.com/HitsujiRere",children:(0,n.jsx)("a",{className:"underline",children:"@HitsujiRere"})}),";"]}),(0,n.jsxs)("p",{children:["const GitHub = ",(0,n.jsx)(a.default,{href:"https://github.com/HitsujiRere",children:(0,n.jsx)("a",{className:"underline",children:"HitsujiRere"})}),";"]})]})})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h2",{id:"skill",className:"text-3xl font-bold text-center p-6",children:"Skill"}),(0,n.jsx)("div",{className:"bg-black p-8 text-white text-xl w-max mx-auto my-6",children:(0,n.jsxs)("div",{className:"space-y-6 whitespace-pre-wrap",children:[(0,n.jsx)(o,{startOpen:!0,summaryOpen:(0,n.jsx)("p",{children:"const Languages = {"}),summaryClose:(0,n.jsx)("p",{children:"const Languages = {...}"}),className:"space-y-6",child:(0,n.jsxs)("div",{className:"space-y-6",children:[(0,n.jsx)("p",{children:"  Good: ["}),(0,n.jsx)("p",{children:"    C, C++, C#, JS, Python,"}),(0,n.jsx)("p",{children:"  ],"}),(0,n.jsx)("p",{children:"  HadUsed: ["}),(0,n.jsx)("p",{children:"    TS, Java,"}),(0,n.jsx)("p",{children:"  ],"}),(0,n.jsx)("p",{children:"  Leaning: ["}),(0,n.jsx)("p",{children:"    Rust, TS,"}),(0,n.jsx)("p",{children:"  ],"}),(0,n.jsxs)("p",{children:["}",";"]})]})}),(0,n.jsx)(o,{startOpen:!0,summaryOpen:(0,n.jsx)("p",{children:"const Skill = {"}),summaryClose:(0,n.jsx)("p",{children:"const Skill = {...}"}),className:"space-y-6",child:(0,n.jsxs)("div",{className:"space-y-6",children:[(0,n.jsxs)("p",{children:["  CompetitiveProgramming: ","{"]}),(0,n.jsx)("p",{children:"    Using: [ C++ ],"}),(0,n.jsxs)("p",{children:["    AtCoder: ","{"]}),(0,n.jsxs)("p",{children:["      User: ",(0,n.jsx)(a.default,{href:"https://atcoder.jp/users/Deji",children:(0,n.jsx)("a",{className:"underline",children:"Deji"})}),","]}),(0,n.jsx)("p",{children:"      HighestRate: 1455,"}),(0,n.jsxs)("p",{children:["    ","}",","]}),(0,n.jsxs)("p",{children:["  ","}",","]}),(0,n.jsxs)("p",{children:["}",";"]})]})})]})})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h2",{id:"awards",className:"text-3xl font-bold text-center p-6",children:"Awards"}),(0,n.jsx)("div",{className:"bg-black p-8 text-white text-xl w-max mx-auto my-6",children:(0,n.jsx)("div",{className:"space-y-6 whitespace-pre-wrap",children:(0,n.jsx)(o,{startOpen:!0,summaryOpen:(0,n.jsx)("p",{children:"const Award = {"}),summaryClose:(0,n.jsx)("p",{children:"const Award = {...}"}),className:"space-y-6",child:(0,n.jsxs)("div",{className:"space-y-6",children:[(0,n.jsx)(o,{startOpen:!0,summaryOpen:(0,n.jsx)("p",{children:"  DCON2021: {"}),summaryClose:(0,n.jsx)("p",{children:"  DCON2021 = {...}"}),className:"space-y-6",child:(0,n.jsxs)("div",{className:"space-y-6",children:[(0,n.jsx)("p",{children:"    Result: 7th,"}),(0,n.jsx)("p",{children:"    Product: \u304a\u3057\u3083\u3079\u308b,"}),(0,n.jsxs)("p",{children:["  ","}",","]})]})}),(0,n.jsx)(o,{startOpen:!0,summaryOpen:(0,n.jsx)("p",{children:"  HIT2020: {"}),summaryClose:(0,n.jsx)("p",{children:"  HIT2020 = {...}"}),className:"space-y-6",child:(0,n.jsxs)("div",{className:"space-y-6",children:[(0,n.jsx)("p",{children:"    Result: ICT\u307e\u3061\u3065\u304f\u308a\u8cde,"}),(0,n.jsx)("p",{children:"    Product: \u30b7\u30de\u30a8\u30fc\u308b,"}),(0,n.jsxs)("p",{children:["  ","}",","]})]})}),(0,n.jsx)(o,{startOpen:!0,summaryOpen:(0,n.jsx)("p",{children:"  \u30d1\u30bd\u30b3\u30f3\u7532\u5b50\u57122020: {"}),summaryClose:(0,n.jsx)("p",{children:"  \u30d1\u30bd\u30b3\u30f3\u7532\u5b50\u57122020 = {...}"}),className:"space-y-6",child:(0,n.jsxs)("div",{className:"space-y-6",children:[(0,n.jsx)("p",{children:"    Result: \u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u90e8\u9580\u672c\u9078\u51fa\u5834,"}),(0,n.jsxs)("p",{children:["  ","}",","]})]})}),(0,n.jsx)(o,{startOpen:!0,summaryOpen:(0,n.jsx)("p",{children:"  \u9ad8\u5c02\u30d7\u30ed\u30b3\u30f32020: {"}),summaryClose:(0,n.jsx)("p",{children:"  \u9ad8\u5c02\u30d7\u30ed\u30b3\u30f32020 = {...}"}),className:"space-y-6",child:(0,n.jsxs)("div",{className:"space-y-6",children:[(0,n.jsxs)("p",{children:["    Result: ","{"]}),(0,n.jsx)("p",{children:"      \u81ea\u7531\u90e8\u9580: \u7279\u5225\u8cde,"}),(0,n.jsx)("p",{children:"      \u30d1\u30c6\u30f3\u30c8\u5be9\u67fb\u90e8\u9580: \u5968\u52b1\u8cde,"}),(0,n.jsxs)("p",{children:["    ","}",","]}),(0,n.jsxs)("p",{children:["  ","}",","]})]})}),(0,n.jsxs)("p",{children:["}",";"]})]})})})})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h2",{id:"products",className:"text-3xl font-bold text-center p-6",children:"Products"}),(0,n.jsx)("div",{className:"bg-black p-8 text-white text-xl w-max mx-auto my-6",children:(0,n.jsx)("div",{className:"space-y-6 whitespace-pre-wrap",children:(0,n.jsx)(o,{startOpen:!0,summaryOpen:(0,n.jsx)("p",{children:"const Products = {"}),summaryClose:(0,n.jsx)("p",{children:"const Products = {...}"}),className:"space-y-6",child:(0,n.jsxs)("div",{className:"space-y-6",children:[(0,n.jsx)("p",{children:"  Writing..."}),(0,n.jsxs)("p",{children:["}",";"]})]})})})})]})]}),(0,n.jsx)(i,{})]})]})}},9008:function(e,r,t){e.exports=t(5443)},1664:function(e,r,t){e.exports=t(8418)}},function(e){e.O(0,[774,888,179],(function(){return r=5301,e(e.s=r);var r}));var r=e.O();_N_E=r}]);