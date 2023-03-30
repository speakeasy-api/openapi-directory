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

    req := operations.CreateNewCustomerAddressRequest{
        QueryParams: operations.CreateNewCustomerAddressQueryParams{
            Schema: "schema",
        },
        Headers: operations.CreateNewCustomerAddressHeaders{
            Accept: "application/json",
            ContentType: "application/json",
        },
        Request: shared.CreateUpdateAddressRequests{
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