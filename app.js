function doAsync() {
  let p = new Promise(function (resolve, reject) {
    console.log('in promise code');
    setTimeout(function() {
      console.log('rejecting...');
      reject('No Go');
    }, 2000);
  });
  return p;
}

doAsync().then(function(value) {
  console.log('Fulfilled!');
},function(reason) {
  console.log('Rejected! ' + reason);
  return Promise.reject('Buu!!..' + reason);
}).catch(function(reason) {
  console.log('Error: ' + reason);
});
