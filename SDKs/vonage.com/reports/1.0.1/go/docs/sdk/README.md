# SDK

## Overview

The Vonage Business Cloud Reports API enables you to retrieve call logs for your account.

Your application must subscribe to the Reports API suite to use this API.


### Available Operations

* [GetCallLogs](#getcalllogs) - Retrieve call logs for your account

## GetCallLogs

Retrieve call logs for your account

### Example Usage

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
    res, err := s.SDK.GetCallLogs(ctx, operations.GetCallLogsRequest{
        AccountID: "iure",
        DestinationUser: sdk.String("magnam"),
        Direction: operations.GetCallLogsDirectionEnumOutbound.ToPointer(),
        EndGte: sdk.String("ipsa"),
        EndLte: sdk.String("delectus"),
        From: sdk.String("tempora"),
        Page: 3834.41,
        PageSize: 4776.65,
        SourceUser: sdk.String("minus"),
        StartGte: "placeat",
        StartLte: "voluptatum",
        To: sdk.String("iusto"),
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
