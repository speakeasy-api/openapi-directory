<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.CashinPathParams;
import org.openapis.openapi.models.operations.CashinQueryParams;
import org.openapis.openapi.models.operations.CashinHeaders;
import org.openapis.openapi.models.operations.CashinRequest;
import org.openapis.openapi.models.operations.CashinResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CashinRequest req = new CashinRequest() {{
                pathParams = new CashinPathParams() {{
                    betId = "corrupti";
                }};
                queryParams = new CashinQueryParams() {{
                    cashInValue = 5928.45;
                    cashinBetDelayId = "distinctio";
                }};
                headers = new CashinHeaders() {{
                    apiKey = "quibusdam";
                    apiSecret = "unde";
                    apiTicket = "nulla";
                }};
            }};            

            CashinResponse res = sdk.bets.cashin(req);

            if (res.cashInResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->