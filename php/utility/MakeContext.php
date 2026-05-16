<?php
declare(strict_types=1);

// WaterQualityArchive SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class WaterQualityArchiveMakeContext
{
    public static function call(array $ctxmap, ?WaterQualityArchiveContext $basectx): WaterQualityArchiveContext
    {
        return new WaterQualityArchiveContext($ctxmap, $basectx);
    }
}
