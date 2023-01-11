<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    )
)
    
req = operations.GetEndpointsRequest(
    query_params=operations.GetEndpointsQueryParams(
        openapi=True,
    ),
)
    
res = s.api_information.get_endpoints(req)

if res.endpoint is not None:
    # handle response
```
<!-- End SDK Example Usage -->