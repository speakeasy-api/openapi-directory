# roles

### Available Operations

* [getListRoles](#getlistroles) - Get List of Roles
* [getRolesbyUser](#getrolesbyuser) - Get Roles by User/appKey
* [putRolesinUser](#putrolesinuser) - Put Roles in User/appKey
* [removeRolefromUser](#removerolefromuser) - Remove Role from User/appKey

## getListRoles

Returns a list of available roles. The response is divided in pages. The query parameter `numItems` defines the number of items in each page, and consequently the amount of pages for the whole list.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetListRolesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetListRolesRequest();
    $request->contentType = 'perferendis';
    $request->numItems = 368241;
    $request->pageNumber = 832620;
    $request->sort = 'sapiente';
    $request->sortType = 'quo';

    $response = $sdk->roles->getListRoles($request);

    if ($response->listRolesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRolesbyUser

Gets roles of a particular user or application key.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetRolesbyUserRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRolesbyUserRequest();
    $request->contentType = 'application/json';
    $request->userId = 'odit';

    $response = $sdk->roles->getRolesbyUser($request);

    if ($response->getRolesbyUser200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putRolesinUser

Allows you to add roles to a particular user or application key by specifying the list of roles' IDs on the request's body.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutRolesinUserRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutRolesinUserRequest();
    $request->requestBody = [
        870088,
        978619,
        473608,
        799159,
    ];
    $request->userId = 'quod';

    $response = $sdk->roles->putRolesinUser($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## removeRolefromUser

Allows you to remove a role from a specific user or application key. This method only allows the removal of one role per request. The role's ID must be specified on the request path, not on the request body.

> Note that a successful response returns a `204` response with an empty body. A deletion on a role or user that does not exist will also return a `204`. Thus, this method should not be used to verify the existence of a specific user or role.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RemoveRolefromUserRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RemoveRolefromUserRequest();
    $request->contentType = 'application/json';
    $request->roleId = 'esse';
    $request->userId = 'totam';

    $response = $sdk->roles->removeRolefromUser($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
