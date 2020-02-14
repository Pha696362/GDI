import { observable, action } from "mobx";
import { ContentRef } from "../services/data.service";
import { pushToArray } from "../services/mapping.service";
import AppConfig from "../dummy/AppConfig";

export default class AWARD {
  @observable contentDoc: any = null;
  @observable loadingContent: boolean = true;
  @observable loadingMore: boolean = false;
  @observable loadingRefreshContent: boolean = false;
  @observable dataSelected: any = null;
  @observable dataAward: any = null;
  @observable contentLastVisible: any = null;

  @action
  fetchAward() {
    this.loadingContent = true;
    this.contentLastVisible = null;
    ContentRef(this.contentLastVisible, "aMQIGTiawJvTUZsdq6Ao")
      .get()
      .then(item => {
        const data = pushToArray(item);
        if (item.size === AppConfig.size) {
          this.contentLastVisible = data[data.length - 1];
        } else {
          this.contentLastVisible = null;
        }
        this.dataAward = data;
        this.loadingContent = false;
      })
      .catch(e => {
        this.contentLastVisible = null;
        this.dataAward = [];
        this.loadingContent = false;
      });
  }

  @action
  refreshAward() {
    this.loadingRefreshContent = true;
    this.contentLastVisible = null;
    ContentRef(this.contentLastVisible, "aMQIGTiawJvTUZsdq6Ao")
      .get()
      .then(item => {
        const data = pushToArray(item);
        if (item.size === AppConfig.size) {
          this.contentLastVisible = data[data.length - 1];
        } else {
          this.contentLastVisible = null;
        }
        this.dataAward = data;
        this.loadingRefreshContent = false;
      })
      .catch(e => {
        this.contentLastVisible = null;
        this.dataAward = [];
        this.loadingRefreshContent = false;
      });
  }

  @action
  async fetchMoreAward() {
    if (!this.contentLastVisible || this.loadingMore) return;
    this.loadingMore = true;
    ContentRef(this.contentLastVisible, "aMQIGTiawJvTUZsdq6Ao")
      .get()
      .then(data => {
        const item = pushToArray(data);
        if (data.size === AppConfig.size) {
          this.contentLastVisible = item[item.length - 1];
        } else {
          this.contentLastVisible = null;
        }
        this.dataAward = this.dataAward.concat(item);
        this.loadingMore = false;
      });
  }

  @action
  selectedAward(item: any) {
    this.dataSelected = item;
  }
}
