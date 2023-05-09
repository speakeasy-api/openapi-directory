# feedV2Deprecated

### Available Operations

* [getfeedorderstatus](#getfeedorderstatus) - Get feed order status

## getfeedorderstatus

Get feed order status (deprecated)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetfeedorderstatusRequest;
import org.openapis.openapi.models.operations.GetfeedorderstatusResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nisi", "recusandae") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetfeedorderstatusRequest req = new GetfeedorderstatusRequest("temporibus", "ab", "quis");            

            GetfeedorderstatusResponse res = sdk.feedV2Deprecated.getfeedorderstatus(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
