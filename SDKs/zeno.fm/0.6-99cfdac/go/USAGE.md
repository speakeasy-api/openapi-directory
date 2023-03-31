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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    req := operations.CreatePodcastRequestBody{
        FileLogo: operations.CreatePodcastRequestBodyFileLogo{
            Content: []byte("corrupti"),
            FileLogo: "provident",
        },
        Podcast: shared.Podcast{
            Author: "distinctio",
            Block: false,
            Categories: []string{
                "unde",
                "nulla",
                "corrupti",
                "illum",
            },
            Copyright: "vel",
            Country: "Netherlands Antilles",
            Description: "deserunt",
            Explicit: false,
            Image: "suscipit",
            Key: "iure",
            Keywords: []string{
                "debitis",
                "ipsa",
            },
            Language: "delectus",
            Link: "tempora",
            OwnerEmail: "suscipit",
            OwnerName: "molestiae",
            ShowType: "minus",
            Subtitle: "placeat",
            Summary: "voluptatum",
            Title: "Ms.",
        },
    }

    ctx := context.Background()
    res, err := s.APIV2.CreatePodcast(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->