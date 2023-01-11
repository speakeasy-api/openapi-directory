<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.ExtensionCtrlGetAccountExtensionByIDRequest(
    security=operations.ExtensionCtrlGetAccountExtensionByIDSecurity(
        bearer_auth=shared.SchemeBearerAuth(
            authorization="Bearer YOUR_BEARER_TOKEN_HERE",
        ),
    ),
    path_params=operations.ExtensionCtrlGetAccountExtensionByIDPathParams(
        account_id="omnis",
        extension_number=82.199997,
    ),
)
    
res = s.extension_ctrl_get_account_extension_by_id(req)

if res.end_user_route_hal_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->