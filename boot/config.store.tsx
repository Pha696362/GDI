import YOUTUBEAPI from "../app/store/Youtube.store";
import CONTENT from "../app/store/Content.store";
import ACTION from "../app/store/DailyAction.store";
import AWARD from "../app/store/Award.store";
import SPEECH from "../app/store/Speech.store";
import BIO from "../app/store/Bio.store";
import Messaging from "../app/store/messaging.store";
import ListContentbycategory from "../app/store/ListContentbycategory";
export default function() {
  return {
    youtube: new YOUTUBEAPI(),
    content: new CONTENT(),
    action: new ACTION(),
    award: new AWARD(),
    speech: new SPEECH(),
    bio: new BIO(),
    messaging: new Messaging(),
    contentbycategory: new ListContentbycategory
  };
}
