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
---@field resultQualifier? table
---@field sample? table
---@field samplingPoint? table

---@class MeasurementListMatch
---@field area? string
---@field determinand? string
---@field end_date? string
---@field format? string
---@field limit? number
---@field offset? number
---@field purpose? string
---@field sampling_point? string
---@field start_date? string
---@field water_body? string

local M = {}

return M
