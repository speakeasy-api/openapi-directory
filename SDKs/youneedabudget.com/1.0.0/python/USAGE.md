<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        bearer=shared.SchemeBearer(
            api_key="YOUR_API_KEY_HERE",
        ),
    )
)
    
req = operations.CreateAccountRequest(
    path_params=operations.CreateAccountPathParams(
        budget_id="quo",
    ),
    request=shared.SaveAccountWrapper(
        account=shared.SaveAccount(
            balance=1779878049279090778,
            name="quos",
            type="otherAsset",
        ),
    ),
)
    
res = s.accounts.create_account(req)

if res.account_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->