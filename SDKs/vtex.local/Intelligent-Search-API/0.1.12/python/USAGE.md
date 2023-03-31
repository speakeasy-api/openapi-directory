<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetAutocompleteSuggestionsRequest(
    locale="corrupti",
    query="provident",
)
    
res = s.autocomplete.get_autocomplete_suggestions(req)

if res.autocomplete_search_suggestions is not None:
    # handle response
```
<!-- End SDK Example Usage -->