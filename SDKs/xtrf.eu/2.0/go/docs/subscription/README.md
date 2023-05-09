# Subscription

## Overview

To change the description use /examples/TagsDescriptions.json

### Available Operations

* [AreHooksSupported](#arehookssupported) - This method can be used to determine if hooks are supported.
* [GetAll4](#getall4) - Returns all subscriptions
* [Subscribe](#subscribe) - Subscribe to event
* [Unsubscribe](#unsubscribe) - Unsubscribe from event

## AreHooksSupported

This method can be used to determine if hooks are supported.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            XAuthAccessToken: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Subscription.AreHooksSupported(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetAll4

Returns all subscriptions. Subscriptions are automatically removed if they do not work (ie. if 404 status is returned). To improve notification reliability one can use this method to check if subscription is still active and re-subscribe if necessary.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            XAuthAccessToken: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Subscription.GetAll4(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## Subscribe

Subscribe to event. Returns subscription Id.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            XAuthAccessToken: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Subscription.Subscribe(ctx, shared.SubscriptionDTO{
        Embed: sdk.String("quae"),
        Event: sdk.String("magni"),
        Filter: sdk.String("officiis"),
        URL: sdk.String("sed"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Subscribe201ApplicationVndXtrfV1PlusJSONString != nil {
        // handle response
    }
}
```

## Unsubscribe

Unsubscribe from job status changed event

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
            XAuthAccessToken: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Subscription.Unsubscribe(ctx, operations.UnsubscribeRequest{
        SubscriptionID: "necessitatibus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
