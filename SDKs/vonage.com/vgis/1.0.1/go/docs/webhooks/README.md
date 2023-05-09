# Webhooks

## Overview

Webhooks are external URLs which subscribe to receive events via HTTP POST for a specified set of events.

### Available Operations

* [CreateWebhook](#createwebhook) - Create a new webhook subscription
* [DestroyWebhook](#destroywebhook) - Remove a web hook
* [ListWebhooks](#listwebhooks) - List web hooks
* [RenewWebhook](#renewwebhook) - Renews a web hook
* [ViewWebhook](#viewwebhook) - Get web hook details

## CreateWebhook

Create a new webhook subscription

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Webhooks.CreateWebhook(ctx, shared.WebhookCreate{
        Events: []shared.WebhookCreateEventsEnum{
            shared.WebhookCreateEventsEnumCall,
            shared.WebhookCreateEventsEnumCall,
            shared.WebhookCreateEventsEnumCall,
        },
        MetadataPolicy: shared.WebhookCreateMetadataPolicyEnumNone.ToPointer(),
        SigningAlgo: shared.WebhookCreateSigningAlgoEnumHmacSha256.ToPointer(),
        SigningKey: sdk.String("reiciendis"),
        URL: sdk.String("https://www.example.com"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Webhook != nil {
        // handle response
    }
}
```

## DestroyWebhook

Remove a web hook

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Webhooks.DestroyWebhook(ctx, operations.DestroyWebhookRequest{
        ID: "a563e251-6fe4-4c8b-b11e-5b7fd2ed0289",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ListWebhooks

List web hooks

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Webhooks.ListWebhooks(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Webhooks != nil {
        // handle response
    }
}
```

## RenewWebhook

Renews a web hook

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Webhooks.RenewWebhook(ctx, operations.RenewWebhookRequest{
        ID: "21cddc69-2601-4fb5-b6b0-d5f0d30c5fbb",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Webhook != nil {
        // handle response
    }
}
```

## ViewWebhook

Get web hook details

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Webhooks.ViewWebhook(ctx, operations.ViewWebhookRequest{
        ID: "25870532-02c7-43d5-be9b-90c28909b3fe",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Webhook != nil {
        // handle response
    }
}
```
