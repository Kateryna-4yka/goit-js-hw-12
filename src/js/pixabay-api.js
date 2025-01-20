// У файлі pixabay-api.js зберігай функції для HTTP-запитів.

export function nttpRequest (userRequest) {
    const paramsForHttp = new URLSearchParams ({
        q: userRequest,
        key: `48292121-37734ba9461bf6417934fa015`,
        image_type: `photo`, 
        orientation: `horizontal`,
        safesearch : true,

    })
    return fetch (`https://pixabay.com/api/?${paramsForHttp}`)

    //обробляємо відповідь що прийшла 
    .then (queryResult=>{
    //робимо перевірку, якщо інфа прийшла з помилкою, то перекидаємо у catch
    if (!queryResult.ok)
      {throw new Error(queryResult.status);}
        
    //а якщо все ок, тоді РОЗПАРШУЄМО данні для наступного then
    return queryResult.json();
    })


}