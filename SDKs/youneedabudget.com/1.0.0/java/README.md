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
import org.openapis.openapi.models.operations.CreateAccountRequest;
import org.openapis.openapi.models.operations.CreateAccountResponse;
import org.openapis.openapi.models.shared.AccountTypeEnum;
import org.openapis.openapi.models.shared.PostAccountWrapper;
import org.openapis.openapi.models.shared.SaveAccount;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    bearer = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateAccountRequest req = new CreateAccountRequest(                new PostAccountWrapper(                new SaveAccount(592845L, "distinctio", AccountTypeEnum.PERSONAL_LOAN););, "unde");            

            CreateAccountResponse res = sdk.accounts.createAccount(req);

            if (res.accountResponse != null) {
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


### [accounts](docs/accounts/README.md)

* [createAccount](docs/accounts/README.md#createaccount) - Create a new account
* [getAccountById](docs/accounts/README.md#getaccountbyid) - Single account
* [getAccounts](docs/accounts/README.md#getaccounts) - Account list

### [budgets](docs/budgets/README.md)

* [getBudgetById](docs/budgets/README.md#getbudgetbyid) - Single budget
* [getBudgetSettingsById](docs/budgets/README.md#getbudgetsettingsbyid) - Budget Settings
* [getBudgets](docs/budgets/README.md#getbudgets) - List budgets

### [categories](docs/categories/README.md)

* [getCategories](docs/categories/README.md#getcategories) - List categories
* [getCategoryById](docs/categories/README.md#getcategorybyid) - Single category
* [getMonthCategoryById](docs/categories/README.md#getmonthcategorybyid) - Single category for a specific budget month
* [updateMonthCategory](docs/categories/README.md#updatemonthcategory) - Update a category for a specific month

### [deprecated](docs/deprecated/README.md)

* [bulkCreateTransactions](docs/deprecated/README.md#bulkcreatetransactions) - Bulk create transactions

### [months](docs/months/README.md)

* [getBudgetMonth](docs/months/README.md#getbudgetmonth) - Single budget month
* [getBudgetMonths](docs/months/README.md#getbudgetmonths) - List budget months

### [payeeLocations](docs/payeelocations/README.md)

* [getPayeeLocationById](docs/payeelocations/README.md#getpayeelocationbyid) - Single payee location
* [getPayeeLocations](docs/payeelocations/README.md#getpayeelocations) - List payee locations
* [getPayeeLocationsByPayee](docs/payeelocations/README.md#getpayeelocationsbypayee) - List locations for a payee

### [payees](docs/payees/README.md)

* [getPayeeById](docs/payees/README.md#getpayeebyid) - Single payee
* [getPayees](docs/payees/README.md#getpayees) - List payees

### [scheduledTransactions](docs/scheduledtransactions/README.md)

* [getScheduledTransactionById](docs/scheduledtransactions/README.md#getscheduledtransactionbyid) - Single scheduled transaction
* [getScheduledTransactions](docs/scheduledtransactions/README.md#getscheduledtransactions) - List scheduled transactions

### [transactions](docs/transactions/README.md)

* [createTransaction](docs/transactions/README.md#createtransaction) - Create a single transaction or multiple transactions
* [deleteTransaction](docs/transactions/README.md#deletetransaction) - Deletes an existing transaction
* [getTransactionById](docs/transactions/README.md#gettransactionbyid) - Single transaction
* [getTransactions](docs/transactions/README.md#gettransactions) - List transactions
* [getTransactionsByAccount](docs/transactions/README.md#gettransactionsbyaccount) - List account transactions
* [getTransactionsByCategory](docs/transactions/README.md#gettransactionsbycategory) - List category transactions
* [getTransactionsByPayee](docs/transactions/README.md#gettransactionsbypayee) - List payee transactions
* [importTransactions](docs/transactions/README.md#importtransactions) - Import transactions
* [updateTransaction](docs/transactions/README.md#updatetransaction) - Updates an existing transaction
* [updateTransactions](docs/transactions/README.md#updatetransactions) - Update multiple transactions

### [user](docs/user/README.md)

* [getUser](docs/user/README.md#getuser) - User info
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
