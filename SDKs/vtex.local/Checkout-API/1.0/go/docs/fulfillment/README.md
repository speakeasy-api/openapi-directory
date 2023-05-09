# Fulfillment

### Available Operations

* [GetAddressByPostalCode](#getaddressbypostalcode) - Get address by postal code
* [ListPickupPpointsByLocation](#listpickupppointsbylocation) - List pickup points by location

## GetAddressByPostalCode

Retrieves address information for a given postal code and country.

This request can be used to implement auto complete functionality when a customer needs to fill in an address.

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
            AppKey: "YOUR_API_KEY_HERE",
            AppToken: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Fulfillment.GetAddressByPostalCode(ctx, operations.GetAddressByPostalCodeRequest{
        Accept: "quasi",
        ContentType: "reiciendis",
        CountryCode: "WS",
        PostalCode: "45906-4700",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ListPickupPpointsByLocation

Retrieves information on pickup points close to a given location determined by geocoordinates or postal code.

The pickup points returned are not necessarily all active ones. Make sure to validate the information consumed by integrations.

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
            AppKey: "YOUR_API_KEY_HERE",
            AppToken: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Fulfillment.ListPickupPpointsByLocation(ctx, operations.ListPickupPpointsByLocationRequest{
        Accept: "reprehenderit",
        ContentType: "ut",
        CountryCode: sdk.String("WS"),
        GeoCoordinates: []float64{
            -47.924747467041016,
        },
        PostalCode: sdk.String("24163"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
