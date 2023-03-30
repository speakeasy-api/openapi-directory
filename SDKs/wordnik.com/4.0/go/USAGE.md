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

    req := operations.GetAudioRequest{
        PathParams: operations.GetAudioPathParams{
            Word: "corrupti",
        },
        QueryParams: operations.GetAudioQueryParams{
            Limit: 592845,
            UseCanonical: "true",
        },
    }

    ctx := context.Background()
    res, err := s.Word.GetAudio(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->