const e=document.getElementById("color-scheme");function o(o){localStorage["color-scheme"]=o,document.documentElement.classList.remove("light"),document.documentElement.classList.remove("dark"),document.documentElement.classList.add(o),e&&("dark"===o?(e.querySelector(".sunny").classList.remove("hidden"),e.querySelector(".moon").classList.add("hidden"),e.title="Modo claro"):(e.querySelector(".sunny").classList.add("hidden"),e.querySelector(".moon").classList.remove("hidden"),e.title="Modo escuro"))}!function(){let t="light";localStorage["color-scheme"]?t=localStorage["color-scheme"]:matchMedia&&matchMedia("(prefers-color-scheme: dark)").matches&&(t="dark"),e&&e.addEventListener("click",(()=>{document.documentElement.classList.contains("dark")?o("light"):o("dark")})),o(t)}();
//# sourceMappingURL=index.fce04523.js.map