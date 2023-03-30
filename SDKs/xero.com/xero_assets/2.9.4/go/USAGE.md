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
        Security: operations.CreateAssetSecurity{
            OAuth2: shared.SchemeOAuth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        Headers: operations.CreateAssetHeaders{
            XeroTenantID: "corrupti",
        },
        Request: shared.Asset{
            AccountingBookValue: 5928.45,
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
    }

    ctx := context.Background()
    res, err := s.Asset.CreateAsset(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Asset != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->