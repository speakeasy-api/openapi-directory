# ChangeSeller

### Available Operations

* [GetWindowToChangeSeller](#getwindowtochangeseller) - Get window to change seller
* [UpdateWindowToChangeSeller](#updatewindowtochangeseller) - Update window to change seller

## GetWindowToChangeSeller

Retrieves a marketplace’s window to change seller, that is, the period when it is possible to choose another seller to fulfill a given order after the original seller has canceled it.

The default period for this window is of 2 days, but it can be configured by the request Update window to change seller.

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
    res, err := s.ChangeSeller.GetWindowToChangeSeller(ctx, operations.GetWindowToChangeSellerRequest{
        Accept: "distinctio",
        ContentType: "quibusdam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetWindowToChangeSeller200TextPlainInteger != nil {
        // handle response
    }
}
```

## UpdateWindowToChangeSeller

Updates a marketplace’s window to change seller, that is, the period when it is possible to choose another seller to fulfill a given order after the original seller has canceled it.

It is possible to check the current window using the request Get window to change seller.

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
    res, err := s.ChangeSeller.UpdateWindowToChangeSeller(ctx, operations.UpdateWindowToChangeSellerRequest{
        Accept: "unde",
        ContentType: "nulla",
        RequestBody: operations.UpdateWindowToChangeSellerRequestBody{
            WaitingTime: 544883,
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
