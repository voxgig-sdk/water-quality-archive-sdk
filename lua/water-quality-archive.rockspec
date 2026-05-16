package = "voxgig-sdk-water-quality-archive"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/water-quality-archive-sdk.git"
}
description = {
  summary = "WaterQualityArchive SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["water-quality-archive_sdk"] = "water-quality-archive_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}
