<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.OptCapProgramInPriceRequest(
    request_body=operations.OptCapProgramInPriceRequestBody(
        subsidy_enrolled=False,
        subsidy_preference=False,
    ),
    wm_consumer_channel_type="corrupti",
    wm_qos_correlation_id="provident",
    wm_sec_access_token="distinctio",
    wm_svc_name="quibusdam",
)
    
res = s.prices.opt_cap_program_in_price(req)

if res.opt_cap_program_in_price_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->