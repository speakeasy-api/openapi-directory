<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetFindInteractionsRequest(
    format="dump",
    query="provident",
)
    
res = s.all_functions.get_find_interactions(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->