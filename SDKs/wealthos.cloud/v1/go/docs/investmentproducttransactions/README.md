# InvestmentProductTransactions

## Overview

The Transactions endpoint allows you to buy or sell Investment Products. The endpoint supports single or bulk transactions. 

A transaction to buy or sell an investment product can be specified in units (i.e. buy/sell n number of units of the investment product) or as a value (i.e. buy/sell up to n value of the investment product).


### Available Operations

* [ExecuteBuyTrasaction](#executebuytrasaction) - Execute Buy Transaction(s)
* [ExecuteSellTrasaction](#executeselltrasaction) - Execute Sell Transaction(s)

## ExecuteBuyTrasaction

Invoke execution of one or more buy transactions as defined in the request

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
    res, err := s.InvestmentProductTransactions.ExecuteBuyTrasaction(ctx, operations.ExecuteBuyTrasactionRequest{
        RequestBody: &operations.ExecuteBuyTrasactionBuyTransactionRequest{
            InvestmentInstructions: []ExecuteBuyTrasactionBuyTransactionRequestInstructionBuySell{
                operations.ExecuteBuyTrasactionBuyTransactionRequestInstructionBuySell{
                    ClientOrderID: sdk.String("cl-02456s42sd2"),
                    InvestmentProductID: "beatae",
                    Quantity: sdk.String("commodi"),
                    Value: sdk.String("molestiae"),
                },
                operations.ExecuteBuyTrasactionBuyTransactionRequestInstructionBuySell{
                    ClientOrderID: sdk.String("cl-02456s42sd2"),
                    InvestmentProductID: "modi",
                    Quantity: sdk.String("qui"),
                    Value: sdk.String("impedit"),
                },
                operations.ExecuteBuyTrasactionBuyTransactionRequestInstructionBuySell{
                    ClientOrderID: sdk.String("cl-02456s42sd2"),
                    InvestmentProductID: "cum",
                    Quantity: sdk.String("esse"),
                    Value: sdk.String("ipsum"),
                },
            },
            PotID: "excepturi",
            RequestID: "20592939-6fea-4759-aeb1-0faaa2352c59",
        },
        XAPIKey: "nemo",
    }, operations.ExecuteBuyTrasactionSecurity{
        APISecretKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ExecuteBuyTrasaction200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ExecuteSellTrasaction

Invoke execution of one or more Sell transactions as defined in the request

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
    res, err := s.InvestmentProductTransactions.ExecuteSellTrasaction(ctx, operations.ExecuteSellTrasactionRequest{
        RequestBody: &operations.ExecuteSellTrasactionSellTransactionRequest{
            PotID: "minima",
            RequestID: "907aff1a-3a2f-4a94-a773-9251aa52c3f5",
            SellInstructions: []ExecuteSellTrasactionSellTransactionRequestInstructionBuySell{
                operations.ExecuteSellTrasactionSellTransactionRequestInstructionBuySell{
                    ClientOrderID: sdk.String("cl-02456s42sd2"),
                    InvestmentProductID: "possimus",
                    Quantity: sdk.String("aut"),
                    Value: sdk.String("quasi"),
                },
                operations.ExecuteSellTrasactionSellTransactionRequestInstructionBuySell{
                    ClientOrderID: sdk.String("cl-02456s42sd2"),
                    InvestmentProductID: "error",
                    Quantity: sdk.String("temporibus"),
                    Value: sdk.String("laborum"),
                },
                operations.ExecuteSellTrasactionSellTransactionRequestInstructionBuySell{
                    ClientOrderID: sdk.String("cl-02456s42sd2"),
                    InvestmentProductID: "quasi",
                    Quantity: sdk.String("reiciendis"),
                    Value: sdk.String("voluptatibus"),
                },
            },
        },
        XAPIKey: "vero",
    }, operations.ExecuteSellTrasactionSecurity{
        APISecretKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ExecuteSellTrasaction200ApplicationJSONObject != nil {
        // handle response
    }
}
```
