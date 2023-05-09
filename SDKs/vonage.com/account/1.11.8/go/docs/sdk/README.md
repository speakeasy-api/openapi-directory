# SDK

## Overview

The Vonage Business Cloud Account API enables you to retrieve information about accounts.

Your application must subscribe to the Provisioning API suite to use this API.


### Available Operations

* [AccountCtrlGetAccountServicesByAccountID](#accountctrlgetaccountservicesbyaccountid) - Get account data by ID
* [AccountCtrlGetLocationByID](#accountctrlgetlocationbyid) - Get location data by account ID and location ID
* [AccountCtrlGetLocationsByAccountID](#accountctrlgetlocationsbyaccountid) - Get account locations data by account ID

## AccountCtrlGetAccountServicesByAccountID

Get account data by ID

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
    res, err := s.SDK.AccountCtrlGetAccountServicesByAccountID(ctx, operations.AccountCtrlGetAccountServicesByAccountIDRequest{
        AccountID: 5928.45,
    }, operations.AccountCtrlGetAccountServicesByAccountIDSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AccountHalResponse != nil {
        // handle response
    }
}
```

## AccountCtrlGetLocationByID

Get location data by account ID and location ID

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
    res, err := s.SDK.AccountCtrlGetLocationByID(ctx, operations.AccountCtrlGetLocationByIDRequest{
        AccountID: 7151.9,
        LocationID: 8442.66,
    }, operations.AccountCtrlGetLocationByIDSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LocationHalResponse != nil {
        // handle response
    }
}
```

## AccountCtrlGetLocationsByAccountID

Get account locations data by account ID

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
    res, err := s.SDK.AccountCtrlGetLocationsByAccountID(ctx, operations.AccountCtrlGetLocationsByAccountIDRequest{
        AccountID: 6027.63,
    }, operations.AccountCtrlGetLocationsByAccountIDSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LocationsHalResponse != nil {
        // handle response
    }
}
```
