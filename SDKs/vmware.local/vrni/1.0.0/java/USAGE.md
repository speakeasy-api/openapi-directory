<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.AddApplicationSecurity;
import org.openapis.openapi.models.operations.AddApplicationRequest;
import org.openapis.openapi.models.operations.AddApplicationResponse;
import org.openapis.openapi.models.shared.ApplicationRequest;
import org.openapis.openapi.models.shared.SchemeAPIKeyAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AddApplicationRequest req = new AddApplicationRequest() {{
                security = new AddApplicationSecurity() {{
                    apiKeyAuth = new SchemeAPIKeyAuth() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                request = new ApplicationRequest() {{
                    name = "corrupti";
                }};
            }};            

            AddApplicationResponse res = sdk.applications.addApplication(req);

            if (res.application.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->