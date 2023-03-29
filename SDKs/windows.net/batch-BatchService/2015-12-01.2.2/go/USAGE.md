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
            ApplicationID: "unde",
        },
        QueryParams: operations.ApplicationGetQueryParams{
            APIVersion: "deserunt",
            Timeout: 715190,
        },
        Headers: operations.ApplicationGetHeaders{
            ClientRequestID: "nulla",
            OcpDate: "id",
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