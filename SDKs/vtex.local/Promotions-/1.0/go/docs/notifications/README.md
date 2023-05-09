# Notifications

### Available Operations

* [Usagenotification](#usagenotification) - Usage notification

## Usagenotification

Usage notification

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
    res, err := s.Notifications.Usagenotification(ctx, operations.UsagenotificationRequest{
        Accept: "magnam",
        ContentType: "ea",
        UsagenotificationRequest: shared.UsagenotificationRequest{
            AccountID: "quo",
            CalculatorIds: []string{
                "recusandae",
            },
            Coupon: "aspernatur",
            ItemsCount: 325310,
            OrderID: "eaque",
            ProfileID: "a",
            Used: false,
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
