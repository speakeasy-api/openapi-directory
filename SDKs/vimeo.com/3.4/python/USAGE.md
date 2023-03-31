<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    ),
)


req = operations.GetEndpointsRequest(
    openapi=True,
)
    
res = s.api_information.get_endpoints(req)

if res.endpoint is not None:
    # handle response
```
<!-- End SDK Example Usage -->