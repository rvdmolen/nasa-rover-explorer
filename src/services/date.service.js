import dayjs from "dayjs";


function formatDate(date) {
  return dayjs(date).format('YYYY-MM-DD');
}

export const dateService = {
  formatDate
}
