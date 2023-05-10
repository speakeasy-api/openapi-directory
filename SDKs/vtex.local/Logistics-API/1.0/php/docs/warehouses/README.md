# warehouses

### Available Operations

* [activateWarehouse](#activatewarehouse) - Activate warehouse
* [allWarehouses](#allwarehouses) - List all warehouses
* [createUpdateWarehouse](#createupdatewarehouse) - Create/update warehouse
* [deactivateWarehouse](#deactivatewarehouse) - Deactivate warehouse
* [removeWarehouse](#removewarehouse) - Remove warehouse
* [warehouseById](#warehousebyid) - List warehouse by ID

## activateWarehouse

Activates a given warehouse, by warehouse ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ActivateWarehouseRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActivateWarehouseRequest();
    $request->accept = 'sed';
    $request->contentType = 'saepe';
    $request->warehouseId = 'pariatur';

    $response = $sdk->warehouses->activateWarehouse($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## allWarehouses

Lists information about all warehouses set up in your store.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AllWarehousesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AllWarehousesRequest();
    $request->accept = 'accusantium';
    $request->contentType = 'consequuntur';

    $response = $sdk->warehouses->allWarehouses($request);

    if ($response->allWarehouses200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createUpdateWarehouse

Creates or updates your store's warehouses

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateUpdateWarehouseRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateUpdateWarehouseCreateUpdateWarehouseRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateUpdateWarehouseCreateUpdateWarehouseRequestWarehouseDock;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateUpdateWarehouseRequest();
    $request->accept = 'praesentium';
    $request->contentType = 'natus';
    $request->requestBody = new CreateUpdateWarehouseCreateUpdateWarehouseRequest();
    $request->requestBody->id = '21cddc69-2601-4fb5-b6b0-d5f0d30c5fbb';
    $request->requestBody->name = 'Beatrice Lebsack II';
    $request->requestBody->warehouseDocks = [
        new CreateUpdateWarehouseCreateUpdateWarehouseRequestWarehouseDock(),
    ];

    $response = $sdk->warehouses->createUpdateWarehouse($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deactivateWarehouse

Deactivates a given warehouse by warehouse ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeactivateWarehouseRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeactivateWarehouseRequest();
    $request->accept = 'eos';
    $request->contentType = 'perferendis';
    $request->warehouseId = 'dolores';

    $response = $sdk->warehouses->deactivateWarehouse($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## removeWarehouse

Deletes given warehouse by warehouse ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RemoveWarehouseRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RemoveWarehouseRequest();
    $request->accept = 'minus';
    $request->contentType = 'quam';
    $request->warehouseId = 'dolor';

    $response = $sdk->warehouses->removeWarehouse($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## warehouseById

Lists the information of a given warehouse, searching by warehouse ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\WarehouseByIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WarehouseByIdRequest();
    $request->accept = 'vero';
    $request->contentType = 'nostrum';
    $request->warehouseId = 'hic';

    $response = $sdk->warehouses->warehouseById($request);

    if ($response->warehouseById200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
