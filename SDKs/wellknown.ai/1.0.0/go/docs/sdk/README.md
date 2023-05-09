# SDK

## Overview

A registry of AI Plugins.

### Available Operations

* [GetAPIPlugins](#getapiplugins) - Returns a list of Wellknown ai-plugins json objects from the Wellknown ai-plugins registry.

## GetAPIPlugins

Returns a list of Wellknown ai-plugins json objects from the Wellknown ai-plugins registry.

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
    res, err := s.SDK.GetAPIPlugins(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
