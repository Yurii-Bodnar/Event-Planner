export const getCorrectStrLength = (str) =>
  str.split("").slice(0, 100).join("");
export const correctDateCalendar = (dateValue) => {
  const date =
    dateValue.getDate() < 10 ? "0" + dateValue.getDate() : dateValue.getDate();
  const month = dateValue.getMonth() + 1;
  if (month < 10) {
    return date + "." + "0" + month;
  } else {
    return date + "." + month;
  }
};
