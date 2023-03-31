# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/vtex.local/SKU-Bindings-API/1.0/go
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

    req := operations.ActivateSKUBindingRequest{
        Accept: "corrupti",
        ContentType: "provident",
        SellerID: "vtxkfj7352",
        SkuSellerID: "71",
    }

    ctx := context.Background()
    res, err := s.SKUBindings.ActivateSKUBinding(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### SKUBindings

* `ActivateSKUBinding` - Activate SKU Binding
* `Bindtoanothersku` - Bind a seller's SKU to another SKU
* `ChangeNotification` - Change Notification with SKU ID
* `DeactivateSKUBinding` - Deactivate SKU Binding
* `DeleteSKUsellerassociation` - Remove a seller's SKU Binding
* `GetSKUseller` - Get details of a seller's SKU
* `GetallbySellerID` - Get all SKU Bindings by Seller ID
* `GetbySkuID` - Get SKU Bindings by SKU ID
* `Getpagedadmin` - Get SKU Bindings information
* `GetpagedbySellerID` - Get paged SKU Bindings by Seller ID
* `InsertSKUBinding` - Insert SKU Binding
* `PostSkuBindingPvtSkusellerChangenotificationSellerIDSellerSkuID` - Change Notification with Seller ID and Seller SKU ID
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
