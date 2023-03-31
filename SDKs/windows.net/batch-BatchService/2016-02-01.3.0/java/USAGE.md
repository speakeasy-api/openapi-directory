<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.AccountListNodeAgentSkusQueryParams;
import org.openapis.openapi.models.operations.AccountListNodeAgentSkusHeaders;
import org.openapis.openapi.models.operations.AccountListNodeAgentSkusRequest;
import org.openapis.openapi.models.operations.AccountListNodeAgentSkusResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AccountListNodeAgentSkusRequest req = new AccountListNodeAgentSkusRequest() {{
                queryParams = new AccountListNodeAgentSkusQueryParams() {{
                    dollarFilter = "corrupti";
                    apiVersion = "provident";
                    maxresults = 715190;
                    timeout = 844266;
                }};
                headers = new AccountListNodeAgentSkusHeaders() {{
                    clientRequestId = "unde";
                    ocpDate = "nulla";
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