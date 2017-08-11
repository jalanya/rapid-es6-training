function doAsync() {
  let p = new Promise(function (resolve, reject) {
    console.log('in promise code');
    setTimeout(function() {
      console.log('resolving...');
      resolve();
    }, 2000);
  });
  return p;
}

doAsync().then(function() {
  console.log('Fulfilled!');
},
function() {
  console.log('Rejected!');
});
