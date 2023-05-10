# report

### Available Operations

* [getreportstatusbyID](#getreportstatusbyid) - Get report status by ID
* [requestreportbyStatus](#requestreportbystatus) - Retrieve Subscription report by Status
* [requestreportbydate](#requestreportbydate) - Retrieve Subscription report by date
* [requestreportbyorderdate](#requestreportbyorderdate) - Retrieve Subscription report by order date
* [requestreportbyschedule](#requestreportbyschedule) - Retrieve Subscription report by schedule
* [requestreportbyupdate](#requestreportbyupdate) - Request report by update

## getreportstatusbyID

Retrieves the Subscription's report status, filtering by its reportId.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetreportstatusbyIDRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetreportstatusbyIDRequest();
    $request->accept = 'quibusdam';
    $request->contentType = 'unde';
    $request->reportId = 'nulla';

    $response = $sdk->report->getreportstatusbyID($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## requestreportbyStatus

Retrieves Subscriptions' reports, filtering by status. The report will be sent by email, to the address inserted in the API's path.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RequestreportbyStatusRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RequestreportbyStatusRequest();
    $request->accept = 'corrupti';
    $request->contentType = 'illum';
    $request->requesterEmail = 'user@vtex.com.br';
    $request->status = 1;

    $response = $sdk->report->requestreportbyStatus($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## requestreportbydate

Retrieves a report with the subscriptions created at the date interval requested

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RequestreportbydateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RequestreportbydateRequest();
    $request->accept = 'vel';
    $request->contentType = 'error';
    $request->beginDate = 20190101;
    $request->endDate = 20190701;
    $request->requesterEmail = 'user@vtex.com.br';

    $response = $sdk->report->requestreportbydate($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## requestreportbyorderdate

Retrieves a report regarding the Subscriptions created during the date interval of orders.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RequestreportbyorderdateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RequestreportbyorderdateRequest();
    $request->accept = 'deserunt';
    $request->contentType = 'suscipit';
    $request->beginDate = 20190101;
    $request->endDate = 20190701;
    $request->requesterEmail = 'user@vtex.com.br';

    $response = $sdk->report->requestreportbyorderdate($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## requestreportbyschedule

Retrieves a report regarding the Subscriptions scheduled to execute at the date interval requested

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RequestreportbyscheduleRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RequestreportbyscheduleRequest();
    $request->accept = 'iure';
    $request->contentType = 'magnam';
    $request->beginDate = 20190101;
    $request->endDate = 20190701;
    $request->requesterEmail = 'user@vtex.com.br';

    $response = $sdk->report->requestreportbyschedule($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## requestreportbyupdate

Retrieves a report regarding Subscriptions updated in the date interval chosen. The report will be sent by email, to the address inserted in the API's path.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RequestreportbyupdateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RequestreportbyupdateRequest();
    $request->accept = 'debitis';
    $request->contentType = 'ipsa';
    $request->beginDate = 20190101;
    $request->endDate = 20190701;
    $request->requesterEmail = 'user@vtex.com.br';

    $response = $sdk->report->requestreportbyupdate($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
