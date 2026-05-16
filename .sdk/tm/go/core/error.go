package core

type WaterQualityArchiveError struct {
	IsWaterQualityArchiveError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewWaterQualityArchiveError(code string, msg string, ctx *Context) *WaterQualityArchiveError {
	return &WaterQualityArchiveError{
		IsWaterQualityArchiveError: true,
		Sdk:              "WaterQualityArchive",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *WaterQualityArchiveError) Error() string {
	return e.Msg
}
