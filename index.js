import{a as L,S as v,i as u}from"./assets/vendor-DEenWwFD.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const f of s.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&i(f)}).observe(document,{childList:!0,subtree:!0});function l(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=l(e);fetch(e.href,s)}})();function y(t,r){return L.get("https://pixabay.com/api/?",{params:{q:t,key:"48292121-37734ba9461bf6417934fa015",image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:r}})}function h(t){return` 
        <li class="li-gallery">

        <a class="li-gallery-a" href="${t.largeImageURL}">
        <img class="img" src="${t.webformatURL}" 
        alt="${t.tags}" 
        />
        </a>
        <ul class="baner-info">
          <li class="baner-info-li">
            <p class="baner-info-li-title">Likes</p>
            <p class="baner-info-li-text">${t.likes}</p>
          </li>
          <li class="baner-info-li">
            <p class="baner-info-li-title">Views</p>
            <p class="baner-info-li-text">${t.views}</p>
          </li>
          <li class="baner-info-li">
            <p class="baner-info-li-title">Comments</p>
            <p class="baner-info-li-text">${t.comments}</p>
          </li>
          <li class="baner-info-li">
            <p class="baner-info-li-title">Downloads</p>
            <p class="baner-info-li-text">${t.downloads}</p>
          
            </li>
        </ul>
        </li> `}const m=new v(".ul-gallery a",{captionsData:"alt"}),p=document.querySelector(".form"),c=document.querySelector(".ul-gallery"),S=document.querySelector(".button"),a=document.querySelector(".loader"),o=document.querySelector(".loadButton");p.addEventListener("submit",q);let n=1,d="",g=0;async function q(t){try{if(a.classList.toggle("visually-hidden"),t.preventDefault(),d=t.currentTarget.elements.user_request.value.trim(),d===""){S.disabled=!0,a.classList.add("visually-hidden"),o.classList.add("visually-hidden");return}n=1,c.innerHTML="";const r=await y(d,n);if(r.data.hits.length===0){a.classList.toggle("visually-hidden"),u.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),o.classList.add("visually-hidden"),c.innerHTML="",p.reset();return}g=Math.ceil(r.data.totalHits/15),g>1&&(o.classList.remove("visually-hidden"),o.addEventListener("click",b));const l=r.data.hits.map(i=>h(i)).join("");c.insertAdjacentHTML("beforeend",l),a.classList.toggle("visually-hidden"),p.reset(),m.refresh()}catch{u.error({position:"topRight",message:"Sorry, data processing error. Please try again!"})}}async function b(t){n++;try{a.classList.toggle("visually-hidden");const r=await y(d,n);g===n&&(o.classList.add("visually-hidden"),o.removeEventListener("click",b),u.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}));const l=r.data.hits.map(e=>h(e)).join("");c.insertAdjacentHTML("beforeend",l);const i=document.querySelector(".li-gallery");if(i){let s=i.getBoundingClientRect().height*2;scrollBy({top:s,left:0,behavior:"smooth"})}a.classList.toggle("visually-hidden"),m.refresh()}catch{u.error({position:"topRight",message:"Sorry, data processing error. Please try again!"})}}
//# sourceMappingURL=index.js.map
