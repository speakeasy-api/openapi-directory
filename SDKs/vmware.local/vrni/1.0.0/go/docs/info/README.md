# Info

## Overview

Info APIs

### Available Operations

* [GetVersion](#getversion) - Show version info

## GetVersion

Show version info

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
    res, err := s.Info.GetVersion(ctx, operations.GetVersionSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VersionResponse != nil {
        // handle response
    }
}
```
