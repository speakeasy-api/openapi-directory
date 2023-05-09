# FinancialProducts

## Overview

Financial Products are the tax wrapper investment vehicles offered by the Wealth Manager (e.g. General Investment Accounts, Stocks and Shares ISAs, SIPPs, LISAs etc.). Currently WealthOS supports General Investment Accounts (GIAs). 

The Financial Products endpoint returns all financial products and their configurations setup by the Wealth Manager via the WealthOS Admin UI.

### Available Operations

* [GetAllFinancialProducts](#getallfinancialproducts) - Get All Financial Products

## GetAllFinancialProducts

Returns all the financial products setup for the tenant in an array

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
    res, err := s.FinancialProducts.GetAllFinancialProducts(ctx, operations.GetAllFinancialProductsRequest{
        ProductTypes: sdk.String("hic"),
        XAPIKey: "optio",
    }, operations.GetAllFinancialProductsSecurity{
        APISecretKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAllFinancialProducts200ApplicationJSONObject != nil {
        // handle response
    }
}
```
