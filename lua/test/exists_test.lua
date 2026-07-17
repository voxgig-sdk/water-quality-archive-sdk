-- WaterQualityArchive SDK exists test

local sdk = require("water-quality-archive_sdk")

describe("WaterQualityArchiveSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
