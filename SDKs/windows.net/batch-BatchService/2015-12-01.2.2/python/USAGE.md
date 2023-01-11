<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.ApplicationGetRequest(
    path_params=operations.ApplicationGetPathParams(
        application_id="enim",
    ),
    query_params=operations.ApplicationGetQueryParams(
        api_version="aliquid",
        timeout=9196437769981599815,
    ),
    headers=operations.ApplicationGetHeaders(
        client_request_id="praesentium",
        ocp_date="voluptatem",
        return_client_request_id=True,
    ),
)
    
res = s.applications.application_get(req)

if res.application_summary is not None:
    # handle response
```
<!-- End SDK Example Usage -->