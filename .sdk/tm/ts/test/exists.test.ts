
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { WaterQualityArchiveSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = WaterQualityArchiveSDK.test()
    equal(testsdk instanceof WaterQualityArchiveSDK, true,
      'WaterQualityArchiveSDK.test() must return a client synchronously')
  })

})
