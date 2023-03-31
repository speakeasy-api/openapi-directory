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


req = operations.CreateDKIMRequest(
    email_provider="corrupti",
)
    
res = s.dkim_configuration.create_dkim(req)

if res.two_hundred_ok is not None:
    # handle response
```
<!-- End SDK Example Usage -->