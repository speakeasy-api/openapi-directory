# region

### Available Operations

* [getSellersByRegion](#getsellersbyregion) - Get sellers by region or address

## getSellersByRegion

Retrieve a list of sellers that cater to a specific region or address, according to your set up of our [regionalization feature](https://help.vtex.com/en/tutorial/setting-up-price-and-availability-of-skus-by-region--12ne58BmvYsYuGsimmugoc#). Learn more about [Region v2](https://developers.vtex.com/vtex-developer-docs/changelog/region-v2).

To access the list of sellers, you must choose one of the following methods:

1. Send the identification of the list of sellers (`regionId`) as a path parameter through the URL. Or;
2. Send the `country` (3-digit ISO code) and at least one of the two values (`postal Code` or `geo Coordinates`) as query parameters through the URL. For this method, it is also allowed to send both values (`postalCode` or `geoCoordinates`) in the same request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSellersByRegionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSellersByRegionRequest();
    $request->accept = 'quidem';
    $request->contentType = 'provident';
    $request->country = 'Qatar';
    $request->geoCoordinates = [
        -47.924747467041016,
        -47.924747467041016,
        -47.924747467041016,
    ];
    $request->postalCode = '59263-4664';
    $request->regionId = 'v2.1BB18CE648B5111D0933734ED83EC783';

    $response = $sdk->region->getSellersByRegion($request);

    if ($response->getSellersByRegion200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
