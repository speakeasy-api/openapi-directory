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

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Asset.CreateAsset(ctx, operations.CreateAssetRequest{
        Asset: shared.Asset{
            AccountingBookValue: sdk.Float64(5488.14),
            AssetID: sdk.String("3b5b3a38-5649-495f-87a1-14a4e5918634"),
            AssetName: "Awesome Truck 3",
            AssetNumber: sdk.String("FA-0013"),
            AssetStatus: shared.AssetStatusEnumDraft.ToPointer(),
            AssetTypeID: sdk.String("3b5b3a38-5649-495f-87a1-14a4e5918634"),
            BookDepreciationDetail: &shared.BookDepreciationDetail{
                CostLimit: sdk.Float64(9000),
                CurrentAccumDepreciationAmount: sdk.Float64(5),
                CurrentCapitalGain: sdk.Float64(5.25),
                CurrentGainLoss: sdk.Float64(10.5),
                DepreciationStartDate: types.MustDateFromString("2015-07-01T00:00:00"),
                PriorAccumDepreciationAmount: sdk.Float64(0.45),
                ResidualValue: sdk.Float64(10000),
            },
            BookDepreciationSetting: &shared.BookDepreciationSetting{
                AveragingMethod: shared.BookDepreciationSettingAveragingMethodEnumActualDays.ToPointer(),
                BookEffectiveDateOfChangeID: sdk.String("68f17094-af97-4f1b-b36b-013b45b6ad3c"),
                DepreciableObjectID: sdk.String("68f17094-af97-4f1b-b36b-013b45b6ad3c"),
                DepreciableObjectType: sdk.String("Asset"),
                DepreciationCalculationMethod: shared.BookDepreciationSettingDepreciationCalculationMethodEnumNone.ToPointer(),
                DepreciationMethod: shared.BookDepreciationSettingDepreciationMethodEnumStraightLine.ToPointer(),
                DepreciationRate: sdk.Float64(0.05),
                EffectiveLifeYears: sdk.Int64(5),
            },
            CanRollback: sdk.Bool(true),
            DisposalDate: types.MustDateFromString("2020-07-01T00:00:00"),
            DisposalPrice: sdk.Float64(1.0000),
            IsDeleteEnabledForDate: sdk.Bool(true),
            PurchaseDate: types.MustDateFromString("2015-07-01T00:00:00"),
            PurchasePrice: sdk.Float64(1000.0000),
            SerialNumber: sdk.String("ca4c6b39-4f4f-43e8-98da-5e1f350a6694"),
            WarrantyExpiryDate: sdk.String("ca4c6b39-4f4f-43e8-98da-5e1f350a6694"),
        },
        XeroTenantID: "provident",
    }, operations.CreateAssetSecurity{
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


### [Asset](docs/asset/README.md)

* [CreateAsset](docs/asset/README.md#createasset) - adds a fixed asset
* [CreateAssetType](docs/asset/README.md#createassettype) - adds a fixed asset type
* [GetAssetByID](docs/asset/README.md#getassetbyid) - Retrieves fixed asset by id
* [GetAssetSettings](docs/asset/README.md#getassetsettings) - searches fixed asset settings
* [GetAssetTypes](docs/asset/README.md#getassettypes) - searches fixed asset types
* [GetAssets](docs/asset/README.md#getassets) - searches fixed asset
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
