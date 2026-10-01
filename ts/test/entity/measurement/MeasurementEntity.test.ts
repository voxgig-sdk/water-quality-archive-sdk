

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { WaterQualityArchiveSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


describe('MeasurementEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when WATER_QUALITY_ARCHIVE_TEST_LIVE=TRUE.
  afterEach(liveDelay('WATER_QUALITY_ARCHIVE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = WaterQualityArchiveSDK.test()
    const ent = testsdk.Measurement()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.WATER_QUALITY_ARCHIVE_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'measurement.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"determinand":{"a":true,"h":"Determinand","n":"determinand","r":false,"t":"`$OBJECT`","key$":"determinand","index$":0},"id":{"a":true,"h":"Id","n":"id","r":false,"sh":"Unique identifier for the measurement","t":"`$STRING`","key$":"id","index$":1},"purpose":{"a":true,"h":"Purpose","n":"purpose","r":false,"t":"`$OBJECT`","key$":"purpose","index$":2},"result":{"a":true,"h":"Result","n":"result","r":false,"sh":"Measurement result value","t":"`$NUMBER`","key$":"result","index$":3},"resultQualifier":{"a":true,"h":"Result Qualifier","n":"resultQualifier","r":false,"t":"`$OBJECT`","key$":"resultQualifier","index$":4},"sample":{"a":true,"h":"Sample","n":"sample","r":false,"t":"`$OBJECT`","key$":"sample","index$":5},"samplingPoint":{"a":true,"h":"Sampling Point","n":"samplingPoint","r":false,"t":"`$OBJECT`","key$":"samplingPoint","index$":6}},"id":{"field":"id","name":"id"},"name":"measurement","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /data/measurement","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"area","or":"area","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"determinand","or":"determinand","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"query","n":"end_date","or":"endDate","r":false,"t":"`$STRING`","index$":2},{"a":true,"ex":"json","k":"query","n":"format","or":"format","r":false,"t":"`$STRING`","index$":3},{"a":true,"ex":100,"k":"query","n":"limit","or":"_limit","r":false,"t":"`$INTEGER`","index$":4},{"a":true,"ex":0,"k":"query","n":"offset","or":"_offset","r":false,"t":"`$INTEGER`","index$":5},{"a":true,"k":"query","n":"purpose","or":"purpose","r":false,"t":"`$STRING`","index$":6},{"a":true,"k":"query","n":"sampling_point","or":"samplingPoint","r":false,"t":"`$STRING`","index$":7},{"a":true,"k":"query","n":"start_date","or":"startDate","r":false,"t":"`$STRING`","index$":8},{"a":true,"k":"query","n":"water_body","or":"waterBody","r":false,"t":"`$STRING`","index$":9}]},"k":"http","m":"GET","o":"/data/measurement","q":{"exist":["area","determinand","end_date","format","limit","offset","purpose","sampling_point","start_date","water_body"]},"r":{},"s":[{"lit":"data"},{"lit":"measurement"}],"t":{"req":"`reqdata`","res":"`body.items`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"measurement","name__orig":"measurement","Name":"Measurement","name_":"measurement","name-":"measurement","NAME":"MEASUREMENT","index$":0}, {"active":true,"entity":"measurement","key$":"BasicMeasurementFlow","kind":"basic","name":"BasicMeasurementFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"measurement_ref01"}}],"index$":0}]}, 'Measurement', {"GET /data/measurement":{"protocol":"http","parameters":[{"name":"samplingPoint","in":"query","description":"Filter by sampling point identifier","required":false,"schema":{"type":"string"},"index$":0},{"name":"determinand","in":"query","description":"Filter by determinand (water quality parameter) identifier","required":false,"schema":{"type":"string"},"index$":1},{"name":"startDate","in":"query","description":"Start date for measurement period (ISO 8601 format)","required":false,"schema":{"type":"string","format":"date"},"index$":2},{"name":"endDate","in":"query","description":"End date for measurement period (ISO 8601 format)","required":false,"schema":{"type":"string","format":"date"},"index$":3},{"name":"area","in":"query","description":"Filter by geographical area","required":false,"schema":{"type":"string"},"index$":4},{"name":"waterBody","in":"query","description":"Filter by water body identifier","required":false,"schema":{"type":"string"},"index$":5},{"name":"purpose","in":"query","description":"Filter by monitoring purpose (e.g., compliance, investigation)","required":false,"schema":{"type":"string","enum":["compliance","investigation","surveillance","operational"]},"index$":6},{"name":"format","in":"query","description":"Response format","required":false,"schema":{"type":"string","enum":["json","csv","xml"],"default":"json"},"index$":7},{"name":"_limit","in":"query","description":"Maximum number of results to return","required":false,"schema":{"type":"integer","minimum":1,"maximum":10000,"default":100},"index$":8},{"name":"_offset","in":"query","description":"Number of results to skip for pagination","required":false,"schema":{"type":"integer","minimum":0,"default":0},"index$":9}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let measurement_ref01_data = Object.values(setup.data.existing.measurement)[0] as any

    // LIST
    const measurement_ref01_ent = client.Measurement()
    const measurement_ref01_match: any = {}

    const measurement_ref01_list = (await measurement_ref01_ent.list(measurement_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/measurement/MeasurementTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = WaterQualityArchiveSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['measurement01','measurement02','measurement03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'WATER_QUALITY_ARCHIVE_TEST_MEASUREMENT_ENTID': idmap,
    'WATER_QUALITY_ARCHIVE_TEST_LIVE': 'FALSE',
    'WATER_QUALITY_ARCHIVE_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['WATER_QUALITY_ARCHIVE_TEST_MEASUREMENT_ENTID']

  const live = 'TRUE' === env.WATER_QUALITY_ARCHIVE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['WATER_QUALITY_ARCHIVE_TEST_MEASUREMENT_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new WaterQualityArchiveSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.WATER_QUALITY_ARCHIVE_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
