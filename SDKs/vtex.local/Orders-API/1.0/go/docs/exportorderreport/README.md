# ExportOrderReport

### Available Operations

* [StatusCompleted](#statuscompleted) - Export order report with status 'Completed'
* [StatusInProgress](#statusinprogress) - Export order report with status 'In Progress'

## StatusCompleted

Retrieves a list of all order reports that are `completed`, by `accountName`. Be aware that the scope of the export log is per user. 

> This endpoint is for VTEX internal use, and it is not meant to be used by clients.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            AppKey: "YOUR_API_KEY_HERE",
            AppToken: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ExportOrderReport.StatusCompleted(ctx, operations.StatusCompletedRequest{
        Accept: "error",
        ContentType: "deserunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ExportCompletedResponses != nil {
        // handle response
    }
}
```

## StatusInProgress

Retrieves a list of all order reports that are `in progress`, by `accountName`. Be aware that the scope of the export log is per user. 

> This endpoint is for VTEX internal use, and it is not meant to be used by clients.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            AppKey: "YOUR_API_KEY_HERE",
            AppToken: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ExportOrderReport.StatusInProgress(ctx, operations.StatusInProgressRequest{
        Accept: "suscipit",
        ContentType: "iure",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ExportInProgressResponses != nil {
        // handle response
    }
}
```
