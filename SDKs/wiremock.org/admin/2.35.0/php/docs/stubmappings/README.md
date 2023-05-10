# stubMappings

## Overview

Operations on stub mappings

User documentation
<http://wiremock.org/docs/stubbing/>
### Available Operations

* [deleteAdminMappings](#deleteadminmappings) - Delete all stub mappings
* [deleteAdminMappingsStubMappingId](#deleteadminmappingsstubmappingid) - Delete a stub mapping
* [getAdminMappings](#getadminmappings) - Get all stub mappings
* [getAdminMappingsStubMappingId](#getadminmappingsstubmappingid) - Get stub mapping by ID
* [postAdminMappings](#postadminmappings) - Create a new stub mapping
* [postAdminMappingsFindByMetadata](#postadminmappingsfindbymetadata) - Find stubs by matching on their metadata
* [postAdminMappingsImport](#postadminmappingsimport) - Import stub mappings
* [postAdminMappingsRemoveByMetadata](#postadminmappingsremovebymetadata) - Delete stub mappings matching metadata
* [postAdminMappingsReset](#postadminmappingsreset) - Reset stub mappings
* [postAdminMappingsSave](#postadminmappingssave) - Persist stub mappings
* [putAdminMappingsStubMappingId](#putadminmappingsstubmappingid) - Update a stub mapping

## deleteAdminMappings

Delete all stub mappings

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->stubMappings->deleteAdminMappings();

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteAdminMappingsStubMappingId

Delete a stub mapping

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAdminMappingsStubMappingIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteAdminMappingsStubMappingIdRequest();
    $request->stubMappingId = 'ea';

    $response = $sdk->stubMappings->deleteAdminMappingsStubMappingId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAdminMappings

Get all stub mappings

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAdminMappingsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAdminMappingsRequest();
    $request->limit = 569101;
    $request->offset = 139972;

    $response = $sdk->stubMappings->getAdminMappings($request);

    if ($response->getAdminMappings200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAdminMappingsStubMappingId

Get stub mapping by ID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAdminMappingsStubMappingIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAdminMappingsStubMappingIdRequest();
    $request->stubMappingId = 'ea';

    $response = $sdk->stubMappings->getAdminMappingsStubMappingId($request);

    if ($response->getAdminMappingsStubMappingId200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postAdminMappings

Create a new stub mapping

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostAdminMappingsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PostAdminMappingsRequestBodyRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostAdminMappingsRequestBodyRequestBasicAuthCredentials;
use \OpenAPI\OpenAPI\Models\Operations\PostAdminMappingsRequestBodyResponse;
use \OpenAPI\OpenAPI\Models\Operations\PostAdminMappingsRequestBodyResponseFaultEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostAdminMappingsRequestBody();
    $request->id = '01fb576b-0d5f-40d3-8c5f-bb2587053202';
    $request->metadata = [
        'quam' => 'dolor',
        'vero' => 'nostrum',
        'hic' => 'recusandae',
        'omnis' => 'facilis',
    ];
    $request->name = 'George Sawayn';
    $request->newScenarioState = 'error';
    $request->persistent = false;
    $request->postServeActions = [
        'occaecati' => 'rerum',
    ];
    $request->priority = 237893;
    $request->request = new PostAdminMappingsRequestBodyRequest();
    $request->request->basicAuthCredentials = new PostAdminMappingsRequestBodyRequestBasicAuthCredentials();
    $request->request->basicAuthCredentials->password = 'asperiores';
    $request->request->basicAuthCredentials->username = 'Tracey_Gleichner';
    $request->request->bodyPatterns = [
        [
            'provident' => 'nobis',
            'libero' => 'delectus',
            'quaerat' => 'quos',
            'aliquid' => 'dolorem',
        ],
        [
            'dolor' => 'qui',
        ],
        [
            'hic' => 'excepturi',
        ],
    ];
    $request->request->cookies = [
        'voluptate' => 'dignissimos',
        'reiciendis' => 'amet',
        'dolorum' => 'numquam',
    ];
    $request->request->headers = [
        'ipsa' => 'ipsa',
    ];
    $request->request->method = 'iure';
    $request->request->queryParameters = [
        'quaerat' => 'accusamus',
        'quidem' => 'voluptatibus',
    ];
    $request->request->url = 'voluptas';
    $request->request->urlPath = 'natus';
    $request->request->urlPathPattern = 'eos';
    $request->request->urlPattern = 'atque';
    $request->requiredScenarioState = 'sit';
    $request->response = new PostAdminMappingsRequestBodyResponse();
    $request->response->additionalProxyRequestHeaders = [
        'ab' => 'soluta',
        'dolorum' => 'iusto',
        'voluptate' => 'dolorum',
        'deleniti' => 'omnis',
    ];
    $request->response->base64Body = 'necessitatibus';
    $request->response->body = 'distinctio';
    $request->response->bodyFileName = 'asperiores';
    $request->response->delayDistribution = new PostAdminMappingsRequestBodyResponseDelayDistributionLogNormal();
    $request->response->delayDistribution->median = 216897;
    $request->response->delayDistribution->sigma = 4560.15;
    $request->response->delayDistribution->type = PostAdminMappingsRequestBodyResponseDelayDistributionLogNormalTypeEnum::LOGNORMAL;
    $request->response->fault = PostAdminMappingsRequestBodyResponseFaultEnum::MALFORMED_RESPONSE_CHUNK;
    $request->response->fixedDelayMilliseconds = 906418;
    $request->response->fromConfiguredStub = false;
    $request->response->headers = [
        'aspernatur' => 'perferendis',
        'amet' => 'optio',
    ];
    $request->response->jsonBody = [
        'ad' => 'saepe',
        'suscipit' => 'deserunt',
        'provident' => 'minima',
        'repellendus' => 'totam',
    ];
    $request->response->proxyBaseUrl = 'similique';
    $request->response->status = 55;
    $request->response->statusMessage = 'at';
    $request->response->transformerParameters = [
        'tempora' => 'vel',
        'quod' => 'officiis',
    ];
    $request->response->transformers = [
        'dolorum',
    ];
    $request->scenarioName = 'a';
    $request->uuid = '7a73cf3b-e453-4f87-8b32-6b5a73429cdb';

    $response = $sdk->stubMappings->postAdminMappings($request);

    if ($response->postAdminMappings201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postAdminMappingsFindByMetadata

Find stubs by matching on their metadata

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostAdminMappingsFindByMetadataRequestBodyStringEquals();
    $request->caseInsensitive = false;
    $request->equalTo = false;

    $response = $sdk->stubMappings->postAdminMappingsFindByMetadata($request);

    if ($response->postAdminMappingsFindByMetadata200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postAdminMappingsImport

Import given stub mappings to the backing store

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->stubMappings->postAdminMappingsImport();

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postAdminMappingsRemoveByMetadata

Delete stub mappings matching metadata

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostAdminMappingsRemoveByMetadataRequestBodyJSONPathMatch();
    $request->ignoreArrayOrder = false;
    $request->ignoreExtraElements = false;
    $request->matchesJsonPath = 'totam';

    $response = $sdk->stubMappings->postAdminMappingsRemoveByMetadata($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postAdminMappingsReset

Restores stub mappings to the defaults defined back in the backing store

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->stubMappings->postAdminMappingsReset();

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postAdminMappingsSave

Save all persistent stub mappings to the backing store

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->stubMappings->postAdminMappingsSave();

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putAdminMappingsStubMappingId

Update a stub mapping

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutAdminMappingsStubMappingIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutAdminMappingsStubMappingIdRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PutAdminMappingsStubMappingIdRequestBodyRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutAdminMappingsStubMappingIdRequestBodyRequestBasicAuthCredentials;
use \OpenAPI\OpenAPI\Models\Operations\PutAdminMappingsStubMappingIdRequestBodyResponse;
use \OpenAPI\OpenAPI\Models\Operations\PutAdminMappingsStubMappingIdRequestBodyResponseFaultEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutAdminMappingsStubMappingIdRequest();
    $request->requestBody = new PutAdminMappingsStubMappingIdRequestBody();
    $request->requestBody->id = '422bb679-d232-4271-9bf0-cbb1e31b8b90';
    $request->requestBody->metadata = [
        'dolorem' => 'dolore',
        'labore' => 'adipisci',
        'dolorum' => 'architecto',
        'quae' => 'aut',
    ];
    $request->requestBody->name = 'Percy Altenwerth';
    $request->requestBody->newScenarioState = 'porro';
    $request->requestBody->persistent = false;
    $request->requestBody->postServeActions = [
        'ut' => 'facilis',
        'cupiditate' => 'qui',
        'quae' => 'laudantium',
        'odio' => 'occaecati',
    ];
    $request->requestBody->priority = 977496;
    $request->requestBody->request = new PutAdminMappingsStubMappingIdRequestBodyRequest();
    $request->requestBody->request->basicAuthCredentials = new PutAdminMappingsStubMappingIdRequestBodyRequestBasicAuthCredentials();
    $request->requestBody->request->basicAuthCredentials->password = 'quisquam';
    $request->requestBody->request->basicAuthCredentials->username = 'Selina.Moen';
    $request->requestBody->request->bodyPatterns = [
        [
            'consectetur' => 'vero',
            'tenetur' => 'dignissimos',
        ],
        [
            'distinctio' => 'quod',
            'odio' => 'similique',
            'facilis' => 'vero',
            'ducimus' => 'dolore',
        ],
        [
            'illum' => 'sequi',
            'natus' => 'impedit',
            'aut' => 'voluptatibus',
            'exercitationem' => 'nulla',
        ],
        [
            'porro' => 'maiores',
        ],
    ];
    $request->requestBody->request->cookies = [
        'iusto' => 'eligendi',
        'ducimus' => 'alias',
        'officia' => 'tempora',
        'ipsam' => 'ea',
    ];
    $request->requestBody->request->headers = [
        'vel' => 'possimus',
    ];
    $request->requestBody->request->method = 'magnam';
    $request->requestBody->request->queryParameters = [
        'ex' => 'laudantium',
    ];
    $request->requestBody->request->url = 'dicta';
    $request->requestBody->request->urlPath = 'dolor';
    $request->requestBody->request->urlPathPattern = 'maiores';
    $request->requestBody->request->urlPattern = 'quasi';
    $request->requestBody->requiredScenarioState = 'ex';
    $request->requestBody->response = new PutAdminMappingsStubMappingIdRequestBodyResponse();
    $request->requestBody->response->additionalProxyRequestHeaders = [
        'excepturi' => 'voluptatibus',
        'nostrum' => 'sapiente',
        'quisquam' => 'saepe',
        'ea' => 'impedit',
    ];
    $request->requestBody->response->base64Body = 'corporis';
    $request->requestBody->response->body = 'veniam';
    $request->requestBody->response->bodyFileName = 'aliquid';
    $request->requestBody->response->delayDistribution = new PutAdminMappingsStubMappingIdRequestBodyResponseDelayDistributionLogNormal();
    $request->requestBody->response->delayDistribution->median = 301831;
    $request->requestBody->response->delayDistribution->sigma = 4072.41;
    $request->requestBody->response->delayDistribution->type = PutAdminMappingsStubMappingIdRequestBodyResponseDelayDistributionLogNormalTypeEnum::LOGNORMAL;
    $request->requestBody->response->fault = PutAdminMappingsStubMappingIdRequestBodyResponseFaultEnum::RANDOM_DATA_THEN_CLOSE;
    $request->requestBody->response->fixedDelayMilliseconds = 232234;
    $request->requestBody->response->fromConfiguredStub = false;
    $request->requestBody->response->headers = [
        'aspernatur' => 'minima',
        'eaque' => 'a',
        'libero' => 'aut',
        'aut' => 'deleniti',
    ];
    $request->requestBody->response->jsonBody = [
        'aliquam' => 'fugit',
        'accusamus' => 'inventore',
        'non' => 'et',
        'dolorum' => 'laborum',
    ];
    $request->requestBody->response->proxyBaseUrl = 'placeat';
    $request->requestBody->response->status = 245367;
    $request->requestBody->response->statusMessage = 'eum';
    $request->requestBody->response->transformerParameters = [
        'nobis' => 'quas',
        'assumenda' => 'nulla',
    ];
    $request->requestBody->response->transformers = [
        'libero',
        'quasi',
    ];
    $request->requestBody->scenarioName = 'tempora';
    $request->requestBody->uuid = '42907474-778a-47bd-866d-28c10ab3cdca';
    $request->stubMappingId = 'eius';

    $response = $sdk->stubMappings->putAdminMappingsStubMappingId($request);

    if ($response->putAdminMappingsStubMappingId200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
