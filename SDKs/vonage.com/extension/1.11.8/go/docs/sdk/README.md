# SDK

## Overview

The Vonage Business Cloud Extension API enables you to retrieve information about extensions.

Your application must subscribe to the Provisioning API suite to use this API.


### Available Operations

* [ExtensionCtrlGetAccountExtensionByID](#extensionctrlgetaccountextensionbyid) - Get extension data by account ID and extension number
* [ExtensionCtrlGetAccountExtensions](#extensionctrlgetaccountextensions) - Get account extensions data by account ID

## ExtensionCtrlGetAccountExtensionByID

Get extension data by account ID and extension number

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
    res, err := s.SDK.ExtensionCtrlGetAccountExtensionByID(ctx, operations.ExtensionCtrlGetAccountExtensionByIDRequest{
        AccountID: "distinctio",
        ExtensionNumber: 8442.66,
    }, operations.ExtensionCtrlGetAccountExtensionByIDSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EndUserRouteHalResponse != nil {
        // handle response
    }
}
```

## ExtensionCtrlGetAccountExtensions

Get account extensions data by account ID

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
    res, err := s.SDK.ExtensionCtrlGetAccountExtensions(ctx, operations.ExtensionCtrlGetAccountExtensionsRequest{
        AccountID: "unde",
        Email: sdk.String("Karley_Stamm@hotmail.com"),
        LocationID: sdk.Float64(6458.94),
        LoginName: sdk.String("suscipit"),
        Page: sdk.Float64(4375.87),
        PageSize: sdk.Float64(2975.34),
        PhoneNumber: sdk.String("debitis"),
    }, operations.ExtensionCtrlGetAccountExtensionsSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EndUserRouteHalResponse != nil {
        // handle response
    }
}
```
