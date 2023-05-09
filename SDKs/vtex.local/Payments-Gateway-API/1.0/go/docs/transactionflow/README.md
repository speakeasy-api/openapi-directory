# TransactionFlow

## Overview

After one transaction is authorized, there is remaining to do some calls in order to complete a transaction and its payments. We explain the settle process, cancel authorized payments process, and refund process by using examples.

### Available Operations

* [Cancelthetransaction](#cancelthetransaction) - Cancel the transaction
* [Refundthetransaction](#refundthetransaction) - Refund the transaction
* [Settlethetransaction](#settlethetransaction) - Settle the transaction

## Cancelthetransaction

Cancel's transaction that was previously approved, but not settled.

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
    res, err := s.TransactionFlow.Cancelthetransaction(ctx, operations.CancelthetransactionRequest{
        Accept: "application/json",
        CancelthetransactionRequest: shared.CancelthetransactionRequest{
            Minicart: &shared.CancelthetransactionRequestMinicart{
                Freight: sdk.Int(874573),
                Items: []interface{}{
                    "hic",
                    "recusandae",
                },
                Tax: sdk.Int(608253),
            },
            Value: 704415,
        },
        ContentType: "application/json",
        XPROVIDERAPIAppKey: "{{X-PROVIDER-API-AppKey}}",
        XPROVIDERAPIAppToken: "{{X-PROVIDER-API-AppToken}}",
        TransactionID: "perspiciatis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## Refundthetransaction

Refunds transaction's value that was previously settled.

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
    res, err := s.TransactionFlow.Refundthetransaction(ctx, operations.RefundthetransactionRequest{
        Accept: "application/json",
        ContentType: "application/json",
        RefundthetransactionRequest: shared.RefundthetransactionRequest{
            Minicart: &shared.RefundthetransactionRequestMinicart{
                Freight: sdk.Int(31838),
                Items: []interface{}{
                    "consequuntur",
                    "blanditiis",
                    "error",
                    "eaque",
                },
                Tax: sdk.Int(577229),
            },
            Value: 699098,
        },
        XPROVIDERAPIAppKey: "{{X-PROVIDER-API-AppKey}}",
        XPROVIDERAPIAppToken: "{{X-PROVIDER-API-AppToken}}",
        TransactionID: "adipisci",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## Settlethetransaction

Settles transaction's value.

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
    res, err := s.TransactionFlow.Settlethetransaction(ctx, operations.SettlethetransactionRequest{
        Accept: "application/json",
        ContentType: "application/json",
        SettlethetransactionRequest: shared.SettlethetransactionRequest{
            Value: 992397,
        },
        XPROVIDERAPIAppKey: "{{X-PROVIDER-API-AppKey}}",
        XPROVIDERAPIAppToken: "{{X-PROVIDER-API-AppToken}}",
        TransactionID: "earum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SettleResponse != nil {
        // handle response
    }
}
```
