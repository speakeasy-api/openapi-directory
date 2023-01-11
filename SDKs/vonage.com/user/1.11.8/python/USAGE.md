<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.UserCtrlGetUserByIDRequest(
    security=operations.UserCtrlGetUserByIDSecurity(
        bearer_auth=shared.SchemeBearerAuth(
            authorization="Bearer YOUR_BEARER_TOKEN_HERE",
        ),
    ),
    path_params=operations.UserCtrlGetUserByIDPathParams(
        account_id="odit",
        user_id=63.200001,
    ),
)
    
res = s.user_ctrl_get_user_by_id(req)

if res.user_hal_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->