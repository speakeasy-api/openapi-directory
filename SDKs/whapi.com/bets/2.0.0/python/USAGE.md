<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.CashinRequest(
    path_params=operations.CashinPathParams(
        bet_id="cupiditate",
    ),
    query_params=operations.CashinQueryParams(
        cash_in_value=76.099998,
        cashin_bet_delay_id="et",
    ),
    headers=operations.CashinHeaders(
        api_key="assumenda",
        api_secret="perferendis",
        api_ticket="ut",
    ),
)
    
res = s.bets.cashin(req)

if res.cash_in_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->