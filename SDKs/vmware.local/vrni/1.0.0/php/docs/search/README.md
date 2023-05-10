# search

## Overview

Search APIs

### Available Operations

* [searchEntities](#searchentities) - Search entities

## searchEntities

Using search API you can search vRealize Network Insight entities by specifying entity type and filter expression.
A filter expression is a predicate expression (similar to SQL where clause) used to define the search criteria.
Please refer to API Guide on details of how to construct filter expression. A successful search request will return a
list of entity ids that matches the search criteria.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\SearchRequest;
use \OpenAPI\OpenAPI\Models\Shared\AllEntityTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SortByClause;
use \OpenAPI\OpenAPI\Models\Shared\SortByClauseOrderEnum;
use \OpenAPI\OpenAPI\Models\Shared\TimeRange;
use \OpenAPI\OpenAPI\Models\Operations\SearchEntitiesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchRequest();
    $request->cursor = 'assumenda';
    $request->entityType = AllEntityTypeEnum::NSX_DISTRIBUTED_FIREWALL;
    $request->filter = 'omnis';
    $request->size = 966652;
    $request->sortBy = new SortByClause();
    $request->sortBy->field = 'odio';
    $request->sortBy->order = SortByClauseOrderEnum::DESC;
    $request->timeRange = new TimeRange();
    $request->timeRange->endTime = 13316;
    $request->timeRange->startTime = 465732;

    $requestSecurity = new SearchEntitiesSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->search->searchEntities($request, $requestSecurity);

    if ($response->pagedListResponseWithTime !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
