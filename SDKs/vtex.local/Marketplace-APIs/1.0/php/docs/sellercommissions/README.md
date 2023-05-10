# sellerCommissions

## Overview

Get sellers' data

### Available Operations

* [bulkUpsertSellerCommissions](#bulkupsertsellercommissions) - Upsert Seller Commissions in Bulk
* [listSellerCommissions](#listsellercommissions) - List Seller Commissions by seller ID
* [removeSellerCommissions](#removesellercommissions) - Remove Seller Commissions by Category ID
* [retrieveSellerCommissions](#retrievesellercommissions) - Get Seller Commissions by Category ID
* [upsertSellerCommissions](#upsertsellercommissions) - Upsert Seller Commissions by Category ID

## bulkUpsertSellerCommissions

This endpoint is used by marketplace operators to define comissions for multiple categories.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BulkUpsertSellerCommissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\BulkUpsertSellerCommissionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BulkUpsertSellerCommissionsRequest();
    $request->accept = 'dolorum';
    $request->contentType = 'dicta';
    $request->requestBody = [
        new BulkUpsertSellerCommissionsRequest(),
        new BulkUpsertSellerCommissionsRequest(),
        new BulkUpsertSellerCommissionsRequest(),
    ];
    $request->accountName = 'officia';
    $request->environment = 'occaecati';
    $request->sellerId = 'fugit';

    $response = $sdk->sellerCommissions->bulkUpsertSellerCommissions($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSellerCommissions

This endpoint retrieves all comissions configured for a specific seller.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListSellerCommissionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListSellerCommissionsRequest();
    $request->accept = 'deleniti';
    $request->contentType = 'hic';
    $request->accountName = 'optio';
    $request->environment = 'totam';
    $request->sellerId = 'beatae';

    $response = $sdk->sellerCommissions->listSellerCommissions($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## removeSellerCommissions

This endpoint removes a seller comission on the selected category.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RemoveSellerCommissionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RemoveSellerCommissionsRequest();
    $request->accept = 'commodi';
    $request->contentType = 'molestiae';
    $request->accountName = 'modi';
    $request->categoryId = 'qui';
    $request->environment = 'impedit';
    $request->sellerId = 'cum';

    $response = $sdk->sellerCommissions->removeSellerCommissions($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## retrieveSellerCommissions

This endpoint retrieves seller comissions applied to the selected category.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RetrieveSellerCommissionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetrieveSellerCommissionsRequest();
    $request->accept = 'esse';
    $request->contentType = 'ipsum';
    $request->accountName = 'excepturi';
    $request->categoryId = 'aspernatur';
    $request->environment = 'perferendis';
    $request->sellerId = 'ad';

    $response = $sdk->sellerCommissions->retrieveSellerCommissions($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## upsertSellerCommissions

This endpoint is used by marketplace operators to define comissions for a single category, by ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpsertSellerCommissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpsertSellerCommissionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpsertSellerCommissionsRequest();
    $request->accept = 'natus';
    $request->contentType = 'sed';
    $request->upsertSellerCommissionsRequest = new UpsertSellerCommissionsRequest();
    $request->upsertSellerCommissionsRequest->categoryFullPath = 'iste';
    $request->upsertSellerCommissionsRequest->categoryId = 'dolor';
    $request->upsertSellerCommissionsRequest->freightCommissionPercentage = 6169.34;
    $request->upsertSellerCommissionsRequest->productCommissionPercentage = 3864.89;
    $request->accountName = 'hic';
    $request->categoryId = 'saepe';
    $request->environment = 'fuga';
    $request->sellerId = 'in';

    $response = $sdk->sellerCommissions->upsertSellerCommissions($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
