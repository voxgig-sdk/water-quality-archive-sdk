-- WaterQualityArchive SDK error

local WaterQualityArchiveError = {}
WaterQualityArchiveError.__index = WaterQualityArchiveError


function WaterQualityArchiveError.new(code, msg, ctx)
  local self = setmetatable({}, WaterQualityArchiveError)
  self.is_sdk_error = true
  self.sdk = "WaterQualityArchive"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function WaterQualityArchiveError:error()
  return self.msg
end


function WaterQualityArchiveError:__tostring()
  return self.msg
end


return WaterQualityArchiveError
