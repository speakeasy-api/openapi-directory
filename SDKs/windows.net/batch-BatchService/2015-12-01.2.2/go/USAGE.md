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
            ApplicationID: "sit",
        },
        QueryParams: operations.ApplicationGetQueryParams{
            APIVersion: "voluptas",
            Timeout: 6050128673802995827,
        },
        Headers: operations.ApplicationGetHeaders{
            ClientRequestID: "expedita",
            OcpDate: "consequuntur",
            ReturnClientRequestID: false,
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