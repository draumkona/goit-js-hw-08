!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),m=Object.prototype.toString,v=Math.max,g=Math.min,p=function(){return d.Date.now()};function b(e,t,n){var r,i,a,u,f,l,c=0,s=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError(o);function b(t){var n=r,o=i;return r=i=void 0,c=t,u=e.apply(o,n)}function j(e){return c=e,f=setTimeout(O,t),s?b(e):u}function h(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=a}function O(){var e=p();if(h(e))return S(e);f=setTimeout(O,function(e){var n=t-(e-l);return d?g(n,a-(e-c)):n}(e))}function S(e){return f=void 0,m&&r?b(e):(r=i=void 0,u)}function T(){var e=p(),n=h(e);if(r=arguments,i=this,l=e,n){if(void 0===f)return j(l);if(d)return f=setTimeout(O,t),b(l)}return void 0===f&&(f=setTimeout(O,t)),u}return t=w(t)||0,y(n)&&(s=!!n.leading,a=(d="maxWait"in n)?v(w(n.maxWait)||0,t):a,m="trailing"in n?!!n.trailing:m),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=i=f=void 0},T.flush=function(){return void 0===f?u:S(p())},T}function y(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function w(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==m.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var o=u.test(t);return o||f.test(t)?l(t.slice(2),o?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return y(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),b(e,t,{leading:r,maxWait:t,trailing:i})};var j=document.querySelector(".feedback-form"),h={email:"",message:""};j.addEventListener("input",e(t)((function(e){var t=j.elements,n=t.email,r=t.message;h={email:n.value,message:r.value},localStorage.setItem("feedback-form-state",JSON.stringify(h))}),500));window.addEventListener("load",(function(){var e=j.elements,t=e.email,n=e.message,r=localStorage.getItem("feedback-form-state");try{var o=JSON.parse(r);if(""===o)return;t.value=o.email,n.value=o.message}catch(e){console.log(e.name),console.log(e.message)}})),j.addEventListener("submit",(function(e){e.preventDefault();var t=j.elements,n=t.email,r=t.message,o=localStorage.getItem("feedback-form-state");if(""===n.value||""===r.value)return alert("Proszę uzupełnić wymagane pola.");console.log(o),localStorage.removeItem("feedback-form-state"),e.currentTarget.reset()}))}();
//# sourceMappingURL=03-feedback.467c177d.js.map
