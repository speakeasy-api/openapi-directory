# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/vtex.local/Reviews-and-Ratings-API/1.0/python
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### rating

* `get_product_rating` - Get Product Rating

### review

* `delete_multiple_reviews` - Delete Multiple Reviews
* `delete_review` - Delete Review
* `edit_review` - Update a Review
* `get_reviewby_review_id` - Get Review by Review ID
* `getalistof_reviews` - Get a list of Reviews
* `save_multiple_reviews` - Create Multiple Reviews
* `save_review` - Create a Review
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
