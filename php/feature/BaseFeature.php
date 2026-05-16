<?php
declare(strict_types=1);

// WaterQualityArchive SDK base feature

class WaterQualityArchiveBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(WaterQualityArchiveContext $ctx, array $options): void {}
    public function PostConstruct(WaterQualityArchiveContext $ctx): void {}
    public function PostConstructEntity(WaterQualityArchiveContext $ctx): void {}
    public function SetData(WaterQualityArchiveContext $ctx): void {}
    public function GetData(WaterQualityArchiveContext $ctx): void {}
    public function GetMatch(WaterQualityArchiveContext $ctx): void {}
    public function SetMatch(WaterQualityArchiveContext $ctx): void {}
    public function PrePoint(WaterQualityArchiveContext $ctx): void {}
    public function PreSpec(WaterQualityArchiveContext $ctx): void {}
    public function PreRequest(WaterQualityArchiveContext $ctx): void {}
    public function PreResponse(WaterQualityArchiveContext $ctx): void {}
    public function PreResult(WaterQualityArchiveContext $ctx): void {}
    public function PreDone(WaterQualityArchiveContext $ctx): void {}
    public function PreUnexpected(WaterQualityArchiveContext $ctx): void {}
}
