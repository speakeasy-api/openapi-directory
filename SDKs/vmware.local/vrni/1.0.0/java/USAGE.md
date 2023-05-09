<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddApplicationResponse;
import org.openapis.openapi.models.operations.AddApplicationSecurity;
import org.openapis.openapi.models.shared.ApplicationRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.ApplicationRequest req = new ApplicationRequest() {{
                name = "Terrence Rau";
            }};            

            AddApplicationResponse res = sdk.applications.addApplication(req, new AddApplicationSecurity("nulla") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.application != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->