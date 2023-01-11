<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.CreateManualAccountRequest(
    request=shared.CreateAccountRequest(
        account=shared.CreateAccountInfo(
            account_name="aliquam",
            account_number="est",
            account_type="debitis",
            address=shared.AccountAddress(
                address1="eligendi",
                address2="vero",
                address3="molestiae",
                city="occaecati",
                country="sed",
                source_type="fuga",
                state="voluptatum",
                street="aliquam",
                type="OFFICE",
                zip="repellat",
            ),
            amount_due=shared.Money(
                amount=82.099998,
                currency="INR",
            ),
            balance=shared.Money(
                amount=24.200001,
                currency="MYR",
            ),
            due_date="officiis",
            frequency="EBILL",
            home_value=shared.Money(
                amount=39.200001,
                currency="CAD",
            ),
            include_in_net_worth="tempora",
            memo="excepturi",
            nickname="voluptatem",
            valuation_type="MANUAL",
        ),
    ),
)
    
res = s.accounts.create_manual_account(req)

if res.created_account_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->