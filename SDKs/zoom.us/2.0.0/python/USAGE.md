<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        o_auth="Bearer YOUR_ACCESS_TOKEN_HERE",
    ),
)


req = operations.AccountRequest(
    account_id="corrupti",
)
    
res = s.accounts.account(req)

if res.account_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->