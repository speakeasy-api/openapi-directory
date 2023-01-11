<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        api_key=shared.SchemeAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
    )
)
    
req = operations.PostAPI10CalculateRequest(
    request=[
        shared.Itinerary(
            base_fare_usd=11.100000,
            id="sint",
            segments=[
                shared.Segment(
                    booking_class="temporibus",
                    carrier="asperiores",
                    departure="1972-10-21T06:08:42Z",
                    destination="praesentium",
                    distance=42.099998,
                    flight_number=3858531327862123616,
                    operating_carrier="odit",
                    origin="enim",
                ),
                shared.Segment(
                    booking_class="et",
                    carrier="consequatur",
                    departure="2018-06-06T23:53:09Z",
                    destination="minima",
                    distance=24.100000,
                    flight_number=4890578727985744161,
                    operating_carrier="omnis",
                    origin="ab",
                ),
                shared.Segment(
                    booking_class="mollitia",
                    carrier="qui",
                    departure="1975-01-05T10:18:12Z",
                    destination="aperiam",
                    distance=31.100000,
                    flight_number=6848355874542242958,
                    operating_carrier="ea",
                    origin="earum",
                ),
            ],
            ticketing_carrier="temporibus",
        ),
    ],
)
    
res = s.calculate.post_api_1_0_calculate(req)

if res.calculate_results is not None:
    # handle response
```
<!-- End SDK Example Usage -->