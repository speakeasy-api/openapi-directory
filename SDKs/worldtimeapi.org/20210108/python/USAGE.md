<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
res = s.get_ip()

if res.date_time_json_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->