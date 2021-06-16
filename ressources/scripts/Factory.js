import {Video} from './video.js';
import {Photo} from './photo.js';

export class Factory {

    static createMedia(mediaInfo) {
        if(mediaInfo.hasOwnProperty("video")) {
            return new Video(mediaInfo.id, mediaInfo.photographerId, mediaInfo.title , mediaInfo.video, mediaInfo.tags , mediaInfo.likes, mediaInfo.date, mediaInfo.price);
        }else {
            return new Photo(mediaInfo.id, mediaInfo.photographerId, mediaInfo.title , mediaInfo.image, mediaInfo.tags , mediaInfo.likes, mediaInfo.date, mediaInfo.price)
        }
    }
}
