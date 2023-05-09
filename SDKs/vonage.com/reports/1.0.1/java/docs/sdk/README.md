# SDK

## Overview

The Vonage Business Cloud Reports API enables you to retrieve call logs for your account.

Your application must subscribe to the Reports API suite to use this API.


### Available Operations

* [getCallLogs](#getcalllogs) - Retrieve call logs for your account

## getCallLogs

Retrieve call logs for your account

### Example Usage

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

            GetCallLogsRequest req = new GetCallLogsRequest("magnam", 8917.73, 567.13, "delectus", "tempora") {{
                destinationUser = "suscipit";
                direction = GetCallLogsDirectionEnum.INBOUND;
                endGte = "minus";
                endLte = "placeat";
                from = "voluptatum";
                sourceUser = "iusto";
                to = "excepturi";
            }};            

            GetCallLogsResponse res = sdk.sdk.getCallLogs(req, new GetCallLogsSecurity("nisi") {{
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
