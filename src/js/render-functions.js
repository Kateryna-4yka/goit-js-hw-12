// У файлі render-functions.js створи функції для відображення елементів інтерфейсу.


export function createCart (element) {

    return ` 
        <li class="li-gallery">

        <a class="li-gallery-a" href="${element.largeImageURL}">
        <img class="img" src="${element.webformatURL}" 
        alt="${element.tags}" 
        />
        </a>
        <ul class="baner-info">
          <li class="baner-info-li">
            <p class="baner-info-li-title">Likes</p>
            <p class="baner-info-li-text">${element.likes}</p>
          </li>
          <li class="baner-info-li">
            <p class="baner-info-li-title">Views</p>
            <p class="baner-info-li-text">${element.views}</p>
          </li>
          <li class="baner-info-li">
            <p class="baner-info-li-title">Comments</p>
            <p class="baner-info-li-text">${element.comments}</p>
          </li>
          <li class="baner-info-li">
            <p class="baner-info-li-title">Downloads</p>
            <p class="baner-info-li-text">${element.downloads}</p>
          
            </li>
        </ul>
        </li> `;
}

