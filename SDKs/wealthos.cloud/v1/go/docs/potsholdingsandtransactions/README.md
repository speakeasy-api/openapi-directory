# PotsHoldingsAndTransactions

## Overview

Pots allows a wealth manager to compartmentalise investments made by (or on behalf of) an investor to represent different savings goals, risk appetite and investment instructions (e.g. model portfolios). 
An Investor can have multiple pots for a financial product (e.g within the General Investment Account, one pot could be to target a house purchase goal whereas another pot could target savings for school fees etc.). Each pot consists of cash,  investment product holdings, both cash and investments or nothing (empty pot - pending investments). 
<!--Creating or updating a pot with a linked portfolio template - `portfolio_template_id`  will allow WealthOS to carry out actions such as automated investing based on portfolio, portfolio rebalancing etc. for a pot. 
-->
This end point also returns key information related to the pot (e.g. value, total holdings etc.) as well as transaction history for the pot.

### Current Holdings and Transaction History
#### Current Holding
* Cash : `investment_product_id` will be specified as `cash`. For cash holdings, `free_quantity` and `free_value` will return the cash that is settled and available, while `locked_quantity` and `locked_value`  returns the value of cash which is locked (i.e unsettled, ringfenced for a fee deduction etc.) and cannot be used.`total_quantity` and `total_value` will be the total of free and locked. 

* Investment Products : For investment product holdings,  `total_quantity`  return the total number of units held of an investment product within the pot, `locked-quantity` returns the total number of unit which are locked (e.g. ringfenced to be sold) and `free-quantity` returns number of units available for trading. Value of the holdings are calculated using latest available price. So the formula to calculate the value of the investment products holdings will be `quantity`*`price`.

#### Pending Transactions
* Cash : `type : pending`,`direction : in` (if cash is inbound) or `out` (if cash is withdrawn - functionality not available yet).

* Investment products : `type : pending`,`direction : in`(buy instruction) or `out` (sell instruction).

#### Archived Transactions (historical)

* Cash : `type = archived`, `direction= in` (if cash is inbound) or `out` (if cash is withdrawn - functionality not available yet) and `sub-type : "rejected" or "cancelled"`for a failed transaction, and `sub-type = "confirmed"or "settled"` for a successful transaction.  

* Investment Products : `type = archived`, `direction= in` (buy instruction) or `out` (sell instruction) and `sub-type = "rejected"or "cancelled"` for a failed transaction, and `sub-type = "confirmed"or "settled"` for a successful transaction. 


### Available Operations

* [UpdatePot](#updatepot) - Update existing Pot details
* [CreatePot](#createpot) - Create new pot
* [GetPot](#getpot) - Retrive existing pot from pot id
* [GetPotHoldings](#getpotholdings) - Get current holdings of a pot
* [GetPotTransactions](#getpottransactions) - Get pending & past transactions of a pot
* [GetPotValue](#getpotvalue) - Get current value of a pot
* [GetPots](#getpots) - Get all pots for an investor
* [GetTotalPotHoldings](#gettotalpotholdings) - Get total holdings of an Investor
* [GetTotalPotValue](#gettotalpotvalue) - Get total value of all pots of an investor

## UpdatePot

Update an existing Pot. WealthOS will update only the fields sent in the payload.

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
    res, err := s.PotsHoldingsAndTransactions.UpdatePot(ctx, operations.UpdatePotRequest{
        RequestBody: operations.UpdatePotUpdateRequestBodyForPot{
            CustodianAccountReference: sdk.String("quos"),
            CustodianClientRef: sdk.String("tempore"),
            CustodianID: sdk.String("cupiditate"),
            PortfolioTemplateID: sdk.String("aperiam"),
            PotName: sdk.String("delectus"),
            ReferenceVersion: 1,
            RegulatorAdvisorID: sdk.String("dolorem"),
            Status: operations.UpdatePotUpdateRequestBodyForPotStatusEnumActive.ToPointer(),
        },
        PotID: "labore",
        XAPIKey: "adipisci",
    }, operations.UpdatePotSecurity{
        APISecretKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdatePot200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CreatePot

Create new pot

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
    res, err := s.PotsHoldingsAndTransactions.CreatePot(ctx, operations.CreatePotRequest{
        RequestBody: &operations.CreatePotRequestBodyInput{
            CustodianAccountReference: sdk.String("dolorum"),
            CustodianClientRef: sdk.String("architecto"),
            CustodianID: sdk.String("quae"),
            FinancialProductID: "aut",
            InvestorID: []string{
                "string",
                "string",
                "string",
            },
            PortfolioTemplateID: sdk.String("itaque"),
            PotCurrency: operations.CreatePotRequestBodyPotCurrencyEnumGbp.ToPointer(),
            PotName: "est",
            RegulatorAdvisorID: sdk.String("repellendus"),
            RequestID: "cf4b9218-79fc-4e95-bf73-ef7fbc7abd74",
            Status: operations.CreatePotRequestBodyStatusEnumInactive,
        },
        XAPIKey: "illum",
    }, operations.CreatePotSecurity{
        APISecretKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreatePot201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetPot

Retrive existing pot from pot id

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
    res, err := s.PotsHoldingsAndTransactions.GetPot(ctx, operations.GetPotRequest{
        PotID: "sequi",
        XAPIKey: "natus",
    }, operations.GetPotSecurity{
        APISecretKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetPot200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetPotHoldings

Get a breakdown of all the holdings of a pot (cash and investment product holdings)

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
    res, err := s.PotsHoldingsAndTransactions.GetPotHoldings(ctx, operations.GetPotHoldingsRequest{
        PotID: "impedit",
        XAPIKey: "aut",
    }, operations.GetPotHoldingsSecurity{
        APISecretKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetPotHoldings200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetPotTransactions

Get a list of pending and archived transactions of the pot by date range. Only last 1000 records will be recieved if the result contain more that 1000 transactions. In that case, the pagination should be used.

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
    res, err := s.PotsHoldingsAndTransactions.GetPotTransactions(ctx, operations.GetPotTransactionsRequest{
        From: sdk.String("voluptatibus"),
        PageNumber: sdk.String("exercitationem"),
        PageSize: sdk.String("nulla"),
        PotID: "fugit",
        Sort: operations.GetPotTransactionsSortEnumDesc.ToPointer(),
        SubTransactionType: sdk.String("maiores"),
        To: sdk.String("doloribus"),
        XAPIKey: "iusto",
    }, operations.GetPotTransactionsSecurity{
        APISecretKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetPotTransactions200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetPotValue

Get the current value of the pot (including cash and investment product holdings)

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
    res, err := s.PotsHoldingsAndTransactions.GetPotValue(ctx, operations.GetPotValueRequest{
        PotID: "eligendi",
        XAPIKey: "ducimus",
    }, operations.GetPotValueSecurity{
        APISecretKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetPotValue200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetPots

Get all Investment Pots of the investor

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
    res, err := s.PotsHoldingsAndTransactions.GetPots(ctx, operations.GetPotsRequest{
        FinancialProductID: sdk.String("alias"),
        InvestorID: "officia",
        XAPIKey: "tempora",
    }, operations.GetPotsSecurity{
        APISecretKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetPots200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetTotalPotHoldings

Get a breakdown of all the holdings(cash and investment product holdings) of an investor organised by the pot they belong to.

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
    res, err := s.PotsHoldingsAndTransactions.GetTotalPotHoldings(ctx, operations.GetTotalPotHoldingsRequest{
        InvestorID: "ipsam",
        XAPIKey: "ea",
    }, operations.GetTotalPotHoldingsSecurity{
        APISecretKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetTotalPotHoldings200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetTotalPotValue

Get the current value of all the investor’s pots broken down by currency (including cash and investment product holdings)

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
    res, err := s.PotsHoldingsAndTransactions.GetTotalPotValue(ctx, operations.GetTotalPotValueRequest{
        InvestorID: "aspernatur",
        XAPIKey: "vel",
    }, operations.GetTotalPotValueSecurity{
        APISecretKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetTotalPotValue200ApplicationJSONObject != nil {
        // handle response
    }
}
```
