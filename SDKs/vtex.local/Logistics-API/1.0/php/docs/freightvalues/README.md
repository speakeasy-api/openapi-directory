# freightValues

### Available Operations

* [createUpdateFreightValues](#createupdatefreightvalues) - Create/update freight values
* [freightValues](#freightvalues) - List freight values

## createUpdateFreightValues

Creates or updates the freight values of your store's carriers. Learn more in [Shipping rate template](https://help.vtex.com/en/tutorial/planilha-de-frete--tutorials_127#).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateUpdateFreightValuesRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateUpdateFreightValuesCreateUpdateFreightValuesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateUpdateFreightValuesRequest();
    $request->accept = 'repellat';
    $request->contentType = 'mollitia';
    $request->requestBody = [
        new CreateUpdateFreightValuesCreateUpdateFreightValuesRequest(),
        new CreateUpdateFreightValuesCreateUpdateFreightValuesRequest(),
        new CreateUpdateFreightValuesCreateUpdateFreightValuesRequest(),
    ];
    $request->carrierId = 'carrier123';

    $response = $sdk->freightValues->createUpdateFreightValues($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## freightValues

Lists freight values apointed to your store's carriers, searching by carrier ID and postal code (`cep`).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\FreightValuesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FreightValuesRequest();
    $request->accept = 'numquam';
    $request->contentType = 'commodi';
    $request->carrierId = 'carrier-123';
    $request->cep = '12345000';

    $response = $sdk->freightValues->freightValues($request);

    if ($response->freightValues200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
