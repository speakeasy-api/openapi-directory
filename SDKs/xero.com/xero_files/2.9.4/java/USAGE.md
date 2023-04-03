<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.CreateFileAssociationSecurity;
import org.openapis.openapi.models.operations.CreateFileAssociationRequest;
import org.openapis.openapi.models.operations.CreateFileAssociationResponse;
import org.openapis.openapi.models.shared.Association;
import org.openapis.openapi.models.shared.ObjectTypeEnum;
import org.openapis.openapi.models.shared.ObjectGroupEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateFileAssociationRequest req = new CreateFileAssociationRequest() {{
                association = new Association() {{
                    fileId = "89bd9d8d-69a6-474e-8f46-7cc8796ed151";
                    objectGroup = "Overpayment";
                    objectId = "05dfc2dd-f7cc-478c-a1ba-928fc816742c";
                    objectType = "Current";
                }};
                fileId = "4ff1e5cc-9835-40d5-bb18-09fdb118db9c";
                xeroTenantId = "esse";
            }}            

            CreateFileAssociationResponse res = sdk.files.createFileAssociation(req, new CreateFileAssociationSecurity() {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.association.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->