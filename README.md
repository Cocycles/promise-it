# Promise Me

Promise Me makes generation of promises easier and with much less code by providing simplified API for converting
callback-based async functions to promises using the great Q module.

## Why Do I Need It?
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

with Promise Me it's much easier:

```javascript
function someFunc() {
  return promiseMe(call.something);
}
```

## Installation

```bash
$ npm install promise-me
```

## API Reference

### promiseMe(function: function, params: array, context: object)
Calls the given function (with provided params and context) and returns a promise until the callback is called.

### promiseMe.all([{ function: function, params: array, context: object }])
Calls array of functions (with provided params and context) and returns one promise that will resolve once all given functions were resolved.

## License
The MIT License (MIT)

Copyright (c) 2014 Ran Mizrahi <ran@cocycles.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
