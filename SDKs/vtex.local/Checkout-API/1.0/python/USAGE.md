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


req = operations.AddClientPreferencesRequest(
    accept="corrupti",
    content_type="provident",
    request_body=operations.AddClientPreferencesRequestBody(
        locale="distinctio",
        optin_news_letter=False,
    ),
    order_form_id="quibusdam",
)
    
res = s.cart_attachments.add_client_preferences(req)

if res.add_client_preferences_200_application_json_any is not None:
    # handle response
```
<!-- End SDK Example Usage -->