(()=>{"use strict";const e=()=>{const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("page-content");const n=document.createElement("img");n.src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/52/e7/28/tocha-at-banyan-tree.jpg?w=600&h=-1&s=1",n.height="300",t.appendChild(n);const c=document.createElement("h1");c.textContent="Welcome to our restaurant!",t.appendChild(c);const d=document.createElement("p");d.textContent="We serve the best food in town!",t.appendChild(d),e.appendChild(t)};function t(){const e=document.querySelector("#content"),t=document.querySelector(".page-content");t&&e.removeChild(t)}(()=>{const n=document.querySelector("#content"),c=document.createElement("div"),d=document.createElement("div"),o=document.createElement("div");c.setAttribute("id","home-btn"),d.setAttribute("id","menu-btn"),o.setAttribute("id","contact-btn"),c.classList.add("tab"),d.classList.add("tab"),o.classList.add("tab"),c.textContent="Home",d.textContent="Menu",o.textContent="Contact",n.appendChild(c),n.appendChild(d),n.appendChild(o),c.addEventListener("click",(()=>{t(),e()})),d.addEventListener("click",(()=>{t(),(()=>{const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("page-content");const n=document.createElement("h1");n.textContent="Our Menu";const c=document.createElement("ul"),d=document.createElement("li");d.textContent="Pasta - $20";const o=document.createElement("li");o.textContent="Pizza - $15";const a=document.createElement("li");a.textContent="Fries - $5",c.appendChild(d),c.appendChild(o),c.appendChild(a),t.appendChild(n),t.appendChild(c),e.appendChild(t)})()})),o.addEventListener("click",(()=>{t(),(()=>{const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("page-content");const n=document.createElement("form");n.classList.add("contact-form");const c=document.createElement("input");c.type="text",c.placeholder="Enter heading",n.appendChild(c);const d=document.createElement("input");d.type="text",d.placeholder="Enter address",n.appendChild(d);const o=document.createElement("input");o.type="text",o.placeholder="Enter phone number",n.appendChild(o);const a=document.createElement("input");a.type="submit",a.value="Submit",n.appendChild(a),t.appendChild(n),e.appendChild(t)})()}))})(),e()})();