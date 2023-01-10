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
            ApplicationID: "consequatur",
        },
        QueryParams: operations.ApplicationGetQueryParams{
            APIVersion: "non",
            Timeout: 3633662150334051103,
        },
        Headers: operations.ApplicationGetHeaders{
            ClientRequestID: "eligendi",
            OcpDate: "vel",
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