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

    req := operations.GetVCustomPricesSessionSchemaRequest{
        Headers: operations.GetVCustomPricesSessionSchemaHeaders{
            Accept: "unde",
            ContentType: "deserunt",
        },
    }

    ctx := context.Background()
    res, err := s.CustomPrices.GetVCustomPricesSessionSchema(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.RequestBody != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->