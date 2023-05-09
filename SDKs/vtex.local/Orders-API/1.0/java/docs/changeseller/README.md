# changeSeller

### Available Operations

* [getWindowToChangeSeller](#getwindowtochangeseller) - Get window to change seller
* [updateWindowToChangeSeller](#updatewindowtochangeseller) - Update window to change seller

## getWindowToChangeSeller

Retrieves a marketplace’s window to change seller, that is, the period when it is possible to choose another seller to fulfill a given order after the original seller has canceled it.

The default period for this window is of 2 days, but it can be configured by the request Update window to change seller.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetWindowToChangeSellerRequest;
import org.openapis.openapi.models.operations.GetWindowToChangeSellerResponse;
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

            GetWindowToChangeSellerRequest req = new GetWindowToChangeSellerRequest("corrupti", "illum");            

            GetWindowToChangeSellerResponse res = sdk.changeSeller.getWindowToChangeSeller(req);

            if (res.getWindowToChangeSeller200TextPlainInteger != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateWindowToChangeSeller

Updates a marketplace’s window to change seller, that is, the period when it is possible to choose another seller to fulfill a given order after the original seller has canceled it.

It is possible to check the current window using the request Get window to change seller.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateWindowToChangeSellerRequest;
import org.openapis.openapi.models.operations.UpdateWindowToChangeSellerRequestBody;
import org.openapis.openapi.models.operations.UpdateWindowToChangeSellerResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vel", "error") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateWindowToChangeSellerRequest req = new UpdateWindowToChangeSellerRequest("deserunt", "suscipit",                 new UpdateWindowToChangeSellerRequestBody(437587L););            

            UpdateWindowToChangeSellerResponse res = sdk.changeSeller.updateWindowToChangeSeller(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
