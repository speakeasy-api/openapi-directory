<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AccountRequest;
import org.openapis.openapi.models.operations.AccountResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            AccountRequest req = new AccountRequest() {{
                accountId = "corrupti";
            }}            

            AccountResponse res = sdk.accounts.account(req);

            if (res.account200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->