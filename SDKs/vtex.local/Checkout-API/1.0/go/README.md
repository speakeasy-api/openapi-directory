# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/vtex.local/Checkout-API/1.0/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            AppKey: "YOUR_API_KEY_HERE",
            AppToken: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.CartAttachments.AddClientPreferences(ctx, operations.AddClientPreferencesRequest{
        Accept: "corrupti",
        ContentType: "provident",
        RequestBody: operations.AddClientPreferencesRequestBody{
            Locale: sdk.String("distinctio"),
            OptinNewsLetter: sdk.Bool(false),
        },
        OrderFormID: "quibusdam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AddClientPreferences200ApplicationJSONAny != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [CartAttachments](docs/cartattachments/README.md)

* [AddClientPreferences](docs/cartattachments/README.md#addclientpreferences) - Add client preferences
* [AddClientProfile](docs/cartattachments/README.md#addclientprofile) - Add client profile
* [AddMarketingData](docs/cartattachments/README.md#addmarketingdata) - Add marketing data
* [AddMerchantContextData](docs/cartattachments/README.md#addmerchantcontextdata) - Add merchant context data
* [AddPaymentData](docs/cartattachments/README.md#addpaymentdata) - Add payment data
* [AddShippingAddress](docs/cartattachments/README.md#addshippingaddress) - Add shipping address and select delivery option
* [GetClientProfileByEmail](docs/cartattachments/README.md#getclientprofilebyemail) - Get client profile by email

### [Configuration](docs/configuration/README.md)

* [ClearorderFormMessages](docs/configuration/README.md#clearorderformmessages) - Clear orderForm messages
* [GetWindowToChangeSeller](docs/configuration/README.md#getwindowtochangeseller) - Get window to change seller
* [GetorderFormconfiguration](docs/configuration/README.md#getorderformconfiguration) - Get orderForm configuration
* [UpdateWindowToChangeSeller](docs/configuration/README.md#updatewindowtochangeseller) - Update window to change seller
* [UpdateorderFormconfiguration](docs/configuration/README.md#updateorderformconfiguration) - Update orderForm configuration

### [CustomData](docs/customdata/README.md)

* [Removesinglecustomfieldvalue](docs/customdata/README.md#removesinglecustomfieldvalue) - Remove single custom field value
* [SetMultipleCustomFieldValues](docs/customdata/README.md#setmultiplecustomfieldvalues) - Set multiple custom field values
* [SetSingleCustomFieldValue](docs/customdata/README.md#setsinglecustomfieldvalue) - Set single custom field value

### [Fulfillment](docs/fulfillment/README.md)

* [GetAddressByPostalCode](docs/fulfillment/README.md#getaddressbypostalcode) - Get address by postal code
* [ListPickupPpointsByLocation](docs/fulfillment/README.md#listpickupppointsbylocation) - List pickup points by location

### [OrderPlacement](docs/orderplacement/README.md)

* [PlaceOrder](docs/orderplacement/README.md#placeorder) - Place order
* [PlaceOrderFromExistingOrderForm](docs/orderplacement/README.md#placeorderfromexistingorderform) - Place order from an existing cart
* [ProcessOrder](docs/orderplacement/README.md#processorder) - Process order

### [Region](docs/region/README.md)

* [GetSellersByRegion](docs/region/README.md#getsellersbyregion) - Get sellers by region or address

### [ShoppingCart](docs/shoppingcart/README.md)

* [AddCoupons](docs/shoppingcart/README.md#addcoupons) - Add coupons to the cart
* [CartSimulation](docs/shoppingcart/README.md#cartsimulation) - Cart simulation
* [CreateANewCart](docs/shoppingcart/README.md#createanewcart) - Get current or create a new cart
* [GetCartInformationByID](docs/shoppingcart/README.md#getcartinformationbyid) - Get cart information by ID
* [GetCartInstallments](docs/shoppingcart/README.md#getcartinstallments) - Cart installments
* [IgnoreProfileData](docs/shoppingcart/README.md#ignoreprofiledata) - Ignore profile data
* [Items](docs/shoppingcart/README.md#items) - Add cart items
* [ItemsUpdate](docs/shoppingcart/README.md#itemsupdate) - Update cart items
* [PriceChange](docs/shoppingcart/README.md#pricechange) - Change price
* [RemoveAllItems](docs/shoppingcart/README.md#removeallitems) - Remove all items
* [Removeallpersonaldata](docs/shoppingcart/README.md#removeallpersonaldata) - Remove all personal data
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
