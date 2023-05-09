# PayeeLocations

## Overview

When you enter a transaction and specify a payee on the YNAB mobile apps, the GPS coordinates for that location are stored, with your permission, so that the next time you are in the same place (like the Grocery store) we can pre-populate nearby payees for you!  It’s handy and saves you time.  This resource makes these locations available.  Locations will not be available for all payees.

### Available Operations

* [GetPayeeLocationByID](#getpayeelocationbyid) - Single payee location
* [GetPayeeLocations](#getpayeelocations) - List payee locations
* [GetPayeeLocationsByPayee](#getpayeelocationsbypayee) - List locations for a payee

## GetPayeeLocationByID

Returns a single payee location

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
            Bearer: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.PayeeLocations.GetPayeeLocationByID(ctx, operations.GetPayeeLocationByIDRequest{
        BudgetID: "aut",
        PayeeLocationID: "dignissimos",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PayeeLocationResponse != nil {
        // handle response
    }
}
```

## GetPayeeLocations

Returns all payee locations

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
            Bearer: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.PayeeLocations.GetPayeeLocations(ctx, operations.GetPayeeLocationsRequest{
        BudgetID: "dicta",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PayeeLocationsResponse != nil {
        // handle response
    }
}
```

## GetPayeeLocationsByPayee

Returns all payee locations for a specified payee

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
            Bearer: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.PayeeLocations.GetPayeeLocationsByPayee(ctx, operations.GetPayeeLocationsByPayeeRequest{
        BudgetID: "maiores",
        PayeeID: "natus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PayeeLocationsResponse != nil {
        // handle response
    }
}
```
