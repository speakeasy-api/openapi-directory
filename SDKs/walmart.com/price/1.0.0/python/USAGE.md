<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        basic_scheme=shared.SchemeBasicScheme(
            password="YOUR_PASSWORD_HERE",
            username="YOUR_USERNAME_HERE",
        ),
    )
)
    
req = operations.OptCapProgramInPriceRequest(
    headers=operations.OptCapProgramInPriceHeaders(
        authorization="et",
        wm_consumer_channel_type="ab",
        wm_qos_correlation_id="qui",
        wm_sec_access_token="inventore",
        wm_svc_name="et",
    ),
    request=operations.OptCapProgramInPriceRequestBody(
        subsidy_enrolled=False,
        subsidy_preference=False,
    ),
)
    
res = s.prices.opt_cap_program_in_price(req)

if res.opt_cap_program_in_price_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->