(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405,179],{6071:function(e,t,r){"use strict";var n=r(3038),a=r(862);t.default=void 0;var o=a(r(7294)),i=r(1689),s=r(2441),l=r(5749),c={};function u(e,t,r,n){if(e&&(0,i.isLocalURL)(t)){e.prefetch(t,r,n).catch((function(e){0}));var a=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;c[t+"%"+r+(a?"%"+a:"")]=!0}}var d=function(e){var t=!1!==e.prefetch,r=(0,s.useRouter)(),a=r&&r.pathname||"/",d=o.default.useMemo((function(){var t=(0,i.resolveHref)(a,e.href,!0),r=n(t,2),o=r[0],s=r[1];return{href:o,as:e.as?(0,i.resolveHref)(a,e.as):s||o}}),[a,e.href,e.as]),f=d.href,m=d.as,h=e.children,p=e.replace,g=e.shallow,x=e.scroll,v=e.locale;"string"===typeof h&&(h=o.default.createElement("a",null,h));var b=o.Children.only(h),y=b&&"object"===typeof b&&b.ref,j=(0,l.useIntersection)({rootMargin:"200px"}),w=n(j,2),N=w[0],E=w[1],k=o.default.useCallback((function(e){N(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,N]);(0,o.useEffect)((function(){var e=E&&t&&(0,i.isLocalURL)(f),n="undefined"!==typeof v?v:r&&r.locale,a=c[f+"%"+m+(n?"%"+n:"")];e&&!a&&u(r,f,m,{locale:n})}),[m,f,E,v,t,r]);var _={ref:k,onClick:function(e){b.props&&"function"===typeof b.props.onClick&&b.props.onClick(e),e.defaultPrevented||function(e,t,r,n,a,o,s,l){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(r))&&(e.preventDefault(),null==s&&(s=n.indexOf("#")<0),t[a?"replace":"push"](r,n,{shallow:o,locale:l,scroll:s}))}(e,r,f,m,p,g,x,v)},onMouseEnter:function(e){(0,i.isLocalURL)(f)&&(b.props&&"function"===typeof b.props.onMouseEnter&&b.props.onMouseEnter(e),u(r,f,m,{priority:!0}))}};if(e.passHref||"a"===b.type&&!("href"in b.props)){var O="undefined"!==typeof v?v:r&&r.locale,L=r&&r.isLocaleDomain&&(0,i.getDomainLocale)(m,O,r&&r.locales,r&&r.domainLocales);_.href=L||(0,i.addBasePath)((0,i.addLocale)(m,O,r&&r.defaultLocale))}return o.default.cloneElement(b,_)};t.default=d},5749:function(e,t,r){"use strict";var n=r(3038);t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,r=e.disabled||!i,l=(0,a.useRef)(),c=(0,a.useState)(!1),u=n(c,2),d=u[0],f=u[1],m=(0,a.useCallback)((function(e){l.current&&(l.current(),l.current=void 0),r||d||e&&e.tagName&&(l.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=s.get(t);if(r)return r;var n=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return s.set(t,r={id:t,observer:a,elements:n}),r}(r),a=n.id,o=n.observer,i=n.elements;return i.set(e,t),o.observe(e),function(){i.delete(e),o.unobserve(e),0===i.size&&(o.disconnect(),s.delete(a))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[r,t,d]);return(0,a.useEffect)((function(){if(!i&&!d){var e=(0,o.requestIdleCallback)((function(){return f(!0)}));return function(){return(0,o.cancelIdleCallback)(e)}}}),[d]),[m,d]};var a=r(7294),o=r(8391),i="undefined"!==typeof IntersectionObserver;var s=new Map},8056:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return l},default:function(){return c}});var n=r(5893),a=(r(7294),r(1664)),o=r(9583),i=function(){return(0,n.jsx)("nav",{className:"flex flex-wrap items-center justify-between text-xl text-gray-200",children:(0,n.jsx)("div",{children:(0,n.jsx)("a",{href:"/",className:"font-semibold tracking-tight",children:"compti.me"})})})},s=function(e){var t=e.project;return(0,n.jsx)(a.default,{href:t.url,children:(0,n.jsxs)("div",{className:"max-w-md my-4 shadow-lg cursor-pointer transition-transform duration-500 transform hover:scale-105 md:my-0 md:flex md:mx-auto md:max-w-2xl",children:[(0,n.jsx)("img",{className:"object-cover w-full border border-b-0 border-gray-900 rounded-lg rounded-b-none md:border-b md:border-r-0 md:rounded-bl-lg md:rounded-r-none md:w-1/3 pb-5/6",src:t.image,alt:t.title}),(0,n.jsxs)("div",{className:"w-full px-4 py-4 bg-gray-800 border border-gray-900 rounded-lg rounded-t-none shadow md:rounded-tr-lg md:rounded-l-none md:w-2/3",children:[(0,n.jsx)("h2",{className:"mr-auto text-2xl font-medium ",children:t.title}),(0,n.jsx)("p",{className:"mt-4 text-gray-400 text-md",children:t.description})]})]})})},l=!0,c=function(e){e.posts;return(0,n.jsxs)("div",{className:"container p-4 mx-4 mx-auto lg:w-3/5",children:[(0,n.jsx)(i,{}),(0,n.jsxs)("div",{className:"container",children:[(0,n.jsxs)("section",{className:"flex flex-col my-8 lg:my-24",children:[(0,n.jsxs)("div",{className:"flex flex-row justify-center space-x-4",children:[(0,n.jsx)("h1",{className:"text-4xl lg:text-5xl",children:"Heroic introduction"}),(0,n.jsx)("h1",{className:"text-4xl lg:text-5xl",children:"\ud83d\udc68\u200d\ud83d\udcbb"})]}),(0,n.jsxs)("div",{className:"text-lg text-center text-gray-500 lg:text-xl",children:[(0,n.jsxs)("p",{children:["Hi, I'm Matt, I recently graduated from a",(0,n.jsxs)("a",{href:"https://uk.generation.org/",children:[(0,n.jsx)("strong",{children:" Data Engineering Bootcamp"}),"."]})]}),(0,n.jsx)("p",{children:"On the highway of learning and become a wizard of all things tech."}),(0,n.jsx)("p",{children:"I also post about self-hosting OSS and Unix-like systems."})]}),(0,n.jsxs)("div",{className:"flex flex-row justify-center p-2 text-4xl space-x-2",children:[(0,n.jsx)(a.default,{href:"https://github.com/mattmurr",children:(0,n.jsx)("button",{children:(0,n.jsx)(o.hJX,{className:"hover:text-gray-400 transform hover:scale-105"})})}),(0,n.jsx)(a.default,{href:"https://www.linkedin.com/in/matthew-murray-a8096b1b6/",children:(0,n.jsx)("button",{children:(0,n.jsx)(o.ltd,{className:"hover:text-gray-400 transform hover:scale-105"})})}),(0,n.jsx)(a.default,{href:"mailto:mattmurr.uk@gmail.com",children:(0,n.jsx)("button",{className:"px-3 py-2 text-lg font-semibold bg-gray-700 border border-gray-900 rounded hover:bg-gray-600 animate-bounce",children:"Get in touch"})})]})]}),(0,n.jsx)("section",{children:(0,n.jsx)("div",{className:"justify-center grid grid-col-3 gap-4",children:[{title:"github-user-statistics",description:"WIP React front-end to search for GitHub users using GitHub API, Apollo, GraphQL & React-Waypoint. Hosted on Google Firebase through GitHub Actions.",image:"github-user-statistics.png",url:"https://github-user-statistics.web.app/"},{title:"generation-final-project",description:"Final team project as a part of the Generation 'Get into Data Engineering' bootcamp, Serverless, AWS Lambda, Python3 ETL process. Visualizations with Grafana.",image:"generation-final-project.png",url:"https://github.com/data-engineering-de-lon1-gen-z/team-z"},{title:"mylib",description:"C99 Library containing various data structures and utilities. Vectors, linked lists, hash maps and bitsets",image:"mylib.png",url:"https://github.com/mattmurr/mylib"}].map((function(e,t){return(0,n.jsx)(s,{project:e},t)}))})})]})]})}},8581:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(8056)}])},1664:function(e,t,r){e.exports=r(6071)},4405:function(e,t,r){"use strict";r.d(t,{w_:function(){return c}});var n=r(7294),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=n.createContext&&n.createContext(a),i=function(){return(i=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},s=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&(r[n[a]]=e[n[a]])}return r};function l(e){return e&&e.map((function(e,t){return n.createElement(e.tag,i({key:t},e.attr),l(e.child))}))}function c(e){return function(t){return n.createElement(u,i({attr:i({},e.attr)},t),l(e.child))}}function u(e){var t=function(t){var r,a=e.size||t.size||"1em";t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className);var o=e.attr,l=e.title,c=s(e,["attr","title"]);return n.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,c,{className:r,style:i({color:e.color||t.color},t.style,e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),l&&n.createElement("title",null,l),e.children)};return void 0!==o?n.createElement(o.Consumer,null,(function(e){return t(e)})):t(a)}},4453:function(){}},function(e){e.O(0,[774,445,597],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);