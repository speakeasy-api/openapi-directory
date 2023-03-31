# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/vtex.local/Giftcard-API/1.0/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        app_key="YOUR_API_KEY_HERE",
        app_token="YOUR_API_KEY_HERE",
    ),
)


req = operations.CreateGiftCardRequest(
    accept="corrupti",
    content_type="provident",
    create_gift_card_request=shared.CreateGiftCardRequest(
        caption="rewards program",
        expiring_date="2020-09-01T13:15:30Z",
        multiple_credits=False,
        multiple_redemptions=False,
        profile_id="1234",
        relation_name="insert example here",
        restricted_to_owner=False,
    ),
    x_vtex_api_app_key="distinctio",
    x_vtex_api_app_token="quibusdam",
)
    
res = s.gift_card.create_gift_card(req)

if res.response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### gift_card

* `create_gift_card` - Create GiftCard
* `get_gift_cardby_id` - Get GiftCard by ID
* `get_gift_cardusing_json` - Get GiftCard using JSON

### transaction

* `cancel_gift_card_transaction` - Cancel GiftCard Transaction
* `create_gift_card_transaction` - Create GiftCard Transaction
* `get_gift_card_transactionby_id` - Get GiftCard Transaction by ID
* `get_gift_card_transactions` - Get GiftCard Transactions
* `get_transaction_authorizations` - Get Transaction Authorizations
* `get_transaction_cancellations` - Get Transaction Cancellations
* `get_transaction_settlements` - Get Transaction Settlements
* `settle_gift_card_transaction` - Settle GiftCard Transaction
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
