import YOUTUBEAPI from "../app/store/Youtube.store";
import CONTENT from "../app/store/Content.store";
import SPEECH from "../app/store/Speech.store";
import Messaging from "../app/store/messaging.store";
import ListContentbycategory from "../app/store/ListContentbycategory";
import ContactStore from "../app/store/contact.store";
export default function() {
  return {
    youtube: new YOUTUBEAPI(),
    content: new CONTENT(),
    speech: new SPEECH(),
    messaging: new Messaging(),
    contentbycategory: new ListContentbycategory,
    contact: new ContactStore(),
  };
}
