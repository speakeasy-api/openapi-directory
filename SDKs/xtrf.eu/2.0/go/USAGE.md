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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            XAuthAccessToken: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    req := operations.BrowseCSVRequest{
        AdditionalOrder: "corrupti",
        SecondarySeparator: "provident",
        Separator: "distinctio",
        ViewID: 844266,
    }

    ctx := context.Background()
    res, err := s.Browser.BrowseCSV(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->