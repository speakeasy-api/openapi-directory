# manageSuggestions

## Overview

Send or delete SKU suggestions from the seller to marketplace

### Available Operations

* [deleteSuggestion](#deletesuggestion) - Delete SKU Suggestion
* [saveSuggestion](#savesuggestion) - Send SKU Suggestion

## deleteSuggestion

This endpoint deletes a chosen SKU suggestion. Only one SKU should be deleted per request. This request cannot be undone. A workaround to revert its action, is to send the suggestion again, through the Send Suggestion API.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSuggestionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSuggestionRequest();
    $request->accept = 'quis';
    $request->contentType = 'veritatis';
    $request->accountName = 'deserunt';
    $request->sellerId = 'perferendis';
    $request->sellerSkuId = 'ipsam';

    $response = $sdk->manageSuggestions->deleteSuggestion($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## saveSuggestion

This request is used by the seller when it wants to suggest that one of their SKUs is sold in the marketplace.

Before using this request, the seller should always use the [Change Notification](https://developers.vtex.com/vtex-rest-api/reference/catalog-api-get-seller-sku-notification) request in order to check if the SKU already exists in the marketplace. If it doesn't, then this is the next call in the SKU integration flow.

In the Send Suggestion request, the seller must send information about the SKU, such as the product and SKU name, the seller ID, and the image URL. All parameters are explained below. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SaveSuggestionRequest;
use \OpenAPI\OpenAPI\Models\Shared\SaveSuggestionRequest;
use \OpenAPI\OpenAPI\Models\Shared\Image;
use \OpenAPI\OpenAPI\Models\Shared\SaveSuggestionRequestPricing;
use \OpenAPI\OpenAPI\Models\Shared\ProductSpecification;
use \OpenAPI\OpenAPI\Models\Shared\SkuSpecification;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SaveSuggestionRequest();
    $request->accept = 'application/vnd.vtex.suggestion.v0+json';
    $request->contentType = 'repellendus';
    $request->saveSuggestionRequest = new SaveSuggestionRequest();
    $request->saveSuggestionRequest->availableQuantity = 957156;
    $request->saveSuggestionRequest->brandName = 'quo';
    $request->saveSuggestionRequest->categoryFullPath = 'odit';
    $request->saveSuggestionRequest->ean = 'at';
    $request->saveSuggestionRequest->height = 870088;
    $request->saveSuggestionRequest->images = [
        new Image(),
        new Image(),
        new Image(),
        new Image(),
    ];
    $request->saveSuggestionRequest->length = 473608;
    $request->saveSuggestionRequest->measurementUnit = 'quod';
    $request->saveSuggestionRequest->pricing = new SaveSuggestionRequestPricing();
    $request->saveSuggestionRequest->pricing->currency = 'quod';
    $request->saveSuggestionRequest->pricing->currencySymbol = 'esse';
    $request->saveSuggestionRequest->pricing->salePrice = 520478;
    $request->saveSuggestionRequest->productDescription = 'porro';
    $request->saveSuggestionRequest->productId = 'dolorum';
    $request->saveSuggestionRequest->productName = 'dicta';
    $request->saveSuggestionRequest->productSpecifications = [
        new ProductSpecification(),
        new ProductSpecification(),
        new ProductSpecification(),
    ];
    $request->saveSuggestionRequest->refId = 'officia';
    $request->saveSuggestionRequest->sellerId = 'occaecati';
    $request->saveSuggestionRequest->sellerStockKeepingUnitId = 143353;
    $request->saveSuggestionRequest->skuName = 'deleniti';
    $request->saveSuggestionRequest->skuSpecifications = [
        new SkuSpecification(),
        new SkuSpecification(),
        new SkuSpecification(),
        new SkuSpecification(),
    ];
    $request->saveSuggestionRequest->unitMultiplier = 758616;
    $request->saveSuggestionRequest->weight = 521848;
    $request->saveSuggestionRequest->width = 105907;
    $request->accountName = 'commodi';
    $request->sellerId = 'molestiae';
    $request->sellerSkuId = 'modi';

    $response = $sdk->manageSuggestions->saveSuggestion($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
