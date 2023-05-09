# Addresses

### Available Operations

* [CreateNewCustomerAddress](#createnewcustomeraddress) - Create new customer address
* [DeleteCustomerAddress](#deletecustomeraddress) - Delete customer address
* [UpdateCustomerAddress](#updatecustomeraddress) - Update customer address

## CreateNewCustomerAddress

Creates new customer address. 

> You can use this request to create customer addresses according to any `AD` schema. Because of this, you are not restricted to using the fields exemplified below in your requests. But you should be aware of the fields allowed or required for the schemas you are using. Learn more about how to use [Master Data v2 schemas](https://developers.vtex.com/vtex-rest-api/docs/master-data-schema-lifecycle).

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

## DeleteCustomerAddress

Deletes a customer address.

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
    res, err := s.Addresses.DeleteCustomerAddress(ctx, operations.DeleteCustomerAddressRequest{
        Accept: "application/json",
        ContentType: "application/json",
        ID: "Client-b818cbda-e489-11e6-94f4-0ac138d2d42e",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DocumentResponse != nil {
        // handle response
    }
}
```

## UpdateCustomerAddress

Partially updates a customer address.

> You can use this request to update customer addresses according to any `AD` schema. Because of this, you are not restricted to using the fields exemplified below in your requests. But you should be aware of the fields allowed or required for the schemas you are using. Learn more about how to use [Master Data v2 schemas](https://developers.vtex.com/vtex-rest-api/docs/master-data-schema-lifecycle).

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
            AppKey: "YOUR_API_KEY_HERE",
            AppToken: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Addresses.UpdateCustomerAddress(ctx, operations.UpdateCustomerAddressRequest{
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
        ID: "Client-b818cbda-e489-11e6-94f4-0ac138d2d42e",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DocumentResponse != nil {
        // handle response
    }
}
```
