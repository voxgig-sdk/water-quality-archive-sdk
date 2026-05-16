<?php
declare(strict_types=1);

// WaterQualityArchive SDK utility: result_headers

class WaterQualityArchiveResultHeaders
{
    public static function call(WaterQualityArchiveContext $ctx): ?WaterQualityArchiveResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
