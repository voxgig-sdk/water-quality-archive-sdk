
import { BaseFeature } from './feature/base/BaseFeature'
import { RatelimitFeature } from './feature/ratelimit/RatelimitFeature'
import { RetryFeature } from './feature/retry/RetryFeature'
import { TestFeature } from './feature/test/TestFeature'
import { TimeoutFeature } from './feature/timeout/TimeoutFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   ratelimit: RatelimitFeature,
 retry: RetryFeature,
 test: TestFeature,
 timeout: TimeoutFeature,

}


const FEATURE_PLUGINS: Record<string, any[]> = {
  
}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'WaterQualityArchive',
        slug: "water-quality-archive",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     ratelimit:     {
      "options": {
        "active": false,
        "burst": 5,
        "rate": 5
      },
      "optspec": {
        "now": "`$FUNCTION`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 retry:     {
      "options": {
        "active": false,
        "factor": 2,
        "maxDelay": 2000,
        "minDelay": 50,
        "retries": 2,
        "statuses": [
          408,
          425,
          429,
          500,
          502,
          503,
          504
        ]
      },
      "optspec": {
        "jitter": "`$BOOLEAN`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 test:     {
      "options": {
        "active": false
      },
      "optspec": {
        "entity": "`$MAP`",
        "net": "`$MAP`"
      },
      "strict": false,
      "transport": "base"
    },
 timeout:     {
      "options": {
        "active": false,
        "ms": 30000
      },
      "optspec": {
        "clearTimer": "`$FUNCTION`",
        "setTimer": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },

  }


  options = {
    base: "https://environment.data.gov.uk/water-quality",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
        measurement: {
        },
  
    }
  }


  entity = {
    "measurement": {
      "fields": [
        {
          "name": "determinand",
          "title": "Determinand",
          "type": "`$OBJECT`"
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "short": "Unique identifier for the measurement"
        },
        {
          "name": "purpose",
          "title": "Purpose",
          "type": "`$OBJECT`"
        },
        {
          "name": "result",
          "title": "Result",
          "type": "`$NUMBER`",
          "short": "Measurement result value"
        },
        {
          "name": "resultQualifier",
          "title": "Result Qualifier",
          "type": "`$OBJECT`"
        },
        {
          "name": "sample",
          "title": "Sample",
          "type": "`$OBJECT`"
        },
        {
          "name": "samplingPoint",
          "title": "Sampling Point",
          "type": "`$OBJECT`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "measurement",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/data/measurement",
              "segments": [
                {
                  "lit": "data"
                },
                {
                  "lit": "measurement"
                }
              ],
              "parts": [
                "data",
                "measurement"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "query": [
                  {
                    "name": "area",
                    "orig": "area",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "determinand",
                    "orig": "determinand",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "end_date",
                    "orig": "end_date",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "format",
                    "orig": "format",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "json"
                  },
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query",
                    "example": 100
                  },
                  {
                    "name": "offset",
                    "orig": "offset",
                    "type": "`$INTEGER`",
                    "kind": "query",
                    "example": 0
                  },
                  {
                    "name": "purpose",
                    "orig": "purpose",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "sampling_point",
                    "orig": "sampling_point",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "start_date",
                    "orig": "start_date",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "water_body",
                    "orig": "water_body",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "exist": [
                  "area",
                  "determinand",
                  "end_date",
                  "format",
                  "limit",
                  "offset",
                  "purpose",
                  "sampling_point",
                  "start_date",
                  "water_body"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config,
  FEATURE_PLUGINS,
}

