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
            AppKey: shared.SchemeAppKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
            AppToken: shared.SchemeAppToken{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.GetreportstatusbyIDRequest{
        PathParams: operations.GetreportstatusbyIDPathParams{
            ReportID: "unde",
        },
        Headers: operations.GetreportstatusbyIDHeaders{
            Accept: "deserunt",
            ContentType: "porro",
        },
    }

    ctx := context.Background()
    res, err := s.Report.GetreportstatusbyID(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->