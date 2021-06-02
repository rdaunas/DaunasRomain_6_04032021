import {Photograph} from'./photographe';


const photograhContainer = document.querySelector(".homepage__content");

//Store data de tout les photographes
let photograhData = getAllPhotograph();
//Store les data des photographes à afficher
let photographList = [];

//TODO              function calls
//Filter proxy 
function filtering(filter) {
    switch(filter) {

        case "portrait":
            break;
        case "art":
            break;
        case "fashion":
            break;
        case "architecture":
            break;
        case "travel":
            break;
        case "sport":
            break;
        case "animals":
            break;
        case "events":
            break;
        default :
            break;
    }    
}

//TODO                  display hidden || Remove
//Render photograh
function listRender() {
    //delete all photograph

    //if no filter 
    if(photographList.length == 0) {
        //render all photograph
         photograhContainer.innerHTML();
    }
    //render photograph from photographList
    for (let photograh in photographList) {
        photograhContainer.innerHTML();
    }
    

}

// filter all photograph into a list matching filter tag
function photographeFiltering(filter) {
    //check each photograph
    photographList = photograhData.filter( (photograph) => {
        //check photograph tag
        for (let tag in photograph.tags) {
            //check tag match filter
            if(tag == filter){
                return true;
            }
            return false;
        }
        
    })
} 

//TODO              Instantiate using JSON
//loop through json to instantiate Photograh object
function getAllPhotograph()  {
    let allPhotograph =[];
    //populate with data from json
    allPhotograph.push(new Photograph());
    allPhotograph.push(new Photograph());
    allPhotograph.push(new Photograph());
    allPhotograph.push(new Photograph());
    allPhotograph.push(new Photograph());
    allPhotograph.push(new Photograph());

    return allPhotograph;
}