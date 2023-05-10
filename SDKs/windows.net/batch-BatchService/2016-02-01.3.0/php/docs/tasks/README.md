# tasks

### Available Operations

* [taskAdd](#taskadd) - Adds a task to the specified job.
* [taskAddCollection](#taskaddcollection) - Adds a collection of tasks to the specified job.
* [taskDelete](#taskdelete) - Deletes a task from the specified job.
* [taskGet](#taskget) - Gets information about the specified task.
* [taskList](#tasklist) - Lists all of the tasks that are associated with the specified job.
* [taskListSubtasks](#tasklistsubtasks) - Lists all of the subtasks that are associated with the specified multi-instance task.
* [taskTerminate](#taskterminate) - Terminates the specified task.
* [taskUpdate](#taskupdate) - Updates the properties of the specified task.

## taskAdd

Adds a task to the specified job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TaskAddRequest;
use \OpenAPI\OpenAPI\Models\Shared\TaskAddParameter;
use \OpenAPI\OpenAPI\Models\Shared\AffinityInformation;
use \OpenAPI\OpenAPI\Models\Shared\TaskConstraints;
use \OpenAPI\OpenAPI\Models\Shared\TaskDependencies;
use \OpenAPI\OpenAPI\Models\Shared\TaskIdRange;
use \OpenAPI\OpenAPI\Models\Shared\EnvironmentSetting;
use \OpenAPI\OpenAPI\Models\Shared\MultiInstanceSettings;
use \OpenAPI\OpenAPI\Models\Shared\ResourceFile;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TaskAddRequest();
    $request->taskAddParameter = new TaskAddParameter();
    $request->taskAddParameter->affinityInfo = new AffinityInformation();
    $request->taskAddParameter->affinityInfo->affinityId = 'architecto';
    $request->taskAddParameter->commandLine = 'fugiat';
    $request->taskAddParameter->constraints = new TaskConstraints();
    $request->taskAddParameter->constraints->maxTaskRetryCount = 39650;
    $request->taskAddParameter->constraints->maxWallClockTime = 'dicta';
    $request->taskAddParameter->constraints->retentionTime = 'odio';
    $request->taskAddParameter->dependsOn = new TaskDependencies();
    $request->taskAddParameter->dependsOn->taskIdRanges = [
        new TaskIdRange(),
        new TaskIdRange(),
    ];
    $request->taskAddParameter->dependsOn->taskIds = [
        'ex',
        'consectetur',
    ];
    $request->taskAddParameter->displayName = 'aliquid';
    $request->taskAddParameter->environmentSettings = [
        new EnvironmentSetting(),
    ];
    $request->taskAddParameter->id = 'a15db6a6-6065-49a1-adea-ab5851d6c645';
    $request->taskAddParameter->multiInstanceSettings = new MultiInstanceSettings();
    $request->taskAddParameter->multiInstanceSettings->commonResourceFiles = [
        new ResourceFile(),
        new ResourceFile(),
        new ResourceFile(),
    ];
    $request->taskAddParameter->multiInstanceSettings->coordinationCommandLine = 'voluptatem';
    $request->taskAddParameter->multiInstanceSettings->numberOfInstances = 561577;
    $request->taskAddParameter->resourceFiles = [
        new ResourceFile(),
        new ResourceFile(),
        new ResourceFile(),
    ];
    $request->taskAddParameter->runElevated = false;
    $request->apiVersion = 'aliquid';
    $request->clientRequestId = 'beatae';
    $request->jobId = 'voluptatum';
    $request->ocpDate = 'omnis';
    $request->returnClientRequestId = false;
    $request->timeout = 85233;

    $response = $sdk->tasks->taskAdd($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## taskAddCollection

Adds a collection of tasks to the specified job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TaskAddCollectionRequest;
use \OpenAPI\OpenAPI\Models\Shared\TaskAddCollectionParameter;
use \OpenAPI\OpenAPI\Models\Shared\TaskAddParameter;
use \OpenAPI\OpenAPI\Models\Shared\AffinityInformation;
use \OpenAPI\OpenAPI\Models\Shared\TaskConstraints;
use \OpenAPI\OpenAPI\Models\Shared\TaskDependencies;
use \OpenAPI\OpenAPI\Models\Shared\TaskIdRange;
use \OpenAPI\OpenAPI\Models\Shared\EnvironmentSetting;
use \OpenAPI\OpenAPI\Models\Shared\MultiInstanceSettings;
use \OpenAPI\OpenAPI\Models\Shared\ResourceFile;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TaskAddCollectionRequest();
    $request->taskAddCollectionParameter = new TaskAddCollectionParameter();
    $request->taskAddCollectionParameter->value = [
        new TaskAddParameter(),
        new TaskAddParameter(),
        new TaskAddParameter(),
    ];
    $request->apiVersion = 'est';
    $request->clientRequestId = 'culpa';
    $request->jobId = 'voluptatem';
    $request->ocpDate = 'sapiente';
    $request->returnClientRequestId = false;
    $request->timeout = 889288;

    $response = $sdk->tasks->taskAddCollection($request);

    if ($response->taskAddCollectionResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## taskDelete

Deletes a task from the specified job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TaskDeleteRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TaskDeleteRequest();
    $request->ifMatch = 'architecto';
    $request->ifModifiedSince = 'fuga';
    $request->ifNoneMatch = 'pariatur';
    $request->ifUnmodifiedSince = 'debitis';
    $request->apiVersion = 'voluptatem';
    $request->clientRequestId = 'alias';
    $request->jobId = 'deleniti';
    $request->ocpDate = 'earum';
    $request->returnClientRequestId = false;
    $request->taskId = 'ex';
    $request->timeout = 958308;

    $response = $sdk->tasks->taskDelete($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## taskGet

Gets information about the specified task.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TaskGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TaskGetRequest();
    $request->dollarExpand = 'rem';
    $request->dollarSelect = 'minus';
    $request->ifMatch = 'nemo';
    $request->ifModifiedSince = 'asperiores';
    $request->ifNoneMatch = 'ratione';
    $request->ifUnmodifiedSince = 'ullam';
    $request->apiVersion = 'perferendis';
    $request->clientRequestId = 'illum';
    $request->jobId = 'totam';
    $request->ocpDate = 'impedit';
    $request->returnClientRequestId = false;
    $request->taskId = 'quibusdam';
    $request->timeout = 720528;

    $response = $sdk->tasks->taskGet($request);

    if ($response->cloudTask !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## taskList

Lists all of the tasks that are associated with the specified job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TaskListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TaskListRequest();
    $request->dollarExpand = 'ipsam';
    $request->dollarFilter = 'culpa';
    $request->dollarSelect = 'dolor';
    $request->apiVersion = 'aliquam';
    $request->clientRequestId = 'inventore';
    $request->jobId = 'deleniti';
    $request->maxresults = 85311;
    $request->ocpDate = 'tempora';
    $request->returnClientRequestId = false;
    $request->timeout = 221396;

    $response = $sdk->tasks->taskList($request);

    if ($response->cloudTaskListResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## taskListSubtasks

Lists all of the subtasks that are associated with the specified multi-instance task.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TaskListSubtasksRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TaskListSubtasksRequest();
    $request->dollarSelect = 'consequatur';
    $request->apiVersion = 'architecto';
    $request->clientRequestId = 'sit';
    $request->jobId = 'modi';
    $request->ocpDate = 'fugit';
    $request->returnClientRequestId = false;
    $request->taskId = 'ab';
    $request->timeout = 513760;

    $response = $sdk->tasks->taskListSubtasks($request);

    if ($response->cloudTaskListSubtasksResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## taskTerminate

Terminates the specified task.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TaskTerminateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TaskTerminateRequest();
    $request->ifMatch = 'quae';
    $request->ifModifiedSince = 'dolor';
    $request->ifNoneMatch = 'fugiat';
    $request->ifUnmodifiedSince = 'ipsam';
    $request->apiVersion = 'consequuntur';
    $request->clientRequestId = 'ipsa';
    $request->jobId = 'quas';
    $request->ocpDate = 'eveniet';
    $request->returnClientRequestId = false;
    $request->taskId = 'impedit';
    $request->timeout = 884952;

    $response = $sdk->tasks->taskTerminate($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## taskUpdate

Updates the properties of the specified task.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TaskUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\TaskUpdateParameter;
use \OpenAPI\OpenAPI\Models\Shared\TaskConstraints;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TaskUpdateRequest();
    $request->ifMatch = 'esse';
    $request->ifModifiedSince = 'necessitatibus';
    $request->ifNoneMatch = 'sed';
    $request->ifUnmodifiedSince = 'veniam';
    $request->taskUpdateParameter = new TaskUpdateParameter();
    $request->taskUpdateParameter->constraints = new TaskConstraints();
    $request->taskUpdateParameter->constraints->maxTaskRetryCount = 199596;
    $request->taskUpdateParameter->constraints->maxWallClockTime = 'expedita';
    $request->taskUpdateParameter->constraints->retentionTime = 'eum';
    $request->apiVersion = 'vel';
    $request->clientRequestId = 'voluptatum';
    $request->jobId = 'magnam';
    $request->ocpDate = 'exercitationem';
    $request->returnClientRequestId = false;
    $request->taskId = 'ab';
    $request->timeout = 781480;

    $response = $sdk->tasks->taskUpdate($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
