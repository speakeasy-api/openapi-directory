# Files

## Overview

To change the description use /examples/TagsDescriptions.json

### Available Operations

* [UploadFile](#uploadfile) - Uploads a temporary file (ie. for XML import). Returns token which can be used in other API calls.

## UploadFile

When a file is required by an operation (ie. task creation) it must be uploaded previously to the API.
Uploading a file will result in a file token, which can be used to reference this file in other API calls.
 Each file must be uploaded separately.
 Keep in mind that file token has limited validity (ie. 10 minutes).
 Therefore files must be uploaded just before issuing API call which reference them.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            XAuthAccessToken: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Files.UploadFile(ctx, shared.FileToUploadDto{
        File: &shared.FileToUploadDtoFile{
            Content: []byte("officia"),
            File: "suscipit",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
