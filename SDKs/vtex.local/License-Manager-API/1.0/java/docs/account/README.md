# account

### Available Operations

* [getAccount](#getaccount) - Get information about account

## getAccount

Retrieves information from an account, such as company and sponsor user details, stores, and appTokens.

This endpoint only accepts requests from the host list designated for that store. If you want to try this request from this portal, be sure to add it to the list. Learn how to add hosts to the list in [How to manage accounts](https://help.vtex.com/en/tutorial/how-to-manage-accounts--tutorials_6285#).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAccountResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("distinctio", "quibusdam") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAccountResponse res = sdk.account.getAccount();

            if (res.accountResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
