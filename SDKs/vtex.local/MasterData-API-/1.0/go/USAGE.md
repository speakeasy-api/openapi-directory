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
            AppKey: "YOUR_API_KEY_HERE",
            AppToken: "YOUR_API_KEY_HERE",
        }),
    )

    req := operations.RetrieveattachmentRequest{
        Acronym: "corrupti",
        Field: "provident",
        FileName: "distinctio",
        ID: "quibusdam",
    }

    ctx := context.Background()
    res, err := s.Attachments.Retrieveattachment(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->