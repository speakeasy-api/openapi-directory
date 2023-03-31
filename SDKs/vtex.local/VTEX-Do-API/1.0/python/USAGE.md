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


req = operations.GetNoteRequest(
    accept="application/json",
    content_type="application/json",
    note_id="654321cba",
    reason="data-validation",
)
    
res = s.note.get_note(req)

if res.get_note_200_application_json_any is not None:
    # handle response
```
<!-- End SDK Example Usage -->