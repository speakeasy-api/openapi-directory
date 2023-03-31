<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.DELETEAccountingCodeRequest(
    zuora_entity_ids="corrupti",
    zuora_track_id="provident",
    ac_id="distinctio",
)
    
res = s.accounting_codes.delete_accounting_code(req)

if res.common_response_type is not None:
    # handle response
```
<!-- End SDK Example Usage -->