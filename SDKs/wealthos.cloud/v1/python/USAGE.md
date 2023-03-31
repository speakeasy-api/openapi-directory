<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.UpdateBankAccountRequest(
    request_body=operations.UpdateBankAccountUpdateRequestBodyForBankAccount(
        account_name="corrupti",
        account_status="inactive",
        default_account="no",
        reference_version=1,
    ),
    bank_account_id="quibusdam",
    x_api_key="unde",
)
    
res = s.bank_accounts.update_bank_account(req, operations.UpdateBankAccountSecurity(
    api_secret_key="YOUR_API_KEY_HERE",
))

if res.update_bank_account_201_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->