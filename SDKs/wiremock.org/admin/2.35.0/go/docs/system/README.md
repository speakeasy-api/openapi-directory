# System

## Overview

Global operations

### Available Operations

* [PostAdminReset](#postadminreset) - Reset mappings and request journal
* [PostAdminSettings](#postadminsettings) - Update global settings
* [PostAdminShutdown](#postadminshutdown) - Shutdown the WireMock server

## PostAdminReset

Reset mappings to the default state and reset the request journal

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.System.PostAdminReset(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostAdminSettings

Update global settings

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
    res, err := s.System.PostAdminSettings(ctx, operations.PostAdminSettingsRequestBody{})
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostAdminShutdown

Shutdown the WireMock server

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.System.PostAdminShutdown(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
