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

    req := operations.GetSuggestionRequest{
        Accept: "corrupti",
        ContentType: "provident",
        AccountName: "distinctio",
        SellerID: "quibusdam",
        SellerSkuID: "unde",
    }

    ctx := context.Background()
    res, err := s.GetSuggestions.GetSuggestion(ctx, req)
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


### GetSuggestions

* `GetSuggestion` - Get SKU Suggestion by ID
* `Getsuggestions` - Get all SKU suggestions

### GetVersions

* `GetSuggestionbyversion` - Get Version by ID
* `GetVersions` - Get all Versions

### ManageSuggestions

* `DeleteSuggestion` - Delete SKU Suggestion
* `SaveSuggestion` - Send SKU Suggestion

### MatchReceivedSKUs

* `Match` - Match Received SKUs individually
* `MatchMultiple` - Match Multiple Received SKUs

### SKUApprovalSettings

* `Getaccountconfig` - Get Account's Approval Settings
* `GetautoApprovevaluefromconfig` - Get autoApprove Status in Account Settings
* `Getselleraccountconfig` - Get Seller's Approval Settings
* `Putselleraccountconfig` - Save Seller's Approval Settings
* `Saveaccountconfig` - Save Account's Approval Settings
* `Saveautoapproveforaccount` - Activate autoApprove in Marketplace's Account
* `Saveautoapproveforaccountseller` - Activate autoApprove Setting for a Seller
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
