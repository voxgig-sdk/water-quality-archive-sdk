# WaterQualityArchive SDK

Open access to water quality sampling data for England since 2000, published by the Environment Agency

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About Water Quality Archive

The Water Quality Archive is a public dataset and API run by the [Environment Agency](https://environment.data.gov.uk/water-quality), part of the UK Department for Environment, Food & Rural Affairs (DEFRA). It exposes water quality sampling data collected across England since the year 2000, covering coastal, river, lake and groundwater sources.

The archive is primarily used for compliance assessment, pollution investigation and environmental monitoring. Records are organised around sampling points and the measurements taken at them.

The service is read-only and does not require authentication. CORS is not enabled, so browser-side calls from another origin may be blocked — server-side or proxied access is typically used. See the [API documentation](https://environment.data.gov.uk/water-quality/api-docs) for the full set of resources and query parameters.

## Try it

**TypeScript**
```bash
npm install water-quality-archive
```

**Python**
```bash
pip install water-quality-archive-sdk
```

**PHP**
```bash
composer require voxgig/water-quality-archive-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/water-quality-archive-sdk/go
```

**Ruby**
```bash
gem install water-quality-archive-sdk
```

**Lua**
```bash
luarocks install water-quality-archive-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { WaterQualityArchiveSDK } from 'water-quality-archive'

const client = new WaterQualityArchiveSDK({})

// List all measurements
const measurements = await client.Measurement().list()
```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o water-quality-archive-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "water-quality-archive": {
      "command": "/abs/path/to/water-quality-archive-mcp"
    }
  }
}
```

## Entities

The API exposes one entity:

| Entity | Description | API path |
| --- | --- | --- |
| **Measurement** | An individual water quality observation recorded at a sampling point, such as a determinand value with its units and sample date, returned by the archive's measurement and sample resources. | `/data/measurement` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from waterqualityarchive_sdk import WaterQualityArchiveSDK

client = WaterQualityArchiveSDK({})

# List all measurements
measurements, err = client.Measurement(None).list(None, None)
```

### PHP

```php
<?php
require_once 'waterqualityarchive_sdk.php';

$client = new WaterQualityArchiveSDK([]);

// List all measurements
[$measurements, $err] = $client->Measurement(null)->list(null, null);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/water-quality-archive-sdk/go"

client := sdk.NewWaterQualityArchiveSDK(map[string]any{})

// List all measurements
measurements, err := client.Measurement(nil).List(nil, nil)
```

### Ruby

```ruby
require_relative "WaterQualityArchive_sdk"

client = WaterQualityArchiveSDK.new({})

# List all measurements
measurements, err = client.Measurement(nil).list(nil, nil)
```

### Lua

```lua
local sdk = require("water-quality-archive_sdk")

local client = sdk.new({})

-- List all measurements
local measurements, err = client:Measurement(nil):list(nil, nil)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = WaterQualityArchiveSDK.test()
const result = await client.Measurement().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = WaterQualityArchiveSDK.test(None, None)
result, err = client.Measurement(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = WaterQualityArchiveSDK::test(null, null);
[$result, $err] = $client->Measurement(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.Measurement(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = WaterQualityArchiveSDK.test(nil, nil)
result, err = client.Measurement(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:Measurement(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the Water Quality Archive

- Upstream: [https://environment.data.gov.uk/water-quality](https://environment.data.gov.uk/water-quality)
- API docs: [https://environment.data.gov.uk/water-quality/api-docs](https://environment.data.gov.uk/water-quality/api-docs)

- Data is published under the [Open Government Licence v3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/).
- Source attribution: Environment Agency and the Department for Environment, Food & Rural Affairs (DEFRA), Crown Copyright.
- You are free to copy, adapt and redistribute the data, including commercially, provided you acknowledge the source.
- Some linked content may be subject to other terms — check the source page for exceptions.

---

Generated from the Water Quality Archive OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
