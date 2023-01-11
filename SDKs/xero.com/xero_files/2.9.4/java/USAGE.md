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
                    fileId = "at";
                }};
                headers = new CreateFileAssociationHeaders() {{
                    xeroTenantId = "iusto";
                }};
                request = new Association() {{
                    fileId = "et";
                    objectGroup = "Overpayment";
                    objectId = "consectetur";
                    objectType = "ExpPayment";
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