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

doAsync().catch(function(reason) {
  console.log('Error: ' + reason);
});
