# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateBankAccountRequest;
import org.openapis.openapi.models.operations.UpdateBankAccountResponse;
import org.openapis.openapi.models.operations.UpdateBankAccountSecurity;
import org.openapis.openapi.models.operations.UpdateBankAccountUpdateRequestBodyForBankAccount;
import org.openapis.openapi.models.operations.UpdateBankAccountUpdateRequestBodyForBankAccountAccountStatusEnum;
import org.openapis.openapi.models.operations.UpdateBankAccountUpdateRequestBodyForBankAccountDefaultAccountEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateBankAccountRequest req = new UpdateBankAccountRequest(                new UpdateBankAccountUpdateRequestBodyForBankAccount(1L) {{
                                accountName = "corrupti";
                                accountStatus = UpdateBankAccountUpdateRequestBodyForBankAccountAccountStatusEnum.INACTIVE;
                                defaultAccount = UpdateBankAccountUpdateRequestBodyForBankAccountDefaultAccountEnum.NO;
                            }};, "quibusdam", "unde");            

            UpdateBankAccountResponse res = sdk.bankAccounts.updateBankAccount(req, new UpdateBankAccountSecurity("nulla") {{
                apiSecretKey = "YOUR_API_KEY_HERE";
            }});

            if (res.updateBankAccount201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [bankAccounts](docs/bankaccounts/README.md)

* [updateBankAccount](docs/bankaccounts/README.md#updatebankaccount) - Update existing bank account details
* [createBankAccount](docs/bankaccounts/README.md#createbankaccount) - Create new bank account
* [getAllBankAccounts](docs/bankaccounts/README.md#getallbankaccounts) - Retrieve all the bank accounts of a particular investor
* [getBankAccount](docs/bankaccounts/README.md#getbankaccount) - Retrieve existing bank account from bank account id

### [fees](docs/fees/README.md)

* [createFee](docs/fees/README.md#createfee) - Create Fee

### [financialProducts](docs/financialproducts/README.md)

* [getAllFinancialProducts](docs/financialproducts/README.md#getallfinancialproducts) - Get All Financial Products

### [investmentProductTransactions](docs/investmentproducttransactions/README.md)

* [executeBuyTrasaction](docs/investmentproducttransactions/README.md#executebuytrasaction) - Execute Buy Transaction(s)
* [executeSellTrasaction](docs/investmentproducttransactions/README.md#executeselltrasaction) - Execute Sell Transaction(s)

### [investmentProducts](docs/investmentproducts/README.md)

* [getConfiguredInvestmentProductPrices](docs/investmentproducts/README.md#getconfiguredinvestmentproductprices) - Get Current Prices of all Investment Products
* [getConfiguredInvestmentProducts](docs/investmentproducts/README.md#getconfiguredinvestmentproducts) - Get Configured Investment Products
* [getInvestmentProduct](docs/investmentproducts/README.md#getinvestmentproduct) - Get details of a given Investment Product
* [getInvestmentProductPrice](docs/investmentproducts/README.md#getinvestmentproductprice) - Get Current Price of an Investment Product

### [investorAccounts](docs/investoraccounts/README.md)

* [getAllinvestorAccounts](docs/investoraccounts/README.md#getallinvestoraccounts) - Retrieve all the investor accounts
* [getinvestorAccount](docs/investoraccounts/README.md#getinvestoraccount) - Retrieve existing investor account from account id

### [investors](docs/investors/README.md)

* [createInvestor](docs/investors/README.md#createinvestor) - Create Investor
* [getAllInvestors](docs/investors/README.md#getallinvestors) - Get All Investors
* [getInvestor](docs/investors/README.md#getinvestor) - Get Investor
* [updateInvestor](docs/investors/README.md#updateinvestor) - Update Investor

### [payments](docs/payments/README.md)

* [createSinglePaymentIntent](docs/payments/README.md#createsinglepaymentintent) - Create Single Payment Intent
* [getAllPayments](docs/payments/README.md#getallpayments) - Get All Payments
* [getPayment](docs/payments/README.md#getpayment) - Get Payment by Transaction Id
* [getPotPayments](docs/payments/README.md#getpotpayments) - Get Payments by Pot Id

### [portfolioTemplates](docs/portfoliotemplates/README.md)

* [createPortfolioTemplate](docs/portfoliotemplates/README.md#createportfoliotemplate) - Create new Portfolio Template
* [getAllPortfolioTemplates](docs/portfoliotemplates/README.md#getallportfoliotemplates) - Get all the Portfolio templates
* [getPortfolioTemplate](docs/portfoliotemplates/README.md#getportfoliotemplate) - Retrive existing Portfolio template
* [updatePortfolioTemplate](docs/portfoliotemplates/README.md#updateportfoliotemplate) - Update existing Portfolio template

### [potsHoldingsAndTransactions](docs/potsholdingsandtransactions/README.md)

* [updatePot](docs/potsholdingsandtransactions/README.md#updatepot) - Update existing Pot details
* [createPot](docs/potsholdingsandtransactions/README.md#createpot) - Create new pot
* [getPot](docs/potsholdingsandtransactions/README.md#getpot) - Retrive existing pot from pot id
* [getPotHoldings](docs/potsholdingsandtransactions/README.md#getpotholdings) - Get current holdings of a pot
* [getPotTransactions](docs/potsholdingsandtransactions/README.md#getpottransactions) - Get pending & past transactions of a pot
* [getPotValue](docs/potsholdingsandtransactions/README.md#getpotvalue) - Get current value of a pot
* [getPots](docs/potsholdingsandtransactions/README.md#getpots) - Get all pots for an investor
* [getTotalPotHoldings](docs/potsholdingsandtransactions/README.md#gettotalpotholdings) - Get total holdings of an Investor
* [getTotalPotValue](docs/potsholdingsandtransactions/README.md#gettotalpotvalue) - Get total value of all pots of an investor

### [rates](docs/rates/README.md)

* [getRates](docs/rates/README.md#getrates) - Get Configured Rates

### [rebalance](docs/rebalance/README.md)

* [createRebalance](docs/rebalance/README.md#createrebalance) - Trigger rebalance process
* [evaluateRebalance](docs/rebalance/README.md#evaluaterebalance) - Evaluate rebalance
* [getRebalanceDetails](docs/rebalance/README.md#getrebalancedetails) - Retrieve rebalance request related details

### [switchInstruction](docs/switchinstruction/README.md)

* [executeSwitchTrasaction](docs/switchinstruction/README.md#executeswitchtrasaction) - Execute Switch Instruction
* [getSwitch](docs/switchinstruction/README.md#getswitch) - Retrieve Switch instruction from Switch ID

### [testMethods](docs/testmethods/README.md)

* [getBEGreeting](docs/testmethods/README.md#getbegreeting) - Wealth Manager Greeting for BE

### [utility](docs/utility/README.md)

* [copyFileToS3](docs/utility/README.md#copyfiletos3) - Upload a file

### [withdrawal](docs/withdrawal/README.md)

* [createWithdrawal](docs/withdrawal/README.md#createwithdrawal) - Create Withdrawal
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
