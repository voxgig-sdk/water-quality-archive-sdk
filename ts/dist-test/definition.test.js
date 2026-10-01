"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = require("node:test");
const __1 = require("..");
const definition_runner_1 = require("./definition-runner");
const utility_1 = require("./utility");
// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN = [
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
            "format": "v1",
            "limit": "v1",
            "offset": "v1",
            "purpose": "v1",
            "sampling_point": "v1",
            "start_date": "v1",
            "water_body": "v1"
        },
        "headers": [],
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
        "auth": null,
        "status": 200,
        "sample": {
            "@context": "x",
            "meta": {
                "count": 1,
                "documentation": "x",
                "licence": "x",
                "limit": 1,
                "offset": 1,
                "publisher": "x",
                "version": "x"
            },
            "items": [
                {
                    "@id": "x",
                    "determinand": {
                        "@id": "x",
                        "definition": "x",
                        "label": "x",
                        "notation": "x",
                        "unit": {
                            "label": "x"
                        }
                    },
                    "purpose": {
                        "label": "x"
                    },
                    "result": 1,
                    "resultQualifier": {
                        "label": "x",
                        "notation": "x"
                    },
                    "sample": {
                        "sampleDateTime": "2026-01-01T00:00:00Z",
                        "sampledMaterialType": {
                            "label": "x"
                        }
                    },
                    "samplingPoint": {
                        "@id": "x",
                        "easting": 1,
                        "label": "x",
                        "lat": 1,
                        "long": 1,
                        "northing": 1,
                        "notation": "x"
                    }
                }
            ]
        },
        "idField": "id"
    }
];
(0, node_test_1.describe)('definition', () => {
    for (const point of PLAN) {
        (0, node_test_1.test)(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
            const control = (0, utility_1.isControlSkipped)('entityOp', point.entity + '.' + point.op, 'definition');
            if (control.skip) {
                t.skip(control.reason || 'skipped via sdk-test-control.json');
                return;
            }
            await (0, definition_runner_1.runDefinitionPoint)(__1.SDK, point);
        });
    }
});
//# sourceMappingURL=definition.test.js.map