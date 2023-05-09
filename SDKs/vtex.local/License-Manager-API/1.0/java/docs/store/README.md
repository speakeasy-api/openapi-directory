# store

### Available Operations

* [getByAccount](#getbyaccount) - Get Stores

## getByAccount

Gets the stores and respective hosts of the account

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetByAccountResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsam", "repellendus") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetByAccountResponse res = sdk.store.getByAccount();

            if (res.storeItems != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
