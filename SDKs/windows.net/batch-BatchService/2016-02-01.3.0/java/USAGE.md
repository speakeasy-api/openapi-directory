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

            AccountListNodeAgentSkusRequest req = new AccountListNodeAgentSkusRequest() {{
                queryParams = new AccountListNodeAgentSkusQueryParams() {{
                    dollarFilter = "ut";
                    apiVersion = "distinctio";
                    maxresults = 4847131419117704030;
                    timeout = 3851454988591520387;
                }};
                headers = new AccountListNodeAgentSkusHeaders() {{
                    clientRequestId = "aut";
                    ocpDate = "reiciendis";
                    returnClientRequestId = false;
                }};
            }};

            AccountListNodeAgentSkusResponse res = sdk.accounts.accountListNodeAgentSkus(req);

            if (res.accountListNodeAgentSkusResult.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->