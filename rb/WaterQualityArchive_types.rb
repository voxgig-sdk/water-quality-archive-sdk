# frozen_string_literal: true

# Typed models for the WaterQualityArchive SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Measurement entity data model.
#
# @!attribute [rw] determinand
#   @return [Hash, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] purpose
#   @return [Hash, nil]
#
# @!attribute [rw] result
#   @return [Float, nil]
#
# @!attribute [rw] resultQualifier
#   @return [Hash, nil]
#
# @!attribute [rw] sample
#   @return [Hash, nil]
#
# @!attribute [rw] samplingPoint
#   @return [Hash, nil]
Measurement = Struct.new(
  :determinand,
  :id,
  :purpose,
  :result,
  :resultQualifier,
  :sample,
  :samplingPoint,
  keyword_init: true
)

# Request payload for Measurement#list.
#
# @!attribute [rw] area
#   @return [String, nil]
#
# @!attribute [rw] determinand
#   @return [String, nil]
#
# @!attribute [rw] end_date
#   @return [String, nil]
#
# @!attribute [rw] format
#   @return [String, nil]
#
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] offset
#   @return [Integer, nil]
#
# @!attribute [rw] purpose
#   @return [String, nil]
#
# @!attribute [rw] sampling_point
#   @return [String, nil]
#
# @!attribute [rw] start_date
#   @return [String, nil]
#
# @!attribute [rw] water_body
#   @return [String, nil]
MeasurementListMatch = Struct.new(
  :area,
  :determinand,
  :end_date,
  :format,
  :limit,
  :offset,
  :purpose,
  :sampling_point,
  :start_date,
  :water_body,
  keyword_init: true
)

