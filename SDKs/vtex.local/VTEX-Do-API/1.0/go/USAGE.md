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
<!-- End SDK Example Usage -->