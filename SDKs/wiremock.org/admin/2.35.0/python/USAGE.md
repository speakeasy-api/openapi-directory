<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()

    
res = s.near_misses.get_admin_requests_unmatched_near_misses()

if res.get_admin_requests_unmatched_near_misses_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->