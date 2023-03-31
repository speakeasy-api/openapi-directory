<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.ActivateSKUBindingPathParams;
import org.openapis.openapi.models.operations.ActivateSKUBindingHeaders;
import org.openapis.openapi.models.operations.ActivateSKUBindingRequest;
import org.openapis.openapi.models.operations.ActivateSKUBindingResponse;

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

            ActivateSKUBindingRequest req = new ActivateSKUBindingRequest() {{
                pathParams = new ActivateSKUBindingPathParams() {{
                    sellerId = "vtxkfj7352";
                    skuSellerId = "71";
                }};
                headers = new ActivateSKUBindingHeaders() {{
                    accept = "corrupti";
                    contentType = "provident";
                }};
            }};            

            ActivateSKUBindingResponse res = sdk.skuBindings.activateSKUBinding(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->