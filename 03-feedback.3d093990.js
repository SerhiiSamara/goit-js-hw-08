!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n,r={},i=document.querySelector(".feedback-form"),o=null!==(n=JSON.parse(localStorage.getItem("feedback-form-state")))&&void 0!==n?n:{},a={},u={};Object.defineProperty(u,"__esModule",{value:!0}),u.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var l,f,c,s,d="Expected a function",v=/^\s+|\s+$/g,m=/^[-+]0x[0-9a-f]+$/i,g=/^0b[01]+$/i,b=/^0o[0-7]+$/i,p=parseInt,y="object"==typeof e&&e&&e.Object===Object&&e,T="object"==typeof self&&self&&self.Object===Object&&self,j=y||T||Function("return this")(),O=Object.prototype.toString,S=Math.max,h=Math.min,w=function(){return j.Date.now()};function N(e,t,n){var r,i,o,a,u,l,f=0,c=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(d);function m(t){var n=r,o=i;return r=i=void 0,f=t,a=e.apply(o,n)}function g(e){return f=e,u=setTimeout(p,t),c?m(e):a}function b(e){var n=e-l;return void 0===l||n>=t||n<0||s&&e-f>=o}function p(){var e=w();if(b(e))return y(e);u=setTimeout(p,function(e){var n=t-(e-l);return s?h(n,o-(e-f)):n}(e))}function y(e){return u=void 0,v&&r?m(e):(r=i=void 0,a)}function T(){var e=w(),n=b(e);if(r=arguments,i=this,l=e,n){if(void 0===u)return g(l);if(s)return u=setTimeout(p,t),m(l)}return void 0===u&&(u=setTimeout(p,t)),a}return t=k(t)||0,x(n)&&(c=!!n.leading,o=(s="maxWait"in n)?S(k(n.maxWait)||0,t):o,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==u&&clearTimeout(u),f=0,r=l=i=u=void 0},T.flush=function(){return void 0===u?a:y(w())},T}function x(e){var n=void 0===e?"undefined":t(u)(e);return!!e&&("object"==n||"function"==n)}function k(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(u)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==O.call(e)}(e))return NaN;if(x(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=x(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(v,"");var r=g.test(e);return r||b.test(e)?p(e.slice(2),r?2:8):m.test(e)?NaN:+e}a=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(d);return x(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),N(e,t,{leading:r,maxWait:t,trailing:i})},i.addEventListener("input",a((function(e){r[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(r))}),500)),i.addEventListener("submit",(function(e){if(e.preventDefault(),!e.currentTarget.email.value||!e.currentTarget.message.value)return void alert("Fill in all fields of the form!");var t;console.log(null!==(t=JSON.parse(localStorage.getItem("feedback-form-state")))&&void 0!==t?t:{}),localStorage.removeItem("feedback-form-state"),e.currentTarget.email.value="",e.currentTarget.message.value=""})),i.elements.email.value=null!==(l=o.email)&&void 0!==l?l:"",r.email=null!==(f=o.email)&&void 0!==f?f:"",i.elements.message.value=null!==(c=o.message)&&void 0!==c?c:"",r.message=null!==(s=o.message)&&void 0!==s?s:""}();
//# sourceMappingURL=03-feedback.3d093990.js.map