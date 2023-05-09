# user

### Available Operations

* [getUser](#getuser) - User info

## getUser

Returns authenticated user information

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUserResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minus") {{
                    bearer = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetUserResponse res = sdk.user.getUser();

            if (res.userResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
