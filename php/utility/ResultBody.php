<?php
declare(strict_types=1);

// WaterQualityArchive SDK utility: result_body

class WaterQualityArchiveResultBody
{
    public static function call(WaterQualityArchiveContext $ctx): ?WaterQualityArchiveResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
