# OrderHook

### Available Operations

* [DeleteHookConfiguration](#deletehookconfiguration) - Delete hook configuration
* [GetHookConfiguration](#gethookconfiguration) - Get hook configuration
* [HookConfiguration](#hookconfiguration) - Create or update hook configuration

## DeleteHookConfiguration

Deletes a given hook configuration.

Learn more with the [orders hook guide](https://developers.vtex.com/vtex-rest-api/docs/orders-feed#hook).

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
    res, err := s.OrderHook.DeleteHookConfiguration(ctx, operations.DeleteHookConfigurationRequest{
        Accept: "accusamus",
        ContentType: "commodi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetHookConfiguration

Retrieves a given hook's configuration details. Learn more with the [orders hook guide](https://developers.vtex.com/vtex-rest-api/docs/orders-feed#hook). 

> 📘 Onboarding guide 
>
> Check the new [Orders onboarding guide](https://developers.vtex.com/vtex-rest-api/docs/orders-overview). We created this guide to improve the onboarding experience for developers at VTEX. It assembles all documentation on our Developer Portal about Orders and is organized by focusing on the developer's journey.



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
    res, err := s.OrderHook.GetHookConfiguration(ctx, operations.GetHookConfigurationRequest{
        Accept: "repudiandae",
        ContentType: "quae",
        ClientEmail: sdk.String("customer@mail.com"),
        Page: sdk.String("10"),
        PerPage: sdk.String("15"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## HookConfiguration

Configures filtering rules applied to orders hook. Learn more with the [orders hook guide](https://developers.vtex.com/vtex-rest-api/docs/orders-feed#hook).

There are two types of filtering that can be used: 

 - `FromWorkflow`: filters orders by status.

 - `FromOrders`: uses JSONata expressions to filter orders according to any property in the orders JSON document.

 This enables stores to filter delivered orders and orders in which products have been added or removed, for example.

To learn more, access the [JSONata documentation](https://docs.jsonata.org/overview.html) and test filtering JSONata expressions with our [expressions API](https://developers.vtex.com/docs/api-reference/orders-api#post-/api/orders/expressions/jsonata).

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
    res, err := s.OrderHook.HookConfiguration(ctx, operations.HookConfigurationRequest{
        Accept: "ipsum",
        ContentType: "quidem",
        HookConfigurationRequest: shared.HookConfigurationRequest{
            Filter: shared.HookFilter{
                DisableSingleFire: sdk.Bool(false),
                Expression: sdk.String("molestias"),
                Status: []string{
                    "pariatur",
                    "modi",
                    "praesentium",
                },
                Type: "rem",
            },
            Hook: shared.Hook{
                Headers: shared.Headers{
                    Key: "voluptates",
                },
                URL: "quasi",
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.HookConfiguration != nil {
        // handle response
    }
}
```
