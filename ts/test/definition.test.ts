import { describe, test } from 'node:test'
import { SDK } from '..'
import { runDefinitionPoint } from './definition-runner'
import { isControlSkipped } from './utility'


// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN: any[] = [
  {
    "entity": "measurement",
    "accessor": "Measurement",
    "op": "list",
    "method": "GET",
    "path": "/data/measurement",
    "args": [],
    "select": {
      "area": "v1",
      "determinand": "v1",
      "end_date": "v1",
      "format": "json",
      "limit": 100,
      "offset": 0,
      "purpose": "v1",
      "sampling_point": "v1",
      "start_date": "v1",
      "water_body": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json",
      "text/csv",
      "application/xml"
    ],
    "query": [
      "samplingPoint",
      "determinand",
      "startDate",
      "endDate",
      "area",
      "waterBody",
      "purpose",
      "format",
      "_limit",
      "_offset"
    ],
    "queryArgs": [
      {
        "name": "area",
        "wire": "area"
      },
      {
        "name": "determinand",
        "wire": "determinand"
      },
      {
        "name": "end_date",
        "wire": "endDate"
      },
      {
        "name": "format",
        "wire": "format"
      },
      {
        "name": "limit",
        "wire": "_limit"
      },
      {
        "name": "offset",
        "wire": "_offset"
      },
      {
        "name": "purpose",
        "wire": "purpose"
      },
      {
        "name": "sampling_point",
        "wire": "samplingPoint"
      },
      {
        "name": "start_date",
        "wire": "startDate"
      },
      {
        "name": "water_body",
        "wire": "waterBody"
      }
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "@context": "x",
      "meta": {
        "publisher": "x",
        "licence": "x",
        "documentation": "x",
        "version": "x",
        "limit": 1,
        "offset": 1,
        "count": 1
      },
      "items": [
        {
          "@id": "x",
          "samplingPoint": {
            "@id": "x",
            "label": "x",
            "notation": "x",
            "lat": 1,
            "long": 1,
            "easting": 1,
            "northing": 1
          },
          "determinand": {
            "@id": "x",
            "label": "x",
            "notation": "x",
            "definition": "x",
            "unit": {
              "label": "x"
            }
          },
          "result": 1,
          "resultQualifier": {
            "notation": "x",
            "label": "x"
          },
          "sample": {
            "sampleDateTime": "2026-01-01T00:00:00Z",
            "sampledMaterialType": {
              "label": "x"
            }
          },
          "purpose": {
            "label": "x"
          }
        }
      ]
    },
    "idField": "id"
  }
]


describe('definition', () => {
  for (const point of PLAN) {
    test(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
      const control = isControlSkipped('entityOp', point.entity + '.' + point.op, 'definition')
      if (control.skip) {
        t.skip(control.reason || 'skipped via sdk-test-control.json')
        return
      }
      await runDefinitionPoint(SDK, point)
    })
  }
})
