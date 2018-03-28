# promise-jsonp

> jsonp with elegent Promise API.

## Installation

This repo is not on npm yet, so you can just clone `index.js` for now.

## API

```js
const pjsonp = require('path/to/pjsonp')
const url = 'http://jsfiddle.net/echo/jsonp/'
const params = {
  beep: 'boop',
  yo: 'dawg'
}
const options = {
  timeout: 1,
  name: 'namedCb'
}

pjsonp(url, params, options)
  .then(data => {
    /* deal with the data you just fetched! */
  })
  .catch(err => {
    /* timeout err by default */
  })
```

* `url`: url to fetch data. It should look like `http://somehostname[:someport]/to/some/path[?with=true&orWithoutQueries=false]`
* `params`: an plain object contains parameters. We will parse them into `url` for you. But if you don't have parameters or have enclosed them in url, that's fine. Just ignore `params`.
* `options`:
  * `prefix`: prefix of jsonp callback function. Default: `__jp`.
  * `timeout`: literal meaning. Default: `60000`, in millisecond.
  * `name`: the name of callback function. If set, `prefix` would be invalid. Default: `undefined`.
  * `param`: name of the query string parameter to specify the callback. Default: `callback`.

## Test

Test with Jest. Just run `npm run test`.

## LICENSE

MIT
