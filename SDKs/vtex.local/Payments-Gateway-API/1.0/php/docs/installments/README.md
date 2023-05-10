# installments

## Overview

We provided payment methods configuration that allow our sellers to configure installment options and from that configuration we generate an installment service.

### Available Operations

* [installmentsoptions](#installmentsoptions) - Installments options

## installmentsoptions

Returns the best installment options according to the informed params.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\InstallmentsoptionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new InstallmentsoptionsRequest();
    $request->accept = 'application/json';
    $request->contentType = 'application/json';
    $request->xPROVIDERAPIAppKey = '{{X-PROVIDER-API-AppKey}}';
    $request->xPROVIDERAPIAppToken = '{{X-PROVIDER-API-AppToken}}';
    $request->requestPaymentDetails0Bin = 411111;
    $request->requestPaymentDetails0Id = 2;
    $request->requestPaymentDetails0Value = 10;
    $request->requestSalesChannel = 1;
    $request->requestValue = 10;

    $response = $sdk->installments->installmentsoptions($request);

    if ($response->validRequest !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
