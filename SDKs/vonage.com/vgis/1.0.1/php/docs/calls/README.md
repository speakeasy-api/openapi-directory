# calls

### Available Operations

* [callAnswer](#callanswer) - Answer call (On supported devices)
* [callHold](#callhold) - Put call on hold
* [callTransfer](#calltransfer) - Transfer call
* [callUnold](#callunold) - Unhold
* [callVMTransfer](#callvmtransfer) - Send call to voicemail
* [createCall](#createcall) - Place a call
* [destroyCall](#destroycall) - End a call
* [getCallsCount](#getcallscount) - Get calls count
* [getRoles](#getroles) - Get a call
* [listCalls](#listcalls) - List active calls

## callAnswer

Answer call (On supported devices)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CallAnswerRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CallAnswerRequest();
    $request->id = '89bd9d8d-69a6-474e-8f46-7cc8796ed151';

    $response = $sdk->calls->callAnswer($request);

    if ($response->call !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## callHold

Put call on hold

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CallHoldRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CallHoldRequest();
    $request->id = 'a05dfc2d-df7c-4c78-8a1b-a928fc816742';

    $response = $sdk->calls->callHold($request);

    if ($response->call !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## callTransfer

Transfer call

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CallTransferRequest;
use \OpenAPI\OpenAPI\Models\Shared\CallTransfer;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CallTransferRequest();
    $request->callTransfer = new CallTransfer();
    $request->callTransfer->phoneNumber = 'impedit';
    $request->id = 'b7392059-2939-46fe-a759-6eb10faaa235';

    $response = $sdk->calls->callTransfer($request);

    if ($response->call !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## callUnold

Unhold

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CallUnoldRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CallUnoldRequest();
    $request->id = '2c595590-7aff-41a3-a2fa-9467739251aa';

    $response = $sdk->calls->callUnold($request);

    if ($response->call !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## callVMTransfer

Send call to voicemail

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CallVMTransferRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CallVMTransferRequest();
    $request->id = '52c3f5ad-019d-4a1f-be78-f097b0074f15';

    $response = $sdk->calls->callVMTransfer($request);

    if ($response->call !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createCall

Place a call

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\CallCreate;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CallCreate();
    $request->phoneNumber = 'dolore';

    $response = $sdk->calls->createCall($request);

    if ($response->calls !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## destroyCall

End a call

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DestroyCallRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DestroyCallRequest();
    $request->id = '71b5e6e1-3b99-4d48-8e1e-91e450ad2abd';

    $response = $sdk->calls->destroyCall($request);

    if ($response->calls !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCallsCount

Get calls count

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCallsCountRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetCallsCountDirectionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetCallsCountStatesEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCallsCountRequest();
    $request->direction = GetCallsCountDirectionEnum::INBOUND;
    $request->fromDate = 264730;
    $request->states = GetCallsCountStatesEnum::INITIALIZING;
    $request->toDate = 397821;

    $response = $sdk->calls->getCallsCount($request);

    if ($response->eventsCount !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRoles

Get a call

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRolesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRolesRequest();
    $request->id = '9802d502-a94b-4b4f-a3c9-69e9a3efa77d';

    $response = $sdk->calls->getRoles($request);

    if ($response->calls !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listCalls

Lists currently active calls

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListCallsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListCallsDirectionEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListCallsOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListCallsStatesEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListCallsRequest();
    $request->direction = ListCallsDirectionEnum::OUTBOUND;
    $request->fromDate = 699479;
    $request->offset = 116202;
    $request->order = ListCallsOrderEnum::DESC;
    $request->size = 767024;
    $request->sort = 'facere';
    $request->states = ListCallsStatesEnum::ACTIVE;
    $request->toDate = 396506;

    $response = $sdk->calls->listCalls($request);

    if ($response->calls !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
