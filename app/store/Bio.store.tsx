import { observable, action } from "mobx";
import { bioRef } from "../services/data.service";
import { pushToArray, pushToObject } from "../services/mapping.service";

export default class SPEECH {
  @observable bioData: any = null;
  @observable loading: boolean = false;

  @action
  fetchBio() {
    bioRef()
      .orderBy("page_key", "desc")
      .onSnapshot((item:any) => {
        const docs = pushToArray(item);
        this.bioData = docs[0];
        this.loading = false;
      });
  }
}
