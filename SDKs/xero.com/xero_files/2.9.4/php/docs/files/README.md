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

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateFileAssociationRequest;
use \OpenAPI\OpenAPI\Models\Shared\Association;
use \OpenAPI\OpenAPI\Models\Shared\ObjectGroupEnum;
use \OpenAPI\OpenAPI\Models\Shared\ObjectTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateFileAssociationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateFileAssociationRequest();
    $request->association = new Association();
    $request->association->fileId = '39205929-396f-4ea7-996e-b10faaa2352c';
    $request->association->objectGroup = ObjectGroupEnum::CREDIT_NOTE;
    $request->association->objectId = '955907af-f1a3-4a2f-a946-7739251aa52c';
    $request->association->objectType = ObjectTypeEnum::AP_OVER_PAYMENT_PAYMENT;
    $request->fileId = '4ff1e5cc-9835-40d5-bb18-09fdb118db9c';
    $request->xeroTenantId = 'tenetur';

    $requestSecurity = new CreateFileAssociationSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->files->createFileAssociation($request, $requestSecurity);

    if ($response->association !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createFolder

By passing in the appropriate properties, you can create a new folder

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateFolderRequest;
use \OpenAPI\OpenAPI\Models\Shared\Folder;
use \OpenAPI\OpenAPI\Models\Operations\CreateFolderSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateFolderRequest();
    $request->folder = new Folder();
    $request->folder->email = 'foo@bar.com';
    $request->folder->fileCount = 5;
    $request->folder->id = '4ff1e5cc-9835-40d5-bb18-09fdb118db9c';
    $request->folder->isInbox = true;
    $request->folder->name = 'assets';
    $request->xeroTenantId = 'ipsam';

    $requestSecurity = new CreateFolderSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->files->createFolder($request, $requestSecurity);

    if ($response->folder !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteFile

Delete a specific file

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteFileRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteFileSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteFileRequest();
    $request->fileId = '4ff1e5cc-9835-40d5-bb18-09fdb118db9c';
    $request->xeroTenantId = 'id';

    $requestSecurity = new DeleteFileSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->files->deleteFile($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteFileAssociation

By passing in the appropriate options, you can create a new folder

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteFileAssociationRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteFileAssociationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteFileAssociationRequest();
    $request->fileId = '4ff1e5cc-9835-40d5-bb18-09fdb118db9c';
    $request->objectId = '4ff1e5cc-9835-40d5-bb18-09fdb118db9c';
    $request->xeroTenantId = 'possimus';

    $requestSecurity = new DeleteFileAssociationSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->files->deleteFileAssociation($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteFolder

By passing in the appropriate ID, you can delete a folder

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteFolderRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteFolderSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteFolderRequest();
    $request->folderId = '4ff1e5cc-9835-40d5-bb18-09fdb118db9c';
    $request->xeroTenantId = 'aut';

    $requestSecurity = new DeleteFolderSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->files->deleteFolder($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAssociationsByObject

By passing in the appropriate options,

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAssociationsByObjectRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAssociationsByObjectSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAssociationsByObjectRequest();
    $request->objectId = '4ff1e5cc-9835-40d5-bb18-09fdb118db9c';
    $request->xeroTenantId = 'quasi';

    $requestSecurity = new GetAssociationsByObjectSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->files->getAssociationsByObject($request, $requestSecurity);

    if ($response->associations !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFile

Retrieves a file by a unique file ID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetFileRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetFileSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFileRequest();
    $request->fileId = '4ff1e5cc-9835-40d5-bb18-09fdb118db9c';
    $request->xeroTenantId = 'error';

    $requestSecurity = new GetFileSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->files->getFile($request, $requestSecurity);

    if ($response->fileObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFileAssociations

By passing in the appropriate options, 


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetFileAssociationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetFileAssociationsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFileAssociationsRequest();
    $request->fileId = '4ff1e5cc-9835-40d5-bb18-09fdb118db9c';
    $request->xeroTenantId = 'temporibus';

    $requestSecurity = new GetFileAssociationsSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->files->getFileAssociations($request, $requestSecurity);

    if ($response->associations !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFileContent

By passing in the appropriate options, retrieve data for specific file

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetFileContentRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetFileContentSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFileContentRequest();
    $request->fileId = '4ff1e5cc-9835-40d5-bb18-09fdb118db9c';
    $request->xeroTenantId = 'laborum';

    $requestSecurity = new GetFileContentSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->files->getFileContent($request, $requestSecurity);

    if ($response->getFileContent200ApplicationOctetStreamBinaryString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFiles

Retrieves files

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetFilesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetFilesSortEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetFilesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFilesRequest();
    $request->page = 2;
    $request->pagesize = 50;
    $request->sort = GetFilesSortEnum::NAME;
    $request->xeroTenantId = 'reiciendis';

    $requestSecurity = new GetFilesSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->files->getFiles($request, $requestSecurity);

    if ($response->files !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFolder

By passing in the appropriate ID, you can search for specific folder

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetFolderRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetFolderSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFolderRequest();
    $request->folderId = '4ff1e5cc-9835-40d5-bb18-09fdb118db9c';
    $request->xeroTenantId = 'voluptatibus';

    $requestSecurity = new GetFolderSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->files->getFolder($request, $requestSecurity);

    if ($response->folder !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFolders

By passing in the appropriate options, you can search for available folders

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetFoldersRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetFoldersSortEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetFoldersSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFoldersRequest();
    $request->sort = GetFoldersSortEnum::CREATED_DATE_UTC;
    $request->xeroTenantId = 'nihil';

    $requestSecurity = new GetFoldersSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->files->getFolders($request, $requestSecurity);

    if ($response->folders !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getInbox

Search for the user inbox

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetInboxRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetInboxSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetInboxRequest();
    $request->xeroTenantId = 'praesentium';

    $requestSecurity = new GetInboxSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->files->getInbox($request, $requestSecurity);

    if ($response->folder !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateFile

Updates file properties of a single file

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFileRequest;
use \OpenAPI\OpenAPI\Models\Shared\FileObject;
use \OpenAPI\OpenAPI\Models\Shared\User;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFileSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateFileRequest();
    $request->fileId = '4ff1e5cc-9835-40d5-bb18-09fdb118db9c';
    $request->fileObject = new FileObject();
    $request->fileObject->createdDateUtc = '2020-12-03T19:04:58.6970000';
    $request->fileObject->folderId = '0f8ccf21-7267-4268-9167-a1e2c40c84c8';
    $request->fileObject->id = 'd290f1ee-6c54-4b01-90e6-d701748f0851';
    $request->fileObject->mimeType = 'image/jpeg';
    $request->fileObject->name = 'File2.jpg';
    $request->fileObject->size = 3615;
    $request->fileObject->updatedDateUtc = '2020-12-03T19:04:58.6970000';
    $request->fileObject->user = new User();
    $request->fileObject->user->firstName = 'John';
    $request->fileObject->user->fullName = 'Smith';
    $request->fileObject->user->id = '4ff1e5cc-9835-40d5-bb18-09fdb118db9c';
    $request->fileObject->user->lastName = 'Smith';
    $request->fileObject->user->name = 'john.smith@mail.com';
    $request->xeroTenantId = 'voluptatibus';

    $requestSecurity = new UpdateFileSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->files->updateFile($request, $requestSecurity);

    if ($response->fileObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateFolder

By passing in the appropriate ID and properties, you can update a folder

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFolderRequest;
use \OpenAPI\OpenAPI\Models\Shared\Folder;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFolderSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateFolderRequest();
    $request->folder = new Folder();
    $request->folder->email = 'foo@bar.com';
    $request->folder->fileCount = 5;
    $request->folder->id = '4ff1e5cc-9835-40d5-bb18-09fdb118db9c';
    $request->folder->isInbox = true;
    $request->folder->name = 'assets';
    $request->folderId = '4ff1e5cc-9835-40d5-bb18-09fdb118db9c';
    $request->xeroTenantId = 'ipsa';

    $requestSecurity = new UpdateFolderSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->files->updateFolder($request, $requestSecurity);

    if ($response->folder !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## uploadFile

Uploads a File

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UploadFileRequest;
use \OpenAPI\OpenAPI\Models\Operations\UploadFileRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UploadFileSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UploadFileRequest();
    $request->folderId = '4ff1e5cc-9835-40d5-bb18-09fdb118db9c';
    $request->requestBody = new UploadFileRequestBody();
    $request->requestBody->body = 'omnis';
    $request->requestBody->filename = 'voluptate';
    $request->requestBody->mimeType = 'cum';
    $request->requestBody->name = 'Sharon Kiehn';
    $request->xeroTenantId = 'dicta';

    $requestSecurity = new UploadFileSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->files->uploadFile($request, $requestSecurity);

    if ($response->fileObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
