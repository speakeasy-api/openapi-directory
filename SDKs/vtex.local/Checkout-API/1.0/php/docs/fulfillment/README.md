# fulfillment

### Available Operations

* [getAddressByPostalCode](#getaddressbypostalcode) - Get address by postal code
* [listPickupPpointsByLocation](#listpickupppointsbylocation) - List pickup points by location

## getAddressByPostalCode

Retrieves address information for a given postal code and country.

This request can be used to implement auto complete functionality when a customer needs to fill in an address.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAddressByPostalCodeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAddressByPostalCodeRequest();
    $request->accept = 'quo';
    $request->contentType = 'sequi';
    $request->countryCode = 'VC';
    $request->postalCode = '68006';

    $response = $sdk->fulfillment->getAddressByPostalCode($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listPickupPpointsByLocation

Retrieves information on pickup points close to a given location determined by geocoordinates or postal code.

The pickup points returned are not necessarily all active ones. Make sure to validate the information consumed by integrations.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListPickupPpointsByLocationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListPickupPpointsByLocationRequest();
    $request->accept = 'temporibus';
    $request->contentType = 'laborum';
    $request->countryCode = 'BI';
    $request->geoCoordinates = [
        -47.924747467041016,
        -47.924747467041016,
        -47.924747467041016,
        -47.924747467041016,
    ];
    $request->postalCode = '84590-6470';

    $response = $sdk->fulfillment->listPickupPpointsByLocation($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
