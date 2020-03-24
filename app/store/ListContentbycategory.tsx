import { observable, action } from "mobx";
import { ContentRef } from "../services/data.service";
import { pushToArray } from "../services/mapping.service";
import AppConfig from "../dummy/AppConfig";

export default class ListContentbycategory {
  @observable contentDoc: any = null;
  @observable loadingContent: boolean = true;
  @observable loading: boolean = false;
  @observable loadingMore: boolean = false;
  @observable loadingRefreshContent: boolean = false;
  @observable dataSelected: any = null;
  @observable dataAward: any = null;
  @observable contentLastVisible: any = null;
  @observable categoryKey:string =''
 @observable selectCategory :any =null;
 @observable categoryTitle :string=''


  @action
  fetchContent(categoryKey: string, categoryTitle:string) {
      this.loading = true;
      this.contentLastVisible = null;
      this.categoryTitle = categoryTitle;
    this.categoryKey=categoryKey;

      if (categoryKey) {
        ContentRef(this.contentLastVisible, categoryKey)
              .get()
              .then(item => {
                  const data = pushToArray(item);
                  console.log('this.data',data)
                  if (item.size === AppConfig.size) {
                      this.contentLastVisible = data[data.length - 1];
                  } else {
                      this.contentLastVisible = null;
                  }
                  this.contentDoc = data;
                  console.log('this.contentDoc',this.contentDoc)
                  this.loadingContent = false;

                  this.loading = false;
              })
              .catch(e => {
                  this.contentLastVisible = null;
                  this.contentDoc = [];
                  console.log('this.failed 1',e)
                  this.loading = false;
              });
      } else {
          ContentRef(this.contentLastVisible,categoryKey)
              .get()
              .then(item => {
                  const data = pushToArray(item);
                  console.log('this.data',data)
                  if (item.size === AppConfig.size) {
                      this.contentLastVisible = data[data.length - 1];
                  } else {
                      this.contentLastVisible = null;
                  }
                  this.contentDoc = data;


                  this.loading = false;
                  
                 
              })
              .catch(e => {
                  this.contentLastVisible = null;
                  this.contentDoc = [];
                  console.log('this.failed')
                  this.loading = false;
              });
      }
  }

  @action
  fetchRefreshContent() {
      this.loadingRefreshContent = true;
      this.contentLastVisible = null;
   
          ContentRef(this.contentLastVisible,  this.categoryKey)
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
  fetchMoreContent() {

      if (!this.contentLastVisible || this.loadingMore) return;
      this.loadingMore = true;
    
          ContentRef(this.contentLastVisible,  this.categoryKey)
              .get()
              .then(item => {
                  const data = pushToArray(item);
                  if (item.size === AppConfig.size) {
                      this.contentLastVisible = data[data.length - 1];
                  } else {
                      this.contentLastVisible = null;
                  }
                  this.contentDoc = this.contentDoc.concat(data);
                  this.loadingMore = false;
              })
              .catch(e => {
                  this.contentLastVisible = null;
                  this.contentDoc = [];
                  this.loadingMore = false;
              });
    
  }



  @action
  selectedContent(item: any) {
    this.dataSelected = item;
  }
  @action
  contentbycategory(item:any){
  this.selectCategory=item;
  }


}
