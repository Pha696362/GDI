import Axios from 'axios'
import { Alert } from 'react-native';

export async function YoutubeAPI(result:any){
    const API = await Axios.get(`https://www.googleapis.com/youtube/v3/search?order=date&part=snippet&channelId=UCnuUyt9WU7fsUsyourl6BEA&maxResults=10&key=AIzaSyBTO__MavL6BXKRcM0NIrqT5ndW_8gvjCE`);  
    // const API = await Axios.get(`https://www.googleapis.com/youtube/v3/search?order=date&part=snippet&channelId=UCKXoNllLQU7qm2sTycrfavQ&maxResults=10&key=AIzaSyBTO__MavL6BXKRcM0NIrqT5ndW_8gvjCE`);  

    return API

}