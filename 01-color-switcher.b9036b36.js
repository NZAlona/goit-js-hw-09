const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),r=document.querySelector("body");t.addEventListener("click",(function(){n=setInterval((()=>{const t=`#${Math.floor(16777215*Math.random()).toString(16)}`;r.style.background=t}),1e3),t.setAttribute("disabled",!0),e.removeAttribute("disabled")})),e.addEventListener("click",(function(){clearInterval(n),t.removeAttribute("disabled"),e.setAttribute("disabled",!0)}));let n=null;
//# sourceMappingURL=01-color-switcher.b9036b36.js.map
