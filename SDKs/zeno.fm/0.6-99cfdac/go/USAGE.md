<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.APIV2.CreatePodcast(ctx, operations.CreatePodcastRequestBody{
        FileLogo: operations.CreatePodcastRequestBodyFileLogo{
            Content: []byte("corrupti"),
            FileLogo: "provident",
        },
        Podcast: shared.Podcast{
            Author: sdk.String("distinctio"),
            Block: sdk.Bool(false),
            Categories: []string{
                "unde",
                "nulla",
                "corrupti",
                "illum",
            },
            Copyright: sdk.String("vel"),
            Country: sdk.String("Netherlands Antilles"),
            Description: "deserunt",
            Explicit: sdk.Bool(false),
            Image: sdk.String("suscipit"),
            Key: sdk.String("iure"),
            Keywords: []string{
                "debitis",
                "ipsa",
            },
            Language: "delectus",
            Link: sdk.String("tempora"),
            OwnerEmail: sdk.String("suscipit"),
            OwnerName: sdk.String("molestiae"),
            ShowType: sdk.String("minus"),
            Subtitle: sdk.String("placeat"),
            Summary: "voluptatum",
            Title: "Ms.",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->