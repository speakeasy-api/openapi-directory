# currencyExchangeRates

## Overview

To change the description use /examples/TagsDescriptions.json

### Available Operations

* [createExchangeRate](#createexchangerate) - Adding currency exchange rates.
* [getByIsoCode](#getbyisocode) - Returns currency exchange rates.

## createExchangeRate

Adding currency exchange rates via API

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateExchangeRateRequest;
use \OpenAPI\OpenAPI\Models\Shared\CurrencyHistoryDTO;
use \OpenAPI\OpenAPI\Models\Shared\TimeDTO;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateExchangeRateRequest();
    $request->currencyHistoryDTO = new CurrencyHistoryDTO();
    $request->currencyHistoryDTO->dateFrom = new TimeDTO();
    $request->currencyHistoryDTO->dateFrom->value = 674848;
    $request->currencyHistoryDTO->exchangeRate = 'totam';
    $request->currencyHistoryDTO->lastModification = new TimeDTO();
    $request->currencyHistoryDTO->lastModification->value = 276894;
    $request->currencyHistoryDTO->originDetails = 'aspernatur';
    $request->currencyHistoryDTO->publicationDate = new TimeDTO();
    $request->currencyHistoryDTO->publicationDate->value = 174909;
    $request->isoCode = 'distinctio';

    $response = $sdk->currencyExchangeRates->createExchangeRate($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getByIsoCode

Returns currency exchange rates.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetByIsoCodeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetByIsoCodeRequest();
    $request->isoCode = 'facilis';

    $response = $sdk->currencyExchangeRates->getByIsoCode($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
