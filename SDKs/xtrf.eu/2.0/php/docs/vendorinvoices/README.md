# vendorInvoices

## Overview

To change the description use /examples/TagsDescriptions.json

### Available Operations

* [createPayment1](#createpayment1) - Creates a new payment on the vendor account and assigns the payment to the invoice.
* [create4](#create4) - Creates a new invoice.
* [delete6](#delete6) - Removes a provider invoice.
* [delete7](#delete7) - Removes a provider payment.
* [getAllIds3](#getallids3) - Returns vendor invoices' internal identifiers.
* [getAll2](#getall2) - Lists all vendor invoices in all statuses (including not ready and drafts) that have been updated since a specific date.
* [getById3](#getbyid3) - Returns provider invoice details.
* [getDocument1](#getdocument1) - Generates provider invoice document (PDF).
* [getPayments1](#getpayments1) - Returns all payments for the vendor invoice.
* [send](#send) - Sends a provider invoice.
* [setStatus](#setstatus) - Changes invoice status to given status.

## createPayment1

Creates a new payment on the vendor account and assigns the payment to the invoice.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreatePayment1Request;
use \OpenAPI\OpenAPI\Models\Shared\PaymentDTO;
use \OpenAPI\OpenAPI\Models\Shared\TimeDTO;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreatePayment1Request();
    $request->paymentDTO = new PaymentDTO();
    $request->paymentDTO->amount = 2226.58;
    $request->paymentDTO->notes = 'fugiat';
    $request->paymentDTO->paymentDate = new TimeDTO();
    $request->paymentDTO->paymentDate->value = 369490;
    $request->paymentDTO->paymentMethodId = 162120;
    $request->invoiceId = 55107;

    $response = $sdk->vendorInvoices->createPayment1($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## create4

Creates a new invoice from jobs. Jobs are grouped by provider and currency, therefore multiple invoices can be created.If any of the jobs cannot be invoiced (ie. it is already invoiced) then an error is reported.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\ProviderInvoiceCreateDTO;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProviderInvoiceCreateDTO();
    $request->jobsIds = [
        911198,
        773456,
        884952,
    ];

    $response = $sdk->vendorInvoices->create4($request);

    if ($response->providerInvoiceCreateResultDTO !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## delete6

Removes a provider invoice.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\Delete6Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Delete6Request();
    $request->invoiceId = 456410;

    $response = $sdk->vendorInvoices->delete6($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## delete7

Removes a provider payment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\Delete7Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Delete7Request();
    $request->paymentId = 897277;

    $response = $sdk->vendorInvoices->delete7($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAllIds3

Returns vendor invoices' internal identifiers.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAllIds3Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAllIds3Request();
    $request->updatedSince = 153369;

    $response = $sdk->vendorInvoices->getAllIds3($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAll2

Lists all vendor invoices in all statuses (including not ready and drafts) that have been updated since a specific date.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAll2Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAll2Request();
    $request->updatedSince = 332191;

    $response = $sdk->vendorInvoices->getAll2($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getById3

Returns provider invoice details.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetById3Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetById3Request();
    $request->invoiceId = 199596;

    $response = $sdk->vendorInvoices->getById3($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDocument1

Generates provider invoice document (PDF).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDocument1Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDocument1Request();
    $request->invoiceId = 712927;

    $response = $sdk->vendorInvoices->getDocument1($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPayments1

Returns all payments for the vendor invoice.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetPayments1Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPayments1Request();
    $request->invoiceId = 432984;

    $response = $sdk->vendorInvoices->getPayments1($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## send

Sends a provider invoice.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SendRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SendRequest();
    $request->invoiceId = 426943;

    $response = $sdk->vendorInvoices->send($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## setStatus

Changes invoice status to given status.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SetStatusRequest;
use \OpenAPI\OpenAPI\Models\Shared\StatusRequestDTO;
use \OpenAPI\OpenAPI\Models\Shared\StatusRequestDTOStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SetStatusRequest();
    $request->statusRequestDTO = new StatusRequestDTO();
    $request->statusRequestDTO->status = StatusRequestDTOStatusEnum::SENT;
    $request->invoiceId = 301692;

    $response = $sdk->vendorInvoices->setStatus($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
