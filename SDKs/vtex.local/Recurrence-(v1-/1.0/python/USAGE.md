<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        app_key="YOUR_API_KEY_HERE",
        app_token="YOUR_API_KEY_HERE",
    ),
)


req = operations.AddrecurrenceitemRequest(
    accept="application/json",
    content_type="application/json",
    request_body=[
        shared.AddrecurrenceitemRequest(
            frequency=shared.Frequency(
                interval=592845,
                periodicity="distinctio",
            ),
            quantity=844266,
            seller="unde",
            shipping_address_id="nulla",
            sku="corrupti",
        ),
        shared.AddrecurrenceitemRequest(
            frequency=shared.Frequency(
                interval=847252,
                periodicity="vel",
            ),
            quantity=623564,
            seller="deserunt",
            shipping_address_id="suscipit",
            sku="iure",
        ),
        shared.AddrecurrenceitemRequest(
            frequency=shared.Frequency(
                interval=297534,
                periodicity="debitis",
            ),
            quantity=56713,
            seller="delectus",
            shipping_address_id="tempora",
            sku="suscipit",
        ),
    ],
    recurrence_id="molestiae",
)
    
res = s.miscellaneous.addrecurrenceitem(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->