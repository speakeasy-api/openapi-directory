<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.UpdateBankAccountRequest(
    security=operations.UpdateBankAccountSecurity(
        api_secret_key=shared.SchemeAPISecretKey(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    path_params=operations.UpdateBankAccountPathParams(
        bank_account_id="modi",
    ),
    headers=operations.UpdateBankAccountHeaders(
        x_api_key="ad",
    ),
    request="autem",
)
    
res = s.bank_accounts.update_bank_account(req)

if res.update_bank_account_201_application_json_any is not None:
    # handle response
```
<!-- End SDK Example Usage -->