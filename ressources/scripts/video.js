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
    render(parent, index) {

        let photographer;
        fetch("ressources/data/FishEyeData.json")
            .then(response => response.json())  //transforme la reponse en json
            .then(data => data.photographers)   
            .then( jsonData => { 
                photographer = jsonData.find( element => element.id == window.location.search.substring(1));
                let folderName = photographer.name.split(" ")
                parent.insertAdjacentHTML("beforeend",`
                        <div class="gallery__item">
                            <video class="gallery__item__element gallery__item__image" id="${index}">
                                <source src="ressources/images/${folderName[0]}/${this._video}"></source>
                            </video>
                            <div class="gallery__item__details">
                                <p>${this._title}</p>
                                <p class="item-likeCount">${this._like}</p><i class="fas fa-heart like-button"> </i>
                            </div>                
                        </div>
                `); 
        });
    }
    renderLightbox(){        
        let photographer;
        fetch("ressources/data/FishEyeData.json")
            .then(response => response.json())  //transforme la reponse en json
            .then(data => data.photographers)   
            .then( (jsonData) => { 
                photographer = jsonData.find( element => element.id == window.location.search.substring(1));
                let folderName = photographer.name.split(" ");
                return `<video class="gallery__item__image gallery__item__element"><source src="ressources/images/${folderName[0]}/${this._video}"></source></video>`;
            });             
    }
}