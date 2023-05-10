<!-- Start SDK Example Usage -->
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
<!-- End SDK Example Usage -->