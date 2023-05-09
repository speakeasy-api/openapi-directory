<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActivateSKUBindingRequest;
import org.openapis.openapi.models.operations.ActivateSKUBindingResponse;
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

            ActivateSKUBindingRequest req = new ActivateSKUBindingRequest("distinctio", "quibusdam", "vtxkfj7352", "71");            

            ActivateSKUBindingResponse res = sdk.skuBindings.activateSKUBinding(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->