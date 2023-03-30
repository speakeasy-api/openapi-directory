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
            XAuthAccessToken: &shared.SchemeXAuthAccessToken{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.BrowseCSVRequest{
        QueryParams: operations.BrowseCSVQueryParams{
            AdditionalOrder: "unde",
            SecondarySeparator: "deserunt",
            Separator: "porro",
            ViewID: 844266,
        },
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