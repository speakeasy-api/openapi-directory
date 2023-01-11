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

            AccountCtrlGetAccountServicesByAccountIdRequest req = new AccountCtrlGetAccountServicesByAccountIdRequest() {{
                security = new AccountCtrlGetAccountServicesByAccountIdSecurity() {{
                    bearerAuth = new SchemeBearerAuth() {{
                        authorization = "Bearer YOUR_BEARER_TOKEN_HERE";
                    }};
                }};
                pathParams = new AccountCtrlGetAccountServicesByAccountIdPathParams() {{
                    accountId = 74.099998;
                }};
            }};

            AccountCtrlGetAccountServicesByAccountIdResponse res = sdk.accountCtrlGetAccountServicesByAccountId(req);

            if (res.accountHalResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->