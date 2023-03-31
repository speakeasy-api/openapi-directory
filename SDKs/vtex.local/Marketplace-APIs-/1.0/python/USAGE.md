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


req = operations.GetSuggestionRequest(
    accept="corrupti",
    content_type="provident",
    account_name="distinctio",
    seller_id="quibusdam",
    seller_sku_id="unde",
)
    
res = s.get_suggestions.get_suggestion(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->