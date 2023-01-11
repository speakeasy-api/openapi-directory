<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

            ExtensionCtrlGetAccountExtensionByIdRequest req = new ExtensionCtrlGetAccountExtensionByIdRequest() {{
                security = new ExtensionCtrlGetAccountExtensionByIdSecurity() {{
                    bearerAuth = new SchemeBearerAuth() {{
                        authorization = "Bearer YOUR_BEARER_TOKEN_HERE";
                    }};
                }};
                pathParams = new ExtensionCtrlGetAccountExtensionByIdPathParams() {{
                    accountId = "quasi";
                    extensionNumber = 32.099998;
                }};
            }};

            ExtensionCtrlGetAccountExtensionByIdResponse res = sdk.extensionCtrlGetAccountExtensionById(req);

            if (res.endUserRouteHalResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->