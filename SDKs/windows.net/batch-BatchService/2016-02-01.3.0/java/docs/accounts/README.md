# accounts

### Available Operations

* [accountListNodeAgentSkus](#accountlistnodeagentskus) - Lists all node agent SKUs supported by the Azure Batch service.

## accountListNodeAgentSkus

Lists all node agent SKUs supported by the Azure Batch service.

### Example Usage

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
                dollarFilter = "illum";
                clientRequestId = "vel";
                maxresults = 623564;
                ocpDate = "deserunt";
                returnClientRequestId = false;
                timeout = 384382;
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
