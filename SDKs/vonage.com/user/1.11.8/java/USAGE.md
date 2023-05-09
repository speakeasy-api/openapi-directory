<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UserCtrlGetUserByIDRequest;
import org.openapis.openapi.models.operations.UserCtrlGetUserByIDResponse;
import org.openapis.openapi.models.operations.UserCtrlGetUserByIDSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UserCtrlGetUserByIDRequest req = new UserCtrlGetUserByIDRequest("corrupti", 5928.45);            

            UserCtrlGetUserByIDResponse res = sdk.userCtrlGetUserByID(req, new UserCtrlGetUserByIDSecurity("distinctio") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.userHalResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->