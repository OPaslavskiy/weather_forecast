export function formatedDateForRequest(date) {
  const dateObj = new Date(date);
  const day = String(dateObj.getDate()).padStart(2, "0");
  const month = String(dateObj.getMonth() + 1).padStart(2, "0");
  const year = dateObj.getFullYear();
  const formattedDateForRequest = `${year}-${month}-${day}`;
  return formattedDateForRequest;
}
