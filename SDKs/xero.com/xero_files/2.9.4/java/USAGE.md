<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.CreateFileAssociationSecurity;
import org.openapis.openapi.models.operations.CreateFileAssociationPathParams;
import org.openapis.openapi.models.operations.CreateFileAssociationHeaders;
import org.openapis.openapi.models.operations.CreateFileAssociationRequest;
import org.openapis.openapi.models.operations.CreateFileAssociationResponse;
import org.openapis.openapi.models.shared.Association;
import org.openapis.openapi.models.shared.ObjectTypeEnum;
import org.openapis.openapi.models.shared.ObjectGroupEnum;
import org.openapis.openapi.models.shared.SchemeOAuth2;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateFileAssociationRequest req = new CreateFileAssociationRequest() {{
                security = new CreateFileAssociationSecurity() {{
                    oAuth2 = new SchemeOAuth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new CreateFileAssociationPathParams() {{
                    fileId = "4ff1e5cc-9835-40d5-bb18-09fdb118db9c";
                }};
                headers = new CreateFileAssociationHeaders() {{
                    xeroTenantId = "corrupti";
                }};
                request = new Association() {{
                    fileId = "9bd9d8d6-9a67-44e0-b467-cc8796ed151a";
                    objectGroup = "Account";
                    objectId = "5dfc2ddf-7cc7-48ca-9ba9-28fc816742cb";
                    objectType = "ManJournal";
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