<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.UserCtrlGetUserByIDRequest(
    account_id="corrupti",
    user_id=5928.45,
)
    
res = s.user_ctrl_get_user_by_id(req, operations.UserCtrlGetUserByIDSecurity(
    bearer_auth="Bearer YOUR_BEARER_TOKEN_HERE",
))

if res.user_hal_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->