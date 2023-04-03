# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### files

* `createFileAssociation` - Creates a new file association
* `createFolder` - Creates a new folder
* `deleteFile` - Deletes a specific file
* `deleteFileAssociation` - Deletes an existing file association
* `deleteFolder` - Deletes a folder
* `getAssociationsByObject` - Retrieves an association object using a unique object ID
* `getFile` - Retrieves a file by a unique file ID
* `getFileAssociations` - Retrieves a specific file associations
* `getFileContent` - Retrieves the content of a specific file
* `getFiles` - Retrieves files
* `getFolder` - Retrieves specific folder by using a unique folder ID
* `getFolders` - Retrieves folders
* `getInbox` - Retrieves inbox folder
* `updateFile` - Update a file
* `updateFolder` - Updates an existing folder
* `uploadFile` - Uploads a File
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
