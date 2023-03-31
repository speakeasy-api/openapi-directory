# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/vonage.com/reports/1.0.1/go
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `GetCallLogs` - Retrieve call logs for your account
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
