# WaterQualityArchive SDK configuration


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "WaterQualityArchive",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
      },
        },
        "options": {
            "base": "https://environment.data.gov.uk/water-quality",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "measurement": {},
            },
        },
        "entity": {
      "measurement": {
        "fields": [
          {
            "name": "determinand",
            "type": "`$OBJECT`",
          },
          {
            "name": "id",
            "type": "`$STRING`",
          },
          {
            "name": "purpose",
            "type": "`$OBJECT`",
          },
          {
            "name": "result",
            "type": "`$NUMBER`",
          },
          {
            "name": "resultQualifier",
            "type": "`$OBJECT`",
          },
          {
            "name": "sample",
            "type": "`$OBJECT`",
          },
          {
            "name": "samplingPoint",
            "type": "`$OBJECT`",
          },
        ],
        "name": "measurement",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "area",
                      "orig": "area",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "determinand",
                      "orig": "determinand",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "end_date",
                      "orig": "end_date",
                      "type": "`$STRING`",
                    },
                    {
                      "example": "json",
                      "kind": "query",
                      "name": "format",
                      "orig": "format",
                      "type": "`$STRING`",
                    },
                    {
                      "example": 100,
                      "kind": "query",
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$INTEGER`",
                    },
                    {
                      "example": 0,
                      "kind": "query",
                      "name": "offset",
                      "orig": "offset",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "purpose",
                      "orig": "purpose",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "sampling_point",
                      "orig": "sampling_point",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "start_date",
                      "orig": "start_date",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "water_body",
                      "orig": "water_body",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/data/measurement",
                "parts": [
                  "data",
                  "measurement",
                ],
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
                    "water_body",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
