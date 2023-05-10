# events

### Available Operations

* [getEvent](#getevent) - Get event
* [getEventsCount](#geteventscount) - Get events count
* [listEvents](#listevents) - List events

## getEvent

Get event

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetEventRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEventRequest();
    $request->id = 'ae395efb-9ba8-48f3-a669-97074ba4469b';

    $response = $sdk->events->getEvent($request);

    if ($response->events !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEventsCount

Get events count

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetEventsCountRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetEventsCountDirectionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetEventsCountStatesEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEventsCountRequest();
    $request->direction = GetEventsCountDirectionEnum::INBOUND;
    $request->fromDate = 878453;
    $request->states = GetEventsCountStatesEnum::INITIALIZING;
    $request->toDate = 102863;

    $response = $sdk->events->getEventsCount($request);

    if ($response->eventsCount !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listEvents

List events

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListEventsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListEventsDirectionEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListEventsOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListEventsStatesEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListEventsTypesEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListEventsRequest();
    $request->direction = ListEventsDirectionEnum::INBOUND;
    $request->fromDate = 92373;
    $request->offset = 569965;
    $request->order = ListEventsOrderEnum::DESC;
    $request->size = 590873;
    $request->sort = 'quos';
    $request->states = ListEventsStatesEnum::DETACHED;
    $request->toDate = 33625;
    $request->types = ListEventsTypesEnum::CALL;

    $response = $sdk->events->listEvents($request);

    if ($response->events !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
