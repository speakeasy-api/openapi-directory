# customData

### Available Operations

* [removesinglecustomfieldvalue](#removesinglecustomfieldvalue) - Remove single custom field value
* [setMultipleCustomFieldValues](#setmultiplecustomfieldvalues) - Set multiple custom field values
* [setSingleCustomFieldValue](#setsinglecustomfieldvalue) - Set single custom field value

## removesinglecustomfieldvalue

Your account may create `apps`, which contain custom fields, through the [Update orderForm configuration](https://developers.vtex.com/reference#updateorderformconfiguration) request. The value of a specific custom field can be removed by this request.

To do that, you need to inform in the URL the ID of the app you created with the configuration API (`appId`).

You also need to iform the specific field created in this app (identified by the `appFieldName` parameter, also passed through the URL) whose value you want to remove.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RemovesinglecustomfieldvalueRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RemovesinglecustomfieldvalueRequest();
    $request->accept = 'sapiente';
    $request->contentType = 'architecto';
    $request->appFieldName = 'mollitia';
    $request->appId = 'dolorem';
    $request->orderFormId = 'culpa';

    $response = $sdk->customData->removesinglecustomfieldvalue($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## setMultipleCustomFieldValues

Your account may create `apps`, which contain custom fields, through the [Update orderForm configuration](https://developers.vtex.com/reference/configuration#updateorderformconfiguration) request. The values of these custom fields can then be updated by this request.

To do that, you need to inform the ID of the app you created with the configuration API (`appId`).

In the body of the request, for each field created in this app (`appFieldName`) you will inform a value (`appFieldValue`).

The [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SetMultipleCustomFieldValuesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SetMultipleCustomFieldValuesRequest();
    $request->accept = 'consequuntur';
    $request->contentType = 'repellat';
    $request->requestBody = [
        'occaecati' => 'numquam',
        'commodi' => 'quam',
        'molestiae' => 'velit',
    ];
    $request->appId = 'error';
    $request->orderFormId = 'quia';

    $response = $sdk->customData->setMultipleCustomFieldValues($request);

    if ($response->setMultipleCustomFieldValues200ApplicationJSONAny !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## setSingleCustomFieldValue

Your account may create `apps`, which contain custom fields, through the [Update orderForm configuration](https://developers.vtex.com/reference#updateorderformconfiguration) request. The value of a specific custom field can then be updated by this request.

To do that, you need to inform in the URL the ID of the app you created with the configuration API (`appId`).

In the body of the request, you will inform the new value (`appFieldValue`, passed through the body) of the specific field created in this app (identified by the `appFieldName` parameter, passed through the URL).

The [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SetSingleCustomFieldValueRequest;
use \OpenAPI\OpenAPI\Models\Shared\SetsinglecustomfieldvalueRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SetSingleCustomFieldValueRequest();
    $request->accept = 'quis';
    $request->contentType = 'vitae';
    $request->setsinglecustomfieldvalueRequest = new SetsinglecustomfieldvalueRequest();
    $request->setsinglecustomfieldvalueRequest->value = 'laborum';
    $request->appFieldName = 'animi';
    $request->appId = 'enim';
    $request->orderFormId = 'odit';

    $response = $sdk->customData->setSingleCustomFieldValue($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
