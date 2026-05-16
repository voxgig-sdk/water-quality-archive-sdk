# WaterQualityArchive SDK utility: make_context
require_relative '../core/context'
module WaterQualityArchiveUtilities
  MakeContext = ->(ctxmap, basectx) {
    WaterQualityArchiveContext.new(ctxmap, basectx)
  }
end
