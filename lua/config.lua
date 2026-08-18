-- WaterQualityArchive SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "WaterQualityArchive",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
      },
    },
    options = {
      base = "https://environment.data.gov.uk/water-quality",
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["measurement"] = {},
      },
    },
    entity = {
      ["measurement"] = {
        ["fields"] = {
          {
            ["name"] = "determinand",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "id",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "purpose",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "result",
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "resultQualifier",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "sample",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "samplingPoint",
            ["type"] = "`$OBJECT`",
          },
        },
        ["name"] = "measurement",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "area",
                      ["orig"] = "area",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "determinand",
                      ["orig"] = "determinand",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "end_date",
                      ["orig"] = "end_date",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = "json",
                      ["kind"] = "query",
                      ["name"] = "format",
                      ["orig"] = "format",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = 100,
                      ["kind"] = "query",
                      ["name"] = "limit",
                      ["orig"] = "limit",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["example"] = 0,
                      ["kind"] = "query",
                      ["name"] = "offset",
                      ["orig"] = "offset",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "purpose",
                      ["orig"] = "purpose",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "sampling_point",
                      ["orig"] = "sampling_point",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "start_date",
                      ["orig"] = "start_date",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "water_body",
                      ["orig"] = "water_body",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/data/measurement",
                ["parts"] = {
                  "data",
                  "measurement",
                },
                ["select"] = {
                  ["exist"] = {
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
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
