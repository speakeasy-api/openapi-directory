# configuration

### Available Operations

* [clearorderFormMessages](#clearorderformmessages) - Clear orderForm messages
* [getWindowToChangeSeller](#getwindowtochangeseller) - Get window to change seller
* [getorderFormconfiguration](#getorderformconfiguration) - Get orderForm configuration
* [updateWindowToChangeSeller](#updatewindowtochangeseller) - Update window to change seller
* [updateorderFormconfiguration](#updateorderformconfiguration) - Update orderForm configuration

## clearorderFormMessages

This request removes all messages from the `messages` field of the orderForm , leaving it empty.

You must send an empty JSON in the body of the request.

The [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.

**Important**: **Request Body** must always be sent with empty value "{ }" in this endpoint.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ClearorderFormMessagesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClearorderFormMessagesRequest();
    $request->accept = 'laboriosam';
    $request->contentType = 'hic';
    $request->requestBody = [
        'fuga' => 'in',
        'corporis' => 'iste',
        'iure' => 'saepe',
        'quidem' => 'architecto',
    ];
    $request->orderFormId = 'ipsa';

    $response = $sdk->configuration->clearorderFormMessages($request);

    if ($response->clearorderFormMessages200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

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
    $request->accept = 'reiciendis';
    $request->contentType = 'est';

    $response = $sdk->configuration->getWindowToChangeSeller($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getorderFormconfiguration

Retrieves the settings that are currently applied to every orderForm in the account.

These settings are defined by the request [Update orderForm configuration](https://developers.vtex.com/reference/configuration#updateorderformconfiguration).

Always use this request to retrieve the current configuration before performing an update. By doing so you ensure that you are modifying only the properties you want.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetorderFormconfigurationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetorderFormconfigurationRequest();
    $request->accept = 'mollitia';
    $request->contentType = 'laborum';

    $response = $sdk->configuration->getorderFormconfiguration($request);

    if ($response->getorderFormconfiguration200ApplicationJSONAny !== null) {
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
use \OpenAPI\OpenAPI\Models\Shared\WaitingTime;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateWindowToChangeSellerRequest();
    $request->accept = 'dolores';
    $request->contentType = 'dolorem';
    $request->waitingTime = new WaitingTime();
    $request->waitingTime->waitingTime = 358152;

    $response = $sdk->configuration->updateWindowToChangeSeller($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateorderFormconfiguration

Determines settings that will apply to every orderForm in the account.

For example, if you create an app using this request, every orderForm of this account will have the custom fields created though it.

**Important**: always retrieve the current configuration before performing an update to ensure that you are modifying only the properties you want. Otherwise, old values can be overwritten. To retrieve the current configuration, use the request [Get orderForm configuration](https://developers.vtex.com/reference#getorderformconfiguration).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateorderFormconfigurationRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateorderFormconfigurationRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateorderFormconfigurationRequestApps;
use \OpenAPI\OpenAPI\Models\Shared\PaymentConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\UpdateorderFormconfigurationRequestTaxConfiguration;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateorderFormconfigurationRequest();
    $request->accept = 'explicabo';
    $request->contentType = 'nobis';
    $request->updateorderFormconfigurationRequest = new UpdateorderFormconfigurationRequest();
    $request->updateorderFormconfigurationRequest->allowManualPrice = false;
    $request->updateorderFormconfigurationRequest->allowMultipleDeliveries = false;
    $request->updateorderFormconfigurationRequest->apps = [
        new UpdateorderFormconfigurationRequestApps(),
        new UpdateorderFormconfigurationRequestApps(),
    ];
    $request->updateorderFormconfigurationRequest->decimalDigitsPrecision = 607831;
    $request->updateorderFormconfigurationRequest->maskFirstPurchaseData = false;
    $request->updateorderFormconfigurationRequest->maxNumberOfWhiteLabelSellers = 363711;
    $request->updateorderFormconfigurationRequest->minimumQuantityAccumulatedForItems = 325047;
    $request->updateorderFormconfigurationRequest->minimumValueAccumulated = 570197;
    $request->updateorderFormconfigurationRequest->paymentConfiguration = new PaymentConfiguration();
    $request->updateorderFormconfigurationRequest->paymentConfiguration->allowInstallmentsMerge = false;
    $request->updateorderFormconfigurationRequest->paymentConfiguration->requiresAuthenticationForPreAuthorizedPaymentOption = false;
    $request->updateorderFormconfigurationRequest->paymentSystemToCheckFirstInstallment = '6';
    $request->updateorderFormconfigurationRequest->recaptchaValidation = 'accusantium';
    $request->updateorderFormconfigurationRequest->taxConfiguration = new UpdateorderFormconfigurationRequestTaxConfiguration();
    $request->updateorderFormconfigurationRequest->taxConfiguration->appId = 'iure';
    $request->updateorderFormconfigurationRequest->taxConfiguration->authorizationHeader = 'culpa';
    $request->updateorderFormconfigurationRequest->taxConfiguration->url = 'doloribus';

    $response = $sdk->configuration->updateorderFormconfiguration($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
