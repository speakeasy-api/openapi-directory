# addresses

### Available Operations

* [createNewCustomerAddress](#createnewcustomeraddress) - Create new customer address
* [deleteCustomerAddress](#deletecustomeraddress) - Delete customer address
* [updateCustomerAddress](#updatecustomeraddress) - Update customer address

## createNewCustomerAddress

Creates new customer address. 

> You can use this request to create customer addresses according to any `AD` schema. Because of this, you are not restricted to using the fields exemplified below in your requests. But you should be aware of the fields allowed or required for the schemas you are using. Learn more about how to use [Master Data v2 schemas](https://developers.vtex.com/vtex-rest-api/docs/master-data-schema-lifecycle).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateNewCustomerAddressRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateUpdateAddressRequests;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateNewCustomerAddressRequest();
    $request->accept = 'application/json';
    $request->contentType = 'application/json';
    $request->schema = 'schema';
    $request->createUpdateAddressRequests = new CreateUpdateAddressRequests();
    $request->createUpdateAddressRequests->addressName = 'My house';
    $request->createUpdateAddressRequests->addressType = 'residential';
    $request->createUpdateAddressRequests->city = 'Rio de Janeiro';
    $request->createUpdateAddressRequests->complement = '3rd floor';
    $request->createUpdateAddressRequests->country = 'BRA';
    $request->createUpdateAddressRequests->neighborhood = 'Botafogo';
    $request->createUpdateAddressRequests->number = '300';
    $request->createUpdateAddressRequests->postalCode = '12345-000';
    $request->createUpdateAddressRequests->receiverName = 'Clark Kent.';
    $request->createUpdateAddressRequests->reference = 'Grey building';
    $request->createUpdateAddressRequests->state = 'Rio de Janeiro';
    $request->createUpdateAddressRequests->street = 'Praia de Botafogo';
    $request->createUpdateAddressRequests->userId = '7e03m794-a33a-11e9-84rt6-0adfa64s5a8e';

    $response = $sdk->addresses->createNewCustomerAddress($request);

    if ($response->documentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteCustomerAddress

Deletes a customer address.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCustomerAddressRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteCustomerAddressRequest();
    $request->accept = 'application/json';
    $request->contentType = 'application/json';
    $request->id = 'Client-b818cbda-e489-11e6-94f4-0ac138d2d42e';

    $response = $sdk->addresses->deleteCustomerAddress($request);

    if ($response->documentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateCustomerAddress

Partially updates a customer address.

> You can use this request to update customer addresses according to any `AD` schema. Because of this, you are not restricted to using the fields exemplified below in your requests. But you should be aware of the fields allowed or required for the schemas you are using. Learn more about how to use [Master Data v2 schemas](https://developers.vtex.com/vtex-rest-api/docs/master-data-schema-lifecycle).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCustomerAddressRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateUpdateAddressRequests;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateCustomerAddressRequest();
    $request->accept = 'application/json';
    $request->contentType = 'application/json';
    $request->schema = 'schema';
    $request->createUpdateAddressRequests = new CreateUpdateAddressRequests();
    $request->createUpdateAddressRequests->addressName = 'My house';
    $request->createUpdateAddressRequests->addressType = 'residential';
    $request->createUpdateAddressRequests->city = 'Rio de Janeiro';
    $request->createUpdateAddressRequests->complement = '3rd floor';
    $request->createUpdateAddressRequests->country = 'BRA';
    $request->createUpdateAddressRequests->neighborhood = 'Botafogo';
    $request->createUpdateAddressRequests->number = '300';
    $request->createUpdateAddressRequests->postalCode = '12345-000';
    $request->createUpdateAddressRequests->receiverName = 'Clark Kent.';
    $request->createUpdateAddressRequests->reference = 'Grey building';
    $request->createUpdateAddressRequests->state = 'Rio de Janeiro';
    $request->createUpdateAddressRequests->street = 'Praia de Botafogo';
    $request->createUpdateAddressRequests->userId = '7e03m794-a33a-11e9-84rt6-0adfa64s5a8e';
    $request->id = 'Client-b818cbda-e489-11e6-94f4-0ac138d2d42e';

    $response = $sdk->addresses->updateCustomerAddress($request);

    if ($response->documentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
