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
import org.openapis.openapi.models.operations.CreateFileAssociationRequest;
import org.openapis.openapi.models.operations.CreateFileAssociationResponse;
import org.openapis.openapi.models.operations.CreateFileAssociationSecurity;
import org.openapis.openapi.models.shared.Association;
import org.openapis.openapi.models.shared.ObjectGroupEnum;
import org.openapis.openapi.models.shared.ObjectTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateFileAssociationRequest req = new CreateFileAssociationRequest("4ff1e5cc-9835-40d5-bb18-09fdb118db9c", "corrupti") {{
                association = new Association() {{
                    fileId = "9bd9d8d6-9a67-44e0-b467-cc8796ed151a";
                    objectGroup = ObjectGroupEnum.ACCOUNT;
                    objectId = "5dfc2ddf-7cc7-48ca-9ba9-28fc816742cb";
                    objectType = ObjectTypeEnum.MAN_JOURNAL;
                }};;
            }};            

            CreateFileAssociationResponse res = sdk.files.createFileAssociation(req, new CreateFileAssociationSecurity("ipsum") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.association != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [files](docs/files/README.md)

* [createFileAssociation](docs/files/README.md#createfileassociation) - Creates a new file association
* [createFolder](docs/files/README.md#createfolder) - Creates a new folder
* [deleteFile](docs/files/README.md#deletefile) - Deletes a specific file
* [deleteFileAssociation](docs/files/README.md#deletefileassociation) - Deletes an existing file association
* [deleteFolder](docs/files/README.md#deletefolder) - Deletes a folder
* [getAssociationsByObject](docs/files/README.md#getassociationsbyobject) - Retrieves an association object using a unique object ID
* [getFile](docs/files/README.md#getfile) - Retrieves a file by a unique file ID
* [getFileAssociations](docs/files/README.md#getfileassociations) - Retrieves a specific file associations
* [getFileContent](docs/files/README.md#getfilecontent) - Retrieves the content of a specific file
* [getFiles](docs/files/README.md#getfiles) - Retrieves files
* [getFolder](docs/files/README.md#getfolder) - Retrieves specific folder by using a unique folder ID
* [getFolders](docs/files/README.md#getfolders) - Retrieves folders
* [getInbox](docs/files/README.md#getinbox) - Retrieves inbox folder
* [updateFile](docs/files/README.md#updatefile) - Update a file
* [updateFolder](docs/files/README.md#updatefolder) - Updates an existing folder
* [uploadFile](docs/files/README.md#uploadfile) - Uploads a File
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
