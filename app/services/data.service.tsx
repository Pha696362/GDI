import firebase from "react-native-firebase";
import AppConfig from "../dummy/AppConfig";

const db = firebase.firestore();

export function categoryRef() {
  return db.collection("category");
}
export function speechRef() {
  return db.collection("speech");
}
export function bioRef(){
  return db.collection('bio')
}

export function ContentRef(lastVisible?: any, categoryKey?: string) {
  if (lastVisible) {
    if (categoryKey) {
      return db
        .collection("content")
        .where("category.key", "==", categoryKey)
        .orderBy("page_key", "DESC")
        .startAfter(lastVisible.page_key)
        .limit(AppConfig.size);
    } else {
      return db
        .collection("content")
        .orderBy("page_key", "DESC")
        .startAfter(lastVisible.page_key)
        .limit(AppConfig.size);
    }
  } else {
    if (categoryKey) {
      return db
        .collection("content")
        .where("category.key", "==", categoryKey)
        .orderBy("page_key", "DESC")
        .limit(AppConfig.size);
    } else {
      return db
        .collection("content")
        .orderBy("page_key", "desc")
        .limit(AppConfig.size);
    }
  }
}
