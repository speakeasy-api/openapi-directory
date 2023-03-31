<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetInventoryRequest(
    wm_consumer_channel_type="corrupti",
    wm_qos_correlation_id="provident",
    wm_sec_access_token="distinctio",
    wm_svc_name="quibusdam",
    ship_node="unde",
    sku="nulla",
)
    
res = s.inventory.get_inventory(req)

if res.get_inventory_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->