// У файлі pixabay-api.js зберігай функції для HTTP-запитів.


//імортуємо ахіос

import axios from "axios";

export function httpRequest (userRequest, page) {
  return axios.get (`https://pixabay.com/api/?`, {params: {
    q: userRequest,
    key: `48292121-37734ba9461bf6417934fa015`,
    image_type: `photo`, 
    orientation: `horizontal`,
    safesearch : true,
    per_page: 15,
    page: page,}
})}