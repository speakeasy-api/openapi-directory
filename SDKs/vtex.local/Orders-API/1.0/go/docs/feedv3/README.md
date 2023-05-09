# FeedV3

### Available Operations

* [Commititemfeedorderstatus](#commititemfeedorderstatus) - Commit feed items
* [FeedConfiguration](#feedconfiguration) - Create or update feed configuration
* [FeedConfigurationDelete](#feedconfigurationdelete) - Delete feed configuration
* [GetFeedConfiguration](#getfeedconfiguration) - Get feed configuration
* [Getfeedorderstatus1](#getfeedorderstatus1) - Retrieve feed items
* [TestJSONataExpression](#testjsonataexpression) - Test JSONata expression

## Commititemfeedorderstatus

Commit items in the [feed](https://developers.vtex.com/docs/guides/orders-feed) queue.

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
    res, err := s.FeedV3.Commititemfeedorderstatus(ctx, operations.CommititemfeedorderstatusRequest{
        Accept: "delectus",
        CommititemfeedorderstatusRequest: shared.CommititemfeedorderstatusRequest{
            Handles: []string{
                "suscipit",
                "molestiae",
            },
        },
        ContentType: "minus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Commititemfeedorderstatus200TextPlainObject != nil {
        // handle response
    }
}
```

## FeedConfiguration

The Orders Feed v3 is the best way to create order integrations. Below you can find details on the configuration API specification, and to know more see our [Feed v3 guide](https://developers.vtex.com/vtex-rest-api/docs/orders-feed) and our [order integration guide](https://developers.vtex.com/vtex-rest-api/docs/erp-integration-set-up-order-integration)

There are two types of filtering that can be used. The `FromWorkflow` type filters orders by status, whereas the `FromOrders` type uses JSONata expressions to filter orders according to any property in the orders JSON document. This enables stores to filter delivered orders and orders in which products have been added or removed, for example. To learn more, access the [JSONata documentation](https://docs.jsonata.org/overview.html) and test filtering JSONata expressions with our [Test JSONata expression](https://developers.vtex.com/docs/api-reference/orders-api#post-/api/orders/expressions/jsonata) endpoint.

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
    res, err := s.FeedV3.FeedConfiguration(ctx, operations.FeedConfigurationRequest{
        Accept: "placeat",
        ContentType: "voluptatum",
        FeedConfigurationRequest: shared.FeedConfigurationRequest{
            Filter: shared.FeedFilter{
                DisableSingleFire: sdk.Bool(false),
                Expression: sdk.String("iusto"),
                Status: []string{
                    "nisi",
                    "recusandae",
                    "temporibus",
                },
                Type: "ab",
            },
            Queue: shared.Queue{
                MessageRetentionPeriodInSeconds: 3456000,
                VisibilityTimeoutInSeconds: 250,
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## FeedConfigurationDelete

Deletes the configuration set up in [Feed v3](https://developers.vtex.com/docs/guides/orders-feed).

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
    res, err := s.FeedV3.FeedConfigurationDelete(ctx, operations.FeedConfigurationDeleteRequest{
        Accept: "quis",
        ContentType: "veritatis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetFeedConfiguration

The Orders Feed v3 is the best way to create order integrations. Below you can find details on the configuration API specification, and to know more see our [Feed v3 guide](https://developers.vtex.com/vtex-rest-api/docs/orders-feed) and our [order integration guide](https://developers.vtex.com/vtex-rest-api/docs/erp-integration-set-up-order-integration).

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
    res, err := s.FeedV3.GetFeedConfiguration(ctx, operations.GetFeedConfigurationRequest{
        Accept: "deserunt",
        ContentType: "perferendis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetFeedConfiguration200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## Getfeedorderstatus1

Retrieve items from [feed](https://developers.vtex.com/docs/guides/orders-feed) queue. 

The event will be removed if the message `send retry` is equal to, or greater than the maximum retention period.

> This API will return `404 Not Found` if there is no [Feed Configuration](https://developers.vtex.com/docs/guides/orders-feed) available for the given X-VTEX-API-AppKey.

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
    res, err := s.FeedV3.Getfeedorderstatus1(ctx, operations.Getfeedorderstatus1Request{
        Accept: "ipsam",
        ContentType: "repellendus",
        Maxlot: "sapiente",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Getfeedorderstatuses != nil {
        // handle response
    }
}
```

## TestJSONataExpression

This endpoint allows you to test a JSON document with a JSONata expression, returning `true` if the document meets the criteria posed in the expression, or `false` if it does not.

Since JSONata expressions can be used to filter order updates in the [Orders API feed and hook](https://developers.vtex.com/docs/guides/orders-feed), this endpoint can be used to test an expression's results before configuring the [feed or hook](https://developers.vtex.com/docs/guides/orders-feed).

Learn more about how to use JSONata expressions, in the [JSONata documentation](https://docs.jsonata.org/overview.html).

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
    res, err := s.FeedV3.TestJSONataExpression(ctx, operations.TestJSONataExpressionRequest{
        Accept: "quo",
        ContentType: "odit",
        TestJSONataExpression: &shared.TestJSONataExpression{
            Document: "at",
            Expression: "at",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
