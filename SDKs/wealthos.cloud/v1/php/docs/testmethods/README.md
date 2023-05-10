# testMethods

## Overview

Test methods are used for easier testing of connectivity, keys and tokens. Since they are not tied to a speific functionality you can use them freely


### Available Operations

* [getBEGreeting](#getbegreeting) - Wealth Manager Greeting for BE

## getBEGreeting

Wealth Manager Greeting for BE

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetBEGreetingSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new GetBEGreetingSecurity();
    $requestSecurity->apiSecretKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->testMethods->getBEGreeting($requestSecurity);

    if ($response->getBEGreeting200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
