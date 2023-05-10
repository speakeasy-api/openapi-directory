# purchaseInformation

### Available Operations

* [createPurchaseInformation](#createpurchaseinformation) - Create purchase information
* [deletePurchaseInformation](#deletepurchaseinformation) - Delete purchase information
* [getPurchaseInformation](#getpurchaseinformation) - Get purchase information
* [getUnmaskedPurchaseInformation](#getunmaskedpurchaseinformation) - Get unmasked purchase information
* [updatePurchaseInformation](#updatepurchaseinformation) - Update purchase information

## createPurchaseInformation

Creates purchase information for a given client profile.

> Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreatePurchaseInformationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreatePurchaseInformationRequest();
    $request->accept = 'application/json';
    $request->contentType = 'application/json';
    $request->requestBody = 'distinctio';
    $request->alternativeKey = 'email';
    $request->profileId = '70caf394-8534-447e-a0ca-1803c669c771';

    $response = $sdk->purchaseInformation->createPurchaseInformation($request);

    if ($response->createPurchaseInformation201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deletePurchaseInformation

Deletes purchase informaiton by `profileId`.

> Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeletePurchaseInformationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeletePurchaseInformationRequest();
    $request->accept = 'application/json';
    $request->contentType = 'application/json';
    $request->alternativeKey = 'email';
    $request->profileId = '70caf394-8534-447e-a0ca-1803c669c771';

    $response = $sdk->purchaseInformation->deletePurchaseInformation($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPurchaseInformation

Retrieves purchase information of a given client, by its `profileId`.

> For security and privacy reasons, this request returns masked data. For unmasked information, see Get unmasked purchase information.

> Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetPurchaseInformationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPurchaseInformationRequest();
    $request->accept = 'application/json';
    $request->contentType = 'application/json';
    $request->alternativeKey = 'email';
    $request->profileId = '70caf394-8534-447e-a0ca-1803c669c771';

    $response = $sdk->purchaseInformation->getPurchaseInformation($request);

    if ($response->getPurchaseInformation200ApplicationJSONAnies !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUnmaskedPurchaseInformation

Retrieves unmasked purchase information of a given client, by its `profileId`.

> Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetUnmaskedPurchaseInformationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUnmaskedPurchaseInformationRequest();
    $request->accept = 'application/json';
    $request->contentType = 'application/json';
    $request->profileId = '70caf394-8534-447e-a0ca-1803c669c771';

    $response = $sdk->purchaseInformation->getUnmaskedPurchaseInformation($request);

    if ($response->getUnmaskedPurchaseInformation200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updatePurchaseInformation

Updates one or more fields of existing purchase information for a given client profile.

> Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePurchaseInformationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdatePurchaseInformationRequest();
    $request->accept = 'application/json';
    $request->contentType = 'application/json';
    $request->requestBody = 'quibusdam';
    $request->alternativeKey = 'email';
    $request->profileId = '70caf394-8534-447e-a0ca-1803c669c771';

    $response = $sdk->purchaseInformation->updatePurchaseInformation($request);

    if ($response->updatePurchaseInformation200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
