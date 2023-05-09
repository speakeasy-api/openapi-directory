<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ExtensionCtrlGetAccountExtensionByIDRequest;
import org.openapis.openapi.models.operations.ExtensionCtrlGetAccountExtensionByIDResponse;
import org.openapis.openapi.models.operations.ExtensionCtrlGetAccountExtensionByIDSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ExtensionCtrlGetAccountExtensionByIDRequest req = new ExtensionCtrlGetAccountExtensionByIDRequest("corrupti", 5928.45);            

            ExtensionCtrlGetAccountExtensionByIDResponse res = sdk.extensionCtrlGetAccountExtensionByID(req, new ExtensionCtrlGetAccountExtensionByIDSecurity("distinctio") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.endUserRouteHalResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->