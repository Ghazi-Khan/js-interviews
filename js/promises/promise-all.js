const timeOut = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {

      if(time === 2000) {
        reject({error: 'rejected', status: 'NOT_VALID_TIME'})
      } else {
        console.log('resolving the promise');
        resolve('promise resolved');
      }
    }, time);
  });
}

timeOut(1000)
.then((response) => {
  console.log('in first then - ', response);
  // throw Error('someting went wrong in first then');
  return response + " - add";
})
.then((response) => {
  console.log('in second then - ', response);
  return response;
})
.catch((error) => {
  console.log('error occured - ', error);
});