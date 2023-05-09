# HTML

## Overview

Get full HTML content of pages with proxies and Chrome JS rendering

### Available Operations

* [GetHTML](#gethtml) - Page HTML by URL

## GetHTML

Returns just HTML on success, JSON on error

### Example Usage

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
    res, err := s.HTML.GetHTML(ctx, operations.GetHTMLRequest{
        Country: shared.CountryEnumCa.ToPointer(),
        Device: shared.DeviceEnumMobile.ToPointer(),
        ErrorOn404: sdk.Bool(false),
        ErrorOnRedirect: sdk.Bool(false),
        Headers: map[string]string{
            "quibusdam": "unde",
            "nulla": "corrupti",
            "illum": "vel",
        },
        Js: sdk.Bool(false),
        JsTimeout: sdk.Int64(623564),
        Proxy: shared.ProxyEnumResidential.ToPointer(),
        Timeout: sdk.Int64(384382),
        URL: "iure",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetHTML200TextHTMLString != nil {
        // handle response
    }
}
```
