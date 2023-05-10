# quotesSmartV2

## Overview

To change the description use /examples/TagsDescriptions.json

### Available Operations

* [addFiles2](#addfiles2) - Adds files to the quote as added by PM.
* [archive1](#archive1) - Prepares a ZIP archive that contains the specified files.
* [changeStatus3](#changestatus3) - Changes quote status if possible (400 Bad Request is returned otherwise).
* [createPayable3](#createpayable3) - Adds a payable to a quote.
* [createReceivable3](#createreceivable3) - Adds a receivable to a quote.
* [create7](#create7) - Creates a new Smart Quote.
* [deletePayable3](#deletepayable3) - Deletes a payable.
* [deleteReceivable3](#deletereceivable3) - Deletes a receivable.
* [getById10](#getbyid10) - Returns quote details.
* [getContacts3](#getcontacts3) - Returns Client Contacts information for a quote.
* [getCustomFields9](#getcustomfields9) - Returns a list of custom field keys and values for a project.
* [getFileById3](#getfilebyid3) - Returns details of a file.
* [getFileContentById1](#getfilecontentbyid1) - Downloads a file content.
* [getFiles1](#getfiles1) - Returns list of files in a quote.
* [getFinance3](#getfinance3) - Returns finance information for a quote.
* [getJobs1](#getjobs1) - Returns list of jobs in a quote.
* [updateBusinessDays](#updatebusinessdays) - Updates Business Days for a quote.
* [updateClientNotes1](#updateclientnotes1) - Updates Client Notes for a quote.
* [updateClientReferenceNumber1](#updateclientreferencenumber1) - Updates Client Reference Number for a quote.
* [updateContacts3](#updatecontacts3) - Updates Client Contacts for a quote.
* [updateCustomField3](#updatecustomfield3) - Updates a custom field with a specified key in a quote.
* [updateExpectedDeliveryDate](#updateexpecteddeliverydate) - Updates Expected Delivery Date for a quote.
* [updateInternalNotes1](#updateinternalnotes1) - Updates Internal Notes for a quote.
* [updatePayable3](#updatepayable3) - Updates a payable.
* [updateQuoteExpiry](#updatequoteexpiry) - Updates Quote Expiry Date for a quote.
* [updateReceivable3](#updatereceivable3) - Updates a receivable.
* [updateSourceLanguage1](#updatesourcelanguage1) - Updates source language for a quote.
* [updateSpecialization1](#updatespecialization1) - Updates specialization for a quote.
* [updateTargetLanguages1](#updatetargetlanguages1) - Updates target languages for a quote.
* [updateVendorInstructions1](#updatevendorinstructions1) - Updates instructions for all vendors performing the jobs in a quote.
* [updateVolume1](#updatevolume1) - Updates volume for a quote.
* [uploadFile3](#uploadfile3) - Uploads file to the quote as a file uploaded by PM.

## addFiles2

Adds files to the quote as added by PM. The files have to be uploaded beforehand (see "POST v2/quotes/{quoteId}/files/upload" operation). The following properties can be specified for each file:<ul><li>category (required, 400 Bad Request is returned otherwise)</li><li>languageIds – when the file category depends on a list of languages</li><li>languageCombinationIds – when the file category depends on a list of language combinations</li></ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AddFiles2Request;
use \OpenAPI\OpenAPI\Models\Shared\TimeDTO;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddFiles2Request();
    $request->timeDTO = new TimeDTO();
    $request->timeDTO->value = 174772;
    $request->quoteId = 'enim';

    $response = $sdk->quotesSmartV2->addFiles2($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## archive1

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
        'velit',
        'a',
    ];

    $response = $sdk->quotesSmartV2->archive1($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## changeStatus3

Changes quote status if possible (400 Bad Request is returned otherwise). The status has to be specified using one of the following keys: <ul><li>PENDING – available when the job has one of the following statuses: REQUESTED, REJECTED</li><li>SENT – available when the job has one of the following statuses: PENDING</li><li>APPROVED – available when the job has one of the following statuses: REQUESTED, PENDING, SENT, APPROVED_BY_CLIENT</li><li>REJECTED – available when the job has one of the following statuses: REQUESTED, PENDING, SENT</li></ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ChangeStatus3Request;
use \OpenAPI\OpenAPI\Models\Shared\ProjectStatusDTO;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ChangeStatus3Request();
    $request->projectStatusDTO = new ProjectStatusDTO();
    $request->projectStatusDTO->status = 'molestias';
    $request->quoteId = 'magnam';

    $response = $sdk->quotesSmartV2->changeStatus3($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createPayable3

Adds a payable to a quote.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreatePayable3Request;
use \OpenAPI\OpenAPI\Models\Shared\PayableCreateDTO;
use \OpenAPI\OpenAPI\Models\Shared\FileDTO;
use \OpenAPI\OpenAPI\Models\Shared\ChargeLanguageCombinationDTO;
use \OpenAPI\OpenAPI\Models\Shared\PayableCreateDTORateOriginEnum;
use \OpenAPI\OpenAPI\Models\Shared\PayableCreateDTOTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreatePayable3Request();
    $request->payableCreateDTO = new PayableCreateDTO();
    $request->payableCreateDTO->calculationUnitId = 906355;
    $request->payableCreateDTO->catLogFile = new FileDTO();
    $request->payableCreateDTO->catLogFile->content = 'consequuntur';
    $request->payableCreateDTO->catLogFile->name = 'Frankie Metz';
    $request->payableCreateDTO->catLogFile->token = 'eveniet';
    $request->payableCreateDTO->catLogFile->url = 'occaecati';
    $request->payableCreateDTO->currencyId = 160230;
    $request->payableCreateDTO->description = 'fugit';
    $request->payableCreateDTO->id = 661118;
    $request->payableCreateDTO->ignoreMinimumCharge = false;
    $request->payableCreateDTO->invoiceId = 'quis';
    $request->payableCreateDTO->jobId = [
        'error' => 'illo',
        'corporis' => 'quidem',
    ];
    $request->payableCreateDTO->jobTypeId = 910994;
    $request->payableCreateDTO->languageCombination = new ChargeLanguageCombinationDTO();
    $request->payableCreateDTO->languageCombination->sourceLanguageId = 247399;
    $request->payableCreateDTO->languageCombination->targetLanguageId = 878493;
    $request->payableCreateDTO->languageCombinationIdNumber = 'doloremque';
    $request->payableCreateDTO->minimumCharge = 4341.56;
    $request->payableCreateDTO->quantity = 599.44;
    $request->payableCreateDTO->rate = 5176.12;
    $request->payableCreateDTO->rateOrigin = PayableCreateDTORateOriginEnum::PRICE_PROFILE;
    $request->payableCreateDTO->total = 4746.68;
    $request->payableCreateDTO->type = PayableCreateDTOTypeEnum::CAT;
    $request->quoteId = 'qui';

    $response = $sdk->quotesSmartV2->createPayable3($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createReceivable3

Adds a receivable to a quote.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateReceivable3Request;
use \OpenAPI\OpenAPI\Models\Shared\ReceivableCreateDTO;
use \OpenAPI\OpenAPI\Models\Shared\FileDTO;
use \OpenAPI\OpenAPI\Models\Shared\ChargeLanguageCombinationDTO;
use \OpenAPI\OpenAPI\Models\Shared\ReceivableCreateDTORateOriginEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReceivableCreateDTOTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateReceivable3Request();
    $request->receivableCreateDTO = new ReceivableCreateDTO();
    $request->receivableCreateDTO->calculationUnitId = 739884;
    $request->receivableCreateDTO->catLogFile = new FileDTO();
    $request->receivableCreateDTO->catLogFile->content = 'iure';
    $request->receivableCreateDTO->catLogFile->name = 'Sean Pacocha';
    $request->receivableCreateDTO->catLogFile->token = 'rem';
    $request->receivableCreateDTO->catLogFile->url = 'aliquam';
    $request->receivableCreateDTO->currencyId = 320565;
    $request->receivableCreateDTO->description = 'repellat';
    $request->receivableCreateDTO->id = 3099;
    $request->receivableCreateDTO->ignoreMinimumCharge = false;
    $request->receivableCreateDTO->invoiceId = 'corporis';
    $request->receivableCreateDTO->jobTypeId = 597303;
    $request->receivableCreateDTO->languageCombination = new ChargeLanguageCombinationDTO();
    $request->receivableCreateDTO->languageCombination->sourceLanguageId = 470649;
    $request->receivableCreateDTO->languageCombination->targetLanguageId = 649078;
    $request->receivableCreateDTO->languageCombinationIdNumber = 'voluptas';
    $request->receivableCreateDTO->minimumCharge = 51.89;
    $request->receivableCreateDTO->quantity = 9795.27;
    $request->receivableCreateDTO->rate = 9702.22;
    $request->receivableCreateDTO->rateOrigin = ReceivableCreateDTORateOriginEnum::PRICE_PROFILE;
    $request->receivableCreateDTO->taskId = 663866;
    $request->receivableCreateDTO->total = 3279.88;
    $request->receivableCreateDTO->type = ReceivableCreateDTOTypeEnum::SIMPLE;
    $request->quoteId = 'dolorum';

    $response = $sdk->quotesSmartV2->createReceivable3($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## create7

Creates a new Smart Quote. If the specified service ID refers to Classic Quote, 400 Bad Request is returned instead.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\QuoteCreateDTO;

$sdk = SDK::builder()
    ->build();

try {
    $request = new QuoteCreateDTO();
    $request->clientId = 200364;
    $request->name = 'Sophie Mohr';
    $request->opportunityOfferId = 403218;
    $request->serviceId = 284000;

    $response = $sdk->quotesSmartV2->create7($request);

    if ($response->quoteDTOv2 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deletePayable3

Deletes a payable.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeletePayable3Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeletePayable3Request();
    $request->payableId = 633062;
    $request->quoteId = 'adipisci';

    $response = $sdk->quotesSmartV2->deletePayable3($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteReceivable3

Deletes a receivable.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteReceivable3Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteReceivable3Request();
    $request->quoteId = 'debitis';
    $request->receivableId = 514513;

    $response = $sdk->quotesSmartV2->deleteReceivable3($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getById10

Returns quote details. If the specified quote ID refers to Classic Quote, 400 Bad Request is returned instead.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetById10Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetById10Request();
    $request->quoteId = 'eum';

    $response = $sdk->quotesSmartV2->getById10($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getContacts3

Returns Client Contacts information for a quote.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetContacts3Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetContacts3Request();
    $request->quoteId = 'nemo';

    $response = $sdk->quotesSmartV2->getContacts3($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCustomFields9

Returns a list of custom field keys and values for a project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCustomFields9Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCustomFields9Request();
    $request->quoteId = 'recusandae';

    $response = $sdk->quotesSmartV2->getCustomFields9($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFileById3

Returns details of a file.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetFileById3Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFileById3Request();
    $request->fileId = 'esse';

    $response = $sdk->quotesSmartV2->getFileById3($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFileContentById1

Downloads a file content.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetFileContentById1Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFileContentById1Request();
    $request->fileId = 'provident';
    $request->fileName = 'quis';

    $response = $sdk->quotesSmartV2->getFileContentById1($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFiles1

Returns list of files in a quote. Only files added to the quote (i.e. files that have assigned category and languages) are listed.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetFiles1Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFiles1Request();
    $request->quoteId = 'eum';

    $response = $sdk->quotesSmartV2->getFiles1($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFinance3

Returns finance information for a quote.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetFinance3Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFinance3Request();
    $request->quoteId = 'reiciendis';

    $response = $sdk->quotesSmartV2->getFinance3($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getJobs1

Returns list of jobs in a quote.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetJobs1Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetJobs1Request();
    $request->quoteId = 'provident';

    $response = $sdk->quotesSmartV2->getJobs1($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateBusinessDays

Updates Business Days for a quote.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateBusinessDaysRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateBusinessDaysRequest();
    $request->requestBody = 133439;
    $request->quoteId = 'ullam';

    $response = $sdk->quotesSmartV2->updateBusinessDays($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateClientNotes1

Updates Client Notes for a quote.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateClientNotes1Request;
use \OpenAPI\OpenAPI\Models\Shared\StringDTO;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateClientNotes1Request();
    $request->stringDTO = new StringDTO();
    $request->stringDTO->value = 'quasi';
    $request->quoteId = 'animi';

    $response = $sdk->quotesSmartV2->updateClientNotes1($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateClientReferenceNumber1

Updates Client Reference Number for a quote.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateClientReferenceNumber1Request;
use \OpenAPI\OpenAPI\Models\Shared\StringDTO;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateClientReferenceNumber1Request();
    $request->stringDTO = new StringDTO();
    $request->stringDTO->value = 'nostrum';
    $request->quoteId = 'mollitia';

    $response = $sdk->quotesSmartV2->updateClientReferenceNumber1($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateContacts3

Updates Client Contacts for a quote.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateContacts3Request;
use \OpenAPI\OpenAPI\Models\Shared\SmartContactsDTO;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateContacts3Request();
    $request->smartContactsDTO = new SmartContactsDTO();
    $request->smartContactsDTO->additionalIds = [
        821719,
        659177,
        402767,
    ];
    $request->smartContactsDTO->primaryId = 397257;
    $request->quoteId = 'accusantium';

    $response = $sdk->quotesSmartV2->updateContacts3($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateCustomField3

Updates a custom field with a specified key in a quote.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCustomField3Request;
use \OpenAPI\OpenAPI\Models\Shared\SmartCustomFieldDTO;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateCustomField3Request();
    $request->smartCustomFieldDTO = new SmartCustomFieldDTO();
    $request->smartCustomFieldDTO->value = [
        'doloribus' => 'ullam',
        'in' => 'nam',
        'earum' => 'officia',
        'laborum' => 'placeat',
    ];
    $request->key = 'modi';
    $request->quoteId = 'voluptatibus';

    $response = $sdk->quotesSmartV2->updateCustomField3($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateExpectedDeliveryDate

Updates Expected Delivery Date for a quote.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateExpectedDeliveryDateRequest;
use \OpenAPI\OpenAPI\Models\Shared\TimeDTO;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateExpectedDeliveryDateRequest();
    $request->timeDTO = new TimeDTO();
    $request->timeDTO->value = 564064;
    $request->quoteId = 'officiis';

    $response = $sdk->quotesSmartV2->updateExpectedDeliveryDate($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateInternalNotes1

Updates Internal Notes for a quote.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateInternalNotes1Request;
use \OpenAPI\OpenAPI\Models\Shared\StringDTO;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateInternalNotes1Request();
    $request->stringDTO = new StringDTO();
    $request->stringDTO->value = 'sapiente';
    $request->quoteId = 'cumque';

    $response = $sdk->quotesSmartV2->updateInternalNotes1($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updatePayable3

Updates a payable.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePayable3Request;
use \OpenAPI\OpenAPI\Models\Shared\PayableDTO;
use \OpenAPI\OpenAPI\Models\Shared\ChargeLanguageCombinationDTO;
use \OpenAPI\OpenAPI\Models\Shared\PayableDTORateOriginEnum;
use \OpenAPI\OpenAPI\Models\Shared\PayableDTOTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdatePayable3Request();
    $request->payableDTO = new PayableDTO();
    $request->payableDTO->calculationUnitId = 113486;
    $request->payableDTO->currencyId = 698249;
    $request->payableDTO->description = 'tempora';
    $request->payableDTO->id = 335498;
    $request->payableDTO->ignoreMinimumCharge = false;
    $request->payableDTO->invoiceId = 'inventore';
    $request->payableDTO->jobId = [
        'cumque' => 'quae',
    ];
    $request->payableDTO->jobTypeId = 21688;
    $request->payableDTO->languageCombination = new ChargeLanguageCombinationDTO();
    $request->payableDTO->languageCombination->sourceLanguageId = 241901;
    $request->payableDTO->languageCombination->targetLanguageId = 137251;
    $request->payableDTO->languageCombinationIdNumber = 'eum';
    $request->payableDTO->minimumCharge = 2606.28;
    $request->payableDTO->quantity = 5219.96;
    $request->payableDTO->rate = 8710.83;
    $request->payableDTO->rateOrigin = PayableDTORateOriginEnum::AUTOCALCULATED;
    $request->payableDTO->total = 1794.1;
    $request->payableDTO->type = PayableDTOTypeEnum::CAT;
    $request->payableId = 433279;
    $request->quoteId = 'dicta';

    $response = $sdk->quotesSmartV2->updatePayable3($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateQuoteExpiry

Updates Quote Expiry Date for a quote.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateQuoteExpiryRequest;
use \OpenAPI\OpenAPI\Models\Shared\TimeDTO;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateQuoteExpiryRequest();
    $request->timeDTO = new TimeDTO();
    $request->timeDTO->value = 325118;
    $request->quoteId = 'beatae';

    $response = $sdk->quotesSmartV2->updateQuoteExpiry($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateReceivable3

Updates a receivable.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateReceivable3Request;
use \OpenAPI\OpenAPI\Models\Shared\ReceivableDTO;
use \OpenAPI\OpenAPI\Models\Shared\ChargeLanguageCombinationDTO;
use \OpenAPI\OpenAPI\Models\Shared\ReceivableDTORateOriginEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReceivableDTOTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateReceivable3Request();
    $request->receivableDTO = new ReceivableDTO();
    $request->receivableDTO->calculationUnitId = 583404;
    $request->receivableDTO->currencyId = 589695;
    $request->receivableDTO->description = 'earum';
    $request->receivableDTO->id = 745398;
    $request->receivableDTO->ignoreMinimumCharge = false;
    $request->receivableDTO->invoiceId = 'hic';
    $request->receivableDTO->jobTypeId = 848151;
    $request->receivableDTO->languageCombination = new ChargeLanguageCombinationDTO();
    $request->receivableDTO->languageCombination->sourceLanguageId = 52508;
    $request->receivableDTO->languageCombination->targetLanguageId = 935833;
    $request->receivableDTO->languageCombinationIdNumber = 'perspiciatis';
    $request->receivableDTO->minimumCharge = 9834.27;
    $request->receivableDTO->quantity = 8918.01;
    $request->receivableDTO->rate = 3998.02;
    $request->receivableDTO->rateOrigin = ReceivableDTORateOriginEnum::AUTOCALCULATED;
    $request->receivableDTO->taskId = 380335;
    $request->receivableDTO->total = 2115.34;
    $request->receivableDTO->type = ReceivableDTOTypeEnum::SIMPLE;
    $request->quoteId = 'cumque';
    $request->receivableId = 684935;

    $response = $sdk->quotesSmartV2->updateReceivable3($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateSourceLanguage1

Updates source language for a quote.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSourceLanguage1Request;
use \OpenAPI\OpenAPI\Models\Shared\SourceLanguageDTO;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateSourceLanguage1Request();
    $request->sourceLanguageDTO = new SourceLanguageDTO();
    $request->sourceLanguageDTO->sourceLanguageId = 189062;
    $request->quoteId = 'animi';

    $response = $sdk->quotesSmartV2->updateSourceLanguage1($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateSpecialization1

Updates specialization for a quote.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSpecialization1Request;
use \OpenAPI\OpenAPI\Models\Shared\SpecializationDTO;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateSpecialization1Request();
    $request->specializationDTO = new SpecializationDTO();
    $request->specializationDTO->specializationId = 898760;
    $request->quoteId = 'nulla';

    $response = $sdk->quotesSmartV2->updateSpecialization1($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateTargetLanguages1

Updates target languages for a quote.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTargetLanguages1Request;
use \OpenAPI\OpenAPI\Models\Shared\TargetLanguagesDTO;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateTargetLanguages1Request();
    $request->targetLanguagesDTO = new TargetLanguagesDTO();
    $request->targetLanguagesDTO->targetLanguageIds = [
        97258,
    ];
    $request->quoteId = 'et';

    $response = $sdk->quotesSmartV2->updateTargetLanguages1($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateVendorInstructions1

Updates instructions for all vendors performing the jobs in a quote. See also "PUT /jobs/{jobId}/instructions" for updating instructions for a specific job in a project or quote.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateVendorInstructions1Request;
use \OpenAPI\OpenAPI\Models\Shared\StringDTO;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateVendorInstructions1Request();
    $request->stringDTO = new StringDTO();
    $request->stringDTO->value = 'ducimus';
    $request->quoteId = 'natus';

    $response = $sdk->quotesSmartV2->updateVendorInstructions1($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateVolume1

Updates volume for a quote.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateVolume1Request;
use \OpenAPI\OpenAPI\Models\Shared\BigDecimalDTO;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateVolume1Request();
    $request->bigDecimalDTO = new BigDecimalDTO();
    $request->bigDecimalDTO->value = 5810.82;
    $request->quoteId = 'suscipit';

    $response = $sdk->quotesSmartV2->updateVolume1($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## uploadFile3

Uploads file to the quote as a file uploaded by PM. Only one file can be uploaded at once. When the upload is finished the file has to be added by specifying its category and languages (see "PUT /v2/quotes/{quoteId}/files/add" operation).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UploadFile3Request;
use \OpenAPI\OpenAPI\Models\Shared\FileToUploadDto;
use \OpenAPI\OpenAPI\Models\Shared\FileToUploadDtoFile;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UploadFile3Request();
    $request->fileToUploadDto = new FileToUploadDto();
    $request->fileToUploadDto->file = new FileToUploadDtoFile();
    $request->fileToUploadDto->file->content = 'adipisci';
    $request->fileToUploadDto->file->file = 'quasi';
    $request->quoteId = 'magni';

    $response = $sdk->quotesSmartV2->uploadFile3($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
