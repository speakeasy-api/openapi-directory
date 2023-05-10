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
use \OpenAPI\OpenAPI\Models\Shared\CertificateReferenceVisibilityEnum;
use \OpenAPI\OpenAPI\Models\Shared\CloudServiceConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\MetadataItem;
use \OpenAPI\OpenAPI\Models\Shared\StartTask;
use \OpenAPI\OpenAPI\Models\Shared\EnvironmentSetting;
use \OpenAPI\OpenAPI\Models\Shared\ResourceFile;
use \OpenAPI\OpenAPI\Models\Shared\TaskSchedulingPolicy;
use \OpenAPI\OpenAPI\Models\Shared\TaskSchedulingPolicyNodeFillTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\VirtualMachineConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\ImageReference;
use \OpenAPI\OpenAPI\Models\Shared\WindowsConfiguration;

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
    $request->poolAddParameter->autoScaleEvaluationInterval = 'atque';
    $request->poolAddParameter->autoScaleFormula = 'sunt';
    $request->poolAddParameter->certificateReferences = [
        new CertificateReference(),
        new CertificateReference(),
        new CertificateReference(),
        new CertificateReference(),
    ];
    $request->poolAddParameter->cloudServiceConfiguration = new CloudServiceConfiguration();
    $request->poolAddParameter->cloudServiceConfiguration->currentOSVersion = 'dolorum';
    $request->poolAddParameter->cloudServiceConfiguration->osFamily = 'repellendus';
    $request->poolAddParameter->cloudServiceConfiguration->targetOSVersion = 'labore';
    $request->poolAddParameter->displayName = 'reiciendis';
    $request->poolAddParameter->enableAutoScale = false;
    $request->poolAddParameter->enableInterNodeCommunication = false;
    $request->poolAddParameter->id = '0e101256-3f94-4e29-a973-e922a57a15be';
    $request->poolAddParameter->maxTasksPerNode = 247399;
    $request->poolAddParameter->metadata = [
        new MetadataItem(),
        new MetadataItem(),
        new MetadataItem(),
        new MetadataItem(),
    ];
    $request->poolAddParameter->resizeTimeout = 'doloremque';
    $request->poolAddParameter->startTask = new StartTask();
    $request->poolAddParameter->startTask->commandLine = 'iure';
    $request->poolAddParameter->startTask->environmentSettings = [
        new EnvironmentSetting(),
    ];
    $request->poolAddParameter->startTask->maxTaskRetryCount = 517612;
    $request->poolAddParameter->startTask->resourceFiles = [
        new ResourceFile(),
    ];
    $request->poolAddParameter->startTask->runElevated = false;
    $request->poolAddParameter->startTask->waitForSuccess = false;
    $request->poolAddParameter->targetDedicated = 474668;
    $request->poolAddParameter->taskSchedulingPolicy = new TaskSchedulingPolicy();
    $request->poolAddParameter->taskSchedulingPolicy->nodeFillType = TaskSchedulingPolicyNodeFillTypeEnum::UNMAPPED;
    $request->poolAddParameter->virtualMachineConfiguration = new VirtualMachineConfiguration();
    $request->poolAddParameter->virtualMachineConfiguration->imageReference = new ImageReference();
    $request->poolAddParameter->virtualMachineConfiguration->imageReference->offer = 'qui';
    $request->poolAddParameter->virtualMachineConfiguration->imageReference->publisher = 'cum';
    $request->poolAddParameter->virtualMachineConfiguration->imageReference->sku = 'iure';
    $request->poolAddParameter->virtualMachineConfiguration->imageReference->version = 'necessitatibus';
    $request->poolAddParameter->virtualMachineConfiguration->nodeAgentSKUId = 'ratione';
    $request->poolAddParameter->virtualMachineConfiguration->windowsConfiguration = new WindowsConfiguration();
    $request->poolAddParameter->virtualMachineConfiguration->windowsConfiguration->enableAutomaticUpdates = false;
    $request->poolAddParameter->vmSize = 'laborum';
    $request->apiVersion = 'distinctio';
    $request->clientRequestId = 'voluptatum';
    $request->ocpDate = 'rem';
    $request->returnClientRequestId = false;
    $request->timeout = 304446;

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
    $request->ifMatch = 'ad';
    $request->ifModifiedSince = 'repellat';
    $request->ifNoneMatch = 'alias';
    $request->ifUnmodifiedSince = 'corporis';
    $request->apiVersion = 'perspiciatis';
    $request->clientRequestId = 'nihil';
    $request->ocpDate = 'mollitia';
    $request->poolId = 'voluptas';
    $request->returnClientRequestId = false;
    $request->timeout = 5189;

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
    $request->apiVersion = 'maiores';
    $request->clientRequestId = 'reiciendis';
    $request->ocpDate = 'dolores';
    $request->poolId = 'id';
    $request->returnClientRequestId = false;
    $request->timeout = 327988;

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
    $request->ifMatch = 'dolore';
    $request->ifModifiedSince = 'dolorum';
    $request->ifNoneMatch = 'nesciunt';
    $request->ifUnmodifiedSince = 'quae';
    $request->poolEnableAutoScaleParameter = new PoolEnableAutoScaleParameter();
    $request->poolEnableAutoScaleParameter->autoScaleEvaluationInterval = 'recusandae';
    $request->poolEnableAutoScaleParameter->autoScaleFormula = 'omnis';
    $request->apiVersion = 'quaerat';
    $request->clientRequestId = 'molestiae';
    $request->ocpDate = 'ex';
    $request->poolId = 'ut';
    $request->returnClientRequestId = false;
    $request->timeout = 633062;

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
    $request->poolEvaluateAutoScaleParameter->autoScaleFormula = 'adipisci';
    $request->apiVersion = 'debitis';
    $request->clientRequestId = 'laudantium';
    $request->ocpDate = 'eum';
    $request->poolId = 'nemo';
    $request->returnClientRequestId = false;
    $request->timeout = 928219;

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
    $request->ifMatch = 'esse';
    $request->ifModifiedSince = 'provident';
    $request->ifNoneMatch = 'quis';
    $request->ifUnmodifiedSince = 'eum';
    $request->apiVersion = 'reiciendis';
    $request->clientRequestId = 'provident';
    $request->ocpDate = 'aspernatur';
    $request->poolId = 'ullam';
    $request->returnClientRequestId = false;
    $request->timeout = 96804;

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
    $request->dollarExpand = 'animi';
    $request->dollarSelect = 'nostrum';
    $request->ifMatch = 'mollitia';
    $request->ifModifiedSince = 'provident';
    $request->ifNoneMatch = 'possimus';
    $request->ifUnmodifiedSince = 'animi';
    $request->apiVersion = 'ex';
    $request->clientRequestId = 'aliquid';
    $request->ocpDate = 'accusantium';
    $request->poolId = 'repellat';
    $request->returnClientRequestId = false;
    $request->timeout = 984632;

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
    $request->apiVersion = 'ullam';
    $request->clientRequestId = 'in';
    $request->ocpDate = 'nam';
    $request->returnClientRequestId = false;
    $request->timeout = 937636;

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
    $request->dollarExpand = 'officia';
    $request->dollarFilter = 'laborum';
    $request->dollarSelect = 'placeat';
    $request->apiVersion = 'modi';
    $request->clientRequestId = 'voluptatibus';
    $request->maxresults = 564064;
    $request->ocpDate = 'officiis';
    $request->returnClientRequestId = false;
    $request->timeout = 956933;

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
    $request->dollarFilter = 'cumque';
    $request->apiVersion = 'vitae';
    $request->clientRequestId = 'rerum';
    $request->endtime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-31T13:02:08.892Z');
    $request->maxresults = 82057;
    $request->ocpDate = 'fugit';
    $request->returnClientRequestId = false;
    $request->starttime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-24T09:55:31.770Z');
    $request->timeout = 21688;

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
use \OpenAPI\OpenAPI\Models\Shared\CertificateReferenceVisibilityEnum;
use \OpenAPI\OpenAPI\Models\Shared\MetadataItem;
use \OpenAPI\OpenAPI\Models\Shared\StartTask;
use \OpenAPI\OpenAPI\Models\Shared\EnvironmentSetting;
use \OpenAPI\OpenAPI\Models\Shared\ResourceFile;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PoolPatchRequest();
    $request->ifMatch = 'velit';
    $request->ifModifiedSince = 'aspernatur';
    $request->ifNoneMatch = 'eum';
    $request->ifUnmodifiedSince = 'eius';
    $request->poolPatchParameter = new PoolPatchParameter();
    $request->poolPatchParameter->applicationPackageReferences = [
        new ApplicationPackageReference(),
        new ApplicationPackageReference(),
        new ApplicationPackageReference(),
    ];
    $request->poolPatchParameter->certificateReferences = [
        new CertificateReference(),
        new CertificateReference(),
        new CertificateReference(),
        new CertificateReference(),
    ];
    $request->poolPatchParameter->metadata = [
        new MetadataItem(),
        new MetadataItem(),
        new MetadataItem(),
        new MetadataItem(),
    ];
    $request->poolPatchParameter->startTask = new StartTask();
    $request->poolPatchParameter->startTask->commandLine = 'eos';
    $request->poolPatchParameter->startTask->environmentSettings = [
        new EnvironmentSetting(),
        new EnvironmentSetting(),
        new EnvironmentSetting(),
        new EnvironmentSetting(),
    ];
    $request->poolPatchParameter->startTask->maxTaskRetryCount = 433279;
    $request->poolPatchParameter->startTask->resourceFiles = [
        new ResourceFile(),
    ];
    $request->poolPatchParameter->startTask->runElevated = false;
    $request->poolPatchParameter->startTask->waitForSuccess = false;
    $request->apiVersion = 'minima';
    $request->clientRequestId = 'beatae';
    $request->ocpDate = 'cupiditate';
    $request->poolId = 'provident';
    $request->returnClientRequestId = false;
    $request->timeout = 936469;

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
    $request->ifMatch = 'soluta';
    $request->ifModifiedSince = 'hic';
    $request->ifNoneMatch = 'illum';
    $request->ifUnmodifiedSince = 'eaque';
    $request->poolResizeParameter = new PoolResizeParameter();
    $request->poolResizeParameter->nodeDeallocationOption = PoolResizeParameterNodeDeallocationOptionEnum::RETAINEDDATA;
    $request->poolResizeParameter->resizeTimeout = 'perspiciatis';
    $request->poolResizeParameter->targetDedicated = 983427;
    $request->apiVersion = 'debitis';
    $request->clientRequestId = 'aliquid';
    $request->ocpDate = 'porro';
    $request->poolId = 'suscipit';
    $request->returnClientRequestId = false;
    $request->timeout = 211534;

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
    $request->ifMatch = 'fugit';
    $request->ifModifiedSince = 'cumque';
    $request->ifNoneMatch = 'fuga';
    $request->ifUnmodifiedSince = 'ratione';
    $request->apiVersion = 'animi';
    $request->clientRequestId = 'necessitatibus';
    $request->ocpDate = 'nulla';
    $request->poolId = 'consequatur';
    $request->returnClientRequestId = false;
    $request->timeout = 97258;

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
use \OpenAPI\OpenAPI\Models\Shared\CertificateReferenceVisibilityEnum;
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
    ];
    $request->poolUpdatePropertiesParameter->certificateReferences = [
        new CertificateReference(),
        new CertificateReference(),
    ];
    $request->poolUpdatePropertiesParameter->metadata = [
        new MetadataItem(),
        new MetadataItem(),
        new MetadataItem(),
    ];
    $request->poolUpdatePropertiesParameter->startTask = new StartTask();
    $request->poolUpdatePropertiesParameter->startTask->commandLine = 'occaecati';
    $request->poolUpdatePropertiesParameter->startTask->environmentSettings = [
        new EnvironmentSetting(),
        new EnvironmentSetting(),
    ];
    $request->poolUpdatePropertiesParameter->startTask->maxTaskRetryCount = 241557;
    $request->poolUpdatePropertiesParameter->startTask->resourceFiles = [
        new ResourceFile(),
    ];
    $request->poolUpdatePropertiesParameter->startTask->runElevated = false;
    $request->poolUpdatePropertiesParameter->startTask->waitForSuccess = false;
    $request->apiVersion = 'magni';
    $request->clientRequestId = 'doloribus';
    $request->ocpDate = 'nulla';
    $request->poolId = 'necessitatibus';
    $request->returnClientRequestId = false;
    $request->timeout = 58534;

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
    $request->ifMatch = 'tempora';
    $request->ifModifiedSince = 'nihil';
    $request->ifNoneMatch = 'molestiae';
    $request->ifUnmodifiedSince = 'dicta';
    $request->poolUpgradeOSParameter = new PoolUpgradeOSParameter();
    $request->poolUpgradeOSParameter->targetOSVersion = 'iusto';
    $request->apiVersion = 'esse';
    $request->clientRequestId = 'praesentium';
    $request->ocpDate = 'maiores';
    $request->poolId = 'reiciendis';
    $request->returnClientRequestId = false;
    $request->timeout = 423706;

    $response = $sdk->pools->poolUpgradeOS($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
