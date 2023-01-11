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

            CashinRequest req = new CashinRequest() {{
                pathParams = new CashinPathParams() {{
                    betId = "sit";
                }};
                queryParams = new CashinQueryParams() {{
                    cashInValue = 14.200000;
                    cashinBetDelayId = "expedita";
                }};
                headers = new CashinHeaders() {{
                    apiKey = "consequuntur";
                    apiSecret = "dolor";
                    apiTicket = "expedita";
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