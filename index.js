import{a as L,i as g,S as m}from"./assets/vendor-DEenWwFD.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function l(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=l(e);fetch(e.href,r)}})();function h(i,t){return L.get("https://pixabay.com/api/?",{params:{q:i,key:"48292121-37734ba9461bf6417934fa015",image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:t}})}function y(i){return` 
        <li class="li-gallery">

        <a class="li-gallery-a" href="${i.largeImageURL}">
        <img class="img" src="${i.webformatURL}" 
        alt="${i.tags}" 
        />
        </a>
        <ul class="baner-info">
          <li class="baner-info-li">
            <p class="baner-info-li-title">Likes</p>
            <p class="baner-info-li-text">${i.likes}</p>
          </li>
          <li class="baner-info-li">
            <p class="baner-info-li-title">Views</p>
            <p class="baner-info-li-text">${i.views}</p>
          </li>
          <li class="baner-info-li">
            <p class="baner-info-li-title">Comments</p>
            <p class="baner-info-li-text">${i.comments}</p>
          </li>
          <li class="baner-info-li">
            <p class="baner-info-li-title">Downloads</p>
            <p class="baner-info-li-text">${i.downloads}</p>
          
            </li>
        </ul>
        </li> `}const f=document.querySelector(".form"),c=document.querySelector(".ul-gallery"),v=document.querySelector(".button"),o=document.querySelector(".loader"),d=document.querySelector(".loadButton");f.addEventListener("submit",S);let n=1,u="",p=0;async function S(i){try{if(o.classList.toggle("visually-hidden"),i.preventDefault(),u=i.currentTarget.elements.user_request.value.trim(),u===""){v.disabled=!0;return}n=1,c.innerHTML="";const t=await h(u,n);if(t.data.hits.length===0){o.classList.toggle("visually-hidden"),g.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),c.innerHTML="",f.reset();return}p=Math.ceil(t.data.totalHits/15),p>1&&(d.classList.remove("visually-hidden"),d.addEventListener("click",b));const l=t.data.hits.map(e=>y(e)).join("");c.insertAdjacentHTML("beforeend",l),o.classList.toggle("visually-hidden"),f.reset(),new m(".ul-gallery a",{captionsData:"alt"}).refresh()}catch(t){alert(t)}}async function b(i){n++;try{o.classList.toggle("visually-hidden");const t=await h(u,n);p===n&&(d.classList.add("visually-hidden"),d.removeEventListener("click",b),g.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}));const l=t.data.hits.map(r=>y(r)).join("");c.insertAdjacentHTML("beforeend",l);const s=document.querySelector(".li-gallery");if(s){let a=s.getBoundingClientRect().height*2;scrollBy({top:a,left:0,behavior:"smooth"})}o.classList.toggle("visually-hidden"),new m(".ul-gallery a",{captionsData:"alt"}).refresh()}catch(t){console.log(t)}}
//# sourceMappingURL=index.js.map
