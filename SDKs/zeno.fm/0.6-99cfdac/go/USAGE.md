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
            APIKey: shared.SchemeAPIKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.CreatePodcastRequest{
        Request: &operations.CreatePodcastRequestBody{
            FileLogo: operations.CreatePodcastRequestBodyFileLogo{
                Content: []byte("unde"),
                FileLogo: "deserunt",
            },
            Podcast: shared.Podcast{
                Author: "porro",
                Block: false,
                Categories: []string{
                    "id",
                    "vero",
                    "perspiciatis",
                    "nulla",
                },
                Copyright: "nihil",
                Country: "Netherlands Antilles",
                Description: "facilis",
                Explicit: false,
                Image: "eum",
                Key: "iusto",
                Keywords: []string{
                    "saepe",
                    "inventore",
                },
                Language: "sapiente",
                Link: "enim",
                OwnerEmail: "eum",
                OwnerName: "voluptatum",
                ShowType: "autem",
                Subtitle: "vel",
                Summary: "non",
                Title: "Central Intranet Coordinator",
            },
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