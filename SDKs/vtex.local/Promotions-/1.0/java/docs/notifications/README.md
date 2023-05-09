# notifications

### Available Operations

* [usagenotification](#usagenotification) - Usage notification

## usagenotification

Usage notification

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UsagenotificationRequest;
import org.openapis.openapi.models.operations.UsagenotificationResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UsagenotificationRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("alias", "corporis") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            UsagenotificationRequest req = new UsagenotificationRequest("perspiciatis", "nihil",                 new UsagenotificationRequest("mollitia",                 new String[]{{
                                                add("alias"),
                                                add("maiores"),
                                            }}, "reiciendis", 174658, "id", "minima", false););            

            UsagenotificationResponse res = sdk.notifications.usagenotification(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
