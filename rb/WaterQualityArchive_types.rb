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
# @!attribute [rw] result_qualifier
#   @return [Hash, nil]
#
# @!attribute [rw] sample
#   @return [Hash, nil]
#
# @!attribute [rw] sampling_point
#   @return [Hash, nil]
Measurement = Struct.new(
  :determinand,
  :id,
  :purpose,
  :result,
  :result_qualifier,
  :sample,
  :sampling_point,
  keyword_init: true
)

# Match filter for Measurement#list (any subset of Measurement fields).
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
# @!attribute [rw] result_qualifier
#   @return [Hash, nil]
#
# @!attribute [rw] sample
#   @return [Hash, nil]
#
# @!attribute [rw] sampling_point
#   @return [Hash, nil]
MeasurementListMatch = Struct.new(
  :determinand,
  :id,
  :purpose,
  :result,
  :result_qualifier,
  :sample,
  :sampling_point,
  keyword_init: true
)

