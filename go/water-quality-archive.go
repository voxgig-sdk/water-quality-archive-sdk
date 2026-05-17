package voxgigwaterqualityarchivesdk

import (
	"github.com/voxgig-sdk/water-quality-archive-sdk/go/core"
	"github.com/voxgig-sdk/water-quality-archive-sdk/go/entity"
	"github.com/voxgig-sdk/water-quality-archive-sdk/go/feature"
	_ "github.com/voxgig-sdk/water-quality-archive-sdk/go/utility"
)

// Type aliases preserve external API.
type WaterQualityArchiveSDK = core.WaterQualityArchiveSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type WaterQualityArchiveEntity = core.WaterQualityArchiveEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type WaterQualityArchiveError = core.WaterQualityArchiveError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewMeasurementEntityFunc = func(client *core.WaterQualityArchiveSDK, entopts map[string]any) core.WaterQualityArchiveEntity {
		return entity.NewMeasurementEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewWaterQualityArchiveSDK = core.NewWaterQualityArchiveSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
