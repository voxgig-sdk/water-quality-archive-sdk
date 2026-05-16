package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewMeasurementEntityFunc func(client *WaterQualityArchiveSDK, entopts map[string]any) WaterQualityArchiveEntity

