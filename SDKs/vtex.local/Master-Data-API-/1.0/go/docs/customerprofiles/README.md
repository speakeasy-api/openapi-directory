# CustomerProfiles

### Available Operations

* [CreateNewCustomerProfilev2](#createnewcustomerprofilev2) - Create new customer profile
* [DeleteCustomerProfile](#deletecustomerprofile) - Delete customer profile
* [UpdateCustomerProfile](#updatecustomerprofile) - Update customer profile

## CreateNewCustomerProfilev2

Creates new customer profile.

> You can use this request to create customer profiles according to any `CL` schema. Because of this, you are not restricted to using the fields exemplified below in your requests. But you should be aware of the fields allowed or required for the schemas you are using. Learn more about how to use [Master Data v2 schemas](https://developers.vtex.com/vtex-rest-api/docs/master-data-schema-lifecycle).

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
    res, err := s.CustomerProfiles.CreateNewCustomerProfilev2(ctx, operations.CreateNewCustomerProfilev2Request{
        Accept: "application/json",
        ContentType: "application/json",
        Schema: sdk.String("schema"),
        CreateUpdateProfileRequests: shared.CreateUpdateProfileRequests{
            Document: sdk.String("12345678900"),
            DocumentType: sdk.String("CPF"),
            Email: sdk.String("clark.kent@examplemail.com"),
            FirstName: sdk.String("Clark"),
            IsCorporate: sdk.Bool(false),
            IsNewsletterOptIn: sdk.Bool(false),
            LastName: sdk.String("Kent"),
            LocaleDefault: sdk.String("en-US"),
            Phone: sdk.String("+12025550195"),
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

## DeleteCustomerProfile

Deletes a customer profile.

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
    res, err := s.CustomerProfiles.DeleteCustomerProfile(ctx, operations.DeleteCustomerProfileRequest{
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

## UpdateCustomerProfile

Partially updates a customer profile.

> You can use this request to update customer profiles according to any `CL` schema. Because of this, you are not restricted to using the fields exemplified below in your requests. But you should be aware of the fields allowed or required for the schemas you are using. Learn more about how to use [Master Data v2 schemas](https://developers.vtex.com/vtex-rest-api/docs/master-data-schema-lifecycle).

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
    res, err := s.CustomerProfiles.UpdateCustomerProfile(ctx, operations.UpdateCustomerProfileRequest{
        Accept: "application/json",
        ContentType: "application/json",
        Schema: sdk.String("schema"),
        CreateUpdateProfileRequests: shared.CreateUpdateProfileRequests{
            Document: sdk.String("12345678900"),
            DocumentType: sdk.String("CPF"),
            Email: sdk.String("clark.kent@examplemail.com"),
            FirstName: sdk.String("Clark"),
            IsCorporate: sdk.Bool(false),
            IsNewsletterOptIn: sdk.Bool(false),
            LastName: sdk.String("Kent"),
            LocaleDefault: sdk.String("en-US"),
            Phone: sdk.String("+12025550195"),
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
