function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){r[e]=t},t.parcelRequired7c6=o);var u=o("eWCmQ");const i=document.querySelector(".form"),l=document.querySelector('input[name="delay"]'),a=document.querySelector('input[name="step"]'),d=document.querySelector('input[name="amount"]');function c(e,t){return new Promise(((n,r)=>{const o=Math.random()>.3;setTimeout((()=>{o?n(`✅ Fulfilled promise ${e} in ${t}ms`):r(`❌ Rejected promise ${e} in ${t}ms`)}))}),t)}i.addEventListener("submit",(function(t){t.preventDefault();let n=Number(l.value);const r=Number(a.value),o=Number(d.value);t.currentTarget.reset();for(let t=1;t<=o;t+=1)c(t,n).then((t=>{e(u).Notify.success(t)})).catch((t=>{e(u).Notify.failure(t)})),n+=r}));
//# sourceMappingURL=03-promises.b3d6d24a.js.map
