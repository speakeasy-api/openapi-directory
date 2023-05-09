<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AccountListNodeAgentSkusRequest;
import org.openapis.openapi.models.operations.AccountListNodeAgentSkusResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AccountListNodeAgentSkusRequest req = new AccountListNodeAgentSkusRequest("corrupti") {{
                dollarFilter = "provident";
                clientRequestId = "distinctio";
                maxresults = 844266;
                ocpDate = "unde";
                returnClientRequestId = false;
                timeout = 857946;
            }};            

            AccountListNodeAgentSkusResponse res = sdk.accounts.accountListNodeAgentSkus(req);

            if (res.accountListNodeAgentSkusResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->