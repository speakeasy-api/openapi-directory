# dkimConfiguration

### Available Operations

* [createDKIM](#createdkim) - Generate DKIM keys

## createDKIM

Create DKIM keys for sender that was setup in VTEX mail servers

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateDKIMRequest;
import org.openapis.openapi.models.operations.CreateDKIMResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quibusdam", "unde") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateDKIMRequest req = new CreateDKIMRequest("nulla");            

            CreateDKIMResponse res = sdk.dkimConfiguration.createDKIM(req);

            if (res.twoHundredOK != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
