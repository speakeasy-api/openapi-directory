# Attachments

## Overview

The `attachments` API allows you to upload and download files. 

In case of images, the `content-type` header is filled with` image/jpg`.

### Available Operations

* [Retrieveattachment](#retrieveattachment) - Retrieve attachment
* [Saveattachment](#saveattachment) - Save attachment

## Retrieveattachment

Use this API to retrieve a file.

Be sure to include the file extension in the name. Like in this example:
```
/dataentities/CL/documents/123/file/attachments/image.png
```

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
    res, err := s.Attachments.Retrieveattachment(ctx, operations.RetrieveattachmentRequest{
        Acronym: "repellendus",
        Field: "sapiente",
        FileName: "quo",
        ID: "2ddf7cc7-8ca1-4ba9-a8fc-816742cb7392",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## Saveattachment

This API allows you to save a file in a field of type `File`.

When using in javascript, you must add the header `content-type` with value `multipart/form-data;`

You can upload more than one file. Just add a new field in the `form-data` with type `File`.

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
    res, err := s.Attachments.Saveattachment(ctx, operations.SaveattachmentRequest{
        RequestBody: &operations.SaveattachmentRequestBody{
            File: [][]byte{
                []byte("ad"),
            },
        },
        Acronym: "natus",
        Field: "sed",
        ID: "9396fea7-596e-4b10-baaa-2352c5955907",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
