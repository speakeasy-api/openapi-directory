<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EntityData.GetEntities(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Entities != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->