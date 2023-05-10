# projectsSmartV2

## Overview

To change the description use /examples/TagsDescriptions.json

### Available Operations

* [addExternalFileLinks](#addexternalfilelinks)
* [addFileLinks1](#addfilelinks1) - Adds file links to the project as added by PM.
* [addFiles1](#addfiles1) - Adds files to the project as added by PM.
* [addJobToProcess](#addjobtoprocess) - Returns process id.
* [archive](#archive) - Prepares a ZIP archive that contains the specified files.
* [changeStatus2](#changestatus2) - Changes project status if possible (400 Bad Request is returned otherwise).
* [createPayable2](#createpayable2) - Adds a payable to a project.
* [createReceivable2](#createreceivable2) - Adds a receivable to a project.
* [create6](#create6) - Creates a new Smart Project.
* [deletePayable2](#deletepayable2) - Deletes a payable.
* [deleteReceivable2](#deletereceivable2) - Deletes a receivable.
* [getByExternalId1](#getbyexternalid1) - Returns project details.
* [getById9](#getbyid9) - Returns project details.
* [getCATToolProjectInfo](#getcattoolprojectinfo) - Returns if cat tool project is created or queued.
* [getContacts2](#getcontacts2) - Returns Client Contacts information for a project.
* [getCustomFields8](#getcustomfields8) - Returns a list of custom field keys and values for a project.
* [getDeliverableFiles](#getdeliverablefiles) - Returns list of files in a project, that are ready to be delivered to client.
* [getFileById2](#getfilebyid2) - Returns details of a file.
* [getFileContentById](#getfilecontentbyid) - Downloads a file content.
* [getFiles](#getfiles) - Returns list of files in a project.
* [getFinance2](#getfinance2) - Returns finance information for a project.
* [getJobs](#getjobs) - Returns list of jobs in a project.
* [getProcessId](#getprocessid) - Returns process id.
* [updateClientDeadline](#updateclientdeadline) - Updates Client Deadline for a project.
* [updateClientNotes](#updateclientnotes) - Updates Client Notes for a project.
* [updateClientReferenceNumber](#updateclientreferencenumber) - Updates Client Reference Number for a project.
* [updateContacts2](#updatecontacts2) - Updates Client Contacts for a project.
* [updateCustomField2](#updatecustomfield2) - Updates a custom field with a specified key in a project
* [updateInternalNotes](#updateinternalnotes) - Updates Internal Notes for a project.
* [updateOrderedOn](#updateorderedon) - Updates Order Date for a project.
* [updatePayable2](#updatepayable2) - Updates a payable.
* [updateReceivable2](#updatereceivable2) - Updates a receivable.
* [updateSourceLanguage](#updatesourcelanguage) - Updates source language for a project.
* [updateSpecialization](#updatespecialization) - Updates specialization for a project.
* [updateTargetLanguages](#updatetargetlanguages) - Updates target languages for a project.
* [updateVendorInstructions](#updatevendorinstructions) - Updates instructions for all vendors performing the jobs in a project.
* [updateVolume](#updatevolume) - Updates volume for a project.
* [uploadFile2](#uploadfile2) - Uploads file to the project as a file uploaded by PM.

## addExternalFileLinks

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AddExternalFileLinksRequest;
use \OpenAPI\OpenAPI\Models\Shared\ExternalFileDto;
use \OpenAPI\OpenAPI\Models\Shared\LanguageCombinationDto;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddExternalFileLinksRequest();
    $request->externalFileDto = new ExternalFileDto();
    $request->externalFileDto->category = 'tenetur';
    $request->externalFileDto->externalInfo = [
        'at' => 'et',
    ];
    $request->externalFileDto->filename = 'voluptate';
    $request->externalFileDto->languageCombinationIds = [
        new LanguageCombinationDto(),
    ];
    $request->externalFileDto->languageIds = [
        86532,
        232744,
    ];
    $request->projectId = 'adipisci';

    $response = $sdk->projectsSmartV2->addExternalFileLinks($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## addFileLinks1

Adds file links to the project as added by PM. The following properties can be specified for each file link:<ul><li>url (required, 400 Bad Request is returned otherwise)</li><li>category (required, 400 Bad Request is returned otherwise)</li><li>languageIds – when the file category depends on a list of languages</li><li>languageCombinationIds – when the file category depends on a list of language combinations</li></ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AddFileLinks1Request;
use \OpenAPI\OpenAPI\Models\Shared\FileLinkCategorizationsDto;
use \OpenAPI\OpenAPI\Models\Shared\FileLinkCategorizationDto;
use \OpenAPI\OpenAPI\Models\Shared\LanguageCombinationDto;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddFileLinks1Request();
    $request->fileLinkCategorizationsDto = new FileLinkCategorizationsDto();
    $request->fileLinkCategorizationsDto->fileLinks = [
        new FileLinkCategorizationDto(),
        new FileLinkCategorizationDto(),
        new FileLinkCategorizationDto(),
    ];
    $request->projectId = 'temporibus';

    $response = $sdk->projectsSmartV2->addFileLinks1($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## addFiles1

Adds files to the project as added by PM. The files have to be uploaded beforehand (see "POST /v2/projects/{projectId}/files/upload" operation). The following properties can be specified for each file:<ul><li>category (required, 400 Bad Request is returned otherwise)</li><li>languageIds – when the file category depends on a list of languages</li><li>languageCombinationIds – when the file category depends on a list of language combinations</li></ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AddFiles1Request;
use \OpenAPI\OpenAPI\Models\Shared\FileCategorizationsDto;
use \OpenAPI\OpenAPI\Models\Shared\FileCategorizationDto;
use \OpenAPI\OpenAPI\Models\Shared\LanguageCombinationDto;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddFiles1Request();
    $request->fileCategorizationsDto = new FileCategorizationsDto();
    $request->fileCategorizationsDto->files = [
        new FileCategorizationDto(),
    ];
    $request->projectId = 'rem';

    $response = $sdk->projectsSmartV2->addFiles1($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## addJobToProcess

Returns process id.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AddJobToProcessRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddJobToProcessRequest();
    $request->projectId = 'aut';

    $response = $sdk->projectsSmartV2->addJobToProcess($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## archive

Prepares a ZIP archive that contains the specified files.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\FilesDto;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FilesDto();
    $request->files = [
        'eum',
        'mollitia',
        'ab',
    ];

    $response = $sdk->projectsSmartV2->archive($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## changeStatus2

Changes project status if possible (400 Bad Request is returned otherwise). The status has to be specified using one of the following keys: <ul><li>CANCELLED – available when the job has one of the following statuses: OPEN, STARTED</li></ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ChangeStatus2Request;
use \OpenAPI\OpenAPI\Models\Shared\ProjectStatusDTO;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ChangeStatus2Request();
    $request->projectStatusDTO = new ProjectStatusDTO();
    $request->projectStatusDTO->status = 'corrupti';
    $request->projectId = 'non';

    $response = $sdk->projectsSmartV2->changeStatus2($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createPayable2

Adds a payable to a project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreatePayable2Request;
use \OpenAPI\OpenAPI\Models\Shared\PayableCreateDTO;
use \OpenAPI\OpenAPI\Models\Shared\FileDTO;
use \OpenAPI\OpenAPI\Models\Shared\ChargeLanguageCombinationDTO;
use \OpenAPI\OpenAPI\Models\Shared\PayableCreateDTORateOriginEnum;
use \OpenAPI\OpenAPI\Models\Shared\PayableCreateDTOTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreatePayable2Request();
    $request->payableCreateDTO = new PayableCreateDTO();
    $request->payableCreateDTO->calculationUnitId = 32465;
    $request->payableCreateDTO->catLogFile = new FileDTO();
    $request->payableCreateDTO->catLogFile->content = 'dolor';
    $request->payableCreateDTO->catLogFile->name = 'Francis Russel';
    $request->payableCreateDTO->catLogFile->token = 'aut';
    $request->payableCreateDTO->catLogFile->url = 'dignissimos';
    $request->payableCreateDTO->currencyId = 115484;
    $request->payableCreateDTO->description = 'maiores';
    $request->payableCreateDTO->id = 618480;
    $request->payableCreateDTO->ignoreMinimumCharge = false;
    $request->payableCreateDTO->invoiceId = 'velit';
    $request->payableCreateDTO->jobId = [
        'voluptas' => 'asperiores',
        'aperiam' => 'ea',
        'quaerat' => 'consequuntur',
        'repellendus' => 'officia',
    ];
    $request->payableCreateDTO->jobTypeId = 807023;
    $request->payableCreateDTO->languageCombination = new ChargeLanguageCombinationDTO();
    $request->payableCreateDTO->languageCombination->sourceLanguageId = 490305;
    $request->payableCreateDTO->languageCombination->targetLanguageId = 640024;
    $request->payableCreateDTO->languageCombinationIdNumber = 'asperiores';
    $request->payableCreateDTO->minimumCharge = 3681.02;
    $request->payableCreateDTO->quantity = 653.04;
    $request->payableCreateDTO->rate = 3127.53;
    $request->payableCreateDTO->rateOrigin = PayableCreateDTORateOriginEnum::AUTOCALCULATED;
    $request->payableCreateDTO->total = 8018.36;
    $request->payableCreateDTO->type = PayableCreateDTOTypeEnum::SIMPLE;
    $request->projectId = 'ab';

    $response = $sdk->projectsSmartV2->createPayable2($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createReceivable2

Adds a receivable to a project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateReceivable2Request;
use \OpenAPI\OpenAPI\Models\Shared\ReceivableCreateDTO;
use \OpenAPI\OpenAPI\Models\Shared\FileDTO;
use \OpenAPI\OpenAPI\Models\Shared\ChargeLanguageCombinationDTO;
use \OpenAPI\OpenAPI\Models\Shared\ReceivableCreateDTORateOriginEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReceivableCreateDTOTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateReceivable2Request();
    $request->receivableCreateDTO = new ReceivableCreateDTO();
    $request->receivableCreateDTO->calculationUnitId = 241418;
    $request->receivableCreateDTO->catLogFile = new FileDTO();
    $request->receivableCreateDTO->catLogFile->content = 'fuga';
    $request->receivableCreateDTO->catLogFile->name = 'Ricardo Franecki';
    $request->receivableCreateDTO->catLogFile->token = 'recusandae';
    $request->receivableCreateDTO->catLogFile->url = 'totam';
    $request->receivableCreateDTO->currencyId = 853940;
    $request->receivableCreateDTO->description = 'vel';
    $request->receivableCreateDTO->id = 497678;
    $request->receivableCreateDTO->ignoreMinimumCharge = false;
    $request->receivableCreateDTO->invoiceId = 'quos';
    $request->receivableCreateDTO->jobTypeId = 427834;
    $request->receivableCreateDTO->languageCombination = new ChargeLanguageCombinationDTO();
    $request->receivableCreateDTO->languageCombination->sourceLanguageId = 287051;
    $request->receivableCreateDTO->languageCombination->targetLanguageId = 822560;
    $request->receivableCreateDTO->languageCombinationIdNumber = 'facilis';
    $request->receivableCreateDTO->minimumCharge = 7382.27;
    $request->receivableCreateDTO->quantity = 4148.57;
    $request->receivableCreateDTO->rate = 4471.44;
    $request->receivableCreateDTO->rateOrigin = ReceivableCreateDTORateOriginEnum::PRICE_LIST;
    $request->receivableCreateDTO->taskId = 968904;
    $request->receivableCreateDTO->total = 8286.57;
    $request->receivableCreateDTO->type = ReceivableCreateDTOTypeEnum::SIMPLE;
    $request->projectId = 'recusandae';

    $response = $sdk->projectsSmartV2->createReceivable2($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## create6

Creates a new Smart Project. If the specified service ID refers to Classic Project, 400 Bad Request is returned instead.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\ProjectCreateDTO;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProjectCreateDTO();
    $request->clientId = 397533;
    $request->externalId = 'aperiam';
    $request->name = 'Glenn Kirlin';
    $request->serviceId = 814967;

    $response = $sdk->projectsSmartV2->create6($request);

    if ($response->projectDTOv2 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deletePayable2

Deletes a payable.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeletePayable2Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeletePayable2Request();
    $request->payableId = 257233;
    $request->projectId = 'doloribus';

    $response = $sdk->projectsSmartV2->deletePayable2($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteReceivable2

Deletes a receivable.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteReceivable2Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteReceivable2Request();
    $request->projectId = 'suscipit';
    $request->receivableId = 968972;

    $response = $sdk->projectsSmartV2->deleteReceivable2($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getByExternalId1

Returns project details.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetByExternalId1Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetByExternalId1Request();
    $request->externalProjectId = 'quidem';

    $response = $sdk->projectsSmartV2->getByExternalId1($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getById9

Returns project details. If the specified project ID refers to Classic Project, 400 Bad Request is returned instead.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetById9Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetById9Request();
    $request->projectId = 'saepe';

    $response = $sdk->projectsSmartV2->getById9($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCATToolProjectInfo

Returns if cat tool project is created or queued.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCATToolProjectInfoRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCATToolProjectInfoRequest();
    $request->projectId = 'necessitatibus';

    $response = $sdk->projectsSmartV2->getCATToolProjectInfo($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getContacts2

Returns Client Contacts information for a project

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetContacts2Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetContacts2Request();
    $request->projectId = 'dolore';

    $response = $sdk->projectsSmartV2->getContacts2($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCustomFields8

Returns a list of custom field keys and values for a project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCustomFields8Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCustomFields8Request();
    $request->projectId = 'sunt';

    $response = $sdk->projectsSmartV2->getCustomFields8($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeliverableFiles

Returns list of files in a project, that are ready to be delivered to client. A file is considered deliverable to client when all of the following criteria are met:<ul><li>the file was added to a job in the last step in the process</li><li>the file is marked as verified (if it was added in a verification step and the file is verifiable, according to its category)</li><li>the job is finished (has Ready status)</li></ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeliverableFilesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeliverableFilesRequest();
    $request->projectId = 'asperiores';

    $response = $sdk->projectsSmartV2->getDeliverableFiles($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFileById2

Returns details of a file.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetFileById2Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFileById2Request();
    $request->fileId = 'adipisci';

    $response = $sdk->projectsSmartV2->getFileById2($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFileContentById

Downloads a file content.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetFileContentByIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFileContentByIdRequest();
    $request->fileId = 'non';
    $request->fileName = 'amet';

    $response = $sdk->projectsSmartV2->getFileContentById($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFiles

Returns list of files in a project. Only files added to the project (i.e. files that have assigned category and languages) are listed.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetFilesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFilesRequest();
    $request->projectId = 'beatae';

    $response = $sdk->projectsSmartV2->getFiles($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFinance2

Returns finance information for a project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetFinance2Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFinance2Request();
    $request->projectId = 'dignissimos';

    $response = $sdk->projectsSmartV2->getFinance2($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getJobs

Returns list of jobs in a project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetJobsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetJobsRequest();
    $request->projectId = 'a';

    $response = $sdk->projectsSmartV2->getJobs($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getProcessId

Returns process id.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetProcessIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProcessIdRequest();
    $request->projectId = 'debitis';

    $response = $sdk->projectsSmartV2->getProcessId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateClientDeadline

Updates Client Deadline for a project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateClientDeadlineRequest;
use \OpenAPI\OpenAPI\Models\Shared\TimeDTO;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateClientDeadlineRequest();
    $request->timeDTO = new TimeDTO();
    $request->timeDTO->value = 233420;
    $request->projectId = 'corporis';

    $response = $sdk->projectsSmartV2->updateClientDeadline($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateClientNotes

Updates Client Notes for a project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateClientNotesRequest;
use \OpenAPI\OpenAPI\Models\Shared\StringDTO;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateClientNotesRequest();
    $request->stringDTO = new StringDTO();
    $request->stringDTO->value = 'harum';
    $request->projectId = 'laboriosam';

    $response = $sdk->projectsSmartV2->updateClientNotes($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateClientReferenceNumber

Updates Client Reference Number for a project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateClientReferenceNumberRequest;
use \OpenAPI\OpenAPI\Models\Shared\StringDTO;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateClientReferenceNumberRequest();
    $request->stringDTO = new StringDTO();
    $request->stringDTO->value = 'ipsa';
    $request->projectId = 'voluptates';

    $response = $sdk->projectsSmartV2->updateClientReferenceNumber($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateContacts2

Updates Client Contacts for a project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateContacts2Request;
use \OpenAPI\OpenAPI\Models\Shared\SmartContactsDTO;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateContacts2Request();
    $request->smartContactsDTO = new SmartContactsDTO();
    $request->smartContactsDTO->additionalIds = [
        113816,
        881721,
        631126,
    ];
    $request->smartContactsDTO->primaryId = 272437;
    $request->projectId = 'aspernatur';

    $response = $sdk->projectsSmartV2->updateContacts2($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateCustomField2

Updates a custom field with a specified key in a project

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCustomField2Request;
use \OpenAPI\OpenAPI\Models\Shared\SmartCustomFieldDTO;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateCustomField2Request();
    $request->smartCustomFieldDTO = new SmartCustomFieldDTO();
    $request->smartCustomFieldDTO->value = [
        'voluptas' => 'voluptas',
        'minima' => 'nobis',
    ];
    $request->key = 'dolorum';
    $request->projectId = 'adipisci';

    $response = $sdk->projectsSmartV2->updateCustomField2($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateInternalNotes

Updates Internal Notes for a project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateInternalNotesRequest;
use \OpenAPI\OpenAPI\Models\Shared\StringDTO;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateInternalNotesRequest();
    $request->stringDTO = new StringDTO();
    $request->stringDTO->value = 'minus';
    $request->projectId = 'dolores';

    $response = $sdk->projectsSmartV2->updateInternalNotes($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateOrderedOn

Updates Order Date for a project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrderedOnRequest;
use \OpenAPI\OpenAPI\Models\Shared\TimeDTO;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateOrderedOnRequest();
    $request->timeDTO = new TimeDTO();
    $request->timeDTO->value = 503934;
    $request->projectId = 'in';

    $response = $sdk->projectsSmartV2->updateOrderedOn($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updatePayable2

Updates a payable.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePayable2Request;
use \OpenAPI\OpenAPI\Models\Shared\PayableDTO;
use \OpenAPI\OpenAPI\Models\Shared\ChargeLanguageCombinationDTO;
use \OpenAPI\OpenAPI\Models\Shared\PayableDTORateOriginEnum;
use \OpenAPI\OpenAPI\Models\Shared\PayableDTOTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdatePayable2Request();
    $request->payableDTO = new PayableDTO();
    $request->payableDTO->calculationUnitId = 296242;
    $request->payableDTO->currencyId = 304468;
    $request->payableDTO->description = 'officiis';
    $request->payableDTO->id = 839189;
    $request->payableDTO->ignoreMinimumCharge = false;
    $request->payableDTO->invoiceId = 'ullam';
    $request->payableDTO->jobId = [
        'cum' => 'blanditiis',
    ];
    $request->payableDTO->jobTypeId = 555361;
    $request->payableDTO->languageCombination = new ChargeLanguageCombinationDTO();
    $request->payableDTO->languageCombination->sourceLanguageId = 942584;
    $request->payableDTO->languageCombination->targetLanguageId = 201517;
    $request->payableDTO->languageCombinationIdNumber = 'culpa';
    $request->payableDTO->minimumCharge = 5485.19;
    $request->payableDTO->quantity = 8672.9;
    $request->payableDTO->rate = 5196.43;
    $request->payableDTO->rateOrigin = PayableDTORateOriginEnum::AUTOCALCULATED;
    $request->payableDTO->total = 3487.83;
    $request->payableDTO->type = PayableDTOTypeEnum::CAT;
    $request->payableId = 24619;
    $request->projectId = 'rerum';

    $response = $sdk->projectsSmartV2->updatePayable2($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateReceivable2

Updates a receivable.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateReceivable2Request;
use \OpenAPI\OpenAPI\Models\Shared\ReceivableDTO;
use \OpenAPI\OpenAPI\Models\Shared\ChargeLanguageCombinationDTO;
use \OpenAPI\OpenAPI\Models\Shared\ReceivableDTORateOriginEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReceivableDTOTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateReceivable2Request();
    $request->receivableDTO = new ReceivableDTO();
    $request->receivableDTO->calculationUnitId = 148829;
    $request->receivableDTO->currencyId = 967966;
    $request->receivableDTO->description = 'explicabo';
    $request->receivableDTO->id = 994401;
    $request->receivableDTO->ignoreMinimumCharge = false;
    $request->receivableDTO->invoiceId = 'facilis';
    $request->receivableDTO->jobTypeId = 451822;
    $request->receivableDTO->languageCombination = new ChargeLanguageCombinationDTO();
    $request->receivableDTO->languageCombination->sourceLanguageId = 709072;
    $request->receivableDTO->languageCombination->targetLanguageId = 70869;
    $request->receivableDTO->languageCombinationIdNumber = 'iste';
    $request->receivableDTO->minimumCharge = 2927.94;
    $request->receivableDTO->quantity = 6719.07;
    $request->receivableDTO->rate = 1523.54;
    $request->receivableDTO->rateOrigin = ReceivableDTORateOriginEnum::PRICE_LIST;
    $request->receivableDTO->taskId = 417486;
    $request->receivableDTO->total = 6960.77;
    $request->receivableDTO->type = ReceivableDTOTypeEnum::SIMPLE;
    $request->projectId = 'voluptas';
    $request->receivableId = 604118;

    $response = $sdk->projectsSmartV2->updateReceivable2($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateSourceLanguage

Updates source language for a project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSourceLanguageRequest;
use \OpenAPI\OpenAPI\Models\Shared\SourceLanguageDTO;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateSourceLanguageRequest();
    $request->sourceLanguageDTO = new SourceLanguageDTO();
    $request->sourceLanguageDTO->sourceLanguageId = 100032;
    $request->projectId = 'suscipit';

    $response = $sdk->projectsSmartV2->updateSourceLanguage($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateSpecialization

Updates specialization for a project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSpecializationRequest;
use \OpenAPI\OpenAPI\Models\Shared\SpecializationDTO;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateSpecializationRequest();
    $request->specializationDTO = new SpecializationDTO();
    $request->specializationDTO->specializationId = 960257;
    $request->projectId = 'debitis';

    $response = $sdk->projectsSmartV2->updateSpecialization($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateTargetLanguages

Updates target languages for a project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTargetLanguagesRequest;
use \OpenAPI\OpenAPI\Models\Shared\TargetLanguagesDTO;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateTargetLanguagesRequest();
    $request->targetLanguagesDTO = new TargetLanguagesDTO();
    $request->targetLanguagesDTO->targetLanguageIds = [
        967795,
    ];
    $request->projectId = 'perferendis';

    $response = $sdk->projectsSmartV2->updateTargetLanguages($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateVendorInstructions

Updates instructions for all vendors performing the jobs in a project. See also "PUT /jobs/{jobId}/instructions" for updating instructions for a specific job in a project or quote.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateVendorInstructionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\StringDTO;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateVendorInstructionsRequest();
    $request->stringDTO = new StringDTO();
    $request->stringDTO->value = 'corrupti';
    $request->projectId = 'maiores';

    $response = $sdk->projectsSmartV2->updateVendorInstructions($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateVolume

Updates volume for a project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateVolumeRequest;
use \OpenAPI\OpenAPI\Models\Shared\BigDecimalDTO;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateVolumeRequest();
    $request->bigDecimalDTO = new BigDecimalDTO();
    $request->bigDecimalDTO->value = 2748.23;
    $request->projectId = 'sed';

    $response = $sdk->projectsSmartV2->updateVolume($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## uploadFile2

Uploads file to the project as a file uploaded by PM. Only one file can be uploaded at once. When the upload is finished the file has to be added by specifying its category and languages (see "PUT /v2/projects/{projectId}/files/add" operation

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UploadFile2Request;
use \OpenAPI\OpenAPI\Models\Shared\FileToUploadDto;
use \OpenAPI\OpenAPI\Models\Shared\FileToUploadDtoFile;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UploadFile2Request();
    $request->fileToUploadDto = new FileToUploadDto();
    $request->fileToUploadDto->file = new FileToUploadDtoFile();
    $request->fileToUploadDto->file->content = 'provident';
    $request->fileToUploadDto->file->file = 'eius';
    $request->projectId = 'necessitatibus';

    $response = $sdk->projectsSmartV2->uploadFile2($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
