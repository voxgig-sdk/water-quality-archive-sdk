# ProjectName SDK exists test

import pytest
from waterqualityarchive_sdk import WaterQualityArchiveSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = WaterQualityArchiveSDK.test(None, None)
        assert testsdk is not None
