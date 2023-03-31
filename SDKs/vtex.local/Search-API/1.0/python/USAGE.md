<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        app_key="YOUR_API_KEY_HERE",
        app_token="YOUR_API_KEY_HERE",
    ),
)


req = operations.AutoCompleteRequest(
    accept="application/json",
    content_type="application/json",
    product_name_contains="jeans",
)
    
res = s.autocomplete.auto_complete(req)

if res.the_root_schema is not None:
    # handle response
```
<!-- End SDK Example Usage -->