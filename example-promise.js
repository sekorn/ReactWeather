// function getTempCallback(location, callback) {
//   callback(undefined, 78);
//   callback('City not found');
//
// }
//
// getTempCallback('Philadelphia', function (err, temp) {
//   if (err) {
//     console.log('error', err);
//   } else {
//     console.log('success', temp);
//   }
// });
//
// function getTempPromise(location) {
//   return new Promise(function (resolve, reject) {
//     resolve(79);
//     reject('City not found');
//   });
// }
//
// getTempPromise('Philadelphia').then(function (temp) {
//   console.log('promise success', temp);
// }, function (err) {
//   console.log('promise error', err);
// });

// Challenge Area
function addPromise (a, b) {
  return new Promise(function (resolve, reject) {
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a + b);
    } else {
      reject('Either a or b is not a number.');
    }
  });
}

addPromise(2, 4).then(function (temp) {
  console.log('success', temp);
}, function (err) {
  console.log('error', err)
});

addPromise('Scott', 9).then(function (sum) {
  console.log('this should not show up', sum);
}, function (err) {
  console.log('this should appear', err);
});
