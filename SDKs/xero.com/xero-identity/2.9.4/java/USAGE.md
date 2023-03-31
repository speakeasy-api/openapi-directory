<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.DeleteConnectionSecurity;
import org.openapis.openapi.models.operations.DeleteConnectionPathParams;
import org.openapis.openapi.models.operations.DeleteConnectionRequest;
import org.openapis.openapi.models.operations.DeleteConnectionResponse;
import org.openapis.openapi.models.shared.SchemeOAuth2;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteConnectionRequest req = new DeleteConnectionRequest() {{
                security = new DeleteConnectionSecurity() {{
                    oAuth2 = new SchemeOAuth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new DeleteConnectionPathParams() {{
                    id = "89bd9d8d-69a6-474e-8f46-7cc8796ed151";
                }};
            }};            

            DeleteConnectionResponse res = sdk.identity.deleteConnection(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->