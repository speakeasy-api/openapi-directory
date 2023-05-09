# Events

### Available Operations

* [GetEvent](#getevent) - Get event
* [GetEventsCount](#geteventscount) - Get events count
* [ListEvents](#listevents) - List events

## GetEvent

Get event

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
    res, err := s.Events.GetEvent(ctx, operations.GetEventRequest{
        ID: "ae395efb-9ba8-48f3-a669-97074ba4469b",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Events != nil {
        // handle response
    }
}
```

## GetEventsCount

Get events count

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
    res, err := s.Events.GetEventsCount(ctx, operations.GetEventsCountRequest{
        Direction: operations.GetEventsCountDirectionEnumInbound.ToPointer(),
        FromDate: sdk.Int64(878453),
        States: operations.GetEventsCountStatesEnumInitializing.ToPointer(),
        ToDate: sdk.Int64(102863),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EventsCount != nil {
        // handle response
    }
}
```

## ListEvents

List events

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
    res, err := s.Events.ListEvents(ctx, operations.ListEventsRequest{
        Direction: operations.ListEventsDirectionEnumInbound.ToPointer(),
        FromDate: sdk.Int64(92373),
        Offset: sdk.Int64(569965),
        Order: operations.ListEventsOrderEnumDesc.ToPointer(),
        Size: sdk.Int64(590873),
        Sort: sdk.String("quos"),
        States: operations.ListEventsStatesEnumDetached.ToPointer(),
        ToDate: sdk.Int64(33625),
        Types: operations.ListEventsTypesEnumCall.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Events != nil {
        // handle response
    }
}
```
