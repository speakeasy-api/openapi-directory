# infrastructure

## Overview

Infra APIs

### Available Operations

* [getNode](#getnode) - Show node details
* [listNodes](#listnodes) - List nodes

## getNode

Get details of infrastructure nodes. Only admin users can get this information. The proxy id is
required for adding a data source for selecting appropriate proxy node to add the data source.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetNodeRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNodeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNodeRequest();
    $request->id = 'ec7afedb-d80d-4f44-8a47-f9390c588809';

    $requestSecurity = new GetNodeSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->infrastructure->getNode($request, $requestSecurity);

    if ($response->node !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listNodes

Get list of infrastructure nodes. Only admin users can retrieve this information.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListNodesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new ListNodesSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->infrastructure->listNodes($requestSecurity);

    if ($response->nodeListResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
