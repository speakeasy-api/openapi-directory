<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.GetFindInteractionsRequest(
    query_params=operations.GetFindInteractionsQueryParams(
        format="dump",
        query="id",
    ),
)
    
res = s.all_functions.get_find_interactions(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->