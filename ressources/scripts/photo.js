export class Photo {


    constructor(id, photographerId, title , image, tags , like, date, price){
        this._is = id;
        this._photographerId = photographerId;
        this._title = title;
        this._tags = tags;
        this._image = image;
        this._price = price;
        this._like = like;
        this._date = date;
    }

    liked() {
        this._like += 1;
        //rerender like count
    }

    render(parent, index, folderName) {       
            parent.insertAdjacentHTML("beforeend",`
                    <div class="gallery__item">
                        <div class="gallery__item__element" id="${index}">
                            <a alt="${this._title},closeup view" href="#${index}">
                                <img src="ressources/images/${folderName[0]}/${this._image}" class="gallery__item__image" />
                            </a>                            
                        </div>
                        <div class="gallery__item__details">
                            <p >${this._title}</p>
                            <div class="gallery__item__details__like" aria-label="likes">
                                <p class="item-likeCount">${this._like} </p><i class="fas fa-heart like-button"></i>
                            </div>                            
                        </div>                
                    </div>`);

    }
    renderLightbox(folderName){          
                return `<img src="ressources/images/${folderName[0]}/${this._image}" class="lightbox__image" alt="${this._title}"/><p class="lightbox__title">${this._title}</p>`;             
    }
}
