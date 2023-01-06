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
    
    req := operations.DeleteAccountingCodeRequest{
        PathParams: operations.DeleteAccountingCodePathParams{
            AcID: "sed",
        },
        Headers: operations.DeleteAccountingCodeHeaders{
            ZuoraEntityIds: "ipsa",
            ZuoraTrackID: "facere",
        },
    }
    
    res, err := s.AccountingCodes.DeleteAccountingCode(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CommonResponseType != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->