# task

### Available Operations

* [addComment](#addcomment) - Add Comment on a Task
* [editTask](#edittask) - Update Task
* [getTask](#gettask) - Retrieve Task
* [listtasksbyassignee](#listtasksbyassignee) - List tasks
* [newTask](#newtask) - Create Task

## addComment

Adds a comment to a given task, filtering by `taskId`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AddCommentRequest;
use \OpenAPI\OpenAPI\Models\Shared\AddCommentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddCommentRequest();
    $request->accept = 'application/json';
    $request->addCommentRequest = new AddCommentRequest();
    $request->addCommentRequest->text = 'corrupti';
    $request->contentType = 'application/json';
    $request->taskId = '123456abc';

    $response = $sdk->task->addComment($request);

    if ($response->addComment200ApplicationJSONAny !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## editTask

Updates a given task's status, for example, filtering by `taskId`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\EditTaskRequest;
use \OpenAPI\OpenAPI\Models\Shared\EditTaskRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EditTaskRequest();
    $request->accept = 'application/json';
    $request->contentType = 'application/json';
    $request->editTaskRequest = new EditTaskRequest();
    $request->editTaskRequest->status = 'provident';
    $request->taskId = '123456abc';

    $response = $sdk->task->editTask($request);

    if ($response->editTask200ApplicationJSONAny !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTask

Retrieves a given task, filtering by `taskId`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTaskRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTaskRequest();
    $request->accept = 'application/json';
    $request->contentType = 'application/json';
    $request->taskId = '123456abc';

    $response = $sdk->task->getTask($request);

    if ($response->getTask200ApplicationJSONAny !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listtasksbyassignee

This endpoint allows you to filter tasks. You can choose between the following filtering options: 

- **Assignees:** using `assignee.email` and `status`. Example: `https://{{accountName}}.{{environment}}.com.br/api/do/tasks?assignee.email={{person@email.com}}&status={{open}}`. 

- **Targets:** using `targetId` and `status`. Example: `https://{{accountName}}.{{environment}}.com.br/api/do/tasks?target.id={{name}}&status={{open}}`. 

- **Paged tasks:** using `page`, `perPage` and `status`. Example: `https://{{accountName}}.{{environment}}.com.br/api/do/tasks?page={{1}}&perPage={{10}}&status=;{{-Closed}}`. 

- **Context:** using `context`, `page`, `perPage` and `status`. Example: `https://{{accountName}}.{{environment}}.com.br/api/do/tasks?context={{context}}&page={{1}}&perPage={{10}}&status={{-Closed}}`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListtasksbyassigneeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListtasksbyassigneeRequest();
    $request->accept = 'application/json';
    $request->contentType = 'application/json';
    $request->assigneeEmail = '{{assigneeEmail}}';
    $request->context = '{{context}}';
    $request->page = '{{page}}';
    $request->perPage = '{{desired number per page}}';
    $request->status = 'open';
    $request->targetId = '{{targetId}}';

    $response = $sdk->task->listtasksbyassignee($request);

    if ($response->listtasksbyassignee200ApplicationJSONAny !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## newTask

Creates a new task in VTEX DO.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\NewTaskRequest;
use \OpenAPI\OpenAPI\Models\Shared\NewTaskRequest;
use \OpenAPI\OpenAPI\Models\Shared\Assignee;
use \OpenAPI\OpenAPI\Models\Shared\Follower;
use \OpenAPI\OpenAPI\Models\Shared\Target;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NewTaskRequest();
    $request->accept = 'application/json';
    $request->contentType = 'application/json';
    $request->newTaskRequest = new NewTaskRequest();
    $request->newTaskRequest->assignee = new Assignee();
    $request->newTaskRequest->assignee->email = 'Rosalinda_Mitchell84@hotmail.com';
    $request->newTaskRequest->assignee->id = '69a674e0-f467-4cc8-b96e-d151a05dfc2d';
    $request->newTaskRequest->assignee->name = 'Emilio Krajcik';
    $request->newTaskRequest->context = 'esse';
    $request->newTaskRequest->description = 'totam';
    $request->newTaskRequest->domain = 'porro';
    $request->newTaskRequest->dueDate = 'dolorum';
    $request->newTaskRequest->followers = [
        new Follower(),
    ];
    $request->newTaskRequest->name = 'Luke McCullough';
    $request->newTaskRequest->parentTaskId = 'hic';
    $request->newTaskRequest->priority = 'optio';
    $request->newTaskRequest->surrogateKey = 'totam';
    $request->newTaskRequest->target = [
        new Target(),
    ];

    $response = $sdk->task->newTask($request);

    if ($response->newTask200ApplicationJSONAny !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
