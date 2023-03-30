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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            AppKey: shared.SchemeAppKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
            AppToken: shared.SchemeAppToken{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.GetNoteRequest{
        PathParams: operations.GetNotePathParams{
            NoteID: "654321cba",
        },
        QueryParams: operations.GetNoteQueryParams{
            Reason: "data-validation",
        },
        Headers: operations.GetNoteHeaders{
            Accept: "application/json",
            ContentType: "application/json",
        },
    }

    ctx := context.Background()
    res, err := s.Note.GetNote(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNote200ApplicationJSONAny != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->