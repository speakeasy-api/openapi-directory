<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.CustomPrices.GetVCustomPricesSessionSchema(ctx, operations.GetVCustomPricesSessionSchemaRequest{
        Accept: "corrupti",
        ContentType: "provident",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RequestBody != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->