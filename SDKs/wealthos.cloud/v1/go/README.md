# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/wealthos.cloud/v1/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.UpdateBankAccountRequest{
        RequestBody: operations.UpdateBankAccountUpdateRequestBodyForBankAccount{
            AccountName: "corrupti",
            AccountStatus: "inactive",
            DefaultAccount: "no",
            ReferenceVersion: 1,
        },
        BankAccountID: "quibusdam",
        XAPIKey: "unde",
    }

    ctx := context.Background()
    res, err := s.BankAccounts.UpdateBankAccount(ctx, req, operations.UpdateBankAccountSecurity{
        APISecretKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateBankAccount201ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### BankAccounts

* `UpdateBankAccount` - Update existing bank account details
* `CreateBankAccount` - Create new bank account
* `GetAllBankAccounts` - Retrieve all the bank accounts of a particular investor
* `GetBankAccount` - Retrieve existing bank account from bank account id

### Fees

* `CreateFee` - Create Fee

### FinancialProducts

* `GetAllFinancialProducts` - Get All Financial Products

### InvestmentProductTransactions

* `ExecuteBuyTrasaction` - Execute Buy Transaction(s)
* `ExecuteSellTrasaction` - Execute Sell Transaction(s)

### InvestmentProducts

* `GetConfiguredInvestmentProductPrices` - Get Current Prices of all Investment Products
* `GetConfiguredInvestmentProducts` - Get Configured Investment Products
* `GetInvestmentProduct` - Get details of a given Investment Product
* `GetInvestmentProductPrice` - Get Current Price of an Investment Product

### InvestorAccounts

* `GetAllinvestorAccounts` - Retrieve all the investor accounts
* `GetinvestorAccount` - Retrieve existing investor account from account id

### Investors

* `CreateInvestor` - Create Investor
* `GetAllInvestors` - Get All Investors
* `GetInvestor` - Get Investor
* `UpdateInvestor` - Update Investor

### Payments

* `CreateSinglePaymentIntent` - Create Single Payment Intent
* `GetAllPayments` - Get All Payments
* `GetPayment` - Get Payment by Transaction Id
* `GetPotPayments` - Get Payments by Pot Id

### PortfolioTemplates

* `CreatePortfolioTemplate` - Create new Portfolio Template
* `GetAllPortfolioTemplates` - Get all the Portfolio templates
* `GetPortfolioTemplate` - Retrive existing Portfolio template
* `UpdatePortfolioTemplate` - Update existing Portfolio template

### PotsHoldingsAndTransactions

* `UpdatePot` - Update existing Pot details
* `CreatePot` - Create new pot
* `GetPot` - Retrive existing pot from pot id
* `GetPotHoldings` - Get current holdings of a pot
* `GetPotTransactions` - Get pending & past transactions of a pot
* `GetPotValue` - Get current value of a pot
* `GetPots` - Get all pots for an investor
* `GetTotalPotHoldings` - Get total holdings of an Investor
* `GetTotalPotValue` - Get total value of all pots of an investor

### Rates

* `GetRates` - Get Configured Rates

### Rebalance

* `CreateRebalance` - Trigger rebalance process
* `EvaluateRebalance` - Evaluate rebalance
* `GetRebalanceDetails` - Retrieve rebalance request related details

### SwitchInstruction

* `ExecuteSwitchTrasaction` - Execute Switch Instruction
* `GetSwitch` - Retrieve Switch instruction from Switch ID

### TestMethods

* `GetBEGreeting` - Wealth Manager Greeting for BE

### Utility

* `CopyFileToS3` - Upload a file

### Withdrawal

* `CreateWithdrawal` - Create Withdrawal
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
