<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddClientPreferencesRequest;
import org.openapis.openapi.models.operations.AddClientPreferencesRequestBody;
import org.openapis.openapi.models.operations.AddClientPreferencesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti", "provident") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            AddClientPreferencesRequest req = new AddClientPreferencesRequest("distinctio", "quibusdam",                 new AddClientPreferencesRequestBody() {{
                                locale = "unde";
                                optinNewsLetter = false;
                            }};, "nulla");            

            AddClientPreferencesResponse res = sdk.cartAttachments.addClientPreferences(req);

            if (res.addClientPreferences200ApplicationJSONAny != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->