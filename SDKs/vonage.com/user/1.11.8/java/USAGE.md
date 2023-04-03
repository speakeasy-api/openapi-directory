<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.UserCtrlGetUserByIDSecurity;
import org.openapis.openapi.models.operations.UserCtrlGetUserByIDRequest;
import org.openapis.openapi.models.operations.UserCtrlGetUserByIDResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UserCtrlGetUserByIDRequest req = new UserCtrlGetUserByIDRequest() {{
                accountId = "corrupti";
                userId = 5928.45;
            }}            

            UserCtrlGetUserByIDResponse res = sdk.userCtrlGetUserByID(req, new UserCtrlGetUserByIDSecurity() {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.userHalResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->