# computeNodes

### Available Operations

* [computeNodeAddUser](#computenodeadduser) - Adds a user account to the specified compute node.
* [computeNodeDeleteUser](#computenodedeleteuser) - Deletes a user account from the specified compute node.
* [computeNodeDisableScheduling](#computenodedisablescheduling) - Disable task scheduling of the specified compute node.
* [computeNodeEnableScheduling](#computenodeenablescheduling) - Enable task scheduling of the specified compute node.
* [computeNodeGet](#computenodeget) - Gets information about the specified compute node.
* [computeNodeGetRemoteDesktop](#computenodegetremotedesktop) - Gets the Remote Desktop Protocol file for the specified compute node.
* [computeNodeGetRemoteLoginSettings](#computenodegetremoteloginsettings) - Gets the settings required for remote login to a compute node.
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
    $request->computeNodeUser->expiryTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-02T15:33:40.440Z');
    $request->computeNodeUser->isAdmin = false;
    $request->computeNodeUser->name = 'Pauline Dibbert';
    $request->computeNodeUser->password = 'esse';
    $request->computeNodeUser->sshPublicKey = 'ipsum';
    $request->apiVersion = 'excepturi';
    $request->clientRequestId = 'aspernatur';
    $request->nodeId = 'perferendis';
    $request->ocpDate = 'ad';
    $request->poolId = 'natus';
    $request->returnClientRequestId = false;
    $request->timeout = 149675;

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
    $request->apiVersion = 'iste';
    $request->clientRequestId = 'dolor';
    $request->nodeId = 'natus';
    $request->ocpDate = 'laboriosam';
    $request->poolId = 'hic';
    $request->returnClientRequestId = false;
    $request->timeout = 902599;
    $request->userName = 'Marisa_Kirlin';

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
    $request->apiVersion = 'saepe';
    $request->clientRequestId = 'quidem';
    $request->nodeId = 'architecto';
    $request->ocpDate = 'ipsa';
    $request->poolId = 'reiciendis';
    $request->returnClientRequestId = false;
    $request->timeout = 666767;

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
    $request->apiVersion = 'mollitia';
    $request->clientRequestId = 'laborum';
    $request->nodeId = 'dolores';
    $request->ocpDate = 'dolorem';
    $request->poolId = 'corporis';
    $request->returnClientRequestId = false;
    $request->timeout = 128926;

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
    $request->dollarSelect = 'nobis';
    $request->apiVersion = 'enim';
    $request->clientRequestId = 'omnis';
    $request->nodeId = 'nemo';
    $request->ocpDate = 'minima';
    $request->poolId = 'excepturi';
    $request->returnClientRequestId = false;
    $request->timeout = 38425;

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
    $request->apiVersion = 'iure';
    $request->clientRequestId = 'culpa';
    $request->nodeId = 'doloribus';
    $request->ocpDate = 'sapiente';
    $request->poolId = 'architecto';
    $request->returnClientRequestId = false;
    $request->timeout = 652790;

    $response = $sdk->computeNodes->computeNodeGetRemoteDesktop($request);

    if ($response->computeNodeGetRemoteDesktop200ApplicationJSONBinaryString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeNodeGetRemoteLoginSettings

Gets the settings required for remote login to a compute node.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNodeGetRemoteLoginSettingsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeNodeGetRemoteLoginSettingsRequest();
    $request->apiVersion = 'dolorem';
    $request->clientRequestId = 'culpa';
    $request->nodeId = 'consequuntur';
    $request->ocpDate = 'repellat';
    $request->poolId = 'mollitia';
    $request->returnClientRequestId = false;
    $request->timeout = 581850;

    $response = $sdk->computeNodes->computeNodeGetRemoteLoginSettings($request);

    if ($response->computeNodeGetRemoteLoginSettingsResult !== null) {
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
    $request->dollarFilter = 'numquam';
    $request->dollarSelect = 'commodi';
    $request->apiVersion = 'quam';
    $request->clientRequestId = 'molestiae';
    $request->maxresults = 244425;
    $request->ocpDate = 'error';
    $request->poolId = 'quia';
    $request->returnClientRequestId = false;
    $request->timeout = 338007;

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
    $request->apiVersion = 'laborum';
    $request->clientRequestId = 'animi';
    $request->nodeId = 'enim';
    $request->ocpDate = 'odit';
    $request->poolId = 'quo';
    $request->returnClientRequestId = false;
    $request->timeout = 196582;

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
    $request->nodeReimageParameter->nodeReimageOption = NodeReimageParameterNodeReimageOptionEnum::RETAINEDDATA;
    $request->apiVersion = 'ipsam';
    $request->clientRequestId = 'id';
    $request->nodeId = 'possimus';
    $request->ocpDate = 'aut';
    $request->poolId = 'quasi';
    $request->returnClientRequestId = false;
    $request->timeout = 622846;

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
    $request->nodeUpdateUserParameter->expiryTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-12-24T08:13:29.299Z');
    $request->nodeUpdateUserParameter->password = 'quasi';
    $request->nodeUpdateUserParameter->sshPublicKey = 'reiciendis';
    $request->apiVersion = 'voluptatibus';
    $request->clientRequestId = 'vero';
    $request->nodeId = 'nihil';
    $request->ocpDate = 'praesentium';
    $request->poolId = 'voluptatibus';
    $request->returnClientRequestId = false;
    $request->timeout = 55714;
    $request->userName = 'Lelah.Klein3';

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
    $request->ifMatch = 'reprehenderit';
    $request->ifModifiedSince = 'ut';
    $request->ifNoneMatch = 'maiores';
    $request->ifUnmodifiedSince = 'dicta';
    $request->nodeRemoveParameter = new NodeRemoveParameter();
    $request->nodeRemoveParameter->nodeDeallocationOption = NodeRemoveParameterNodeDeallocationOptionEnum::TERMINATE;
    $request->nodeRemoveParameter->nodeList = [
        'iusto',
        'dicta',
    ];
    $request->nodeRemoveParameter->resizeTimeout = 'harum';
    $request->apiVersion = 'enim';
    $request->clientRequestId = 'accusamus';
    $request->ocpDate = 'commodi';
    $request->poolId = 'repudiandae';
    $request->returnClientRequestId = false;
    $request->timeout = 64147;

    $response = $sdk->computeNodes->poolRemoveNodes($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
