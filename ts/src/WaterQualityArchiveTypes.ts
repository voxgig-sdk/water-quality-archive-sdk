// Typed models for the WaterQualityArchive SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Measurement {
  determinand?: Record<string, any>
  id?: string
  purpose?: Record<string, any>
  result?: number
  result_qualifier?: Record<string, any>
  sample?: Record<string, any>
  sampling_point?: Record<string, any>
}

export interface MeasurementListMatch {
  determinand?: Record<string, any>
  id?: string
  purpose?: Record<string, any>
  result?: number
  result_qualifier?: Record<string, any>
  sample?: Record<string, any>
  sampling_point?: Record<string, any>
}

