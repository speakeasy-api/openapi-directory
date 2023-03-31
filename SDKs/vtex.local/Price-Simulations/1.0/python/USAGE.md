<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetVCustomPricesSessionSchemaRequest(
    accept="corrupti",
    content_type="provident",
)
    
res = s.custom_prices.get_v_custom_prices_session_schema(req)

if res.request_body is not None:
    # handle response
```
<!-- End SDK Example Usage -->