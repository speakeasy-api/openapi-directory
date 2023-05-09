# Utility

## Overview

The utility endpoint allows the Wealth Manager to upload information required by the system to support the daily operations (e.g. file uploads for daily jobs, calendar updates etc.)

### Available Operations

* [CopyFileToS3](#copyfiletos3) - Upload a file

## CopyFileToS3

Copy a file from the Wealth Manager's data store (system must have read permission for this store) to an internal data store

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Utility.CopyFileToS3(ctx, operations.CopyFileToS3Request{
        RequestBody: &operations.CopyFileToS3RequestBody{
            FilePaths: []CopyFileToS3RequestBodyFilePaths{
                operations.CopyFileToS3RequestBodyFilePaths{
                    Path: "minima",
                    Type: "nisi",
                },
            },
        },
        XAPIKey: "fugit",
    }, operations.CopyFileToS3Security{
        APISecretKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CopyFileToS3200ApplicationJSONObject != nil {
        // handle response
    }
}
```
