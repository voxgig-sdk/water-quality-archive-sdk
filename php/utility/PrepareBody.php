<?php
declare(strict_types=1);

// WaterQualityArchive SDK utility: prepare_body

class WaterQualityArchivePrepareBody
{
    public static function call(WaterQualityArchiveContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
