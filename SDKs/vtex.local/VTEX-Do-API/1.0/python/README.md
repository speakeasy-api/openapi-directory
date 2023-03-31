# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/vtex.local/VTEX-Do-API/1.0/python
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### note

* `get_note` - Retrieve Note
* `get_notesbyorder_id` - Get Notes by orderId
* `new_note` - Create Note

### task

* `add_comment` - Add Comment on a Task
* `edit_task` - Update Task
* `get_task` - Retrieve Task
* `listtasksbyassignee` - List tasks
* `new_task` - Create Task
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
