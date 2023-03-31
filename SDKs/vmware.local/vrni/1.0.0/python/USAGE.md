<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = shared.ApplicationRequest(
    name="corrupti",
)
    
res = s.applications.add_application(req, operations.AddApplicationSecurity(
    api_key_auth="YOUR_API_KEY_HERE",
))

if res.application is not None:
    # handle response
```
<!-- End SDK Example Usage -->