-- Typed models for the WaterQualityArchive SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Measurement
---@field determinand? table
---@field id? string
---@field purpose? table
---@field result? number
---@field result_qualifier? table
---@field sample? table
---@field sampling_point? table

---@class MeasurementListMatch

local M = {}

return M
