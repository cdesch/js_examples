import moment from "moment";

export function formatDate(dateValue, format = 'MMM D HH:mm'){
  return moment(dateValue,"YYYY-MM-DDTHH:mm:ss.SSSZ").format(format)
}