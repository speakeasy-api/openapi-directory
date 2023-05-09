# Payments

## Overview

The Payments endpoint allows you to put cash into a specific pot in your account by sending a payment intent. This intent must capture the following information regarding the payment:

* Details regarding payment such as the `amount` to collect and the `currency`
* Supported `payment_type` (card payments, electronic fund transfers etc.).
* Associated key information to track a payment (e.g. `pot_id`).
* Intention of payment:
    * Cash into the pot only, do not invest (`purpose: "cash"`)
    * Invest based on the portfolio attached to the investor (`purpose: "invest"` and `investment_instructions` not populated)
    * Invest based on attached instructions (`purpose: "invest"` and `investment_instructions` populated). If the pot has a portfolio attached, then the priority will be given to investment instructions. If the investment instructions apply only for a propotion of money coming in, then the rest will be added as cash.

<!-- If you have additional parameters to associate with a payment, you can define a custom object and include it under a top-level field of the request body with the value you used for `payment_type` as its field name. (e.g. `"stripe": {.....}`). -->
Additionaly, if the `service_provider` is given as `"truelayer"` extra accept an extra object `service_provider_params` where you have to provide the `bank_account_id`as a key-value pair and you will recieve this object in response including the fields, `bank_account_id`, `payment_intent_id` and `hpp_url`. (e.g `"service_provider_params: {"bank_account_id": "ba-82faf049...", "payment_intent_id: 91aa9de...", "hpp_url":"https://..."}"`).

For `"stripe"`, in the response, you will receive the  `payment_intent_id`, `client_secret` and `publishable_key` inside that additional object with the value you used for `payment_type` as its field name. (e.g. `"service_provider_params": {"payment_intent_id: 91aa9de...", "client_secret": "pi_XXXXX", "publishable_key": "pk_test_XXXXX", .....}`).

These values will be used with the client library for each payment call for the following purposes.

* `payment_intent_id` - to uniquely identify your payment intent
* `client_secret` - The client secret of the PaymentIntent. Required if a publishable key is used to retrieve the source.
* `publishable_key` - to uniquely identify your payment service account
* `hpp_url` - The redirect URL for proceed with bank payment (only for Truelayer)

### Available Operations

* [CreateSinglePaymentIntent](#createsinglepaymentintent) - Create Single Payment Intent
* [GetAllPayments](#getallpayments) - Get All Payments
* [GetPayment](#getpayment) - Get Payment by Transaction Id
* [GetPotPayments](#getpotpayments) - Get Payments by Pot Id

## CreateSinglePaymentIntent

Create a new Single Payment Intent for the given `amount` and `currency`. If successful, a new Payment Intent will be created with `pending_confirmation` status and the API will return the `client_secret` and `publishable_key` as response.

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
    res, err := s.Payments.CreateSinglePaymentIntent(ctx, operations.CreateSinglePaymentIntentRequest{
        RequestBody: operations.CreateSinglePaymentIntentRequestBody{
            Amount: "totam",
            Currency: sdk.String("similique"),
            InvestmentInstructions: []CreateSinglePaymentIntentRequestBodyInvestmentInstructions{
                operations.CreateSinglePaymentIntentRequestBodyInvestmentInstructions{
                    InvestmentProductID: "at",
                    Quantity: sdk.String("quaerat"),
                    Value: sdk.String("tempora"),
                },
            },
            PaymentType: operations.CreateSinglePaymentIntentRequestBodyPaymentTypeEnumCard,
            PotID: "quod",
            Purpose: operations.CreateSinglePaymentIntentRequestBodyPurposeEnumInvest,
            RequestID: "2af7a73c-f3be-4453-b870-b326b5a73429",
            ServiceProvider: operations.CreateSinglePaymentIntentRequestBodyServiceProviderEnumNone,
            ServiceProviderParams: &operations.CreateSinglePaymentIntentRequestBodyServiceProviderParams{
                BankAccountID: sdk.String("pariatur"),
            },
        },
        XAPIKey: "soluta",
    }, operations.CreateSinglePaymentIntentSecurity{
        APISecretKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateSinglePaymentIntent201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetAllPayments

Returns all the Payments setup for the tenant in an array

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
    res, err := s.Payments.GetAllPayments(ctx, operations.GetAllPaymentsRequest{
        PageNumber: sdk.String("dicta"),
        PageSize: sdk.String("laborum"),
        PaymentType: sdk.String("totam"),
        Purpose: sdk.String("incidunt"),
        ServiceProvider: sdk.String("aspernatur"),
        Sort: operations.GetAllPaymentsSortEnumAsc.ToPointer(),
        XAPIKey: "distinctio",
    }, operations.GetAllPaymentsSecurity{
        APISecretKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAllPayments200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetPayment

Get Payment by transaction ID

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
    res, err := s.Payments.GetPayment(ctx, operations.GetPaymentRequest{
        TransactionID: "facilis",
        XAPIKey: "aliquid",
    }, operations.GetPaymentSecurity{
        APISecretKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RootTypeForPayments != nil {
        // handle response
    }
}
```

## GetPotPayments

 Only last 1000 records will be recieved if the result contain more that 1000 payments. In that case, the pagination should be used.

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
    res, err := s.Payments.GetPotPayments(ctx, operations.GetPotPaymentsRequest{
        PageNumber: sdk.String("quam"),
        PageSize: sdk.String("molestias"),
        PaymentType: sdk.String("temporibus"),
        PotID: "qui",
        Purpose: sdk.String("neque"),
        ServiceProvider: sdk.String("fugit"),
        XAPIKey: "magni",
    }, operations.GetPotPaymentsSecurity{
        APISecretKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetPotPayments200ApplicationJSONObject != nil {
        // handle response
    }
}
```
