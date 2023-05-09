# Files

## Overview

Operations available to regular developers

### Available Operations

* [CreateFileAssociation](#createfileassociation) - Creates a new file association
* [CreateFolder](#createfolder) - Creates a new folder
* [DeleteFile](#deletefile) - Deletes a specific file
* [DeleteFileAssociation](#deletefileassociation) - Deletes an existing file association
* [DeleteFolder](#deletefolder) - Deletes a folder
* [GetAssociationsByObject](#getassociationsbyobject) - Retrieves an association object using a unique object ID
* [GetFile](#getfile) - Retrieves a file by a unique file ID
* [GetFileAssociations](#getfileassociations) - Retrieves a specific file associations
* [GetFileContent](#getfilecontent) - Retrieves the content of a specific file
* [GetFiles](#getfiles) - Retrieves files
* [GetFolder](#getfolder) - Retrieves specific folder by using a unique folder ID
* [GetFolders](#getfolders) - Retrieves folders
* [GetInbox](#getinbox) - Retrieves inbox folder
* [UpdateFile](#updatefile) - Update a file
* [UpdateFolder](#updatefolder) - Updates an existing folder
* [UploadFile](#uploadfile) - Uploads a File

## CreateFileAssociation

By passing in the appropriate options, you can create a new folder

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Files.CreateFileAssociation(ctx, operations.CreateFileAssociationRequest{
        Association: &shared.Association{
            FileID: sdk.String("39205929-396f-4ea7-996e-b10faaa2352c"),
            ObjectGroup: shared.ObjectGroupEnumCreditNote.ToPointer(),
            ObjectID: sdk.String("955907af-f1a3-4a2f-a946-7739251aa52c"),
            ObjectType: shared.ObjectTypeEnumApOverPaymentPayment.ToPointer(),
        },
        FileID: "4ff1e5cc-9835-40d5-bb18-09fdb118db9c",
        XeroTenantID: "tenetur",
    }, operations.CreateFileAssociationSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Association != nil {
        // handle response
    }
}
```

## CreateFolder

By passing in the appropriate properties, you can create a new folder

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Files.CreateFolder(ctx, operations.CreateFolderRequest{
        Folder: &shared.Folder{
            Email: sdk.String("foo@bar.com"),
            FileCount: sdk.Int64(5),
            ID: sdk.String("4ff1e5cc-9835-40d5-bb18-09fdb118db9c"),
            IsInbox: sdk.Bool(true),
            Name: sdk.String("assets"),
        },
        XeroTenantID: "ipsam",
    }, operations.CreateFolderSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Folder != nil {
        // handle response
    }
}
```

## DeleteFile

Delete a specific file

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Files.DeleteFile(ctx, operations.DeleteFileRequest{
        FileID: "4ff1e5cc-9835-40d5-bb18-09fdb118db9c",
        XeroTenantID: "id",
    }, operations.DeleteFileSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteFileAssociation

By passing in the appropriate options, you can create a new folder

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Files.DeleteFileAssociation(ctx, operations.DeleteFileAssociationRequest{
        FileID: "4ff1e5cc-9835-40d5-bb18-09fdb118db9c",
        ObjectID: "4ff1e5cc-9835-40d5-bb18-09fdb118db9c",
        XeroTenantID: "possimus",
    }, operations.DeleteFileAssociationSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteFolder

By passing in the appropriate ID, you can delete a folder

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Files.DeleteFolder(ctx, operations.DeleteFolderRequest{
        FolderID: "4ff1e5cc-9835-40d5-bb18-09fdb118db9c",
        XeroTenantID: "aut",
    }, operations.DeleteFolderSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetAssociationsByObject

By passing in the appropriate options,

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Files.GetAssociationsByObject(ctx, operations.GetAssociationsByObjectRequest{
        ObjectID: "4ff1e5cc-9835-40d5-bb18-09fdb118db9c",
        XeroTenantID: "quasi",
    }, operations.GetAssociationsByObjectSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Associations != nil {
        // handle response
    }
}
```

## GetFile

Retrieves a file by a unique file ID

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Files.GetFile(ctx, operations.GetFileRequest{
        FileID: "4ff1e5cc-9835-40d5-bb18-09fdb118db9c",
        XeroTenantID: "error",
    }, operations.GetFileSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FileObject != nil {
        // handle response
    }
}
```

## GetFileAssociations

By passing in the appropriate options, 


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Files.GetFileAssociations(ctx, operations.GetFileAssociationsRequest{
        FileID: "4ff1e5cc-9835-40d5-bb18-09fdb118db9c",
        XeroTenantID: "temporibus",
    }, operations.GetFileAssociationsSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Associations != nil {
        // handle response
    }
}
```

## GetFileContent

By passing in the appropriate options, retrieve data for specific file

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Files.GetFileContent(ctx, operations.GetFileContentRequest{
        FileID: "4ff1e5cc-9835-40d5-bb18-09fdb118db9c",
        XeroTenantID: "laborum",
    }, operations.GetFileContentSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetFileContent200ApplicationOctetStreamBinaryString != nil {
        // handle response
    }
}
```

## GetFiles

Retrieves files

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Files.GetFiles(ctx, operations.GetFilesRequest{
        Page: sdk.Int64(2),
        Pagesize: sdk.Int64(50),
        Sort: operations.GetFilesSortEnumName.ToPointer(),
        XeroTenantID: "reiciendis",
    }, operations.GetFilesSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Files != nil {
        // handle response
    }
}
```

## GetFolder

By passing in the appropriate ID, you can search for specific folder

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Files.GetFolder(ctx, operations.GetFolderRequest{
        FolderID: "4ff1e5cc-9835-40d5-bb18-09fdb118db9c",
        XeroTenantID: "voluptatibus",
    }, operations.GetFolderSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Folder != nil {
        // handle response
    }
}
```

## GetFolders

By passing in the appropriate options, you can search for available folders

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Files.GetFolders(ctx, operations.GetFoldersRequest{
        Sort: operations.GetFoldersSortEnumCreatedDateUtc.ToPointer(),
        XeroTenantID: "nihil",
    }, operations.GetFoldersSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Folders != nil {
        // handle response
    }
}
```

## GetInbox

Search for the user inbox

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Files.GetInbox(ctx, operations.GetInboxRequest{
        XeroTenantID: "praesentium",
    }, operations.GetInboxSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Folder != nil {
        // handle response
    }
}
```

## UpdateFile

Updates file properties of a single file

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Files.UpdateFile(ctx, operations.UpdateFileRequest{
        FileID: "4ff1e5cc-9835-40d5-bb18-09fdb118db9c",
        FileObject: &shared.FileObject{
            CreatedDateUtc: sdk.String("2020-12-03T19:04:58.6970000"),
            FolderID: sdk.String("0f8ccf21-7267-4268-9167-a1e2c40c84c8"),
            ID: sdk.String("d290f1ee-6c54-4b01-90e6-d701748f0851"),
            MimeType: sdk.String("image/jpeg"),
            Name: sdk.String("File2.jpg"),
            Size: sdk.Int64(3615),
            UpdatedDateUtc: sdk.String("2020-12-03T19:04:58.6970000"),
            User: &shared.User{
                FirstName: sdk.String("John"),
                FullName: sdk.String("Smith"),
                ID: "4ff1e5cc-9835-40d5-bb18-09fdb118db9c",
                LastName: sdk.String("Smith"),
                Name: sdk.String("john.smith@mail.com"),
            },
        },
        XeroTenantID: "voluptatibus",
    }, operations.UpdateFileSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FileObject != nil {
        // handle response
    }
}
```

## UpdateFolder

By passing in the appropriate ID and properties, you can update a folder

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Files.UpdateFolder(ctx, operations.UpdateFolderRequest{
        Folder: shared.Folder{
            Email: sdk.String("foo@bar.com"),
            FileCount: sdk.Int64(5),
            ID: sdk.String("4ff1e5cc-9835-40d5-bb18-09fdb118db9c"),
            IsInbox: sdk.Bool(true),
            Name: sdk.String("assets"),
        },
        FolderID: "4ff1e5cc-9835-40d5-bb18-09fdb118db9c",
        XeroTenantID: "ipsa",
    }, operations.UpdateFolderSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Folder != nil {
        // handle response
    }
}
```

## UploadFile

Uploads a File

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Files.UploadFile(ctx, operations.UploadFileRequest{
        FolderID: sdk.String("4ff1e5cc-9835-40d5-bb18-09fdb118db9c"),
        RequestBody: &operations.UploadFileRequestBody{
            Body: sdk.String("omnis"),
            Filename: sdk.String("voluptate"),
            MimeType: sdk.String("cum"),
            Name: sdk.String("Sharon Kiehn"),
        },
        XeroTenantID: "dicta",
    }, operations.UploadFileSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FileObject != nil {
        // handle response
    }
}
```
