import { observable, action } from "mobx";
import { speechRef } from "../services/data.service";
import { pushToArray, pushToObject } from "../services/mapping.service";

export default class SPEECH {
  @observable speechData: any = null;
  @observable loading: boolean = false;

  @action
  fetchSpeech() {
    speechRef()
      .orderBy("page_key", "desc")
      .onSnapshot((item:any) => {
        const docs = pushToArray(item);
        this.speechData = docs[0];
        this.loading = false;
      });
  }
}
