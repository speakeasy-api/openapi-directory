<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.CheckSecurity;
import org.openapis.openapi.models.operations.CheckRequest;
import org.openapis.openapi.models.operations.CheckResponse;
import org.openapis.openapi.models.shared.SchemeAccessPointAPIKeyHeader;
import org.openapis.openapi.models.shared.SchemeAccessPointAPIKeyQuery;
import org.openapis.openapi.models.shared.SchemeAccessPointOAuth;
import org.openapis.openapi.models.shared.SchemeSessionAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CheckRequest req = new CheckRequest() {{
                security = new CheckSecurity() {{
                    accessPointApiKeyHeader = new SchemeAccessPointAPIKeyHeader() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
            }};            

            CheckResponse res = sdk.check(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->