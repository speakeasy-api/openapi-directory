<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.GetSuggestionPathParams;
import org.openapis.openapi.models.operations.GetSuggestionQueryParams;
import org.openapis.openapi.models.operations.GetSuggestionHeaders;
import org.openapis.openapi.models.operations.GetSuggestionRequest;
import org.openapis.openapi.models.operations.GetSuggestionResponse;

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

            GetSuggestionRequest req = new GetSuggestionRequest() {{
                pathParams = new GetSuggestionPathParams() {{
                    sellerId = "corrupti";
                    sellerSkuId = "provident";
                }};
                queryParams = new GetSuggestionQueryParams() {{
                    accountName = "distinctio";
                }};
                headers = new GetSuggestionHeaders() {{
                    accept = "quibusdam";
                    contentType = "unde";
                }};
            }};            

            GetSuggestionResponse res = sdk.getSuggestions.getSuggestion(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->