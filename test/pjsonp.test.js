const pjsonp = require('../index')
const url = 'http://jsfiddle.net/echo/jsonp/'
const obj = {
  beep: 'boop',
  yo: 'dawg'
}

test('Regular', () => {
  return pjsonp(url, obj, {}).then(data => {
    expect(data).toEqual(obj)
  })
})

test('Timeout', () => {
  expect.assertions(1)
  return pjsonp(url, obj, { timeout: 1 })
    .then()
    .catch(err => {
      expect(err).toBe('[ERROR] Time out.')
    })
})

test('Named callback', () => {
  return pjsonp(url, obj, { name: 'namedCb' }).then(data => {
    expect(data).toEqual(obj)
  })
})

test('Without params', () => {
  return pjsonp(url + '?beep=boop&yo=dawg', { name: 'namedCb' }).then(data => {
    expect(data).toEqual(obj)
  })
})

test('Without params or options', () => {
  return pjsonp(url + '?beep=boop&yo=dawg').then(data => {
    expect(data).toEqual(obj)
  })
})
