# changeSeller

### Available Operations

* [getWindowToChangeSeller](#getwindowtochangeseller) - Get window to change seller
* [updateWindowToChangeSeller](#updatewindowtochangeseller) - Update window to change seller

## getWindowToChangeSeller

Retrieves a marketplace’s window to change seller, that is, the period when it is possible to choose another seller to fulfill a given order after the original seller has canceled it.

The default period for this window is of 2 days, but it can be configured by the request Update window to change seller.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetWindowToChangeSellerRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetWindowToChangeSellerRequest();
    $request->accept = 'distinctio';
    $request->contentType = 'quibusdam';

    $response = $sdk->changeSeller->getWindowToChangeSeller($request);

    if ($response->getWindowToChangeSeller200TextPlainInteger !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateWindowToChangeSeller

Updates a marketplace’s window to change seller, that is, the period when it is possible to choose another seller to fulfill a given order after the original seller has canceled it.

It is possible to check the current window using the request Get window to change seller.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateWindowToChangeSellerRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateWindowToChangeSellerRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateWindowToChangeSellerRequest();
    $request->accept = 'unde';
    $request->contentType = 'nulla';
    $request->requestBody = new UpdateWindowToChangeSellerRequestBody();
    $request->requestBody->waitingTime = 544883;

    $response = $sdk->changeSeller->updateWindowToChangeSeller($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
