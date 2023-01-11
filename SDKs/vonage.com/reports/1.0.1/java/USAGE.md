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

            GetCallLogsRequest req = new GetCallLogsRequest() {{
                security = new GetCallLogsSecurity() {{
                    bearerAuth = new SchemeBearerAuth() {{
                        authorization = "Bearer YOUR_BEARER_TOKEN_HERE";
                    }};
                }};
                pathParams = new GetCallLogsPathParams() {{
                    accountId = "sit";
                }};
                queryParams = new GetCallLogsQueryParams() {{
                    destinationUser = "voluptas";
                    direction = "Outbound";
                    endGte = "expedita";
                    endLte = "consequuntur";
                    from = "dolor";
                    page = 67.199997;
                    pageSize = 88.099998;
                    sourceUser = "nihil";
                    startGte = "rerum";
                    startLte = "dicta";
                    to = "debitis";
                }};
            }};

            GetCallLogsResponse res = sdk.getCallLogs(req);

            if (res.callLogsHalResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->