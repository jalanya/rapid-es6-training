function getAnotherPromise() {
  return Promise.reject('No Go!');
}

function doAsync() {
  let p = new Promise(function (resolve, reject) {
    console.log('in promise code');
    setTimeout(function() {
      resolve(getAnotherPromise());
    }, 2000);
  });
  return p;
}

doAsync().then(function(value) {
  console.log('Ok!');
},function(reason) {
  console.log('Nope!');
});
