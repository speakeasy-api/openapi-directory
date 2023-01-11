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

            UserCtrlGetUserByIdRequest req = new UserCtrlGetUserByIdRequest() {{
                security = new UserCtrlGetUserByIdSecurity() {{
                    bearerAuth = new SchemeBearerAuth() {{
                        authorization = "Bearer YOUR_BEARER_TOKEN_HERE";
                    }};
                }};
                pathParams = new UserCtrlGetUserByIdPathParams() {{
                    accountId = "ad";
                    userId = 15.100000;
                }};
            }};

            UserCtrlGetUserByIdResponse res = sdk.userCtrlGetUserById(req);

            if (res.userHalResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->