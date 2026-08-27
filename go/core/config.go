package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "WaterQualityArchive",
			"slug": "water-quality-archive",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"transport": "base",
			},
		},
		"options": map[string]any{
			"base": "https://environment.data.gov.uk/water-quality",
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"measurement": map[string]any{},
			},
		},
		"entity": map[string]any{
			"measurement": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "determinand",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "id",
						"short": "Unique identifier for the measurement",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "purpose",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "result",
						"short": "Measurement result value",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "resultQualifier",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "sample",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "samplingPoint",
						"type": "`$OBJECT`",
					},
				},
				"name": "measurement",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "area",
											"orig": "area",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "determinand",
											"orig": "determinand",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "end_date",
											"orig": "end_date",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "json",
											"kind": "query",
											"name": "format",
											"orig": "format",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": 100,
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 0,
											"kind": "query",
											"name": "offset",
											"orig": "offset",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "purpose",
											"orig": "purpose",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "sampling_point",
											"orig": "sampling_point",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "start_date",
											"orig": "start_date",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "water_body",
											"orig": "water_body",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/data/measurement",
								"parts": []any{
									"data",
									"measurement",
								},
								"select": map[string]any{
									"exist": []any{
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
