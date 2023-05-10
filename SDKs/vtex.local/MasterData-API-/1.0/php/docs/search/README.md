# search

## Overview

The `search` API is intended to query a collection of documents.	

### Available Operations

* [searchdocuments](#searchdocuments) - Search documents

## searchdocuments

Search documents by the query parameters described below.

> Avoid sending too many requests with wildcards (`*`) in the search parameters or that use the `keyword` parameter. This may lead to this endpoint being temporarily blocked for your account. If this happens you will receive an error with status code `503`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SearchdocumentsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchdocumentsRequest();
    $request->accept = 'id';
    $request->contentType = 'saepe';
    $request->restRange = 'eius';
    $request->fields = 'aspernatur';
    $request->keyword = 'perferendis';
    $request->schema = 'amet';
    $request->sort = 'optio';
    $request->where = 'accusamus';
    $request->acronym = 'ad';

    $response = $sdk->search->searchdocuments($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
