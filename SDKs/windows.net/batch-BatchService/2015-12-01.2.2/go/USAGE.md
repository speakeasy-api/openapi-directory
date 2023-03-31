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

    req := operations.ApplicationGetRequest{
        APIVersion: "corrupti",
        ApplicationID: "provident",
        ClientRequestID: "distinctio",
        OcpDate: "quibusdam",
        ReturnClientRequestID: false,
        Timeout: 602763,
    }

    ctx := context.Background()
    res, err := s.Applications.ApplicationGet(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ApplicationSummary != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->