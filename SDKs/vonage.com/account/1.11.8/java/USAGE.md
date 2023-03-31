<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.AccountCtrlGetAccountServicesByAccountIDSecurity;
import org.openapis.openapi.models.operations.AccountCtrlGetAccountServicesByAccountIDPathParams;
import org.openapis.openapi.models.operations.AccountCtrlGetAccountServicesByAccountIDRequest;
import org.openapis.openapi.models.operations.AccountCtrlGetAccountServicesByAccountIDResponse;
import org.openapis.openapi.models.shared.SchemeBearerAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AccountCtrlGetAccountServicesByAccountIDRequest req = new AccountCtrlGetAccountServicesByAccountIDRequest() {{
                security = new AccountCtrlGetAccountServicesByAccountIDSecurity() {{
                    bearerAuth = new SchemeBearerAuth() {{
                        authorization = "Bearer YOUR_BEARER_TOKEN_HERE";
                    }};
                }};
                pathParams = new AccountCtrlGetAccountServicesByAccountIDPathParams() {{
                    accountId = 5488.14;
                }};
            }};            

            AccountCtrlGetAccountServicesByAccountIDResponse res = sdk.accountCtrlGetAccountServicesByAccountID(req);

            if (res.accountHalResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->