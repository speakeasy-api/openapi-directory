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
    res, err := s.GetIP(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.DateTimeJSONResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->