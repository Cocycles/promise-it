# promise-me - Generation of promises made easy

How many times you have this pattern inside your code?

```javascript
function someFunc() {
  var defer = Q.defer();

  ...
  call.something(function(err, data) {
    if (err) throw err;

    defer.resolve(data);
  })

  return defer.promise;
}
```

This is how it looks like using promise-me:

```javascript
function someFunc() {
  return promiseMe(call.something);
}
```

## Installation

```bash
$ npm install promise-me
```
