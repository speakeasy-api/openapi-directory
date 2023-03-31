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


req = operations.GetrulesforapricetableRequest(
    accept="application/json",
    content_type="corrupti",
    price_table_id="b2c",
)
    
res = s.price_tables.getrulesforapricetable(req)

if res.getrulesforapricetable_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->