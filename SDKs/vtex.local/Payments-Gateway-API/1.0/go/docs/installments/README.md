# Installments

## Overview

We provided payment methods configuration that allow our sellers to configure installment options and from that configuration we generate an installment service.

### Available Operations

* [Installmentsoptions](#installmentsoptions) - Installments options

## Installmentsoptions

Returns the best installment options according to the informed params.

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
    res, err := s.Installments.Installmentsoptions(ctx, operations.InstallmentsoptionsRequest{
        Accept: "application/json",
        ContentType: "application/json",
        XPROVIDERAPIAppKey: "{{X-PROVIDER-API-AppKey}}",
        XPROVIDERAPIAppToken: "{{X-PROVIDER-API-AppToken}}",
        RequestPaymentDetails0Bin: sdk.Int(411111),
        RequestPaymentDetails0ID: sdk.Int(2),
        RequestPaymentDetails0Value: sdk.Int(10),
        RequestSalesChannel: sdk.Int(1),
        RequestValue: 10,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ValidRequest != nil {
        // handle response
    }
}
```
