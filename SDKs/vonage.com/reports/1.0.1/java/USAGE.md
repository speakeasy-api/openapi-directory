<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCallLogsDirectionEnum;
import org.openapis.openapi.models.operations.GetCallLogsRequest;
import org.openapis.openapi.models.operations.GetCallLogsResponse;
import org.openapis.openapi.models.operations.GetCallLogsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCallLogsRequest req = new GetCallLogsRequest("corrupti", 5928.45, 7151.9, "quibusdam", "unde") {{
                destinationUser = "nulla";
                direction = GetCallLogsDirectionEnum.OUTBOUND;
                endGte = "illum";
                endLte = "vel";
                from = "error";
                sourceUser = "deserunt";
                to = "suscipit";
            }};            

            GetCallLogsResponse res = sdk.getCallLogs(req, new GetCallLogsSecurity("iure") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.callLogsHalResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->