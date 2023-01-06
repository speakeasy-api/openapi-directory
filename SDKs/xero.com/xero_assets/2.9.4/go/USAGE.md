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
            XeroTenantID: "incidunt",
        },
        Request: shared.Asset{
            AccountingBookValue: 75.199997,
            AssetID: "velit",
            AssetName: "asperiores",
            AssetNumber: "temporibus",
            AssetStatus: "Draft",
            AssetTypeID: "est",
            BookDepreciationDetail: "quis",
            BookDepreciationSetting: "aut",
            CanRollback: false,
            DisposalDate: "2001-06-02",
            DisposalPrice: 60.200001,
            IsDeleteEnabledForDate: false,
            PurchaseDate: "1977-03-16",
            PurchasePrice: 76.199997,
            SerialNumber: "ullam",
            WarrantyExpiryDate: "cupiditate",
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