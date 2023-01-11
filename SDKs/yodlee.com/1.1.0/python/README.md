# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install openapi
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.CreateManualAccountRequest(
    request=shared.CreateAccountRequest(
        account=shared.CreateAccountInfo(
            account_name="aliquam",
            account_number="est",
            account_type="debitis",
            address=shared.AccountAddress(
                address1="eligendi",
                address2="vero",
                address3="molestiae",
                city="occaecati",
                country="sed",
                source_type="fuga",
                state="voluptatum",
                street="aliquam",
                type="OFFICE",
                zip="repellat",
            ),
            amount_due=shared.Money(
                amount=82.099998,
                currency="INR",
            ),
            balance=shared.Money(
                amount=24.200001,
                currency="MYR",
            ),
            due_date="officiis",
            frequency="EBILL",
            home_value=shared.Money(
                amount=39.200001,
                currency="CAD",
            ),
            include_in_net_worth="tempora",
            memo="excepturi",
            nickname="voluptatem",
            valuation_type="MANUAL",
        ),
    ),
)
    
res = s.accounts.create_manual_account(req)

if res.created_account_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### Accounts

* `create_manual_account` - Add Manual Account
* `delete_account` - Delete Account
* `evaluate_address` - Evaluate Address
* `get_account` - Get Account Details
* `get_all_accounts` - Get Accounts
* `get_historical_balances` - Get Historical Balances
* `update_account` - Update Account

### Auth

* `delete_api_key` - Delete API Key
* `delete_token` - Delete Token
* `generate_access_token` - Generate Access Token
* `generate_api_key` - Generate API Key
* `get_api_keys` - Get API Keys

### Cobrand

* `cobrand_login` - Cobrand Login
* `cobrand_logout` - Cobrand Logout
* `create_subscription_event` - Subscribe Event
* `delete_subscribed_event` - Delete Subscription
* `get_public_key` - Get Public Key
* `get_subscribed_events` - Get Subscribed Events
* `update_subscribed_event` - Update Subscription

### Configs

* `create_subscription_notification_event` - Subscribe For Notification Event
* `delete_subscribed_notification_event` - Delete Notification Subscription
* `get_public_encryption_key` - Get Public Key
* `get_subscribed_notification_events` - Get Subscribed Notification Events
* `update_subscribed_notification_event` - Update Notification Subscription

### DataExtracts

* `get_data_extracts_events` - Get Events
* `get_data_extracts_user_data` - Get userData

### Derived

* `get_holding_summary` - Get Holding Summary
* `get_networth` - Get Networth Summary
* `get_transaction_summary` - Get Transaction Summary

### Documents

* `delete_document` - Delete Document
* `download_document` - Download a Document
* `get_documents` - Get Documents

### Holdings

* `get_asset_classification_list` - Get Asset Classification List
* `get_holding_type_list` - Get Holding Type List
* `get_holdings` - Get Holdings
* `get_securities` - Get Security Details

### ProviderAccounts

* `delete_provider_account` - Delete Provider Account
* `edit_credentials_or_refresh_provider_account` - Update Account
* `get_all_provider_accounts` - Get Provider Accounts
* `get_provider_account` - Get Provider Account Details
* `get_provider_account_profiles` - Get User Profile Details
* `update_preferences` - Update Preferences

### Providers

* `get_all_providers` - Get Providers
* `get_provider` - Get Provider Details
* `get_providers_count` - Get Providers Count

### Statements

* `get_statements` - Get Statements

### Transactions

* `create_or_run_transaction_categorization_rules` - Create or Run Transaction Categorization Rule
* `create_transaction_category` - Create Category
* `delete_transaction_categorization_rule` - Delete Transaction Categorization Rule
* `delete_transaction_category` - Delete Category
* `get_transaction_categories` - Get Transaction Category List
* `get_transaction_categorization_rules` - Get Transaction Categorization Rules
* `get_transaction_categorization_rules_deprecated` - Get Transaction Categorization Rules
* `get_transactions` - Get Transactions
* `get_transactions_count` - Get Transactions Count
* `run_transaction_categorization_rule` - Run Transaction Categorization Rule
* `update_transaction` - Update Transaction
* `update_transaction_categorization_rule` - Update Transaction Categorization Rule
* `update_transaction_category` - Update Category

### User

* `get_access_tokens` - Get Access Tokens
* `get_user` - Get User Details
* `register_user` - Register User
* `saml_login` - Saml Login
* `unregister` - Delete User
* `update_user` - Update User Details
* `user_logout` - User Logout

### Verification

* `get_verification_status` - Get Verification Status
* `initiate_matching_or_challenge_deposite_verification` - Initiaite Matching Service and Challenge Deposit
* `verify_challenge_deposit` - Verify Challenge Deposit

### Verify Account

* `initiate_account_verification` - Verify Accounts Using Transactions

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
