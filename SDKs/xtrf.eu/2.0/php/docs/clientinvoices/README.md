# clientInvoices

## Overview

To change the description use /examples/TagsDescriptions.json

### Available Operations

* [createPayment](#createpayment) - Adds a new payment to the client invoice. The invoice payment status (Not Paid, Partially Paid, Fully Paid) is automatically recalculated.
* [create1](#create1) - Creates a new invoice.
* [delete1](#delete1) - Removes a client invoice.
* [delete2](#delete2) - Removes a customer payment.
* [downloadDocuments](#downloaddocuments) - Generates client invoices' documents.
* [duplicate](#duplicate) - Duplicate client invoice.
* [duplicateAsProForma](#duplicateasproforma) - Duplicate client invoice as pro forma.
* [getAll](#getall) - Lists all client invoices in all statuses (including not ready and drafts) that have been updated since a specific date.
* [getAllIds](#getallids) - Returns client invoices' internal identifiers.
* [getById](#getbyid) - Returns client invoice details.
* [getDates](#getdates) - Returns dates of a given client invoice.
* [getDocument](#getdocument) - Generates client invoice document (PDF).
* [getPaymentTerms](#getpaymentterms) - Returns payment terms of a given client invoice.
* [getPayments](#getpayments) - Returns all payments for the client invoice.
* [sendReminder](#sendreminder) - Sends reminder.
* [sendReminders](#sendreminders) - Sends reminders. Returns number of sent e-mails.

## createPayment

Adds a new payment to the client invoice. The invoice payment status (Not Paid, Partially Paid, Fully Paid) is automatically recalculated.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreatePaymentRequest;
use \OpenAPI\OpenAPI\Models\Shared\PaymentDTO;
use \OpenAPI\OpenAPI\Models\Shared\TimeDTO;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreatePaymentRequest();
    $request->paymentDTO = new PaymentDTO();
    $request->paymentDTO->amount = 1613.09;
    $request->paymentDTO->notes = 'repellat';
    $request->paymentDTO->paymentDate = new TimeDTO();
    $request->paymentDTO->paymentDate->value = 653108;
    $request->paymentDTO->paymentMethodId = 581850;
    $request->invoiceId = 253291;

    $response = $sdk->clientInvoices->createPayment($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## create1

Creates a new invoice from tasks. Tasks are grouped by client and currency, therefore multiple invoices can be created.If any of the tasks cannot be invoiced (ie. it is already invoiced, not invoiceable, not associated with a project) then an error is reported.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\CustomerInvoiceCreateDTO;
use \OpenAPI\OpenAPI\Models\Shared\CustomerInvoiceCreateDTOTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CustomerInvoiceCreateDTO();
    $request->prepaymentsIds = [
        466311,
        474697,
    ];
    $request->tasksIds = [
        623510,
    ];
    $request->type = CustomerInvoiceCreateDTOTypeEnum::FINAL;

    $response = $sdk->clientInvoices->create1($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## delete1

Removes a client invoice.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\Delete1Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Delete1Request();
    $request->invoiceId = 338007;

    $response = $sdk->clientInvoices->delete1($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## delete2

Removes a customer payment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\Delete2Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Delete2Request();
    $request->paymentId = 110375;

    $response = $sdk->clientInvoices->delete2($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## downloadDocuments

Generates client invoices' documents.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\DownloadDocumentsRequestDTO;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DownloadDocumentsRequestDTO();
    $request->ids = [
        656330,
        317202,
        138183,
    ];

    $response = $sdk->clientInvoices->downloadDocuments($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## duplicate

Duplicate client invoice.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DuplicateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DuplicateRequest();
    $request->invoiceId = 778346;

    $response = $sdk->clientInvoices->duplicate($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## duplicateAsProForma

Duplicate client invoice as pro forma.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DuplicateAsProFormaRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DuplicateAsProFormaRequest();
    $request->invoiceId = 196582;

    $response = $sdk->clientInvoices->duplicateAsProForma($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAll

Lists all client invoices in all statuses (including not ready and drafts) that have been updated since a specific date.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAllRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAllRequest();
    $request->updatedSince = 949572;

    $response = $sdk->clientInvoices->getAll($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAllIds

Returns client invoices' internal identifiers.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAllIdsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAllIdsRequest();
    $request->updatedSince = 368725;

    $response = $sdk->clientInvoices->getAllIds($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getById

Returns client invoice details.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetByIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetByIdRequest();
    $request->embed = 'id';
    $request->invoiceId = 820994;

    $response = $sdk->clientInvoices->getById($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDates

Returns dates of a given client invoice.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDatesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDatesRequest();
    $request->invoiceId = 13571;

    $response = $sdk->clientInvoices->getDates($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDocument

Generates client invoice document (PDF).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDocumentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDocumentRequest();
    $request->invoiceId = 97101;

    $response = $sdk->clientInvoices->getDocument($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPaymentTerms

Returns payment terms of a given client invoice.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetPaymentTermsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPaymentTermsRequest();
    $request->invoiceId = 622846;

    $response = $sdk->clientInvoices->getPaymentTerms($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPayments

Returns all payments for the client invoice.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetPaymentsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPaymentsRequest();
    $request->invoiceId = 837945;

    $response = $sdk->clientInvoices->getPayments($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sendReminder

Sends reminder.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SendReminderRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SendReminderRequest();
    $request->invoiceId = 673660;

    $response = $sdk->clientInvoices->sendReminder($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sendReminders

Sends reminders. Returns number of sent e-mails.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SendRemindersRequestDTO;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SendRemindersRequestDTO();
    $request->ids = [
        971945,
    ];

    $response = $sdk->clientInvoices->sendReminders($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
