/*! For license information please see main.41dc0850.js.LICENSE.txt */
  width: ${e=>{let{width:t}=e;return null!==t&&void 0!==t?t:"100%"}};
  display: flex;
  padding: 0;
  align-items: ${e=>{let{align:t}=e;return null!==t&&void 0!==t?t:"center"}};
  justify-content: ${e=>{let{justify:t}=e;return null!==t&&void 0!==t?t:"flex-start"}};
  padding: ${e=>{let{padding:t}=e;return t}};
  border: ${e=>{let{border:t}=e;return t}};
  border-radius: ${e=>{let{borderRadius:t}=e;return t}};
`,Jm=(0,im.default)(Zm)`
  justify-content: space-between;
`,Xm=im.default.div`
  display: flex;
  align-items: flex-end;
`,eg=(0,im.default)(Zm)`
  flex-wrap: wrap;
  margin: ${e=>{let{gap:t}=e;return t&&`-${t}`}};
  justify-content: ${e=>{let{justify:t}=e;return t&&t}};

  & > * {
    margin: ${e=>{let{gap:t}=e;return t}} !important;
  }
`,tg=(0,im.default)(Zm)`
  width: fit-content;
  margin: ${e=>{let{gap:t}=e;return t&&`-${t}`}};
  padding: ${e=>{let{padding:t}=e;return t||"18px"}};
  width: ${e=>{let{width:t}=e;return t||"100%"}};
  font-weight: 700;
  text-align: center;
  border-radius: 0;
  border-radius: ${e=>{let{borderRadius:t}=e;return t&&t}};
  outline: none;
  border: 1px solid transparent;
  color: white;
  text-decoration: none;
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  align-items: center;
  cursor: pointer;
  position: relative;
  z-index: 1;
  &:disabled {
    cursor: auto;
  }

  > * {
    user-select: none;
  }
`,tw=(0,im.default)(ew)`
  background-color: ${e=>{let{theme:t}=e;return t.primary1}};
  border-radius: 0;
  height: 56px;
  color: white;
  &:focus {
    box-shadow: 0 0 0 1pt ${e=>{let{theme:t}=e;return zm(.05,t.primary1)}};
    background-color: ${e=>{let{theme:t}=e;return zm(.05,t.primary1)}};
  }
  &:hover {
    background-color: ${e=>{let{theme:t}=e;return zm(.05,t.primary1)}};
  }
  &:active {
    box-shadow: 0 0 0 1pt ${e=>{let{theme:t}=e;return zm(.1,t.primary1)}};
    background-color: ${e=>{let{theme:t}=e;return zm(.1,t.primary1)}};
  }
  &:disabled {
    background-color: #737373;
    color: white;
    cursor: auto;
    box-shadow: none;
    border: 1px solid transparent;
    outline: none;
    opacity: 0.5;
  }
`,nw=(0,im.default)(ew)`
  background-color: #1d1c21;
  color: white;
  font-size: 16px;
  font-weight: 500;
  &:focus {
  }
  &:hover {
  }
  &:active {
  }
  :disabled {
    opacity: 0.4;
    :hover {
      cursor: auto;
      background-color: ${e=>{let{theme:t}=e;return t.primary5}};
      box-shadow: none;
      border: 1px solid transparent;
      outline: none;
    }
  }
`,rw=((0,im.default)(ew)`
  background-color: ${e=>{let{theme:t}=e;return t.bg3}};
  color: ${e=>{let{theme:t}=e;return t.text2}};
  font-size: 16px;
  font-weight: 500;
  &:focus {
    background-color: ${e=>{let{theme:t,disabled:n}=e;return!n&&zm(.05,t.bg4)}};
  }
  &:hover {
    background-color: ${e=>{let{theme:t,disabled:n}=e;return!n&&zm(.05,t.bg4)}};
  }
  &:active {
    background-color: ${e=>{let{theme:t,disabled:n}=e;return!n&&zm(.1,t.bg4)}};
  }
`,(0,im.default)(ew)`
  border: 0;
  color: white;
  background-color: #131216;
  font-size: 16px;
  border-radius: 0;
  padding: 0;

  &:focus {
    box-shadow: 0;
    border: 0;
  }
  &:hover {
    box-shadow: 0;
    border: 0;
  }
  &:active {
    box-shadow: 0;
    border: 0;
  }
  &:disabled {
    opacity: 50%;
    cursor: auto;
  }
  a:hover {
    text-decoration: none;
  }
`),iw=((0,im.default)(ew)`
  background-color: ${e=>{let{theme:t}=e;return t.primary1}};
  color: white;

  &:focus {
    box-shadow: 0 0 0 1pt ${e=>{let{theme:t}=e;return zm(.05,t.primary1)}};
    background-color: ${e=>{let{theme:t}=e;return zm(.05,t.primary1)}};
  }
  &:hover {
    background-color: ${e=>{let{theme:t}=e;return zm(.05,t.primary1)}};
  }
  &:active {
    box-shadow: 0 0 0 1pt ${e=>{let{theme:t}=e;return zm(.1,t.primary1)}};
    background-color: ${e=>{let{theme:t}=e;return zm(.1,t.primary1)}};
  }
  &:disabled {
    background-color: ${e=>{let{theme:t}=e;return t.primary1}};
    opacity: 50%;
    cursor: auto;
  }
`,(0,im.default)(tw)`
  color: white;
  padding: 4px 8px;
  height: 36px;
  font-weight: 500;
  background-color: ${e=>{let{theme:t}=e;return t.bg3}};
  background: radial-gradient(174.47% 188.91% at 1.84% 0%, #ff007a 0%, #2172e5 100%), #edeef2;
  width: fit-content;
  position: relative;
  cursor: pointer;
  border: none;
  white-space: no-wrap;
  :hover {
    opacity: 0.8;
  }
  :active {
    opacity: 0.9;
  }
`,(0,im.default)(ew)`
  border: 1px solid ${e=>{let{theme:t}=e;return t.bg2}};
  background-color: transparent;
  color: ${e=>{let{theme:t}=e;return t.text1}};

  &:focus {
    box-shadow: 0 0 0 1px ${e=>{let{theme:t}=e;return t.bg4}};
  }
  &:hover {
    box-shadow: 0 0 0 1px ${e=>{let{theme:t}=e;return t.bg4}};
  }
  &:active {
    box-shadow: 0 0 0 1px ${e=>{let{theme:t}=e;return t.bg4}};
  }
  &:disabled {
    opacity: 50%;
    cursor: auto;
  }
`),ow=(0,im.default)(ew)`
  background-color: transparent;
  color: ${e=>{let{theme:t}=e;return t.primary1}};
  display: flex;
  justify-content: center;
  align-items: center;

  &:focus {
    text-decoration: underline;
  }
  &:hover {
    text-decoration: none;
  }
  &:active {
    text-decoration: none;
  }
  &:disabled {
    opacity: 50%;
    cursor: auto;
  }
`,sw=((0,im.default)(ew)`
  border: 1px solid #edeef2;
  background-color: ${e=>{let{theme:t}=e;return t.bg1}};
  color: black;

  &:focus {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    box-shadow: 0 0 0 1pt ${zm(.05,"#edeef2")};
  }
  &:hover {
    box-shadow: 0 0 0 1pt ${zm(.1,"#edeef2")};
  }
  &:active {
    box-shadow: 0 0 0 1pt ${zm(.1,"#edeef2")};
  }
  &:disabled {
    opacity: 50%;
    cursor: auto;
  }
`,(0,im.default)(ew)`
  background-color: ${e=>{let{theme:t}=e;return Hm(.5,t.green1)}};
  color: ${e=>{let{theme:t}=e;return t.green1}};
  border: 1px solid ${e=>{let{theme:t}=e;return t.green1}};

  &:disabled {
    opacity: 50%;
    cursor: auto;
  }
`),aw=(0,im.default)(ew)`
  background-color: ${e=>{let{theme:t}=e;return t.red1}};
  border: 1px solid ${e=>{let{theme:t}=e;return t.red1}};

  &:focus {
    box-shadow: 0 0 0 1pt ${e=>{let{theme:t}=e;return zm(.05,t.red1)}};
    background-color: ${e=>{let{theme:t}=e;return zm(.05,t.red1)}};
  }
  &:hover {
    background-color: ${e=>{let{theme:t}=e;return zm(.05,t.red1)}};
  }
  &:active {
    box-shadow: 0 0 0 1pt ${e=>{let{theme:t}=e;return zm(.1,t.red1)}};
    background-color: ${e=>{let{theme:t}=e;return zm(.1,t.red1)}};
  }
  &:disabled {
    opacity: 50%;
    cursor: auto;
    box-shadow: none;
    background-color: ${e=>{let{theme:t}=e;return t.red1}};
    border: 1px solid ${e=>{let{theme:t}=e;return t.red1}};
  }
`;function uw(e){let{confirmed:t,altDisabledStyle:n,...r}=e;return t?(0,zf.jsx)(sw,{...r}):(0,zf.jsx)(tw,{...r,altDisabledStyle:n})}function lw(e){let{error:t,...n}=e;return t?(0,zf.jsx)(aw,{...n}):(0,zf.jsx)(tw,{...n})}function cw(e){let{disabled:t=!1,children:n,...r}=e;return(0,zf.jsx)(iw,{...r,disabled:t,children:(0,zf.jsxs)(Jm,{children:[(0,zf.jsx)("div",{style:{display:"flex",alignItems:"center"},children:n}),(0,zf.jsx)(Xb,{size:24})]})})}var dw=n(75448),hw=n.n(dw);const fw=im.default.div`
  height: 40px;
  width: 40px;
  border-radius: 20px;
  background-color: ${e=>{let{theme:t}=e;return t.bg4}};
  margin-right: 12px;
`;function pw(){const e=(0,u.useRef)(),{account:t}=Ff();return(0,u.useEffect)((()=>{t&&e.current&&(e.current.innerHTML="",e.current.appendChild(hw()(40,parseInt(t.slice(2,10),40))))}),[t]),(0,zf.jsx)(fw,{ref:e})}const mw=im.keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,gw=im.default.svg`
  animation: 2s ${mw} linear infinite;
  height: ${e=>{let{size:t}=e;return t}};
  width: ${e=>{let{size:t}=e;return t}};
  path {
    stroke: ${e=>{let{stroke:t,theme:n}=e;return null!==t&&void 0!==t?t:n.primary1}};
  }
`;function yw(e){let{size:t="16px",stroke:n,...r}=e;return(0,zf.jsx)(gw,{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",size:t,stroke:n,...r,children:(0,zf.jsx)("path",{d:"M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 9.27455 20.9097 6.80375 19.1414 5",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round"})})}var vw,bw,ww=n(73168);function xw(){return xw=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},xw.apply(null,arguments)}function _w(e,t){let{title:n,titleId:r,...i}=e;return u.createElement("svg",xw({xmlns:"http://www.w3.org/2000/svg",width:20,height:20,viewBox:"0 0 20 20",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-x",ref:t,"aria-labelledby":r},i),n?u.createElement("title",{id:r},n):null,vw||(vw=u.createElement("line",{x1:18,y1:6,x2:6,y2:18})),bw||(bw=u.createElement("line",{x1:6,y1:6,x2:18,y2:18})))}const kw=u.forwardRef(_w);n.p;function Aw(e){const t=(0,u.useRef)();return(0,u.useEffect)((()=>{t.current=e}),[e]),t.current}var Ew=n(86748),Sw=n.n(Ew);const Tw=[],Ow=[],Cw=[],Iw=JSON.parse('{"name":"Brownfi tokens","timestamp":"2021-12-21T23:59:15.901Z","version":{"major":2,"minor":3,"patch":0},"tags":{},"logoURI":"ipfs://QmNa8mQkrNKp1WEEeGjFezDmDeodkWRevGFN8JCV7b4Xir","keywords":["default"],"tokens":[{"chainId":1,"address":"0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9","name":"Aave","symbol":"AAVE","decimals":18,"logoURI":"https://assets.coingecko.com/coins/images/12645/thumb/AAVE.png?1601374110"}]}');function Nw(e,t){const n=Ow.includes(e)?Ow.indexOf(e):Number.MAX_SAFE_INTEGER,r=Ow.includes(t)?Ow.indexOf(t):Number.MAX_SAFE_INTEGER;return n<r?1:n>r?-1:0}const Pw=JSON.parse('{"name":"Uniswap V2 Unsupported List","timestamp":"2021-01-05T20:47:02.923Z","version":{"major":1,"minor":0,"patch":0},"tags":{},"logoURI":"ipfs://QmNa8mQkrNKp1WEEeGjFezDmDeodkWRevGFN8JCV7b4Xir","keywords":["uniswap","unsupported"],"tokens":[{"name":"Gold Tether","address":"0x4922a015c4407F87432B179bb209e125432E4a2A","symbol":"XAUt","decimals":6,"chainId":1,"logoURI":"https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x4922a015c4407F87432B179bb209e125432E4a2A/logo.png"},{"name":"Grump Cat","address":"0x93B2FfF814FCaEFFB01406e80B4Ecd89Ca6A021b","symbol":"GRUMPY","decimals":9,"chainId":1,"logoURI":"https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x4922a015c4407F87432B179bb209e125432E4a2A/logo.png"}]}');class jw extends hn.ou{constructor(e,t){super(e.chainId,e.address,e.decimals,e.symbol,e.name),this.tokenInfo=void 0,this.tags=void 0,this.tokenInfo=e,this.tags=t}get logoURI(){return this.tokenInfo.logoURI}}const Mw={[hn.nU.SEPOLIA]:{},[hn.nU.MAINNET]:{},[hn.nU.SN_MAIN]:{},[hn.nU.SN_SEPOLIA]:{}},Rw="undefined"!==typeof WeakMap?new WeakMap:null;function Lw(e){var t;const n=null===Rw||void 0===Rw?void 0:Rw.get(e);if(n)return n;const r=null===e||void 0===e||null===(t=e.tokens)||void 0===t?void 0:t.reduce(((t,n)=>{var r,i,o,s;const a=null!==(r=null===(i=n.tags)||void 0===i||null===(o=i.map((t=>{var n;if(null!==(n=e.tags)&&void 0!==n&&n[t])return{...e.tags[t],id:t}})))||void 0===o?void 0:o.filter((e=>Boolean(e))))&&void 0!==r?r:[],u=new jw(n,a);return void 0!==(null===t||void 0===t||null===(s=t[u.chainId])||void 0===s?void 0:s[u.address])?(console.error(new Error(`Duplicate token! ${u.address}`)),t):{...t,[u.chainId]:{...t[u.chainId],[u.address]:{token:u,list:e}}}}),{...Mw});return console.log("map",r),null===Rw||void 0===Rw||Rw.set(e,r||{}),r||{}}function Dw(){return Ye((e=>e.lists.byUrl))}function Uw(e,t){return{1:{...e[1],...t[1]},[hn.nU.SEPOLIA]:{...e[hn.nU.SEPOLIA],...t[hn.nU.SEPOLIA]},[hn.nU.SN_SEPOLIA]:{...e[hn.nU.SN_SEPOLIA],...t[hn.nU.SN_SEPOLIA]},[hn.nU.SN_MAIN]:{...e[hn.nU.SN_MAIN],...t[hn.nU.SN_MAIN]}}}function Bw(e){const t=Dw();return(0,u.useMemo)((()=>e?e.slice().sort(Nw).reduce(((e,n)=>{var r;const i=null===(r=t[n])||void 0===r?void 0:r.current;if(!i)return e;try{return Uw(e,Object.assign(Lw(i)))}catch(o){return console.error("Could not show token list due to error",o),e}}),Mw):Mw),[t,e])}function Fw(){var e;return null===(e=Ye((e=>e.lists.activeListUrls)))||void 0===e?void 0:e.filter((e=>!Tw.includes(e)))}function zw(){return Uw(Bw(Fw()),Lw(Iw))}function qw(){return Bw(function(){const e=Dw(),t=Fw();return Object.keys(e).filter((e=>!(null!==t&&void 0!==t&&t.includes(e))&&!Tw.includes(e)))}())}var Hw=n(82844);function Vw(e,t){if(0===t.length)return e;const n=eb(t);if(n)return e.filter((e=>e.address===n));const r=t.toLowerCase().split(/\s+/).filter((e=>e.length>0));if(0===r.length)return e;const i=e=>{const t=e.toLowerCase().split(/\s+/).filter((e=>e.length>0));return r.every((e=>0===e.length||t.some((t=>t.startsWith(e)||t.endsWith(e)))))};return e.filter((e=>{const{symbol:t,name:n}=e;return t&&i(t)||n&&i(n)}))}function Ww(e,t){return(0,u.useMemo)((()=>{if(!e)return[];const n=t.toLowerCase().split(/\s+/).filter((e=>e.length>0));if(n.length>1)return e;const r=[],i=[],o=[];return e.map((e=>{var s,a;return(null===(s=e.symbol)||void 0===s?void 0:s.toLowerCase())===n[0]?r.push(e):null!==(a=e.symbol)&&void 0!==a&&a.toLowerCase().startsWith(t.toLowerCase().trim())?i.push(e):o.push(e)})),[...r,...i,...o]}),[e,t])}function Gw(e,t){const{chainId:n}=Ff(),r=wx();return(0,u.useMemo)((()=>{if(!n)return{};const i=Object.keys(e[n]).reduce(((t,r)=>(t[r]=e[n][r].token,t)),{});return t?r.reduce(((e,t)=>(e[t.address]=t,e)),{...i}):i}),[n,r,e,t])}function Kw(){return Gw(zw(),!0)}function Yw(){const e=Gw(qw(),!1),t=Object.keys(Kw());return t?Object.keys(e).reduce(((n,r)=>(t.includes(r)||(n[r]=e[r]),n)),{}):e}function $w(){return Gw(Uw(Lw(Pw),Bw(Tw)),!1)}function Qw(e){const t=wx();return!!e&&!!t.find((t=>(0,hn.Vl)(e,t)))}const Zw=/^0x[a-fA-F0-9]{64}$/;function Jw(e,t,n){return e&&e.length>0?e:t&&Zw.test(t)&&0===(0,hg.arrayify)(t)[31]?(0,Hw.V)(t):n}function Xw(e){const{chainId:t}=Ff(),n=Kw(),r=eb(e),i=Nb(r||void 0,!1),o=function(e,t){return Ob(e,gb,t)}(r||void 0,!1),s=r?n[r]:void 0,a=Lv(s?void 0:i,"name",void 0,Cv),l=Lv(s?void 0:o,"name",void 0,Cv),c=Lv(s?void 0:i,"symbol",void 0,Cv),d=Lv(s?void 0:o,"symbol",void 0,Cv),h=Lv(s?void 0:i,"decimals",void 0,Cv);return(0,u.useMemo)((()=>{if(s)return s;if(t&&r){if(h.loading||c.loading||a.loading)return null;var e,n,i,o;if(h.result)return new hn.ou(t,r,h.result[0],Jw(null===(e=c.result)||void 0===e?void 0:e[0],null===(n=d.result)||void 0===n?void 0:n[0],"UNKNOWN"),Jw(null===(i=a.result)||void 0===i?void 0:i[0],null===(o=l.result)||void 0===o?void 0:o[0],"Unknown Token"))}}),[r,t,h.loading,h.result,c.loading,c.result,d.result,s,a.loading,a.result,l.result])}function ex(e){const t="ETH"===(null===e||void 0===e?void 0:e.toUpperCase()),n=Xw(t?void 0:e);return t?hn.T_:n}const tx=qy("user/updateMatchesDarkMode"),nx=qy("user/updateUserDarkMode"),rx=qy("user/updateUserExpertMode"),ix=qy("user/updateUserSingleHopOnly"),ox=qy("user/updateUserSlippageTolerance"),sx=qy("user/updateUserDeadline"),ax=qy("user/addSerializedToken"),ux=qy("user/removeSerializedToken"),lx=qy("user/addSerializedPair"),cx=qy("user/removeSerializedPair"),dx=qy("app/toggleURLWarning");function hx(e){return{chainId:e.chainId,address:e.address,decimals:e.decimals,symbol:e.symbol,name:e.name}}function fx(e){return new hn.ou(e.chainId,e.address,e.decimals,e.symbol,e.name)}function px(){const{userDarkMode:e,matchesDarkMode:t}=Ye((e=>{let{user:{matchesDarkMode:t,userDarkMode:n}}=e;return{userDarkMode:n,matchesDarkMode:t}}),Qe);return null===e?t:e}function mx(){return Ye((e=>e.user.userExpertMode))}function gx(){const e=We(),t=mx(),n=(0,u.useCallback)((()=>{e(rx({userExpertMode:!t}))}),[t,e]);return[t,n]}function yx(){const e=We(),t=Ye((e=>e.user.userSingleHopOnly));return[t,(0,u.useCallback)((t=>{e(ix({userSingleHopOnly:t}))}),[e])]}function vx(){const e=We(),t=Ye((e=>e.user.userSlippageTolerance)),n=(0,u.useCallback)((t=>{e(ox({userSlippageTolerance:t}))}),[e]);return[t,n]}function bx(){const e=We();return(0,u.useCallback)((t=>{e(ax({serializedToken:hx(t)}))}),[e])}function wx(){const{chainId:e}=Ff(),t=Ye((e=>{let{user:{tokens:t}}=e;return t}));return(0,u.useMemo)((()=>{var n;return e?Object.values(null!==(n=null===t||void 0===t?void 0:t[e])&&void 0!==n?n:{}).map(fx):[]}),[t,e])}function xx(e){return{token0:hx(e.token0),token1:hx(e.token1)}}function _x(){const e=We();return(0,u.useCallback)((()=>e(dx())),[e])}function kx(){const{chainId:e}=Ff(),t=Kw(),n=Ye((e=>{let{user:{pairs:t}}=e;return t})),r=function(e,t,n){const r=(0,u.useMemo)((()=>{var t;return e&&null!==(t=hn.vx[e])&&void 0!==t?t:[]}),[e]),i=(0,u.useMemo)((()=>e?Sw()(Object.keys(t),(n=>{var r;const i=t[n];return(null!==(r=hn.kJ[e])&&void 0!==r?r:[]).map((e=>e.address===i.address?null:[e,i])).filter((e=>null!==e))})):[]),[t,e]),o=(0,u.useMemo)((()=>{if(!e||!n)return[];const t=n[e];return t?Object.keys(t).map((e=>[fx(t[e].token0),fx(t[e].token1)])):[]}),[n,e]),s=(0,u.useMemo)((()=>o.concat(i).concat(r)),[i,r,o]);return(0,u.useMemo)((()=>{const e=s.reduce(((e,t)=>{let[n,r]=t;const i=n.sortsBefore(r),o=i?`${n.address}:${r.address}`:`${r.address}:${n.address}`;return e[o]||(e[o]=i?[n,r]:[r,n]),e}),{});return Object.keys(e).map((t=>e[t]))}),[s])}(e,t,n);return r}var Ax=n(41956);function Ex(){return Ex=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ex.apply(this,arguments)}var Sx=(0,u.forwardRef)((function(e,t){return u.createElement(Ax.az,Ex({ref:t,tx:"text"},e))}));(0,u.forwardRef)((function(e,t){return u.createElement(Ax.az,Ex({ref:t,as:"h2",tx:"text",variant:"heading"},e,{__css:{fontSize:4,fontFamily:"heading",fontWeight:"heading",lineHeight:"heading"}}))})),(0,u.forwardRef)((function(e,t){return u.createElement(Ax.az,Ex({ref:t,as:"a",variant:"link"},e))})),(0,u.forwardRef)((function(e,t){return u.createElement(Ax.az,Ex({ref:t,as:"button",tx:"buttons",variant:"primary"},e,{__css:{appearance:"none",display:"inline-block",textAlign:"center",lineHeight:"inherit",textDecoration:"none",fontSize:"inherit",px:3,py:2,color:"white",bg:"primary",border:0,borderRadius:4}}))})),(0,u.forwardRef)((function(e,t){return u.createElement(Ax.az,Ex({ref:t,as:"img"},e,{__css:{maxWidth:"100%",height:"auto"}}))})),(0,u.forwardRef)((function(e,t){return u.createElement(Ax.az,Ex({ref:t,variant:"card"},e))}));function Tx(){return Tx=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Tx.apply(this,arguments)}function Ox(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var Cx=(0,u.forwardRef)((function(e,t){var n=e.color,r=void 0===n?"currentColor":n,i=e.size,o=void 0===i?24:i,s=Ox(e,["color","size"]);return u.createElement("svg",Tx({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),u.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),u.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"}))}));Cx.propTypes={color:L().string,size:L().oneOfType([L().string,L().number])},Cx.displayName="X";const Ix=Cx;function Nx(){return Nx=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Nx.apply(this,arguments)}function Px(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var jx=(0,u.forwardRef)((function(e,t){var n=e.color,r=void 0===n?"currentColor":n,i=e.size,o=void 0===i?24:i,s=Px(e,["color","size"]);return u.createElement("svg",Nx({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),u.createElement("path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}),u.createElement("polyline",{points:"15 3 21 3 21 9"}),u.createElement("line",{x1:"10",y1:"14",x2:"21",y2:"3"}))}));jx.propTypes={color:L().string,size:L().oneOfType([L().string,L().number])},jx.displayName="ExternalLink";const Mx=jx;function Rx(){return Rx=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Rx.apply(this,arguments)}function Lx(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var Dx=(0,u.forwardRef)((function(e,t){var n=e.color,r=void 0===n?"currentColor":n,i=e.size,o=void 0===i?24:i,s=Lx(e,["color","size"]);return u.createElement("svg",Rx({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),u.createElement("polyline",{points:"3 6 5 6 21 6"}),u.createElement("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}))}));Dx.propTypes={color:L().string,size:L().oneOfType([L().string,L().number])},Dx.displayName="Trash";const Ux=Dx;function Bx(){return Bx=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Bx.apply(this,arguments)}function Fx(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var zx=(0,u.forwardRef)((function(e,t){var n=e.color,r=void 0===n?"currentColor":n,i=e.size,o=void 0===i?24:i,s=Fx(e,["color","size"]);return u.createElement("svg",Bx({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),u.createElement("line",{x1:"19",y1:"12",x2:"5",y2:"12"}),u.createElement("polyline",{points:"12 19 5 12 12 5"}))}));zx.propTypes={color:L().string,size:L().oneOfType([L().string,L().number])},zx.displayName="ArrowLeft";const qx=zx,Hx=im.default.button`
  outline: none;
  border: none;
  font-size: inherit;
  padding: 0;
  margin: 0;
  background: none;
  cursor: pointer;

  :hover {
    opacity: 0.7;
  }

  :focus {
    text-decoration: underline;
  }
`,Vx=(im.default.button.attrs((e=>{let{warning:t,theme:n}=e;return{backgroundColor:t?n.red1:n.primary1}}))`
  padding: 1rem 2rem 1rem 2rem;
  border-radius: 3rem;
  cursor: pointer;
  user-select: none;
  font-size: 1rem;
  border: none;
  outline: none;
  background-color: ${e=>{let{backgroundColor:t}=e;return t}};
  color: ${e=>{let{theme:t}=e;return t.white}};
  width: 100%;

  :hover,
  :focus {
    background-color: ${e=>{let{backgroundColor:t}=e;return zm(.05,t)}};
  }

  :active {
    background-color: ${e=>{let{backgroundColor:t}=e;return zm(.1,t)}};
  }

  :disabled {
    background-color: ${e=>{let{theme:t}=e;return t.bg1}};
    color: ${e=>{let{theme:t}=e;return t.text4}};
    cursor: auto;
  }
`,(0,im.default)(Ix)`
  cursor: pointer;
`),Wx=im.default.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${e=>{let{size:t}=e;return null!==t&&void 0!==t?t:"20px"}};
  height: ${e=>{let{size:t}=e;return null!==t&&void 0!==t?t:"20px"}};
  margin-right: ${e=>{let{marginRight:t}=e;return null!==t&&void 0!==t?t:0}};
  margin-left: ${e=>{let{marginLeft:t}=e;return null!==t&&void 0!==t?t:0}};
  & > * {
    stroke: ${e=>{let{theme:t,stroke:n}=e;return null!==n&&void 0!==n?n:t.blue1}};
  }
`,Gx=im.default.button`
  border: none;
  text-decoration: none;
  background: none;

  cursor: ${e=>{let{disabled:t}=e;return t?"default":"pointer"}};
  color: ${e=>{let{theme:t,disabled:n}=e;return n?t.text2:t.greenMain}};
  font-weight: 500;

  :hover {
    text-decoration: ${e=>{let{disabled:t}=e;return t?null:"underline"}};
  }

  :focus {
    outline: none;
    text-decoration: ${e=>{let{disabled:t}=e;return t?null:"underline"}};
  }

  :active {
    text-decoration: none;
  }
`,Kx=(0,im.default)(un)`
  text-decoration: none;
  cursor: pointer;
  color: #27e3ab;
  font-weight: 500;

  :hover {
    text-decoration: underline;
  }

  :focus {
    outline: none;
    text-decoration: underline;
  }

  :active {
    text-decoration: none;
  }
`,Yx=im.default.a`
  text-decoration: none;
  cursor: pointer;
  color: #27e3ab;
  font-weight: 500;

  :hover {
    text-decoration: underline;
  }

  :focus {
    outline: none;
    text-decoration: underline;
  }

  :active {
    text-decoration: none;
  }
`,$x=im.default.a`
  text-decoration: none;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  display: flex;

  :hover {
    text-decoration: none;
    opacity: 0.7;
  }

  :focus {
    outline: none;
    text-decoration: none;
  }

  :active {
    text-decoration: none;
  }
`,Qx=(0,im.default)(Mx)`
  height: 16px;
  width: 18px;
  margin-left: 10px;
  stroke: ${e=>{let{theme:t}=e;return t.greenMain}};
`,Zx=(0,im.default)(Ux)`
  height: 16px;
  width: 18px;
  margin-left: 10px;
  stroke: ${e=>{let{theme:t}=e;return t.text3}};

  cursor: pointer;
  align-items: center;
  justify-content: center;
  display: flex;

  :hover {
    opacity: 0.7;
  }
`,Jx=im.keyframes`
  0% {
    transform: perspective(1000px) rotateY(0deg);
  }

  100% {
    transform: perspective(1000px) rotateY(360deg);
  }
`;im.default.img`
  animation: ${Jx} 5s cubic-bezier(0.83, 0, 0.17, 1) infinite;
  padding: 2rem 0 0 0;
  filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.15));
`;function Xx(e){let{target:t="_blank",href:n,rel:r="noopener noreferrer",...i}=e;const o=(0,u.useCallback)((e=>{"_blank"===t||e.ctrlKey||e.metaKey?Ie.outboundLink({label:n},(()=>{console.debug("Fired outbound link event",n)})):(e.preventDefault(),Ie.outboundLink({label:n},(()=>{window.location.href=n})))}),[n,t]);return(0,zf.jsx)(Yx,{target:t,rel:r,href:n,onClick:o,...i})}function e_(e){let{target:t="_blank",href:n,rel:r="noopener noreferrer",...i}=e;const o=(0,u.useCallback)((e=>{"_blank"===t||e.ctrlKey||e.metaKey?Ie.outboundLink({label:n},(()=>{console.debug("Fired outbound link event",n)})):(e.preventDefault(),Ie.outboundLink({label:n},(()=>{window.location.href=n})))}),[n,t]);return(0,zf.jsx)($x,{target:t,rel:r,href:n,onClick:o,...i,children:(0,zf.jsx)(Qx,{color:"#27E3AB"})})}const t_=im.keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,n_=im.default.img`
  animation: 2s ${t_} linear infinite;
  width: 16px;
  height: 16px;
`,r_=(0,im.default)(Kx)`
  color: ${e=>{let{theme:t}=e;return t.text1}};
`;function i_(e){let{to:t}=e;return(0,zf.jsx)(r_,{to:t,children:(0,zf.jsx)(qx,{})})}const o_=(0,im.default)(n_)`
  height: ${e=>{let{size:t}=e;return t}};
  width: ${e=>{let{size:t}=e;return t}};
`,s_=im.default.span`
  ${e=>{let{theme:t}=e;return t.mediaWidth.upToSmall`
    display: none;
  `}};
`,a_=(im.default.span`
  ${e=>{let{theme:t}=e;return t.mediaWidth.upToExtraSmall`
    display: none;
  `}};
`,im.default.span`
  display: none;
  ${e=>{let{theme:t}=e;return t.mediaWidth.upToExtraSmall`
    display: block;
  `}};
`,{upToExtraSmall:500,upToSmall:720,upToMedium:960,upToLarge:1280}),u_=Object.keys(a_).reduce(((e,t)=>(e[t]=(e,n,r)=>im.css`
      @media (max-width: ${a_[t]}px) {
        ${(0,im.css)(e,n,r)}
      }
    `,e)),{}),l_="#FFFFFF",c_="#000000";function d_(e){return{white:l_,black:c_,text1:e?"#FFFFFF":"#000000",text2:e?"#C3C5CB":"#565A69",text3:e?"#6C7284":"#888D9B",text4:e?"#565A69":"#C3C5CB",text5:e?"#2C2F36":"#EDEEF2",bg1:"#3F3D44",bg2:e?"#2C2F36":"#F7F8FA",bg3:e?"#40444F":"#EDEEF2",bg4:e?"#565A69":"#CED0D9",bg5:e?"#6C7284":"#888D9B",modalBG:e?"rgba(0,0,0,.425)":"rgba(0,0,0,0.3)",advancedBG:e?"rgba(0,0,0,0.1)":"rgba(255,255,255,0.6)",primary1:"#773030",primary2:e?"#3680E7":"#FF8CC3",primary3:e?"#4D8FEA":"#FF99C9",primary4:e?"#376bad70":"#F6DDE8",primary5:e?"#153d6f70":"#FDEAF1",primaryText1:e?"#6da8ff":"#ff007a",secondary1:e?"#2172E5":"#ff007a",secondary2:e?"#17000b26":"#F6DDE8",secondary3:e?"#17000b26":"#FDEAF1",red1:"#FD4040",red2:"#F82D3A",red3:"#D60000",green1:"#27AE60",yellow1:"#FFE270",yellow2:"#F3841E",blue1:"#2172E5",menuText:"rgba(255, 255, 255, 0.5)",greenMain:"#27E3AB"}}function h_(e){let{children:t}=e;const n=px(),r=(0,u.useMemo)((()=>function(e){return{...d_(e),grids:{sm:8,md:12,lg:24},shadow1:e?"#000":"#2F80ED",mediaWidth:u_,flexColumnNoWrap:im.css`
      display: flex;
      flex-flow: column nowrap;
    `,flexRowNoWrap:im.css`
      display: flex;
      flex-flow: row nowrap;
    `}}(n)),[n]);return(0,zf.jsx)(im.ThemeProvider,{theme:r,children:t})}const f_=(0,im.default)(Sx)`
  color: ${e=>{let{color:t,theme:n}=e;return n[t]}};
`,p_={main:e=>(0,zf.jsx)(f_,{fontWeight:500,color:"text2",...e}),link:e=>(0,zf.jsx)(f_,{fontWeight:500,color:"primary1",...e}),black:e=>(0,zf.jsx)(f_,{fontWeight:500,color:"white",...e}),white:e=>(0,zf.jsx)(f_,{fontWeight:500,color:"white",...e}),body:e=>(0,zf.jsx)(f_,{fontWeight:500,fontSize:16,color:"text1",...e}),largeHeader:e=>(0,zf.jsx)(f_,{fontWeight:600,fontSize:24,...e}),mediumHeader:e=>(0,zf.jsx)(f_,{fontWeight:500,fontSize:20,...e}),subHeader:e=>(0,zf.jsx)(f_,{fontWeight:500,fontSize:14,...e}),small:e=>(0,zf.jsx)(f_,{fontWeight:500,fontSize:11,...e}),blue:e=>(0,zf.jsx)(f_,{fontWeight:500,color:"blue1",...e}),yellow:e=>(0,zf.jsx)(f_,{fontWeight:500,color:"yellow1",...e}),darkGray:e=>(0,zf.jsx)(f_,{fontWeight:500,color:"text3",...e}),gray:e=>(0,zf.jsx)(f_,{fontWeight:500,color:"bg3",...e}),italic:e=>(0,zf.jsx)(f_,{fontWeight:500,fontSize:12,fontStyle:"italic",color:"text2",...e}),error(e){let{error:t,...n}=e;return(0,zf.jsx)(f_,{fontWeight:500,color:t?"red1":"text2",...n})}},m_=im.createGlobalStyle`
html, input, textarea, button {
  font-family: "Montserrat", sans-serif !important;
  font-display: fallback;
  font-weight: 500;
}
@supports (font-variation-settings: normal) {
  html, input, textarea, button {
    font-family: 'Montserrat var', sans-serif;
    font-weight: 500;
  }
}

html,
body {
  margin: 0;
  padding: 0;
}

 a {
   color: ${d_(!1).blue1}; 
 }

* {
  box-sizing: border-box;
}

button {
  user-select: none;
}

html {
  font-size: 16px;
  font-variant: none;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  font-feature-settings: 'ss01' on, 'ss02' on, 'cv01' on, 'cv03' on;
  
}
`,g_=im.createGlobalStyle`
html {
  color: ${e=>{let{theme:t}=e;return t.text1}};
  background-color: ${e=>{let{theme:t}=e;return t.bg2}};
}

body {
  min-height: 100vh;
  background-position: 0 -30vh;
  background-repeat: no-repeat;
  background-image: ${e=>{let{theme:t}=e;return`radial-gradient(50% 50% at 50% 50%, ${$m(.9,t.primary1)} 0%, ${$m(1,t.bg1)} 100%)`}};
}
`;var y_=n(75270),v_=n.n(y_);function b_(){return b_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},b_.apply(this,arguments)}function w_(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var x_=(0,u.forwardRef)((function(e,t){var n=e.color,r=void 0===n?"currentColor":n,i=e.size,o=void 0===i?24:i,s=w_(e,["color","size"]);return u.createElement("svg",b_({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),u.createElement("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),u.createElement("polyline",{points:"22 4 12 14.01 9 11.01"}))}));x_.propTypes={color:L().string,size:L().oneOfType([L().string,L().number])},x_.displayName="CheckCircle";const __=x_;function k_(){return k_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},k_.apply(this,arguments)}function A_(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var E_=(0,u.forwardRef)((function(e,t){var n=e.color,r=void 0===n?"currentColor":n,i=e.size,o=void 0===i?24:i,s=A_(e,["color","size"]);return u.createElement("svg",k_({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),u.createElement("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"}),u.createElement("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"}))}));E_.propTypes={color:L().string,size:L().oneOfType([L().string,L().number])},E_.displayName="Copy";const S_=E_,T_=(0,im.default)(Gx)`
  color: ${e=>{let{theme:t}=e;return t.text3}};
  flex-shrink: 0;
  display: flex;
  text-decoration: none;
  font-size: 0.825rem;
  :hover,
  :active,
  :focus {
    text-decoration: none;
    color: ${e=>{let{theme:t}=e;return t.greenMain}};
  }
`,O_=im.default.span`
  margin-left: 0.25rem;
  font-size: 0.825rem;
  ${e=>{let{theme:t}=e;return t.flexRowNoWrap}};
  align-items: center;
  color: #27e3ab;
  margin-right: 0.5rem;
  display: flex;
  align-items: center;
  :hover {
    text-decoration: underline;
  }
`,L_=(0,im.default)(Xx)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: none !important;
  border-radius: 0.5rem;
  padding: 0.25rem 0rem;
  font-weight: 500;
  font-size: 0.825rem;
  color: ${e=>{let{theme:t}=e;return t.primary1}};
`,D_=im.default.div`
  color: ${e=>{let{pending:t,success:n,theme:r}=e;return t?r.primary1:n?r.green1:r.red1}};
`;function U_(e){var t,n;let{hash:r}=e;const{chainId:i}=Ff(),o=Kb(),s=null===o||void 0===o?void 0:o[r],a=null===s||void 0===s?void 0:s.summary,u=!(null!==s&&void 0!==s&&s.receipt),l=!u&&s&&(1===(null===(t=s.receipt)||void 0===t?void 0:t.status)||"undefined"===typeof(null===(n=s.receipt)||void 0===n?void 0:n.status));return i?(0,zf.jsx)(M_,{children:(0,zf.jsxs)(L_,{href:tb(i,r,"transaction"),pending:u,success:l,children:[(0,zf.jsx)(tg,{children:(0,zf.jsxs)(R_,{className:"text-[#27E3AB]",children:[null!==a&&void 0!==a?a:r," \u2197"]})}),(0,zf.jsx)(D_,{pending:u,success:l,children:u?(0,zf.jsx)(yw,{}):l?(0,zf.jsx)(__,{size:"16"}):(0,zf.jsx)(j_,{size:"16"})})]})}):null}const B_=im.default.div`
  ${e=>{let{theme:t}=e;return t.flexRowNoWrap}};
  padding: 32px 40px 20px 40px;
  font-weight: 500;
  color: white;
  ${e=>{let{theme:t}=e;return t.mediaWidth.upToMedium`
    padding: 1rem;
  `}};