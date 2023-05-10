# priceAssociation

### Available Operations

* [deleteVCustomPricesRulesPriceAssociationId](#deletevcustompricesrulespriceassociationid) - Disassociate price association by ID
* [getVCustomPricesRulesPriceAssociationId](#getvcustompricesrulespriceassociationid) - Get price association by ID
* [postVCustomPricesRules](#postvcustompricesrules) - Create price association
* [putVCustomPricesRulesPriceAssociationId](#putvcustompricesrulespriceassociationid) - Update price association by ID

## deleteVCustomPricesRulesPriceAssociationId

Disassociates a price association from a shopping scenario by its ID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteVCustomPricesRulesPriceAssociationIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteVCustomPricesRulesPriceAssociationIdRequest();
    $request->accept = 'illum';
    $request->contentType = 'vel';
    $request->priceAssociationId = 623564;

    $response = $sdk->priceAssociation->deleteVCustomPricesRulesPriceAssociationId($request);

    if ($response->deleteVCustomPricesRulesPriceAssociationId200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getVCustomPricesRulesPriceAssociationId

Retrieves price association for a shopping scenario by its ID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetVCustomPricesRulesPriceAssociationIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetVCustomPricesRulesPriceAssociationIdRequest();
    $request->accept = 'deserunt';
    $request->contentType = 'suscipit';
    $request->priceAssociationId = 437587;

    $response = $sdk->priceAssociation->getVCustomPricesRulesPriceAssociationId($request);

    if ($response->getVCustomPricesRulesPriceAssociationId200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postVCustomPricesRules

Creates a new price association for a shopping scenario

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostVCustomPricesRulesRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostVCustomPricesRulesRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostVCustomPricesRulesRequest();
    $request->accept = 'magnam';
    $request->contentType = 'debitis';
    $request->requestBody = new PostVCustomPricesRulesRequestBody();
    $request->requestBody->email = 'ipsa';
    $request->requestBody->orderType = 'delectus';
    $request->requestBody->pricetable = 'tempora';
    $request->requestBody->state = 'suscipit';

    $response = $sdk->priceAssociation->postVCustomPricesRules($request);

    if ($response->postVCustomPricesRules200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putVCustomPricesRulesPriceAssociationId

Updates a price association for a shopping scenario by its ID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutVCustomPricesRulesPriceAssociationIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutVCustomPricesRulesPriceAssociationIdRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutVCustomPricesRulesPriceAssociationIdRequest();
    $request->accept = 'molestiae';
    $request->contentType = 'minus';
    $request->requestBody = new PutVCustomPricesRulesPriceAssociationIdRequestBody();
    $request->requestBody->orderType = 'placeat';
    $request->requestBody->pricetable = 'voluptatum';
    $request->requestBody->state = 'iusto';
    $request->priceAssociationId = 568045;

    $response = $sdk->priceAssociation->putVCustomPricesRulesPriceAssociationId($request);

    if ($response->putVCustomPricesRulesPriceAssociationId200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
