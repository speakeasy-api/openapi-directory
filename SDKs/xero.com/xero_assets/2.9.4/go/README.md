# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/xero.com/xero_assets/2.9.4/go
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
    s := sdk.New()

    req := operations.CreateAssetRequest{
        Asset: shared.Asset{
            AccountingBookValue: 5488.14,
            AssetID: "3b5b3a38-5649-495f-87a1-14a4e5918634",
            AssetName: "Awesome Truck 3",
            AssetNumber: "FA-0013",
            AssetStatus: "Draft",
            AssetTypeID: "3b5b3a38-5649-495f-87a1-14a4e5918634",
            BookDepreciationDetail: &shared.BookDepreciationDetail{
                CostLimit: 9000,
                CurrentAccumDepreciationAmount: 5,
                CurrentCapitalGain: 5.25,
                CurrentGainLoss: 10.5,
                DepreciationStartDate: "2015-07-01T00:00:00",
                PriorAccumDepreciationAmount: 0.45,
                ResidualValue: 10000,
            },
            BookDepreciationSetting: &shared.BookDepreciationSetting{
                AveragingMethod: "ActualDays",
                BookEffectiveDateOfChangeID: "68f17094-af97-4f1b-b36b-013b45b6ad3c",
                DepreciableObjectID: "68f17094-af97-4f1b-b36b-013b45b6ad3c",
                DepreciableObjectType: "Asset",
                DepreciationCalculationMethod: "None",
                DepreciationMethod: "StraightLine",
                DepreciationRate: 0.05,
                EffectiveLifeYears: 5,
            },
            CanRollback: true,
            DisposalDate: "2020-07-01T00:00:00",
            DisposalPrice: 1.0000,
            IsDeleteEnabledForDate: true,
            PurchaseDate: "2015-07-01T00:00:00",
            PurchasePrice: 1000.0000,
            SerialNumber: "ca4c6b39-4f4f-43e8-98da-5e1f350a6694",
            WarrantyExpiryDate: "ca4c6b39-4f4f-43e8-98da-5e1f350a6694",
        },
        XeroTenantID: "provident",
    }

    ctx := context.Background()
    res, err := s.Asset.CreateAsset(ctx, req, operations.CreateAssetSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Asset != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Asset

* `CreateAsset` - adds a fixed asset
* `CreateAssetType` - adds a fixed asset type
* `GetAssetByID` - Retrieves fixed asset by id
* `GetAssetSettings` - searches fixed asset settings
* `GetAssetTypes` - searches fixed asset types
* `GetAssets` - searches fixed asset
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
