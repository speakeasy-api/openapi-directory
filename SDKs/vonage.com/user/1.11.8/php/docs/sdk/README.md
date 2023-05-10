# SDK

## Overview

The Vonage Business Cloud User API enables you to retrieve information about users.

Your application must subscribe to the Provisioning API suite to use this API.


### Available Operations

* [userCtrlGetUserByID](#userctrlgetuserbyid) - Get user data by account ID and user ID
* [userCtrlGetUsers](#userctrlgetusers) - Get account users data by account ID

## userCtrlGetUserByID

Get user data by account ID and user ID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UserCtrlGetUserByIDRequest;
use \OpenAPI\OpenAPI\Models\Operations\UserCtrlGetUserByIDSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UserCtrlGetUserByIDRequest();
    $request->accountId = 'distinctio';
    $request->userId = 8442.66;

    $requestSecurity = new UserCtrlGetUserByIDSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->sdk->userCtrlGetUserByID($request, $requestSecurity);

    if ($response->userHalResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## userCtrlGetUsers

Get account users data by account ID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UserCtrlGetUsersRequest;
use \OpenAPI\OpenAPI\Models\Operations\UserCtrlGetUsersSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UserCtrlGetUsersRequest();
    $request->accountId = 'unde';
    $request->email = 'Karley_Stamm@hotmail.com';
    $request->firstName = 'Luna';
    $request->lastName = 'Hoppe';
    $request->loginName = 'iure';
    $request->page = 2975.34;
    $request->pageSize = 8917.73;

    $requestSecurity = new UserCtrlGetUsersSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->sdk->userCtrlGetUsers($request, $requestSecurity);

    if ($response->usersHalResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
