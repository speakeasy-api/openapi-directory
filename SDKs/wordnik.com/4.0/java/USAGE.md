<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            builder.setSecurity(
                new Security() {{
                    apiKey = new SchemeApiKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            AuthenticateRequest req = new AuthenticateRequest() {{
                pathParams = new AuthenticatePathParams() {{
                    username = "aliquid";
                }};
                queryParams = new AuthenticateQueryParams() {{
                    password = "molestiae";
                }};
            }};

            AuthenticateResponse res = sdk.account.authenticate(req);

            if (res.body.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->