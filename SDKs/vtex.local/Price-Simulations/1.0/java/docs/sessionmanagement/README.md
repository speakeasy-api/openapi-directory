# sessionManagement

### Available Operations

* [postSessions](#postsessions) - Update Order Configuration

## postSessions

Updates the Order Configuration. You should use this route every time you edit a configuration value

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostSessionsRequest;
import org.openapis.openapi.models.operations.PostSessionsRequestBody;
import org.openapis.openapi.models.operations.PostSessionsRequestBodyPublic;
import org.openapis.openapi.models.operations.PostSessionsRequestBodyPublicCustomSessionKeys;
import org.openapis.openapi.models.operations.PostSessionsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostSessionsRequest req = new PostSessionsRequest("nam", "officia") {{
                requestBody = new PostSessionsRequestBody(                new PostSessionsRequestBodyPublic(                new PostSessionsRequestBodyPublicCustomSessionKeys("occaecati");););;
            }};            

            PostSessionsResponse res = sdk.sessionManagement.postSessions(req);

            if (res.postSessions200ApplicationJSONAny != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
