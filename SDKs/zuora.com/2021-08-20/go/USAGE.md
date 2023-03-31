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

    req := operations.DELETEAccountingCodeRequest{
        ZuoraEntityIds: "corrupti",
        ZuoraTrackID: "provident",
        AcID: "distinctio",
    }

    ctx := context.Background()
    res, err := s.AccountingCodes.DELETEAccountingCode(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CommonResponseType != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->