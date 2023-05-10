# inventory

### Available Operations

* [getInventory](#getinventory) - Inventory
* [getMultiNodeInventoryForAllSkuAndAllShipNodes](#getmultinodeinventoryforallskuandallshipnodes) - Multiple Item Inventory for All Ship Nodes
* [getMultiNodeInventoryForSkuAndAllShipnodes](#getmultinodeinventoryforskuandallshipnodes) - Single Item Inventory by Ship Node
* [getWFSInventory](#getwfsinventory) - WFS Inventory
* [updateBulkInventory](#updatebulkinventory) - Bulk Item Inventory Update
* [updateInventoryForAnItemJson](#updateinventoryforanitemjson) - Update inventory
* [updateInventoryForAnItemRaw](#updateinventoryforanitemraw) - Update inventory
* [updateMultiNodeInventory](#updatemultinodeinventory) - Update Item Inventory per Ship Node

## getInventory

You can use this API to get the inventory for a given item.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetInventoryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetInventoryRequest();
    $request->wmConsumerChannelType = 'corrupti';
    $request->wmQosCorrelationId = 'illum';
    $request->wmSecAccessToken = 'vel';
    $request->wmSvcName = 'error';
    $request->shipNode = 'deserunt';
    $request->sku = 'suscipit';

    $response = $sdk->inventory->getInventory($request);

    if ($response->getInventory200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMultiNodeInventoryForAllSkuAndAllShipNodes

This API will retrieve the inventory count for all of a seller's items across all ship nodes by item to ship node mapping. Inventory can be zero or non-zero. Please note that NextCursor value changes and it needs to be passed on from the previous call to next call.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetMultiNodeInventoryForAllSkuAndAllShipNodesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMultiNodeInventoryForAllSkuAndAllShipNodesRequest();
    $request->wmConsumerChannelType = 'iure';
    $request->wmQosCorrelationId = 'magnam';
    $request->wmSecAccessToken = 'debitis';
    $request->wmSvcName = 'ipsa';
    $request->limit = 'delectus';
    $request->nextCursor = 'tempora';

    $response = $sdk->inventory->getMultiNodeInventoryForAllSkuAndAllShipNodes($request);

    if ($response->getMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMultiNodeInventoryForSkuAndAllShipnodes

This API will retrieve the inventory count for an item across all ship nodes or one specific ship node. You can specify the ship node for which you want to fetch the inventory

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetMultiNodeInventoryForSkuAndAllShipnodesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMultiNodeInventoryForSkuAndAllShipnodesRequest();
    $request->wmConsumerChannelType = 'suscipit';
    $request->wmQosCorrelationId = 'molestiae';
    $request->wmSecAccessToken = 'minus';
    $request->wmSvcName = 'placeat';
    $request->shipNode = 'voluptatum';
    $request->sku = 'iusto';

    $response = $sdk->inventory->getMultiNodeInventoryForSkuAndAllShipnodes($request);

    if ($response->getMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getWFSInventory

You can use this API to get the current Available to Sell inventory quantities for all WFS items in your catalog. You can also query specific SKUs or filter to only items updated after a specific date in order to reduce the response size.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetWFSInventoryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetWFSInventoryRequest();
    $request->wmConsumerChannelType = 'excepturi';
    $request->wmQosCorrelationId = 'nisi';
    $request->wmSecAccessToken = 'recusandae';
    $request->wmSvcName = 'temporibus';
    $request->fromModifiedDate = 'ab';
    $request->limit = 'quis';
    $request->offset = 'veritatis';
    $request->sku = 'deserunt';
    $request->toModifiedDate = 'perferendis';

    $response = $sdk->inventory->getWFSInventory($request);

    if ($response->getWFSInventory200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateBulkInventory

Updates inventory for items in bulk. 
Seller Can either use feed type "inventory" or "MP_INVENTORY" 
* Inventory spec 1.4 feed type: inventory 
* Inventory spec 1.5 feed type: MP_INVENTORY 

Please Note: Multi Node Inventory Update Feed (feedType=MP_INVENTORY) only supports JSON Request and Responses. Refer to "MultiNode_Bulk_Inventory_Update_Request.json" for the corresponding request sample 
 
Refer to the <a href="https://developer.walmart.com/doc/us/us-mp/us-mp-inventory/">guide section</a> for more detailed guide around each of the feed types 

 Refer to the throttling limits before uploading the Feed Files.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateBulkInventoryRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateBulkInventoryRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateBulkInventoryRequestBodyFile;
use \OpenAPI\OpenAPI\Models\Operations\UpdateBulkInventoryFeedTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateBulkInventoryRequest();
    $request->requestBody = new UpdateBulkInventoryRequestBody();
    $request->requestBody->file = new UpdateBulkInventoryRequestBodyFile();
    $request->requestBody->file->content = 'ipsam';
    $request->requestBody->file->file = 'repellendus';
    $request->wmConsumerChannelType = 'sapiente';
    $request->wmQosCorrelationId = 'quo';
    $request->wmSecAccessToken = 'odit';
    $request->wmSvcName = 'at';
    $request->feedType = UpdateBulkInventoryFeedTypeEnum::MP_INVENTORY;
    $request->shipNode = 'maiores';

    $response = $sdk->inventory->updateBulkInventory($request);

    if ($response->updateBulkInventory200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateInventoryForAnItemJson

Updates the inventory for a given item.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateInventoryForAnItemJsonRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateInventoryForAnItemApplicationJSON;
use \OpenAPI\OpenAPI\Models\Operations\UpdateInventoryForAnItemApplicationJSONQuantity;
use \OpenAPI\OpenAPI\Models\Operations\UpdateInventoryForAnItemApplicationJSONQuantityUnitEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateInventoryForAnItemJsonRequest();
    $request->requestBody = new UpdateInventoryForAnItemApplicationJSON();
    $request->requestBody->quantity = new UpdateInventoryForAnItemApplicationJSONQuantity();
    $request->requestBody->quantity->amount = 4736.08;
    $request->requestBody->quantity->unit = UpdateInventoryForAnItemApplicationJSONQuantityUnitEnum::EACH;
    $request->requestBody->sku = 'quod';
    $request->wmConsumerChannelType = 'quod';
    $request->wmQosCorrelationId = 'esse';
    $request->wmSecAccessToken = 'totam';
    $request->wmSvcName = 'porro';
    $request->shipNode = 'dolorum';
    $request->sku = 'dicta';

    $response = $sdk->inventory->updateInventoryForAnItemJson($request);

    if ($response->updateInventoryForAnItemJSON200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateInventoryForAnItemRaw

Updates the inventory for a given item.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateInventoryForAnItemRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateInventoryForAnItemRawRequest();
    $request->requestBody = 'nam';
    $request->wmConsumerChannelType = 'officia';
    $request->wmQosCorrelationId = 'occaecati';
    $request->wmSecAccessToken = 'fugit';
    $request->wmSvcName = 'deleniti';
    $request->shipNode = 'hic';
    $request->sku = 'optio';

    $response = $sdk->inventory->updateInventoryForAnItemRaw($request);

    if ($response->updateInventoryForAnItemRaw200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateMultiNodeInventory

This API will update the inventory for an item across one or more fulfillment centers, known as ship nodes.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateMultiNodeInventoryRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateMultiNodeInventoryRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateMultiNodeInventoryRequestBodyInventories;
use \OpenAPI\OpenAPI\Models\Operations\UpdateMultiNodeInventoryRequestBodyInventoriesNodes;
use \OpenAPI\OpenAPI\Models\Operations\UpdateMultiNodeInventoryRequestBodyInventoriesNodesInputQty;
use \OpenAPI\OpenAPI\Models\Operations\UpdateMultiNodeInventoryRequestBodyInventoriesNodesInputQtyUnitEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateMultiNodeInventoryRequest();
    $request->requestBody = new UpdateMultiNodeInventoryRequestBody();
    $request->requestBody->inventories = new UpdateMultiNodeInventoryRequestBodyInventories();
    $request->requestBody->inventories->nodes = [
        new UpdateMultiNodeInventoryRequestBodyInventoriesNodes(),
        new UpdateMultiNodeInventoryRequestBodyInventoriesNodes(),
        new UpdateMultiNodeInventoryRequestBodyInventoriesNodes(),
    ];
    $request->wmConsumerChannelType = 'beatae';
    $request->wmQosCorrelationId = 'commodi';
    $request->wmSecAccessToken = 'molestiae';
    $request->wmSvcName = 'modi';
    $request->sku = 'qui';

    $response = $sdk->inventory->updateMultiNodeInventory($request);

    if ($response->updateMultiNodeInventory200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
