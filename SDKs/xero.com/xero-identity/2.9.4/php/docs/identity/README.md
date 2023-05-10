# identity

### Available Operations

* [deleteConnection](#deleteconnection) - Deletes a connection for this user (i.e. disconnect a tenant)
* [getConnections](#getconnections) - Retrieves the connections for this user

## deleteConnection

Override the base server url that include version

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteConnectionRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteConnectionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteConnectionRequest();
    $request->id = 'a05dfc2d-df7c-4c78-8a1b-a928fc816742';

    $requestSecurity = new DeleteConnectionSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->identity->deleteConnection($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getConnections

Override the base server url that include version

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetConnectionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetConnectionsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetConnectionsRequest();
    $request->authEventId = 'cb739205-9293-496f-aa75-96eb10faaa23';

    $requestSecurity = new GetConnectionsSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->identity->getConnections($request, $requestSecurity);

    if ($response->connections !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
