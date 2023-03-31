<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetAllContentTypesRequest(
    builder_id="faststore",
)
    
res = s.pages.get_all_content_types(req)

if res.get_all_content_types_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->