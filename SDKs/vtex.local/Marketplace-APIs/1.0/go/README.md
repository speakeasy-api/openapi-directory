# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/vtex.local/Marketplace-APIs/1.0/go
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

    req := operations.GetProductoffersRequest{
        Accept: "corrupti",
        ContentType: "provident",
        AccountName: "distinctio",
        Environment: "quibusdam",
        ProductID: "unde",
    }

    ctx := context.Background()
    res, err := s.MatchedOffers.GetProductoffers(ctx, req)
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


### MatchedOffers

* `GetProductoffers` - Get Matched Offer's Data by Product ID
* `GetSKUoffers` - Get Matched Offer's Data by SKU ID
* `Getofferslist` - Get Matched Offers List

### Notification

* `InventoryNotification` - Notify marketplace of inventory update
* `PriceNotification` - Notify marketplace of price update

### SalesChannelMapping

* `RetrieveMapping` - Get Sales Channel Mapping Data
* `UpsertMapping` - Upsert Sales Channel Mapping

### SellerCommissions

* `BulkUpsertSellerCommissions` - Upsert Seller Commissions in Bulk
* `ListSellerCommissions` - List Seller Commissions by seller ID
* `RemoveSellerCommissions` - Remove Seller Commissions by Category ID
* `RetrieveSellerCommissions` - Get Seller Commissions by Category ID
* `UpsertSellerCommissions` - Upsert Seller Commissions by Category ID

### SellerInvite

* `AcceptSellerLead` - Accept Seller Lead
* `CreateSellerFromSellerLead` - Create Seller From Lead
* `CreateSellerLead` - Invite Seller Lead
* `ListSellerLeads` - List Seller Leads
* `RemoveSellerLead` - Delete Seller Lead
* `ResendSellerLeadRequest` - Resend Seller Lead Invite
* `RetrieveSellerLead` - Get Seller Lead's Data by Id

### Sellers

* `GetListSellers` - List Sellers
* `GetRetrieveSeller` - Get Seller data by ID
* `UpdateSeller` - Update Seller by Seller ID
* `UpsertSellerRequest` - Configure Seller Account
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
