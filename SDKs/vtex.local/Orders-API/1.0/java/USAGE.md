<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetWindowToChangeSellerRequest;
import org.openapis.openapi.models.operations.GetWindowToChangeSellerResponse;
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

            GetWindowToChangeSellerRequest req = new GetWindowToChangeSellerRequest("distinctio", "quibusdam");            

            GetWindowToChangeSellerResponse res = sdk.changeSeller.getWindowToChangeSeller(req);

            if (res.getWindowToChangeSeller200TextPlainInteger != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->