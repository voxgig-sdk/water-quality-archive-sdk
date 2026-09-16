# WaterQualityArchive SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module WaterQualityArchiveFeatures
  def self.make_feature(name)
    case name
    when "base"
      WaterQualityArchiveBaseFeature.new
    when "ratelimit"
      WaterQualityArchiveRatelimitFeature.new
    when "retry"
      WaterQualityArchiveRetryFeature.new
    when "test"
      WaterQualityArchiveTestFeature.new
    when "timeout"
      WaterQualityArchiveTimeoutFeature.new
    else
      WaterQualityArchiveBaseFeature.new
    end
  end
end
