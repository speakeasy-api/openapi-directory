<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()

    
res = s.entity_data.get_entities()

if res.entities is not None:
    # handle response
```
<!-- End SDK Example Usage -->