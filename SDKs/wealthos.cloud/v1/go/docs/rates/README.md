# Rates

## Overview

Wealth Managers require various types of rates (e.g. spot fx rates, interest rates) for valuations, currency conversations etc. 

The Rates endpoint returns all the configured rate types along with the latest available rate. 

### Available Operations

* [GetRates](#getrates) - Get Configured Rates

## GetRates

Returns rate details of the requested rate type.

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
    res, err := s.Rates.GetRates(ctx, operations.GetRatesRequest{
        RateType: operations.GetRatesRateTypeEnumFxSpot,
        XAPIKey: "possimus",
    }, operations.GetRatesSecurity{
        APISecretKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetRates200ApplicationJSONObject != nil {
        // handle response
    }
}
```
