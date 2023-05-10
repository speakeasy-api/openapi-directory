# userOrders

### Available Operations

* [userorderdetails](#userorderdetails) - Retrieve user order details
* [userorderslist](#userorderslist) - Retrieve user's orders

## userorderdetails

Lists all details from a user's order, through client's perspective. 

> Note that these requests are meant to be made by **Call center operator** profiles. Otherwise, they will return only orders from the same email making the request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UserorderdetailsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UserorderdetailsRequest();
    $request->accept = 'quis';
    $request->contentType = 'vitae';
    $request->clientEmail = 'customer@mail.com';
    $request->orderId = '1172452900788-01';

    $response = $sdk->userOrders->userorderdetails($request);

    if ($response->userorderdetails !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## userorderslist

Lists all orders from a given client, filtering by their email. 

> Note that these requests are meant to be made by **Call center operator** profiles. Otherwise, they will return only orders from the same email making the request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UserorderslistRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UserorderslistRequest();
    $request->accept = 'laborum';
    $request->contentType = 'animi';
    $request->clientEmail = 'customer@mail.com';
    $request->page = '15';
    $request->perPage = '15';

    $response = $sdk->userOrders->userorderslist($request);

    if ($response->userorderslist !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
