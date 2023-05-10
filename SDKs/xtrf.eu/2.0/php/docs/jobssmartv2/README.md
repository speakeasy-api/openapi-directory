# jobsSmartV2

## Overview

To change the description use /examples/TagsDescriptions.json

### Available Operations

* [addExternalFileLink](#addexternalfilelink)
* [addFileLinks](#addfilelinks) - Adds file link to the project as a link delivered in the job.
* [addFiles](#addfiles) - Adds files to the project as delivered in the job.
* [assignVendor1](#assignvendor1) - Assigns vendor to a job in a project.
* [changeDates](#changedates) - Updates dates of a given job.
* [changeStatus1](#changestatus1) - Changes job status if possible (400 Bad Request is returned otherwise).
* [getByExternalId](#getbyexternalid)
* [getDeliveredFiles](#getdeliveredfiles) - Returns list of files delivered in the job.
* [getFileById1](#getfilebyid1) - Returns details for a job.
* [getSharedReferenceFiles](#getsharedreferencefiles) - Returns list of files shared with the job as Reference Files.
* [getSharedWorkFiles](#getsharedworkfiles) - Returns list of files shared with the job as Work Files.
* [shareAsReferenceFiles](#shareasreferencefiles) - Shares selected files as Reference Files with a job in a project.
* [shareAsWorkFiles](#shareasworkfiles) - Shares selected files as Work Files with a job in a project.
* [stopSharing](#stopsharing) - Stops sharing selected files with a job in a project.
* [updateInstructions4](#updateinstructions4) - Updates instructions for a job.
* [uploadFile1](#uploadfile1) - Uploads file to the project as a file delivered in the job.

## addExternalFileLink

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AddExternalFileLinkRequest;
use \OpenAPI\OpenAPI\Models\Shared\ExternalFileDto;
use \OpenAPI\OpenAPI\Models\Shared\LanguageCombinationDto;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddExternalFileLinkRequest();
    $request->externalFileDto = new ExternalFileDto();
    $request->externalFileDto->category = 'doloribus';
    $request->externalFileDto->externalInfo = [
        'facilis' => 'cupiditate',
        'qui' => 'quae',
    ];
    $request->externalFileDto->filename = 'laudantium';
    $request->externalFileDto->languageCombinationIds = [
        new LanguageCombinationDto(),
        new LanguageCombinationDto(),
    ];
    $request->externalFileDto->languageIds = [
        977496,
        787542,
        876506,
    ];
    $request->jobId = 'omnis';

    $response = $sdk->jobsSmartV2->addExternalFileLink($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## addFileLinks

Adds file link to the project as a link delivered in the job. The following properties can be specified for each file link:<ul><li>url (required, 400 Bad Request is returned otherwise)</li><li>category (required, 400 Bad Request is returned otherwise)</li><li>languageIds – when the file category depends on a list of languages</li><li>languageCombinationIds – when the file category depends on a list of language combinations</li></ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AddFileLinksRequest;
use \OpenAPI\OpenAPI\Models\Shared\FileLinkCategorizationsDto;
use \OpenAPI\OpenAPI\Models\Shared\FileLinkCategorizationDto;
use \OpenAPI\OpenAPI\Models\Shared\LanguageCombinationDto;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddFileLinksRequest();
    $request->fileLinkCategorizationsDto = new FileLinkCategorizationsDto();
    $request->fileLinkCategorizationsDto->fileLinks = [
        new FileLinkCategorizationDto(),
        new FileLinkCategorizationDto(),
    ];
    $request->jobId = 'ipsum';

    $response = $sdk->jobsSmartV2->addFileLinks($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## addFiles

Adds files to the project as delivered in the job. The files have to be uploaded beforehand (see "POST /jobs/{jobId}/files/upload" operation). The following properties can be specified for each file:<ul><li>category (required, 400 Bad Request is returned otherwise)</li><li>languageIds – when the file category depends on a list of languages</li><li>languageCombinationIds – when the file category depends on a list of language combinations</li></ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AddFilesRequest;
use \OpenAPI\OpenAPI\Models\Shared\FileCategorizationsDto;
use \OpenAPI\OpenAPI\Models\Shared\FileCategorizationDto;
use \OpenAPI\OpenAPI\Models\Shared\LanguageCombinationDto;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddFilesRequest();
    $request->fileCategorizationsDto = new FileCategorizationsDto();
    $request->fileCategorizationsDto->files = [
        new FileCategorizationDto(),
        new FileCategorizationDto(),
        new FileCategorizationDto(),
        new FileCategorizationDto(),
    ];
    $request->jobId = 'voluptate';

    $response = $sdk->jobsSmartV2->addFiles($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## assignVendor1

Assigns vendor to a job in a project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AssignVendor1Request;
use \OpenAPI\OpenAPI\Models\Shared\VendorPriceProfileDTO;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssignVendor1Request();
    $request->vendorPriceProfileDTO = new VendorPriceProfileDTO();
    $request->vendorPriceProfileDTO->vendorPriceProfileId = 231701;
    $request->jobId = 'vero';

    $response = $sdk->jobsSmartV2->assignVendor1($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## changeDates

Updates dates of a given job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ChangeDatesRequest;
use \OpenAPI\OpenAPI\Models\Shared\JobDatesDto;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ChangeDatesRequest();
    $request->jobDatesDto = new JobDatesDto();
    $request->jobDatesDto->actualEndDate = 949319;
    $request->jobDatesDto->actualStartDate = 492268;
    $request->jobDatesDto->deadline = 941378;
    $request->jobDatesDto->startDate = 715561;
    $request->jobId = 'quod';

    $response = $sdk->jobsSmartV2->changeDates($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## changeStatus1

Changes job status if possible (400 Bad Request is returned otherwise). The status has to be specified using one of the following keys:<ul><li>OPEN – available when the job has one of the following statuses: ACCEPTED, CANCELED</li><li>ACCEPTED – available when the job has one of the following statuses: OPEN (Vendor and dates have to be set before calling the operation), STARTED</li><li>STARTED – available when the job has one of the following statuses: ACCEPTED, READY</li><li>READY – available when the job has one of the following statuses: STARTED</li><li>CANCELLED – available when the job has one of the following statuses: OPEN, ACCEPTED, STARTED, OFFERS_SENT</li><li>OFFERS_SENT – not available as a target status for this operation</li></ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ChangeStatus1Request;
use \OpenAPI\OpenAPI\Models\Shared\JobStatusDTO;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ChangeStatus1Request();
    $request->jobStatusDTO = new JobStatusDTO();
    $request->jobStatusDTO->externalId = 'odio';
    $request->jobStatusDTO->status = 'similique';
    $request->jobId = 'facilis';

    $response = $sdk->jobsSmartV2->changeStatus1($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getByExternalId

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetByExternalIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetByExternalIdRequest();
    $request->externalId = 'vero';
    $request->externalProjectId = 'ducimus';

    $response = $sdk->jobsSmartV2->getByExternalId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeliveredFiles

Returns list of files delivered in the job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeliveredFilesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeliveredFilesRequest();
    $request->jobId = 'dolore';

    $response = $sdk->jobsSmartV2->getDeliveredFiles($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFileById1

Returns details for a job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetFileById1Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFileById1Request();
    $request->jobId = 'quibusdam';

    $response = $sdk->jobsSmartV2->getFileById1($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSharedReferenceFiles

Returns list of files shared with the job as Reference Files.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSharedReferenceFilesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSharedReferenceFilesRequest();
    $request->jobId = 'illum';

    $response = $sdk->jobsSmartV2->getSharedReferenceFiles($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSharedWorkFiles

Returns list of files shared with the job as Work Files.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSharedWorkFilesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSharedWorkFilesRequest();
    $request->jobId = 'sequi';

    $response = $sdk->jobsSmartV2->getSharedWorkFiles($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## shareAsReferenceFiles

Shares selected files as Reference Files with a job in a project. The files and the job have to be part of the same project. The operation is finished successfully even if some of the selected files were already shared with the job. If a file was shared with the job as Work File, it will now be shared as Reference File (and not as Work File).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ShareAsReferenceFilesRequest;
use \OpenAPI\OpenAPI\Models\Shared\FilesDto;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ShareAsReferenceFilesRequest();
    $request->filesDto = new FilesDto();
    $request->filesDto->files = [
        'impedit',
        'aut',
        'voluptatibus',
    ];
    $request->jobId = 'exercitationem';

    $response = $sdk->jobsSmartV2->shareAsReferenceFiles($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## shareAsWorkFiles

Shares selected files as Work Files with a job in a project. The files and the job have to be part of the same project. The operation is finished successfully even if some of the selected files were already shared with the job. If a file was shared with the job as Reference File, it will now be shared as Work File (and not as Reference File).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ShareAsWorkFilesRequest;
use \OpenAPI\OpenAPI\Models\Shared\FilesDto;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ShareAsWorkFilesRequest();
    $request->filesDto = new FilesDto();
    $request->filesDto->files = [
        'fugit',
        'porro',
        'maiores',
        'doloribus',
    ];
    $request->jobId = 'iusto';

    $response = $sdk->jobsSmartV2->shareAsWorkFiles($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopSharing

Stops sharing selected files with a job in a project. The files and the job have to be part of the same project. The operation is finished successfully even if some of the selected files were not shared with the job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StopSharingRequest;
use \OpenAPI\OpenAPI\Models\Shared\FilesDto;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopSharingRequest();
    $request->filesDto = new FilesDto();
    $request->filesDto->files = [
        'ducimus',
        'alias',
        'officia',
        'tempora',
    ];
    $request->jobId = 'ipsam';

    $response = $sdk->jobsSmartV2->stopSharing($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateInstructions4

Updates instructions for a job. See also "PUT /projects/{projectId}/vendorInstructions" and "PUT /quotes/{quoteId}/vendorInstructions" for updating instructions for all jobs in a project or quote.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateInstructions4Request;
use \OpenAPI\OpenAPI\Models\Shared\StringDTO;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateInstructions4Request();
    $request->stringDTO = new StringDTO();
    $request->stringDTO->value = 'ea';
    $request->jobId = 'aspernatur';

    $response = $sdk->jobsSmartV2->updateInstructions4($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## uploadFile1

Uploads file to the project as a file delivered in the job. Only one file can be uploaded at once. When the upload is finished the file has to be added by specifying its category and languages (see "PUT /jobs/{jobId}/files/add" operation).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UploadFile1Request;
use \OpenAPI\OpenAPI\Models\Shared\FileToUploadDto;
use \OpenAPI\OpenAPI\Models\Shared\FileToUploadDtoFile;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UploadFile1Request();
    $request->fileToUploadDto = new FileToUploadDto();
    $request->fileToUploadDto->file = new FileToUploadDtoFile();
    $request->fileToUploadDto->file->content = 'vel';
    $request->fileToUploadDto->file->file = 'possimus';
    $request->jobId = 'magnam';

    $response = $sdk->jobsSmartV2->uploadFile1($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
