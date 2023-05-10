# transactionProcess

## Overview

This is meant to explain the requests that are necessary to complete a transaction using PCI Gateway.

### Available Operations

* [oneCreateanewtransaction](#onecreateanewtransaction) - 1. Starts a new transaction
* [twoSendPaymentsPublic](#twosendpaymentspublic) - 2.1 Send Payments Information Public
* [twoSendPaymentsWithSavedCreditCard](#twosendpaymentswithsavedcreditcard) - 2.2 Send Payments With Saved Credit Card
* [threeSendAdditionalData](#threesendadditionaldata) - 3. Send Additional Data
* [fourDoauthorization](#fourdoauthorization) - Do authorization
* [paymentDetails](#paymentdetails) - Payment Details
* [transactionDetails](#transactiondetails) - Transaction Details
* [transactionSettlementDetails](#transactionsettlementdetails) - Transaction Settlement  Details

## oneCreateanewtransaction

This request is the first step to create a new transaction.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\OneCreateanewtransactionRequest;
use \OpenAPI\OpenAPI\Models\Shared\OneCreateanewtransactionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OneCreateanewtransactionRequest();
    $request->oneCreateanewtransactionRequest = new OneCreateanewtransactionRequest();
    $request->oneCreateanewtransactionRequest->channel = 'accusamus';
    $request->oneCreateanewtransactionRequest->referenceId = 'commodi';
    $request->oneCreateanewtransactionRequest->salesChannel = 'repudiandae';
    $request->oneCreateanewtransactionRequest->urn = 'quae';
    $request->oneCreateanewtransactionRequest->value = 216822;
    $request->accept = 'application/json';
    $request->contentType = 'application/json';
    $request->xPROVIDERAPIAppKey = '{{X-PROVIDER-API-AppKey}}';
    $request->xPROVIDERAPIAppToken = '{{X-PROVIDER-API-AppToken}}';

    $response = $sdk->transactionProcess->oneCreateanewtransaction($request);

    if ($response->startTransactionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## twoSendPaymentsPublic

The second step to create a new transaction. Here, you have the option to send the data in three diferent ways: doing a private request, a public request or a private request that uses a saved Credit Card. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TwoSendPaymentsPublicRequest;
use \OpenAPI\OpenAPI\Models\Shared\TwoSendPaymentsPublicRequest;
use \OpenAPI\OpenAPI\Models\Shared\Fields;
use \OpenAPI\OpenAPI\Models\Shared\Transaction;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TwoSendPaymentsPublicRequest();
    $request->accept = 'application/json';
    $request->contentType = 'application/json';
    $request->requestBody = [
        new TwoSendPaymentsPublicRequest(),
        new TwoSendPaymentsPublicRequest(),
        new TwoSendPaymentsPublicRequest(),
    ];
    $request->xPROVIDERAPIAppKey = '{{X-PROVIDER-API-AppKey}}';
    $request->xPROVIDERAPIAppToken = '{{X-PROVIDER-API-AppToken}}';
    $request->orderId = '{{orderId}}';
    $request->transactionId = 'molestias';

    $response = $sdk->transactionProcess->twoSendPaymentsPublic($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## twoSendPaymentsWithSavedCreditCard

The second step to create a new transaction. Here, you have the option to send the data in three diferent ways: doing a private request, a public request or a private request that uses a saved Credit Card.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TwoSendPaymentsWithSavedCreditCardRequest;
use \OpenAPI\OpenAPI\Models\Shared\TwoSendPaymentsWithSavedCreditCardRequest;
use \OpenAPI\OpenAPI\Models\Shared\Fields3;
use \OpenAPI\OpenAPI\Models\Shared\Transaction;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TwoSendPaymentsWithSavedCreditCardRequest();
    $request->accept = 'application/json';
    $request->contentType = 'application/json';
    $request->requestBody = [
        new TwoSendPaymentsWithSavedCreditCardRequest(),
        new TwoSendPaymentsWithSavedCreditCardRequest(),
        new TwoSendPaymentsWithSavedCreditCardRequest(),
    ];
    $request->xPROVIDERAPIAppKey = '{{X-PROVIDER-API-AppKey}}';
    $request->xPROVIDERAPIAppToken = '{{X-PROVIDER-API-AppToken}}';
    $request->transactionId = 'pariatur';

    $response = $sdk->transactionProcess->twoSendPaymentsWithSavedCreditCard($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## threeSendAdditionalData

The third step to create a new transaction. It will send the additional related data to the transaction, like billig and shipping adress.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ThreeSendAdditionalDataRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ThreeSendAdditionalDataRequest();
    $request->accept = 'application/json';
    $request->contentType = 'application/json';
    $request->requestBody = [
        [
            'rem',
            'voluptates',
            'quasi',
        ],
        [
            'sint',
            'veritatis',
            'itaque',
            'incidunt',
        ],
    ];
    $request->xPROVIDERAPIAppKey = '{{X-PROVIDER-API-AppKey}}';
    $request->xPROVIDERAPIAppToken = '{{X-PROVIDER-API-AppToken}}';
    $request->transactionId = 'enim';

    $response = $sdk->transactionProcess->threeSendAdditionalData($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fourDoauthorization

The fouth and last step to create a new transaction. It will authorized the new transction creation acorrdint to the data previously informed in the latests requests.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\FourDoauthorizationRequest;
use \OpenAPI\OpenAPI\Models\Shared\FourDoauthorizationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FourDoauthorizationRequest();
    $request->fourDoauthorizationRequest = new FourDoauthorizationRequest();
    $request->fourDoauthorizationRequest->prepareForRecurrency = false;
    $request->fourDoauthorizationRequest->softDescriptor = 'consequatur';
    $request->fourDoauthorizationRequest->transactionId = 'est';
    $request->accept = 'application/json';
    $request->contentType = 'application/json';
    $request->xPROVIDERAPIAppKey = '{{X-PROVIDER-API-AppKey}}';
    $request->xPROVIDERAPIAppToken = '{{X-PROVIDER-API-AppToken}}';
    $request->transactionId = 'quibusdam';

    $response = $sdk->transactionProcess->fourDoauthorization($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## paymentDetails

Returns associated information details for the specified payment id.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PaymentDetailsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PaymentDetailsRequest();
    $request->accept = 'application/json';
    $request->contentType = 'application/json';
    $request->xPROVIDERAPIAppKey = '{{X-PROVIDER-API-AppKey}}';
    $request->xPROVIDERAPIAppToken = '{{X-PROVIDER-API-AppToken}}';
    $request->paymentId = 'explicabo';
    $request->transactionId = 'deserunt';

    $response = $sdk->transactionProcess->paymentDetails($request);

    if ($response->paymentDetailsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## transactionDetails

Returns associated data for the specified transaction id, like value and status, for exemple.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TransactionDetailsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TransactionDetailsRequest();
    $request->accept = 'application/json';
    $request->contentType = 'application/json';
    $request->xPROVIDERAPIAppKey = '{{X-PROVIDER-API-AppKey}}';
    $request->xPROVIDERAPIAppToken = '{{X-PROVIDER-API-AppToken}}';
    $request->transactionId = 'distinctio';

    $response = $sdk->transactionProcess->transactionDetails($request);

    if ($response->transactionDetailsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## transactionSettlementDetails

Returns associated settlements data for the specified transaction id.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TransactionSettlementDetailsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TransactionSettlementDetailsRequest();
    $request->accept = 'application/json';
    $request->contentType = 'application/json';
    $request->xPROVIDERAPIAppKey = '{{X-PROVIDER-API-AppKey}}';
    $request->xPROVIDERAPIAppToken = '{{X-PROVIDER-API-AppToken}}';
    $request->transactionId = 'quibusdam';

    $response = $sdk->transactionProcess->transactionSettlementDetails($request);

    if ($response->transactionSettlementDetails !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
