<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.ExtensionCtrlGetAccountExtensionByIDSecurity;
import org.openapis.openapi.models.operations.ExtensionCtrlGetAccountExtensionByIDPathParams;
import org.openapis.openapi.models.operations.ExtensionCtrlGetAccountExtensionByIDRequest;
import org.openapis.openapi.models.operations.ExtensionCtrlGetAccountExtensionByIDResponse;
import org.openapis.openapi.models.shared.SchemeBearerAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ExtensionCtrlGetAccountExtensionByIDRequest req = new ExtensionCtrlGetAccountExtensionByIDRequest() {{
                security = new ExtensionCtrlGetAccountExtensionByIDSecurity() {{
                    bearerAuth = new SchemeBearerAuth() {{
                        authorization = "Bearer YOUR_BEARER_TOKEN_HERE";
                    }};
                }};
                pathParams = new ExtensionCtrlGetAccountExtensionByIDPathParams() {{
                    accountId = "corrupti";
                    extensionNumber = 5928.45;
                }};
            }};            

            ExtensionCtrlGetAccountExtensionByIDResponse res = sdk.extensionCtrlGetAccountExtensionByID(req);

            if (res.endUserRouteHalResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->