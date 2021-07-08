const lightbox = document.querySelector("#lightbox");
const lightboxContent = document.querySelector(".lightbox__content");

let currentIndex = 0;
let mediaList;
let folderName;

//LIGHTBOX
document.querySelector(".lightbox__close").addEventListener("click", () => {
    lightbox.style.display = "none";
    lightboxContent.innerHTML = "";
    document.getElementById(currentIndex.toString()).querySelector(".gallery__lightbox-link").focus();
});


export function lightboxClick(mediaListImport, folderNameImport) {
    mediaList = mediaListImport;
    folderName = folderNameImport;
    let allImage = document.querySelectorAll(".gallery__item__element");
    for (let image of allImage) { 
        image.addEventListener("click", () => {
            lightboxRendering(image);            
        });
        image.addEventListener("keydown", (event) => {
            if(event.keycode != "13"){return};
            lightboxRendering(image);
            
        });
    }
};
function lightboxRendering(image) {
    lightbox.style.display = "block";
    currentIndex = image.id;
    lightboxContent.innerHTML = mediaList[currentIndex].renderLightbox(folderName);
    setTimeout ( () => {document.getElementById("lightbox__previous").focus()}, 50);
}

function lightboxNavigation(direction) {
    if(direction === "next") {
        if(currentIndex == mediaList.length-1){
            return;
        }
        currentIndex ++;    
        lightboxContent.innerHTML = mediaList[currentIndex].renderLightbox(folderName);
    }
    if(direction === "previous"){
        if(currentIndex == 0) {
            return ;
        }
        currentIndex --;
        lightboxContent.innerHTML = mediaList[currentIndex].renderLightbox(folderName);
    }
}
//Click previous
document.querySelector("#lightbox__previous").addEventListener("click", () => {
    lightboxNavigation("previous");
});
//Click next
document.querySelector("#lightbox__next").addEventListener("click", () => {
    lightboxNavigation("next");
});
//Arrow previous
window.addEventListener("keydown", (event) => {
    if(event.key != "ArrowLeft"){return;}
    lightboxNavigation("previous");
});
//Arroow next
window.addEventListener("keydown", (event) => {
    if(event.key != "ArrowRight"){return;}
    lightboxNavigation("next");
});