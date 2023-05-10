# skuBindings

### Available Operations

* [activateSKUBinding](#activateskubinding) - Activate SKU Binding
* [bindtoanothersku](#bindtoanothersku) - Bind a seller's SKU to another SKU
* [changeNotification](#changenotification) - Change Notification with SKU ID
* [deactivateSKUBinding](#deactivateskubinding) - Deactivate SKU Binding
* [deleteSKUsellerassociation](#deleteskusellerassociation) - Remove a seller's SKU Binding
* [getSKUseller](#getskuseller) - Get details of a seller's SKU
* [getallbySellerId](#getallbysellerid) - Get all SKU Bindings by Seller ID
* [getbySkuId](#getbyskuid) - Get SKU Bindings by SKU ID
* [getpagedadmin](#getpagedadmin) - Get SKU Bindings information
* [getpagedbySellerId](#getpagedbysellerid) - Get paged SKU Bindings by Seller ID
* [insertSKUBinding](#insertskubinding) - Insert SKU Binding
* [postSkuBindingPvtSkusellerChangenotificationSellerIdSellerSkuId](#postskubindingpvtskusellerchangenotificationselleridsellerskuid) - Change Notification with Seller ID and Seller SKU ID

## activateSKUBinding

Changes the status of an SKU Binding to active, setting `isActive` to `true`.

 > ℹ This path is an updated version of `/api/catalog_system/pvt/skuseller/activate/{sellerId}/{skuSellerId}`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ActivateSKUBindingRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActivateSKUBindingRequest();
    $request->accept = 'distinctio';
    $request->contentType = 'quibusdam';
    $request->sellerId = 'vtxkfj7352';
    $request->skuSellerId = '71';

    $response = $sdk->skuBindings->activateSKUBinding($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bindtoanothersku

Associates a seller's SKU to another marketplace SKU.

 > ℹ This path is an updated version of `/api/catalog_system/pvt/skuseller/{sellerId}/{sellerSkuId}`.

## Request body example

```json
{
    "StockKeepingUnitId": 1
}
```

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BindtoanotherskuRequest;
use \OpenAPI\OpenAPI\Models\Operations\BindtoanotherskuRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BindtoanotherskuRequest();
    $request->accept = 'unde';
    $request->contentType = 'nulla';
    $request->requestBody = new BindtoanotherskuRequestBody();
    $request->requestBody->stockKeepingUnitId = 1;
    $request->sellerId = '101';
    $request->sellerSkuId = '1';

    $response = $sdk->skuBindings->bindtoanothersku($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## changeNotification

The seller is responsible for suggesting new SKUs to be sold in the VTEX marketplace and also for informing the marketplace about changes in their SKUs that already exist in the marketplace. Both actions start with a catalog notification, which is made by this request.

With this notification, the seller is telling the marketplace that something has changed about a specific SKU, like price or inventory, or that this is a new SKU that the seller would like to offer to the marketplace.

The body of the request should be empty.

 > ℹ This path is an updated version of `/api/catalog_system/pvt/skuseller/changenotification/{skuId}`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ChangeNotificationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ChangeNotificationRequest();
    $request->accept = 'corrupti';
    $request->contentType = 'illum';
    $request->skuId = '10';

    $response = $sdk->skuBindings->changeNotification($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deactivateSKUBinding

Changes the status of an SKU Binding to inactive, setting `isActive` to `false`.

  > ℹ This path is an updated version of `/api/catalog_system/pvt/skuseller/inactivate/{sellerId}/{skuSellerId}`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeactivateSKUBindingRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeactivateSKUBindingRequest();
    $request->accept = 'vel';
    $request->contentType = 'error';
    $request->sellerId = 'vtxkfj7352';
    $request->skuSellerId = '71';

    $response = $sdk->skuBindings->deactivateSKUBinding($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteSKUsellerassociation

Remove a seller's SKU binding, given the Seller ID and the SKU ID in the seller's store.

  > ℹ This path is an updated version of `/api/catalog_system/pvt/skuseller/remove/{sellerId}/{sellerSkuId}`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSKUsellerassociationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSKUsellerassociationRequest();
    $request->accept = 'deserunt';
    $request->contentType = 'suscipit';
    $request->sellerId = 'vtxkfj7352';
    $request->sellerSkuId = '71';

    $response = $sdk->skuBindings->deleteSKUsellerassociation($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSKUseller

Retrieves the details of a seller's SKU given a seller ID and the SKU ID in the seller's store. 

 > ℹ This path is an updated version of `/api/catalog_system/pvt/skuseller/{sellerId}/{sellerSkuId}`.

## Response body example

```json
{
    "IsPersisted": true,
    "IsRemoved": false,
    "SkuSellerId": 102,
    "UpdateDate": "2021-04-12T20:06:59.413Z",
    "RequestedUpdateDate": null,
    "SellerStockKeepingUnitId": "71",
    "SellerId": "vtxkfj7352",
    "StockKeepingUnitId": 1,
    "IsActive": true
}
```

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSKUsellerRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSKUsellerRequest();
    $request->accept = 'iure';
    $request->contentType = 'magnam';
    $request->sellerId = '101';
    $request->sellerSkuId = '1';

    $response = $sdk->skuBindings->getSKUseller($request);

    if ($response->getSKUseller200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getallbySellerId

Retrieves a list of SKU Bindings given a specific Seller ID. 

 > ℹ This path is an updated version of `/api/catalog_system/pvt/skuseller/list/bysellerId/{sellerId}`.

## Response body example

```json
[
    {
        "SellerStockKeepingUnitId": "24",
        "FreightCommissionPercentage": null,
        "ProductCommissionPercentage": null,
        "SellerId": "vtxkfj7352",
        "StockKeepingUnitId": 121,
        "IsActive": true
    }
]
```

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetallbySellerIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetallbySellerIdRequest();
    $request->accept = 'debitis';
    $request->contentType = 'ipsa';
    $request->sellerId = 'vtxkfj7352';

    $response = $sdk->skuBindings->getallbySellerId($request);

    if ($response->getallbySellerId200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getbySkuId

Retrieves SKU Bindings details by SKU ID.

## Response body example

```json
[
    {
        "Id": 48,
        "SellerId": "cosmetics1",
        "StockKeepingUnitId": 1,
        "SellerSkuId": "42",
        "IsActive": true,
        "LastUpdateDate": "2020-10-21T19:13:00.657",
        "SalesPolicy": 0
    }
]
```

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetbySkuIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetbySkuIdRequest();
    $request->accept = 'delectus';
    $request->contentType = 'tempora';
    $request->skuId = '1';

    $response = $sdk->skuBindings->getbySkuId($request);

    if ($response->getbySkuId200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getpagedadmin

Retrieves SKU Bindings administrative information using optional query params `sellerId`, `skuId`, `sellerSkuId` and `IsActive` to filter results and `size` to restrict the amount of results. 

 > ℹ This path is an updated version of `/api/catalog_system/pvt/skuseller/admin`.

## Response body example

```json
[
    {
        "IsPersisted": true,
        "IsRemoved": false,
        "SkuSellerId": 1,
        "UpdateDate": "2019-12-04T01:56:00.673Z",
        "RequestedUpdateDate": null,
        "SellerStockKeepingUnitId": "12",
        "SellerId": "cosmetics1",
        "StockKeepingUnitId": 25,
        "IsActive": true
    }
]
```

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetpagedadminRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetpagedadminRequest();
    $request->accept = 'suscipit';
    $request->contentType = 'molestiae';
    $request->isActive = true;
    $request->sellerId = 'vtxkfj7352';
    $request->sellerSkuId = '71';
    $request->size = '1';
    $request->skuId = '1';

    $response = $sdk->skuBindings->getpagedadmin($request);

    if ($response->getpagedadmin200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getpagedbySellerId

Retrieves a paged list of SKU Bindings given a specific Seller ID. 

 > ℹ This path is an updated version of `/api/catalog_system/pvt/skuseller/paged/sellerid/{sellerId}`.

## Response body example

```json
[
    {
        "SellerId": "vtxkfj7352",
        "StockKeepingUnitId": 121,
        "SellerStockKeepingUnitId": "24",
        "IsActive": true,
        "FreightCommissionPercentage": null,
        "ProductCommissionPercentage": null
    },
    {
        "SellerId": "vtxkfj7352",
        "StockKeepingUnitId": 14,
        "SellerStockKeepingUnitId": "60",
        "IsActive": true,
        "FreightCommissionPercentage": null,
        "ProductCommissionPercentage": null
    }
]
```

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetpagedbySellerIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetpagedbySellerIdRequest();
    $request->accept = 'minus';
    $request->contentType = 'placeat';
    $request->page = '1';
    $request->sellerId = 'vtxkfj7352';
    $request->size = '2';

    $response = $sdk->skuBindings->getpagedbySellerId($request);

    if ($response->getpagedbySellerId200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## insertSKUBinding

Creates an SKU Binding, associating a seller's SKU with a marketplace's SKU.

 > ℹ This path is an updated version of `/api/catalog_system/pvt/skuseller/insertion`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\InsertSKUBindingRequest;
use \OpenAPI\OpenAPI\Models\Operations\InsertSKUBindingRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new InsertSKUBindingRequest();
    $request->accept = 'voluptatum';
    $request->contentType = 'iusto';
    $request->requestBody = new InsertSKUBindingRequestBody();
    $request->requestBody->isActive = false;
    $request->requestBody->sellerId = 'excepturi';
    $request->requestBody->sellerStockKeepingUnitId = 'nisi';
    $request->requestBody->stockKeepingUnitId = 925597;

    $response = $sdk->skuBindings->insertSKUBinding($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postSkuBindingPvtSkusellerChangenotificationSellerIdSellerSkuId

The seller is responsible for suggesting new SKUs to be sold in the VTEX marketplace and also for informing the marketplace about changes in their SKUs that already exist in the marketplace. Both actions start with a catalog notification, which is made by this request.

With this notification, the seller is telling the marketplace that something has changed about a specific SKU, like price or inventory, or that this is a new SKU that the seller would like to offer to the marketplace.

There are two information expected by the marketplace in this request: the `sellerId`, which identifies the seller, and the `sellerSkuId`, which identifies the binding of the seller with the SKU.

Both information are passed through the request URL. The body of the request should be empty.
 > ℹ This path is an updated version of `/api/catalog_system/pvt/skuseller/changenotification/{sellerId}/{sellerSkuId}`.

## Example

Let's say your seller has the ID `123` in the marketplace and you want to inform the marketplace that has been a change in the SKU with ID `700`.

In this case, you would have to replace the `sellerId` parameter with the value `123` and the `skuId` parameter with the value `700`. The URL of the request would be the following.

```
https://{{accountName}}.vtexcommercestable.com.br/api/sku-binding/pvt/skuseller/changenotification/123/700
```

## Response codes

The following response codes are possible for this request.
* 200: the SKU whose ID was informed in the URL already exists in the marketplace and was found. The marketplace can now proceed with a fulfillment simulation in order to get updated information about this SKU's inventory and price.
* 403: Failure in the authentication.
* 404: the SKU was not found in the marketplace. The body of the response, in this case, should follow this format: "Seller StockKeepingUnit `{{skuId}}` not found for this seller id `{{sellerId}}`. This means that the seller can now proceed with sending an offer to the marketplace in order to suggest that this SKU is sold there.
* 429: Failure due to too many requests.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostSkuBindingPvtSkusellerChangenotificationSellerIdSellerSkuIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostSkuBindingPvtSkusellerChangenotificationSellerIdSellerSkuIdRequest();
    $request->accept = 'temporibus';
    $request->contentType = 'ab';
    $request->sellerId = '101';
    $request->sellerSkuId = '1';

    $response = $sdk->skuBindings->postSkuBindingPvtSkusellerChangenotificationSellerIdSellerSkuId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
