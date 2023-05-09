# CurrencyExchangeRates

## Overview

To change the description use /examples/TagsDescriptions.json

### Available Operations

* [CreateExchangeRate](#createexchangerate) - Adding currency exchange rates.
* [GetByIsoCode](#getbyisocode) - Returns currency exchange rates.

## CreateExchangeRate

Adding currency exchange rates via API

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
            XAuthAccessToken: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.CurrencyExchangeRates.CreateExchangeRate(ctx, operations.CreateExchangeRateRequest{
        CurrencyHistoryDTO: shared.CurrencyHistoryDTO{
            DateFrom: &shared.TimeDTO{
                Value: sdk.Int64(39650),
            },
            ExchangeRate: sdk.String("dicta"),
            LastModification: &shared.TimeDTO{
                Value: sdk.Int64(483706),
            },
            OriginDetails: sdk.String("tempora"),
            PublicationDate: &shared.TimeDTO{
                Value: sdk.Int64(458259),
            },
        },
        IsoCode: "ex",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetByIsoCode

Returns currency exchange rates.

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
    res, err := s.CurrencyExchangeRates.GetByIsoCode(ctx, operations.GetByIsoCodeRequest{
        IsoCode: "consectetur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
