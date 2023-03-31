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

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            AppKey: "YOUR_API_KEY_HERE",
            AppToken: "YOUR_API_KEY_HERE",
        }),
    )

    req := operations.AddClientPreferencesRequest{
        Accept: "corrupti",
        ContentType: "provident",
        RequestBody: operations.AddClientPreferencesRequestBody{
            Locale: "distinctio",
            OptinNewsLetter: false,
        },
        OrderFormID: "quibusdam",
    }

    ctx := context.Background()
    res, err := s.CartAttachments.AddClientPreferences(ctx, req)
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


### CartAttachments

* `AddClientPreferences` - Add client preferences
* `AddClientProfile` - Add client profile
* `AddMarketingData` - Add marketing data
* `AddMerchantContextData` - Add merchant context data
* `AddPaymentData` - Add payment data
* `AddShippingAddress` - Add shipping address and select delivery option
* `GetClientProfileByEmail` - Get client profile by email

### Configuration

* `ClearorderFormMessages` - Clear orderForm messages
* `GetWindowToChangeSeller` - Get window to change seller
* `GetorderFormconfiguration` - Get orderForm configuration
* `UpdateWindowToChangeSeller` - Update window to change seller
* `UpdateorderFormconfiguration` - Update orderForm configuration

### CustomData

* `Removesinglecustomfieldvalue` - Remove single custom field value
* `SetMultipleCustomFieldValues` - Set multiple custom field values
* `SetSingleCustomFieldValue` - Set single custom field value

### Fulfillment

* `GetAddressByPostalCode` - Get address by postal code
* `ListPickupPpointsByLocation` - List pickup points by location

### OrderPlacement

* `PlaceOrder` - Place order
* `PlaceOrderFromExistingOrderForm` - Place order from an existing cart
* `ProcessOrder` - Process order

### Region

* `GetSellersByRegion` - Get sellers by region or address

### ShoppingCart

* `AddCoupons` - Add coupons to the cart
* `CartSimulation` - Cart simulation
* `CreateANewCart` - Get current or create a new cart
* `GetCartInformationByID` - Get cart information by ID
* `GetCartInstallments` - Cart installments
* `IgnoreProfileData` - Ignore profile data
* `Items` - Add cart items
* `ItemsUpdate` - Update cart items
* `PriceChange` - Change price
* `RemoveAllItems` - Remove all items
* `Removeallpersonaldata` - Remove all personal data
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
