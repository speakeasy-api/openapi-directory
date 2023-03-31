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


req = operations.ActivateSKUBindingRequest(
    accept="corrupti",
    content_type="provident",
    seller_id="vtxkfj7352",
    sku_seller_id="71",
)
    
res = s.sku_bindings.activate_sku_binding(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->