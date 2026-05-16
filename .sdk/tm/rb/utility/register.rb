# WaterQualityArchive SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

WaterQualityArchiveUtility.registrar = ->(u) {
  u.clean = WaterQualityArchiveUtilities::Clean
  u.done = WaterQualityArchiveUtilities::Done
  u.make_error = WaterQualityArchiveUtilities::MakeError
  u.feature_add = WaterQualityArchiveUtilities::FeatureAdd
  u.feature_hook = WaterQualityArchiveUtilities::FeatureHook
  u.feature_init = WaterQualityArchiveUtilities::FeatureInit
  u.fetcher = WaterQualityArchiveUtilities::Fetcher
  u.make_fetch_def = WaterQualityArchiveUtilities::MakeFetchDef
  u.make_context = WaterQualityArchiveUtilities::MakeContext
  u.make_options = WaterQualityArchiveUtilities::MakeOptions
  u.make_request = WaterQualityArchiveUtilities::MakeRequest
  u.make_response = WaterQualityArchiveUtilities::MakeResponse
  u.make_result = WaterQualityArchiveUtilities::MakeResult
  u.make_point = WaterQualityArchiveUtilities::MakePoint
  u.make_spec = WaterQualityArchiveUtilities::MakeSpec
  u.make_url = WaterQualityArchiveUtilities::MakeUrl
  u.param = WaterQualityArchiveUtilities::Param
  u.prepare_auth = WaterQualityArchiveUtilities::PrepareAuth
  u.prepare_body = WaterQualityArchiveUtilities::PrepareBody
  u.prepare_headers = WaterQualityArchiveUtilities::PrepareHeaders
  u.prepare_method = WaterQualityArchiveUtilities::PrepareMethod
  u.prepare_params = WaterQualityArchiveUtilities::PrepareParams
  u.prepare_path = WaterQualityArchiveUtilities::PreparePath
  u.prepare_query = WaterQualityArchiveUtilities::PrepareQuery
  u.result_basic = WaterQualityArchiveUtilities::ResultBasic
  u.result_body = WaterQualityArchiveUtilities::ResultBody
  u.result_headers = WaterQualityArchiveUtilities::ResultHeaders
  u.transform_request = WaterQualityArchiveUtilities::TransformRequest
  u.transform_response = WaterQualityArchiveUtilities::TransformResponse
}
