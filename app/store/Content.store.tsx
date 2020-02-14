import { observable, action } from "mobx";
import { ContentRef } from "../services/data.service";
import { pushToArray } from "../services/mapping.service";
import AppConfig from "../dummy/AppConfig";

export default class CONTENT {
  @observable contentDoc: any = null;
  @observable loadingContent: boolean = true;
  @observable loading: boolean = false;
  @observable loadingMore: boolean = false;
  @observable loadingRefreshContent: boolean = false;
  @observable dataSelected: any = null;
  @observable dataAward: any = null;
  @observable contentLastVisible: any = null;
  @action
  fetchContent() {
    this.loadingContent = true;
    this.contentLastVisible = null;
    ContentRef(this.contentLastVisible)
      .get()
      .then(item => {
        const data = pushToArray(item);
        if (item.size === AppConfig.size) {
          this.contentLastVisible = data[data.length - 1];
        } else {
          this.contentLastVisible = null;
        }
        this.contentDoc = data;
        this.loadingContent = false;
      })
      .catch(e => {
        this.contentLastVisible = null;
        this.contentDoc = [];
        this.loadingContent = false;
      });
  }

  @action
  refreshContent() {
    this.loadingRefreshContent = true;
    this.contentLastVisible = null;
    ContentRef(this.contentLastVisible)
      .get()
      .then(item => {
        const data = pushToArray(item);
        if (item.size === AppConfig.size) {
          this.contentLastVisible = data[data.length - 1];
        } else {
          this.contentLastVisible = null;
        }
        this.contentDoc = data;
        this.loadingRefreshContent = false;
      })
      .catch(e => {
        this.contentLastVisible = null;
        this.contentDoc = [];
        this.loadingRefreshContent = false;
      });
  }

  @action
  async fetchMoreContent() {
    if (!this.contentLastVisible || this.loadingMore) return;
    this.loadingMore = true;
    ContentRef(this.contentLastVisible)
      .get()
      .then(data => {
        const item = pushToArray(data);
        if (data.size === AppConfig.size) {
          this.contentLastVisible = item[item.length - 1];
        } else {
          this.contentLastVisible = null;
        }
        this.contentDoc = this.contentDoc.concat(item);
        this.loadingMore = false;
      });
  }

  @action
  selectedContent(item: any) {
    this.dataSelected = item;
  }

  // @action
  // fetchContentAward() {
  //   ContentRef()
  //     .where("category.key", "==", "aMQIGTiawJvTUZsdq6Ao")
  //     .orderBy("page_key", "desc")
  //     .onSnapshot((item: any) => {
  //       const docs = pushToArray(item);
  //       this.dataAward = docs;
  //       this.loading = false;
  //     });
  // }
}
