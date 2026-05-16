<?php
declare(strict_types=1);

// WaterQualityArchive SDK exists test

require_once __DIR__ . '/../waterqualityarchive_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = WaterQualityArchiveSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
