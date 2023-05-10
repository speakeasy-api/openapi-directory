# user

### Available Operations

* [createUser](#createuser) - Create User
* [getListUsers](#getlistusers) - Get List of Users
* [getUser](#getuser) - Get User

## createUser

Allows you to create a user by providing an email (mandatory) and name (optional). The email must be in a valid format. The success response will contain the generated `userId` for that user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\CreateUserRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateUserRequest();
    $request->email = 'Marielle_Carroll58@hotmail.com';
    $request->name = 'Cassandra Welch';

    $response = $sdk->user->createUser($request);

    if ($response->createUser200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getListUsers

Returns a list of registered users. The response is divided in pages. The query parameter `numItems` defines the number of items in each page, and consequently the amount of pages for the whole list.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetListUsersRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetListUsersRequest();
    $request->contentType = 'beatae';
    $request->numItems = 414662;
    $request->pageNumber = 473600;
    $request->sort = 'modi';
    $request->sortType = 'qui';

    $response = $sdk->user->getListUsers($request);

    if ($response->listUsersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUser

Allows you to get a user from the database, using the `userId` as the identifier.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetUserRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUserRequest();
    $request->contentType = 'application/json';
    $request->userId = 'impedit';

    $response = $sdk->user->getUser($request);

    if ($response->getUser200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
