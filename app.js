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

/*
doAsync().then(function(value) {
  console.log('Ok!');
},function(reason) {
  console.log('Nope!');
});
*/

let p1 = new Promise(function(resolve, reject) {
  setTimeout(function() {
    console.log('3 seconds');
    reject('Aaa');
  }, 3000);
});

let p2 = new Promise(function(resolve, reject) {
  setTimeout(function() {
    console.log('5 seconds');
    reject('Bbb');
  }, 5000);
});

Promise.all([p1, p2]).then(function(value) {
  console.log('Ok');
}, function(reason) {
  console.log('Nope!..', reason);
});
