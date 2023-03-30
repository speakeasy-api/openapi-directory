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

    req := operations.GetCallLogsRequest{
        Security: operations.GetCallLogsSecurity{
            BearerAuth: shared.SchemeBearerAuth{
                Authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
            },
        },
        PathParams: operations.GetCallLogsPathParams{
            AccountID: "corrupti",
        },
        QueryParams: operations.GetCallLogsQueryParams{
            DestinationUser: "provident",
            Direction: "Outbound",
            EndGte: "quibusdam",
            EndLte: "unde",
            From: "nulla",
            Page: 5448.83,
            PageSize: 8472.52,
            SourceUser: "vel",
            StartGte: "error",
            StartLte: "deserunt",
            To: "suscipit",
        },
    }

    ctx := context.Background()
    res, err := s.GetCallLogs(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CallLogsHalResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->