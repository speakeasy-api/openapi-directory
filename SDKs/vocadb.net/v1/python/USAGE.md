<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.ActivityEntryAPIGetListRequest(
    query_params=operations.ActivityEntryAPIGetListQueryParams(
        before="1973-10-23T08:53:07Z",
        edit_event="Updated",
        entry_fields="Tags",
        entry_type="PV",
        fields="ArchivedVersion",
        get_total_count=False,
        lang="Default",
        max_results=409928697422585856,
        since="1999-07-29T04:40:34Z",
        sort_rule="CreateDate",
        user_id=6897207526852881530,
    ),
)
    
res = s.activity_entry_api.activity_entry_api_get_list(req)

if res.body is not None:
    # handle response
```
<!-- End SDK Example Usage -->