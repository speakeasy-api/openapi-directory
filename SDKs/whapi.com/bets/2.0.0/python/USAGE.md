<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.CashinRequest(
    api_key="corrupti",
    api_secret="provident",
    api_ticket="distinctio",
    bet_id="quibusdam",
    cash_in_value=6027.63,
    cashin_bet_delay_id="nulla",
)
    
res = s.bets.cashin(req)

if res.cash_in_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->