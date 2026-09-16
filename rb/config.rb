# WaterQualityArchive SDK configuration

module WaterQualityArchiveConfig
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
  def self.make_config
    {
      "main" => {
        "name" => "WaterQualityArchive",
        "slug" => "water-quality-archive",
        "version" => "0.0.1",
        "target" => "rb",
      },
      "feature" => {
        "ratelimit" => {
          "options" => {
            "active" => false,
            "burst" => 5,
            "rate" => 5,
          },
          "optspec" => {
            "now" => "`$FUNCTION`",
            "sleep" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
        "retry" => {
          "options" => {
            "active" => false,
            "factor" => 2,
            "maxDelay" => 2000,
            "minDelay" => 50,
            "retries" => 2,
            "statuses" => [
              408,
              425,
              429,
              500,
              502,
              503,
              504,
            ],
          },
          "optspec" => {
            "jitter" => "`$BOOLEAN`",
            "sleep" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
        "test" => {
          "options" => {
            "active" => false,
          },
          "optspec" => {
            "entity" => "`$MAP`",
            "net" => "`$MAP`",
          },
          "strict" => false,
          "transport" => "base",
        },
        "timeout" => {
          "options" => {
            "active" => false,
            "ms" => 30000,
          },
          "optspec" => {
            "clearTimer" => "`$FUNCTION`",
            "setTimer" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
      },
      "options" => {
        "base" => "https://environment.data.gov.uk/water-quality",
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "measurement" => {},
        },
      },
      "entity" => {
        "measurement" => {
          "fields" => [
            {
              "name" => "determinand",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "id",
              "short" => "Unique identifier for the measurement",
              "type" => "`$STRING`",
            },
            {
              "name" => "purpose",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "result",
              "short" => "Measurement result value",
              "type" => "`$NUMBER`",
            },
            {
              "name" => "resultQualifier",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "sample",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "samplingPoint",
              "type" => "`$OBJECT`",
            },
          ],
          "id" => {
            "field" => "id",
            "name" => "id",
          },
          "name" => "measurement",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "area",
                        "orig" => "area",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "determinand",
                        "orig" => "determinand",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "end_date",
                        "orig" => "end_date",
                        "type" => "`$STRING`",
                      },
                      {
                        "example" => "json",
                        "kind" => "query",
                        "name" => "format",
                        "orig" => "format",
                        "type" => "`$STRING`",
                      },
                      {
                        "example" => 100,
                        "kind" => "query",
                        "name" => "limit",
                        "orig" => "limit",
                        "type" => "`$INTEGER`",
                      },
                      {
                        "example" => 0,
                        "kind" => "query",
                        "name" => "offset",
                        "orig" => "offset",
                        "type" => "`$INTEGER`",
                      },
                      {
                        "kind" => "query",
                        "name" => "purpose",
                        "orig" => "purpose",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "sampling_point",
                        "orig" => "sampling_point",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "start_date",
                        "orig" => "start_date",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "water_body",
                        "orig" => "water_body",
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/data/measurement",
                  "segments" => [
                    {
                      "lit" => "data",
                    },
                    {
                      "lit" => "measurement",
                    },
                  ],
                  "select" => {
                    "exist" => [
                      "area",
                      "determinand",
                      "end_date",
                      "format",
                      "limit",
                      "offset",
                      "purpose",
                      "sampling_point",
                      "start_date",
                      "water_body",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "parts" => [
                    "data",
                    "measurement",
                  ],
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    WaterQualityArchiveFeatures.make_feature(name)
  end
end
