<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.ExtensionCtrlGetAccountExtensionByIDRequest(
    account_id="corrupti",
    extension_number=5928.45,
)
    
res = s.extension_ctrl_get_account_extension_by_id(req, operations.ExtensionCtrlGetAccountExtensionByIDSecurity(
    bearer_auth="Bearer YOUR_BEARER_TOKEN_HERE",
))

if res.end_user_route_hal_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->