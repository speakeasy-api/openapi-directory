# Asset

### Available Operations

* [CreateAsset](#createasset) - adds a fixed asset
* [CreateAssetType](#createassettype) - adds a fixed asset type
* [GetAssetByID](#getassetbyid) - Retrieves fixed asset by id
* [GetAssetSettings](#getassetsettings) - searches fixed asset settings
* [GetAssetTypes](#getassettypes) - searches fixed asset types
* [GetAssets](#getassets) - searches fixed asset

## CreateAsset

Adds an asset to the system

### Example Usage

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
            AccountingBookValue: sdk.Float64(7151.9),
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
        XeroTenantID: "quibusdam",
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

## CreateAssetType

Adds an fixed asset type to the system

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Asset.CreateAssetType(ctx, operations.CreateAssetTypeRequest{
        AssetType: &shared.AssetType{
            AccumulatedDepreciationAccountID: sdk.String("ca4c6b39-4f4f-43e8-98da-5e1f350a6694"),
            AssetTypeID: sdk.String("5da209c5-5e19-4a43-b925-71b776c49ced"),
            AssetTypeName: "Computer Equipment",
            BookDepreciationSetting: shared.BookDepreciationSetting{
                AveragingMethod: shared.BookDepreciationSettingAveragingMethodEnumActualDays.ToPointer(),
                BookEffectiveDateOfChangeID: sdk.String("68f17094-af97-4f1b-b36b-013b45b6ad3c"),
                DepreciableObjectID: sdk.String("68f17094-af97-4f1b-b36b-013b45b6ad3c"),
                DepreciableObjectType: sdk.String("Asset"),
                DepreciationCalculationMethod: shared.BookDepreciationSettingDepreciationCalculationMethodEnumNone.ToPointer(),
                DepreciationMethod: shared.BookDepreciationSettingDepreciationMethodEnumStraightLine.ToPointer(),
                DepreciationRate: sdk.Float64(0.05),
                EffectiveLifeYears: sdk.Int64(5),
            },
            DepreciationExpenseAccountID: sdk.String("b23fc79b-d66b-44b0-a240-e138e086fcbc"),
            FixedAssetAccountID: sdk.String("24e260f1-bfc4-4766-ad7f-8a8ce01de879"),
            Locks: sdk.Int64(33),
        },
        XeroTenantID: "unde",
    }, operations.CreateAssetTypeSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssetType != nil {
        // handle response
    }
}
```

## GetAssetByID

By passing in the appropriate asset id, you can search for
a specific fixed asset in the system


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Asset.GetAssetByID(ctx, operations.GetAssetByIDRequest{
        ID: "4f7bcdcb-5ec1-4258-9558-19f662fccdfe",
        XeroTenantID: "nulla",
    }, operations.GetAssetByIDSecurity{
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

## GetAssetSettings

By passing in the appropriate options, you can search for available fixed asset types in the system

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Asset.GetAssetSettings(ctx, operations.GetAssetSettingsRequest{
        XeroTenantID: "corrupti",
    }, operations.GetAssetSettingsSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Setting != nil {
        // handle response
    }
}
```

## GetAssetTypes

By passing in the appropriate options, you can search for available fixed asset types in the system

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Asset.GetAssetTypes(ctx, operations.GetAssetTypesRequest{
        XeroTenantID: "illum",
    }, operations.GetAssetTypesSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssetTypes != nil {
        // handle response
    }
}
```

## GetAssets

By passing in the appropriate options, you can search for available fixed asset in the system

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Asset.GetAssets(ctx, operations.GetAssetsRequest{
        FilterBy: sdk.String("Company Car"),
        OrderBy: operations.GetAssetsOrderByEnumAssetName.ToPointer(),
        Page: sdk.Int64(1),
        PageSize: sdk.Int64(5),
        SortDirection: operations.GetAssetsSortDirectionEnumAsc.ToPointer(),
        Status: shared.AssetStatusQueryParamEnumDraft,
        XeroTenantID: "error",
    }, operations.GetAssetsSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Assets != nil {
        // handle response
    }
}
```
