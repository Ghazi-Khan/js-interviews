console.log('promise-1 started');


// Promises "start" when they are create
const promiseOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('time-out invoked');
    resolve('resolved');
  }, 1000);
});

// consuming promise
promiseOne.then((response) => {
  console.log('response - ', response);
});



console.log('main flow ..');
