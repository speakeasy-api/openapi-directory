<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AccountCtrlGetAccountServicesByAccountIDRequest;
import org.openapis.openapi.models.operations.AccountCtrlGetAccountServicesByAccountIDResponse;
import org.openapis.openapi.models.operations.AccountCtrlGetAccountServicesByAccountIDSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AccountCtrlGetAccountServicesByAccountIDRequest req = new AccountCtrlGetAccountServicesByAccountIDRequest(5488.14);            

            AccountCtrlGetAccountServicesByAccountIDResponse res = sdk.accountCtrlGetAccountServicesByAccountID(req, new AccountCtrlGetAccountServicesByAccountIDSecurity("provident") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.accountHalResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->