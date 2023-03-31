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