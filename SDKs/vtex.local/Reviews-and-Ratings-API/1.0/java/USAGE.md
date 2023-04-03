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