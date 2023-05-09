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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.GetCallLogs(ctx, operations.GetCallLogsRequest{
        AccountID: "corrupti",
        DestinationUser: sdk.String("provident"),
        Direction: operations.GetCallLogsDirectionEnumOutbound.ToPointer(),
        EndGte: sdk.String("quibusdam"),
        EndLte: sdk.String("unde"),
        From: sdk.String("nulla"),
        Page: 5448.83,
        PageSize: 8472.52,
        SourceUser: sdk.String("vel"),
        StartGte: "error",
        StartLte: "deserunt",
        To: sdk.String("suscipit"),
    }, operations.GetCallLogsSecurity{
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