<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
res = s.accounts.get_account()

if res.account is not None:
    # handle response
```
<!-- End SDK Example Usage -->