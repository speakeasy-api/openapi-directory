# miscellaneous

### Available Operations

* [addrecurrenceitem](#addrecurrenceitem) - Add Subscription item
* [getRecurrencebyemail](#getrecurrencebyemail) - Get Subscriptions
* [getRecurrencebyrecurrenceId](#getrecurrencebyrecurrenceid) - Get Subscription by recurrenceId
* [getpaymentaccounts](#getpaymentaccounts) - Get payment accounts
* [getrecurrenceaddresses](#getrecurrenceaddresses) - Get Subscription addresses
* [getrecurrencesettings](#getrecurrencesettings) - Get Subscription settings
* [getselfrecurrence](#getselfrecurrence) - Get self Subscription
* [reindexrecurrence](#reindexrecurrence) - Reindex Subscription
* [updatepartialrecurrence](#updatepartialrecurrence) - Update partial Subscription
* [updaterecurrence](#updaterecurrence) - Update Subscription
* [updaterecurrencesettings](#updaterecurrencesettings) - Update Subscription settings

## addrecurrenceitem

Adds an item to a Subscription (formerly Recurrence).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AddrecurrenceitemRequest;
use \OpenAPI\OpenAPI\Models\Shared\AddrecurrenceitemRequest;
use \OpenAPI\OpenAPI\Models\Shared\Frequency;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddrecurrenceitemRequest();
    $request->accept = 'application/json';
    $request->contentType = 'application/json';
    $request->requestBody = [
        new AddrecurrenceitemRequest(),
        new AddrecurrenceitemRequest(),
        new AddrecurrenceitemRequest(),
    ];
    $request->recurrenceId = 'quibusdam';

    $response = $sdk->miscellaneous->addrecurrenceitem($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRecurrencebyemail

Retrieves a given Subscription (formerly recurrence). There are three options of filtering your Subscruptions v1. It's possible to get a list of all Subscriptions v1, by not adding any query params to your request, and simply executing a call to the url. It is also possible to list the Subscriptions by email, filtering by the email query param. And finnally, it is possible to list recurrences with failures on the last execution cycle, filtering by the cycleStatus query param.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetRecurrencebyemailRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRecurrencebyemailRequest();
    $request->accept = 'application/json';
    $request->contentType = 'application/json';
    $request->cycleStatus = '{{cycleStatus}}';
    $request->email = '{{email}}';

    $response = $sdk->miscellaneous->getRecurrencebyemail($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRecurrencebyrecurrenceId

Retrieves a given Subscription (formerly recurrence) by recurrenceId.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetRecurrencebyrecurrenceIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRecurrencebyrecurrenceIdRequest();
    $request->accept = 'application/json';
    $request->contentType = 'application/json';
    $request->recurrenceId = 'unde';

    $response = $sdk->miscellaneous->getRecurrencebyrecurrenceId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getpaymentaccounts

Lists payment accounts of a given Subscription (formerly Recurrence) by recurrenceId.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetpaymentaccountsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetpaymentaccountsRequest();
    $request->accept = 'application/json';
    $request->contentType = 'application/json';
    $request->recurrenceid = 'nulla';

    $response = $sdk->miscellaneous->getpaymentaccounts($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getrecurrenceaddresses

Retrieves the addresses attached to a given subscription (formerly recurrence) by recurrenceId.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetrecurrenceaddressesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetrecurrenceaddressesRequest();
    $request->accept = 'application/json';
    $request->contentType = 'application/json';
    $request->recurrenceId = 'corrupti';

    $response = $sdk->miscellaneous->getrecurrenceaddresses($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getrecurrencesettings

Retrieves your store's Subscriptions' (formerly recurrence) settings.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetrecurrencesettingsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetrecurrencesettingsRequest();
    $request->accept = 'application/json';
    $request->contentType = 'application/json';

    $response = $sdk->miscellaneous->getrecurrencesettings($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getselfrecurrence

Lists details of your self Subscription (formerly Recurrence).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetselfrecurrenceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetselfrecurrenceRequest();
    $request->accept = 'application/json';
    $request->contentType = 'application/json';

    $response = $sdk->miscellaneous->getselfrecurrence($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reindexrecurrence

Alters the frequency of a given Subscription (formerly Recurrence) by changing period and interval.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ReindexrecurrenceRequest;
use \OpenAPI\OpenAPI\Models\Shared\ReindexrecurrenceRequest;
use \OpenAPI\OpenAPI\Models\Shared\Frequency;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReindexrecurrenceRequest();
    $request->accept = 'application/json';
    $request->contentType = 'application/json';
    $request->requestBody = [
        new ReindexrecurrenceRequest(),
        new ReindexrecurrenceRequest(),
        new ReindexrecurrenceRequest(),
        new ReindexrecurrenceRequest(),
    ];
    $request->recurrenceId = 'vel';

    $response = $sdk->miscellaneous->reindexrecurrence($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updatepartialrecurrence

Updates partial information of a given subscription (formerly Recurrence).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdatepartialrecurrenceRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdatepartialrecurrenceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdatepartialrecurrenceRequest();
    $request->accept = 'application/json';
    $request->contentType = 'application/json';
    $request->updatepartialrecurrenceRequest = new UpdatepartialrecurrenceRequest();
    $request->updatepartialrecurrenceRequest->deliveryDay = 623564;
    $request->updatepartialrecurrenceRequest->deliveryWeekday = 'deserunt';
    $request->updatepartialrecurrenceRequest->status = 'suscipit';
    $request->recurrenceId = 'iure';

    $response = $sdk->miscellaneous->updatepartialrecurrence($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updaterecurrence

Updates details of a given Subscription (formerly recurrence).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdaterecurrenceRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdaterecurrenceRequest;
use \OpenAPI\OpenAPI\Models\Shared\Item;
use \OpenAPI\OpenAPI\Models\Shared\Frequency;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdaterecurrenceRequest();
    $request->accept = 'application/json';
    $request->contentType = 'application/json';
    $request->updaterecurrenceRequest = new UpdaterecurrenceRequest();
    $request->updaterecurrenceRequest->deliveryDay = 297534;
    $request->updaterecurrenceRequest->deliveryWeekday = 'debitis';
    $request->updaterecurrenceRequest->email = 'Vincenzo.Goldner@gmail.com';
    $request->updaterecurrenceRequest->items = [
        new Item(),
        new Item(),
        new Item(),
        new Item(),
    ];
    $request->updaterecurrenceRequest->paymentAccountId = 'placeat';

    $response = $sdk->miscellaneous->updaterecurrence($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updaterecurrencesettings

Updates the Subscriptions' (formerly Recurrence) settings of your store by salesChannel and defaultSLA.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdaterecurrencesettingsRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdaterecurrencesettingsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdaterecurrencesettingsRequest();
    $request->accept = 'application/json';
    $request->contentType = 'application/json';
    $request->updaterecurrencesettingsRequest = new UpdaterecurrencesettingsRequest();
    $request->updaterecurrencesettingsRequest->defaultSLA = 'voluptatum';
    $request->updaterecurrencesettingsRequest->salesChannel = 'iusto';

    $response = $sdk->miscellaneous->updaterecurrencesettings($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
