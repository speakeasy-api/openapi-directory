# Rebalance

## Overview

The rebalancing feature provides advisors and portfolio managers the ability to evaluate which pots have drifted significantly from their target portfolios, and trigger a rebalance execution for these pots to bring the holdings back to parity with the pot's target portfolio. Driven by a single rebalance request, the system completely orchestrates this multi-day buy/sell process across a host of different pots, with status updates being provided via API endpoints and web sockets.

### Available Operations

* [CreateRebalance](#createrebalance) - Trigger rebalance process
* [EvaluateRebalance](#evaluaterebalance) - Evaluate rebalance
* [GetRebalanceDetails](#getrebalancedetails) - Retrieve rebalance request related details

## CreateRebalance

This endpoint allows you to trigger the rebalancing of a pot (or a group of pots), all pots belonging to an investor (or a group of investors) or all pots linked to a portfolio (or a group of portfolios). The response will contain a `rebalance_request_id` and `status` of the request.

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
    res, err := s.Rebalance.CreateRebalance(ctx, operations.CreateRebalanceRequest{
        RequestBody: &operations.CreateRebalanceSwitchInstructionRequest{
            RequestID: "436813f1-6d9f-45fc-a6c5-56146c3e250f",
            Type: operations.CreateRebalanceSwitchInstructionRequestTypeEnumPortfolio,
            Values: []string{
                "aut",
            },
        },
        XAPIKey: "deleniti",
    }, operations.CreateRebalanceSecurity{
        APISecretKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateRebalance201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## EvaluateRebalance

Evaluate if a pot or a group of pots has deviated significatly from the target portfolio and eligible for rebalancing. The request can be sent for a pot (or a group of pots), all pots belonging to an investor (or a group of investors) or all pots linked to a portfolio (or a group of portfolios). The response will indicate if the pot is eligible for rebalance and % deviation from the target portfolio template.

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
    res, err := s.Rebalance.EvaluateRebalance(ctx, operations.EvaluateRebalanceRequest{
        RequestBody: &operations.EvaluateRebalanceSwitchInstructionRequest{
            RequestID: "c42e141a-ac36-46c8-9d6b-144290747477",
            Type: operations.EvaluateRebalanceSwitchInstructionRequestTypeEnumInvestor,
            Values: []string{
                "reprehenderit",
                "quidem",
                "fugiat",
            },
        },
        XAPIKey: "ut",
    }, operations.EvaluateRebalanceSecurity{
        APISecretKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ThisIsTheReturnObjectWithEvaluationPerPot != nil {
        // handle response
    }
}
```

## GetRebalanceDetails

Retrieve details of a rebalace request using the `rebalance_request_id`.

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
    res, err := s.Rebalance.GetRebalanceDetails(ctx, operations.GetRebalanceDetailsRequest{
        RebalanceRequestID: "eum",
        XAPIKey: "suscipit",
    }, operations.GetRebalanceDetailsSecurity{
        APISecretKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetRebalanceDetails200ApplicationJSONObject != nil {
        // handle response
    }
}
```
