export class Video {


    constructor(id, photographerId, title , video, tags , like, date, price){
        this._id = id;
        this._photographerId = photographerId;
        this._title = title;
        this._tags = tags;
        this._video = video;
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
                        <a alt="${this._title},closeup view">
                            <video class="gallery__item__element gallery__item__image" id="${index}">
                                <source src="ressources/images/${folderName[0]}/${this._video}"></source>
                            </video>
                        </a>
                            
                            <div class="gallery__item__details">
                                <p>${this._title}</p>
                                    <div class="gallery__item__details__like" aria-label="likes">
                                        <p class="item-likeCount">${this._like} </p><i class="fas fa-heart like-button"></i>
                                    </div>
                            </div>                
                        </div>
                `);
    }
    renderLightbox(folderName){        
        
                return `<video controls class="lightbox__video"><source src="ressources/images/${folderName[0]}/${this._video}" alt="${this._title}"></source></video>`;            
    }
}