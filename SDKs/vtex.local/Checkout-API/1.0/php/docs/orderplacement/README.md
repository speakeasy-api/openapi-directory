# orderPlacement

### Available Operations

* [placeOrder](#placeorder) - Place order
* [placeOrderFromExistingOrderForm](#placeorderfromexistingorderform) - Place order from an existing cart
* [processOrder](#processorder) - Process order

## placeOrder

Places order without having any prior cart information. This means all information on items, client, payment and shipping must be sent in the body.

>⚠️ The authentication of this endpoint is required if you are creating an order with an item that has an attachment that creates a Subscription. For more information, access [Subscriptions API](https://developers.vtex.com/docs/api-reference/subscriptions-api-v3).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PlaceOrderRequest;
use \OpenAPI\OpenAPI\Models\Operations\PlaceOrderRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PlaceOrderRequestBodyClientProfileData;
use \OpenAPI\OpenAPI\Models\Operations\PlaceOrderRequestBodyItems;
use \OpenAPI\OpenAPI\Models\Operations\PlaceOrderRequestBodyItemsBundleItems;
use \OpenAPI\OpenAPI\Models\Operations\PlaceOrderRequestBodyItemsItemAttachment;
use \OpenAPI\OpenAPI\Models\Operations\PlaceOrderRequestBodyItemsPriceTags;
use \OpenAPI\OpenAPI\Models\Operations\PlaceOrderRequestBodyMarketingData;
use \OpenAPI\OpenAPI\Models\Operations\PlaceOrderRequestBodyPaymentData;
use \OpenAPI\OpenAPI\Models\Operations\PlaceOrderRequestBodyPaymentDataGiftCards;
use \OpenAPI\OpenAPI\Models\Operations\PlaceOrderRequestBodyPaymentDataPaymentSystems;
use \OpenAPI\OpenAPI\Models\Operations\PlaceOrderRequestBodyPaymentDataPaymentSystemsValidator;
use \OpenAPI\OpenAPI\Models\Operations\PlaceOrderRequestBodyPaymentDataPayments;
use \OpenAPI\OpenAPI\Models\Operations\PlaceOrderRequestBodySalesAssociateData;
use \OpenAPI\OpenAPI\Models\Operations\PlaceOrderRequestBodyShippingData;
use \OpenAPI\OpenAPI\Models\Operations\PlaceOrderRequestBodyShippingDataAddress;
use \OpenAPI\OpenAPI\Models\Operations\PlaceOrderRequestBodyShippingDataLogisticsInfo;
use \OpenAPI\OpenAPI\Models\Operations\PlaceOrderRequestBodyShippingDataLogisticsInfoDeliveryWindow;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PlaceOrderRequest();
    $request->accept = 'doloremque';
    $request->contentType = 'reprehenderit';
    $request->requestBody = new PlaceOrderRequestBody();
    $request->requestBody->clientProfileData = new PlaceOrderRequestBodyClientProfileData();
    $request->requestBody->clientProfileData->corporateDocument = 'ut';
    $request->requestBody->clientProfileData->corporateName = 'maiores';
    $request->requestBody->clientProfileData->corporatePhone = 'dicta';
    $request->requestBody->clientProfileData->document = 'corporis';
    $request->requestBody->clientProfileData->documentType = 'dolore';
    $request->requestBody->clientProfileData->email = 'Birdie88@yahoo.com';
    $request->requestBody->clientProfileData->firstName = 'Harry';
    $request->requestBody->clientProfileData->isCorporate = false;
    $request->requestBody->clientProfileData->lastName = 'VonRueden';
    $request->requestBody->clientProfileData->phone = '(365) 682-5590';
    $request->requestBody->clientProfileData->stateInscription = 'repudiandae';
    $request->requestBody->clientProfileData->tradeName = 'sint';
    $request->requestBody->items = [
        new PlaceOrderRequestBodyItems(),
    ];
    $request->requestBody->marketingData = new PlaceOrderRequestBodyMarketingData();
    $request->requestBody->marketingData->coupon = 'itaque';
    $request->requestBody->marketingData->utmCampaign = 'incidunt';
    $request->requestBody->marketingData->utmMedium = 'enim';
    $request->requestBody->marketingData->utmSource = 'consequatur';
    $request->requestBody->marketingData->utmiCampaign = 'est';
    $request->requestBody->marketingData->utmiPage = 'quibusdam';
    $request->requestBody->marketingData->utmiPart = 'explicabo';
    $request->requestBody->openTextField = 'deserunt';
    $request->requestBody->paymentData = new PlaceOrderRequestBodyPaymentData();
    $request->requestBody->paymentData->giftCardMessages = [
        'quibusdam',
        'labore',
        'modi',
    ];
    $request->requestBody->paymentData->giftCards = [
        new PlaceOrderRequestBodyPaymentDataGiftCards(),
    ];
    $request->requestBody->paymentData->paymentSystems = [
        new PlaceOrderRequestBodyPaymentDataPaymentSystems(),
        new PlaceOrderRequestBodyPaymentDataPaymentSystems(),
    ];
    $request->requestBody->paymentData->payments = [
        new PlaceOrderRequestBodyPaymentDataPayments(),
        new PlaceOrderRequestBodyPaymentDataPayments(),
        new PlaceOrderRequestBodyPaymentDataPayments(),
    ];
    $request->requestBody->paymentData->updateStatus = 'quos';
    $request->requestBody->salesAssociateData = new PlaceOrderRequestBodySalesAssociateData();
    $request->requestBody->salesAssociateData->salesAssociateId = 'perferendis';
    $request->requestBody->shippingData = new PlaceOrderRequestBodyShippingData();
    $request->requestBody->shippingData->address = new PlaceOrderRequestBodyShippingDataAddress();
    $request->requestBody->shippingData->address->addressId = 'magni';
    $request->requestBody->shippingData->address->addressType = 'residential';
    $request->requestBody->shippingData->address->city = 'Guaynabo';
    $request->requestBody->shippingData->address->complement = 'alias';
    $request->requestBody->shippingData->address->country = 'Cambodia';
    $request->requestBody->shippingData->address->geoCoordinates = [
        -47.924747467041016,
        -47.924747467041016,
        -47.924747467041016,
    ];
    $request->requestBody->shippingData->address->neighborhood = 'excepturi';
    $request->requestBody->shippingData->address->number = 'tempora';
    $request->requestBody->shippingData->address->postalCode = '72942-7535';
    $request->requestBody->shippingData->address->receiverName = 'necessitatibus';
    $request->requestBody->shippingData->address->reference = 'sint';
    $request->requestBody->shippingData->address->state = 'officia';
    $request->requestBody->shippingData->address->street = '89644 Wolff Ramp';
    $request->requestBody->shippingData->logisticsInfo = [
        new PlaceOrderRequestBodyShippingDataLogisticsInfo(),
    ];
    $request->requestBody->shippingData->updateStatus = 'magnam';
    $request->sc = 1;

    $response = $sdk->orderPlacement->placeOrder($request);

    if ($response->placeOrder200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## placeOrderFromExistingOrderForm

This endpoint places an order from an existing `orderForm` object, meaning an existing cart.

After the creation of an order with this request, you have five minutes to send payment information and then request payment processing.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PlaceOrderFromExistingOrderFormRequest;
use \OpenAPI\OpenAPI\Models\Operations\PlaceOrderFromExistingOrderFormRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PlaceOrderFromExistingOrderFormRequest();
    $request->accept = 'cumque';
    $request->contentType = 'facere';
    $request->requestBody = new PlaceOrderFromExistingOrderFormRequestBody();
    $request->requestBody->interestValue = 411820;
    $request->requestBody->optinNewsLetter = false;
    $request->requestBody->referenceId = 'aliquid';
    $request->requestBody->referenceValue = 675439;
    $request->requestBody->savePersonalData = false;
    $request->requestBody->value = 881104;
    $request->orderFormId = 'non';

    $response = $sdk->orderPlacement->placeOrderFromExistingOrderForm($request);

    if ($response->placeOrderFromExistingOrderForm200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## processOrder

Order processing callback request, which is made after an order's payment is approved.

> This request has to be made until five minutes after the [Place order](https://developers.vtex.com/docs/api-reference/checkout-api#put-/api/checkout/pub/orders) or [Place order from existing cart](https://developers.vtex.com/docs/api-reference/checkout-api#post-/api/checkout/pub/orderForm/-orderFormId-/transaction) request has been made, or else, the order will not be processed.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProcessOrderRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProcessOrderRequest();
    $request->accept = 'occaecati';
    $request->contentType = 'enim';
    $request->cookie = 'accusamus';
    $request->orderGroup = 'delectus';

    $response = $sdk->orderPlacement->processOrder($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
