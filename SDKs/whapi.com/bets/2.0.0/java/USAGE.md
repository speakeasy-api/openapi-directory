<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CashinRequest;
import org.openapis.openapi.models.operations.CashinResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CashinRequest req = new CashinRequest("corrupti", "provident", "distinctio", "quibusdam", 6027.63, "nulla");            

            CashinResponse res = sdk.bets.cashin(req);

            if (res.cashInResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->