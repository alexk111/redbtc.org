(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{65:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(6),i=(n(0),n(77)),o={id:"making-requests",title:"Making Requests",sidebar_label:"Making Requests",description:"Making BTCPay API requests using BTCPay API node"},s={unversionedId:"making-requests",id:"making-requests",isDocsHomePage:!1,title:"Making Requests",description:"Making BTCPay API requests using BTCPay API node",source:"@site/docs/making-requests.md",slug:"/making-requests",permalink:"/docs/making-requests",editUrl:"https://github.com/redbtc/redbtc.org/edit/master/docs/making-requests.md",version:"current",sidebar_label:"Making Requests",sidebar:"docs",previous:{title:"Configuration",permalink:"/docs/configuration"},next:{title:"Handling Instant Payment Notifications",permalink:"/docs/handling-ipn"}},c=[],p={rightToc:c};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"To make requests using the ",Object(i.b)("inlineCode",{parentName:"p"},"btcpay-api")," node, set the ",Object(i.b)("inlineCode",{parentName:"p"},"http method")," and the url ",Object(i.b)("inlineCode",{parentName:"p"},"path")," to the API endpoint the node will call. These can be either specified in the node settings, or provided in ",Object(i.b)("inlineCode",{parentName:"p"},"msg.method"),' (if the method is "via msg.method") and in ',Object(i.b)("inlineCode",{parentName:"p"},"msg.path")," (if the path is empty). The request body is the data in ",Object(i.b)("inlineCode",{parentName:"p"},"msg.payload"),"."),Object(i.b)("p",null,"After executing a request the node returns a message with the response data set to ",Object(i.b)("inlineCode",{parentName:"p"},"msg.payload"),"."))}u.isMDXComponent=!0},77:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=u(n),m=r,b=l["".concat(o,".").concat(m)]||l[m]||d[m]||i;return n?a.a.createElement(b,s(s({ref:t},p),{},{components:n})):a.a.createElement(b,s({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);