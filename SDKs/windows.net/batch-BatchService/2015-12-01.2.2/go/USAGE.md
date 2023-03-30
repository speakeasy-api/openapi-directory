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
        PathParams: operations.ApplicationGetPathParams{
            ApplicationID: "corrupti",
        },
        QueryParams: operations.ApplicationGetQueryParams{
            APIVersion: "provident",
            Timeout: 715190,
        },
        Headers: operations.ApplicationGetHeaders{
            ClientRequestID: "quibusdam",
            OcpDate: "unde",
            ReturnClientRequestID: false,
        },
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