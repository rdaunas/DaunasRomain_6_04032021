import {Factory} from'../scripts/Factory.js';
import { modalSetUp } from './modal.js';

const profile = document.querySelector("#profile");
const gallery = document.querySelector("#gallery");
const trier = document.querySelector("#image-filter");

const lightbox = document.querySelector("#lightbox");
const lightboxContent = document.querySelector(".lightbox__content")
//List of media
let mediaList = [];
let photographInfo;
let folderName;
let currentIndex = 0;


trier.addEventListener("change", (event) =>{
   filterMedia(event.target.value);
});



//LIGHTBOX
document.querySelector(".lightbox__close").addEventListener("click", () => {
    lightbox.style.display = "none";
    lightboxContent.innerHTML = "";
});


function lightboxClick() {
    let allImage = document.querySelectorAll(".gallery__item__element");
    for (let image of allImage) { 
        image.addEventListener("click", () => {
            lightbox.style.display = "block";
            currentIndex = image.id;
           // lightboxContent.innerHTML = image.innerHTML;
           lightboxContent.innerHTML = mediaList[currentIndex].renderLightbox(folderName);
            
            
    })
};
}

//prevent out of bound
document.querySelector("#lightbox__previous").addEventListener("click", () => {
    if(currentIndex == 0) {
        return ;
    }
    currentIndex --;
    lightboxContent.innerHTML = mediaList[currentIndex].renderLightbox(folderName);
});
document.querySelector("#lightbox__next").addEventListener("click", () => {
    if(currentIndex == mediaList.length){
        return;
    }
    currentIndex ++;    
    lightboxContent.innerHTML = mediaList[currentIndex].renderLightbox(folderName);
});


//FILTERING
function filterMedia(filter) {
    if(filter == "popularity"){mediaList.sort(compareLike);}
    if(filter == "date"){mediaList.sort(compareDate);}
    if(filter == "title"){mediaList.sort(compareTitle);}    
    console.log(mediaList);
    renderGallery();
}
function compareTitle(a, b) {

        if (a._title < b._title ){
            return -1;
          }
          if (a._title > b._title ){
            return 1;
          }
          return 0;  
}
function compareLike(a, b) {

    if (a._like > b._like ){
        return -1;
      }
      if (a._like < b._like ){
        return 1;
      }
      return 0;  
}
function compareDate(a, b) {

    if (a._date < b._date ){
        return -1;
      }
      if (a._date > b._date ){
        return 1;
      }
      return 0;  
}
//GALLERY RENDERING
function renderGallery(){

    let index = 0;
    for(let item  of document.querySelectorAll('.gallery__item')) {
        item.remove();
    }
    for(let media of mediaList){
        media.render(gallery, index, photographInfo.name.split(" "));
        index++;
    }
    setTimeout(lightboxClick, 50);
    
}

function likeTotal() {
    let totalLikes = 0;
        for(let media of mediaList){
            totalLikes += media._like;
        }
        document.querySelector(".like-number").innerHTML = totalLikes;
};
//Like feature

function like() {
    let likeButtons = document.querySelectorAll(".like-button");
    for(let button of likeButtons) {
        button.addEventListener( "click", () => {            
            let media = button.closest(".gallery__item").querySelector(".gallery__item__element");
            mediaList[media.id].liked();
            media.closest(".gallery__item").querySelector(".item-likeCount").innerHTML = mediaList[media.id]._like;
            likeTotal();
    });
}
}


//DATA FETCHING
fetch("ressources/data/FishEyeData.json")
    .then(response => response.json())  //transforme la reponse en json
    .then(data => data.photographers)   
    .then( (jsonData) => {              
        photographInfo = jsonData.find( element => element.id == window.location.search.substring(1));
        setTimeout(() => {folderName = photographInfo.name.split(" ")}, 50);
        let photographtags ="";
        for(let tag of photographInfo.tags){
        photographtags += `<a class="filter">#${tag}</a>`
        }
        profile.insertAdjacentHTML('afterbegin',
                            ` <div class="card--profile__desc">
                            <h1 class="card__title card__title--profile">${photographInfo.name}</h1>
                            <p class="card__location card__location--profile">${photographInfo.city},${photographInfo.country}</p>
                            <p class="card__bio">${photographInfo.tagline}</p>
                            <div class="card__tags">${photographtags}</div>
                            </div>            
                            <button class="button--contact">Contactez-moi</button>
                            <img src="ressources/images/Photographers ID Photos/${photographInfo.portrait}" class="card__image card__image--profile"/>
                            ` );
        modalSetUp();
        document.querySelector(".sticky__tarif").innerHTML = `${photographInfo.price}€ / jours`;
});


fetch("ressources/data/FishEyeData.json")
    .then(response => response.json())  //transforme la reponse en json
    .then(data => data.media)   //extrait les media des données json
    .then( (jsonData) => {              //crée un objet Photograph pour chaque photograh des données json
        for (let media of jsonData){
            if( media.photographerId == window.location.search.substring(1) ){
                mediaList.push(Factory.createMedia(media));
            }
        }
        setTimeout(renderGallery, 50);
        setTimeout(likeTotal, 50);
        setTimeout(like, 50);
    });
