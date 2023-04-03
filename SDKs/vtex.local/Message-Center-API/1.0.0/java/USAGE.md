<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateDKIMRequest;
import org.openapis.openapi.models.operations.CreateDKIMResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateDKIMRequest req = new CreateDKIMRequest() {{
                emailProvider = "corrupti";
            }}            

            CreateDKIMResponse res = sdk.dkimConfiguration.createDKIM(req);

            if (res.twoHundredOK.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->