# tasksClassic

## Overview

To change the description use /examples/TagsDescriptions.json

### Available Operations

* [addFile](#addfile) - Adds files to a given task.
* [delete14](#delete14) - Removes a task.
* [getContacts1](#getcontacts1) - Returns contacts of a given task.
* [getCustomFields7](#getcustomfields7) - Returns custom fields of a given task.
* [getDates3](#getdates3) - Returns dates of a given task.
* [getInstructions2](#getinstructions2) - Returns instructions of a given task.
* [getProgress](#getprogress) - Returns progress of a given task.
* [getTaskFiles](#gettaskfiles) - Returns lists of files of a given task.
* [start1](#start1) - Starts a task.
* [updateClientTaskPONumber](#updateclienttaskponumber) - Updates Client Task PO Number of a given task.
* [updateContacts1](#updatecontacts1) - Updates contacts of a given task.
* [updateCustomFields5](#updatecustomfields5) - Updates custom fields of a given task.
* [updateDates2](#updatedates2) - Updates dates of a given task.
* [updateInstructions3](#updateinstructions3) - Updates instructions of a given task.
* [updateName](#updatename) - Updates name of a given task.

## addFile

Adds files to a given task.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AddFileRequest;
use \OpenAPI\OpenAPI\Models\Shared\FileDTO;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddFileRequest();
    $request->fileDTO = new FileDTO();
    $request->fileDTO->content = 'doloremque';
    $request->fileDTO->name = 'Glenda Goldner';
    $request->fileDTO->token = 'consectetur';
    $request->fileDTO->url = 'aliquid';
    $request->taskId = 'ipsa';

    $response = $sdk->tasksClassic->addFile($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## delete14

Removes a task.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\Delete14Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Delete14Request();
    $request->forceJobsRemoval = false;
    $request->removeExternalProjects = false;
    $request->removeFilesFromDisc = false;
    $request->taskId = 'laborum';

    $response = $sdk->tasksClassic->delete14($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getContacts1

Returns contacts of a given task.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetContacts1Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetContacts1Request();
    $request->taskId = 'sunt';

    $response = $sdk->tasksClassic->getContacts1($request);

    if ($response->contactsDTO !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCustomFields7

Returns custom fields of a given task.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCustomFields7Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCustomFields7Request();
    $request->taskId = 'nostrum';

    $response = $sdk->tasksClassic->getCustomFields7($request);

    if ($response->customFieldsDTO !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDates3

Returns dates of a given task.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDates3Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDates3Request();
    $request->taskId = 'fugiat';

    $response = $sdk->tasksClassic->getDates3($request);

    if ($response->projectDatesDTO !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getInstructions2

Returns instructions of a given task.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetInstructions2Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetInstructions2Request();
    $request->taskId = 'expedita';

    $response = $sdk->tasksClassic->getInstructions2($request);

    if ($response->instructionsDTO !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getProgress

Returns progress of a given task. Progress contains information about task's status (ie. opened or ready) and current phase (ie. translation). Workflow phase is defined as the first one which contains not ready jobs (ie. opened or started). When no such job exists then workflow phase is not included.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetProgressRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProgressRequest();
    $request->taskId = 'aliquid';

    $response = $sdk->tasksClassic->getProgress($request);

    if ($response->taskProgressDTO !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTaskFiles

Returns several lists of files for a given task: input files divided by type, output files, bundles, files per job, preview files.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTaskFilesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTaskFilesRequest();
    $request->taskId = 'officia';

    $response = $sdk->tasksClassic->getTaskFiles($request);

    if ($response->taskFilesDTO !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## start1

Starts a task.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\Start1Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Start1Request();
    $request->taskId = 'suscipit';

    $response = $sdk->tasksClassic->start1($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateClientTaskPONumber

Updates Client Task PO Number of a given task.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateClientTaskPONumberRequest;
use \OpenAPI\OpenAPI\Models\Shared\StringDTO;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateClientTaskPONumberRequest();
    $request->stringDTO = new StringDTO();
    $request->stringDTO->value = 'aliquid';
    $request->taskId = 'perferendis';

    $response = $sdk->tasksClassic->updateClientTaskPONumber($request);

    if ($response->stringDTO !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateContacts1

Updates contacts of a given task.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateContacts1Request;
use \OpenAPI\OpenAPI\Models\Shared\ContactsDTO;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateContacts1Request();
    $request->contactsDTO = new ContactsDTO();
    $request->contactsDTO->additionalIds = [
        374753,
        614528,
    ];
    $request->contactsDTO->primaryId = 661607;
    $request->contactsDTO->sendBackToId = 70042;
    $request->taskId = 'error';

    $response = $sdk->tasksClassic->updateContacts1($request);

    if ($response->contactsDTO !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateCustomFields5

Updates custom fields of a given task.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCustomFields5Request;
use \OpenAPI\OpenAPI\Models\Shared\CustomFieldDTO;
use \OpenAPI\OpenAPI\Models\Shared\CustomFieldDTOTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateCustomFields5Request();
    $request->requestBody = [
        new CustomFieldDTO(),
        new CustomFieldDTO(),
        new CustomFieldDTO(),
        new CustomFieldDTO(),
    ];
    $request->taskId = 'voluptates';

    $response = $sdk->tasksClassic->updateCustomFields5($request);

    if ($response->customFieldsDTO !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDates2

Updates dates of a given task.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDates2Request;
use \OpenAPI\OpenAPI\Models\Shared\ProjectDatesDTO;
use \OpenAPI\OpenAPI\Models\Shared\TimeDTO;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDates2Request();
    $request->projectDatesDTO = new ProjectDatesDTO();
    $request->projectDatesDTO->actualDeliveryDate = new TimeDTO();
    $request->projectDatesDTO->actualDeliveryDate->value = 653421;
    $request->projectDatesDTO->actualStartDate = new TimeDTO();
    $request->projectDatesDTO->actualStartDate->value = 671794;
    $request->projectDatesDTO->deadline = new TimeDTO();
    $request->projectDatesDTO->deadline->value = 726343;
    $request->projectDatesDTO->startDate = new TimeDTO();
    $request->projectDatesDTO->startDate->value = 324083;
    $request->taskId = 'deleniti';

    $response = $sdk->tasksClassic->updateDates2($request);

    if ($response->projectDatesDTO !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateInstructions3

Updates instructions of a given task.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateInstructions3Request;
use \OpenAPI\OpenAPI\Models\Shared\InstructionsDTO;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateInstructions3Request();
    $request->instructionsDTO = new InstructionsDTO();
    $request->instructionsDTO->forProvider = 'enim';
    $request->instructionsDTO->fromCustomer = 'vitae';
    $request->instructionsDTO->internal = 'repellendus';
    $request->instructionsDTO->notes = 'ex';
    $request->instructionsDTO->paymentNoteForCustomer = 'quo';
    $request->instructionsDTO->paymentNoteForVendor = 'ex';
    $request->taskId = 'ut';

    $response = $sdk->tasksClassic->updateInstructions3($request);

    if ($response->instructionsDTO !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateName

Updates name of a given task.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNameRequest;
use \OpenAPI\OpenAPI\Models\Shared\StringDTO;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNameRequest();
    $request->stringDTO = new StringDTO();
    $request->stringDTO->value = 'ad';
    $request->taskId = 'expedita';

    $response = $sdk->tasksClassic->updateName($request);

    if ($response->stringDTO !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
