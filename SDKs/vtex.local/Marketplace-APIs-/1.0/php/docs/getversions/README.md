# getVersions

## Overview

Search and filter all versions of suggestions, using specific criteria

### Available Operations

* [getSuggestionbyversion](#getsuggestionbyversion) - Get Version by ID
* [getVersions](#getversions) - Get all Versions

## getSuggestionbyversion

Whenever an SKU Suggestion is updated or changed, a new version of the original one is created. All versions are logged, so you can search for previous our current states of SKU suggestions. 

This endpoint retrieves a specific *version* of a chosen SKU sent by the seller. Add the Seller's ID, Seller's SKU ID, and version ID in the path to detail your search.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSuggestionbyversionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSuggestionbyversionRequest();
    $request->accept = 'suscipit';
    $request->contentType = 'molestiae';
    $request->accountName = 'minus';
    $request->sellerId = 'placeat';
    $request->sellerskuid = 'voluptatum';
    $request->version = 'iusto';

    $response = $sdk->getVersions->getSuggestionbyversion($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getVersions

Whenever an SKU Suggestion is updated or changed, a new version of the original one is created. All versions are logged, so you can search for previous our current states of SKU suggestions. 

This endpoint retrieves the data of *all* previous and latest versions of a specific SKU suggestion, sent by the seller. Whenever an SKU is updated, it is important to map previous versions, to compare and identify changes. 

The response's object [latestversion] provides the information of the most recent version of that SKU suggestion.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetVersionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetVersionsRequest();
    $request->accept = 'excepturi';
    $request->contentType = 'nisi';
    $request->accountName = 'recusandae';
    $request->sellerId = 'temporibus';
    $request->sellerskuid = 'ab';

    $response = $sdk->getVersions->getVersions($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
