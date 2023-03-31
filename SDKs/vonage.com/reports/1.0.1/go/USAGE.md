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
        AccountID: "corrupti",
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
    }

    ctx := context.Background()
    res, err := s.GetCallLogs(ctx, req, operations.GetCallLogsSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CallLogsHalResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->