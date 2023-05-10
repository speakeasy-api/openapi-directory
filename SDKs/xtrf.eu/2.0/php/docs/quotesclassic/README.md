# quotesClassic

## Overview

To change the description use /examples/TagsDescriptions.json

### Available Operations

* [createLanguageCombination1](#createlanguagecombination1) - Creates a new language combination for a given quote without creating a task.
* [createPayable1](#createpayable1) - Adds a payable.
* [createReceivable1](#createreceivable1) - Adds a receivable.
* [createTask1](#createtask1) - Creates a new task for a given quote.
* [deletePayable1](#deletepayable1) - Deletes a payable.
* [deleteReceivable1](#deletereceivable1) - Deletes a receivable.
* [delete13](#delete13) - Removes a quote.
* [getAllIds7](#getallids7) - Returns quotes' internal identifiers.
* [getById8](#getbyid8) - Returns quote details.
* [getCustomFields6](#getcustomfields6) - Returns custom fields of a given quote.
* [getDates2](#getdates2) - Returns dates of a given quote.
* [getFinance1](#getfinance1) - Returns finance of a given quote.
* [getInstructions1](#getinstructions1) - Returns instructions of a given quote.
* [send1](#send1) - Sends a quote for customer confirmation.
* [start](#start) - Starts a quote.
* [updateCustomFields4](#updatecustomfields4) - Updates custom fields of a given quote.
* [updateInstructions2](#updateinstructions2) - Updates instructions of a given quote.
* [updatePayable1](#updatepayable1) - Updates a payable.
* [updateReceivable1](#updatereceivable1) - Updates a receivable.

## createLanguageCombination1

Creates a new language combination for a given quote without creating a task.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateLanguageCombination1Request;
use \OpenAPI\OpenAPI\Models\Shared\CommonLanguageCombinationDTO;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateLanguageCombination1Request();
    $request->commonLanguageCombinationDTO = new CommonLanguageCombinationDTO();
    $request->commonLanguageCombinationDTO->sourceLanguageId = 215529;
    $request->commonLanguageCombinationDTO->targetLanguageId = 406733;
    $request->quoteId = 'occaecati';

    $response = $sdk->quotesClassic->createLanguageCombination1($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createPayable1

Adds a payable.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreatePayable1Request;
use \OpenAPI\OpenAPI\Models\Shared\PayableCreateDTO;
use \OpenAPI\OpenAPI\Models\Shared\FileDTO;
use \OpenAPI\OpenAPI\Models\Shared\ChargeLanguageCombinationDTO;
use \OpenAPI\OpenAPI\Models\Shared\PayableCreateDTORateOriginEnum;
use \OpenAPI\OpenAPI\Models\Shared\PayableCreateDTOTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreatePayable1Request();
    $request->payableCreateDTO = new PayableCreateDTO();
    $request->payableCreateDTO->calculationUnitId = 552078;
    $request->payableCreateDTO->catLogFile = new FileDTO();
    $request->payableCreateDTO->catLogFile->content = 'voluptatibus';
    $request->payableCreateDTO->catLogFile->name = 'Rhonda Klocko';
    $request->payableCreateDTO->catLogFile->token = 'sit';
    $request->payableCreateDTO->catLogFile->url = 'non';
    $request->payableCreateDTO->currencyId = 888044;
    $request->payableCreateDTO->description = 'praesentium';
    $request->payableCreateDTO->id = 708609;
    $request->payableCreateDTO->ignoreMinimumCharge = false;
    $request->payableCreateDTO->invoiceId = 'quaerat';
    $request->payableCreateDTO->jobId = [
        'ipsam' => 'debitis',
        'rem' => 'sit',
    ];
    $request->payableCreateDTO->jobTypeId = 750595;
    $request->payableCreateDTO->languageCombination = new ChargeLanguageCombinationDTO();
    $request->payableCreateDTO->languageCombination->sourceLanguageId = 625637;
    $request->payableCreateDTO->languageCombination->targetLanguageId = 333507;
    $request->payableCreateDTO->languageCombinationIdNumber = 'minima';
    $request->payableCreateDTO->minimumCharge = 9241.59;
    $request->payableCreateDTO->quantity = 9671.22;
    $request->payableCreateDTO->rate = 8623.19;
    $request->payableCreateDTO->rateOrigin = PayableCreateDTORateOriginEnum::PRICE_PROFILE;
    $request->payableCreateDTO->total = 486.9;
    $request->payableCreateDTO->type = PayableCreateDTOTypeEnum::CAT;
    $request->quoteId = 'numquam';

    $response = $sdk->quotesClassic->createPayable1($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createReceivable1

Adds a receivable.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateReceivable1Request;
use \OpenAPI\OpenAPI\Models\Shared\ReceivableCreateDTO;
use \OpenAPI\OpenAPI\Models\Shared\FileDTO;
use \OpenAPI\OpenAPI\Models\Shared\ChargeLanguageCombinationDTO;
use \OpenAPI\OpenAPI\Models\Shared\ReceivableCreateDTORateOriginEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReceivableCreateDTOTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateReceivable1Request();
    $request->receivableCreateDTO = new ReceivableCreateDTO();
    $request->receivableCreateDTO->calculationUnitId = 329935;
    $request->receivableCreateDTO->catLogFile = new FileDTO();
    $request->receivableCreateDTO->catLogFile->content = 'in';
    $request->receivableCreateDTO->catLogFile->name = 'Jack Langworth';
    $request->receivableCreateDTO->catLogFile->token = 'cum';
    $request->receivableCreateDTO->catLogFile->url = 'laboriosam';
    $request->receivableCreateDTO->currencyId = 680515;
    $request->receivableCreateDTO->description = 'voluptatum';
    $request->receivableCreateDTO->id = 622385;
    $request->receivableCreateDTO->ignoreMinimumCharge = false;
    $request->receivableCreateDTO->invoiceId = 'hic';
    $request->receivableCreateDTO->jobTypeId = 710529;
    $request->receivableCreateDTO->languageCombination = new ChargeLanguageCombinationDTO();
    $request->receivableCreateDTO->languageCombination->sourceLanguageId = 892863;
    $request->receivableCreateDTO->languageCombination->targetLanguageId = 204923;
    $request->receivableCreateDTO->languageCombinationIdNumber = 'dolorum';
    $request->receivableCreateDTO->minimumCharge = 3416.98;
    $request->receivableCreateDTO->quantity = 6390.28;
    $request->receivableCreateDTO->rate = 6762.43;
    $request->receivableCreateDTO->rateOrigin = ReceivableCreateDTORateOriginEnum::FILLED_MANUALLY;
    $request->receivableCreateDTO->taskId = 879235;
    $request->receivableCreateDTO->total = 2726.83;
    $request->receivableCreateDTO->type = ReceivableCreateDTOTypeEnum::CAT;
    $request->quoteId = 'fugit';

    $response = $sdk->quotesClassic->createReceivable1($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createTask1

Creates a new task for a given quote. Required fields are presented in the example.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateTask1Request;
use \OpenAPI\OpenAPI\Models\Shared\TaskDTO;
use \OpenAPI\OpenAPI\Models\Shared\CustomFieldDTO;
use \OpenAPI\OpenAPI\Models\Shared\CustomFieldDTOTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ProjectDatesDTO;
use \OpenAPI\OpenAPI\Models\Shared\TimeDTO;
use \OpenAPI\OpenAPI\Models\Shared\TaskFinanceDTO;
use \OpenAPI\OpenAPI\Models\Shared\InstructionsDTO;
use \OpenAPI\OpenAPI\Models\Shared\TaskJobsDTO;
use \OpenAPI\OpenAPI\Models\Shared\CommonLanguageCombinationDTO;
use \OpenAPI\OpenAPI\Models\Shared\ClassicPeopleDTO;
use \OpenAPI\OpenAPI\Models\Shared\ContactsDTO;
use \OpenAPI\OpenAPI\Models\Shared\ResponsiblePersonsDTO;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateTask1Request();
    $request->taskDTO = new TaskDTO();
    $request->taskDTO->clientTaskPONumber = 'ut';
    $request->taskDTO->customFields = [
        new CustomFieldDTO(),
        new CustomFieldDTO(),
        new CustomFieldDTO(),
        new CustomFieldDTO(),
    ];
    $request->taskDTO->dates = new ProjectDatesDTO();
    $request->taskDTO->dates->actualDeliveryDate = new TimeDTO();
    $request->taskDTO->dates->actualDeliveryDate->value = 30235;
    $request->taskDTO->dates->actualStartDate = new TimeDTO();
    $request->taskDTO->dates->actualStartDate->value = 635057;
    $request->taskDTO->dates->deadline = new TimeDTO();
    $request->taskDTO->dates->deadline->value = 710337;
    $request->taskDTO->dates->startDate = new TimeDTO();
    $request->taskDTO->dates->startDate->value = 299643;
    $request->taskDTO->finance = new TaskFinanceDTO();
    $request->taskDTO->finance->invoiceable = false;
    $request->taskDTO->id = 7884;
    $request->taskDTO->idNumber = 'esse';
    $request->taskDTO->instructions = new InstructionsDTO();
    $request->taskDTO->instructions->forProvider = 'ipsam';
    $request->taskDTO->instructions->fromCustomer = 'sit';
    $request->taskDTO->instructions->internal = 'voluptatum';
    $request->taskDTO->instructions->notes = 'quas';
    $request->taskDTO->instructions->paymentNoteForCustomer = 'repudiandae';
    $request->taskDTO->instructions->paymentNoteForVendor = 'corporis';
    $request->taskDTO->jobs = new TaskJobsDTO();
    $request->taskDTO->jobs->jobCount = 89494;
    $request->taskDTO->jobs->jobIds = [
        405942,
        153627,
        24313,
    ];
    $request->taskDTO->languageCombination = new CommonLanguageCombinationDTO();
    $request->taskDTO->languageCombination->sourceLanguageId = 425508;
    $request->taskDTO->languageCombination->targetLanguageId = 342611;
    $request->taskDTO->name = 'Evan Altenwerth';
    $request->taskDTO->people = new ClassicPeopleDTO();
    $request->taskDTO->people->customerContacts = new ContactsDTO();
    $request->taskDTO->people->customerContacts->additionalIds = [
        690894,
    ];
    $request->taskDTO->people->customerContacts->primaryId = 115703;
    $request->taskDTO->people->customerContacts->sendBackToId = 99416;
    $request->taskDTO->people->responsiblePersons = new ResponsiblePersonsDTO();
    $request->taskDTO->people->responsiblePersons->projectCoordinatorId = 577140;
    $request->taskDTO->people->responsiblePersons->projectManagerId = 289776;
    $request->taskDTO->projectId = 695270;
    $request->taskDTO->quoteId = 539074;
    $request->quoteId = 'laborum';

    $response = $sdk->quotesClassic->createTask1($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deletePayable1

Deletes a payable.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeletePayable1Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeletePayable1Request();
    $request->payableId = 724148;
    $request->quoteId = 'tenetur';

    $response = $sdk->quotesClassic->deletePayable1($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteReceivable1

Deletes a receivable.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteReceivable1Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteReceivable1Request();
    $request->quoteId = 'laboriosam';
    $request->receivableId = 2703;

    $response = $sdk->quotesClassic->deleteReceivable1($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## delete13

Removes a quote.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\Delete13Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Delete13Request();
    $request->quoteId = 'amet';

    $response = $sdk->quotesClassic->delete13($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAllIds7

Returns quotes' internal identifiers.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAllIds7Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAllIds7Request();
    $request->updatedSince = 647197;

    $response = $sdk->quotesClassic->getAllIds7($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getById8

Returns quote details. If the specified quote ID refers to Smart Quote, 400 Bad Request is returned instead.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetById8Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetById8Request();
    $request->embed = 'voluptate';
    $request->quoteId = 'unde';

    $response = $sdk->quotesClassic->getById8($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCustomFields6

Returns custom fields of a given quote.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCustomFields6Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCustomFields6Request();
    $request->quoteId = 'reiciendis';

    $response = $sdk->quotesClassic->getCustomFields6($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDates2

Returns dates of a given quote.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDates2Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDates2Request();
    $request->quoteId = 'provident';

    $response = $sdk->quotesClassic->getDates2($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFinance1

Returns finance of a given quote.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetFinance1Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFinance1Request();
    $request->quoteId = 'repellendus';

    $response = $sdk->quotesClassic->getFinance1($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getInstructions1

Returns instructions of a given quote.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetInstructions1Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetInstructions1Request();
    $request->quoteId = 'delectus';

    $response = $sdk->quotesClassic->getInstructions1($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## send1

Sends a quote for customer confirmation. Quote status is changed to SENT and a document is sent to the customer.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\Send1Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Send1Request();
    $request->quoteId = 'voluptates';

    $response = $sdk->quotesClassic->send1($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## start

Starts a quote.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartRequest();
    $request->quoteId = 'perferendis';

    $response = $sdk->quotesClassic->start($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateCustomFields4

Updates custom fields of a given quote.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCustomFields4Request;
use \OpenAPI\OpenAPI\Models\Shared\CustomFieldDTO;
use \OpenAPI\OpenAPI\Models\Shared\CustomFieldDTOTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateCustomFields4Request();
    $request->requestBody = [
        new CustomFieldDTO(),
        new CustomFieldDTO(),
        new CustomFieldDTO(),
    ];
    $request->quoteId = 'quidem';

    $response = $sdk->quotesClassic->updateCustomFields4($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateInstructions2

Updates instructions of a given quote.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateInstructions2Request;
use \OpenAPI\OpenAPI\Models\Shared\InstructionsDTO;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateInstructions2Request();
    $request->instructionsDTO = new InstructionsDTO();
    $request->instructionsDTO->forProvider = 'reprehenderit';
    $request->instructionsDTO->fromCustomer = 'facere';
    $request->instructionsDTO->internal = 'fuga';
    $request->instructionsDTO->notes = 'praesentium';
    $request->instructionsDTO->paymentNoteForCustomer = 'mollitia';
    $request->instructionsDTO->paymentNoteForVendor = 'veniam';
    $request->quoteId = 'voluptatem';

    $response = $sdk->quotesClassic->updateInstructions2($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updatePayable1

Updates a payable.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePayable1Request;
use \OpenAPI\OpenAPI\Models\Shared\PayableDTO;
use \OpenAPI\OpenAPI\Models\Shared\ChargeLanguageCombinationDTO;
use \OpenAPI\OpenAPI\Models\Shared\PayableDTORateOriginEnum;
use \OpenAPI\OpenAPI\Models\Shared\PayableDTOTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdatePayable1Request();
    $request->payableDTO = new PayableDTO();
    $request->payableDTO->calculationUnitId = 790840;
    $request->payableDTO->currencyId = 919532;
    $request->payableDTO->description = 'quasi';
    $request->payableDTO->id = 542457;
    $request->payableDTO->ignoreMinimumCharge = false;
    $request->payableDTO->invoiceId = 'reprehenderit';
    $request->payableDTO->jobId = [
        'totam' => 'suscipit',
        'quidem' => 'maxime',
        'et' => 'esse',
        'amet' => 'assumenda',
    ];
    $request->payableDTO->jobTypeId = 410301;
    $request->payableDTO->languageCombination = new ChargeLanguageCombinationDTO();
    $request->payableDTO->languageCombination->sourceLanguageId = 539118;
    $request->payableDTO->languageCombination->targetLanguageId = 623295;
    $request->payableDTO->languageCombinationIdNumber = 'officiis';
    $request->payableDTO->minimumCharge = 8869.61;
    $request->payableDTO->quantity = 8801.07;
    $request->payableDTO->rate = 6188.26;
    $request->payableDTO->rateOrigin = PayableDTORateOriginEnum::PRICE_LIST;
    $request->payableDTO->total = 1334.61;
    $request->payableDTO->type = PayableDTOTypeEnum::SIMPLE;
    $request->payableId = 980581;
    $request->quoteId = 'corrupti';

    $response = $sdk->quotesClassic->updatePayable1($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateReceivable1

Updates a receivable.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateReceivable1Request;
use \OpenAPI\OpenAPI\Models\Shared\ReceivableDTO;
use \OpenAPI\OpenAPI\Models\Shared\ChargeLanguageCombinationDTO;
use \OpenAPI\OpenAPI\Models\Shared\ReceivableDTORateOriginEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReceivableDTOTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateReceivable1Request();
    $request->receivableDTO = new ReceivableDTO();
    $request->receivableDTO->calculationUnitId = 871786;
    $request->receivableDTO->currencyId = 621693;
    $request->receivableDTO->description = 'blanditiis';
    $request->receivableDTO->id = 379356;
    $request->receivableDTO->ignoreMinimumCharge = false;
    $request->receivableDTO->invoiceId = 'repudiandae';
    $request->receivableDTO->jobTypeId = 542129;
    $request->receivableDTO->languageCombination = new ChargeLanguageCombinationDTO();
    $request->receivableDTO->languageCombination->sourceLanguageId = 541381;
    $request->receivableDTO->languageCombination->targetLanguageId = 120919;
    $request->receivableDTO->languageCombinationIdNumber = 'recusandae';
    $request->receivableDTO->minimumCharge = 6806.97;
    $request->receivableDTO->quantity = 8298.98;
    $request->receivableDTO->rate = 2871.19;
    $request->receivableDTO->rateOrigin = ReceivableDTORateOriginEnum::AUTOCALCULATED;
    $request->receivableDTO->taskId = 42976;
    $request->receivableDTO->total = 9197.83;
    $request->receivableDTO->type = ReceivableDTOTypeEnum::SIMPLE;
    $request->quoteId = 'accusantium';
    $request->receivableId = 106429;

    $response = $sdk->quotesClassic->updateReceivable1($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
