!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n,r={},o=document.querySelector(".feedback-form"),i=null!==(n=JSON.parse(localStorage.getItem("feedback-form-state")))&&void 0!==n?n:{},a={},u={};Object.defineProperty(u,"__esModule",{value:!0}),u.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var f,l,c="Expected a function",d=/^\s+|\s+$/g,s=/^[-+]0x[0-9a-f]+$/i,v=/^0b[01]+$/i,m=/^0o[0-7]+$/i,g=parseInt,b="object"==typeof e&&e&&e.Object===Object&&e,p="object"==typeof self&&self&&self.Object===Object&&self,y=b||p||Function("return this")(),j=Object.prototype.toString,O=Math.max,S=Math.min,T=function(){return y.Date.now()};function h(e,t,n){var r,o,i,a,u,f,l=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(c);function m(t){var n=r,i=o;return r=o=void 0,l=t,a=e.apply(i,n)}function g(e){return l=e,u=setTimeout(p,t),d?m(e):a}function b(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-l>=i}function p(){var e=T();if(b(e))return y(e);u=setTimeout(p,function(e){var n=t-(e-f);return s?S(n,i-(e-l)):n}(e))}function y(e){return u=void 0,v&&r?m(e):(r=o=void 0,a)}function j(){var e=T(),n=b(e);if(r=arguments,o=this,f=e,n){if(void 0===u)return g(f);if(s)return u=setTimeout(p,t),m(f)}return void 0===u&&(u=setTimeout(p,t)),a}return t=N(t)||0,w(n)&&(d=!!n.leading,i=(s="maxWait"in n)?O(N(n.maxWait)||0,t):i,v="trailing"in n?!!n.trailing:v),j.cancel=function(){void 0!==u&&clearTimeout(u),l=0,r=f=o=u=void 0},j.flush=function(){return void 0===u?a:y(T())},j}function w(e){var n=void 0===e?"undefined":t(u)(e);return!!e&&("object"==n||"function"==n)}function N(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(u)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==j.call(e)}(e))return NaN;if(w(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=w(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(d,"");var r=v.test(e);return r||m.test(e)?g(e.slice(2),r?2:8):s.test(e)?NaN:+e}a=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(c);return w(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),h(e,t,{leading:r,maxWait:t,trailing:o})},o.addEventListener("input",a((function(e){r[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(r))}),500)),o.addEventListener("submit",(function(e){var t;e.preventDefault(),console.log(null!==(t=JSON.parse(localStorage.getItem("feedback-form-state")))&&void 0!==t?t:{}),localStorage.removeItem("feedback-form-state"),e.currentTarget.email.value="",e.currentTarget.message.value=""})),o.elements.email.value=null!==(f=i.email)&&void 0!==f?f:"",o.elements.message.value=null!==(l=i.message)&&void 0!==l?l:""}();
//# sourceMappingURL=03-feedback.8424cb7d.js.map
