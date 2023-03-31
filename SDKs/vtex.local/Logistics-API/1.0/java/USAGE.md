<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.ActivateDockPathParams;
import org.openapis.openapi.models.operations.ActivateDockHeaders;
import org.openapis.openapi.models.operations.ActivateDockRequest;
import org.openapis.openapi.models.operations.ActivateDockResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    appKey = new SchemeAppKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                    appToken = new SchemeAppToken() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            ActivateDockRequest req = new ActivateDockRequest() {{
                pathParams = new ActivateDockPathParams() {{
                    dockId = "corrupti";
                }};
                headers = new ActivateDockHeaders() {{
                    accept = "provident";
                    contentType = "distinctio";
                }};
            }};            

            ActivateDockResponse res = sdk.docks.activateDock(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->