<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.GetWindowToChangeSellerHeaders;
import org.openapis.openapi.models.operations.GetWindowToChangeSellerRequest;
import org.openapis.openapi.models.operations.GetWindowToChangeSellerResponse;

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

            GetWindowToChangeSellerRequest req = new GetWindowToChangeSellerRequest() {{
                headers = new GetWindowToChangeSellerHeaders() {{
                    accept = "corrupti";
                    contentType = "provident";
                }};
            }};            

            GetWindowToChangeSellerResponse res = sdk.changeSeller.getWindowToChangeSeller(req);

            if (res.getWindowToChangeSeller200TextPlainInteger.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->