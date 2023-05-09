# appKeys

### Available Operations

* [createnewappkey](#createnewappkey) - Create new appkey
* [getappkeysfromaccount](#getappkeysfromaccount) - Get appKeys from account
* [updateappkey](#updateappkey) - Update appkey

## createnewappkey

Creates a new pair of `appKey` and `appToken`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreatenewappkeyResponse;
import org.openapis.openapi.models.shared.CreatenewappkeyRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("unde", "nulla") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.CreatenewappkeyRequest req = new CreatenewappkeyRequest("corrupti");            

            CreatenewappkeyResponse res = sdk.appKeys.createnewappkey(req);

            if (res.createnewappkeyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getappkeysfromaccount

Gets all application keys from an account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetappkeysfromaccountRequest;
import org.openapis.openapi.models.operations.GetappkeysfromaccountResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("illum", "vel") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetappkeysfromaccountRequest req = new GetappkeysfromaccountRequest("application/json");            

            GetappkeysfromaccountResponse res = sdk.appKeys.getappkeysfromaccount(req);

            if (res.getappkeysfromaccounts != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateappkey

Activates or deactivates an `appKey` by its ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateappkeyRequest;
import org.openapis.openapi.models.operations.UpdateappkeyResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateappkeyRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error", "deserunt") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateappkeyRequest req = new UpdateappkeyRequest(                new UpdateappkeyRequest(false);, "suscipit");            

            UpdateappkeyResponse res = sdk.appKeys.updateappkey(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
