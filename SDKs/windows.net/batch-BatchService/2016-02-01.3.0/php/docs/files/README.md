# files

### Available Operations

* [fileDeleteFromComputeNode](#filedeletefromcomputenode) - Deletes the specified task file from the compute node.
* [fileDeleteFromTask](#filedeletefromtask) - Deletes the specified task file from the compute node where the task ran.
* [fileGetFromComputeNode](#filegetfromcomputenode) - Returns the content of the specified task file.
* [fileGetFromTask](#filegetfromtask) - Returns the content of the specified task file.
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
    $request->apiVersion = 'ipsum';
    $request->clientRequestId = 'quidem';
    $request->fileName = 'molestias';
    $request->nodeId = 'excepturi';
    $request->ocpDate = 'pariatur';
    $request->poolId = 'modi';
    $request->recursive = false;
    $request->returnClientRequestId = false;
    $request->timeout = 508969;

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
    $request->apiVersion = 'rem';
    $request->clientRequestId = 'voluptates';
    $request->fileName = 'quasi';
    $request->jobId = 'repudiandae';
    $request->ocpDate = 'sint';
    $request->recursive = false;
    $request->returnClientRequestId = false;
    $request->taskId = 'veritatis';
    $request->timeout = 929297;

    $response = $sdk->files->fileDeleteFromTask($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fileGetFromComputeNode

Returns the content of the specified task file.

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
    $request->ifModifiedSince = 'incidunt';
    $request->ifUnmodifiedSince = 'enim';
    $request->apiVersion = 'consequatur';
    $request->clientRequestId = 'est';
    $request->fileName = 'quibusdam';
    $request->nodeId = 'explicabo';
    $request->ocpDate = 'deserunt';
    $request->ocpRange = 'distinctio';
    $request->poolId = 'quibusdam';
    $request->returnClientRequestId = false;
    $request->timeout = 289406;

    $response = $sdk->files->fileGetFromComputeNode($request);

    if ($response->fileGetFromComputeNode200ApplicationJSONBinaryString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fileGetFromTask

Returns the content of the specified task file.

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
    $request->ifModifiedSince = 'modi';
    $request->ifUnmodifiedSince = 'qui';
    $request->apiVersion = 'aliquid';
    $request->clientRequestId = 'cupiditate';
    $request->fileName = 'quos';
    $request->jobId = 'perferendis';
    $request->ocpDate = 'magni';
    $request->ocpRange = 'assumenda';
    $request->returnClientRequestId = false;
    $request->taskId = 'ipsam';
    $request->timeout = 4695;

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
    $request->ifModifiedSince = 'fugit';
    $request->ifUnmodifiedSince = 'dolorum';
    $request->apiVersion = 'excepturi';
    $request->clientRequestId = 'tempora';
    $request->fileName = 'facilis';
    $request->nodeId = 'tempore';
    $request->ocpDate = 'labore';
    $request->poolId = 'delectus';
    $request->returnClientRequestId = false;
    $request->timeout = 433288;

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
    $request->ifModifiedSince = 'non';
    $request->ifUnmodifiedSince = 'eligendi';
    $request->apiVersion = 'sint';
    $request->clientRequestId = 'aliquid';
    $request->fileName = 'provident';
    $request->jobId = 'necessitatibus';
    $request->ocpDate = 'sint';
    $request->returnClientRequestId = false;
    $request->taskId = 'officia';
    $request->timeout = 223081;

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
    $request->dollarFilter = 'debitis';
    $request->apiVersion = 'a';
    $request->clientRequestId = 'dolorum';
    $request->maxresults = 447125;
    $request->nodeId = 'in';
    $request->ocpDate = 'illum';
    $request->poolId = 'maiores';
    $request->recursive = false;
    $request->returnClientRequestId = false;
    $request->timeout = 699479;

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
    $request->dollarFilter = 'dicta';
    $request->apiVersion = 'magnam';
    $request->clientRequestId = 'cumque';
    $request->jobId = 'facere';
    $request->maxresults = 411820;
    $request->ocpDate = 'aliquid';
    $request->recursive = false;
    $request->returnClientRequestId = false;
    $request->taskId = 'laborum';
    $request->timeout = 881104;

    $response = $sdk->files->fileListFromTask($request);

    if ($response->nodeFileListResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
