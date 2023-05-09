<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BrowseCSVRequest;
import org.openapis.openapi.models.operations.BrowseCSVResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            BrowseCSVRequest req = new BrowseCSVRequest() {{
                additionalOrder = "corrupti";
                secondarySeparator = "provident";
                separator = "distinctio";
                viewId = 844266L;
            }};            

            BrowseCSVResponse res = sdk.browser.browseCSV(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->