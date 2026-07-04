# Typed models for the WaterQualityArchive SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class Measurement:
    determinand: Optional[dict] = None
    id: Optional[str] = None
    purpose: Optional[dict] = None
    result: Optional[float] = None
    result_qualifier: Optional[dict] = None
    sample: Optional[dict] = None
    sampling_point: Optional[dict] = None


@dataclass
class MeasurementListMatch:
    determinand: Optional[dict] = None
    id: Optional[str] = None
    purpose: Optional[dict] = None
    result: Optional[float] = None
    result_qualifier: Optional[dict] = None
    sample: Optional[dict] = None
    sampling_point: Optional[dict] = None

