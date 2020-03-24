import { YoutubeAPI } from "../services/YoutubeAPI.service";
import { observable, action, observe } from "mobx";

export default class YOUTUBEAPI {
  @observable youtubeDoc: any = null;
  @observable firstYoutubeDoc: any = null;
  @observable loading: boolean = false;
  @observable selectYoutube: string = "";

  @action
  async fetchYoutube() {
    this.loading = true;
    const API: any = await YoutubeAPI(50);
    const firstYoutubeDoc = await API.data.items.slice(0, 1);
    this.youtubeDoc = API.data.items;
    this.loading = false;
  }

  @action
 async SelectVideo(VideoID: string) {
    this.selectYoutube = VideoID;
  }
}