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


req = operations.GetProductoffersRequest(
    accept="corrupti",
    content_type="provident",
    account_name="distinctio",
    environment="quibusdam",
    product_id="unde",
)
    
res = s.matched_offers.get_productoffers(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->