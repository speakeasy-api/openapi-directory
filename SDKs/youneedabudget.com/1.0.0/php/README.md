# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->

<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### accounts

* `createAccount` - Create a new account
* `getAccountById` - Single account
* `getAccounts` - Account list

### budgets

* `getBudgetById` - Single budget
* `getBudgetSettingsById` - Budget Settings
* `getBudgets` - List budgets

### categories

* `getCategories` - List categories
* `getCategoryById` - Single category
* `getMonthCategoryById` - Single category for a specific budget month
* `updateMonthCategory` - Update a category for a specific month

### deprecated

* `bulkCreateTransactions` - Bulk create transactions

### months

* `getBudgetMonth` - Single budget month
* `getBudgetMonths` - List budget months

### payeeLocations

* `getPayeeLocationById` - Single payee location
* `getPayeeLocations` - List payee locations
* `getPayeeLocationsByPayee` - List locations for a payee

### payees

* `getPayeeById` - Single payee
* `getPayees` - List payees

### scheduledTransactions

* `getScheduledTransactionById` - Single scheduled transaction
* `getScheduledTransactions` - List scheduled transactions

### transactions

* `createTransaction` - Create a single transaction or multiple transactions
* `deleteTransaction` - Deletes an existing transaction
* `getTransactionById` - Single transaction
* `getTransactions` - List transactions
* `getTransactionsByAccount` - List account transactions
* `getTransactionsByCategory` - List category transactions
* `getTransactionsByPayee` - List payee transactions
* `importTransactions` - Import transactions
* `updateTransaction` - Updates an existing transaction
* `updateTransactions` - Update multiple transactions

### user

* `getUser` - User info
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
