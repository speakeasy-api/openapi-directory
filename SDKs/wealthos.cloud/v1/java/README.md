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

import org.openapis.openapi.models.operations.UpdateBankAccountSecurity;
import org.openapis.openapi.models.operations.UpdateBankAccountPathParams;
import org.openapis.openapi.models.operations.UpdateBankAccountHeaders;
import org.openapis.openapi.models.operations.UpdateBankAccountUpdateRequestBodyForBankAccountAccountStatusEnum;
import org.openapis.openapi.models.operations.UpdateBankAccountUpdateRequestBodyForBankAccountDefaultAccountEnum;
import org.openapis.openapi.models.operations.UpdateBankAccountUpdateRequestBodyForBankAccount;
import org.openapis.openapi.models.operations.UpdateBankAccountRequest;
import org.openapis.openapi.models.operations.UpdateBankAccountResponse;
import org.openapis.openapi.models.shared.SchemeAPISecretKey;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateBankAccountRequest req = new UpdateBankAccountRequest() {{
                security = new UpdateBankAccountSecurity() {{
                    apiSecretKey = new SchemeAPISecretKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                pathParams = new UpdateBankAccountPathParams() {{
                    bankAccountId = "corrupti";
                }};
                headers = new UpdateBankAccountHeaders() {{
                    xApiKey = "provident";
                }};
                request = new UpdateBankAccountUpdateRequestBodyForBankAccount() {{
                    accountName = "distinctio";
                    accountStatus = "inactive";
                    defaultAccount = "no";
                    referenceVersion = 1;
                }};
            }};            

            UpdateBankAccountResponse res = sdk.bankAccounts.updateBankAccount(req);

            if (res.updateBankAccount201ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### bankAccounts

* `updateBankAccount` - Update existing bank account details
* `createBankAccount` - Create new bank account
* `getAllBankAccounts` - Retrieve all the bank accounts of a particular investor
* `getBankAccount` - Retrieve existing bank account from bank account id

### fees

* `createFee` - Create Fee

### financialProducts

* `getAllFinancialProducts` - Get All Financial Products

### investmentProductTransactions

* `executeBuyTrasaction` - Execute Buy Transaction(s)
* `executeSellTrasaction` - Execute Sell Transaction(s)

### investmentProducts

* `getConfiguredInvestmentProductPrices` - Get Current Prices of all Investment Products
* `getConfiguredInvestmentProducts` - Get Configured Investment Products
* `getInvestmentProduct` - Get details of a given Investment Product
* `getInvestmentProductPrice` - Get Current Price of an Investment Product

### investorAccounts

* `getAllinvestorAccounts` - Retrieve all the investor accounts
* `getinvestorAccount` - Retrieve existing investor account from account id

### investors

* `createInvestor` - Create Investor
* `getAllInvestors` - Get All Investors
* `getInvestor` - Get Investor
* `updateInvestor` - Update Investor

### payments

* `createSinglePaymentIntent` - Create Single Payment Intent
* `getAllPayments` - Get All Payments
* `getPayment` - Get Payment by Transaction Id
* `getPotPayments` - Get Payments by Pot Id

### portfolioTemplates

* `createPortfolioTemplate` - Create new Portfolio Template
* `getAllPortfolioTemplates` - Get all the Portfolio templates
* `getPortfolioTemplate` - Retrive existing Portfolio template
* `updatePortfolioTemplate` - Update existing Portfolio template

### potsHoldingsAndTransactions

* `updatePot` - Update existing Pot details
* `createPot` - Create new pot
* `getPot` - Retrive existing pot from pot id
* `getPotHoldings` - Get current holdings of a pot
* `getPotTransactions` - Get pending & past transactions of a pot
* `getPotValue` - Get current value of a pot
* `getPots` - Get all pots for an investor
* `getTotalPotHoldings` - Get total holdings of an Investor
* `getTotalPotValue` - Get total value of all pots of an investor

### rates

* `getRates` - Get Configured Rates

### rebalance

* `createRebalance` - Trigger rebalance process
* `evaluateRebalance` - Evaluate rebalance
* `getRebalanceDetails` - Retrieve rebalance request related details

### switchInstruction

* `executeSwitchTrasaction` - Execute Switch Instruction
* `getSwitch` - Retrieve Switch instruction from Switch ID

### testMethods

* `getBEGreeting` - Wealth Manager Greeting for BE

### utility

* `copyFileToS3` - Upload a file

### withdrawal

* `createWithdrawal` - Create Withdrawal
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
