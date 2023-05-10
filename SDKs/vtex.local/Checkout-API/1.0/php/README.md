# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
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
    $request->accept = 'corrupti';
    $request->contentType = 'provident';
    $request->requestBody = new AddClientPreferencesRequestBody();
    $request->requestBody->locale = 'distinctio';
    $request->requestBody->optinNewsLetter = false;
    $request->orderFormId = 'quibusdam';

    $response = $sdk->cartAttachments->addClientPreferences($request);

    if ($response->addClientPreferences200ApplicationJSONAny !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [cartAttachments](docs/cartattachments/README.md)

* [addClientPreferences](docs/cartattachments/README.md#addclientpreferences) - Add client preferences
* [addClientProfile](docs/cartattachments/README.md#addclientprofile) - Add client profile
* [addMarketingData](docs/cartattachments/README.md#addmarketingdata) - Add marketing data
* [addMerchantContextData](docs/cartattachments/README.md#addmerchantcontextdata) - Add merchant context data
* [addPaymentData](docs/cartattachments/README.md#addpaymentdata) - Add payment data
* [addShippingAddress](docs/cartattachments/README.md#addshippingaddress) - Add shipping address and select delivery option
* [getClientProfileByEmail](docs/cartattachments/README.md#getclientprofilebyemail) - Get client profile by email

### [configuration](docs/configuration/README.md)

* [clearorderFormMessages](docs/configuration/README.md#clearorderformmessages) - Clear orderForm messages
* [getWindowToChangeSeller](docs/configuration/README.md#getwindowtochangeseller) - Get window to change seller
* [getorderFormconfiguration](docs/configuration/README.md#getorderformconfiguration) - Get orderForm configuration
* [updateWindowToChangeSeller](docs/configuration/README.md#updatewindowtochangeseller) - Update window to change seller
* [updateorderFormconfiguration](docs/configuration/README.md#updateorderformconfiguration) - Update orderForm configuration

### [customData](docs/customdata/README.md)

* [removesinglecustomfieldvalue](docs/customdata/README.md#removesinglecustomfieldvalue) - Remove single custom field value
* [setMultipleCustomFieldValues](docs/customdata/README.md#setmultiplecustomfieldvalues) - Set multiple custom field values
* [setSingleCustomFieldValue](docs/customdata/README.md#setsinglecustomfieldvalue) - Set single custom field value

### [fulfillment](docs/fulfillment/README.md)

* [getAddressByPostalCode](docs/fulfillment/README.md#getaddressbypostalcode) - Get address by postal code
* [listPickupPpointsByLocation](docs/fulfillment/README.md#listpickupppointsbylocation) - List pickup points by location

### [orderPlacement](docs/orderplacement/README.md)

* [placeOrder](docs/orderplacement/README.md#placeorder) - Place order
* [placeOrderFromExistingOrderForm](docs/orderplacement/README.md#placeorderfromexistingorderform) - Place order from an existing cart
* [processOrder](docs/orderplacement/README.md#processorder) - Process order

### [region](docs/region/README.md)

* [getSellersByRegion](docs/region/README.md#getsellersbyregion) - Get sellers by region or address

### [shoppingCart](docs/shoppingcart/README.md)

* [addCoupons](docs/shoppingcart/README.md#addcoupons) - Add coupons to the cart
* [cartSimulation](docs/shoppingcart/README.md#cartsimulation) - Cart simulation
* [createANewCart](docs/shoppingcart/README.md#createanewcart) - Get current or create a new cart
* [getCartInformationById](docs/shoppingcart/README.md#getcartinformationbyid) - Get cart information by ID
* [getCartInstallments](docs/shoppingcart/README.md#getcartinstallments) - Cart installments
* [ignoreProfileData](docs/shoppingcart/README.md#ignoreprofiledata) - Ignore profile data
* [items](docs/shoppingcart/README.md#items) - Add cart items
* [itemsUpdate](docs/shoppingcart/README.md#itemsupdate) - Update cart items
* [priceChange](docs/shoppingcart/README.md#pricechange) - Change price
* [removeAllItems](docs/shoppingcart/README.md#removeallitems) - Remove all items
* [removeallpersonaldata](docs/shoppingcart/README.md#removeallpersonaldata) - Remove all personal data
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
