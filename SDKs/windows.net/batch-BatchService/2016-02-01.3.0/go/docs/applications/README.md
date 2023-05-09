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
        APIVersion: "iure",
        ApplicationID: "magnam",
        ClientRequestID: sdk.String("debitis"),
        OcpDate: sdk.String("ipsa"),
        ReturnClientRequestID: sdk.Bool(false),
        Timeout: sdk.Int(963663),
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
        APIVersion: "tempora",
        ClientRequestID: sdk.String("suscipit"),
        Maxresults: sdk.Int(477665),
        OcpDate: sdk.String("minus"),
        ReturnClientRequestID: sdk.Bool(false),
        Timeout: sdk.Int(812169),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ApplicationListResult != nil {
        // handle response
    }
}
```
