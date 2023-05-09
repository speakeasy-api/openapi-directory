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
    res, err := s.Pages.GetAllContentTypes(ctx, operations.GetAllContentTypesRequest{
        BuilderID: "faststore",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAllContentTypes200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->