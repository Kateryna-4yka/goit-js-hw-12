// izitoast
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
// simplelightbox
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

//імпортуємо свої функції для НТТР та відмальовування на сторінці лішок
import {httpRequest} from "./js/pixabay-api";
import {createCart} from "./js/render-functions";



const form = document.querySelector (`.form`);
const ulGallery = document.querySelector (`.ul-gallery`);
const button = document.querySelector ('.button');
const loader = document.querySelector ('.loader');
const loadButton = document.querySelector ('.loadButton');

form.addEventListener (`submit`, request);

let page = 1;
let valueInfo = '';
let totalPages = 0; 

async function request (event) {
try {
  //лоадер стає видимим
  loader.classList.toggle (`visually-hidden`);
// подія сабмін робить оновлення сторінки, ми це скидаємо 
event.preventDefault();

//можна звернутися до input.value , але це зайвий раз звертатися до дерева , тому ідемо через event.currentTarget.elements.(ім,я з name HTML) + .trim(), щоб не було пробілів
//считуємо значення з інпуту
valueInfo = event.currentTarget.elements.user_request.value.trim(); 

//перевіряємо, щоб не вводили пусте в інпут + HYML перевірка задана
if (valueInfo ==='') {button.disabled = true; return;}

//робимо запит за пайдж 1, щоб кожен новий запит ішов за першою сторінкою та галерея очищувалася від картинок
page = 1;
ulGallery.innerHTML = '';
//робимо запит на сервер pixabay.com за своїм клієнт ключем та параметрами з документації АРІ
const serverInform = await httpRequest (valueInfo, page);

//перевірка результатів з сервера, чи прийшли данні
if (serverInform.data.hits.length === 0) {
  loader.classList.toggle (`visually-hidden`);
  iziToast.error({
    position: 'topRight' ,
    message: 'Sorry, there are no images matching your search query. Please try again!',
});
ulGallery.innerHTML = '';
form.reset();
return;}

//вираховуємо кількість сторінок для відмальовування по нашому запиту
totalPages = Math.ceil(serverInform.data.totalHits/15); 

//якщо інформація що прийшла з сервера більша за 1 сторінку (тобто, 15 картинок), тоді кнопка видима, слухаємо клік 
if (totalPages>1) {loadButton.classList.remove (`visually-hidden`);
  loadButton.addEventListener ('click', loadMore);}

const gallaryCard = serverInform.data.hits.map(el =>createCart(el)).join('');
// метод меп перебирає масив об,єктів і видає на кожній ітерації 1 обєкт , який заповнений рядками з описами кожної картки 
//але нам потрібен 1 рядок, а не масив рядків, тому ми викликаємо метод .join  і зшиваємо це до купи
//робимо функцію createCart, яка буде перетворювати отримані данні з сервера на розмітку на сторінці. Створювати картку в HTML з данними, які прийшли з сервера. 

//відмальовуємо на сторінці
ulGallery.insertAdjacentHTML('beforeend', gallaryCard);
//відмальовування почалося і лоадер сховався
loader.classList.toggle (`visually-hidden`);
//спустошуємо інпут у формі
form.reset();
//відмальовуємо великі зображення за допомогою бібліотеки SimpleLightbox
const elemSimpleLightbox = new SimpleLightbox(`.ul-gallery a`, {
  captionsData: `alt`, 
});
elemSimpleLightbox.refresh();
}
 catch (er) { alert (er)}}



//слухач викликає функцію запиту на сервер за page++
 async function loadMore (event){
  page++;
  try {
    //робимо видимим лоадер при завантаженні інформації
    loader.classList.toggle (`visually-hidden`);

  //робимо запит на сервер за наступною сторінкою інформації
  const serverInform = await httpRequest (valueInfo, page);


//якщо інформація поділена на кожну сторінку вже дорівнює кількості сторінок , то вимикаємо кнопку ЛОАД МОР
if (totalPages === page)
  {loadButton.classList.add (`visually-hidden`); 
    loadButton.removeEventListener('click', loadMore);
    iziToast.info({
      message: "We're sorry, but you've reached the end of search results.",
      position: 'topRight' ,
  });}

  const gallaryCard = serverInform.data.hits.map(el =>createCart(el)).join('');
//перебираємо масив інформації та видаємо її у вигляді рядка для запису на сторінку 
  
  //додаємо на сторінку
  ulGallery.insertAdjacentHTML('beforeend', gallaryCard);

 //додаємо прокрутку на подвійну висоту карточки
 
 const liElement = document.querySelector (`.li-gallery`);
 if (liElement){
  let domRect = liElement.getBoundingClientRect();
  let height = domRect.height * 2; 
  scrollBy({ top: height, left: 0, behavior: 'smooth'});
 };

  //ховаємо лоадер після відмальовування
  loader.classList.toggle (`visually-hidden`);
  
  //відмальовуємо великі зображення за допомогою бібліотеки SimpleLightbox
  const elemSimpleLightbox = new SimpleLightbox(`.ul-gallery a`, {
    captionsData: `alt`, 
  });
  elemSimpleLightbox.refresh();
  }
  
   catch (er) {console.log(er);}}

  

