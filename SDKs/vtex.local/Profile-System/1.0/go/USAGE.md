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
            AppKey: "YOUR_API_KEY_HERE",
            AppToken: "YOUR_API_KEY_HERE",
        }),
    )

    req := operations.CreateClientAddressRequest{
        Accept: "application/json",
        ContentType: "application/json",
        Address: &shared.Address{
            AdministrativeAreaLevel1: "RJ",
            CountryCode: "BR",
            CountryName: "Brasil",
            Locality: "Locality",
            LocalityAreaLevel1: "Locality area",
            PostalCode: "20200-000",
            Route: "51",
            StreetNumber: "999",
        },
        AlternativeKey: "email",
        ProfileID: "70caf394-8534-447e-a0ca-1803c669c771",
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