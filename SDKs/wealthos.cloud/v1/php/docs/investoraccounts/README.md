# investorAccounts

## Overview

An investor account is designed to manage a group of pots attached to a single financial product. A user can maintain multiple accounts for a given financial product if the product regulations support this setup.

### Available Operations

* [getAllinvestorAccounts](#getallinvestoraccounts) - Retrieve all the investor accounts
* [getinvestorAccount](#getinvestoraccount) - Retrieve existing investor account from account id

## getAllinvestorAccounts

Retrieve all the investor accounts

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAllinvestorAccountsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAllinvestorAccountsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAllinvestorAccountsRequest();
    $request->accountId = 'temporibus';
    $request->financialProductId = 'laborum';
    $request->investorId = 'quasi';
    $request->pageNumber = 'reiciendis';
    $request->pageSize = 'voluptatibus';
    $request->status = 'vero';
    $request->xApiKey = 'nihil';

    $requestSecurity = new GetAllinvestorAccountsSecurity();
    $requestSecurity->apiSecretKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->investorAccounts->getAllinvestorAccounts($request, $requestSecurity);

    if ($response->getAllinvestorAccounts200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getinvestorAccount

Retrieve existing investor account from account id

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetinvestorAccountRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetinvestorAccountSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetinvestorAccountRequest();
    $request->accountId = 'praesentium';
    $request->xApiKey = 'voluptatibus';

    $requestSecurity = new GetinvestorAccountSecurity();
    $requestSecurity->apiSecretKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->investorAccounts->getinvestorAccount($request, $requestSecurity);

    if ($response->getinvestorAccount200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
