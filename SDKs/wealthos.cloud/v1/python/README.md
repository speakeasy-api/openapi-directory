# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/wealthos.cloud/v1/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.UpdateBankAccountRequest(
    request_body=operations.UpdateBankAccountUpdateRequestBodyForBankAccount(
        account_name="corrupti",
        account_status="inactive",
        default_account="no",
        reference_version=1,
    ),
    bank_account_id="quibusdam",
    x_api_key="unde",
)
    
res = s.bank_accounts.update_bank_account(req, operations.UpdateBankAccountSecurity(
    api_secret_key="YOUR_API_KEY_HERE",
))

if res.update_bank_account_201_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### bank_accounts

* `update_bank_account` - Update existing bank account details
* `create_bank_account` - Create new bank account
* `get_all_bank_accounts` - Retrieve all the bank accounts of a particular investor
* `get_bank_account` - Retrieve existing bank account from bank account id

### fees

* `create_fee` - Create Fee

### financial_products

* `get_all_financial_products` - Get All Financial Products

### investment_product_transactions

* `execute_buy_trasaction` - Execute Buy Transaction(s)
* `execute_sell_trasaction` - Execute Sell Transaction(s)

### investment_products

* `get_configured_investment_product_prices` - Get Current Prices of all Investment Products
* `get_configured_investment_products` - Get Configured Investment Products
* `get_investment_product` - Get details of a given Investment Product
* `get_investment_product_price` - Get Current Price of an Investment Product

### investor_accounts

* `get_allinvestor_accounts` - Retrieve all the investor accounts
* `getinvestor_account` - Retrieve existing investor account from account id

### investors

* `create_investor` - Create Investor
* `get_all_investors` - Get All Investors
* `get_investor` - Get Investor
* `update_investor` - Update Investor

### payments

* `create_single_payment_intent` - Create Single Payment Intent
* `get_all_payments` - Get All Payments
* `get_payment` - Get Payment by Transaction Id
* `get_pot_payments` - Get Payments by Pot Id

### portfolio_templates

* `create_portfolio_template` - Create new Portfolio Template
* `get_all_portfolio_templates` - Get all the Portfolio templates
* `get_portfolio_template` - Retrive existing Portfolio template
* `update_portfolio_template` - Update existing Portfolio template

### pots_holdings_and_transactions

* `update_pot` - Update existing Pot details
* `create_pot` - Create new pot
* `get_pot` - Retrive existing pot from pot id
* `get_pot_holdings` - Get current holdings of a pot
* `get_pot_transactions` - Get pending & past transactions of a pot
* `get_pot_value` - Get current value of a pot
* `get_pots` - Get all pots for an investor
* `get_total_pot_holdings` - Get total holdings of an Investor
* `get_total_pot_value` - Get total value of all pots of an investor

### rates

* `get_rates` - Get Configured Rates

### rebalance

* `create_rebalance` - Trigger rebalance process
* `evaluate_rebalance` - Evaluate rebalance
* `get_rebalance_details` - Retrieve rebalance request related details

### switch_instruction

* `execute_switch_trasaction` - Execute Switch Instruction
* `get_switch` - Retrieve Switch instruction from Switch ID

### test_methods

* `get_be_greeting` - Wealth Manager Greeting for BE

### utility

* `copy_file_to_s3` - Upload a file

### withdrawal

* `create_withdrawal` - Create Withdrawal
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
