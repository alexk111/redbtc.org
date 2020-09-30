(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{116:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/kraken-exchange-ba93152f90f734836a69f4d8966b7c04.png"},74:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return s}));var a=t(2),r=t(6),o=(t(0),t(78)),i={id:"kraken-exchange",title:"Kraken Exchange",sidebar_label:"Kraken Exchange",hide_table_of_contents:!0,image:"/img/og-images/btcpay-kraken.png"},c={unversionedId:"integrations/kraken-exchange",id:"integrations/kraken-exchange",isDocsHomePage:!1,title:"Kraken Exchange",description:"This flow instantly exchanges a defined percentage of Bitcoin amount from each paid invoice to fiat using Kraken.",source:"@site/flows/integrations/kraken-exchange.md",slug:"/integrations/kraken-exchange",permalink:"/flows/integrations/kraken-exchange",editUrl:"https://github.com/redbtc/redbtc.org/edit/master/flows/integrations/kraken-exchange.md",version:"current",lastUpdatedBy:"Alex Kaul",lastUpdatedAt:1601477139,sidebar_label:"Kraken Exchange",sidebar:"flows",previous:{title:"Telegram Notifications",permalink:"/flows/integrations/telegram-notifications"},next:{title:"Telegram Gatekeeper",permalink:"/flows/applications/telegram-gatekeeper"}},l=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Configuration &amp; Setup",id:"configuration--setup",children:[]},{value:"Node-RED Flow",id:"node-red-flow",children:[]}],p={rightToc:l};function s(e){var n=e.components,i=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,i,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This flow instantly exchanges a defined percentage of Bitcoin amount from each paid invoice to fiat using ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.kraken.com/"}),"Kraken"),"."),Object(o.b)("p",null,"It is useful when you have to convert some part of your Bitcoin revenue to fiat to cover business expenses and want to cut the short term volatility risks."),Object(o.b)("p",null,Object(o.b)("img",{alt:"Kraken Exchange Flow",src:t(116).default})),Object(o.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(o.b)("p",null,"This flow requires the following node to be installed on your Node-RED:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/redbtc/node-red-contrib-kraken"}),"node-red-contrib-kraken"))),Object(o.b)("h2",{id:"configuration--setup"},"Configuration & Setup"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Import the Node-RED Flow"),Object(o.b)("li",{parentName:"ol"},'Open the "Configuration nodes" panel in Node-RED (via tabs on the right panel or ',Object(o.b)("inlineCode",{parentName:"li"},"ctrl-g c")," shortcut) and configure the config-nodes:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"btcpay-api-config")," - create a store on your BTCPay Server and pair the node with it (",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/configuration"}),"read more"),")"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"kraken-api-config")," - create Kraken API keys and copy/paste them to the node (",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/redbtc/node-red-contrib-kraken#configuration"}),"read more"),")"))),Object(o.b)("li",{parentName:"ol"},'Double-click the initial "/btcpay-ipn" node and ',Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/handling-ipn"}),"configure it")," to receive POST notifications from your BTCPay Server"),Object(o.b)("li",{parentName:"ol"},"Now add the notification URL to the processes that create invoices for you. Calls to BTCPay's Create Invoice API should have the ",Object(o.b)("inlineCode",{parentName:"li"},"notificationUrl")," property with the URL you specified in the previous step"),Object(o.b)("li",{parentName:"ol"},'Double-click the "\ud83d\udd28 Volume calc" node and set your formula for calculating the amount of Bitcoin to exchange (by default, the flow calcs 20% of the amount)'),Object(o.b)("li",{parentName:"ol"},'Double-click the "\ud83d\udd28 Order params" node and change the params of Kraken orders (by default, the flow adds market orders to sell on BTCUSD)'),Object(o.b)("li",{parentName:"ol"},"Push ",Object(o.b)("inlineCode",{parentName:"li"},"Deploy")),Object(o.b)("li",{parentName:"ol"},"Done! Now the flow will automatically add an order on Kraken for each paid invoice.")),Object(o.b)("h2",{id:"node-red-flow"},"Node-RED Flow"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),'[\n    {\n        "id": "b90eb096.32c2f",\n        "type": "btcpay-ipn",\n        "z": "1cb4cf41.7bd001",\n        "client": "9711e4a7.bae348",\n        "path": "/btcpay-ipn",\n        "name": "",\n        "x": 300,\n        "y": 220,\n        "wires": [\n            [\n                "c491e699.0bf9e8"\n            ]\n        ]\n    },\n    {\n        "id": "c491e699.0bf9e8",\n        "type": "switch",\n        "z": "1cb4cf41.7bd001",\n        "name": "check status",\n        "property": "payload.status",\n        "propertyType": "msg",\n        "rules": [\n            {\n                "t": "eq",\n                "v": "confirmed",\n                "vt": "str"\n            },\n            {\n                "t": "eq",\n                "v": "complete",\n                "vt": "str"\n            }\n        ],\n        "checkall": "false",\n        "repair": false,\n        "outputs": 2,\n        "x": 490,\n        "y": 220,\n        "wires": [\n            [\n                "4864de49.03da7"\n            ],\n            [\n                "4864de49.03da7"\n            ]\n        ]\n    },\n    {\n        "id": "b2abd0f9.5e357",\n        "type": "change",\n        "z": "1cb4cf41.7bd001",\n        "name": "\ud83d\udd28 Order params",\n        "rules": [\n            {\n                "t": "set",\n                "p": "payload.pair",\n                "pt": "msg",\n                "to": "BTCUSD",\n                "tot": "str"\n            },\n            {\n                "t": "set",\n                "p": "payload.type",\n                "pt": "msg",\n                "to": "sell",\n                "tot": "str"\n            },\n            {\n                "t": "set",\n                "p": "payload.ordertype",\n                "pt": "msg",\n                "to": "market",\n                "tot": "str"\n            },\n            {\n                "t": "move",\n                "p": "volume",\n                "pt": "msg",\n                "to": "payload.volume",\n                "tot": "msg"\n            }\n        ],\n        "action": "",\n        "property": "",\n        "from": "",\n        "to": "",\n        "reg": false,\n        "x": 710,\n        "y": 240,\n        "wires": [\n            [\n                "4c28fe8c.17c1a"\n            ]\n        ]\n    },\n    {\n        "id": "4c28fe8c.17c1a",\n        "type": "kraken-api",\n        "z": "1cb4cf41.7bd001",\n        "client": "e7d5dfc4.78443",\n        "method": "private/AddOrder",\n        "name": "",\n        "x": 920,\n        "y": 220,\n        "wires": [\n            []\n        ]\n    },\n    {\n        "id": "4864de49.03da7",\n        "type": "function",\n        "z": "1cb4cf41.7bd001",\n        "name": "\ud83d\udd28 Volume calc",\n        "func": "// order volume = 20% of <btc paid>\\nmsg.volume = parseFloat(msg.payload.btcPaid) * 0.2;\\n\\nif (isNaN(msg.volume)) {\\n    throw new Error(\\"Got invalid `msg.payload.btcPaid` value\\")\\n}\\n\\ndelete msg.payload;\\n\\nreturn msg;",\n        "outputs": 1,\n        "noerr": 0,\n        "initialize": "",\n        "finalize": "",\n        "x": 700,\n        "y": 200,\n        "wires": [\n            [\n                "b2abd0f9.5e357"\n            ]\n        ]\n    },\n    {\n        "id": "9711e4a7.bae348",\n        "type": "btcpay-api-config",\n        "z": "",\n        "name": ""\n    },\n    {\n        "id": "e7d5dfc4.78443",\n        "type": "kraken-api-config",\n        "z": "",\n        "name": "Kraken Client"\n    }\n]\n')))}s.isMDXComponent=!0},78:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return f}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=r.a.createContext({}),s=function(e){var n=r.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=s(e.components);return r.a.createElement(p.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},u=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(t),u=a,f=d["".concat(i,".").concat(u)]||d[u]||b[u]||o;return t?r.a.createElement(f,c(c({ref:n},p),{},{components:t})):r.a.createElement(f,c({ref:n},p))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=t[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);