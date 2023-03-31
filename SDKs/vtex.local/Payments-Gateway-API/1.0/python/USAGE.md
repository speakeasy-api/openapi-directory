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


req = operations.AffiliationByIDRequest(
    accept="application/json",
    content_type="application/json",
    x_provider_api_app_key="{{X-PROVIDER-API-AppKey}}",
    x_provider_api_app_token="{{X-PROVIDER-API-AppToken}}",
    affiliation_id="e046d326-5421-45ab-95ae-f13d37f260b5",
)
    
res = s.configuration.affiliation_by_id(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->