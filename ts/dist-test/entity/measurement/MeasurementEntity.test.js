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
// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
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
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "determinand", "req": false, "type": "`$OBJECT`", "index$": 0 }, { "active": true, "name": "id", "req": false, "short": "Unique identifier for the measurement", "type": "`$STRING`", "index$": 1 }, { "active": true, "name": "purpose", "req": false, "type": "`$OBJECT`", "index$": 2 }, { "active": true, "name": "result", "req": false, "short": "Measurement result value", "type": "`$NUMBER`", "index$": 3 }, { "active": true, "name": "resultQualifier", "req": false, "type": "`$OBJECT`", "index$": 4 }, { "active": true, "name": "sample", "req": false, "type": "`$OBJECT`", "index$": 5 }, { "active": true, "name": "samplingPoint", "req": false, "type": "`$OBJECT`", "index$": 6 }], "id": { "field": "id", "name": "id" }, "name": "measurement", "op": { "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": { "query": [{ "active": true, "kind": "query", "name": "area", "orig": "area", "reqd": false, "type": "`$STRING`", "index$": 0 }, { "active": true, "kind": "query", "name": "determinand", "orig": "determinand", "reqd": false, "type": "`$STRING`", "index$": 1 }, { "active": true, "kind": "query", "name": "end_date", "orig": "end_date", "reqd": false, "type": "`$STRING`", "index$": 2 }, { "active": true, "example": "json", "kind": "query", "name": "format", "orig": "format", "reqd": false, "type": "`$STRING`", "index$": 3 }, { "active": true, "example": 100, "kind": "query", "name": "limit", "orig": "limit", "reqd": false, "type": "`$INTEGER`", "index$": 4 }, { "active": true, "example": 0, "kind": "query", "name": "offset", "orig": "offset", "reqd": false, "type": "`$INTEGER`", "index$": 5 }, { "active": true, "kind": "query", "name": "purpose", "orig": "purpose", "reqd": false, "type": "`$STRING`", "index$": 6 }, { "active": true, "kind": "query", "name": "sampling_point", "orig": "sampling_point", "reqd": false, "type": "`$STRING`", "index$": 7 }, { "active": true, "kind": "query", "name": "start_date", "orig": "start_date", "reqd": false, "type": "`$STRING`", "index$": 8 }, { "active": true, "kind": "query", "name": "water_body", "orig": "water_body", "reqd": false, "type": "`$STRING`", "index$": 9 }] }, "contract": { "id": "GET /data/measurement", "json": "{\"operationId\":\"getMeasurements\",\"parameters\":[{\"description\":\"Filter by sampling point identifier\",\"in\":\"query\",\"name\":\"samplingPoint\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Filter by determinand (water quality parameter) identifier\",\"in\":\"query\",\"name\":\"determinand\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Start date for measurement period (ISO 8601 format)\",\"in\":\"query\",\"name\":\"startDate\",\"required\":false,\"schema\":{\"format\":\"date\",\"type\":\"string\"}},{\"description\":\"End date for measurement period (ISO 8601 format)\",\"in\":\"query\",\"name\":\"endDate\",\"required\":false,\"schema\":{\"format\":\"date\",\"type\":\"string\"}},{\"description\":\"Filter by geographical area\",\"in\":\"query\",\"name\":\"area\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Filter by water body identifier\",\"in\":\"query\",\"name\":\"waterBody\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Filter by monitoring purpose (e.g., compliance, investigation)\",\"in\":\"query\",\"name\":\"purpose\",\"required\":false,\"schema\":{\"enum\":[\"compliance\",\"investigation\",\"surveillance\",\"operational\"],\"type\":\"string\"}},{\"description\":\"Response format\",\"in\":\"query\",\"name\":\"format\",\"required\":false,\"schema\":{\"default\":\"json\",\"enum\":[\"json\",\"csv\",\"xml\"],\"type\":\"string\"}},{\"description\":\"Maximum number of results to return\",\"in\":\"query\",\"name\":\"_limit\",\"required\":false,\"schema\":{\"default\":100,\"maximum\":10000,\"minimum\":1,\"type\":\"integer\"}},{\"description\":\"Number of results to skip for pagination\",\"in\":\"query\",\"name\":\"_offset\",\"required\":false,\"schema\":{\"default\":0,\"minimum\":0,\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"@context\":{\"description\":\"JSON-LD context\",\"type\":\"string\"},\"items\":{\"items\":{\"properties\":{\"@id\":{\"description\":\"Unique identifier for the measurement\",\"type\":\"string\"},\"determinand\":{\"properties\":{\"@id\":{\"type\":\"string\"},\"definition\":{\"type\":\"string\"},\"label\":{\"type\":\"string\"},\"notation\":{\"type\":\"string\"},\"unit\":{\"properties\":{\"label\":{\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"},\"purpose\":{\"properties\":{\"label\":{\"type\":\"string\"}},\"type\":\"object\"},\"result\":{\"description\":\"Measurement result value\",\"type\":\"number\"},\"resultQualifier\":{\"properties\":{\"label\":{\"type\":\"string\"},\"notation\":{\"type\":\"string\"}},\"type\":\"object\"},\"sample\":{\"properties\":{\"sampleDateTime\":{\"format\":\"date-time\",\"type\":\"string\"},\"sampledMaterialType\":{\"properties\":{\"label\":{\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"},\"samplingPoint\":{\"properties\":{\"@id\":{\"type\":\"string\"},\"easting\":{\"type\":\"integer\"},\"label\":{\"type\":\"string\"},\"lat\":{\"type\":\"number\"},\"long\":{\"type\":\"number\"},\"northing\":{\"type\":\"integer\"},\"notation\":{\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"},\"type\":\"array\"},\"meta\":{\"properties\":{\"count\":{\"type\":\"integer\"},\"documentation\":{\"type\":\"string\"},\"licence\":{\"type\":\"string\"},\"limit\":{\"type\":\"integer\"},\"offset\":{\"type\":\"integer\"},\"publisher\":{\"type\":\"string\"},\"version\":{\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"}},\"application/xml\":{\"schema\":{\"type\":\"string\"}},\"text/csv\":{\"schema\":{\"type\":\"string\"}}},\"description\":\"Successful response with water quality measurements\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"type\":\"string\"},\"message\":{\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Bad request - invalid parameters\"},\"404\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"type\":\"string\"},\"message\":{\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"No data found for the specified criteria\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"type\":\"string\"},\"message\":{\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/data/measurement", "segments": [{ "lit": "data" }, { "lit": "measurement" }], "select": { "exist": ["area", "determinand", "end_date", "format", "limit", "offset", "purpose", "sampling_point", "start_date", "water_body"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "measurement", "name__orig": "measurement", "Name": "Measurement", "name_": "measurement", "name-": "measurement", "NAME": "MEASUREMENT", "index$": 0 }, { "active": true, "entity": "measurement", "key$": "BasicMeasurementFlow", "kind": "basic", "name": "BasicMeasurementFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": {}, "match": {}, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "measurement_ref01" } }], "index$": 0 }] }, 'Measurement');
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