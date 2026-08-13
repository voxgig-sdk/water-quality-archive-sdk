# WaterQualityArchive SDK feature factory

from waterqualityarchive_sdk.feature.base_feature import WaterQualityArchiveBaseFeature
from waterqualityarchive_sdk.feature.test_feature import WaterQualityArchiveTestFeature


def _make_feature(name):
    features = {
        "base": lambda: WaterQualityArchiveBaseFeature(),
        "test": lambda: WaterQualityArchiveTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
