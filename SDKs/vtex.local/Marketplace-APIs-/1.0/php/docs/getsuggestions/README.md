# getSuggestions

## Overview

Search and filter all suggestions using specific criteria

### Available Operations

* [getSuggestion](#getsuggestion) - Get SKU Suggestion by ID
* [getsuggestions](#getsuggestions) - Get all SKU suggestions

## getSuggestion

This endpoint retrieves the data of a specific SKU sent by the seller, to the marketplace. Marketplaces or external matchers can call this endpoint when they want to check the information about a single SKU. 

Note that all the information sent by the seller will be in the [content] object. All remaining information in this endpoint's response is given by the Matcher. 

Matcher rates received SKUs by correlating the data sent by sellers, to existing fields in the marketplace. The calculation of these scores determines whether the product has been: 

`Approved`: score equal to or greater than 80 points. 

`Pending`: from 31 to 79 points.

`Denied`: from 0 to 30 points. 

Note that  if the autoApprove setting is enabled, the SKUs will be approved, regardless of the Score.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSuggestionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSuggestionRequest();
    $request->accept = 'nulla';
    $request->contentType = 'corrupti';
    $request->accountName = 'illum';
    $request->sellerId = 'vel';
    $request->sellerSkuId = 'error';

    $response = $sdk->getSuggestions->getSuggestion($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getsuggestions

This endpoint retrieves a list of all SKUs sent by the seller for the Marketplace's approval. Marketplace operators should use this endpoint whenever they want to check the full list of received SKUs and their  information. 

Note that all the information sent by the seller will be in the [content] object. All remaining information in this endpoint's response is given by the Matcher. 

Matcher rates received SKUs by correlating the data sent by sellers, to existing fields in the marketplace. The calculation of these scores determines whether the product has been: 

`Approved`: score equal to or greater than 80 points. 

`Pending`: from 31 to 79 points.

`Denied`: from 0 to 30 points. 

Note that  if the autoApprove setting is enabled, the SKUs will be approved, regardless of the Score.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetsuggestionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetsuggestionsRequest();
    $request->accept = 'deserunt';
    $request->contentType = 'suscipit';
    $request->from = 437587;
    $request->to = 297534;
    $request->accountName = 'debitis';
    $request->hasmapping = 'true';
    $request->matcherid = 'ipsa';
    $request->q = 'delectus';
    $request->seller = 'tempora';
    $request->status = 'accepted';
    $request->type = 'new';

    $response = $sdk->getSuggestions->getsuggestions($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
