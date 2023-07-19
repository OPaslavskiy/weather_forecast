export function sortStartDates(a, b) {
  const dateA = new Date(a.start);
  const dateB = new Date(b.start);

  return dateA - dateB;
}
