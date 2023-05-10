# computeNodes

### Available Operations

* [computeNodeAddUser](#computenodeadduser) - Adds a user account to the specified compute node.
* [computeNodeDeleteUser](#computenodedeleteuser) - Deletes a user account from the specified compute node.
* [computeNodeDisableScheduling](#computenodedisablescheduling) - Disable task scheduling of the specified compute node.
* [computeNodeEnableScheduling](#computenodeenablescheduling) - Enable task scheduling of the specified compute node.
* [computeNodeGet](#computenodeget) - Gets information about the specified compute node.
* [computeNodeGetRemoteDesktop](#computenodegetremotedesktop) - Gets the Remote Desktop Protocol file for the specified compute node.
* [computeNodeList](#computenodelist) - Lists the compute nodes in the specified pool.
* [computeNodeReboot](#computenodereboot) - Restarts the specified compute node.
* [computeNodeReimage](#computenodereimage) - Reinstalls the operating system on the specified compute node.
* [computeNodeUpdateUser](#computenodeupdateuser) - Updates the password or expiration time of a user account on the specified compute node.
* [poolRemoveNodes](#poolremovenodes) - Removes compute nodes from the specified pool.

## computeNodeAddUser

Adds a user account to the specified compute node.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNodeAddUserRequest;
use \OpenAPI\OpenAPI\Models\Shared\ComputeNodeUser;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeNodeAddUserRequest();
    $request->computeNodeUser = new ComputeNodeUser();
    $request->computeNodeUser->expiryTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-11-02T03:00:47.309Z');
    $request->computeNodeUser->isAdmin = false;
    $request->computeNodeUser->name = 'Cassandra Welch';
    $request->computeNodeUser->password = 'beatae';
    $request->apiVersion = 'commodi';
    $request->clientRequestId = 'molestiae';
    $request->nodeId = 'modi';
    $request->ocpDate = 'qui';
    $request->poolId = 'impedit';
    $request->returnClientRequestId = false;
    $request->timeout = 736918;

    $response = $sdk->computeNodes->computeNodeAddUser($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeNodeDeleteUser

Deletes a user account from the specified compute node.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNodeDeleteUserRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeNodeDeleteUserRequest();
    $request->apiVersion = 'esse';
    $request->clientRequestId = 'ipsum';
    $request->nodeId = 'excepturi';
    $request->ocpDate = 'aspernatur';
    $request->poolId = 'perferendis';
    $request->returnClientRequestId = false;
    $request->timeout = 324141;
    $request->userName = 'Lia.Cormier';

    $response = $sdk->computeNodes->computeNodeDeleteUser($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeNodeDisableScheduling

Disable task scheduling of the specified compute node.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNodeDisableSchedulingRequest;
use \OpenAPI\OpenAPI\Models\Shared\NodeDisableSchedulingParameter;
use \OpenAPI\OpenAPI\Models\Shared\NodeDisableSchedulingParameterNodeDisableSchedulingOptionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeNodeDisableSchedulingRequest();
    $request->nodeDisableSchedulingParameter = new NodeDisableSchedulingParameter();
    $request->nodeDisableSchedulingParameter->nodeDisableSchedulingOption = NodeDisableSchedulingParameterNodeDisableSchedulingOptionEnum::TERMINATE;
    $request->apiVersion = 'laboriosam';
    $request->clientRequestId = 'hic';
    $request->nodeId = 'saepe';
    $request->ocpDate = 'fuga';
    $request->poolId = 'in';
    $request->returnClientRequestId = false;
    $request->timeout = 359508;

    $response = $sdk->computeNodes->computeNodeDisableScheduling($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeNodeEnableScheduling

Enable task scheduling of the specified compute node.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNodeEnableSchedulingRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeNodeEnableSchedulingRequest();
    $request->apiVersion = 'iste';
    $request->clientRequestId = 'iure';
    $request->nodeId = 'saepe';
    $request->ocpDate = 'quidem';
    $request->poolId = 'architecto';
    $request->returnClientRequestId = false;
    $request->timeout = 60225;

    $response = $sdk->computeNodes->computeNodeEnableScheduling($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeNodeGet

Gets information about the specified compute node.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNodeGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeNodeGetRequest();
    $request->dollarSelect = 'reiciendis';
    $request->apiVersion = 'est';
    $request->clientRequestId = 'mollitia';
    $request->nodeId = 'laborum';
    $request->ocpDate = 'dolores';
    $request->poolId = 'dolorem';
    $request->returnClientRequestId = false;
    $request->timeout = 358152;

    $response = $sdk->computeNodes->computeNodeGet($request);

    if ($response->computeNode !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeNodeGetRemoteDesktop

Gets the Remote Desktop Protocol file for the specified compute node.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNodeGetRemoteDesktopRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeNodeGetRemoteDesktopRequest();
    $request->apiVersion = 'explicabo';
    $request->clientRequestId = 'nobis';
    $request->nodeId = 'enim';
    $request->ocpDate = 'omnis';
    $request->poolId = 'nemo';
    $request->returnClientRequestId = false;
    $request->timeout = 325047;

    $response = $sdk->computeNodes->computeNodeGetRemoteDesktop($request);

    if ($response->computeNodeGetRemoteDesktop200ApplicationJSONBinaryString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeNodeList

Lists the compute nodes in the specified pool.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNodeListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeNodeListRequest();
    $request->dollarFilter = 'excepturi';
    $request->dollarSelect = 'accusantium';
    $request->apiVersion = 'iure';
    $request->clientRequestId = 'culpa';
    $request->maxresults = 988374;
    $request->ocpDate = 'sapiente';
    $request->poolId = 'architecto';
    $request->returnClientRequestId = false;
    $request->timeout = 652790;

    $response = $sdk->computeNodes->computeNodeList($request);

    if ($response->computeNodeListResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeNodeReboot

Restarts the specified compute node.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNodeRebootRequest;
use \OpenAPI\OpenAPI\Models\Shared\NodeRebootParameter;
use \OpenAPI\OpenAPI\Models\Shared\NodeRebootParameterNodeRebootOptionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeNodeRebootRequest();
    $request->nodeRebootParameter = new NodeRebootParameter();
    $request->nodeRebootParameter->nodeRebootOption = NodeRebootParameterNodeRebootOptionEnum::REQUEUE;
    $request->apiVersion = 'culpa';
    $request->clientRequestId = 'consequuntur';
    $request->nodeId = 'repellat';
    $request->ocpDate = 'mollitia';
    $request->poolId = 'occaecati';
    $request->returnClientRequestId = false;
    $request->timeout = 253291;

    $response = $sdk->computeNodes->computeNodeReboot($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeNodeReimage

Reinstalls the operating system on the specified compute node.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNodeReimageRequest;
use \OpenAPI\OpenAPI\Models\Shared\NodeReimageParameter;
use \OpenAPI\OpenAPI\Models\Shared\NodeReimageParameterNodeReimageOptionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeNodeReimageRequest();
    $request->nodeReimageParameter = new NodeReimageParameter();
    $request->nodeReimageParameter->nodeReimageOption = NodeReimageParameterNodeReimageOptionEnum::TERMINATE;
    $request->apiVersion = 'quam';
    $request->clientRequestId = 'molestiae';
    $request->nodeId = 'velit';
    $request->ocpDate = 'error';
    $request->poolId = 'quia';
    $request->returnClientRequestId = false;
    $request->timeout = 338007;

    $response = $sdk->computeNodes->computeNodeReimage($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeNodeUpdateUser

Updates the password or expiration time of a user account on the specified compute node.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNodeUpdateUserRequest;
use \OpenAPI\OpenAPI\Models\Shared\NodeUpdateUserParameter;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeNodeUpdateUserRequest();
    $request->nodeUpdateUserParameter = new NodeUpdateUserParameter();
    $request->nodeUpdateUserParameter->expiryTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-29T17:10:10.440Z');
    $request->nodeUpdateUserParameter->password = 'animi';
    $request->apiVersion = 'enim';
    $request->clientRequestId = 'odit';
    $request->nodeId = 'quo';
    $request->ocpDate = 'sequi';
    $request->poolId = 'tenetur';
    $request->returnClientRequestId = false;
    $request->timeout = 368725;
    $request->userName = 'Makayla9';

    $response = $sdk->computeNodes->computeNodeUpdateUser($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## poolRemoveNodes

Removes compute nodes from the specified pool.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PoolRemoveNodesRequest;
use \OpenAPI\OpenAPI\Models\Shared\NodeRemoveParameter;
use \OpenAPI\OpenAPI\Models\Shared\NodeRemoveParameterNodeDeallocationOptionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PoolRemoveNodesRequest();
    $request->ifMatch = 'error';
    $request->ifModifiedSince = 'temporibus';
    $request->ifNoneMatch = 'laborum';
    $request->ifUnmodifiedSince = 'quasi';
    $request->nodeRemoveParameter = new NodeRemoveParameter();
    $request->nodeRemoveParameter->nodeDeallocationOption = NodeRemoveParameterNodeDeallocationOptionEnum::RETAINEDDATA;
    $request->nodeRemoveParameter->nodeList = [
        'vero',
        'nihil',
        'praesentium',
        'voluptatibus',
    ];
    $request->nodeRemoveParameter->resizeTimeout = 'ipsa';
    $request->apiVersion = 'omnis';
    $request->clientRequestId = 'voluptate';
    $request->ocpDate = 'cum';
    $request->poolId = 'perferendis';
    $request->returnClientRequestId = false;
    $request->timeout = 39187;

    $response = $sdk->computeNodes->poolRemoveNodes($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
