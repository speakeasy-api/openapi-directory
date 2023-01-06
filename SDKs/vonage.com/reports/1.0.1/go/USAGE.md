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
            AccountID: "consequatur",
        },
        QueryParams: operations.GetCallLogsQueryParams{
            DestinationUser: "placeat",
            Direction: "Outbound",
            EndGte: "excepturi",
            EndLte: "sint",
            From: "rerum",
            Page: 16.100000,
            PageSize: 21.100000,
            SourceUser: "sunt",
            StartGte: "quis",
            StartLte: "enim",
            To: "minus",
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