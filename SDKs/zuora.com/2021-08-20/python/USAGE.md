<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.DeleteAccountingCodeRequest(
    path_params=operations.DeleteAccountingCodePathParams(
        ac_id="distinctio",
    ),
    headers=operations.DeleteAccountingCodeHeaders(
        zuora_entity_ids="voluptas",
        zuora_track_id="quos",
    ),
)
    
res = s.accounting_codes.delete_accounting_code(req)

if res.common_response_type is not None:
    # handle response
```
<!-- End SDK Example Usage -->