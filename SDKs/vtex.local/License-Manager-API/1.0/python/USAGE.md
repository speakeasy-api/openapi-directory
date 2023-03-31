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

    
res = s.account.get_account()

if res.account_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->