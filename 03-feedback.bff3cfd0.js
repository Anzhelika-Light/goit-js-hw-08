!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n={},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,a=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof e&&e&&e.Object===Object&&e,d="object"==typeof self&&self&&self.Object===Object&&self,s=l||d||Function("return this")(),v=Object.prototype.toString,m=Math.max,b=Math.min,p=function(){return s.Date.now()};function y(e,t,n){var r,i,f,u,a,c,l=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(o);function y(t){var n=r,o=i;return r=i=void 0,l=t,u=e.apply(o,n)}function h(e){return l=e,a=setTimeout(w,t),d?y(e):u}function O(e){var n=e-c;return void 0===c||n>=t||n<0||s&&e-l>=f}function w(){var e=p();if(O(e))return S(e);a=setTimeout(w,function(e){var n=t-(e-c);return s?b(n,f-(e-l)):n}(e))}function S(e){return a=void 0,v&&r?y(e):(r=i=void 0,u)}function T(){var e=p(),n=O(e);if(r=arguments,i=this,c=e,n){if(void 0===a)return h(c);if(s)return a=setTimeout(w,t),y(c)}return void 0===a&&(a=setTimeout(w,t)),u}return t=j(t)||0,g(n)&&(d=!!n.leading,f=(s="maxWait"in n)?m(j(n.maxWait)||0,t):f,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==a&&clearTimeout(a),l=0,r=c=i=a=void 0},T.flush=function(){return void 0===a?u:S(p())},T}function g(e){var n=void 0===e?"undefined":t(r)(e);return!!e&&("object"==n||"function"==n)}function j(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(r)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==v.call(e)}(e))return NaN;if(g(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=g(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var o=u.test(e);return o||a.test(e)?c(e.slice(2),o?2:8):f.test(e)?NaN:+e}n=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return g(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),y(e,t,{leading:r,maxWait:t,trailing:i})};var h=document.querySelector(".feedback-form"),O={};!function(){try{var e=JSON.parse(localStorage.getItem("feedback-form-state"));if(null===e)return;for(var t in e)h.elements[t].value=e[t]}catch(e){console.log(e)}}();h.addEventListener("input",n((function(e){var t=e.target,n=t.name,r=t.value;O[n]=r,localStorage.setItem("feedback-form-state",JSON.stringify(O))}),500)),h.addEventListener("submit",(function(e){e.preventDefault(),h.reset(),localStorage.removeItem("feedback-form-state"),console.log(O)}))}();
//# sourceMappingURL=03-feedback.bff3cfd0.js.map
