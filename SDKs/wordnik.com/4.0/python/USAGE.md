<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        api_key=shared.SchemeAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
    )
)
    
req = operations.AuthenticateRequest(
    path_params=operations.AuthenticatePathParams(
        username="debitis",
    ),
    query_params=operations.AuthenticateQueryParams(
        password="ea",
    ),
)
    
res = s.account.authenticate(req)

if res.body is not None:
    # handle response
```
<!-- End SDK Example Usage -->