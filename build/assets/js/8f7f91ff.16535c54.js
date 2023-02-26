"use strict";(self.webpackChunkrouter_docs=self.webpackChunkrouter_docs||[]).push([[4791],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(r),g=o,f=u["".concat(c,".").concat(g)]||u[g]||d[g]||a;return r?n.createElement(f,s(s({ref:t},p),{},{components:r})):n.createElement(f,s({ref:t},p))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},46706:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const a={title:"Check and Set Allowances",sidebar_position:2},s=void 0,i={unversionedId:"tools/voyager-js-sdk/performing-cross-chain-transaction/check-set-allowance",id:"tools/voyager-js-sdk/performing-cross-chain-transaction/check-set-allowance",title:"Check and Set Allowances",description:"You need to provide allowance for the wrapped version of the native asset to perform native asset transfers/swaps.",source:"@site/docs/voyager/tools/voyager-js-sdk/performing-cross-chain-transaction/check-set-allowance.md",sourceDirName:"tools/voyager-js-sdk/performing-cross-chain-transaction",slug:"/tools/voyager-js-sdk/performing-cross-chain-transaction/check-set-allowance",permalink:"/voyager/tools/voyager-js-sdk/performing-cross-chain-transaction/check-set-allowance",draft:!1,editUrl:"https://github.com/router-protocol/docs/tree/main/docs/voyager/tools/voyager-js-sdk/performing-cross-chain-transaction/check-set-allowance.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Check and Set Allowances",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Request a Quote",permalink:"/voyager/tools/voyager-js-sdk/performing-cross-chain-transaction/request-quote"},next:{title:"Execute the Transaction",permalink:"/voyager/tools/voyager-js-sdk/performing-cross-chain-transaction/execute-transaction"}},c={},l=[{value:"Getting Allowance",id:"getting-allowance",level:3},{value:"Setting Approval",id:"setting-approval",level:3},{value:"Example",id:"example",level:3}],p={toc:l};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"You need to provide allowance for the wrapped version of the native asset to perform ",(0,o.kt)("a",{parentName:"p",href:"../../configurations/native-assets"},"native asset")," transfers/swaps.")),(0,o.kt)("h3",{id:"getting-allowance"},"Getting Allowance"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'const src_token_allowance = await routerprotocol.getSourceTokenAllowance("TOKEN_ADDRESS", "DESTINATION_CHAIN_ID", "USER_ADDRESS")\n')),(0,o.kt)("h3",{id:"setting-approval"},"Setting Approval"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'await routerprotocol.approveSourceToken("TOKEN_ADDRESS","USER_ADDRESS", "AMOUNT_TO_BE_APPROVED", "DESTINATION_CHAIN_ID", "SOURCE_SIGNER")\n')),(0,o.kt)("h3",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'import { RouterProtocol } from "@routerprotocol/router-js-sdk"\nimport { ethers } from "ethers";\n\nconst main = async() => {\n\n// initialize a RouterProtocol instance\n\n// setting the arguments for the cross-chain swap\nlet args = {\n    amount: (ethers.utils.parseUnits("10.0", 6)).toString(), // 10 USDC\n    dest_chain_id: 250, // Fantom\n    src_token_address: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174", // USDC on Polygon\n    dest_token_address: "0x04068DA6C83AFCFA0e13ba15A6696662335D5B75", // USDC on Fantom\n    user_address: "YOUR_WALLET_ADDRESS",\n    fee_token_address: "0x16ECCfDbb4eE1A85A33f3A9B21175Cd7Ae753dB4", // ROUTE on Polygon\n    slippage_tolerance: 1.0\n}\n\n// getting allowance\nconst wallet = new ethers.Wallet("YOUR_PRIVATE_KEY", provider) // provider was set up while initializing an instance of RouterProtocol\n// use provider.getSigner() method to get a signer if you\'re using this for a UI\n\nlet src_token_allowance = await routerprotocol.getSourceTokenAllowance(args.src_token_address, args.dest_chain_id, args.user_address)\nif(src_token_allowance.lt(ethers.constants.MaxUint256)){\n        await routerprotocol.approveSourceToken(args.src_token_address, args.user_address, ethers.constants.MaxUint256, args.dest_chain_id, wallet)\n}\n\nif(ethers.utils.getAddress(args.src_token_address) !== ether.utils.getAddress(args.fee_token_address)){\n    let fee_token_allowance = await routerprotocol.getFeeTokenAllowance(args.fee_token_address, args.dest_chain_id, args.user_address)\n    if(fee_token_allowance.lt(ethers.constants.MaxUint256)){\n        await routerprotocol.approveFeeToken(args.fee_token_address, args.user_address, ethers.constants.MaxUint256, wallet)\n    }\n}\n\n}\n\nmain()\n')))}d.isMDXComponent=!0}}]);