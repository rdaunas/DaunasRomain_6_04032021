const lightbox = document.querySelector("#lightbox");
const lightboxContainer = document.querySelector(".lightbox__container");
const lightboxContent = document.querySelector(".lightbox__content");

let currentIndex = 0;
let mediaList;
let folderName;

//LIGHTBOX
document.querySelector(".lightbox__close").addEventListener("click", () => {
    lightbox.style.display = "none";
    lightboxContent.innerHTML = "";
});


export function lightboxClick(mediaListImport, folderNameImport) {
    mediaList = mediaListImport;
    folderName = folderNameImport;
    let allImage = document.querySelectorAll(".gallery__item__element");
    for (let image of allImage) { 
        image.addEventListener("click", () => {
            lightbox.style.display = "block";
            currentIndex = image.id;
           lightboxContent.innerHTML = mediaList[currentIndex].renderLightbox(folderName);  
    });
    image.addEventListener("keydown", (event) => {
        if(event.key != "ENTER"){return};
        lightbox.style.display = "block";
        currentIndex = image.id;
       lightboxContent.innerHTML = mediaList[currentIndex].renderLightbox(folderName);
    });
    }
};

//Click previous
document.querySelector("#lightbox__previous").addEventListener("click", () => {
    if(currentIndex == 0) {
        return ;
    }
    currentIndex --;
    lightboxContent.innerHTML = mediaList[currentIndex].renderLightbox(folderName);
});
//Click next
document.querySelector("#lightbox__next").addEventListener("click", () => {
    if(currentIndex == mediaList.length){
        return;
    }
    currentIndex ++;    
    lightboxContent.innerHTML = mediaList[currentIndex].renderLightbox(folderName);
});
//Arrow previous
window.addEventListener("keydown", (event) => {
    if(event.key != "ArrowLeft"){return;}
    if(currentIndex == 0) {
        return ;
    }
    currentIndex --;
    lightboxContent.innerHTML = mediaList[currentIndex].renderLightbox(folderName);
});
//Arroow next
window.addEventListener("keydown", (event) => {
    if(event.key != "ArrowRight"){return;}
    if(currentIndex == mediaList.length){
        return;
    }
    currentIndex ++;    
    lightboxContent.innerHTML = mediaList[currentIndex].renderLightbox(folderName);
});