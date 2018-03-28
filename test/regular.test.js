const pjsonp = require('../index')
const url = 'http://jsfiddle.net/echo/jsonp/'
const obj = {
  beep: 'boop',
  yo: 'dawg'
}

test('Regular', () => {
  pjsonp(url, obj).then(data => {
    expect(data).toEqual(obj)
  })
})

test('Timeout', () => {
  pjsonp(url, obj, { timeout: 1 })
    .then()
    .catch(err => {
      expect(err).toBe('[ERROR] Time out.')
    })
})

test('Named callback', () => {
  pjsonp(url, obj, { name: 'namedCb' }).then(data => {
    expect(data).toEqual(obj)
  })
})
