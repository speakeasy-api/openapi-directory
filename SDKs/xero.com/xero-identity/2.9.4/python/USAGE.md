<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.DeleteConnectionRequest(
    id="89bd9d8d-69a6-474e-8f46-7cc8796ed151",
)
    
res = s.identity.delete_connection(req, operations.DeleteConnectionSecurity(
    o_auth2="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->