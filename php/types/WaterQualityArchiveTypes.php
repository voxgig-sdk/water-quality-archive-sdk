<?php
declare(strict_types=1);

// Typed models for the WaterQualityArchive SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Measurement entity data model. */
class Measurement
{
    public ?array $determinand = null;
    public ?string $id = null;
    public ?array $purpose = null;
    public ?float $result = null;
    public ?array $result_qualifier = null;
    public ?array $sample = null;
    public ?array $sampling_point = null;
}

/** Request payload for Measurement#list. */
class MeasurementListMatch
{
    public ?array $determinand = null;
    public ?string $id = null;
    public ?array $purpose = null;
    public ?float $result = null;
    public ?array $result_qualifier = null;
    public ?array $sample = null;
    public ?array $sampling_point = null;
}

