# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/vtex.local/Marketplace-APIs-/1.0/go
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
    res, err := s.GetSuggestions.GetSuggestion(ctx, operations.GetSuggestionRequest{
        Accept: "corrupti",
        ContentType: "provident",
        AccountName: "distinctio",
        SellerID: "quibusdam",
        SellerSkuID: "unde",
    })
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


### [GetSuggestions](docs/getsuggestions/README.md)

* [GetSuggestion](docs/getsuggestions/README.md#getsuggestion) - Get SKU Suggestion by ID
* [Getsuggestions](docs/getsuggestions/README.md#getsuggestions) - Get all SKU suggestions

### [GetVersions](docs/getversions/README.md)

* [GetSuggestionbyversion](docs/getversions/README.md#getsuggestionbyversion) - Get Version by ID
* [GetVersions](docs/getversions/README.md#getversions) - Get all Versions

### [ManageSuggestions](docs/managesuggestions/README.md)

* [DeleteSuggestion](docs/managesuggestions/README.md#deletesuggestion) - Delete SKU Suggestion
* [SaveSuggestion](docs/managesuggestions/README.md#savesuggestion) - Send SKU Suggestion

### [MatchReceivedSKUs](docs/matchreceivedskus/README.md)

* [Match](docs/matchreceivedskus/README.md#match) - Match Received SKUs individually
* [MatchMultiple](docs/matchreceivedskus/README.md#matchmultiple) - Match Multiple Received SKUs

### [SKUApprovalSettings](docs/skuapprovalsettings/README.md)

* [Getaccountconfig](docs/skuapprovalsettings/README.md#getaccountconfig) - Get Account's Approval Settings
* [GetautoApprovevaluefromconfig](docs/skuapprovalsettings/README.md#getautoapprovevaluefromconfig) - Get autoApprove Status in Account Settings
* [Getselleraccountconfig](docs/skuapprovalsettings/README.md#getselleraccountconfig) - Get Seller's Approval Settings
* [Putselleraccountconfig](docs/skuapprovalsettings/README.md#putselleraccountconfig) - Save Seller's Approval Settings
* [Saveaccountconfig](docs/skuapprovalsettings/README.md#saveaccountconfig) - Save Account's Approval Settings
* [Saveautoapproveforaccount](docs/skuapprovalsettings/README.md#saveautoapproveforaccount) - Activate autoApprove in Marketplace's Account
* [Saveautoapproveforaccountseller](docs/skuapprovalsettings/README.md#saveautoapproveforaccountseller) - Activate autoApprove Setting for a Seller
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
