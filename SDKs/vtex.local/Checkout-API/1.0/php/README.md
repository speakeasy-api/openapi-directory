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

<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### cartAttachments

* `addClientPreferences` - Add client preferences
* `addClientProfile` - Add client profile
* `addMarketingData` - Add marketing data
* `addMerchantContextData` - Add merchant context data
* `addPaymentData` - Add payment data
* `addShippingAddress` - Add shipping address and select delivery option
* `getClientProfileByEmail` - Get client profile by email

### configuration

* `clearorderFormMessages` - Clear orderForm messages
* `getWindowToChangeSeller` - Get window to change seller
* `getorderFormconfiguration` - Get orderForm configuration
* `updateWindowToChangeSeller` - Update window to change seller
* `updateorderFormconfiguration` - Update orderForm configuration

### customData

* `removesinglecustomfieldvalue` - Remove single custom field value
* `setMultipleCustomFieldValues` - Set multiple custom field values
* `setSingleCustomFieldValue` - Set single custom field value

### fulfillment

* `getAddressByPostalCode` - Get address by postal code
* `listPickupPpointsByLocation` - List pickup points by location

### orderPlacement

* `placeOrder` - Place order
* `placeOrderFromExistingOrderForm` - Place order from an existing cart
* `processOrder` - Process order

### region

* `getSellersByRegion` - Get sellers by region or address

### shoppingCart

* `addCoupons` - Add coupons to the cart
* `cartSimulation` - Cart simulation
* `createANewCart` - Get current or create a new cart
* `getCartInformationById` - Get cart information by ID
* `getCartInstallments` - Cart installments
* `ignoreProfileData` - Ignore profile data
* `items` - Add cart items
* `itemsUpdate` - Update cart items
* `priceChange` - Change price
* `removeAllItems` - Remove all items
* `removeallpersonaldata` - Remove all personal data
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
