<?php
declare(strict_types=1);

// WaterQualityArchive SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

WaterQualityArchiveUtility::setRegistrar(function (WaterQualityArchiveUtility $u): void {
    $u->clean = [WaterQualityArchiveClean::class, 'call'];
    $u->done = [WaterQualityArchiveDone::class, 'call'];
    $u->make_error = [WaterQualityArchiveMakeError::class, 'call'];
    $u->feature_add = [WaterQualityArchiveFeatureAdd::class, 'call'];
    $u->feature_hook = [WaterQualityArchiveFeatureHook::class, 'call'];
    $u->feature_init = [WaterQualityArchiveFeatureInit::class, 'call'];
    $u->fetcher = [WaterQualityArchiveFetcher::class, 'call'];
    $u->make_fetch_def = [WaterQualityArchiveMakeFetchDef::class, 'call'];
    $u->make_context = [WaterQualityArchiveMakeContext::class, 'call'];
    $u->make_options = [WaterQualityArchiveMakeOptions::class, 'call'];
    $u->make_request = [WaterQualityArchiveMakeRequest::class, 'call'];
    $u->make_response = [WaterQualityArchiveMakeResponse::class, 'call'];
    $u->make_result = [WaterQualityArchiveMakeResult::class, 'call'];
    $u->make_point = [WaterQualityArchiveMakePoint::class, 'call'];
    $u->make_spec = [WaterQualityArchiveMakeSpec::class, 'call'];
    $u->make_url = [WaterQualityArchiveMakeUrl::class, 'call'];
    $u->param = [WaterQualityArchiveParam::class, 'call'];
    $u->prepare_auth = [WaterQualityArchivePrepareAuth::class, 'call'];
    $u->prepare_body = [WaterQualityArchivePrepareBody::class, 'call'];
    $u->prepare_headers = [WaterQualityArchivePrepareHeaders::class, 'call'];
    $u->prepare_method = [WaterQualityArchivePrepareMethod::class, 'call'];
    $u->prepare_params = [WaterQualityArchivePrepareParams::class, 'call'];
    $u->prepare_path = [WaterQualityArchivePreparePath::class, 'call'];
    $u->prepare_query = [WaterQualityArchivePrepareQuery::class, 'call'];
    $u->result_basic = [WaterQualityArchiveResultBasic::class, 'call'];
    $u->result_body = [WaterQualityArchiveResultBody::class, 'call'];
    $u->result_headers = [WaterQualityArchiveResultHeaders::class, 'call'];
    $u->transform_request = [WaterQualityArchiveTransformRequest::class, 'call'];
    $u->transform_response = [WaterQualityArchiveTransformResponse::class, 'call'];
});
