import moment from "moment";
import { Alert } from "react-native";

var moments = require("moment");
require("moment/min/locales.min");
moment.locale("km");

export function _formatShortDate(date: any) {
  return moments.unix(date).format(" dddd Do ខែ MMM ឆ្នាំYYYY" );
}
// export function _formatShortDate1(date: any) {
//   return moments.unix(date).format("MMM");
// }
export function _formatDateTime(date: any) {
  return  moment.unix(date).fromNow()
}

