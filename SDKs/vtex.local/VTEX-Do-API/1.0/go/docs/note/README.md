# Note

### Available Operations

* [GetNote](#getnote) - Retrieve Note
* [GetNotesbyorderID](#getnotesbyorderid) - Get Notes by orderId
* [NewNote](#newnote) - Create Note

## GetNote

Retrieves a given note in VTEX DO, filtering by `noteId`.

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
    res, err := s.Note.GetNote(ctx, operations.GetNoteRequest{
        Accept: "application/json",
        ContentType: "application/json",
        NoteID: "654321cba",
        Reason: sdk.String("data-validation"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNote200ApplicationJSONAny != nil {
        // handle response
    }
}
```

## GetNotesbyorderID

Retrieves notes related to a specific `orderId`.

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
    res, err := s.Note.GetNotesbyorderID(ctx, operations.GetNotesbyorderIDRequest{
        Accept: "application/json",
        ContentType: "application/json",
        Page: sdk.Int64(3),
        PerPage: sdk.Int64(20),
        Reason: sdk.String("data-validation"),
        TargetID: "1172452900788-01",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNotesbyorderID200ApplicationJSONAny != nil {
        // handle response
    }
}
```

## NewNote

This endpoint creates a new note in VTEX DO. Be aware of the following limitations:

- The maximum number of notes for an order is 30.

- The maximum number of characters in a note's description is 2000.

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
    res, err := s.Note.NewNote(ctx, operations.NewNoteRequest{
        Accept: "application/json",
        ContentType: "application/json",
        RequestBody: &operations.NewNoteRequestBody{
            Description: "Order ID in the marketplace is 786-09.",
            Domain: "oms",
            Target: operations.NewNoteRequestBodyTarget{
                ID: sdk.String("v964735bdev-01"),
                Type: sdk.String("order"),
                URL: sdk.String("https://basedevmkp.vtexcommercebeta.com.br/admin/checkout/#/orders/v964741bdev-01"),
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NewNote200ApplicationJSONAny != nil {
        // handle response
    }
}
```
