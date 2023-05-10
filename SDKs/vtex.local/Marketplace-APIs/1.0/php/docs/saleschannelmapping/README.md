# salesChannelMapping

## Overview

Mapping between a marketplace's sales channel and a seller's affiliate.

### Available Operations

* [retrieveMapping](#retrievemapping) - Get Sales Channel Mapping Data
* [upsertMapping](#upsertmapping) - Upsert Sales Channel Mapping

## retrieveMapping

Retrieves information about the mapping between marketplace's sales channels and a specific seller.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RetrieveMappingRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetrieveMappingRequest();
    $request->accept = 'repellendus';
    $request->contentType = 'sapiente';
    $request->accountName = 'quo';
    $request->an = 'odit';
    $request->environment = 'at';
    $request->sellerId = 'at';

    $response = $sdk->salesChannelMapping->retrieveMapping($request);

    if ($response->retrieveMapping200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## upsertMapping

This endpoint allows the marketplace to map its sales channels with a seller's [affiliate](https://help.vtex.com/en/tutorial/configuring-affiliates--tutorials_187). The seller can have multiple sales channels associated with the same marketplace, by creating different affiliates. The mapping enables the seller to segment catalog, prices, inventory, logistics, and payments in the marketplace.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpsertMappingRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpsertMappingRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpsertMappingRequest();
    $request->accept = 'maiores';
    $request->contentType = 'molestiae';
    $request->requestBody = [
        new UpsertMappingRequest(),
        new UpsertMappingRequest(),
        new UpsertMappingRequest(),
        new UpsertMappingRequest(),
    ];
    $request->accountName = 'quod';
    $request->an = 'esse';
    $request->environment = 'totam';
    $request->sellerId = 'porro';

    $response = $sdk->salesChannelMapping->upsertMapping($request);

    if ($response->upsertMapping200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
