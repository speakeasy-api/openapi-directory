<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.GetProductoffersPathParams;
import org.openapis.openapi.models.operations.GetProductoffersQueryParams;
import org.openapis.openapi.models.operations.GetProductoffersHeaders;
import org.openapis.openapi.models.operations.GetProductoffersRequest;
import org.openapis.openapi.models.operations.GetProductoffersResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    appKey = new SchemeAppKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                    appToken = new SchemeAppToken() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            GetProductoffersRequest req = new GetProductoffersRequest() {{
                pathParams = new GetProductoffersPathParams() {{
                    productId = "corrupti";
                }};
                queryParams = new GetProductoffersQueryParams() {{
                    accountName = "provident";
                    environment = "distinctio";
                }};
                headers = new GetProductoffersHeaders() {{
                    accept = "quibusdam";
                    contentType = "unde";
                }};
            }};            

            GetProductoffersResponse res = sdk.matchedOffers.getProductoffers(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->