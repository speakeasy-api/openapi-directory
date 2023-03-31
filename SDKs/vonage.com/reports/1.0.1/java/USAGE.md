<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GetCallLogsSecurity;
import org.openapis.openapi.models.operations.GetCallLogsPathParams;
import org.openapis.openapi.models.operations.GetCallLogsDirectionEnum;
import org.openapis.openapi.models.operations.GetCallLogsQueryParams;
import org.openapis.openapi.models.operations.GetCallLogsRequest;
import org.openapis.openapi.models.operations.GetCallLogsResponse;
import org.openapis.openapi.models.shared.SchemeBearerAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCallLogsRequest req = new GetCallLogsRequest() {{
                security = new GetCallLogsSecurity() {{
                    bearerAuth = new SchemeBearerAuth() {{
                        authorization = "Bearer YOUR_BEARER_TOKEN_HERE";
                    }};
                }};
                pathParams = new GetCallLogsPathParams() {{
                    accountId = "corrupti";
                }};
                queryParams = new GetCallLogsQueryParams() {{
                    destinationUser = "provident";
                    direction = "Outbound";
                    endGte = "quibusdam";
                    endLte = "unde";
                    from = "nulla";
                    page = 5448.83;
                    pageSize = 8472.52;
                    sourceUser = "vel";
                    startGte = "error";
                    startLte = "deserunt";
                    to = "suscipit";
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