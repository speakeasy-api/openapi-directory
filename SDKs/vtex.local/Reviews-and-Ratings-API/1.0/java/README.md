# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProductRatingRequest;
import org.openapis.openapi.models.operations.GetProductRatingResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti", "provident") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetProductRatingRequest req = new GetProductRatingRequest("distinctio", "quibusdam", "1");            

            GetProductRatingResponse res = sdk.rating.getProductRating(req);

            if (res.getProductRating200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [rating](docs/rating/README.md)

* [getProductRating](docs/rating/README.md#getproductrating) - Get Product Rating

### [review](docs/review/README.md)

* [deleteMultipleReviews](docs/review/README.md#deletemultiplereviews) - Delete Multiple Reviews
* [deleteReview](docs/review/README.md#deletereview) - Delete Review
* [editReview](docs/review/README.md#editreview) - Update a Review
* [getReviewbyReviewId](docs/review/README.md#getreviewbyreviewid) - Get Review by Review ID
* [getalistofReviews](docs/review/README.md#getalistofreviews) - Get a list of Reviews
* [saveMultipleReviews](docs/review/README.md#savemultiplereviews) - Create Multiple Reviews
* [saveReview](docs/review/README.md#savereview) - Create a Review
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
