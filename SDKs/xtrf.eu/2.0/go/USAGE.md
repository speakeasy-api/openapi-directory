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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            XAuthAccessToken: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Browser.BrowseCSV(ctx, operations.BrowseCSVRequest{
        AdditionalOrder: sdk.String("corrupti"),
        SecondarySeparator: sdk.String("provident"),
        Separator: sdk.String("distinctio"),
        ViewID: sdk.Int64(844266),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->