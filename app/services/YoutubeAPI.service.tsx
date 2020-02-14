import Axios from 'axios'
import { Alert } from 'react-native';

export async function YoutubeAPI(result:any){
    const API = await Axios.get(`https://www.googleapis.com/youtube/v3/search?order=date&part=snippet&channelId=UCqrIKD6LQhs4oqEgbVchw5w&maxResults=50&key=AIzaSyBXZ2Lis8S_OeC18JsIFuo4WoIejkCYW9M`);  
    return API

}