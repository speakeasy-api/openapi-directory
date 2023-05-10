<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateClientAddressRequest;
use \OpenAPI\OpenAPI\Models\Shared\Address;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateClientAddressRequest();
    $request->accept = 'application/json';
    $request->contentType = 'application/json';
    $request->address = new Address();
    $request->address->administrativeAreaLevel1 = 'RJ';
    $request->address->countryCode = 'BR';
    $request->address->countryName = 'Brasil';
    $request->address->locality = 'Locality';
    $request->address->localityAreaLevel1 = 'Locality area';
    $request->address->postalCode = '20200-000';
    $request->address->route = '51';
    $request->address->streetNumber = '999';
    $request->alternativeKey = 'email';
    $request->profileId = '70caf394-8534-447e-a0ca-1803c669c771';

    $response = $sdk->addresses->createClientAddress($request);

    if ($response->createClientAddress201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->