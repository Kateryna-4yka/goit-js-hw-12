import{a as L,i as g,S as m}from"./assets/vendor-DEenWwFD.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const d of i.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function s(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(e){if(e.ep)return;e.ep=!0;const i=s(e);fetch(e.href,i)}})();function y(r,t){return L.get("https://pixabay.com/api/?",{params:{q:r,key:"48292121-37734ba9461bf6417934fa015",image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:t}})}function h(r){return` 
        <li class="li-gallery">

        <a class="li-gallery-a" href="${r.largeImageURL}">
        <img class="img" src="${r.webformatURL}" 
        alt="${r.tags}" 
        />
        </a>
        <ul class="baner-info">
          <li class="baner-info-li">
            <p class="baner-info-li-title">Likes</p>
            <p class="baner-info-li-text">${r.likes}</p>
          </li>
          <li class="baner-info-li">
            <p class="baner-info-li-title">Views</p>
            <p class="baner-info-li-text">${r.views}</p>
          </li>
          <li class="baner-info-li">
            <p class="baner-info-li-title">Comments</p>
            <p class="baner-info-li-text">${r.comments}</p>
          </li>
          <li class="baner-info-li">
            <p class="baner-info-li-title">Downloads</p>
            <p class="baner-info-li-text">${r.downloads}</p>
          
            </li>
        </ul>
        </li> `}const f=document.querySelector(".form"),n=document.querySelector(".ul-gallery"),v=document.querySelector(".button"),a=document.querySelector(".loader"),u=document.querySelector(".loadButton");f.addEventListener("submit",S);let l=1,c="",p=0;async function S(r){try{if(a.classList.toggle("visually-hidden"),r.preventDefault(),c=r.currentTarget.elements.user_request.value.trim(),c===""){v.disabled=!0;return}l=1,n.innerHTML="";const t=await y(c,l);if(t.data.hits.length===0){a.classList.toggle("visually-hidden"),g.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),n.innerHTML="",f.reset();return}p=Math.ceil(t.data.totalHits/15),p>1&&(u.classList.remove("visually-hidden"),u.addEventListener("click",b));const s=t.data.hits.map(e=>h(e)).join("");n.insertAdjacentHTML("beforeend",s),a.classList.toggle("visually-hidden"),f.reset(),new m(".ul-gallery a",{captionsData:"alt"}).refresh()}catch(t){alert(t)}}async function b(r){l++;try{a.classList.toggle("visually-hidden");const t=await y(c,l);p===l&&(u.classList.add("visually-hidden"),u.removeEventListener("click",b),g.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}));const s=t.data.hits.map(e=>h(e)).join("");n.insertAdjacentHTML("beforeend",s),a.classList.toggle("visually-hidden"),new m(".ul-gallery a",{captionsData:"alt"}).refresh()}catch(t){console.log(t)}}
//# sourceMappingURL=index.js.map
