<?php
declare(strict_types=1);

// WaterQualityArchive SDK utility: feature_add

class WaterQualityArchiveFeatureAdd
{
    public static function call(WaterQualityArchiveContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
