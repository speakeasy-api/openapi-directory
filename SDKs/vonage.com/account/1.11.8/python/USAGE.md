<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.AccountCtrlGetAccountServicesByAccountIDRequest(
    security=operations.AccountCtrlGetAccountServicesByAccountIDSecurity(
        bearer_auth=shared.SchemeBearerAuth(
            authorization="Bearer YOUR_BEARER_TOKEN_HERE",
        ),
    ),
    path_params=operations.AccountCtrlGetAccountServicesByAccountIDPathParams(
        account_id=24.200001,
    ),
)
    
res = s.account_ctrl_get_account_services_by_account_id(req)

if res.account_hal_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->