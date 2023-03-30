<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            AppKey: shared.SchemeAppKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
            AppToken: shared.SchemeAppToken{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.CreateClientAddressRequest{
        PathParams: operations.CreateClientAddressPathParams{
            ProfileID: "70caf394-8534-447e-a0ca-1803c669c771",
        },
        QueryParams: operations.CreateClientAddressQueryParams{
            AlternativeKey: "email",
        },
        Headers: operations.CreateClientAddressHeaders{
            Accept: "application/json",
            ContentType: "application/json",
        },
        Request: &shared.Address{
            AdministrativeAreaLevel1: "RJ",
            CountryCode: "BR",
            CountryName: "Brasil",
            Locality: "Locality",
            LocalityAreaLevel1: "Locality area",
            PostalCode: "20200-000",
            Route: "51",
            StreetNumber: "999",
        },
    }

    ctx := context.Background()
    res, err := s.Addresses.CreateClientAddress(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateClientAddress201ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->