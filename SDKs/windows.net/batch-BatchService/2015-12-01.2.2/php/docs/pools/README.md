# pools

### Available Operations

* [poolAdd](#pooladd) - Adds a pool to the specified account.
* [poolDelete](#pooldelete) - Deletes a pool from the specified account.
* [poolDisableAutoScale](#pooldisableautoscale) - Disables automatic scaling for a pool.
* [poolEnableAutoScale](#poolenableautoscale) - Enables automatic scaling for a pool.
* [poolEvaluateAutoScale](#poolevaluateautoscale) - Gets the result of evaluating an automatic scaling formula on the pool.
* [poolExists](#poolexists) - Gets basic properties of a pool.
* [poolGet](#poolget) - Gets information about the specified pool.
* [poolGetAllPoolsLifetimeStatistics](#poolgetallpoolslifetimestatistics) - Gets lifetime summary statistics for all of the pools in the specified account. Statistics are aggregated across all pools that have ever existed in the account, from account creation to the last update time of the statistics.
* [poolList](#poollist) - Lists all of the pools in the specified account.
* [poolListPoolUsageMetrics](#poollistpoolusagemetrics) - Lists the usage metrics, aggregated by pool across individual time intervals, for the specified account.
* [poolPatch](#poolpatch) - Updates the properties of a pool.
* [poolResize](#poolresize) - Changes the number of compute nodes that are assigned to a pool.
* [poolStopResize](#poolstopresize) - Stops an ongoing resize operation on the pool. This does not restore the pool to its previous state before the resize operation: it only stops any further changes being made, and the pool maintains its current state.
* [poolUpdateProperties](#poolupdateproperties) - Updates the properties of a pool.
* [poolUpgradeOS](#poolupgradeos) - Upgrades the operating system of the specified pool.

## poolAdd

Adds a pool to the specified account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PoolAddRequest;
use \OpenAPI\OpenAPI\Models\Shared\PoolAddParameter;
use \OpenAPI\OpenAPI\Models\Shared\ApplicationPackageReference;
use \OpenAPI\OpenAPI\Models\Shared\CertificateReference;
use \OpenAPI\OpenAPI\Models\Shared\CertificateReferenceStoreLocationEnum;
use \OpenAPI\OpenAPI\Models\Shared\MetadataItem;
use \OpenAPI\OpenAPI\Models\Shared\StartTask;
use \OpenAPI\OpenAPI\Models\Shared\EnvironmentSetting;
use \OpenAPI\OpenAPI\Models\Shared\ResourceFile;
use \OpenAPI\OpenAPI\Models\Shared\TaskSchedulingPolicy;
use \OpenAPI\OpenAPI\Models\Shared\TaskSchedulingPolicyNodeFillTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PoolAddRequest();
    $request->poolAddParameter = new PoolAddParameter();
    $request->poolAddParameter->applicationPackageReferences = [
        new ApplicationPackageReference(),
        new ApplicationPackageReference(),
        new ApplicationPackageReference(),
    ];
    $request->poolAddParameter->autoScaleEvaluationInterval = 'voluptate';
    $request->poolAddParameter->autoScaleFormula = 'unde';
    $request->poolAddParameter->certificateReferences = [
        new CertificateReference(),
        new CertificateReference(),
        new CertificateReference(),
        new CertificateReference(),
    ];
    $request->poolAddParameter->displayName = 'provident';
    $request->poolAddParameter->enableAutoScale = false;
    $request->poolAddParameter->enableInterNodeCommunication = false;
    $request->poolAddParameter->id = 'dfe0ab7d-a8a5-40ce-987f-86bc173d689e';
    $request->poolAddParameter->maxTasksPerNode = 886961;
    $request->poolAddParameter->metadata = [
        new MetadataItem(),
        new MetadataItem(),
        new MetadataItem(),
        new MetadataItem(),
    ];
    $request->poolAddParameter->osFamily = 'natus';
    $request->poolAddParameter->resizeTimeout = 'minima';
    $request->poolAddParameter->startTask = new StartTask();
    $request->poolAddParameter->startTask->commandLine = 'aspernatur';
    $request->poolAddParameter->startTask->environmentSettings = [
        new EnvironmentSetting(),
        new EnvironmentSetting(),
    ];
    $request->poolAddParameter->startTask->maxTaskRetryCount = 980581;
    $request->poolAddParameter->startTask->resourceFiles = [
        new ResourceFile(),
        new ResourceFile(),
        new ResourceFile(),
    ];
    $request->poolAddParameter->startTask->runElevated = false;
    $request->poolAddParameter->startTask->waitForSuccess = false;
    $request->poolAddParameter->targetDedicated = 871786;
    $request->poolAddParameter->targetOSVersion = 'error';
    $request->poolAddParameter->taskSchedulingPolicy = new TaskSchedulingPolicy();
    $request->poolAddParameter->taskSchedulingPolicy->nodeFillType = TaskSchedulingPolicyNodeFillTypeEnum::PACK;
    $request->poolAddParameter->vmSize = 'suscipit';
    $request->apiVersion = 'repudiandae';
    $request->clientRequestId = 'atque';
    $request->ocpDate = 'atque';
    $request->returnClientRequestId = false;
    $request->timeout = 120919;

    $response = $sdk->pools->poolAdd($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## poolDelete

Deletes a pool from the specified account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PoolDeleteRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PoolDeleteRequest();
    $request->ifMatch = 'recusandae';
    $request->ifModifiedSince = 'dolorum';
    $request->ifNoneMatch = 'repellendus';
    $request->ifUnmodifiedSince = 'labore';
    $request->apiVersion = 'reiciendis';
    $request->clientRequestId = 'doloremque';
    $request->ocpDate = 'repudiandae';
    $request->poolId = 'dicta';
    $request->returnClientRequestId = false;
    $request->timeout = 36033;

    $response = $sdk->pools->poolDelete($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## poolDisableAutoScale

Disables automatic scaling for a pool.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PoolDisableAutoScaleRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PoolDisableAutoScaleRequest();
    $request->apiVersion = 'beatae';
    $request->clientRequestId = 'dolores';
    $request->ocpDate = 'enim';
    $request->poolId = 'laboriosam';
    $request->returnClientRequestId = false;
    $request->timeout = 246535;

    $response = $sdk->pools->poolDisableAutoScale($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## poolEnableAutoScale

Enables automatic scaling for a pool.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PoolEnableAutoScaleRequest;
use \OpenAPI\OpenAPI\Models\Shared\PoolEnableAutoScaleParameter;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PoolEnableAutoScaleRequest();
    $request->ifMatch = 'a';
    $request->ifModifiedSince = 'molestias';
    $request->ifNoneMatch = 'magnam';
    $request->ifUnmodifiedSince = 'saepe';
    $request->poolEnableAutoScaleParameter = new PoolEnableAutoScaleParameter();
    $request->poolEnableAutoScaleParameter->autoScaleEvaluationInterval = 'consequuntur';
    $request->poolEnableAutoScaleParameter->autoScaleFormula = 'occaecati';
    $request->apiVersion = 'officiis';
    $request->clientRequestId = 'perspiciatis';
    $request->ocpDate = 'in';
    $request->poolId = 'adipisci';
    $request->returnClientRequestId = false;
    $request->timeout = 907876;

    $response = $sdk->pools->poolEnableAutoScale($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## poolEvaluateAutoScale

Gets the result of evaluating an automatic scaling formula on the pool.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PoolEvaluateAutoScaleRequest;
use \OpenAPI\OpenAPI\Models\Shared\PoolEvaluateAutoScaleParameter;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PoolEvaluateAutoScaleRequest();
    $request->poolEvaluateAutoScaleParameter = new PoolEvaluateAutoScaleParameter();
    $request->poolEvaluateAutoScaleParameter->autoScaleFormula = 'occaecati';
    $request->apiVersion = 'consequuntur';
    $request->clientRequestId = 'fugit';
    $request->ocpDate = 'id';
    $request->poolId = 'quis';
    $request->returnClientRequestId = false;
    $request->timeout = 440264;

    $response = $sdk->pools->poolEvaluateAutoScale($request);

    if ($response->autoScaleRun !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## poolExists

Gets basic properties of a pool.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PoolExistsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PoolExistsRequest();
    $request->dollarSelect = 'error';
    $request->ifMatch = 'illo';
    $request->ifModifiedSince = 'corporis';
    $request->ifNoneMatch = 'quidem';
    $request->ifUnmodifiedSince = 'eveniet';
    $request->apiVersion = 'non';
    $request->clientRequestId = 'vero';
    $request->ocpDate = 'doloremque';
    $request->poolId = 'iure';
    $request->returnClientRequestId = false;
    $request->timeout = 59944;

    $response = $sdk->pools->poolExists($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## poolGet

Gets information about the specified pool.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PoolGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PoolGetRequest();
    $request->dollarExpand = 'totam';
    $request->dollarSelect = 'quae';
    $request->ifMatch = 'molestiae';
    $request->ifModifiedSince = 'eveniet';
    $request->ifNoneMatch = 'qui';
    $request->ifUnmodifiedSince = 'cum';
    $request->apiVersion = 'iure';
    $request->clientRequestId = 'necessitatibus';
    $request->ocpDate = 'ratione';
    $request->poolId = 'laborum';
    $request->returnClientRequestId = false;
    $request->timeout = 715208;

    $response = $sdk->pools->poolGet($request);

    if ($response->cloudPool !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## poolGetAllPoolsLifetimeStatistics

Gets lifetime summary statistics for all of the pools in the specified account. Statistics are aggregated across all pools that have ever existed in the account, from account creation to the last update time of the statistics.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PoolGetAllPoolsLifetimeStatisticsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PoolGetAllPoolsLifetimeStatisticsRequest();
    $request->apiVersion = 'voluptatum';
    $request->clientRequestId = 'rem';
    $request->ocpDate = 'aliquam';
    $request->returnClientRequestId = false;
    $request->timeout = 320565;

    $response = $sdk->pools->poolGetAllPoolsLifetimeStatistics($request);

    if ($response->poolStatistics !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## poolList

Lists all of the pools in the specified account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PoolListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PoolListRequest();
    $request->dollarExpand = 'repellat';
    $request->dollarFilter = 'alias';
    $request->dollarSelect = 'corporis';
    $request->apiVersion = 'perspiciatis';
    $request->clientRequestId = 'nihil';
    $request->maxresults = 649078;
    $request->ocpDate = 'voluptas';
    $request->returnClientRequestId = false;
    $request->timeout = 5189;

    $response = $sdk->pools->poolList($request);

    if ($response->cloudPoolListResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## poolListPoolUsageMetrics

Lists the usage metrics, aggregated by pool across individual time intervals, for the specified account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PoolListPoolUsageMetricsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PoolListPoolUsageMetricsRequest();
    $request->dollarFilter = 'maiores';
    $request->apiVersion = 'reiciendis';
    $request->clientRequestId = 'dolores';
    $request->endtime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-06T13:39:00.258Z');
    $request->maxresults = 293144;
    $request->ocpDate = 'dolorum';
    $request->returnClientRequestId = false;
    $request->starttime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-08T22:18:03.712Z');
    $request->timeout = 925703;

    $response = $sdk->pools->poolListPoolUsageMetrics($request);

    if ($response->poolListPoolUsageMetricsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## poolPatch

Updates the properties of a pool.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PoolPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\PoolPatchParameter;
use \OpenAPI\OpenAPI\Models\Shared\ApplicationPackageReference;
use \OpenAPI\OpenAPI\Models\Shared\CertificateReference;
use \OpenAPI\OpenAPI\Models\Shared\CertificateReferenceStoreLocationEnum;
use \OpenAPI\OpenAPI\Models\Shared\MetadataItem;
use \OpenAPI\OpenAPI\Models\Shared\StartTask;
use \OpenAPI\OpenAPI\Models\Shared\EnvironmentSetting;
use \OpenAPI\OpenAPI\Models\Shared\ResourceFile;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PoolPatchRequest();
    $request->ifMatch = 'omnis';
    $request->ifModifiedSince = 'quaerat';
    $request->ifNoneMatch = 'molestiae';
    $request->ifUnmodifiedSince = 'ex';
    $request->poolPatchParameter = new PoolPatchParameter();
    $request->poolPatchParameter->applicationPackageReferences = [
        new ApplicationPackageReference(),
        new ApplicationPackageReference(),
    ];
    $request->poolPatchParameter->certificateReferences = [
        new CertificateReference(),
        new CertificateReference(),
        new CertificateReference(),
    ];
    $request->poolPatchParameter->metadata = [
        new MetadataItem(),
    ];
    $request->poolPatchParameter->startTask = new StartTask();
    $request->poolPatchParameter->startTask->commandLine = 'debitis';
    $request->poolPatchParameter->startTask->environmentSettings = [
        new EnvironmentSetting(),
        new EnvironmentSetting(),
        new EnvironmentSetting(),
    ];
    $request->poolPatchParameter->startTask->maxTaskRetryCount = 432606;
    $request->poolPatchParameter->startTask->resourceFiles = [
        new ResourceFile(),
        new ResourceFile(),
    ];
    $request->poolPatchParameter->startTask->runElevated = false;
    $request->poolPatchParameter->startTask->waitForSuccess = false;
    $request->apiVersion = 'recusandae';
    $request->clientRequestId = 'esse';
    $request->ocpDate = 'provident';
    $request->poolId = 'quis';
    $request->returnClientRequestId = false;
    $request->timeout = 431785;

    $response = $sdk->pools->poolPatch($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## poolResize

Changes the number of compute nodes that are assigned to a pool.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PoolResizeRequest;
use \OpenAPI\OpenAPI\Models\Shared\PoolResizeParameter;
use \OpenAPI\OpenAPI\Models\Shared\PoolResizeParameterNodeDeallocationOptionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PoolResizeRequest();
    $request->ifMatch = 'reiciendis';
    $request->ifModifiedSince = 'provident';
    $request->ifNoneMatch = 'aspernatur';
    $request->ifUnmodifiedSince = 'ullam';
    $request->poolResizeParameter = new PoolResizeParameter();
    $request->poolResizeParameter->nodeDeallocationOption = PoolResizeParameterNodeDeallocationOptionEnum::REQUEUE;
    $request->poolResizeParameter->resizeTimeout = 'animi';
    $request->poolResizeParameter->targetDedicated = 343392;
    $request->apiVersion = 'mollitia';
    $request->clientRequestId = 'provident';
    $request->ocpDate = 'possimus';
    $request->poolId = 'animi';
    $request->returnClientRequestId = false;
    $request->timeout = 402767;

    $response = $sdk->pools->poolResize($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## poolStopResize

Stops an ongoing resize operation on the pool. This does not restore the pool to its previous state before the resize operation: it only stops any further changes being made, and the pool maintains its current state.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PoolStopResizeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PoolStopResizeRequest();
    $request->ifMatch = 'aliquid';
    $request->ifModifiedSince = 'accusantium';
    $request->ifNoneMatch = 'repellat';
    $request->ifUnmodifiedSince = 'doloribus';
    $request->apiVersion = 'ullam';
    $request->clientRequestId = 'in';
    $request->ocpDate = 'nam';
    $request->poolId = 'earum';
    $request->returnClientRequestId = false;
    $request->timeout = 637583;

    $response = $sdk->pools->poolStopResize($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## poolUpdateProperties

Updates the properties of a pool.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PoolUpdatePropertiesRequest;
use \OpenAPI\OpenAPI\Models\Shared\PoolUpdatePropertiesParameter;
use \OpenAPI\OpenAPI\Models\Shared\ApplicationPackageReference;
use \OpenAPI\OpenAPI\Models\Shared\CertificateReference;
use \OpenAPI\OpenAPI\Models\Shared\CertificateReferenceStoreLocationEnum;
use \OpenAPI\OpenAPI\Models\Shared\MetadataItem;
use \OpenAPI\OpenAPI\Models\Shared\StartTask;
use \OpenAPI\OpenAPI\Models\Shared\EnvironmentSetting;
use \OpenAPI\OpenAPI\Models\Shared\ResourceFile;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PoolUpdatePropertiesRequest();
    $request->poolUpdatePropertiesParameter = new PoolUpdatePropertiesParameter();
    $request->poolUpdatePropertiesParameter->applicationPackageReferences = [
        new ApplicationPackageReference(),
        new ApplicationPackageReference(),
        new ApplicationPackageReference(),
    ];
    $request->poolUpdatePropertiesParameter->certificateReferences = [
        new CertificateReference(),
        new CertificateReference(),
        new CertificateReference(),
        new CertificateReference(),
    ];
    $request->poolUpdatePropertiesParameter->metadata = [
        new MetadataItem(),
        new MetadataItem(),
    ];
    $request->poolUpdatePropertiesParameter->startTask = new StartTask();
    $request->poolUpdatePropertiesParameter->startTask->commandLine = 'voluptatibus';
    $request->poolUpdatePropertiesParameter->startTask->environmentSettings = [
        new EnvironmentSetting(),
        new EnvironmentSetting(),
        new EnvironmentSetting(),
    ];
    $request->poolUpdatePropertiesParameter->startTask->maxTaskRetryCount = 889794;
    $request->poolUpdatePropertiesParameter->startTask->resourceFiles = [
        new ResourceFile(),
        new ResourceFile(),
        new ResourceFile(),
        new ResourceFile(),
    ];
    $request->poolUpdatePropertiesParameter->startTask->runElevated = false;
    $request->poolUpdatePropertiesParameter->startTask->waitForSuccess = false;
    $request->apiVersion = 'cumque';
    $request->clientRequestId = 'vitae';
    $request->ocpDate = 'rerum';
    $request->poolId = 'tempora';
    $request->returnClientRequestId = false;
    $request->timeout = 335498;

    $response = $sdk->pools->poolUpdateProperties($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## poolUpgradeOS

Upgrades the operating system of the specified pool.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PoolUpgradeOSRequest;
use \OpenAPI\OpenAPI\Models\Shared\PoolUpgradeOSParameter;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PoolUpgradeOSRequest();
    $request->ifMatch = 'inventore';
    $request->ifModifiedSince = 'fugit';
    $request->ifNoneMatch = 'cumque';
    $request->ifUnmodifiedSince = 'quae';
    $request->poolUpgradeOSParameter = new PoolUpgradeOSParameter();
    $request->poolUpgradeOSParameter->targetOSVersion = 'perferendis';
    $request->apiVersion = 'velit';
    $request->clientRequestId = 'aspernatur';
    $request->ocpDate = 'eum';
    $request->poolId = 'eius';
    $request->returnClientRequestId = false;
    $request->timeout = 521996;

    $response = $sdk->pools->poolUpgradeOS($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
