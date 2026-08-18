<?php
declare(strict_types=1);

// WaterQualityArchive SDK configuration

class WaterQualityArchiveConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "WaterQualityArchive",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
        ],
            ],
            "options" => [
                "base" => "https://environment.data.gov.uk/water-quality",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "measurement" => [],
                ],
            ],
            "entity" => [
        'measurement' => [
          'fields' => [
            [
              'name' => 'determinand',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'id',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'purpose',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'result',
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'resultQualifier',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'sample',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'samplingPoint',
              'type' => '`$OBJECT`',
            ],
          ],
          'name' => 'measurement',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'area',
                        'orig' => 'area',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'determinand',
                        'orig' => 'determinand',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'end_date',
                        'orig' => 'end_date',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 'json',
                        'kind' => 'query',
                        'name' => 'format',
                        'orig' => 'format',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 100,
                        'kind' => 'query',
                        'name' => 'limit',
                        'orig' => 'limit',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'example' => 0,
                        'kind' => 'query',
                        'name' => 'offset',
                        'orig' => 'offset',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'purpose',
                        'orig' => 'purpose',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'sampling_point',
                        'orig' => 'sampling_point',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'start_date',
                        'orig' => 'start_date',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'water_body',
                        'orig' => 'water_body',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/data/measurement',
                  'parts' => [
                    'data',
                    'measurement',
                  ],
                  'select' => [
                    'exist' => [
                      'area',
                      'determinand',
                      'end_date',
                      'format',
                      'limit',
                      'offset',
                      'purpose',
                      'sampling_point',
                      'start_date',
                      'water_body',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return WaterQualityArchiveFeatures::make_feature($name);
    }
}
