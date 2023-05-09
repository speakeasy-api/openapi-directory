# Settings

### Available Operations

* [EditSettings](#editsettings) - Edit Subscriptions settings
* [GetSettings](#getsettings) - Get Subscriptions Settings

## EditSettings

Edits Subscriptions settings in your store.

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
    res, err := s.Settings.EditSettings(ctx, operations.EditSettingsRequest{
        Accept: "delectus",
        ContentType: "tempora",
        Settings: shared.Settings{
            DefaultSLA: "null",
            DeliveryChannels: []string{
                "delivery",
                "delivery",
            },
            ExecutionHourInUtc: 9,
            IsMultipleInstallmentsEnabledOnCreation: false,
            IsMultipleInstallmentsEnabledOnUpdate: false,
            IsUsingV3: true,
            ManualPriceAllowed: false,
            OnMigrationProcess: false,
            OrderCustomDataAppID: "null",
            PostponeExpiration: false,
            RandomIDGeneration: false,
            SLAOption: "NONE",
            UseItemPriceFromOriginalOrder: false,
            WorkflowVersion: "1.1",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Settings != nil {
        // handle response
    }
}
```

## GetSettings

Lists the current Subscriptions settings in your store.

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
    res, err := s.Settings.GetSettings(ctx, operations.GetSettingsRequest{
        Accept: "molestiae",
        ContentType: "minus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Settings != nil {
        // handle response
    }
}
```
