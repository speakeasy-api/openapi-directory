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


req = operations.GetProductRatingRequest(
    accept="corrupti",
    content_type="provident",
    product_id="1",
)
    
res = s.rating.get_product_rating(req)

if res.get_product_rating_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->