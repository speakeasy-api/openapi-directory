<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.AddApplicationRequest(
    security=operations.AddApplicationSecurity(
        api_key_auth=shared.SchemeAPIKeyAuth(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    request=shared.ApplicationRequest(
        name="illum",
    ),
)
    
res = s.applications.add_application(req)

if res.application is not None:
    # handle response
```
<!-- End SDK Example Usage -->