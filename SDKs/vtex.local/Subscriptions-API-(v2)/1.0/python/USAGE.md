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


req = operations.GetreportstatusbyIDRequest(
    accept="corrupti",
    content_type="provident",
    report_id="distinctio",
)
    
res = s.report.getreportstatusby_id(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->