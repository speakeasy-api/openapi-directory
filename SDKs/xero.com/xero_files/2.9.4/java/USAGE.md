<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

            CreateFileAssociationRequest req = new CreateFileAssociationRequest() {{
                security = new CreateFileAssociationSecurity() {{
                    oAuth2 = new SchemeOAuth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new CreateFileAssociationPathParams() {{
                    fileId = "sit";
                }};
                headers = new CreateFileAssociationHeaders() {{
                    xeroTenantId = "voluptas";
                }};
                request = new Association() {{
                    fileId = "culpa";
                    objectGroup = "Payment";
                    objectId = "consequuntur";
                    objectType = "Accpay";
                }};
            }};

            CreateFileAssociationResponse res = sdk.files.createFileAssociation(req);

            if (res.association.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->