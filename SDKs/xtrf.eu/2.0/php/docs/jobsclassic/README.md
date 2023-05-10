# jobsClassic

## Overview

To change the description use /examples/TagsDescriptions.json

### Available Operations

* [assignFileToJobOutput](#assignfiletojoboutput)
* [assignVendor](#assignvendor) - Assigns vendor to a job in a project.
* [changeStatus](#changestatus) - Changes job status if possible (400 Bad Request is returned otherwise).
* [getJobDetails](#getjobdetails) - Returns job details by jobId.
* [getJobFiles](#getjobfiles) - Returns list of input and output files of a job.
* [getJobFiles1](#getjobfiles1) - Returns file metadata.
* [updateDates](#updatedates) - Updates dates of a given job.
* [updateInstructions](#updateinstructions) - Updates instructions for a job.

## assignFileToJobOutput

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AssignFileToJobOutputRequest;
use \OpenAPI\OpenAPI\Models\Shared\TaskFileDTO;
use \OpenAPI\OpenAPI\Models\Shared\TaskFileDTOCategoryEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssignFileToJobOutputRequest();
    $request->taskFileDTO = new TaskFileDTO();
    $request->taskFileDTO->category = TaskFileDTOCategoryEnum::TM;
    $request->taskFileDTO->content = 'nam';
    $request->taskFileDTO->name = 'George Runolfsdottir';
    $request->taskFileDTO->token = 'et';
    $request->taskFileDTO->url = 'saepe';
    $request->jobId = 'ipsum';

    $response = $sdk->jobsClassic->assignFileToJobOutput($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## assignVendor

Assigns vendor to a job in a project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AssignVendorRequest;
use \OpenAPI\OpenAPI\Models\Shared\AssignVendorDTO;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssignVendorRequest();
    $request->assignVendorDTO = new AssignVendorDTO();
    $request->assignVendorDTO->recalculateRates = false;
    $request->assignVendorDTO->vendorPriceProfileId = 83422;
    $request->jobId = 'nobis';

    $response = $sdk->jobsClassic->assignVendor($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## changeStatus

Changes job status if possible (400 Bad Request is returned otherwise). The status has to be specified using one of the following keys:<ul><li>OPEN – available when the job has one of the following statuses: ACCEPTED, CANCELED</li><li>ACCEPTED – available when the job has one of the following statuses: OPEN (Vendor and dates have to be set before calling the operation), STARTED</li><li>STARTED – available when the job has one of the following statuses: ACCEPTED, READY</li><li>READY – available when the job has one of the following statuses: STARTED</li><li>CANCELLED – available when the job has one of the following statuses: OPEN, ACCEPTED, STARTED, OFFERS_SENT</li><li>OFFERS_SENT – not available as a target status for this operation</li></ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ChangeStatusRequest;
use \OpenAPI\OpenAPI\Models\Shared\JobStatusDTO;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ChangeStatusRequest();
    $request->jobStatusDTO = new JobStatusDTO();
    $request->jobStatusDTO->externalId = 'quos';
    $request->jobStatusDTO->status = 'tempore';
    $request->jobId = 'cupiditate';

    $response = $sdk->jobsClassic->changeStatus($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getJobDetails

Returns job details by jobId.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetJobDetailsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetJobDetailsRequest();
    $request->jobId = 'aperiam';

    $response = $sdk->jobsClassic->getJobDetails($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getJobFiles

Returns list of input and output files of a job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetJobFilesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetJobFilesRequest();
    $request->jobId = 'delectus';

    $response = $sdk->jobsClassic->getJobFiles($request);

    if ($response->jobFilesDTO !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getJobFiles1

Returns file metadata.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetJobFiles1Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetJobFiles1Request();
    $request->fileId = 209157;
    $request->jobId = 'dolore';

    $response = $sdk->jobsClassic->getJobFiles1($request);

    if ($response->fileMetadataDTO !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDates

Updates dates of a given job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDatesRequest;
use \OpenAPI\OpenAPI\Models\Shared\JobDatesDto;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDatesRequest();
    $request->jobDatesDto = new JobDatesDto();
    $request->jobDatesDto->actualEndDate = 286915;
    $request->jobDatesDto->actualStartDate = 240829;
    $request->jobDatesDto->deadline = 677263;
    $request->jobDatesDto->startDate = 100294;
    $request->jobId = 'quae';

    $response = $sdk->jobsClassic->updateDates($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateInstructions

Updates instructions for a job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateInstructionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\InstructionsDTO;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateInstructionsRequest();
    $request->instructionsDTO = new InstructionsDTO();
    $request->instructionsDTO->forProvider = 'aut';
    $request->instructionsDTO->fromCustomer = 'quas';
    $request->instructionsDTO->internal = 'itaque';
    $request->instructionsDTO->notes = 'consequatur';
    $request->instructionsDTO->paymentNoteForCustomer = 'est';
    $request->instructionsDTO->paymentNoteForVendor = 'repellendus';
    $request->jobId = 'porro';

    $response = $sdk->jobsClassic->updateInstructions($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
