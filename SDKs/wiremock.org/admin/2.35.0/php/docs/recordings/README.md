# recordings

## Overview

Stub mapping record and snapshot functions

User documentation
<http://wiremock.org/docs/record-playback/>
### Available Operations

* [getAdminRecordingsStatus](#getadminrecordingsstatus) - Get recording status
* [postAdminRecordingsSnapshot](#postadminrecordingssnapshot) - Take a snapshot recording
* [postAdminRecordingsStart](#postadminrecordingsstart) - Start recording
* [postAdminRecordingsStop](#postadminrecordingsstop) - Stop recording

## getAdminRecordingsStatus

Get recording status

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->recordings->getAdminRecordingsStatus();

    if ($response->getAdminRecordingsStatus200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postAdminRecordingsSnapshot

Take a snapshot recording

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostAdminRecordingsSnapshotRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PostAdminRecordingsSnapshotRequestBodyCaptureHeaders;
use \OpenAPI\OpenAPI\Models\Operations\PostAdminRecordingsSnapshotRequestBodyExtractBodyCriteria;
use \OpenAPI\OpenAPI\Models\Operations\PostAdminRecordingsSnapshotRequestBodyFilters;
use \OpenAPI\OpenAPI\Models\Operations\PostAdminRecordingsSnapshotRequestBodyFiltersBasicAuthCredentials;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostAdminRecordingsSnapshotRequestBody();
    $request->captureHeaders = [
        'dolor' => new PostAdminRecordingsSnapshotRequestBodyCaptureHeaders(),
        'natus' => new PostAdminRecordingsSnapshotRequestBodyCaptureHeaders(),
        'laboriosam' => new PostAdminRecordingsSnapshotRequestBodyCaptureHeaders(),
    ];
    $request->extractBodyCriteria = new PostAdminRecordingsSnapshotRequestBodyExtractBodyCriteria();
    $request->extractBodyCriteria->binarySizeThreshold = '18.2 GB';
    $request->extractBodyCriteria->textSizeThreshold = '18.2 GB';
    $request->filters = new PostAdminRecordingsSnapshotRequestBodyFilters();
    $request->filters->basicAuthCredentials = new PostAdminRecordingsSnapshotRequestBodyFiltersBasicAuthCredentials();
    $request->filters->basicAuthCredentials->password = 'hic';
    $request->filters->basicAuthCredentials->username = 'Steve.Parker';
    $request->filters->bodyPatterns = [
        [
            'saepe' => 'quidem',
            'architecto' => 'ipsa',
        ],
        [
            'est' => 'mollitia',
            'laborum' => 'dolores',
            'dolorem' => 'corporis',
            'explicabo' => 'nobis',
        ],
        [
            'omnis' => 'nemo',
            'minima' => 'excepturi',
        ],
    ];
    $request->filters->cookies = [
        'iure' => 'culpa',
    ];
    $request->filters->headers = [
        'sapiente' => 'architecto',
        'mollitia' => 'dolorem',
        'culpa' => 'consequuntur',
        'repellat' => 'mollitia',
    ];
    $request->filters->ids = [
        'numquam',
        'commodi',
        'quam',
    ];
    $request->filters->method = 'molestiae';
    $request->filters->queryParameters = [
        'error' => 'quia',
    ];
    $request->filters->url = 'quis';
    $request->filters->urlPath = 'vitae';
    $request->filters->urlPathPattern = 'laborum';
    $request->filters->urlPattern = 'animi';
    $request->persist = false;
    $request->repeatsAsScenarios = false;
    $request->requestBodyPattern = new PostAdminRecordingsSnapshotRequestBodyRequestBodyPattern2();
    $request->requestBodyPattern->caseInsensitive = false;
    $request->requestBodyPattern->matcher = PostAdminRecordingsSnapshotRequestBodyRequestBodyPattern2MatcherEnum::EQUAL_TO;
    $request->transformerParameters = [
        'quo' => 'sequi',
    ];
    $request->transformers = [
        'ipsam',
        'id',
        'possimus',
        'aut',
    ];

    $response = $sdk->recordings->postAdminRecordingsSnapshot($request);

    if ($response->postAdminRecordingsSnapshot200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postAdminRecordingsStart

Begin recording stub mappings

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostAdminRecordingsStartRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PostAdminRecordingsStartRequestBodyCaptureHeaders;
use \OpenAPI\OpenAPI\Models\Operations\PostAdminRecordingsStartRequestBodyExtractBodyCriteria;
use \OpenAPI\OpenAPI\Models\Operations\PostAdminRecordingsStartRequestBodyFilters;
use \OpenAPI\OpenAPI\Models\Operations\PostAdminRecordingsStartRequestBodyFiltersBasicAuthCredentials;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostAdminRecordingsStartRequestBody();
    $request->captureHeaders = [
        'error' => new PostAdminRecordingsStartRequestBodyCaptureHeaders(),
    ];
    $request->extractBodyCriteria = new PostAdminRecordingsStartRequestBodyExtractBodyCriteria();
    $request->extractBodyCriteria->binarySizeThreshold = '18.2 GB';
    $request->extractBodyCriteria->textSizeThreshold = '18.2 GB';
    $request->filters = new PostAdminRecordingsStartRequestBodyFilters();
    $request->filters->basicAuthCredentials = new PostAdminRecordingsStartRequestBodyFiltersBasicAuthCredentials();
    $request->filters->basicAuthCredentials->password = 'temporibus';
    $request->filters->basicAuthCredentials->username = 'Margie_Boyer87';
    $request->filters->bodyPatterns = [
        [
            'voluptatibus' => 'ipsa',
            'omnis' => 'voluptate',
            'cum' => 'perferendis',
        ],
        [
            'reprehenderit' => 'ut',
        ],
    ];
    $request->filters->cookies = [
        'dicta' => 'corporis',
        'dolore' => 'iusto',
        'dicta' => 'harum',
        'enim' => 'accusamus',
    ];
    $request->filters->headers = [
        'repudiandae' => 'quae',
        'ipsum' => 'quidem',
    ];
    $request->filters->method = 'molestias';
    $request->filters->queryParameters = [
        'pariatur' => 'modi',
        'praesentium' => 'rem',
        'voluptates' => 'quasi',
    ];
    $request->filters->url = 'repudiandae';
    $request->filters->urlPath = 'sint';
    $request->filters->urlPathPattern = 'veritatis';
    $request->filters->urlPattern = 'itaque';
    $request->persist = false;
    $request->repeatsAsScenarios = false;
    $request->requestBodyPattern = new PostAdminRecordingsStartRequestBodyRequestBodyPattern2();
    $request->requestBodyPattern->caseInsensitive = false;
    $request->requestBodyPattern->matcher = PostAdminRecordingsStartRequestBodyRequestBodyPattern2MatcherEnum::EQUAL_TO;
    $request->targetBaseUrl = 'http://example.mocklab.io';
    $request->transformerParameters = [
        'consequatur' => 'est',
        'quibusdam' => 'explicabo',
    ];
    $request->transformers = [
        'distinctio',
        'quibusdam',
        'labore',
    ];

    $response = $sdk->recordings->postAdminRecordingsStart($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postAdminRecordingsStop

End recording of stub mappings

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->recordings->postAdminRecordingsStop();

    if ($response->postAdminRecordingsStop200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
