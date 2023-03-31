<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        x_auth_access_token="YOUR_API_KEY_HERE",
    ),
)


req = operations.BrowseCSVRequest(
    additional_order="corrupti",
    secondary_separator="provident",
    separator="distinctio",
    view_id=844266,
)
    
res = s.browser.browse_csv(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->