# projectsClassic

## Overview

To change the description use /examples/TagsDescriptions.json

### Available Operations

* [createLanguageCombination](#createlanguagecombination) - Creates a new language combination for a given project without creating a task.
* [createPayable](#createpayable) - Adds a payable to a project.
* [createReceivable](#createreceivable) - Adds a receivable to a project.
* [createTask](#createtask) - Creates a new task for a given project.
* [create5](#create5) - Creates a new Classic Project.
* [deletePayable](#deletepayable) - Deletes a payable.
* [deleteReceivable](#deletereceivable) - Deletes a receivable.
* [delete12](#delete12) - Removes a project.
* [getAllIds6](#getallids6) - Returns projects' internal identifiers.
* [getById7](#getbyid7) - Returns project details.
* [getContacts](#getcontacts) - Returns contacts of a given project.
* [getCustomFields5](#getcustomfields5) - Returns custom fields of a given project.
* [getDates1](#getdates1) - Returns dates of a given project.
* [getFileById](#getfilebyid) - Downloads a file.
* [getFinance](#getfinance) - Returns finance of a given project.
* [getInstructions](#getinstructions) - Returns instructions of a given project.
* [updateContacts](#updatecontacts) - Updates contacts of a given project.
* [updateCustomFields3](#updatecustomfields3) - Updates custom fields of a given project.
* [updateDates1](#updatedates1) - Updates dates of a given project.
* [updateInstructions1](#updateinstructions1) - Updates instructions of a given project.
* [updatePayable](#updatepayable) - Updates a payable.
* [updateReceivable](#updatereceivable) - Updates a receivable.

## createLanguageCombination

Creates a new language combination for a given project without creating a task.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateLanguageCombinationRequest;
use \OpenAPI\OpenAPI\Models\Shared\CommonLanguageCombinationDTO;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateLanguageCombinationRequest();
    $request->commonLanguageCombinationDTO = new CommonLanguageCombinationDTO();
    $request->commonLanguageCombinationDTO->sourceLanguageId = 232234;
    $request->commonLanguageCombinationDTO->targetLanguageId = 926213;
    $request->projectId = 'aspernatur';

    $response = $sdk->projectsClassic->createLanguageCombination($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createPayable

Adds a payable to a project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreatePayableRequest;
use \OpenAPI\OpenAPI\Models\Shared\PayableCreateDTO;
use \OpenAPI\OpenAPI\Models\Shared\FileDTO;
use \OpenAPI\OpenAPI\Models\Shared\ChargeLanguageCombinationDTO;
use \OpenAPI\OpenAPI\Models\Shared\PayableCreateDTORateOriginEnum;
use \OpenAPI\OpenAPI\Models\Shared\PayableCreateDTOTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreatePayableRequest();
    $request->payableCreateDTO = new PayableCreateDTO();
    $request->payableCreateDTO->calculationUnitId = 325310;
    $request->payableCreateDTO->catLogFile = new FileDTO();
    $request->payableCreateDTO->catLogFile->content = 'eaque';
    $request->payableCreateDTO->catLogFile->name = 'Ms. Marco Ankunding';
    $request->payableCreateDTO->catLogFile->token = 'aliquam';
    $request->payableCreateDTO->catLogFile->url = 'fugit';
    $request->payableCreateDTO->currencyId = 882860;
    $request->payableCreateDTO->description = 'inventore';
    $request->payableCreateDTO->id = 250622;
    $request->payableCreateDTO->ignoreMinimumCharge = false;
    $request->payableCreateDTO->invoiceId = 'et';
    $request->payableCreateDTO->jobId = [
        'laborum' => 'placeat',
        'velit' => 'eum',
        'autem' => 'nobis',
    ];
    $request->payableCreateDTO->jobTypeId = 557369;
    $request->payableCreateDTO->languageCombination = new ChargeLanguageCombinationDTO();
    $request->payableCreateDTO->languageCombination->sourceLanguageId = 829603;
    $request->payableCreateDTO->languageCombination->targetLanguageId = 860552;
    $request->payableCreateDTO->languageCombinationIdNumber = 'voluptas';
    $request->payableCreateDTO->minimumCharge = 7270.44;
    $request->payableCreateDTO->quantity = 965.49;
    $request->payableCreateDTO->rate = 2703.28;
    $request->payableCreateDTO->rateOrigin = PayableCreateDTORateOriginEnum::PRICE_LIST;
    $request->payableCreateDTO->total = 1314.82;
    $request->payableCreateDTO->type = PayableCreateDTOTypeEnum::CAT;
    $request->projectId = 'ipsa';

    $response = $sdk->projectsClassic->createPayable($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createReceivable

Adds a receivable to a project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateReceivableRequest;
use \OpenAPI\OpenAPI\Models\Shared\ReceivableCreateDTO;
use \OpenAPI\OpenAPI\Models\Shared\FileDTO;
use \OpenAPI\OpenAPI\Models\Shared\ChargeLanguageCombinationDTO;
use \OpenAPI\OpenAPI\Models\Shared\ReceivableCreateDTORateOriginEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReceivableCreateDTOTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateReceivableRequest();
    $request->receivableCreateDTO = new ReceivableCreateDTO();
    $request->receivableCreateDTO->calculationUnitId = 476477;
    $request->receivableCreateDTO->catLogFile = new FileDTO();
    $request->receivableCreateDTO->catLogFile->content = 'magnam';
    $request->receivableCreateDTO->catLogFile->name = 'Esther Koch';
    $request->receivableCreateDTO->catLogFile->token = 'fuga';
    $request->receivableCreateDTO->catLogFile->url = 'reprehenderit';
    $request->receivableCreateDTO->currencyId = 695626;
    $request->receivableCreateDTO->description = 'fugiat';
    $request->receivableCreateDTO->id = 283519;
    $request->receivableCreateDTO->ignoreMinimumCharge = false;
    $request->receivableCreateDTO->invoiceId = 'eum';
    $request->receivableCreateDTO->jobTypeId = 379927;
    $request->receivableCreateDTO->languageCombination = new ChargeLanguageCombinationDTO();
    $request->receivableCreateDTO->languageCombination->sourceLanguageId = 826871;
    $request->receivableCreateDTO->languageCombination->targetLanguageId = 181151;
    $request->receivableCreateDTO->languageCombinationIdNumber = 'praesentium';
    $request->receivableCreateDTO->minimumCharge = 7885.46;
    $request->receivableCreateDTO->quantity = 863.77;
    $request->receivableCreateDTO->rate = 568.48;
    $request->receivableCreateDTO->rateOrigin = ReceivableCreateDTORateOriginEnum::FILLED_MANUALLY;
    $request->receivableCreateDTO->taskId = 696997;
    $request->receivableCreateDTO->total = 2065.94;
    $request->receivableCreateDTO->type = ReceivableCreateDTOTypeEnum::CAT;
    $request->projectId = 'illum';

    $response = $sdk->projectsClassic->createReceivable($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createTask

Creates a new task for a given project.<p>
  Required fields:
  <ul>
    <li>languageCombination</li>
    <li>specializationId</li>
    <li>workflowId</li>
  </ul>
</p>


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateTaskRequest;
use \OpenAPI\OpenAPI\Models\Shared\TaskCreateDTO;
use \OpenAPI\OpenAPI\Models\Shared\ProjectDatesDTO;
use \OpenAPI\OpenAPI\Models\Shared\TimeDTO;
use \OpenAPI\OpenAPI\Models\Shared\TaskFileDTO;
use \OpenAPI\OpenAPI\Models\Shared\TaskFileDTOCategoryEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstructionsDTO;
use \OpenAPI\OpenAPI\Models\Shared\CommonLanguageCombinationDTO;
use \OpenAPI\OpenAPI\Models\Shared\ClassicPeopleDTO;
use \OpenAPI\OpenAPI\Models\Shared\ContactsDTO;
use \OpenAPI\OpenAPI\Models\Shared\ResponsiblePersonsDTO;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateTaskRequest();
    $request->taskCreateDTO = new TaskCreateDTO();
    $request->taskCreateDTO->clientTaskPONumber = 'quo';
    $request->taskCreateDTO->dates = new ProjectDatesDTO();
    $request->taskCreateDTO->dates->actualDeliveryDate = new TimeDTO();
    $request->taskCreateDTO->dates->actualDeliveryDate->value = 681359;
    $request->taskCreateDTO->dates->actualStartDate = new TimeDTO();
    $request->taskCreateDTO->dates->actualStartDate->value = 259422;
    $request->taskCreateDTO->dates->deadline = new TimeDTO();
    $request->taskCreateDTO->dates->deadline->value = 178367;
    $request->taskCreateDTO->dates->startDate = new TimeDTO();
    $request->taskCreateDTO->dates->startDate->value = 373813;
    $request->taskCreateDTO->files = [
        new TaskFileDTO(),
    ];
    $request->taskCreateDTO->instructions = new InstructionsDTO();
    $request->taskCreateDTO->instructions->forProvider = 'cupiditate';
    $request->taskCreateDTO->instructions->fromCustomer = 'consequatur';
    $request->taskCreateDTO->instructions->internal = 'tempora';
    $request->taskCreateDTO->instructions->notes = 'debitis';
    $request->taskCreateDTO->instructions->paymentNoteForCustomer = 'ipsam';
    $request->taskCreateDTO->instructions->paymentNoteForVendor = 'aspernatur';
    $request->taskCreateDTO->languageCombination = new CommonLanguageCombinationDTO();
    $request->taskCreateDTO->languageCombination->sourceLanguageId = 197054;
    $request->taskCreateDTO->languageCombination->targetLanguageId = 779192;
    $request->taskCreateDTO->name = 'Sophie Bayer';
    $request->taskCreateDTO->people = new ClassicPeopleDTO();
    $request->taskCreateDTO->people->customerContacts = new ContactsDTO();
    $request->taskCreateDTO->people->customerContacts->additionalIds = [
        76956,
        469498,
    ];
    $request->taskCreateDTO->people->customerContacts->primaryId = 518835;
    $request->taskCreateDTO->people->customerContacts->sendBackToId = 882710;
    $request->taskCreateDTO->people->responsiblePersons = new ResponsiblePersonsDTO();
    $request->taskCreateDTO->people->responsiblePersons->projectCoordinatorId = 306810;
    $request->taskCreateDTO->people->responsiblePersons->projectManagerId = 488410;
    $request->taskCreateDTO->specializationId = 577543;
    $request->taskCreateDTO->workflowId = 414567;
    $request->projectId = 'sapiente';

    $response = $sdk->projectsClassic->createTask($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## create5

Creates a new Classic Project. If the specified service ID refers to Smart Project, 400 Bad Request is returned instead.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\ClassicProjectCreateDTO;
use \OpenAPI\OpenAPI\Models\Shared\ProjectDatesDTO;
use \OpenAPI\OpenAPI\Models\Shared\TimeDTO;
use \OpenAPI\OpenAPI\Models\Shared\TaskFileDTO;
use \OpenAPI\OpenAPI\Models\Shared\TaskFileDTOCategoryEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstructionsDTO;
use \OpenAPI\OpenAPI\Models\Shared\ClassicPeopleDTO;
use \OpenAPI\OpenAPI\Models\Shared\ContactsDTO;
use \OpenAPI\OpenAPI\Models\Shared\ResponsiblePersonsDTO;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClassicProjectCreateDTO();
    $request->categoriesIds = [
        645570,
    ];
    $request->customerId = 475289;
    $request->dates = new ProjectDatesDTO();
    $request->dates->actualDeliveryDate = new TimeDTO();
    $request->dates->actualDeliveryDate->value = 35362;
    $request->dates->actualStartDate = new TimeDTO();
    $request->dates->actualStartDate->value = 783648;
    $request->dates->deadline = new TimeDTO();
    $request->dates->deadline->value = 430402;
    $request->dates->startDate = new TimeDTO();
    $request->dates->startDate->value = 556429;
    $request->inputFiles = [
        new TaskFileDTO(),
        new TaskFileDTO(),
        new TaskFileDTO(),
    ];
    $request->instructions = new InstructionsDTO();
    $request->instructions->forProvider = 'consequuntur';
    $request->instructions->fromCustomer = 'deleniti';
    $request->instructions->internal = 'fugit';
    $request->instructions->notes = 'fuga';
    $request->instructions->paymentNoteForCustomer = 'mollitia';
    $request->instructions->paymentNoteForVendor = 'incidunt';
    $request->name = 'Roy Hansen';
    $request->people = new ClassicPeopleDTO();
    $request->people->customerContacts = new ContactsDTO();
    $request->people->customerContacts->additionalIds = [
        159870,
        187131,
        129412,
        903984,
    ];
    $request->people->customerContacts->primaryId = 578922;
    $request->people->customerContacts->sendBackToId = 543806;
    $request->people->responsiblePersons = new ResponsiblePersonsDTO();
    $request->people->responsiblePersons->projectCoordinatorId = 92260;
    $request->people->responsiblePersons->projectManagerId = 456911;
    $request->serviceId = 910545;
    $request->sourceLanguageId = 882042;
    $request->specializationId = 82971;
    $request->targetLanguagesIds = [
        800379,
        724168,
    ];

    $response = $sdk->projectsClassic->create5($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deletePayable

Deletes a payable.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeletePayableRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeletePayableRequest();
    $request->payableId = 877131;
    $request->projectId = 'aliquid';

    $response = $sdk->projectsClassic->deletePayable($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteReceivable

Deletes a receivable.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteReceivableRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteReceivableRequest();
    $request->projectId = 'quasi';
    $request->receivableId = 904045;

    $response = $sdk->projectsClassic->deleteReceivable($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## delete12

Removes a project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\Delete12Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Delete12Request();
    $request->projectId = 'vel';

    $response = $sdk->projectsClassic->delete12($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAllIds6

Returns projects' internal identifiers.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAllIds6Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAllIds6Request();
    $request->updatedSince = 690025;

    $response = $sdk->projectsClassic->getAllIds6($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getById7

Returns project details. If the specified project ID refers to Smart Project, 400 Bad Request is returned instead.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetById7Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetById7Request();
    $request->embed = 'molestiae';
    $request->projectId = 'rerum';

    $response = $sdk->projectsClassic->getById7($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getContacts

Returns contacts of a given project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetContactsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetContactsRequest();
    $request->projectId = 'occaecati';

    $response = $sdk->projectsClassic->getContacts($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCustomFields5

Returns custom fields of a given project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCustomFields5Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCustomFields5Request();
    $request->projectId = 'minima';

    $response = $sdk->projectsClassic->getCustomFields5($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDates1

Returns dates of a given project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDates1Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDates1Request();
    $request->projectId = 'distinctio';

    $response = $sdk->projectsClassic->getDates1($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFileById

Downloads a file.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetFileByIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFileByIdRequest();
    $request->fileId = 'eligendi';

    $response = $sdk->projectsClassic->getFileById($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFinance

Returns finance of a given project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetFinanceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFinanceRequest();
    $request->projectId = 'sit';

    $response = $sdk->projectsClassic->getFinance($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getInstructions

Returns instructions of a given project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetInstructionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetInstructionsRequest();
    $request->projectId = 'culpa';

    $response = $sdk->projectsClassic->getInstructions($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateContacts

Updates contacts of a given project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateContactsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ContactsDTO;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateContactsRequest();
    $request->contactsDTO = new ContactsDTO();
    $request->contactsDTO->additionalIds = [
        240020,
        766964,
        160538,
    ];
    $request->contactsDTO->primaryId = 9766;
    $request->contactsDTO->sendBackToId = 796392;
    $request->projectId = 'quaerat';

    $response = $sdk->projectsClassic->updateContacts($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateCustomFields3

Updates custom fields of a given project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCustomFields3Request;
use \OpenAPI\OpenAPI\Models\Shared\CustomFieldDTO;
use \OpenAPI\OpenAPI\Models\Shared\CustomFieldDTOTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateCustomFields3Request();
    $request->requestBody = [
        new CustomFieldDTO(),
        new CustomFieldDTO(),
        new CustomFieldDTO(),
        new CustomFieldDTO(),
    ];
    $request->projectId = 'consectetur';

    $response = $sdk->projectsClassic->updateCustomFields3($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDates1

Updates dates of a given project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDates1Request;
use \OpenAPI\OpenAPI\Models\Shared\ProjectDatesDTO;
use \OpenAPI\OpenAPI\Models\Shared\TimeDTO;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDates1Request();
    $request->projectDatesDTO = new ProjectDatesDTO();
    $request->projectDatesDTO->actualDeliveryDate = new TimeDTO();
    $request->projectDatesDTO->actualDeliveryDate->value = 458139;
    $request->projectDatesDTO->actualStartDate = new TimeDTO();
    $request->projectDatesDTO->actualStartDate->value = 503427;
    $request->projectDatesDTO->deadline = new TimeDTO();
    $request->projectDatesDTO->deadline->value = 590984;
    $request->projectDatesDTO->startDate = new TimeDTO();
    $request->projectDatesDTO->startDate->value = 953722;
    $request->projectId = 'nulla';

    $response = $sdk->projectsClassic->updateDates1($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateInstructions1

Updates instructions of a given project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateInstructions1Request;
use \OpenAPI\OpenAPI\Models\Shared\InstructionsDTO;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateInstructions1Request();
    $request->instructionsDTO = new InstructionsDTO();
    $request->instructionsDTO->forProvider = 'quas';
    $request->instructionsDTO->fromCustomer = 'esse';
    $request->instructionsDTO->internal = 'quasi';
    $request->instructionsDTO->notes = 'a';
    $request->instructionsDTO->paymentNoteForCustomer = 'error';
    $request->instructionsDTO->paymentNoteForVendor = 'sint';
    $request->projectId = 'pariatur';

    $response = $sdk->projectsClassic->updateInstructions1($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updatePayable

Updates a payable.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePayableRequest;
use \OpenAPI\OpenAPI\Models\Shared\PayableDTO;
use \OpenAPI\OpenAPI\Models\Shared\ChargeLanguageCombinationDTO;
use \OpenAPI\OpenAPI\Models\Shared\PayableDTORateOriginEnum;
use \OpenAPI\OpenAPI\Models\Shared\PayableDTOTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdatePayableRequest();
    $request->payableDTO = new PayableDTO();
    $request->payableDTO->calculationUnitId = 820767;
    $request->payableDTO->currencyId = 157632;
    $request->payableDTO->description = 'eveniet';
    $request->payableDTO->id = 992430;
    $request->payableDTO->ignoreMinimumCharge = false;
    $request->payableDTO->invoiceId = 'facere';
    $request->payableDTO->jobId = [
        'consequuntur' => 'quasi',
    ];
    $request->payableDTO->jobTypeId = 628899;
    $request->payableDTO->languageCombination = new ChargeLanguageCombinationDTO();
    $request->payableDTO->languageCombination->sourceLanguageId = 633608;
    $request->payableDTO->languageCombination->targetLanguageId = 398434;
    $request->payableDTO->languageCombinationIdNumber = 'tenetur';
    $request->payableDTO->minimumCharge = 627.13;
    $request->payableDTO->quantity = 9367.47;
    $request->payableDTO->rate = 4240.32;
    $request->payableDTO->rateOrigin = PayableDTORateOriginEnum::PRICE_LIST;
    $request->payableDTO->total = 2586.84;
    $request->payableDTO->type = PayableDTOTypeEnum::CAT;
    $request->payableId = 849039;
    $request->projectId = 'soluta';

    $response = $sdk->projectsClassic->updatePayable($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateReceivable

Updates a receivable.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateReceivableRequest;
use \OpenAPI\OpenAPI\Models\Shared\ReceivableDTO;
use \OpenAPI\OpenAPI\Models\Shared\ChargeLanguageCombinationDTO;
use \OpenAPI\OpenAPI\Models\Shared\ReceivableDTORateOriginEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReceivableDTOTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateReceivableRequest();
    $request->receivableDTO = new ReceivableDTO();
    $request->receivableDTO->calculationUnitId = 33304;
    $request->receivableDTO->currencyId = 306986;
    $request->receivableDTO->description = 'sapiente';
    $request->receivableDTO->id = 119771;
    $request->receivableDTO->ignoreMinimumCharge = false;
    $request->receivableDTO->invoiceId = 'ullam';
    $request->receivableDTO->jobTypeId = 443879;
    $request->receivableDTO->languageCombination = new ChargeLanguageCombinationDTO();
    $request->receivableDTO->languageCombination->sourceLanguageId = 356707;
    $request->receivableDTO->languageCombination->targetLanguageId = 391774;
    $request->receivableDTO->languageCombinationIdNumber = 'aut';
    $request->receivableDTO->minimumCharge = 5318.49;
    $request->receivableDTO->quantity = 1852.32;
    $request->receivableDTO->rate = 8453.58;
    $request->receivableDTO->rateOrigin = ReceivableDTORateOriginEnum::PRICE_LIST;
    $request->receivableDTO->taskId = 536275;
    $request->receivableDTO->total = 9292.92;
    $request->receivableDTO->type = ReceivableDTOTypeEnum::CAT;
    $request->projectId = 'architecto';
    $request->receivableId = 609178;

    $response = $sdk->projectsClassic->updateReceivable($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
