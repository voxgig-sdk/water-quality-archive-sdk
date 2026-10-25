# WaterQualityArchive SDK utility: prepare_body
require_relative 'media'
module WaterQualityArchiveUtilities
  PrepareBody = ->(ctx) {
    return nil unless ctx.op.input == "data"
    return WaterQualityArchiveUtilities.raw_body(ctx.reqdata) if WaterQualityArchiveUtilities.raw_request?(ctx.point)
    ctx.utility.transform_request.call(ctx)
  }
end
