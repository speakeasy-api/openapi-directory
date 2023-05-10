# notification

### Available Operations

* [inventoryNotification](#inventorynotification) - Notify marketplace of inventory update
* [priceNotification](#pricenotification) - Notify marketplace of price update

## inventoryNotification

This endpoint is used by *sellers* to notify marketplaces that the inventory level has changed for one of their SKUs. 

There is no request body in this call, indicating the new inventory level, for instance. It only notifies a specific marketplace (`accountName`) that a seller (`sellerId`) has changed the inventory level of an SKU (`skuId`). 

*Marketplaces* will then call the [fulfillment endpoint](https://developers.vtex.com/vtex-rest-api/reference/fulfillment-simulation) provided in the seller registration form to get the updated inventory  information.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\InventoryNotificationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new InventoryNotificationRequest();
    $request->accept = 'voluptatum';
    $request->contentType = 'iusto';
    $request->accountName = 'excepturi';
    $request->environment = 'nisi';
    $request->sellerId = 'recusandae';
    $request->skuId = 'temporibus';

    $response = $sdk->notification->inventoryNotification($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## priceNotification

This endpoint is used by *sellers* to notify marketplaces that the price has changed for one of their SKUs. 

There is no request body in this call, indicating the new price value, for instance. It only notifies a specific marketplace (`accountName`) that a seller (`sellerId`) has changed the price of an SKU (`skuId`). 

*Marketplaces* will then call the [fulfillment endpoint](https://developers.vtex.com/vtex-rest-api/reference/fulfillment-simulation) provided in the seller registration form to get the updated price information.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PriceNotificationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PriceNotificationRequest();
    $request->accept = 'ab';
    $request->contentType = 'quis';
    $request->accountName = 'veritatis';
    $request->environment = 'deserunt';
    $request->sellerId = 'perferendis';
    $request->skuId = 'ipsam';

    $response = $sdk->notification->priceNotification($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
