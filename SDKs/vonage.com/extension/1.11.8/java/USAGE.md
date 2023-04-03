<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.ExtensionCtrlGetAccountExtensionByIDSecurity;
import org.openapis.openapi.models.operations.ExtensionCtrlGetAccountExtensionByIDRequest;
import org.openapis.openapi.models.operations.ExtensionCtrlGetAccountExtensionByIDResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ExtensionCtrlGetAccountExtensionByIDRequest req = new ExtensionCtrlGetAccountExtensionByIDRequest() {{
                accountId = "corrupti";
                extensionNumber = 5928.45;
            }}            

            ExtensionCtrlGetAccountExtensionByIDResponse res = sdk.extensionCtrlGetAccountExtensionByID(req, new ExtensionCtrlGetAccountExtensionByIDSecurity() {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.endUserRouteHalResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->