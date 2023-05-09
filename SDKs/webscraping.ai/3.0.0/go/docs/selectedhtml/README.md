# SelectedHTML

## Overview

Get HTML content of selected page areas (like price, search results, page title, etc.)

### Available Operations

* [GetSelected](#getselected) - HTML of a selected page area by URL and CSS selector
* [GetSelectedMultiple](#getselectedmultiple) - HTML of multiple page areas by URL and CSS selectors

## GetSelected

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
    res, err := s.SelectedHTML.GetSelected(ctx, operations.GetSelectedRequest{
        Country: shared.CountryEnumDe.ToPointer(),
        Device: shared.DeviceEnumTablet.ToPointer(),
        ErrorOn404: sdk.Bool(false),
        ErrorOnRedirect: sdk.Bool(false),
        Headers: map[string]string{
            "delectus": "tempora",
        },
        Js: sdk.Bool(false),
        JsTimeout: sdk.Int64(383441),
        Proxy: shared.ProxyEnumDatacenter.ToPointer(),
        Selector: sdk.String("minus"),
        Timeout: sdk.Int64(812169),
        URL: "voluptatum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSelected200TextHTMLString != nil {
        // handle response
    }
}
```

## GetSelectedMultiple

Always returns JSON

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
    res, err := s.SelectedHTML.GetSelectedMultiple(ctx, operations.GetSelectedMultipleRequest{
        Country: shared.CountryEnumFr.ToPointer(),
        Device: shared.DeviceEnumMobile.ToPointer(),
        ErrorOn404: sdk.Bool(false),
        ErrorOnRedirect: sdk.Bool(false),
        Headers: map[string]string{
            "recusandae": "temporibus",
            "ab": "quis",
        },
        Js: sdk.Bool(false),
        JsTimeout: sdk.Int64(87129),
        Proxy: shared.ProxyEnumResidential.ToPointer(),
        Selectors: []string{
            "ipsam",
        },
        Timeout: sdk.Int64(832620),
        URL: "sapiente",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SelectedAreas != nil {
        // handle response
    }
}
```
