<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        basic_scheme=shared.SchemeBasicScheme(
            password="YOUR_PASSWORD_HERE",
            username="YOUR_USERNAME_HERE",
        ),
    )
)
    
req = operations.GetInventoryRequest(
    query_params=operations.GetInventoryQueryParams(
        ship_node="eligendi",
        sku="vel",
    ),
    headers=operations.GetInventoryHeaders(
        authorization="ea",
        wm_consumer_channel_type="ullam",
        wm_qos_correlation_id="molestiae",
        wm_sec_access_token="eligendi",
        wm_svc_name="consequuntur",
    ),
)
    
res = s.inventory.get_inventory(req)

if res.get_inventory_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->