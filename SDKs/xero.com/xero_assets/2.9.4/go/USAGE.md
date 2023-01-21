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
            XeroTenantID: "sit",
        },
        Request: shared.Asset{
            AccountingBookValue: 14.200000,
            AssetID: "expedita",
            AssetName: "consequuntur",
            AssetNumber: "dolor",
            AssetStatus: "Registered",
            AssetTypeID: "voluptas",
            BookDepreciationDetail: "fugit",
            BookDepreciationSetting: "et",
            CanRollback: true,
            DisposalDate: "2004-06-02",
            DisposalPrice: 52.099998,
            IsDeleteEnabledForDate: false,
            PurchaseDate: "2021-10-23",
            PurchasePrice: 50.099998,
            SerialNumber: "iste",
            WarrantyExpiryDate: "vitae",
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