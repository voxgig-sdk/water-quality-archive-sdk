"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('MeasurementEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when WATER_QUALITY_ARCHIVE_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('WATER_QUALITY_ARCHIVE_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.WaterQualityArchiveSDK.test();
        const ent = testsdk.Measurement();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.WATER_QUALITY_ARCHIVE_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'measurement.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "determinand": { "a": true, "h": "Determinand", "n": "determinand", "r": false, "t": "`$OBJECT`", "key$": "determinand", "index$": 0 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "sh": "Unique identifier for the measurement", "t": "`$STRING`", "key$": "id", "index$": 1 }, "purpose": { "a": true, "h": "Purpose", "n": "purpose", "r": false, "t": "`$OBJECT`", "key$": "purpose", "index$": 2 }, "result": { "a": true, "h": "Result", "n": "result", "r": false, "sh": "Measurement result value", "t": "`$NUMBER`", "key$": "result", "index$": 3 }, "resultQualifier": { "a": true, "h": "Result Qualifier", "n": "resultQualifier", "r": false, "t": "`$OBJECT`", "key$": "resultQualifier", "index$": 4 }, "sample": { "a": true, "h": "Sample", "n": "sample", "r": false, "t": "`$OBJECT`", "key$": "sample", "index$": 5 }, "samplingPoint": { "a": true, "h": "Sampling Point", "n": "samplingPoint", "r": false, "t": "`$OBJECT`", "key$": "samplingPoint", "index$": 6 } }, "id": { "field": "id", "name": "id" }, "name": "measurement", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /data/measurement", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "area", "or": "area", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "query", "n": "determinand", "or": "determinand", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "query", "n": "end_date", "or": "end_date", "r": false, "t": "`$STRING`", "index$": 2 }, { "a": true, "ex": "json", "k": "query", "n": "format", "or": "format", "r": false, "t": "`$STRING`", "index$": 3 }, { "a": true, "ex": 100, "k": "query", "n": "limit", "or": "limit", "r": false, "t": "`$INTEGER`", "index$": 4 }, { "a": true, "ex": 0, "k": "query", "n": "offset", "or": "offset", "r": false, "t": "`$INTEGER`", "index$": 5 }, { "a": true, "k": "query", "n": "purpose", "or": "purpose", "r": false, "t": "`$STRING`", "index$": 6 }, { "a": true, "k": "query", "n": "sampling_point", "or": "sampling_point", "r": false, "t": "`$STRING`", "index$": 7 }, { "a": true, "k": "query", "n": "start_date", "or": "start_date", "r": false, "t": "`$STRING`", "index$": 8 }, { "a": true, "k": "query", "n": "water_body", "or": "water_body", "r": false, "t": "`$STRING`", "index$": 9 }] }, "k": "http", "m": "GET", "o": "/data/measurement", "q": { "exist": ["area", "determinand", "end_date", "format", "limit", "offset", "purpose", "sampling_point", "start_date", "water_body"] }, "r": {}, "s": [{ "lit": "data" }, { "lit": "measurement" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "measurement", "name__orig": "measurement", "Name": "Measurement", "name_": "measurement", "name-": "measurement", "NAME": "MEASUREMENT", "index$": 0 }, { "active": true, "entity": "measurement", "key$": "BasicMeasurementFlow", "kind": "basic", "name": "BasicMeasurementFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "measurement_ref01" } }], "index$": 0 }] }, 'Measurement', { "GET /data/measurement": { "protocol": "http", "operationId": "getMeasurements", "responses": { "200": { "description": "Successful response with water quality measurements", "content": { "application/json": { "schema": { "type": "object", "properties": { "@context": { "description": "JSON-LD context", "key$": "@context", "type": "string" }, "meta": { "key$": "meta", "properties": { "count": { "type": "integer" }, "documentation": { "type": "string" }, "licence": { "type": "string" }, "limit": { "type": "integer" }, "offset": { "type": "integer" }, "publisher": { "type": "string" }, "version": { "type": "string" } }, "type": "object" }, "items": { "items": { "properties": { "@id": { "description": "Unique identifier for the measurement", "type": "string", "key$": "@id" }, "determinand": { "properties": { "@id": { "type": "string" }, "definition": { "type": "string" }, "label": { "type": "string" }, "notation": { "type": "string" }, "unit": { "properties": { "label": { "type": "string" } }, "type": "object" } }, "type": "object", "key$": "determinand" }, "purpose": { "properties": { "label": { "type": "string" } }, "type": "object", "key$": "purpose" }, "result": { "description": "Measurement result value", "type": "number", "key$": "result" }, "resultQualifier": { "properties": { "label": { "type": "string" }, "notation": { "type": "string" } }, "type": "object", "key$": "resultQualifier" }, "sample": { "properties": { "sampleDateTime": { "format": "date-time", "type": "string" }, "sampledMaterialType": { "properties": { "label": { "type": "string" } }, "type": "object" } }, "type": "object", "key$": "sample" }, "samplingPoint": { "properties": { "@id": { "type": "string" }, "easting": { "type": "integer" }, "label": { "type": "string" }, "lat": { "type": "number" }, "long": { "type": "number" }, "northing": { "type": "integer" }, "notation": { "type": "string" } }, "type": "object", "key$": "samplingPoint" } }, "type": "object", "index$": 0 }, "key$": "items", "type": "array" } } } }, "text/csv": { "schema": { "type": "string" } }, "application/xml": { "schema": { "type": "string" } } } }, "400": { "description": "Bad request - invalid parameters", "content": { "application/json": { "schema": { "type": "object", "properties": { "error": { "type": "string" }, "message": { "type": "string" } } } } } }, "404": { "description": "No data found for the specified criteria", "content": { "application/json": { "schema": { "type": "object", "properties": { "error": { "type": "string" }, "message": { "type": "string" } } } } } }, "500": { "description": "Internal server error", "content": { "application/json": { "schema": { "type": "object", "properties": { "error": { "type": "string" }, "message": { "type": "string" } } } } } } }, "parameters": [{ "name": "samplingPoint", "in": "query", "description": "Filter by sampling point identifier", "required": false, "schema": { "type": "string" }, "index$": 0 }, { "name": "determinand", "in": "query", "description": "Filter by determinand (water quality parameter) identifier", "required": false, "schema": { "type": "string" }, "index$": 1 }, { "name": "startDate", "in": "query", "description": "Start date for measurement period (ISO 8601 format)", "required": false, "schema": { "type": "string", "format": "date" }, "index$": 2 }, { "name": "endDate", "in": "query", "description": "End date for measurement period (ISO 8601 format)", "required": false, "schema": { "type": "string", "format": "date" }, "index$": 3 }, { "name": "area", "in": "query", "description": "Filter by geographical area", "required": false, "schema": { "type": "string" }, "index$": 4 }, { "name": "waterBody", "in": "query", "description": "Filter by water body identifier", "required": false, "schema": { "type": "string" }, "index$": 5 }, { "name": "purpose", "in": "query", "description": "Filter by monitoring purpose (e.g., compliance, investigation)", "required": false, "schema": { "type": "string", "enum": ["compliance", "investigation", "surveillance", "operational"] }, "index$": 6 }, { "name": "format", "in": "query", "description": "Response format", "required": false, "schema": { "type": "string", "enum": ["json", "csv", "xml"], "default": "json" }, "index$": 7 }, { "name": "_limit", "in": "query", "description": "Maximum number of results to return", "required": false, "schema": { "type": "integer", "minimum": 1, "maximum": 10000, "default": 100 }, "index$": 8 }, { "name": "_offset", "in": "query", "description": "Number of results to skip for pagination", "required": false, "schema": { "type": "integer", "minimum": 0, "default": 0 }, "index$": 9 }], "securitySource": "unspecified" } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let measurement_ref01_data = Object.values(setup.data.existing.measurement)[0];
        // LIST
        const measurement_ref01_ent = client.Measurement();
        const measurement_ref01_match = {};
        const measurement_ref01_list = (await measurement_ref01_ent.list(measurement_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/measurement/MeasurementTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.WaterQualityArchiveSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['measurement01', 'measurement02', 'measurement03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'WATER_QUALITY_ARCHIVE_TEST_MEASUREMENT_ENTID': idmap,
        'WATER_QUALITY_ARCHIVE_TEST_LIVE': 'FALSE',
        'WATER_QUALITY_ARCHIVE_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['WATER_QUALITY_ARCHIVE_TEST_MEASUREMENT_ENTID'];
    const live = 'TRUE' === env.WATER_QUALITY_ARCHIVE_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['WATER_QUALITY_ARCHIVE_TEST_MEASUREMENT_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.WaterQualityArchiveSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {},
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
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
    };
    return setup;
}
//# sourceMappingURL=MeasurementEntity.test.js.map