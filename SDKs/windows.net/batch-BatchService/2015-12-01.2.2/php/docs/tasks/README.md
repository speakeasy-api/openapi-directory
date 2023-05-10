# tasks

### Available Operations

* [taskAdd](#taskadd) - Adds a task to the specified job.
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
    $request->taskAddParameter->affinityInfo->affinityId = 'at';
    $request->taskAddParameter->commandLine = 'impedit';
    $request->taskAddParameter->constraints = new TaskConstraints();
    $request->taskAddParameter->constraints->maxTaskRetryCount = 179410;
    $request->taskAddParameter->constraints->maxWallClockTime = 'sapiente';
    $request->taskAddParameter->constraints->retentionTime = 'eum';
    $request->taskAddParameter->dependsOn = new TaskDependencies();
    $request->taskAddParameter->dependsOn->taskIdRanges = [
        new TaskIdRange(),
    ];
    $request->taskAddParameter->dependsOn->taskIds = [
        'beatae',
        'cupiditate',
    ];
    $request->taskAddParameter->displayName = 'provident';
    $request->taskAddParameter->environmentSettings = [
        new EnvironmentSetting(),
        new EnvironmentSetting(),
        new EnvironmentSetting(),
        new EnvironmentSetting(),
    ];
    $request->taskAddParameter->id = 'bfd0e9fe-6c63-42ca-baed-0117996312fd';
    $request->taskAddParameter->multiInstanceSettings = new MultiInstanceSettings();
    $request->taskAddParameter->multiInstanceSettings->commonResourceFiles = [
        new ResourceFile(),
        new ResourceFile(),
        new ResourceFile(),
        new ResourceFile(),
    ];
    $request->taskAddParameter->multiInstanceSettings->coordinationCommandLine = 'ipsa';
    $request->taskAddParameter->multiInstanceSettings->numberOfInstances = 271113;
    $request->taskAddParameter->resourceFiles = [
        new ResourceFile(),
        new ResourceFile(),
    ];
    $request->taskAddParameter->runElevated = false;
    $request->apiVersion = 'molestiae';
    $request->clientRequestId = 'dicta';
    $request->jobId = 'iusto';
    $request->ocpDate = 'esse';
    $request->returnClientRequestId = false;
    $request->timeout = 508390;

    $response = $sdk->tasks->taskAdd($request);

    if ($response->statusCode === 200) {
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
    $request->ifMatch = 'maiores';
    $request->ifModifiedSince = 'reiciendis';
    $request->ifNoneMatch = 'vel';
    $request->ifUnmodifiedSince = 'architecto';
    $request->apiVersion = 'fugiat';
    $request->clientRequestId = 'doloremque';
    $request->jobId = 'dicta';
    $request->ocpDate = 'odio';
    $request->returnClientRequestId = false;
    $request->taskId = 'tempora';
    $request->timeout = 458259;

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
    $request->dollarExpand = 'ex';
    $request->dollarSelect = 'consectetur';
    $request->ifMatch = 'aliquid';
    $request->ifModifiedSince = 'ipsa';
    $request->ifNoneMatch = 'laborum';
    $request->ifUnmodifiedSince = 'sunt';
    $request->apiVersion = 'nostrum';
    $request->clientRequestId = 'fugiat';
    $request->jobId = 'expedita';
    $request->ocpDate = 'aliquid';
    $request->returnClientRequestId = false;
    $request->taskId = 'officia';
    $request->timeout = 381397;

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
    $request->dollarExpand = 'aliquid';
    $request->dollarFilter = 'perferendis';
    $request->dollarSelect = 'eum';
    $request->apiVersion = 'voluptas';
    $request->clientRequestId = 'iste';
    $request->jobId = 'id';
    $request->maxresults = 70042;
    $request->ocpDate = 'error';
    $request->returnClientRequestId = false;
    $request->timeout = 822407;

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
    $request->dollarSelect = 'voluptates';
    $request->apiVersion = 'mollitia';
    $request->clientRequestId = 'laborum';
    $request->jobId = 'libero';
    $request->ocpDate = 'ad';
    $request->returnClientRequestId = false;
    $request->taskId = 'deleniti';
    $request->timeout = 316220;

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
    $request->ifMatch = 'vitae';
    $request->ifModifiedSince = 'repellendus';
    $request->ifNoneMatch = 'ex';
    $request->ifUnmodifiedSince = 'quo';
    $request->apiVersion = 'ex';
    $request->clientRequestId = 'ut';
    $request->jobId = 'ad';
    $request->ocpDate = 'expedita';
    $request->returnClientRequestId = false;
    $request->taskId = 'voluptatem';
    $request->timeout = 561577;

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
    $request->ifMatch = 'cum';
    $request->ifModifiedSince = 'aliquid';
    $request->ifNoneMatch = 'beatae';
    $request->ifUnmodifiedSince = 'voluptatum';
    $request->taskUpdateParameter = new TaskUpdateParameter();
    $request->taskUpdateParameter->constraints = new TaskConstraints();
    $request->taskUpdateParameter->constraints->maxTaskRetryCount = 606308;
    $request->taskUpdateParameter->constraints->maxWallClockTime = 'veritatis';
    $request->taskUpdateParameter->constraints->retentionTime = 'rerum';
    $request->apiVersion = 'est';
    $request->clientRequestId = 'culpa';
    $request->jobId = 'voluptatem';
    $request->ocpDate = 'sapiente';
    $request->returnClientRequestId = false;
    $request->taskId = 'officiis';
    $request->timeout = 103298;

    $response = $sdk->tasks->taskUpdate($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
