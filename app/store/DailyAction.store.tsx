import { observable, action } from "mobx";
import { ContentRef } from "../services/data.service";
import { pushToArray } from "../services/mapping.service";
import AppConfig from "../dummy/AppConfig";

export default class ACTION {
  @observable contentDoc: any = null;
  @observable loadingContent: boolean = true;
  @observable loadingMore: boolean = false;
  @observable loadingRefreshContent: boolean = false;
  @observable dataSelected: any = null;
  @observable dataAction: any = null;
  @observable contentLastVisible: any = null;

  @action
  fetchAction() {
    this.loadingContent = true;
    this.contentLastVisible = null;
    ContentRef(this.contentLastVisible, "rRSyRceIhwpQDPQz60Fi")
      .get()
      .then(item => {
        const data = pushToArray(item);
        if (item.size === AppConfig.size) {
          this.contentLastVisible = data[data.length - 1];
        } else {
          this.contentLastVisible = null;
        }
        this.dataAction = data;
        this.loadingContent = false;
      })
      .catch(e => {
        this.contentLastVisible = null;
        this.dataAction = [];
        this.loadingContent = false;
      });
  }

  @action
  refreshAction() {
    this.loadingRefreshContent = true;
    this.contentLastVisible = null;
    ContentRef(this.contentLastVisible, "rRSyRceIhwpQDPQz60Fi")
      .get()
      .then(item => {
        const data = pushToArray(item);
        if (item.size === AppConfig.size) {
          this.contentLastVisible = data[data.length - 1];
        } else {
          this.contentLastVisible = null;
        }
        this.dataAction = data;
        this.loadingRefreshContent = false;
      })
      .catch(e => {
        this.contentLastVisible = null;
        this.dataAction = [];
        this.loadingRefreshContent = false;
      });
  }

  @action
  async fetchMoreAction() {
    if (!this.contentLastVisible || this.loadingMore) return;
    this.loadingMore = true;
    ContentRef(this.contentLastVisible, "rRSyRceIhwpQDPQz60Fi")
      .get()
      .then(data => {
        const item = pushToArray(data);
        if (data.size === AppConfig.size) {
          this.contentLastVisible = item[item.length - 1];
        } else {
          this.contentLastVisible = null;
        }
        this.dataAction = this.dataAction.concat(item);
        this.loadingMore = false;
      });
  }

  @action
  selectedContent(item: any) {
    this.dataSelected = item;
  }
}
