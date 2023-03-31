<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.ApplicationGetRequest(
    api_version="corrupti",
    application_id="provident",
    client_request_id="distinctio",
    ocp_date="quibusdam",
    return_client_request_id=False,
    timeout=602763,
)
    
res = s.applications.application_get(req)

if res.application_summary is not None:
    # handle response
```
<!-- End SDK Example Usage -->