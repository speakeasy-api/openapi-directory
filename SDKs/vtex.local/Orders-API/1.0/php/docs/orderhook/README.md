# orderHook

### Available Operations

* [deleteHookConfiguration](#deletehookconfiguration) - Delete hook configuration
* [getHookConfiguration](#gethookconfiguration) - Get hook configuration
* [hookConfiguration](#hookconfiguration) - Create or update hook configuration

## deleteHookConfiguration

Deletes a given hook configuration.

Learn more with the [orders hook guide](https://developers.vtex.com/vtex-rest-api/docs/orders-feed#hook).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteHookConfigurationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteHookConfigurationRequest();
    $request->accept = 'molestiae';
    $request->contentType = 'modi';

    $response = $sdk->orderHook->deleteHookConfiguration($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getHookConfiguration

Retrieves a given hook's configuration details. Learn more with the [orders hook guide](https://developers.vtex.com/vtex-rest-api/docs/orders-feed#hook). 

> 📘 Onboarding guide 
>
> Check the new [Orders onboarding guide](https://developers.vtex.com/vtex-rest-api/docs/orders-overview). We created this guide to improve the onboarding experience for developers at VTEX. It assembles all documentation on our Developer Portal about Orders and is organized by focusing on the developer's journey.



### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetHookConfigurationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetHookConfigurationRequest();
    $request->accept = 'qui';
    $request->contentType = 'impedit';
    $request->clientEmail = 'customer@mail.com';
    $request->page = '10';
    $request->perPage = '15';

    $response = $sdk->orderHook->getHookConfiguration($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## hookConfiguration

Configures filtering rules applied to orders hook. Learn more with the [orders hook guide](https://developers.vtex.com/vtex-rest-api/docs/orders-feed#hook).

There are two types of filtering that can be used: 

 - `FromWorkflow`: filters orders by status.

 - `FromOrders`: uses JSONata expressions to filter orders according to any property in the orders JSON document.

 This enables stores to filter delivered orders and orders in which products have been added or removed, for example.

To learn more, access the [JSONata documentation](https://docs.jsonata.org/overview.html) and test filtering JSONata expressions with our [expressions API](https://developers.vtex.com/docs/api-reference/orders-api#post-/api/orders/expressions/jsonata).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\HookConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Shared\HookConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Shared\HookFilter;
use \OpenAPI\OpenAPI\Models\Shared\Hook;
use \OpenAPI\OpenAPI\Models\Shared\Headers;

$sdk = SDK::builder()
    ->build();

try {
    $request = new HookConfigurationRequest();
    $request->accept = 'cum';
    $request->contentType = 'esse';
    $request->hookConfigurationRequest = new HookConfigurationRequest();
    $request->hookConfigurationRequest->filter = new HookFilter();
    $request->hookConfigurationRequest->filter->disableSingleFire = false;
    $request->hookConfigurationRequest->filter->expression = 'ipsum';
    $request->hookConfigurationRequest->filter->status = [
        'aspernatur',
        'perferendis',
        'ad',
    ];
    $request->hookConfigurationRequest->filter->type = 'natus';
    $request->hookConfigurationRequest->hook = new Hook();
    $request->hookConfigurationRequest->hook->headers = new Headers();
    $request->hookConfigurationRequest->hook->headers->key = 'sed';
    $request->hookConfigurationRequest->hook->url = 'iste';

    $response = $sdk->orderHook->hookConfiguration($request);

    if ($response->hookConfiguration !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
