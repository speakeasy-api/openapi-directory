<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetCallLogsRequest(
    account_id="corrupti",
    destination_user="provident",
    direction="Outbound",
    end_gte="quibusdam",
    end_lte="unde",
    from_="nulla",
    page=5448.83,
    page_size=8472.52,
    source_user="vel",
    start_gte="error",
    start_lte="deserunt",
    to="suscipit",
)
    
res = s.get_call_logs(req, operations.GetCallLogsSecurity(
    bearer_auth="Bearer YOUR_BEARER_TOKEN_HERE",
))

if res.call_logs_hal_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->