<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.AccountCtrlGetAccountServicesByAccountIDRequest(
    account_id=5488.14,
)
    
res = s.account_ctrl_get_account_services_by_account_id(req, operations.AccountCtrlGetAccountServicesByAccountIDSecurity(
    bearer_auth="Bearer YOUR_BEARER_TOKEN_HERE",
))

if res.account_hal_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->