# WaterQualityArchive SDK utility: feature_add
module WaterQualityArchiveUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
