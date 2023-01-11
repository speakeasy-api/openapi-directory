<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.GetCallLogsRequest(
    security=operations.GetCallLogsSecurity(
        bearer_auth=shared.SchemeBearerAuth(
            authorization="Bearer YOUR_BEARER_TOKEN_HERE",
        ),
    ),
    path_params=operations.GetCallLogsPathParams(
        account_id="nisi",
    ),
    query_params=operations.GetCallLogsQueryParams(
        destination_user="vel",
        direction="Outbound",
        end_gte="harum",
        end_lte="ad",
        from_="aut",
        page=97.099998,
        page_size=8.100000,
        source_user="qui",
        start_gte="ipsum",
        start_lte="dolorum",
        to="error",
    ),
)
    
res = s.get_call_logs(req)

if res.call_logs_hal_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->