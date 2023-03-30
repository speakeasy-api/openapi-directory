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
        PathParams: operations.DELETEAccountingCodePathParams{
            AcID: "corrupti",
        },
        Headers: operations.DELETEAccountingCodeHeaders{
            ZuoraEntityIds: "provident",
            ZuoraTrackID: "distinctio",
        },
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