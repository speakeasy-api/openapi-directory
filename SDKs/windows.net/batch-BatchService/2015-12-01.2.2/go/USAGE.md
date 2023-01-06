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
    
    req := operations.ApplicationGetRequest{
        PathParams: operations.ApplicationGetPathParams{
            ApplicationID: "veritatis",
        },
        QueryParams: operations.ApplicationGetQueryParams{
            APIVersion: "magnam",
            Timeout: 4298916277474146673,
        },
        Headers: operations.ApplicationGetHeaders{
            ClientRequestID: "blanditiis",
            OcpDate: "fuga",
            ReturnClientRequestID: true,
        },
    }
    
    res, err := s.Applications.ApplicationGet(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ApplicationSummary != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->