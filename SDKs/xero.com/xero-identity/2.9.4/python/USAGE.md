<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.DeleteConnectionRequest(
    security=operations.DeleteConnectionSecurity(
        o_auth2=shared.SchemeOAuth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.DeleteConnectionPathParams(
        id="qui",
    ),
)
    
res = s.identity.delete_connection(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->