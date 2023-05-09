# files

## Overview

Operations available to regular developers

### Available Operations

* [createFileAssociation](#createfileassociation) - Creates a new file association
* [createFolder](#createfolder) - Creates a new folder
* [deleteFile](#deletefile) - Deletes a specific file
* [deleteFileAssociation](#deletefileassociation) - Deletes an existing file association
* [deleteFolder](#deletefolder) - Deletes a folder
* [getAssociationsByObject](#getassociationsbyobject) - Retrieves an association object using a unique object ID
* [getFile](#getfile) - Retrieves a file by a unique file ID
* [getFileAssociations](#getfileassociations) - Retrieves a specific file associations
* [getFileContent](#getfilecontent) - Retrieves the content of a specific file
* [getFiles](#getfiles) - Retrieves files
* [getFolder](#getfolder) - Retrieves specific folder by using a unique folder ID
* [getFolders](#getfolders) - Retrieves folders
* [getInbox](#getinbox) - Retrieves inbox folder
* [updateFile](#updatefile) - Update a file
* [updateFolder](#updatefolder) - Updates an existing folder
* [uploadFile](#uploadfile) - Uploads a File

## createFileAssociation

By passing in the appropriate options, you can create a new folder

### Example Usage

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

            CreateFileAssociationRequest req = new CreateFileAssociationRequest("4ff1e5cc-9835-40d5-bb18-09fdb118db9c", "excepturi") {{
                association = new Association() {{
                    fileId = "20592939-6fea-4759-aeb1-0faaa2352c59";
                    objectGroup = ObjectGroupEnum.INVOICE;
                    objectId = "5907aff1-a3a2-4fa9-8677-39251aa52c3f";
                    objectType = ObjectTypeEnum.AR_PREPAYMENT_PAYMENT;
                }};;
            }};            

            CreateFileAssociationResponse res = sdk.files.createFileAssociation(req, new CreateFileAssociationSecurity("id") {{
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

## createFolder

By passing in the appropriate properties, you can create a new folder

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateFolderRequest;
import org.openapis.openapi.models.operations.CreateFolderResponse;
import org.openapis.openapi.models.operations.CreateFolderSecurity;
import org.openapis.openapi.models.shared.Folder;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateFolderRequest req = new CreateFolderRequest("possimus") {{
                folder = new Folder() {{
                    email = "foo@bar.com";
                    fileCount = 5L;
                    id = "4ff1e5cc-9835-40d5-bb18-09fdb118db9c";
                    isInbox = true;
                    name = "assets";
                }};;
            }};            

            CreateFolderResponse res = sdk.files.createFolder(req, new CreateFolderSecurity("aut") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.folder != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteFile

Delete a specific file

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteFileRequest;
import org.openapis.openapi.models.operations.DeleteFileResponse;
import org.openapis.openapi.models.operations.DeleteFileSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteFileRequest req = new DeleteFileRequest("4ff1e5cc-9835-40d5-bb18-09fdb118db9c", "quasi");            

            DeleteFileResponse res = sdk.files.deleteFile(req, new DeleteFileSecurity("error") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteFileAssociation

By passing in the appropriate options, you can create a new folder

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteFileAssociationRequest;
import org.openapis.openapi.models.operations.DeleteFileAssociationResponse;
import org.openapis.openapi.models.operations.DeleteFileAssociationSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteFileAssociationRequest req = new DeleteFileAssociationRequest("4ff1e5cc-9835-40d5-bb18-09fdb118db9c", "4ff1e5cc-9835-40d5-bb18-09fdb118db9c", "temporibus");            

            DeleteFileAssociationResponse res = sdk.files.deleteFileAssociation(req, new DeleteFileAssociationSecurity("laborum") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteFolder

By passing in the appropriate ID, you can delete a folder

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteFolderRequest;
import org.openapis.openapi.models.operations.DeleteFolderResponse;
import org.openapis.openapi.models.operations.DeleteFolderSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteFolderRequest req = new DeleteFolderRequest("4ff1e5cc-9835-40d5-bb18-09fdb118db9c", "quasi");            

            DeleteFolderResponse res = sdk.files.deleteFolder(req, new DeleteFolderSecurity("reiciendis") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAssociationsByObject

By passing in the appropriate options,

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAssociationsByObjectRequest;
import org.openapis.openapi.models.operations.GetAssociationsByObjectResponse;
import org.openapis.openapi.models.operations.GetAssociationsByObjectSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAssociationsByObjectRequest req = new GetAssociationsByObjectRequest("4ff1e5cc-9835-40d5-bb18-09fdb118db9c", "voluptatibus");            

            GetAssociationsByObjectResponse res = sdk.files.getAssociationsByObject(req, new GetAssociationsByObjectSecurity("vero") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.associations != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getFile

Retrieves a file by a unique file ID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFileRequest;
import org.openapis.openapi.models.operations.GetFileResponse;
import org.openapis.openapi.models.operations.GetFileSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetFileRequest req = new GetFileRequest("4ff1e5cc-9835-40d5-bb18-09fdb118db9c", "nihil");            

            GetFileResponse res = sdk.files.getFile(req, new GetFileSecurity("praesentium") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.fileObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getFileAssociations

By passing in the appropriate options, 


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFileAssociationsRequest;
import org.openapis.openapi.models.operations.GetFileAssociationsResponse;
import org.openapis.openapi.models.operations.GetFileAssociationsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetFileAssociationsRequest req = new GetFileAssociationsRequest("4ff1e5cc-9835-40d5-bb18-09fdb118db9c", "voluptatibus");            

            GetFileAssociationsResponse res = sdk.files.getFileAssociations(req, new GetFileAssociationsSecurity("ipsa") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.associations != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getFileContent

By passing in the appropriate options, retrieve data for specific file

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFileContentRequest;
import org.openapis.openapi.models.operations.GetFileContentResponse;
import org.openapis.openapi.models.operations.GetFileContentSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetFileContentRequest req = new GetFileContentRequest("4ff1e5cc-9835-40d5-bb18-09fdb118db9c", "omnis");            

            GetFileContentResponse res = sdk.files.getFileContent(req, new GetFileContentSecurity("voluptate") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.getFileContent200ApplicationOctetStreamBinaryString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getFiles

Retrieves files

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFilesRequest;
import org.openapis.openapi.models.operations.GetFilesResponse;
import org.openapis.openapi.models.operations.GetFilesSecurity;
import org.openapis.openapi.models.operations.GetFilesSortEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetFilesRequest req = new GetFilesRequest("cum") {{
                page = 2L;
                pagesize = 50L;
                sort = GetFilesSortEnum.NAME;
            }};            

            GetFilesResponse res = sdk.files.getFiles(req, new GetFilesSecurity("doloremque") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.files != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getFolder

By passing in the appropriate ID, you can search for specific folder

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFolderRequest;
import org.openapis.openapi.models.operations.GetFolderResponse;
import org.openapis.openapi.models.operations.GetFolderSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetFolderRequest req = new GetFolderRequest("4ff1e5cc-9835-40d5-bb18-09fdb118db9c", "reprehenderit");            

            GetFolderResponse res = sdk.files.getFolder(req, new GetFolderSecurity("ut") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.folder != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getFolders

By passing in the appropriate options, you can search for available folders

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFoldersRequest;
import org.openapis.openapi.models.operations.GetFoldersResponse;
import org.openapis.openapi.models.operations.GetFoldersSecurity;
import org.openapis.openapi.models.operations.GetFoldersSortEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetFoldersRequest req = new GetFoldersRequest("maiores") {{
                sort = GetFoldersSortEnum.NAME;
            }};            

            GetFoldersResponse res = sdk.files.getFolders(req, new GetFoldersSecurity("corporis") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.folders != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getInbox

Search for the user inbox

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetInboxRequest;
import org.openapis.openapi.models.operations.GetInboxResponse;
import org.openapis.openapi.models.operations.GetInboxSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetInboxRequest req = new GetInboxRequest("dolore");            

            GetInboxResponse res = sdk.files.getInbox(req, new GetInboxSecurity("iusto") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.folder != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateFile

Updates file properties of a single file

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateFileRequest;
import org.openapis.openapi.models.operations.UpdateFileResponse;
import org.openapis.openapi.models.operations.UpdateFileSecurity;
import org.openapis.openapi.models.shared.FileObject;
import org.openapis.openapi.models.shared.User;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateFileRequest req = new UpdateFileRequest("4ff1e5cc-9835-40d5-bb18-09fdb118db9c", "dicta") {{
                fileObject = new FileObject() {{
                    createdDateUtc = "2020-12-03T19:04:58.6970000";
                    folderId = "0f8ccf21-7267-4268-9167-a1e2c40c84c8";
                    id = "d290f1ee-6c54-4b01-90e6-d701748f0851";
                    mimeType = "image/jpeg";
                    name = "File2.jpg";
                    size = 3615L;
                    updatedDateUtc = "2020-12-03T19:04:58.6970000";
                    user = new User("4ff1e5cc-9835-40d5-bb18-09fdb118db9c") {{
                        firstName = "John";
                        fullName = "Smith";
                        lastName = "Smith";
                        name = "john.smith@mail.com";
                    }};;
                }};;
            }};            

            UpdateFileResponse res = sdk.files.updateFile(req, new UpdateFileSecurity("harum") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.fileObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateFolder

By passing in the appropriate ID and properties, you can update a folder

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateFolderRequest;
import org.openapis.openapi.models.operations.UpdateFolderResponse;
import org.openapis.openapi.models.operations.UpdateFolderSecurity;
import org.openapis.openapi.models.shared.Folder;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateFolderRequest req = new UpdateFolderRequest(                new Folder() {{
                                email = "foo@bar.com";
                                fileCount = 5L;
                                id = "4ff1e5cc-9835-40d5-bb18-09fdb118db9c";
                                isInbox = true;
                                name = "assets";
                            }};, "4ff1e5cc-9835-40d5-bb18-09fdb118db9c", "enim");            

            UpdateFolderResponse res = sdk.files.updateFolder(req, new UpdateFolderSecurity("accusamus") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.folder != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## uploadFile

Uploads a File

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UploadFileRequest;
import org.openapis.openapi.models.operations.UploadFileRequestBody;
import org.openapis.openapi.models.operations.UploadFileResponse;
import org.openapis.openapi.models.operations.UploadFileSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UploadFileRequest req = new UploadFileRequest("commodi") {{
                folderId = "4ff1e5cc-9835-40d5-bb18-09fdb118db9c";
                requestBody = new UploadFileRequestBody() {{
                    body = "repudiandae";
                    filename = "quae";
                    mimeType = "ipsum";
                    name = "Virgil Mante";
                }};;
            }};            

            UploadFileResponse res = sdk.files.uploadFile(req, new UploadFileSecurity("praesentium") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.fileObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
