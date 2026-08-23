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
        "test" => {
          "options" => {
            "active" => false,
          },
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
                  "parts" => [
                    "data",
                    "measurement",
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
