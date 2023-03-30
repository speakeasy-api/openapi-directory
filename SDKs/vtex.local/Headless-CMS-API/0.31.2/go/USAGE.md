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

    req := operations.GetAllContentTypesRequest{
        PathParams: operations.GetAllContentTypesPathParams{
            BuilderID: "faststore",
        },
    }

    ctx := context.Background()
    res, err := s.Pages.GetAllContentTypes(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAllContentTypes200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->