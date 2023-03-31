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

    req := operations.CreateNewCustomerAddressRequest{
        Accept: "application/json",
        ContentType: "application/json",
        Schema: "schema",
        CreateUpdateAddressRequests: shared.CreateUpdateAddressRequests{
            AddressName: "My house",
            AddressType: "residential",
            City: "Rio de Janeiro",
            Complement: "3rd floor",
            Country: "BRA",
            Neighborhood: "Botafogo",
            Number: "300",
            PostalCode: "12345-000",
            ReceiverName: "Clark Kent.",
            Reference: "Grey building",
            State: "Rio de Janeiro",
            Street: "Praia de Botafogo",
            UserID: "7e03m794-a33a-11e9-84rt6-0adfa64s5a8e",
        },
    }

    ctx := context.Background()
    res, err := s.Addresses.CreateNewCustomerAddress(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.DocumentResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->