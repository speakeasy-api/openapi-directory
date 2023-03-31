<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        api_key="YOUR_API_KEY_HERE",
    ),
)

    
res = s.account.account()

if res.account is not None:
    # handle response
```
<!-- End SDK Example Usage -->