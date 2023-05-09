<!-- Start SDK Example Usage -->
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
            AppKey: "YOUR_API_KEY_HERE",
            AppToken: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Addresses.CreateNewCustomerAddress(ctx, operations.CreateNewCustomerAddressRequest{
        Accept: "application/json",
        ContentType: "application/json",
        Schema: sdk.String("schema"),
        CreateUpdateAddressRequests: shared.CreateUpdateAddressRequests{
            AddressName: sdk.String("My house"),
            AddressType: sdk.String("residential"),
            City: sdk.String("Rio de Janeiro"),
            Complement: sdk.String("3rd floor"),
            Country: sdk.String("BRA"),
            Neighborhood: sdk.String("Botafogo"),
            Number: sdk.String("300"),
            PostalCode: sdk.String("12345-000"),
            ReceiverName: sdk.String("Clark Kent."),
            Reference: sdk.String("Grey building"),
            State: sdk.String("Rio de Janeiro"),
            Street: sdk.String("Praia de Botafogo"),
            UserID: sdk.String("7e03m794-a33a-11e9-84rt6-0adfa64s5a8e"),
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DocumentResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->