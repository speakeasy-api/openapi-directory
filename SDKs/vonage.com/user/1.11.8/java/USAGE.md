<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.UserCtrlGetUserByIDSecurity;
import org.openapis.openapi.models.operations.UserCtrlGetUserByIDPathParams;
import org.openapis.openapi.models.operations.UserCtrlGetUserByIDRequest;
import org.openapis.openapi.models.operations.UserCtrlGetUserByIDResponse;
import org.openapis.openapi.models.shared.SchemeBearerAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UserCtrlGetUserByIDRequest req = new UserCtrlGetUserByIDRequest() {{
                security = new UserCtrlGetUserByIDSecurity() {{
                    bearerAuth = new SchemeBearerAuth() {{
                        authorization = "Bearer YOUR_BEARER_TOKEN_HERE";
                    }};
                }};
                pathParams = new UserCtrlGetUserByIDPathParams() {{
                    accountId = "corrupti";
                    userId = 5928.45;
                }};
            }};            

            UserCtrlGetUserByIDResponse res = sdk.userCtrlGetUserByID(req);

            if (res.userHalResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->