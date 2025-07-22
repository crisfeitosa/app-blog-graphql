export const stringToDate = (dateString: string) => {
  const timestamp = Date.parse(dateString);

  const date = new Date(timestamp);

  const day =
    date.getDate().toString().length == 1
      ? '0' + date.getDate().toString()
      : date.getDate().toString();

  const month =
    (date.getMonth() + 1).toString().length === 1
      ? '0' + (date.getMonth() + 1)
      : date.getMonth() + 1;

  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
};