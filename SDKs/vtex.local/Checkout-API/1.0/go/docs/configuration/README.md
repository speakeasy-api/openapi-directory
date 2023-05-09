# Configuration

### Available Operations

* [ClearorderFormMessages](#clearorderformmessages) - Clear orderForm messages
* [GetWindowToChangeSeller](#getwindowtochangeseller) - Get window to change seller
* [GetorderFormconfiguration](#getorderformconfiguration) - Get orderForm configuration
* [UpdateWindowToChangeSeller](#updatewindowtochangeseller) - Update window to change seller
* [UpdateorderFormconfiguration](#updateorderformconfiguration) - Update orderForm configuration

## ClearorderFormMessages

This request removes all messages from the `messages` field of the orderForm , leaving it empty.

You must send an empty JSON in the body of the request.

The [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.

**Important**: **Request Body** must always be sent with empty value "{ }" in this endpoint.

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
    res, err := s.Configuration.ClearorderFormMessages(ctx, operations.ClearorderFormMessagesRequest{
        Accept: "dolores",
        ContentType: "dolorem",
        RequestBody: map[string]interface{}{
            "explicabo": "nobis",
            "enim": "omnis",
        },
        OrderFormID: "nemo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ClearorderFormMessages200ApplicationJSONObject != nil {
        // handle response
    }
}
```

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
    res, err := s.Configuration.GetWindowToChangeSeller(ctx, operations.GetWindowToChangeSellerRequest{
        Accept: "minima",
        ContentType: "excepturi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetorderFormconfiguration

Retrieves the settings that are currently applied to every orderForm in the account.

These settings are defined by the request [Update orderForm configuration](https://developers.vtex.com/reference/configuration#updateorderformconfiguration).

Always use this request to retrieve the current configuration before performing an update. By doing so you ensure that you are modifying only the properties you want.

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
    res, err := s.Configuration.GetorderFormconfiguration(ctx, operations.GetorderFormconfigurationRequest{
        Accept: "accusantium",
        ContentType: "iure",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetorderFormconfiguration200ApplicationJSONAny != nil {
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
    res, err := s.Configuration.UpdateWindowToChangeSeller(ctx, operations.UpdateWindowToChangeSellerRequest{
        Accept: "culpa",
        ContentType: "doloribus",
        WaitingTime: shared.WaitingTime{
            WaitingTime: 958950,
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

## UpdateorderFormconfiguration

Determines settings that will apply to every orderForm in the account.

For example, if you create an app using this request, every orderForm of this account will have the custom fields created though it.

**Important**: always retrieve the current configuration before performing an update to ensure that you are modifying only the properties you want. Otherwise, old values can be overwritten. To retrieve the current configuration, use the request [Get orderForm configuration](https://developers.vtex.com/reference#getorderformconfiguration).

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
    res, err := s.Configuration.UpdateorderFormconfiguration(ctx, operations.UpdateorderFormconfigurationRequest{
        Accept: "architecto",
        ContentType: "mollitia",
        UpdateorderFormconfigurationRequest: shared.UpdateorderFormconfigurationRequest{
            AllowManualPrice: false,
            AllowMultipleDeliveries: false,
            Apps: []shared.UpdateorderFormconfigurationRequestApps{
                shared.UpdateorderFormconfigurationRequestApps{
                    Fields: []string{
                        "birthdayField",
                        "birthdayField",
                        "birthdayField",
                    },
                    ID: sdk.String("birthdayApp"),
                    Major: sdk.Int64(1),
                },
            },
            DecimalDigitsPrecision: 161309,
            MaskFirstPurchaseData: sdk.Bool(false),
            MaxNumberOfWhiteLabelSellers: sdk.Int64(995300),
            MinimumQuantityAccumulatedForItems: 653108,
            MinimumValueAccumulated: 581850,
            PaymentConfiguration: shared.PaymentConfiguration{
                AllowInstallmentsMerge: sdk.Bool(false),
                RequiresAuthenticationForPreAuthorizedPaymentOption: false,
            },
            PaymentSystemToCheckFirstInstallment: sdk.String("6"),
            RecaptchaValidation: sdk.String("numquam"),
            TaxConfiguration: shared.UpdateorderFormconfigurationRequestTaxConfiguration{
                AppID: sdk.String("commodi"),
                AuthorizationHeader: sdk.String("quam"),
                URL: sdk.String("molestiae"),
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
