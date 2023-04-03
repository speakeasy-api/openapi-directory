<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GetCallLogsSecurity;
import org.openapis.openapi.models.operations.GetCallLogsDirectionEnum;
import org.openapis.openapi.models.operations.GetCallLogsRequest;
import org.openapis.openapi.models.operations.GetCallLogsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCallLogsRequest req = new GetCallLogsRequest() {{
                accountId = "corrupti";
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
            }}            

            GetCallLogsResponse res = sdk.getCallLogs(req, new GetCallLogsSecurity() {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.callLogsHalResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->