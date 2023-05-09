# conversation

### Available Operations

* [getConversation](#getconversation) - Retrieve order conversation

## getConversation

List all order conversations of an order by its order ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetConversationRequest;
import org.openapis.openapi.models.operations.GetConversationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magnam", "debitis") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetConversationRequest req = new GetConversationRequest("ipsa", "delectus", "1172452900788-01") {{
                reason = "data-validation";
            }};            

            GetConversationResponse res = sdk.conversation.getConversation(req);

            if (res.getConversations != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
