<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()

    
res = s.check()

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->