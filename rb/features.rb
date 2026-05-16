# WaterQualityArchive SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module WaterQualityArchiveFeatures
  def self.make_feature(name)
    case name
    when "base"
      WaterQualityArchiveBaseFeature.new
    when "test"
      WaterQualityArchiveTestFeature.new
    else
      WaterQualityArchiveBaseFeature.new
    end
  end
end
