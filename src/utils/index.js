function convertDate(date) {
  let dateObject = new Date(date);
  var arr = dateObject.toUTCString().split(/ |,/);

  return `${arr[2] + " "+ arr[3]}`;
}

export default convertDate