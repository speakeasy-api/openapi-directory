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
                    betId = "tempore";
                }};
                queryParams = new CashinQueryParams() {{
                    cashInValue = 75.099998;
                    cashinBetDelayId = "mollitia";
                }};
                headers = new CashinHeaders() {{
                    apiKey = "officiis";
                    apiSecret = "repellendus";
                    apiTicket = "quae";
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