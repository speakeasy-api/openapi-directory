# nearMisses

## Overview

Near misses allow querying of received requests or request patterns according to similarity

User documentation
<http://wiremock.org/docs/verifying/#near-misses>
### Available Operations

* [getAdminRequestsUnmatchedNearMisses](#getadminrequestsunmatchednearmisses) - Retrieve near-misses for all unmatched requests
* [postAdminNearMissesRequest](#postadminnearmissesrequest) - Find near misses matching specific request
* [postAdminNearMissesRequestPattern](#postadminnearmissesrequestpattern) - Find near misses matching request pattern

## getAdminRequestsUnmatchedNearMisses

Retrieve near-misses for all unmatched requests

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->nearMisses->getAdminRequestsUnmatchedNearMisses();

    if ($response->getAdminRequestsUnmatchedNearMisses200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postAdminNearMissesRequest

Find at most 3 near misses for closest stub mappings to the specified request

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostAdminNearMissesRequestRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostAdminNearMissesRequestRequestBody();
    $request->absoluteUrl = 'http://localhost:56738/received-request/2';
    $request->body = 'Hello world';
    $request->cookies = [
        'provident' => 'distinctio',
        'quibusdam' => 'unde',
        'nulla' => 'corrupti',
    ];
    $request->headers = [
        'vel' => 'error',
        'deserunt' => 'suscipit',
        'iure' => 'magnam',
        'debitis' => 'ipsa',
    ];
    $request->method = 'GET';
    $request->url = '/received-request/2';

    $response = $sdk->nearMisses->postAdminNearMissesRequest($request);

    if ($response->postAdminNearMissesRequest200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postAdminNearMissesRequestPattern

Find at most 3 near misses for closest logged requests to the specified request pattern

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostAdminNearMissesRequestPatternRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PostAdminNearMissesRequestPatternRequestBodyBasicAuthCredentials;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostAdminNearMissesRequestPatternRequestBody();
    $request->basicAuthCredentials = new PostAdminNearMissesRequestPatternRequestBodyBasicAuthCredentials();
    $request->basicAuthCredentials->password = 'delectus';
    $request->basicAuthCredentials->username = 'Donny_Hoppe';
    $request->bodyPatterns = [
        [
            'iusto' => 'excepturi',
            'nisi' => 'recusandae',
            'temporibus' => 'ab',
        ],
        [
            'veritatis' => 'deserunt',
            'perferendis' => 'ipsam',
        ],
        [
            'sapiente' => 'quo',
            'odit' => 'at',
            'at' => 'maiores',
            'molestiae' => 'quod',
        ],
        [
            'esse' => 'totam',
            'porro' => 'dolorum',
            'dicta' => 'nam',
            'officia' => 'occaecati',
        ],
    ];
    $request->cookies = [
        'deleniti' => 'hic',
    ];
    $request->headers = [
        'totam' => 'beatae',
        'commodi' => 'molestiae',
        'modi' => 'qui',
        'impedit' => 'cum',
    ];
    $request->method = 'esse';
    $request->queryParameters = [
        'excepturi' => 'aspernatur',
    ];
    $request->url = 'perferendis';
    $request->urlPath = 'ad';
    $request->urlPathPattern = 'natus';
    $request->urlPattern = 'sed';

    $response = $sdk->nearMisses->postAdminNearMissesRequestPattern($request);

    if ($response->postAdminNearMissesRequestPattern200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
