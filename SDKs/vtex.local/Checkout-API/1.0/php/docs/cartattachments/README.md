# cartAttachments

### Available Operations

* [addClientPreferences](#addclientpreferences) - Add client preferences
* [addClientProfile](#addclientprofile) - Add client profile
* [addMarketingData](#addmarketingdata) - Add marketing data
* [addMerchantContextData](#addmerchantcontextdata) - Add merchant context data
* [addPaymentData](#addpaymentdata) - Add payment data
* [addShippingAddress](#addshippingaddress) - Add shipping address and select delivery option
* [getClientProfileByEmail](#getclientprofilebyemail) - Get client profile by email

## addClientPreferences

Use this request to include client preferences information to a given shopping cart.

The [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.

> This request has a time out of 12 seconds.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AddClientPreferencesRequest;
use \OpenAPI\OpenAPI\Models\Operations\AddClientPreferencesRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddClientPreferencesRequest();
    $request->accept = 'unde';
    $request->contentType = 'nulla';
    $request->requestBody = new AddClientPreferencesRequestBody();
    $request->requestBody->locale = 'corrupti';
    $request->requestBody->optinNewsLetter = false;
    $request->orderFormId = 'illum';

    $response = $sdk->cartAttachments->addClientPreferences($request);

    if ($response->addClientPreferences200ApplicationJSONAny !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## addClientProfile

Use this request to include client profile information to a given shopping cart.

The [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.

> This request has a time out of 12 seconds.

>⚠️ The authentication of this endpoint can change depending on the customer context. If you are modifying information from a customer with a complete profile on the store, the response will return the customer's data masked. You can only access the customer data with an authenticated request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AddClientProfileRequest;
use \OpenAPI\OpenAPI\Models\Operations\AddClientProfileRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddClientProfileRequest();
    $request->accept = 'vel';
    $request->contentType = 'error';
    $request->requestBody = new AddClientProfileRequestBody();
    $request->requestBody->corporateDocument = 'deserunt';
    $request->requestBody->corporateName = 'suscipit';
    $request->requestBody->corporatePhone = 'iure';
    $request->requestBody->document = 'magnam';
    $request->requestBody->documentType = 'debitis';
    $request->requestBody->email = 'Vincenzo.Goldner@gmail.com';
    $request->requestBody->firstName = 'Paxton';
    $request->requestBody->isCorporate = false;
    $request->requestBody->lastName = 'Schulist';
    $request->requestBody->phone = '553-980-3060 x3897';
    $request->requestBody->stateInscription = 'odit';
    $request->requestBody->tradeName = 'at';
    $request->orderFormId = 'at';

    $response = $sdk->cartAttachments->addClientProfile($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## addMarketingData

Use this request to include marketing information to a given shopping cart.

The [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.

> This request has a time out of 12 seconds.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AddMarketingDataRequest;
use \OpenAPI\OpenAPI\Models\Operations\AddMarketingDataRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddMarketingDataRequest();
    $request->accept = 'maiores';
    $request->contentType = 'molestiae';
    $request->requestBody = new AddMarketingDataRequestBody();
    $request->requestBody->coupon = 'quod';
    $request->requestBody->marketingTags = [
        'esse',
        'totam',
        'porro',
        'dolorum',
    ];
    $request->requestBody->utmCampaign = 'dicta';
    $request->requestBody->utmMedium = 'nam';
    $request->requestBody->utmSource = 'officia';
    $request->requestBody->utmiCampaign = 'occaecati';
    $request->requestBody->utmiPage = 'fugit';
    $request->requestBody->utmiPart = 'deleniti';
    $request->orderFormId = 'hic';

    $response = $sdk->cartAttachments->addMarketingData($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## addMerchantContextData

This endpoint is used for the merchant to add to the cart any relevant information that is related to the context of a specific order.

The [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.

> This request has a time out of 12 seconds.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AddMerchantContextDataRequest;
use \OpenAPI\OpenAPI\Models\Operations\AddMerchantContextDataRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\AddMerchantContextDataRequestBodySalesAssociateData;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddMerchantContextDataRequest();
    $request->accept = 'optio';
    $request->contentType = 'totam';
    $request->requestBody = new AddMerchantContextDataRequestBody();
    $request->requestBody->salesAssociateData = new AddMerchantContextDataRequestBodySalesAssociateData();
    $request->requestBody->salesAssociateData->salesAssociateId = 'beatae';
    $request->orderFormId = 'commodi';

    $response = $sdk->cartAttachments->addMerchantContextData($request);

    if ($response->addMerchantContextData200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## addPaymentData

Use this request to include payment information to a given shopping cart. The payment information attachment in the shopping cart does not determine the final order payment method in itself. However, it allows tha platform to update any relevant information that may be impacted by the payment method.

The [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.

> This request has a time out of 12 seconds.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AddPaymentDataRequest;
use \OpenAPI\OpenAPI\Models\Operations\AddPaymentDataRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\AddPaymentDataRequestBodyPayments;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddPaymentDataRequest();
    $request->accept = 'molestiae';
    $request->contentType = 'modi';
    $request->requestBody = new AddPaymentDataRequestBody();
    $request->requestBody->payments = [
        new AddPaymentDataRequestBodyPayments(),
    ];
    $request->orderFormId = 'impedit';

    $response = $sdk->cartAttachments->addPaymentData($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## addShippingAddress

Use this request to include shipping information and/or selected delivery option to a given shopping cart.

To add shipping addresses send the `selectedAddresses` array. For delivery option use the `logisticsInfo` array.

The [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.

> This request has a time out of 12 seconds.

>⚠️ The authentication of this endpoint can change depending on the customer context. If you are modifying information from a customer with a complete profile on the store, the response will return the customer's data masked. You can only access the customer data with an authenticated request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AddShippingAddressRequest;
use \OpenAPI\OpenAPI\Models\Operations\AddShippingAddressRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\AddShippingAddressRequestBodyLogisticsInfo;
use \OpenAPI\OpenAPI\Models\Operations\AddShippingAddressRequestBodySelectedAddresses;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddShippingAddressRequest();
    $request->accept = 'cum';
    $request->contentType = 'esse';
    $request->requestBody = new AddShippingAddressRequestBody();
    $request->requestBody->clearAddressIfPostalCodeNotFound = false;
    $request->requestBody->logisticsInfo = [
        new AddShippingAddressRequestBodyLogisticsInfo(),
    ];
    $request->requestBody->selectedAddresses = [
        new AddShippingAddressRequestBodySelectedAddresses(),
        new AddShippingAddressRequestBodySelectedAddresses(),
        new AddShippingAddressRequestBodySelectedAddresses(),
    ];
    $request->orderFormId = 'aspernatur';

    $response = $sdk->cartAttachments->addShippingAddress($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getClientProfileByEmail

Retrieve a client's profile information by providing an email address.

If the response body fields are empty, the following situations may have occurred:

1. There is no client registered with the email address provided in your store, or;
2. Client profile is invalid or incomplete. For more information, see [SmartCheckout - Customer information automatic fill-in](https://help.vtex.com/en/tutorial/smartcheckout-customer-information-automatic-fill-in--2Nuu3xAFzdhIzJIldAdtan).

>⚠️ The authentication of this endpoint can change depending on the customer context. If you are consulting information from a customer with a complete profile on the store, the response will return the customer's data masked. You can only access the customer data with an authenticated request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetClientProfileByEmailRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetClientProfileByEmailRequest();
    $request->accept = 'perferendis';
    $request->contentType = 'ad';
    $request->email = 'Camden61@yahoo.com';

    $response = $sdk->cartAttachments->getClientProfileByEmail($request);

    if ($response->getClientProfileByEmail200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
