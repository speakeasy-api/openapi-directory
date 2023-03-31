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


req = operations.RetrieveattachmentRequest(
    acronym="corrupti",
    field="provident",
    file_name="distinctio",
    id="quibusdam",
)
    
res = s.attachments.retrieveattachment(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->