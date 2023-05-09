# SwitchInstruction

## Overview

The Switch Instruction endpoints allow you to switch existing holdings (cash and investment products) to a new set of investment products via a single instruction. You can specify the holdings you want to sell along with a `mode` and `value` (e.g. number of units to be sold, total value of holding to be sold or % of holding to be sold) and the investment products you want to buy (using the proceeds of the sales and and/or free cash available in the pot). The buy instructions can also be specified with a `mode` and `value` (e.g. number of units to buy, total value of holding to be bought or % of proceeds to be used to buy specific investment product). 

You can view the status of your switch instruction at any point through the API (both the overall 'parent' switch instruction as well as the individual 'child' buy/sell transactions).

### Available Operations

* [ExecuteSwitchTrasaction](#executeswitchtrasaction) - Execute Switch Instruction
* [GetSwitch](#getswitch) - Retrieve Switch instruction from Switch ID

## ExecuteSwitchTrasaction

Send a switch instruction with details of the investment products to be sold, free cash to be used (if any) and investment products to be bought.

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
    res, err := s.SwitchInstruction.ExecuteSwitchTrasaction(ctx, operations.ExecuteSwitchTrasactionRequest{
        RequestBody: &operations.ExecuteSwitchTrasactionSwitchInstructionRequest{
            BuyInstructions: []ExecuteSwitchTrasactionSwitchInstructionRequestEachBuyOrSellInstructionOfTheSwitchRequest{
                operations.ExecuteSwitchTrasactionSwitchInstructionRequestEachBuyOrSellInstructionOfTheSwitchRequest{
                    InvestmentProductID: "eos",
                    Mode: operations.ExecuteSwitchTrasactionSwitchInstructionRequestEachBuyOrSellInstructionOfTheSwitchRequestModeEnumUnit,
                    Value: "quisquam",
                },
                operations.ExecuteSwitchTrasactionSwitchInstructionRequestEachBuyOrSellInstructionOfTheSwitchRequest{
                    InvestmentProductID: "veritatis",
                    Mode: operations.ExecuteSwitchTrasactionSwitchInstructionRequestEachBuyOrSellInstructionOfTheSwitchRequestModeEnumPercentage,
                    Value: "id",
                },
                operations.ExecuteSwitchTrasactionSwitchInstructionRequestEachBuyOrSellInstructionOfTheSwitchRequest{
                    InvestmentProductID: "quidem",
                    Mode: operations.ExecuteSwitchTrasactionSwitchInstructionRequestEachBuyOrSellInstructionOfTheSwitchRequestModeEnumPercentage,
                    Value: "quo",
                },
                operations.ExecuteSwitchTrasactionSwitchInstructionRequestEachBuyOrSellInstructionOfTheSwitchRequest{
                    InvestmentProductID: "illum",
                    Mode: operations.ExecuteSwitchTrasactionSwitchInstructionRequestEachBuyOrSellInstructionOfTheSwitchRequestModeEnumValue,
                    Value: "fuga",
                },
            },
            PotID: "eius",
            RequestID: "251904e5-23c7-4e0b-8717-8e4796f2a70c",
            SellInstructions: []ExecuteSwitchTrasactionSwitchInstructionRequestEachBuyOrSellInstructionOfTheSwitchRequest{
                operations.ExecuteSwitchTrasactionSwitchInstructionRequestEachBuyOrSellInstructionOfTheSwitchRequest{
                    InvestmentProductID: "quas",
                    Mode: operations.ExecuteSwitchTrasactionSwitchInstructionRequestEachBuyOrSellInstructionOfTheSwitchRequestModeEnumUnit,
                    Value: "consequuntur",
                },
                operations.ExecuteSwitchTrasactionSwitchInstructionRequestEachBuyOrSellInstructionOfTheSwitchRequest{
                    InvestmentProductID: "deleniti",
                    Mode: operations.ExecuteSwitchTrasactionSwitchInstructionRequestEachBuyOrSellInstructionOfTheSwitchRequestModeEnumPercentage,
                    Value: "fuga",
                },
            },
        },
        XAPIKey: "mollitia",
    }, operations.ExecuteSwitchTrasactionSecurity{
        APISecretKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ExecuteSwitchTrasaction200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetSwitch

Retrieve the status of an existing switch instruction from the `switch_transaction_id`. If the status of the individual buy/sell transactions are required, you must send the request with include_details = `true`.

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
    res, err := s.SwitchInstruction.GetSwitch(ctx, operations.GetSwitchRequest{
        IncludeDetails: sdk.Bool(false),
        SwitchTransactionID: "incidunt",
        XAPIKey: "atque",
    }, operations.GetSwitchSecurity{
        APISecretKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSwitch200ApplicationJSONObject != nil {
        // handle response
    }
}
```
