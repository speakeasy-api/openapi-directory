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


req = operations.GetWindowToChangeSellerRequest(
    accept="corrupti",
    content_type="provident",
)
    
res = s.change_seller.get_window_to_change_seller(req)

if res.get_window_to_change_seller_200_text_plain_integer is not None:
    # handle response
```
<!-- End SDK Example Usage -->