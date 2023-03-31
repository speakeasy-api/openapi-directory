<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        bearer="YOUR_API_KEY_HERE",
    ),
)


req = operations.CreateAccountRequest(
    post_account_wrapper=shared.PostAccountWrapper(
        account=shared.SaveAccount(
            balance=548814,
            name="provident",
            type="studentLoan",
        ),
    ),
    budget_id="quibusdam",
)
    
res = s.accounts.create_account(req)

if res.account_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->