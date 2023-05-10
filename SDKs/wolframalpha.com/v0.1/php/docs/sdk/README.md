# SDK

### Available Operations

* [getWolframAlphaResults](#getwolframalpharesults) - Get Wolfram|Alpha results
* [getWolframCloudResults](#getwolframcloudresults) - Evaluate Wolfram Language code

## getWolframAlphaResults

Get Wolfram|Alpha results

<https://products.wolframalpha.com/api>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetWolframAlphaResultsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetWolframAlphaResultsRequest();
    $request->input = 'provident';

    $response = $sdk->sdk->getWolframAlphaResults($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getWolframCloudResults

Evaluate Wolfram Language code

<https://reference.wolfram.com/language/>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetWolframCloudResultsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetWolframCloudResultsRequest();
    $request->input = 'distinctio';

    $response = $sdk->sdk->getWolframCloudResults($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
