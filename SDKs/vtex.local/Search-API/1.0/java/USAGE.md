<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AutoCompleteRequest;
import org.openapis.openapi.models.operations.AutoCompleteResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            AutoCompleteRequest req = new AutoCompleteRequest() {{
                accept = "application/json";
                contentType = "application/json";
                productNameContains = "jeans";
            }}            

            AutoCompleteResponse res = sdk.autocomplete.autoComplete(req);

            if (res.theRootSchema.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->