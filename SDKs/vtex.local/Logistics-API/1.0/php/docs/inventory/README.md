# inventory

### Available Operations

* [getSupplyLots](#getsupplylots) - List supply lots
* [getinventorywithdispatchedreservations](#getinventorywithdispatchedreservations) - List inventory with dispatched reservations
* [inventoryBySku](#inventorybysku) - List inventory by SKU
* [inventoryperdock](#inventoryperdock) - List inventory per dock
* [inventoryperdockandwarehouse](#inventoryperdockandwarehouse) - List inventory per dock and warehouse
* [inventoryperwarehouse](#inventoryperwarehouse) - List inventory per warehouse
* [saveSupplyLot](#savesupplylot) - Save supply lot
* [transferSupplyLot](#transfersupplylot) - Transfer supply lot
* [updateInventoryBySkuandWarehouse](#updateinventorybyskuandwarehouse) - Update inventory by SKU and warehouse

## getSupplyLots

Returns a list of the supply lots of an SKU in a specific warehouse.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSupplyLotsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSupplyLotsRequest();
    $request->accept = 'application/json';
    $request->contentType = 'application/json; charset=utf-8';
    $request->skuId = 'aut';
    $request->warehouseId = 'quasi';

    $response = $sdk->inventory->getSupplyLots($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getinventorywithdispatchedreservations

Lists inventory with dispatched reservations. When the number of active reservations is more than 2000 the return is an error with status code 400 (BadRequest) and the message: Too many active reservations.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetinventorywithdispatchedreservationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetinventorywithdispatchedreservationsRequest();
    $request->accept = 'error';
    $request->contentType = 'temporibus';
    $request->itemId = 'laborum';
    $request->warehouseId = 'quasi';

    $response = $sdk->inventory->getinventorywithdispatchedreservations($request);

    if ($response->getinventorywithdispatchedreservations200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## inventoryBySku

Lists your store's inventory by SKU ID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\InventoryBySkuRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new InventoryBySkuRequest();
    $request->accept = 'reiciendis';
    $request->contentType = 'voluptatibus';
    $request->skuId = 'vero';

    $response = $sdk->inventory->inventoryBySku($request);

    if ($response->inventoryBySku200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## inventoryperdock

Lists inventory information per dock set up in your store.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\InventoryperdockRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new InventoryperdockRequest();
    $request->accept = 'nihil';
    $request->contentType = 'praesentium';
    $request->dockId = 'voluptatibus';
    $request->skuId = 'ipsa';

    $response = $sdk->inventory->inventoryperdock($request);

    if ($response->inventoryperdock200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## inventoryperdockandwarehouse

Lists information of inventory per dock and warehouse.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\InventoryperdockandwarehouseRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new InventoryperdockandwarehouseRequest();
    $request->accept = 'omnis';
    $request->contentType = 'voluptate';
    $request->dockId = 'cum';
    $request->skuId = 'perferendis';
    $request->warehouseId = 'doloremque';

    $response = $sdk->inventory->inventoryperdockandwarehouse($request);

    if ($response->inventoryperdockandwarehouse200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## inventoryperwarehouse

Lists inventory information per warehouse on your store.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\InventoryperwarehouseRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new InventoryperwarehouseRequest();
    $request->accept = 'reprehenderit';
    $request->contentType = 'ut';
    $request->skuId = 'maiores';
    $request->warehouseId = 'dicta';

    $response = $sdk->inventory->inventoryperwarehouse($request);

    if ($response->inventoryperwarehouse200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## saveSupplyLot

Creates a new Supply Lot. A Supply Lot lets the store sell products that are not currently available in stock but whose arrival is already scheduled.

Check out our [documentation](https://help.vtex.com/en/tutorial/setting-up-future-inventory--UMSGjooqRfkRbeoh94kS4) about this feature.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SaveSupplyLotRequest;
use \OpenAPI\OpenAPI\Models\Operations\SaveSupplyLotSaveSupplyLot;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SaveSupplyLotRequest();
    $request->accept = 'corporis';
    $request->contentType = 'dolore';
    $request->requestBody = new SaveSupplyLotSaveSupplyLot();
    $request->requestBody->dateOfSupplyUtc = 'iusto';
    $request->requestBody->keepSellingAfterExpiration = false;
    $request->requestBody->quantity = 1187.27;
    $request->skuId = 'harum';
    $request->supplyLotId = 'enim';
    $request->warehouseId = 'accusamus';

    $response = $sdk->inventory->saveSupplyLot($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## transferSupplyLot

Transfers an SKU from a Supply Lot to the currently available inventory.

Check out how this transfer works in further detail by reading our [documentation](https://help.vtex.com/pt/tutorial/configurar-estoque-futuro--UMSGjooqRfkRbeoh94kS4) about this feature.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TransferSupplyLotRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TransferSupplyLotRequest();
    $request->accept = 'commodi';
    $request->contentType = 'repudiandae';
    $request->skuId = 'quae';
    $request->supplyLotId = 'ipsum';
    $request->warehouseId = 'quidem';

    $response = $sdk->inventory->transferSupplyLot($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateInventoryBySkuandWarehouse

Updates inventory for a given SKU and warehouse.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateInventoryBySkuandWarehouseRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateInventoryBySkuandWarehouseUpdateInventoryBySkuandWarehouseRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateInventoryBySkuandWarehouseRequest();
    $request->accept = 'molestias';
    $request->contentType = 'excepturi';
    $request->requestBody = new UpdateInventoryBySkuandWarehouseUpdateInventoryBySkuandWarehouseRequest();
    $request->requestBody->dateUtcOnBalanceSystem = 'null';
    $request->requestBody->quantity = 865103;
    $request->requestBody->timeToRefillDeprecated = 'modi';
    $request->requestBody->unlimitedQuantity = false;
    $request->skuId = 'praesentium';
    $request->warehouseId = 'rem';

    $response = $sdk->inventory->updateInventoryBySkuandWarehouse($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
