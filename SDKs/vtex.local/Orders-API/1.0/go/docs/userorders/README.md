# UserOrders

### Available Operations

* [Userorderdetails](#userorderdetails) - Retrieve user order details
* [Userorderslist](#userorderslist) - Retrieve user's orders

## Userorderdetails

Lists all details from a user's order, through client's perspective. 

> Note that these requests are meant to be made by **Call center operator** profiles. Otherwise, they will return only orders from the same email making the request.

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
    res, err := s.UserOrders.Userorderdetails(ctx, operations.UserorderdetailsRequest{
        Accept: "eos",
        ContentType: "atque",
        ClientEmail: "customer@mail.com",
        OrderID: "1172452900788-01",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Userorderdetails != nil {
        // handle response
    }
}
```

## Userorderslist

Lists all orders from a given client, filtering by their email. 

> Note that these requests are meant to be made by **Call center operator** profiles. Otherwise, they will return only orders from the same email making the request.

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
    res, err := s.UserOrders.Userorderslist(ctx, operations.UserorderslistRequest{
        Accept: "sit",
        ContentType: "fugiat",
        ClientEmail: "customer@mail.com",
        Page: "15",
        PerPage: "15",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Userorderslist != nil {
        // handle response
    }
}
```
