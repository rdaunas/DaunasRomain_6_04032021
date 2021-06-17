import {Factory} from'../scripts/Factory.js';
import { modalSetUp } from './modal.js';

const profile = document.querySelector("#profile");
const gallery = document.querySelector("#gallery");
const trier = document.querySelector("#image-filter");
//List of media
let mediaList = []
let photographInfo = 

trier.addEventListener("change", (event) =>{
   filterMedia(event.target.value);
})
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
function renderGallery(){

    for(let item of document.querySelectorAll('.gallery__item')) {
        item.remove();
    }

    for(let media of mediaList){
        media.render(gallery);
    }
}

fetch("../data/FishEyeData.json")
    .then(response => response.json())  //transforme la reponse en json
    .then(data => data.photographers)   
    .then( (jsonData) => {              
        photographInfo = jsonData.find( element => element.id = window.location.search.substring(1));
        let photographtags ="";
        for(let tag of photographInfo.tags){
        photographtags += `<a class="filter">${tag}</a>`
        }
        profile.insertAdjacentHTML('afterbegin',
                            ` <div class="card--profile__desc">
                            <h1 class="card__title card__title--profile">${photographInfo.name}</h1>
                            <p class="card__location card__location--profile">${photographInfo.city},${photographInfo.country}</p>
                            <p class="card__bio">${photographInfo.tagline}</p>
                            <div class="card__tags">${photographtags}</div>
                            </div>            
                            <button class="button--contact">Contactez-moi</button>
                            <img src="../images/Photographers ID Photos/${photographInfo.portrait}" class="card__image card__image--profile"/>
                            ` );
        modalSetUp();
});


fetch("../data/FishEyeData.json")
    .then(response => response.json())  //transforme la reponse en json
    .then(data => data.media)   //extrait les media des données json
    .then( (jsonData) => {              //crée un objet Photograph pour chaque photograh des données json
        for (let media of jsonData){
            if( media.photographerId == window.location.search.substring(1) ){
                mediaList.push(Factory.createMedia(media));
            }
        }
        renderGallery();
    });
