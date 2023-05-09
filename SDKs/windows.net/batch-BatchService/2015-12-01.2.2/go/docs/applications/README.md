# Applications

### Available Operations

* [ApplicationGet](#applicationget) - Gets information about the specified application.
* [ApplicationList](#applicationlist) - Lists all of the applications available in the specified account.

## ApplicationGet

Gets information about the specified application.

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
    res, err := s.Applications.ApplicationGet(ctx, operations.ApplicationGetRequest{
        APIVersion: "nulla",
        ApplicationID: "corrupti",
        ClientRequestID: sdk.String("illum"),
        OcpDate: sdk.String("vel"),
        ReturnClientRequestID: sdk.Bool(false),
        Timeout: sdk.Int(623564),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ApplicationSummary != nil {
        // handle response
    }
}
```

## ApplicationList

Lists all of the applications available in the specified account.

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
    res, err := s.Applications.ApplicationList(ctx, operations.ApplicationListRequest{
        APIVersion: "deserunt",
        ClientRequestID: sdk.String("suscipit"),
        Maxresults: sdk.Int(437587),
        OcpDate: sdk.String("magnam"),
        ReturnClientRequestID: sdk.Bool(false),
        Timeout: sdk.Int(891773),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ApplicationListResult != nil {
        // handle response
    }
}
```
