<!-- Start SDK Example Usage -->
```go
package main

import (
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
            AccountID: "modi",
        },
        QueryParams: operations.GetCallLogsQueryParams{
            DestinationUser: "et",
            Direction: "Inbound",
            EndGte: "maiores",
            EndLte: "doloribus",
            From: "dicta",
            Page: 5.100000,
            PageSize: 32.099998,
            SourceUser: "quibusdam",
            StartGte: "amet",
            StartLte: "ea",
            To: "possimus",
        },
    }
    
    res, err := s.GetCallLogs(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CallLogsHalResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->