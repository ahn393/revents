const promise = new Promise((resolve, reject) => setTimeout(() => resolve('congrats'), 2000))
promise
  .then(result => console.log(result))
  .catch(error => console.log(error))