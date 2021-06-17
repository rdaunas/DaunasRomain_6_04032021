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

    render(parent) {

        let photographer;
        fetch("ressources/data/FishEyeData.json")
            .then(response => response.json())  //transforme la reponse en json
            .then(data => data.photographers)   
            .then( jsonData => { 
                photographer = jsonData.find( element => element.id == window.location.search.substring(1));
                let folderName = photographer.name.split(" ")
                parent.insertAdjacentHTML("beforeend",`
                        <div class="gallery__item">
                        <video class="gallery__item__image">
                            <source src="ressources/images/${folderName[0]}/${this._video}"
                            Sorry, your browser doesn't support embedded videos.
                        </video>
                        <div class="gallery__item__details">
                            <p>${this._title}</p>
                            <p>${this._like} <i class="fas fa-heart"></i></i></p>
                        </div>                
                        </div>
                `); 
        });
    }
}