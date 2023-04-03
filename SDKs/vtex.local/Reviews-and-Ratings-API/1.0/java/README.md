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
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.GetProductRatingRequest;
import org.openapis.openapi.models.operations.GetProductRatingResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetProductRatingRequest req = new GetProductRatingRequest() {{
                accept = "corrupti";
                contentType = "provident";
                productId = "1";
            }}            

            GetProductRatingResponse res = sdk.rating.getProductRating(req);

            if (res.getProductRating200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### rating

* `getProductRating` - Get Product Rating

### review

* `deleteMultipleReviews` - Delete Multiple Reviews
* `deleteReview` - Delete Review
* `editReview` - Update a Review
* `getReviewbyReviewId` - Get Review by Review ID
* `getalistofReviews` - Get a list of Reviews
* `saveMultipleReviews` - Create Multiple Reviews
* `saveReview` - Create a Review
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
