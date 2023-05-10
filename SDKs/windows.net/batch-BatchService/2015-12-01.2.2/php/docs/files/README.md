# files

### Available Operations

* [fileDeleteFromComputeNode](#filedeletefromcomputenode) - Deletes the specified task file from the compute node.
* [fileDeleteFromTask](#filedeletefromtask) - Deletes the specified task file from the compute node where the task ran.
* [fileGetFromComputeNode](#filegetfromcomputenode) - Gets the content of the specified task file.
* [fileGetFromTask](#filegetfromtask) - Gets the content of the specified task file.
* [fileGetNodeFilePropertiesFromComputeNode](#filegetnodefilepropertiesfromcomputenode) - Gets the properties of the specified compute node file.
* [fileGetNodeFilePropertiesFromTask](#filegetnodefilepropertiesfromtask) - Gets the properties of the specified task file.
* [fileListFromComputeNode](#filelistfromcomputenode) - Lists all of the files in task directories on the specified compute node.
* [fileListFromTask](#filelistfromtask) - Lists the files in a task's directory on its compute node.

## fileDeleteFromComputeNode

Deletes the specified task file from the compute node.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FileDeleteFromComputeNodeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FileDeleteFromComputeNodeRequest();
    $request->apiVersion = 'reprehenderit';
    $request->clientRequestId = 'ut';
    $request->fileName = 'maiores';
    $request->nodeId = 'dicta';
    $request->ocpDate = 'corporis';
    $request->poolId = 'dolore';
    $request->recursive = false;
    $request->returnClientRequestId = false;
    $request->timeout = 480894;

    $response = $sdk->files->fileDeleteFromComputeNode($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fileDeleteFromTask

Deletes the specified task file from the compute node where the task ran.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FileDeleteFromTaskRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FileDeleteFromTaskRequest();
    $request->apiVersion = 'dicta';
    $request->clientRequestId = 'harum';
    $request->fileName = 'enim';
    $request->jobId = 'accusamus';
    $request->ocpDate = 'commodi';
    $request->recursive = false;
    $request->returnClientRequestId = false;
    $request->taskId = 'repudiandae';
    $request->timeout = 64147;

    $response = $sdk->files->fileDeleteFromTask($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fileGetFromComputeNode

Gets the content of the specified task file.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FileGetFromComputeNodeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FileGetFromComputeNodeRequest();
    $request->ifModifiedSince = 'ipsum';
    $request->ifUnmodifiedSince = 'quidem';
    $request->apiVersion = 'molestias';
    $request->clientRequestId = 'excepturi';
    $request->fileName = 'pariatur';
    $request->nodeId = 'modi';
    $request->ocpDate = 'praesentium';
    $request->ocpRange = 'rem';
    $request->poolId = 'voluptates';
    $request->returnClientRequestId = false;
    $request->timeout = 93940;

    $response = $sdk->files->fileGetFromComputeNode($request);

    if ($response->fileGetFromComputeNode200ApplicationJSONBinaryString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fileGetFromTask

Gets the content of the specified task file.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FileGetFromTaskRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FileGetFromTaskRequest();
    $request->ifModifiedSince = 'repudiandae';
    $request->ifUnmodifiedSince = 'sint';
    $request->apiVersion = 'veritatis';
    $request->clientRequestId = 'itaque';
    $request->fileName = 'incidunt';
    $request->jobId = 'enim';
    $request->ocpDate = 'consequatur';
    $request->ocpRange = 'est';
    $request->returnClientRequestId = false;
    $request->taskId = 'quibusdam';
    $request->timeout = 131797;

    $response = $sdk->files->fileGetFromTask($request);

    if ($response->fileGetFromTask200ApplicationJSONBinaryString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fileGetNodeFilePropertiesFromComputeNode

Gets the properties of the specified compute node file.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FileGetNodeFilePropertiesFromComputeNodeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FileGetNodeFilePropertiesFromComputeNodeRequest();
    $request->ifModifiedSince = 'deserunt';
    $request->ifUnmodifiedSince = 'distinctio';
    $request->apiVersion = 'quibusdam';
    $request->clientRequestId = 'labore';
    $request->fileName = 'modi';
    $request->nodeId = 'qui';
    $request->ocpDate = 'aliquid';
    $request->poolId = 'cupiditate';
    $request->returnClientRequestId = false;
    $request->timeout = 552822;

    $response = $sdk->files->fileGetNodeFilePropertiesFromComputeNode($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fileGetNodeFilePropertiesFromTask

Gets the properties of the specified task file.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FileGetNodeFilePropertiesFromTaskRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FileGetNodeFilePropertiesFromTaskRequest();
    $request->ifModifiedSince = 'perferendis';
    $request->ifUnmodifiedSince = 'magni';
    $request->apiVersion = 'assumenda';
    $request->clientRequestId = 'ipsam';
    $request->fileName = 'alias';
    $request->jobId = 'fugit';
    $request->ocpDate = 'dolorum';
    $request->returnClientRequestId = false;
    $request->taskId = 'excepturi';
    $request->timeout = 270008;

    $response = $sdk->files->fileGetNodeFilePropertiesFromTask($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fileListFromComputeNode

Lists all of the files in task directories on the specified compute node.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FileListFromComputeNodeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FileListFromComputeNodeRequest();
    $request->dollarFilter = 'facilis';
    $request->apiVersion = 'tempore';
    $request->clientRequestId = 'labore';
    $request->maxresults = 962189;
    $request->nodeId = 'eum';
    $request->ocpDate = 'non';
    $request->poolId = 'eligendi';
    $request->recursive = false;
    $request->returnClientRequestId = false;
    $request->timeout = 576157;

    $response = $sdk->files->fileListFromComputeNode($request);

    if ($response->nodeFileListResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fileListFromTask

Lists the files in a task's directory on its compute node.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FileListFromTaskRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FileListFromTaskRequest();
    $request->dollarFilter = 'aliquid';
    $request->apiVersion = 'provident';
    $request->clientRequestId = 'necessitatibus';
    $request->jobId = 'sint';
    $request->maxresults = 638921;
    $request->ocpDate = 'dolor';
    $request->recursive = false;
    $request->returnClientRequestId = false;
    $request->taskId = 'debitis';
    $request->timeout = 952749;

    $response = $sdk->files->fileListFromTask($request);

    if ($response->nodeFileListResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
