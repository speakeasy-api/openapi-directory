# Plugins

### Available Operations

* [GetProvider](#getprovider) - List all the Wellknown AI Plugins.

## GetProvider

List all the Wellknown AI Plugins. Returns ai-plugin.json objects in an array

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
    res, err := s.Plugins.GetProvider(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
