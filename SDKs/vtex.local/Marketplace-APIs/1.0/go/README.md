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
    res, err := s.MatchedOffers.GetProductoffers(ctx, operations.GetProductoffersRequest{
        Accept: "corrupti",
        ContentType: "provident",
        AccountName: "distinctio",
        Environment: "quibusdam",
        ProductID: "unde",
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


### [MatchedOffers](docs/matchedoffers/README.md)

* [GetProductoffers](docs/matchedoffers/README.md#getproductoffers) - Get Matched Offer's Data by Product ID
* [GetSKUoffers](docs/matchedoffers/README.md#getskuoffers) - Get Matched Offer's Data by SKU ID
* [Getofferslist](docs/matchedoffers/README.md#getofferslist) - Get Matched Offers List

### [Notification](docs/notification/README.md)

* [InventoryNotification](docs/notification/README.md#inventorynotification) - Notify marketplace of inventory update
* [PriceNotification](docs/notification/README.md#pricenotification) - Notify marketplace of price update

### [SalesChannelMapping](docs/saleschannelmapping/README.md)

* [RetrieveMapping](docs/saleschannelmapping/README.md#retrievemapping) - Get Sales Channel Mapping Data
* [UpsertMapping](docs/saleschannelmapping/README.md#upsertmapping) - Upsert Sales Channel Mapping

### [SellerCommissions](docs/sellercommissions/README.md)

* [BulkUpsertSellerCommissions](docs/sellercommissions/README.md#bulkupsertsellercommissions) - Upsert Seller Commissions in Bulk
* [ListSellerCommissions](docs/sellercommissions/README.md#listsellercommissions) - List Seller Commissions by seller ID
* [RemoveSellerCommissions](docs/sellercommissions/README.md#removesellercommissions) - Remove Seller Commissions by Category ID
* [RetrieveSellerCommissions](docs/sellercommissions/README.md#retrievesellercommissions) - Get Seller Commissions by Category ID
* [UpsertSellerCommissions](docs/sellercommissions/README.md#upsertsellercommissions) - Upsert Seller Commissions by Category ID

### [SellerInvite](docs/sellerinvite/README.md)

* [AcceptSellerLead](docs/sellerinvite/README.md#acceptsellerlead) - Accept Seller Lead
* [CreateSellerFromSellerLead](docs/sellerinvite/README.md#createsellerfromsellerlead) - Create Seller From Lead
* [CreateSellerLead](docs/sellerinvite/README.md#createsellerlead) - Invite Seller Lead
* [ListSellerLeads](docs/sellerinvite/README.md#listsellerleads) - List Seller Leads
* [RemoveSellerLead](docs/sellerinvite/README.md#removesellerlead) - Delete Seller Lead
* [ResendSellerLeadRequest](docs/sellerinvite/README.md#resendsellerleadrequest) - Resend Seller Lead Invite
* [RetrieveSellerLead](docs/sellerinvite/README.md#retrievesellerlead) - Get Seller Lead's Data by Id

### [Sellers](docs/sellers/README.md)

* [GetListSellers](docs/sellers/README.md#getlistsellers) - List Sellers
* [GetRetrieveSeller](docs/sellers/README.md#getretrieveseller) - Get Seller data by ID
* [UpdateSeller](docs/sellers/README.md#updateseller) - Update Seller by Seller ID
* [UpsertSellerRequest](docs/sellers/README.md#upsertsellerrequest) - Configure Seller Account
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
