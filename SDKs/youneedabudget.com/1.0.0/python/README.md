# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/youneedabudget.com/1.0.0/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        bearer="YOUR_API_KEY_HERE",
    ),
)


req = operations.CreateAccountRequest(
    post_account_wrapper=shared.PostAccountWrapper(
        account=shared.SaveAccount(
            balance=548814,
            name="provident",
            type="studentLoan",
        ),
    ),
    budget_id="quibusdam",
)
    
res = s.accounts.create_account(req)

if res.account_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### accounts

* `create_account` - Create a new account
* `get_account_by_id` - Single account
* `get_accounts` - Account list

### budgets

* `get_budget_by_id` - Single budget
* `get_budget_settings_by_id` - Budget Settings
* `get_budgets` - List budgets

### categories

* `get_categories` - List categories
* `get_category_by_id` - Single category
* `get_month_category_by_id` - Single category for a specific budget month
* `update_month_category` - Update a category for a specific month

### deprecated

* `bulk_create_transactions` - Bulk create transactions

### months

* `get_budget_month` - Single budget month
* `get_budget_months` - List budget months

### payee_locations

* `get_payee_location_by_id` - Single payee location
* `get_payee_locations` - List payee locations
* `get_payee_locations_by_payee` - List locations for a payee

### payees

* `get_payee_by_id` - Single payee
* `get_payees` - List payees

### scheduled_transactions

* `get_scheduled_transaction_by_id` - Single scheduled transaction
* `get_scheduled_transactions` - List scheduled transactions

### transactions

* `create_transaction` - Create a single transaction or multiple transactions
* `delete_transaction` - Deletes an existing transaction
* `get_transaction_by_id` - Single transaction
* `get_transactions` - List transactions
* `get_transactions_by_account` - List account transactions
* `get_transactions_by_category` - List category transactions
* `get_transactions_by_payee` - List payee transactions
* `import_transactions` - Import transactions
* `update_transaction` - Updates an existing transaction
* `update_transactions` - Update multiple transactions

### user

* `get_user` - User info
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
