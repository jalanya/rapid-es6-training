function doAsync() {
  let p = new Promise(function (resolve, reject) {
    console.log('in promise code');
    setTimeout(function() {
      console.log('rejecting...');
      reject('Database Error');
    }, 2000);
  });
  return p;
}

doAsync().then(function(value) {
  console.log('Fulfilled! ' + value);
},
function(reason) {
  console.log('Rejected! ' + reason);
});
