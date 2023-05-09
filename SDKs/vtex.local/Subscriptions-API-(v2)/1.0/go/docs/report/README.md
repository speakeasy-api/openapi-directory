# Report

### Available Operations

* [GetreportstatusbyID](#getreportstatusbyid) - Get report status by ID
* [RequestreportbyStatus](#requestreportbystatus) - Retrieve Subscription report by Status
* [Requestreportbydate](#requestreportbydate) - Retrieve Subscription report by date
* [Requestreportbyorderdate](#requestreportbyorderdate) - Retrieve Subscription report by order date
* [Requestreportbyschedule](#requestreportbyschedule) - Retrieve Subscription report by schedule
* [Requestreportbyupdate](#requestreportbyupdate) - Request report by update

## GetreportstatusbyID

Retrieves the Subscription's report status, filtering by its reportId.

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
    res, err := s.Report.GetreportstatusbyID(ctx, operations.GetreportstatusbyIDRequest{
        Accept: "quibusdam",
        ContentType: "unde",
        ReportID: "nulla",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## RequestreportbyStatus

Retrieves Subscriptions' reports, filtering by status. The report will be sent by email, to the address inserted in the API's path.

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
    res, err := s.Report.RequestreportbyStatus(ctx, operations.RequestreportbyStatusRequest{
        Accept: "corrupti",
        ContentType: "illum",
        RequesterEmail: "user@vtex.com.br",
        Status: 1,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## Requestreportbydate

Retrieves a report with the subscriptions created at the date interval requested

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
    res, err := s.Report.Requestreportbydate(ctx, operations.RequestreportbydateRequest{
        Accept: "vel",
        ContentType: "error",
        BeginDate: 20190101,
        EndDate: 20190701,
        RequesterEmail: "user@vtex.com.br",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## Requestreportbyorderdate

Retrieves a report regarding the Subscriptions created during the date interval of orders.

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
    res, err := s.Report.Requestreportbyorderdate(ctx, operations.RequestreportbyorderdateRequest{
        Accept: "deserunt",
        ContentType: "suscipit",
        BeginDate: 20190101,
        EndDate: 20190701,
        RequesterEmail: "user@vtex.com.br",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## Requestreportbyschedule

Retrieves a report regarding the Subscriptions scheduled to execute at the date interval requested

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
    res, err := s.Report.Requestreportbyschedule(ctx, operations.RequestreportbyscheduleRequest{
        Accept: "iure",
        ContentType: "magnam",
        BeginDate: 20190101,
        EndDate: 20190701,
        RequesterEmail: "user@vtex.com.br",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## Requestreportbyupdate

Retrieves a report regarding Subscriptions updated in the date interval chosen. The report will be sent by email, to the address inserted in the API's path.

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
    res, err := s.Report.Requestreportbyupdate(ctx, operations.RequestreportbyupdateRequest{
        Accept: "debitis",
        ContentType: "ipsa",
        BeginDate: 20190101,
        EndDate: 20190701,
        RequesterEmail: "user@vtex.com.br",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
