# sla

### Available Operations

* [calculateSLA](#calculatesla) - Calculate SLA

## calculateSLA

Endpoint used by the checkout to calculate the Service Level Agreement (SLA), a contract between the store and shoppers on the order's fulfillment conditions, such as the shipping estimated date. 

The calculation of the estimated date considers the [shipping policy](https://help.vtex.com/en/tutorial/shipping-policy--tutorials_140) and [loading dock](https://help.vtex.com/en/tutorial/loading-dock--5DY8xHEjOLYDVL41Urd5qj) related to the order.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CalculateSLARequest;
use \OpenAPI\OpenAPI\Models\Operations\CalculateSLACalculateSLARequest;
use \OpenAPI\OpenAPI\Models\Operations\CalculateSLACalculateSLARequestItem3;
use \OpenAPI\OpenAPI\Models\Operations\CalculateSLACalculateSLARequestItem3Dimension;
use \OpenAPI\OpenAPI\Models\Operations\CalculateSLACalculateSLARequestItem3KitItem;
use \OpenAPI\OpenAPI\Models\Operations\CalculateSLACalculateSLARequestItem3KitItemDimension;
use \OpenAPI\OpenAPI\Models\Operations\CalculateSLACalculateSLARequestLocation3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CalculateSLARequest();
    $request->accept = 'natus';
    $request->contentType = 'omnis';
    $request->requestBody = [
        new CalculateSLACalculateSLARequest(),
        new CalculateSLACalculateSLARequest(),
    ];

    $response = $sdk->sla->calculateSLA($request);

    if ($response->calculateSLA200ApplicationJSONArrays !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
