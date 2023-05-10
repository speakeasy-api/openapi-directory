# scenarios

## Overview

Scenarios support modelling of stateful behaviour

User documentation
<http://wiremock.org/docs/stateful-behaviour/>
### Available Operations

* [getAdminScenarios](#getadminscenarios) - Get all scenarios
* [postAdminScenariosReset](#postadminscenariosreset) - Reset the state of all scenarios

## getAdminScenarios

Get all scenarios

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->scenarios->getAdminScenarios();

    if ($response->getAdminScenarios200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postAdminScenariosReset

Reset the state of all scenarios

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->scenarios->postAdminScenariosReset();

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
