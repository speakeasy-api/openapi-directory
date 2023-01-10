<!-- Start SDK Example Usage -->
```go
package main

import (
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
            XeroTenantID: "dolorem",
        },
        Request: shared.Asset{
            AccountingBookValue: 73.099998,
            AssetID: "tempora",
            AssetName: "est",
            AssetNumber: "debitis",
            AssetStatus: "Draft",
            AssetTypeID: "soluta",
            BookDepreciationDetail: "fugit",
            BookDepreciationSetting: "magni",
            CanRollback: false,
            DisposalDate: "1998-01-30",
            DisposalPrice: 38.200001,
            IsDeleteEnabledForDate: false,
            PurchaseDate: "1972-02-19",
            PurchasePrice: 66.199997,
            SerialNumber: "ipsam",
            WarrantyExpiryDate: "veniam",
        },
    }
    
    res, err := s.Asset.CreateAsset(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Asset != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->