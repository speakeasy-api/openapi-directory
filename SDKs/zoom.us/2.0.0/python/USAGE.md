<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        o_auth=shared.SchemeOAuth(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    )
)
    
req = operations.AccountRequest(
    path_params=operations.AccountPathParams(
        account_id="deleniti",
    ),
)
    
res = s.accounts.account(req)

if res.account_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->