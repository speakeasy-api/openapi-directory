# requests

## Overview

Logged requests and responses received by the mock service

User documentation
<http://wiremock.org/docs/verifying/>
### Available Operations

* [deleteAdminRequests](#deleteadminrequests) - Delete all requests in journal
* [deleteAdminRequestsRequestId](#deleteadminrequestsrequestid) - Delete request by ID
* [getAdminRequests](#getadminrequests) - Get all requests in journal
* [getAdminRequestsUnmatched](#getadminrequestsunmatched) - Find unmatched requests
* [getAdminRequestsRequestId](#getadminrequestsrequestid) - Get request by ID
* [postAdminRequestsCount](#postadminrequestscount) - Count requests by criteria
* [postAdminRequestsFind](#postadminrequestsfind) - Find requests by criteria
* [postAdminRequestsRemove](#postadminrequestsremove) - Remove requests by criteria
* [postAdminRequestsRemoveByMetadata](#postadminrequestsremovebymetadata) - Delete requests mappings matching metadata
* [~~postAdminRequestsReset~~](#postadminrequestsreset) - Empty the request journal :warning: **Deprecated**

## deleteAdminRequests

Delete all requests in journal

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->requests->deleteAdminRequests();

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteAdminRequestsRequestId

Delete request by ID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAdminRequestsRequestIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteAdminRequestsRequestIdRequest();
    $request->requestId = 'modi';

    $response = $sdk->requests->deleteAdminRequestsRequestId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAdminRequests

Get all requests in journal

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAdminRequestsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAdminRequestsRequest();
    $request->limit = 'qui';
    $request->since = 'aliquid';

    $response = $sdk->requests->getAdminRequests($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAdminRequestsUnmatched

Get details of logged requests that weren't matched by any stub mapping

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->requests->getAdminRequestsUnmatched();

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAdminRequestsRequestId

Get request by ID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAdminRequestsRequestIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAdminRequestsRequestIdRequest();
    $request->requestId = 'cupiditate';

    $response = $sdk->requests->getAdminRequestsRequestId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postAdminRequestsCount

Count requests logged in the journal matching the specified criteria

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostAdminRequestsCountRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PostAdminRequestsCountRequestBodyBasicAuthCredentials;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostAdminRequestsCountRequestBody();
    $request->basicAuthCredentials = new PostAdminRequestsCountRequestBodyBasicAuthCredentials();
    $request->basicAuthCredentials->password = 'quos';
    $request->basicAuthCredentials->username = 'Aiyana.Cummerata0';
    $request->bodyPatterns = [
        [
            'excepturi' => 'tempora',
            'facilis' => 'tempore',
            'labore' => 'delectus',
        ],
    ];
    $request->cookies = [
        'non' => 'eligendi',
        'sint' => 'aliquid',
    ];
    $request->headers = [
        'necessitatibus' => 'sint',
        'officia' => 'dolor',
        'debitis' => 'a',
    ];
    $request->method = 'dolorum';
    $request->queryParameters = [
        'in' => 'illum',
        'maiores' => 'rerum',
    ];
    $request->url = 'dicta';
    $request->urlPath = 'magnam';
    $request->urlPathPattern = 'cumque';
    $request->urlPattern = 'facere';

    $response = $sdk->requests->postAdminRequestsCount($request);

    if ($response->postAdminRequestsCount200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postAdminRequestsFind

Retrieve details of requests logged in the journal matching the specified criteria

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostAdminRequestsFindRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PostAdminRequestsFindRequestBodyBasicAuthCredentials;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostAdminRequestsFindRequestBody();
    $request->basicAuthCredentials = new PostAdminRequestsFindRequestBodyBasicAuthCredentials();
    $request->basicAuthCredentials->password = 'ea';
    $request->basicAuthCredentials->username = 'Gracie.Padberg58';
    $request->bodyPatterns = [
        [
            'delectus' => 'quidem',
            'provident' => 'nam',
            'id' => 'blanditiis',
            'deleniti' => 'sapiente',
        ],
        [
            'deserunt' => 'nisi',
        ],
    ];
    $request->cookies = [
        'natus' => 'omnis',
        'molestiae' => 'perferendis',
    ];
    $request->headers = [
        'magnam' => 'distinctio',
        'id' => 'labore',
    ];
    $request->method = 'labore';
    $request->queryParameters = [
        'natus' => 'nobis',
        'eum' => 'vero',
    ];
    $request->url = 'aspernatur';
    $request->urlPath = 'architecto';
    $request->urlPathPattern = 'magnam';
    $request->urlPattern = 'et';

    $response = $sdk->requests->postAdminRequestsFind($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postAdminRequestsRemove

Removed requests logged in the journal matching the specified criteria

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostAdminRequestsRemoveRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PostAdminRequestsRemoveRequestBodyBasicAuthCredentials;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostAdminRequestsRemoveRequestBody();
    $request->basicAuthCredentials = new PostAdminRequestsRemoveRequestBodyBasicAuthCredentials();
    $request->basicAuthCredentials->password = 'excepturi';
    $request->basicAuthCredentials->username = 'Ferne_McLaughlin';
    $request->bodyPatterns = [
        [
            'reiciendis' => 'mollitia',
            'ad' => 'eum',
            'dolor' => 'necessitatibus',
        ],
    ];
    $request->cookies = [
        'nemo' => 'quasi',
    ];
    $request->headers = [
        'doloribus' => 'debitis',
        'eius' => 'maxime',
    ];
    $request->method = 'deleniti';
    $request->queryParameters = [
        'in' => 'architecto',
        'architecto' => 'repudiandae',
        'ullam' => 'expedita',
    ];
    $request->url = 'nihil';
    $request->urlPath = 'repellat';
    $request->urlPathPattern = 'quibusdam';
    $request->urlPattern = 'sed';

    $response = $sdk->requests->postAdminRequestsRemove($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postAdminRequestsRemoveByMetadata

Delete requests mappings matching metadata

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostAdminRequestsRemoveByMetadataRequestBodyXPathMatch();
    $request->matchesXpath = 'pariatur';
    $request->namespaces = [
        'consequuntur' => 'praesentium',
    ];
    $request->valuePattern = [
        'magni' => 'sunt',
        'quo' => 'illum',
        'pariatur' => 'maxime',
    ];

    $response = $sdk->requests->postAdminRequestsRemoveByMetadata($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~postAdminRequestsReset~~

Empty the request journal

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->requests->postAdminRequestsReset();

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
