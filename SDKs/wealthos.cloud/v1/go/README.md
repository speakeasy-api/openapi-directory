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

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.BankAccounts.UpdateBankAccount(ctx, operations.UpdateBankAccountRequest{
        RequestBody: operations.UpdateBankAccountUpdateRequestBodyForBankAccount{
            AccountName: sdk.String("corrupti"),
            AccountStatus: operations.UpdateBankAccountUpdateRequestBodyForBankAccountAccountStatusEnumInactive.ToPointer(),
            DefaultAccount: operations.UpdateBankAccountUpdateRequestBodyForBankAccountDefaultAccountEnumNo.ToPointer(),
            ReferenceVersion: 1,
        },
        BankAccountID: "quibusdam",
        XAPIKey: "unde",
    }, operations.UpdateBankAccountSecurity{
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


### [BankAccounts](docs/bankaccounts/README.md)

* [UpdateBankAccount](docs/bankaccounts/README.md#updatebankaccount) - Update existing bank account details
* [CreateBankAccount](docs/bankaccounts/README.md#createbankaccount) - Create new bank account
* [GetAllBankAccounts](docs/bankaccounts/README.md#getallbankaccounts) - Retrieve all the bank accounts of a particular investor
* [GetBankAccount](docs/bankaccounts/README.md#getbankaccount) - Retrieve existing bank account from bank account id

### [Fees](docs/fees/README.md)

* [CreateFee](docs/fees/README.md#createfee) - Create Fee

### [FinancialProducts](docs/financialproducts/README.md)

* [GetAllFinancialProducts](docs/financialproducts/README.md#getallfinancialproducts) - Get All Financial Products

### [InvestmentProductTransactions](docs/investmentproducttransactions/README.md)

* [ExecuteBuyTrasaction](docs/investmentproducttransactions/README.md#executebuytrasaction) - Execute Buy Transaction(s)
* [ExecuteSellTrasaction](docs/investmentproducttransactions/README.md#executeselltrasaction) - Execute Sell Transaction(s)

### [InvestmentProducts](docs/investmentproducts/README.md)

* [GetConfiguredInvestmentProductPrices](docs/investmentproducts/README.md#getconfiguredinvestmentproductprices) - Get Current Prices of all Investment Products
* [GetConfiguredInvestmentProducts](docs/investmentproducts/README.md#getconfiguredinvestmentproducts) - Get Configured Investment Products
* [GetInvestmentProduct](docs/investmentproducts/README.md#getinvestmentproduct) - Get details of a given Investment Product
* [GetInvestmentProductPrice](docs/investmentproducts/README.md#getinvestmentproductprice) - Get Current Price of an Investment Product

### [InvestorAccounts](docs/investoraccounts/README.md)

* [GetAllinvestorAccounts](docs/investoraccounts/README.md#getallinvestoraccounts) - Retrieve all the investor accounts
* [GetinvestorAccount](docs/investoraccounts/README.md#getinvestoraccount) - Retrieve existing investor account from account id

### [Investors](docs/investors/README.md)

* [CreateInvestor](docs/investors/README.md#createinvestor) - Create Investor
* [GetAllInvestors](docs/investors/README.md#getallinvestors) - Get All Investors
* [GetInvestor](docs/investors/README.md#getinvestor) - Get Investor
* [UpdateInvestor](docs/investors/README.md#updateinvestor) - Update Investor

### [Payments](docs/payments/README.md)

* [CreateSinglePaymentIntent](docs/payments/README.md#createsinglepaymentintent) - Create Single Payment Intent
* [GetAllPayments](docs/payments/README.md#getallpayments) - Get All Payments
* [GetPayment](docs/payments/README.md#getpayment) - Get Payment by Transaction Id
* [GetPotPayments](docs/payments/README.md#getpotpayments) - Get Payments by Pot Id

### [PortfolioTemplates](docs/portfoliotemplates/README.md)

* [CreatePortfolioTemplate](docs/portfoliotemplates/README.md#createportfoliotemplate) - Create new Portfolio Template
* [GetAllPortfolioTemplates](docs/portfoliotemplates/README.md#getallportfoliotemplates) - Get all the Portfolio templates
* [GetPortfolioTemplate](docs/portfoliotemplates/README.md#getportfoliotemplate) - Retrive existing Portfolio template
* [UpdatePortfolioTemplate](docs/portfoliotemplates/README.md#updateportfoliotemplate) - Update existing Portfolio template

### [PotsHoldingsAndTransactions](docs/potsholdingsandtransactions/README.md)

* [UpdatePot](docs/potsholdingsandtransactions/README.md#updatepot) - Update existing Pot details
* [CreatePot](docs/potsholdingsandtransactions/README.md#createpot) - Create new pot
* [GetPot](docs/potsholdingsandtransactions/README.md#getpot) - Retrive existing pot from pot id
* [GetPotHoldings](docs/potsholdingsandtransactions/README.md#getpotholdings) - Get current holdings of a pot
* [GetPotTransactions](docs/potsholdingsandtransactions/README.md#getpottransactions) - Get pending & past transactions of a pot
* [GetPotValue](docs/potsholdingsandtransactions/README.md#getpotvalue) - Get current value of a pot
* [GetPots](docs/potsholdingsandtransactions/README.md#getpots) - Get all pots for an investor
* [GetTotalPotHoldings](docs/potsholdingsandtransactions/README.md#gettotalpotholdings) - Get total holdings of an Investor
* [GetTotalPotValue](docs/potsholdingsandtransactions/README.md#gettotalpotvalue) - Get total value of all pots of an investor

### [Rates](docs/rates/README.md)

* [GetRates](docs/rates/README.md#getrates) - Get Configured Rates

### [Rebalance](docs/rebalance/README.md)

* [CreateRebalance](docs/rebalance/README.md#createrebalance) - Trigger rebalance process
* [EvaluateRebalance](docs/rebalance/README.md#evaluaterebalance) - Evaluate rebalance
* [GetRebalanceDetails](docs/rebalance/README.md#getrebalancedetails) - Retrieve rebalance request related details

### [SwitchInstruction](docs/switchinstruction/README.md)

* [ExecuteSwitchTrasaction](docs/switchinstruction/README.md#executeswitchtrasaction) - Execute Switch Instruction
* [GetSwitch](docs/switchinstruction/README.md#getswitch) - Retrieve Switch instruction from Switch ID

### [TestMethods](docs/testmethods/README.md)

* [GetBEGreeting](docs/testmethods/README.md#getbegreeting) - Wealth Manager Greeting for BE

### [Utility](docs/utility/README.md)

* [CopyFileToS3](docs/utility/README.md#copyfiletos3) - Upload a file

### [Withdrawal](docs/withdrawal/README.md)

* [CreateWithdrawal](docs/withdrawal/README.md#createwithdrawal) - Create Withdrawal
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
