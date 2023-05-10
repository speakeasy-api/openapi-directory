# jobSchedules

### Available Operations

* [jobScheduleAdd](#jobscheduleadd) - Adds a job schedule to the specified account.
* [jobScheduleDelete](#jobscheduledelete) - Deletes a job schedule from the specified account.
* [jobScheduleDisable](#jobscheduledisable) - Disables a job schedule.
* [jobScheduleEnable](#jobscheduleenable) - Enables a job schedule.
* [jobScheduleExists](#jobscheduleexists) - Checks the specified job schedule exists.
* [jobScheduleGet](#jobscheduleget) - Gets information about the specified job schedule.
* [jobScheduleList](#jobschedulelist) - Lists all of the job schedules in the specified account.
* [jobSchedulePatch](#jobschedulepatch) - Updates the properties of the specified job schedule.
* [jobScheduleTerminate](#jobscheduleterminate) - Terminates a job schedule.
* [jobScheduleUpdate](#jobscheduleupdate) - Updates the properties of the specified job schedule.

## jobScheduleAdd

Adds a job schedule to the specified account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\JobScheduleAddRequest;
use \OpenAPI\OpenAPI\Models\Shared\JobScheduleAddParameter;
use \OpenAPI\OpenAPI\Models\Shared\JobSpecification;
use \OpenAPI\OpenAPI\Models\Shared\EnvironmentSetting;
use \OpenAPI\OpenAPI\Models\Shared\JobConstraints;
use \OpenAPI\OpenAPI\Models\Shared\JobManagerTask;
use \OpenAPI\OpenAPI\Models\Shared\TaskConstraints;
use \OpenAPI\OpenAPI\Models\Shared\ResourceFile;
use \OpenAPI\OpenAPI\Models\Shared\JobPreparationTask;
use \OpenAPI\OpenAPI\Models\Shared\JobReleaseTask;
use \OpenAPI\OpenAPI\Models\Shared\MetadataItem;
use \OpenAPI\OpenAPI\Models\Shared\PoolInformation;
use \OpenAPI\OpenAPI\Models\Shared\AutoPoolSpecification;
use \OpenAPI\OpenAPI\Models\Shared\PoolSpecification;
use \OpenAPI\OpenAPI\Models\Shared\ApplicationPackageReference;
use \OpenAPI\OpenAPI\Models\Shared\CertificateReference;
use \OpenAPI\OpenAPI\Models\Shared\CertificateReferenceStoreLocationEnum;
use \OpenAPI\OpenAPI\Models\Shared\StartTask;
use \OpenAPI\OpenAPI\Models\Shared\TaskSchedulingPolicy;
use \OpenAPI\OpenAPI\Models\Shared\TaskSchedulingPolicyNodeFillTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AutoPoolSpecificationPoolLifetimeOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\Schedule;

$sdk = SDK::builder()
    ->build();

try {
    $request = new JobScheduleAddRequest();
    $request->jobScheduleAddParameter = new JobScheduleAddParameter();
    $request->jobScheduleAddParameter->displayName = 'dolorum';
    $request->jobScheduleAddParameter->id = '77dfb14c-d66a-4e39-9efb-9ba88f3a6699';
    $request->jobScheduleAddParameter->jobSpecification = new JobSpecification();
    $request->jobScheduleAddParameter->jobSpecification->commonEnvironmentSettings = [
        new EnvironmentSetting(),
        new EnvironmentSetting(),
    ];
    $request->jobScheduleAddParameter->jobSpecification->constraints = new JobConstraints();
    $request->jobScheduleAddParameter->jobSpecification->constraints->maxTaskRetryCount = 19193;
    $request->jobScheduleAddParameter->jobSpecification->constraints->maxWallClockTime = 'nihil';
    $request->jobScheduleAddParameter->jobSpecification->displayName = 'magnam';
    $request->jobScheduleAddParameter->jobSpecification->jobManagerTask = new JobManagerTask();
    $request->jobScheduleAddParameter->jobSpecification->jobManagerTask->commandLine = 'distinctio';
    $request->jobScheduleAddParameter->jobSpecification->jobManagerTask->constraints = new TaskConstraints();
    $request->jobScheduleAddParameter->jobSpecification->jobManagerTask->constraints->maxTaskRetryCount = 660174;
    $request->jobScheduleAddParameter->jobSpecification->jobManagerTask->constraints->maxWallClockTime = 'labore';
    $request->jobScheduleAddParameter->jobSpecification->jobManagerTask->constraints->retentionTime = 'labore';
    $request->jobScheduleAddParameter->jobSpecification->jobManagerTask->displayName = 'suscipit';
    $request->jobScheduleAddParameter->jobSpecification->jobManagerTask->environmentSettings = [
        new EnvironmentSetting(),
        new EnvironmentSetting(),
        new EnvironmentSetting(),
    ];
    $request->jobScheduleAddParameter->jobSpecification->jobManagerTask->id = 'b6e21419-5989-40af-a563-e2516fe4c8b7';
    $request->jobScheduleAddParameter->jobSpecification->jobManagerTask->killJobOnCompletion = false;
    $request->jobScheduleAddParameter->jobSpecification->jobManagerTask->resourceFiles = [
        new ResourceFile(),
    ];
    $request->jobScheduleAddParameter->jobSpecification->jobManagerTask->runElevated = false;
    $request->jobScheduleAddParameter->jobSpecification->jobManagerTask->runExclusive = false;
    $request->jobScheduleAddParameter->jobSpecification->jobPreparationTask = new JobPreparationTask();
    $request->jobScheduleAddParameter->jobSpecification->jobPreparationTask->commandLine = 'architecto';
    $request->jobScheduleAddParameter->jobSpecification->jobPreparationTask->constraints = new TaskConstraints();
    $request->jobScheduleAddParameter->jobSpecification->jobPreparationTask->constraints->maxTaskRetryCount = 919483;
    $request->jobScheduleAddParameter->jobSpecification->jobPreparationTask->constraints->maxWallClockTime = 'ullam';
    $request->jobScheduleAddParameter->jobSpecification->jobPreparationTask->constraints->retentionTime = 'expedita';
    $request->jobScheduleAddParameter->jobSpecification->jobPreparationTask->environmentSettings = [
        new EnvironmentSetting(),
        new EnvironmentSetting(),
    ];
    $request->jobScheduleAddParameter->jobSpecification->jobPreparationTask->id = 'fd2ed028-921c-4ddc-a926-01fb576b0d5f';
    $request->jobScheduleAddParameter->jobSpecification->jobPreparationTask->rerunOnNodeRebootAfterSuccess = false;
    $request->jobScheduleAddParameter->jobSpecification->jobPreparationTask->resourceFiles = [
        new ResourceFile(),
    ];
    $request->jobScheduleAddParameter->jobSpecification->jobPreparationTask->runElevated = false;
    $request->jobScheduleAddParameter->jobSpecification->jobPreparationTask->waitForSuccess = false;
    $request->jobScheduleAddParameter->jobSpecification->jobReleaseTask = new JobReleaseTask();
    $request->jobScheduleAddParameter->jobSpecification->jobReleaseTask->commandLine = 'fugiat';
    $request->jobScheduleAddParameter->jobSpecification->jobReleaseTask->environmentSettings = [
        new EnvironmentSetting(),
    ];
    $request->jobScheduleAddParameter->jobSpecification->jobReleaseTask->id = '0c5fbb25-8705-4320-ac73-d5fe9b90c289';
    $request->jobScheduleAddParameter->jobSpecification->jobReleaseTask->maxWallClockTime = 'eaque';
    $request->jobScheduleAddParameter->jobSpecification->jobReleaseTask->resourceFiles = [
        new ResourceFile(),
        new ResourceFile(),
        new ResourceFile(),
    ];
    $request->jobScheduleAddParameter->jobSpecification->jobReleaseTask->retentionTime = 'rerum';
    $request->jobScheduleAddParameter->jobSpecification->jobReleaseTask->runElevated = false;
    $request->jobScheduleAddParameter->jobSpecification->metadata = [
        new MetadataItem(),
    ];
    $request->jobScheduleAddParameter->jobSpecification->poolInfo = new PoolInformation();
    $request->jobScheduleAddParameter->jobSpecification->poolInfo->autoPoolSpecification = new AutoPoolSpecification();
    $request->jobScheduleAddParameter->jobSpecification->poolInfo->autoPoolSpecification->autoPoolIdPrefix = 'asperiores';
    $request->jobScheduleAddParameter->jobSpecification->poolInfo->autoPoolSpecification->keepAlive = false;
    $request->jobScheduleAddParameter->jobSpecification->poolInfo->autoPoolSpecification->pool = new PoolSpecification();
    $request->jobScheduleAddParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->applicationPackageReferences = [
        new ApplicationPackageReference(),
        new ApplicationPackageReference(),
        new ApplicationPackageReference(),
        new ApplicationPackageReference(),
    ];
    $request->jobScheduleAddParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->autoScaleEvaluationInterval = 'modi';
    $request->jobScheduleAddParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->autoScaleFormula = 'iste';
    $request->jobScheduleAddParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->certificateReferences = [
        new CertificateReference(),
        new CertificateReference(),
        new CertificateReference(),
    ];
    $request->jobScheduleAddParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->displayName = 'deleniti';
    $request->jobScheduleAddParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->enableAutoScale = false;
    $request->jobScheduleAddParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->enableInterNodeCommunication = false;
    $request->jobScheduleAddParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->maxTasksPerNode = 864282;
    $request->jobScheduleAddParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->metadata = [
        new MetadataItem(),
        new MetadataItem(),
        new MetadataItem(),
    ];
    $request->jobScheduleAddParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->osFamily = 'nobis';
    $request->jobScheduleAddParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->resizeTimeout = 'libero';
    $request->jobScheduleAddParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->startTask = new StartTask();
    $request->jobScheduleAddParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->startTask->commandLine = 'delectus';
    $request->jobScheduleAddParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->startTask->environmentSettings = [
        new EnvironmentSetting(),
        new EnvironmentSetting(),
    ];
    $request->jobScheduleAddParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->startTask->maxTaskRetryCount = 554242;
    $request->jobScheduleAddParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->startTask->resourceFiles = [
        new ResourceFile(),
        new ResourceFile(),
    ];
    $request->jobScheduleAddParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->startTask->runElevated = false;
    $request->jobScheduleAddParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->startTask->waitForSuccess = false;
    $request->jobScheduleAddParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->targetDedicated = 212390;
    $request->jobScheduleAddParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->targetOSVersion = 'dolorem';
    $request->jobScheduleAddParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->taskSchedulingPolicy = new TaskSchedulingPolicy();
    $request->jobScheduleAddParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->taskSchedulingPolicy->nodeFillType = TaskSchedulingPolicyNodeFillTypeEnum::SPREAD;
    $request->jobScheduleAddParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->vmSize = 'qui';
    $request->jobScheduleAddParameter->jobSpecification->poolInfo->autoPoolSpecification->poolLifetimeOption = AutoPoolSpecificationPoolLifetimeOptionEnum::JOBSCHEDULE;
    $request->jobScheduleAddParameter->jobSpecification->poolInfo->poolId = 'hic';
    $request->jobScheduleAddParameter->jobSpecification->priority = 569574;
    $request->jobScheduleAddParameter->jobSpecification->usesTaskDependencies = false;
    $request->jobScheduleAddParameter->metadata = [
        new MetadataItem(),
        new MetadataItem(),
        new MetadataItem(),
    ];
    $request->jobScheduleAddParameter->schedule = new Schedule();
    $request->jobScheduleAddParameter->schedule->doNotRunAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-05T23:34:50.715Z');
    $request->jobScheduleAddParameter->schedule->doNotRunUntil = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-26T23:32:35.989Z');
    $request->jobScheduleAddParameter->schedule->recurrenceInterval = 'dolorum';
    $request->jobScheduleAddParameter->schedule->startWindow = 'numquam';
    $request->apiVersion = 'veritatis';
    $request->clientRequestId = 'ipsa';
    $request->ocpDate = 'ipsa';
    $request->returnClientRequestId = false;
    $request->timeout = 434417;

    $response = $sdk->jobSchedules->jobScheduleAdd($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## jobScheduleDelete

Deletes a job schedule from the specified account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\JobScheduleDeleteRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new JobScheduleDeleteRequest();
    $request->ifMatch = 'odio';
    $request->ifModifiedSince = 'quaerat';
    $request->ifNoneMatch = 'accusamus';
    $request->ifUnmodifiedSince = 'quidem';
    $request->apiVersion = 'voluptatibus';
    $request->clientRequestId = 'voluptas';
    $request->jobScheduleId = 'natus';
    $request->ocpDate = 'eos';
    $request->returnClientRequestId = false;
    $request->timeout = 542499;

    $response = $sdk->jobSchedules->jobScheduleDelete($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## jobScheduleDisable

Disables a job schedule.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\JobScheduleDisableRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new JobScheduleDisableRequest();
    $request->ifMatch = 'sit';
    $request->ifModifiedSince = 'fugiat';
    $request->ifNoneMatch = 'ab';
    $request->ifUnmodifiedSince = 'soluta';
    $request->apiVersion = 'dolorum';
    $request->clientRequestId = 'iusto';
    $request->jobScheduleId = 'voluptate';
    $request->ocpDate = 'dolorum';
    $request->returnClientRequestId = false;
    $request->timeout = 536579;

    $response = $sdk->jobSchedules->jobScheduleDisable($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## jobScheduleEnable

Enables a job schedule.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\JobScheduleEnableRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new JobScheduleEnableRequest();
    $request->ifMatch = 'omnis';
    $request->ifModifiedSince = 'necessitatibus';
    $request->ifNoneMatch = 'distinctio';
    $request->ifUnmodifiedSince = 'asperiores';
    $request->apiVersion = 'nihil';
    $request->clientRequestId = 'ipsum';
    $request->jobScheduleId = 'voluptate';
    $request->ocpDate = 'id';
    $request->returnClientRequestId = false;
    $request->timeout = 906418;

    $response = $sdk->jobSchedules->jobScheduleEnable($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## jobScheduleExists

Checks the specified job schedule exists.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\JobScheduleExistsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new JobScheduleExistsRequest();
    $request->dollarSelect = 'eius';
    $request->ifMatch = 'aspernatur';
    $request->ifModifiedSince = 'perferendis';
    $request->ifNoneMatch = 'amet';
    $request->ifUnmodifiedSince = 'optio';
    $request->apiVersion = 'accusamus';
    $request->clientRequestId = 'ad';
    $request->jobScheduleId = 'saepe';
    $request->ocpDate = 'suscipit';
    $request->returnClientRequestId = false;
    $request->timeout = 645785;

    $response = $sdk->jobSchedules->jobScheduleExists($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## jobScheduleGet

Gets information about the specified job schedule.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\JobScheduleGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new JobScheduleGetRequest();
    $request->dollarExpand = 'provident';
    $request->dollarSelect = 'minima';
    $request->ifMatch = 'repellendus';
    $request->ifModifiedSince = 'totam';
    $request->ifNoneMatch = 'similique';
    $request->ifUnmodifiedSince = 'alias';
    $request->apiVersion = 'at';
    $request->clientRequestId = 'quaerat';
    $request->jobScheduleId = 'tempora';
    $request->ocpDate = 'vel';
    $request->returnClientRequestId = false;
    $request->timeout = 798047;

    $response = $sdk->jobSchedules->jobScheduleGet($request);

    if ($response->cloudJobSchedule !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## jobScheduleList

Lists all of the job schedules in the specified account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\JobScheduleListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new JobScheduleListRequest();
    $request->dollarExpand = 'officiis';
    $request->dollarFilter = 'qui';
    $request->dollarSelect = 'dolorum';
    $request->apiVersion = 'a';
    $request->clientRequestId = 'esse';
    $request->maxresults = 687488;
    $request->ocpDate = 'iusto';
    $request->returnClientRequestId = false;
    $request->timeout = 215507;

    $response = $sdk->jobSchedules->jobScheduleList($request);

    if ($response->cloudJobScheduleListResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## jobSchedulePatch

Updates the properties of the specified job schedule.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\JobSchedulePatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\JobSchedulePatchParameter;
use \OpenAPI\OpenAPI\Models\Shared\JobSpecification;
use \OpenAPI\OpenAPI\Models\Shared\EnvironmentSetting;
use \OpenAPI\OpenAPI\Models\Shared\JobConstraints;
use \OpenAPI\OpenAPI\Models\Shared\JobManagerTask;
use \OpenAPI\OpenAPI\Models\Shared\TaskConstraints;
use \OpenAPI\OpenAPI\Models\Shared\ResourceFile;
use \OpenAPI\OpenAPI\Models\Shared\JobPreparationTask;
use \OpenAPI\OpenAPI\Models\Shared\JobReleaseTask;
use \OpenAPI\OpenAPI\Models\Shared\MetadataItem;
use \OpenAPI\OpenAPI\Models\Shared\PoolInformation;
use \OpenAPI\OpenAPI\Models\Shared\AutoPoolSpecification;
use \OpenAPI\OpenAPI\Models\Shared\PoolSpecification;
use \OpenAPI\OpenAPI\Models\Shared\ApplicationPackageReference;
use \OpenAPI\OpenAPI\Models\Shared\CertificateReference;
use \OpenAPI\OpenAPI\Models\Shared\CertificateReferenceStoreLocationEnum;
use \OpenAPI\OpenAPI\Models\Shared\StartTask;
use \OpenAPI\OpenAPI\Models\Shared\TaskSchedulingPolicy;
use \OpenAPI\OpenAPI\Models\Shared\TaskSchedulingPolicyNodeFillTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AutoPoolSpecificationPoolLifetimeOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\Schedule;

$sdk = SDK::builder()
    ->build();

try {
    $request = new JobSchedulePatchRequest();
    $request->ifMatch = 'quisquam';
    $request->ifModifiedSince = 'tenetur';
    $request->ifNoneMatch = 'amet';
    $request->ifUnmodifiedSince = 'tempore';
    $request->jobSchedulePatchParameter = new JobSchedulePatchParameter();
    $request->jobSchedulePatchParameter->jobSpecification = new JobSpecification();
    $request->jobSchedulePatchParameter->jobSpecification->commonEnvironmentSettings = [
        new EnvironmentSetting(),
        new EnvironmentSetting(),
        new EnvironmentSetting(),
        new EnvironmentSetting(),
    ];
    $request->jobSchedulePatchParameter->jobSpecification->constraints = new JobConstraints();
    $request->jobSchedulePatchParameter->jobSpecification->constraints->maxTaskRetryCount = 253941;
    $request->jobSchedulePatchParameter->jobSpecification->constraints->maxWallClockTime = 'enim';
    $request->jobSchedulePatchParameter->jobSpecification->displayName = 'dolorem';
    $request->jobSchedulePatchParameter->jobSpecification->jobManagerTask = new JobManagerTask();
    $request->jobSchedulePatchParameter->jobSpecification->jobManagerTask->commandLine = 'sapiente';
    $request->jobSchedulePatchParameter->jobSpecification->jobManagerTask->constraints = new TaskConstraints();
    $request->jobSchedulePatchParameter->jobSpecification->jobManagerTask->constraints->maxTaskRetryCount = 518201;
    $request->jobSchedulePatchParameter->jobSpecification->jobManagerTask->constraints->maxWallClockTime = 'nihil';
    $request->jobSchedulePatchParameter->jobSpecification->jobManagerTask->constraints->retentionTime = 'sit';
    $request->jobSchedulePatchParameter->jobSpecification->jobManagerTask->displayName = 'expedita';
    $request->jobSchedulePatchParameter->jobSpecification->jobManagerTask->environmentSettings = [
        new EnvironmentSetting(),
    ];
    $request->jobSchedulePatchParameter->jobSpecification->jobManagerTask->id = '26b5a734-29cd-4b1a-8422-bb679d232271';
    $request->jobSchedulePatchParameter->jobSpecification->jobManagerTask->killJobOnCompletion = false;
    $request->jobSchedulePatchParameter->jobSpecification->jobManagerTask->resourceFiles = [
        new ResourceFile(),
        new ResourceFile(),
    ];
    $request->jobSchedulePatchParameter->jobSpecification->jobManagerTask->runElevated = false;
    $request->jobSchedulePatchParameter->jobSpecification->jobManagerTask->runExclusive = false;
    $request->jobSchedulePatchParameter->jobSpecification->jobPreparationTask = new JobPreparationTask();
    $request->jobSchedulePatchParameter->jobSpecification->jobPreparationTask->commandLine = 'nam';
    $request->jobSchedulePatchParameter->jobSpecification->jobPreparationTask->constraints = new TaskConstraints();
    $request->jobSchedulePatchParameter->jobSpecification->jobPreparationTask->constraints->maxTaskRetryCount = 940432;
    $request->jobSchedulePatchParameter->jobSpecification->jobPreparationTask->constraints->maxWallClockTime = 'voluptatem';
    $request->jobSchedulePatchParameter->jobSpecification->jobPreparationTask->constraints->retentionTime = 'cumque';
    $request->jobSchedulePatchParameter->jobSpecification->jobPreparationTask->environmentSettings = [
        new EnvironmentSetting(),
        new EnvironmentSetting(),
        new EnvironmentSetting(),
    ];
    $request->jobSchedulePatchParameter->jobSpecification->jobPreparationTask->id = 'b1e31b8b-90f3-4443-a110-8e0adcf4b921';
    $request->jobSchedulePatchParameter->jobSpecification->jobPreparationTask->rerunOnNodeRebootAfterSuccess = false;
    $request->jobSchedulePatchParameter->jobSpecification->jobPreparationTask->resourceFiles = [
        new ResourceFile(),
        new ResourceFile(),
        new ResourceFile(),
    ];
    $request->jobSchedulePatchParameter->jobSpecification->jobPreparationTask->runElevated = false;
    $request->jobSchedulePatchParameter->jobSpecification->jobPreparationTask->waitForSuccess = false;
    $request->jobSchedulePatchParameter->jobSpecification->jobReleaseTask = new JobReleaseTask();
    $request->jobSchedulePatchParameter->jobSpecification->jobReleaseTask->commandLine = 'odio';
    $request->jobSchedulePatchParameter->jobSpecification->jobReleaseTask->environmentSettings = [
        new EnvironmentSetting(),
        new EnvironmentSetting(),
        new EnvironmentSetting(),
    ];
    $request->jobSchedulePatchParameter->jobSpecification->jobReleaseTask->id = 'fce953f7-3ef7-4fbc-babd-74dd39c0f5d2';
    $request->jobSchedulePatchParameter->jobSpecification->jobReleaseTask->maxWallClockTime = 'porro';
    $request->jobSchedulePatchParameter->jobSpecification->jobReleaseTask->resourceFiles = [
        new ResourceFile(),
        new ResourceFile(),
        new ResourceFile(),
        new ResourceFile(),
    ];
    $request->jobSchedulePatchParameter->jobSpecification->jobReleaseTask->retentionTime = 'doloribus';
    $request->jobSchedulePatchParameter->jobSpecification->jobReleaseTask->runElevated = false;
    $request->jobSchedulePatchParameter->jobSpecification->metadata = [
        new MetadataItem(),
        new MetadataItem(),
    ];
    $request->jobSchedulePatchParameter->jobSpecification->poolInfo = new PoolInformation();
    $request->jobSchedulePatchParameter->jobSpecification->poolInfo->autoPoolSpecification = new AutoPoolSpecification();
    $request->jobSchedulePatchParameter->jobSpecification->poolInfo->autoPoolSpecification->autoPoolIdPrefix = 'eligendi';
    $request->jobSchedulePatchParameter->jobSpecification->poolInfo->autoPoolSpecification->keepAlive = false;
    $request->jobSchedulePatchParameter->jobSpecification->poolInfo->autoPoolSpecification->pool = new PoolSpecification();
    $request->jobSchedulePatchParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->applicationPackageReferences = [
        new ApplicationPackageReference(),
        new ApplicationPackageReference(),
    ];
    $request->jobSchedulePatchParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->autoScaleEvaluationInterval = 'alias';
    $request->jobSchedulePatchParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->autoScaleFormula = 'officia';
    $request->jobSchedulePatchParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->certificateReferences = [
        new CertificateReference(),
        new CertificateReference(),
    ];
    $request->jobSchedulePatchParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->displayName = 'ipsam';
    $request->jobSchedulePatchParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->enableAutoScale = false;
    $request->jobSchedulePatchParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->enableInterNodeCommunication = false;
    $request->jobSchedulePatchParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->maxTasksPerNode = 410492;
    $request->jobSchedulePatchParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->metadata = [
        new MetadataItem(),
    ];
    $request->jobSchedulePatchParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->osFamily = 'vel';
    $request->jobSchedulePatchParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->resizeTimeout = 'possimus';
    $request->jobSchedulePatchParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->startTask = new StartTask();
    $request->jobSchedulePatchParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->startTask->commandLine = 'magnam';
    $request->jobSchedulePatchParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->startTask->environmentSettings = [
        new EnvironmentSetting(),
    ];
    $request->jobSchedulePatchParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->startTask->maxTaskRetryCount = 401132;
    $request->jobSchedulePatchParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->startTask->resourceFiles = [
        new ResourceFile(),
        new ResourceFile(),
        new ResourceFile(),
    ];
    $request->jobSchedulePatchParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->startTask->runElevated = false;
    $request->jobSchedulePatchParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->startTask->waitForSuccess = false;
    $request->jobSchedulePatchParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->targetDedicated = 120657;
    $request->jobSchedulePatchParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->targetOSVersion = 'dolor';
    $request->jobSchedulePatchParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->taskSchedulingPolicy = new TaskSchedulingPolicy();
    $request->jobSchedulePatchParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->taskSchedulingPolicy->nodeFillType = TaskSchedulingPolicyNodeFillTypeEnum::UNMAPPED;
    $request->jobSchedulePatchParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->vmSize = 'quasi';
    $request->jobSchedulePatchParameter->jobSpecification->poolInfo->autoPoolSpecification->poolLifetimeOption = AutoPoolSpecificationPoolLifetimeOptionEnum::JOB;
    $request->jobSchedulePatchParameter->jobSpecification->poolInfo->poolId = 'nulla';
    $request->jobSchedulePatchParameter->jobSpecification->priority = 569211;
    $request->jobSchedulePatchParameter->jobSpecification->usesTaskDependencies = false;
    $request->jobSchedulePatchParameter->metadata = [
        new MetadataItem(),
        new MetadataItem(),
        new MetadataItem(),
        new MetadataItem(),
    ];
    $request->jobSchedulePatchParameter->schedule = new Schedule();
    $request->jobSchedulePatchParameter->schedule->doNotRunAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-15T07:05:18.296Z');
    $request->jobSchedulePatchParameter->schedule->doNotRunUntil = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-04-13T07:43:17.350Z');
    $request->jobSchedulePatchParameter->schedule->recurrenceInterval = 'ea';
    $request->jobSchedulePatchParameter->schedule->startWindow = 'impedit';
    $request->apiVersion = 'corporis';
    $request->clientRequestId = 'veniam';
    $request->jobScheduleId = 'aliquid';
    $request->ocpDate = 'inventore';
    $request->returnClientRequestId = false;
    $request->timeout = 301831;

    $response = $sdk->jobSchedules->jobSchedulePatch($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## jobScheduleTerminate

Terminates a job schedule.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\JobScheduleTerminateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new JobScheduleTerminateRequest();
    $request->ifMatch = 'ea';
    $request->ifModifiedSince = 'quo';
    $request->ifNoneMatch = 'consectetur';
    $request->ifUnmodifiedSince = 'recusandae';
    $request->apiVersion = 'aspernatur';
    $request->clientRequestId = 'minima';
    $request->jobScheduleId = 'eaque';
    $request->ocpDate = 'a';
    $request->returnClientRequestId = false;
    $request->timeout = 725595;

    $response = $sdk->jobSchedules->jobScheduleTerminate($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## jobScheduleUpdate

Updates the properties of the specified job schedule.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\JobScheduleUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\JobScheduleUpdateParameter;
use \OpenAPI\OpenAPI\Models\Shared\JobSpecification;
use \OpenAPI\OpenAPI\Models\Shared\EnvironmentSetting;
use \OpenAPI\OpenAPI\Models\Shared\JobConstraints;
use \OpenAPI\OpenAPI\Models\Shared\JobManagerTask;
use \OpenAPI\OpenAPI\Models\Shared\TaskConstraints;
use \OpenAPI\OpenAPI\Models\Shared\ResourceFile;
use \OpenAPI\OpenAPI\Models\Shared\JobPreparationTask;
use \OpenAPI\OpenAPI\Models\Shared\JobReleaseTask;
use \OpenAPI\OpenAPI\Models\Shared\MetadataItem;
use \OpenAPI\OpenAPI\Models\Shared\PoolInformation;
use \OpenAPI\OpenAPI\Models\Shared\AutoPoolSpecification;
use \OpenAPI\OpenAPI\Models\Shared\PoolSpecification;
use \OpenAPI\OpenAPI\Models\Shared\ApplicationPackageReference;
use \OpenAPI\OpenAPI\Models\Shared\CertificateReference;
use \OpenAPI\OpenAPI\Models\Shared\CertificateReferenceStoreLocationEnum;
use \OpenAPI\OpenAPI\Models\Shared\StartTask;
use \OpenAPI\OpenAPI\Models\Shared\TaskSchedulingPolicy;
use \OpenAPI\OpenAPI\Models\Shared\TaskSchedulingPolicyNodeFillTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AutoPoolSpecificationPoolLifetimeOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\Schedule;

$sdk = SDK::builder()
    ->build();

try {
    $request = new JobScheduleUpdateRequest();
    $request->ifMatch = 'aut';
    $request->ifModifiedSince = 'aut';
    $request->ifNoneMatch = 'deleniti';
    $request->ifUnmodifiedSince = 'impedit';
    $request->jobScheduleUpdateParameter = new JobScheduleUpdateParameter();
    $request->jobScheduleUpdateParameter->jobSpecification = new JobSpecification();
    $request->jobScheduleUpdateParameter->jobSpecification->commonEnvironmentSettings = [
        new EnvironmentSetting(),
        new EnvironmentSetting(),
    ];
    $request->jobScheduleUpdateParameter->jobSpecification->constraints = new JobConstraints();
    $request->jobScheduleUpdateParameter->jobSpecification->constraints->maxTaskRetryCount = 146946;
    $request->jobScheduleUpdateParameter->jobSpecification->constraints->maxWallClockTime = 'accusamus';
    $request->jobScheduleUpdateParameter->jobSpecification->displayName = 'inventore';
    $request->jobScheduleUpdateParameter->jobSpecification->jobManagerTask = new JobManagerTask();
    $request->jobScheduleUpdateParameter->jobSpecification->jobManagerTask->commandLine = 'non';
    $request->jobScheduleUpdateParameter->jobSpecification->jobManagerTask->constraints = new TaskConstraints();
    $request->jobScheduleUpdateParameter->jobSpecification->jobManagerTask->constraints->maxTaskRetryCount = 89603;
    $request->jobScheduleUpdateParameter->jobSpecification->jobManagerTask->constraints->maxWallClockTime = 'dolorum';
    $request->jobScheduleUpdateParameter->jobSpecification->jobManagerTask->constraints->retentionTime = 'laborum';
    $request->jobScheduleUpdateParameter->jobSpecification->jobManagerTask->displayName = 'placeat';
    $request->jobScheduleUpdateParameter->jobSpecification->jobManagerTask->environmentSettings = [
        new EnvironmentSetting(),
    ];
    $request->jobScheduleUpdateParameter->jobSpecification->jobManagerTask->id = '66c8dd6b-1442-4907-8747-78a7bd466d28';
    $request->jobScheduleUpdateParameter->jobSpecification->jobManagerTask->killJobOnCompletion = false;
    $request->jobScheduleUpdateParameter->jobSpecification->jobManagerTask->resourceFiles = [
        new ResourceFile(),
        new ResourceFile(),
        new ResourceFile(),
        new ResourceFile(),
    ];
    $request->jobScheduleUpdateParameter->jobSpecification->jobManagerTask->runElevated = false;
    $request->jobScheduleUpdateParameter->jobSpecification->jobManagerTask->runExclusive = false;
    $request->jobScheduleUpdateParameter->jobSpecification->jobPreparationTask = new JobPreparationTask();
    $request->jobScheduleUpdateParameter->jobSpecification->jobPreparationTask->commandLine = 'veritatis';
    $request->jobScheduleUpdateParameter->jobSpecification->jobPreparationTask->constraints = new TaskConstraints();
    $request->jobScheduleUpdateParameter->jobSpecification->jobPreparationTask->constraints->maxTaskRetryCount = 56848;
    $request->jobScheduleUpdateParameter->jobSpecification->jobPreparationTask->constraints->maxWallClockTime = 'id';
    $request->jobScheduleUpdateParameter->jobSpecification->jobPreparationTask->constraints->retentionTime = 'quidem';
    $request->jobScheduleUpdateParameter->jobSpecification->jobPreparationTask->environmentSettings = [
        new EnvironmentSetting(),
    ];
    $request->jobScheduleUpdateParameter->jobSpecification->jobPreparationTask->id = 'cdca4251-904e-4523-87e0-bc7178e4796f';
    $request->jobScheduleUpdateParameter->jobSpecification->jobPreparationTask->rerunOnNodeRebootAfterSuccess = false;
    $request->jobScheduleUpdateParameter->jobSpecification->jobPreparationTask->resourceFiles = [
        new ResourceFile(),
    ];
    $request->jobScheduleUpdateParameter->jobSpecification->jobPreparationTask->runElevated = false;
    $request->jobScheduleUpdateParameter->jobSpecification->jobPreparationTask->waitForSuccess = false;
    $request->jobScheduleUpdateParameter->jobSpecification->jobReleaseTask = new JobReleaseTask();
    $request->jobScheduleUpdateParameter->jobSpecification->jobReleaseTask->commandLine = 'deserunt';
    $request->jobScheduleUpdateParameter->jobSpecification->jobReleaseTask->environmentSettings = [
        new EnvironmentSetting(),
        new EnvironmentSetting(),
    ];
    $request->jobScheduleUpdateParameter->jobSpecification->jobReleaseTask->id = '0c688282-aa48-4256-af22-2e9817ee17cb';
    $request->jobScheduleUpdateParameter->jobSpecification->jobReleaseTask->maxWallClockTime = 'vero';
    $request->jobScheduleUpdateParameter->jobSpecification->jobReleaseTask->resourceFiles = [
        new ResourceFile(),
        new ResourceFile(),
    ];
    $request->jobScheduleUpdateParameter->jobSpecification->jobReleaseTask->retentionTime = 'quasi';
    $request->jobScheduleUpdateParameter->jobSpecification->jobReleaseTask->runElevated = false;
    $request->jobScheduleUpdateParameter->jobSpecification->metadata = [
        new MetadataItem(),
        new MetadataItem(),
        new MetadataItem(),
        new MetadataItem(),
    ];
    $request->jobScheduleUpdateParameter->jobSpecification->poolInfo = new PoolInformation();
    $request->jobScheduleUpdateParameter->jobSpecification->poolInfo->autoPoolSpecification = new AutoPoolSpecification();
    $request->jobScheduleUpdateParameter->jobSpecification->poolInfo->autoPoolSpecification->autoPoolIdPrefix = 'vel';
    $request->jobScheduleUpdateParameter->jobSpecification->poolInfo->autoPoolSpecification->keepAlive = false;
    $request->jobScheduleUpdateParameter->jobSpecification->poolInfo->autoPoolSpecification->pool = new PoolSpecification();
    $request->jobScheduleUpdateParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->applicationPackageReferences = [
        new ApplicationPackageReference(),
        new ApplicationPackageReference(),
        new ApplicationPackageReference(),
    ];
    $request->jobScheduleUpdateParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->autoScaleEvaluationInterval = 'molestiae';
    $request->jobScheduleUpdateParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->autoScaleFormula = 'rerum';
    $request->jobScheduleUpdateParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->certificateReferences = [
        new CertificateReference(),
        new CertificateReference(),
        new CertificateReference(),
    ];
    $request->jobScheduleUpdateParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->displayName = 'minima';
    $request->jobScheduleUpdateParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->enableAutoScale = false;
    $request->jobScheduleUpdateParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->enableInterNodeCommunication = false;
    $request->jobScheduleUpdateParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->maxTasksPerNode = 716244;
    $request->jobScheduleUpdateParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->metadata = [
        new MetadataItem(),
        new MetadataItem(),
        new MetadataItem(),
        new MetadataItem(),
    ];
    $request->jobScheduleUpdateParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->osFamily = 'sit';
    $request->jobScheduleUpdateParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->resizeTimeout = 'culpa';
    $request->jobScheduleUpdateParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->startTask = new StartTask();
    $request->jobScheduleUpdateParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->startTask->commandLine = 'tempore';
    $request->jobScheduleUpdateParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->startTask->environmentSettings = [
        new EnvironmentSetting(),
    ];
    $request->jobScheduleUpdateParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->startTask->maxTaskRetryCount = 766964;
    $request->jobScheduleUpdateParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->startTask->resourceFiles = [
        new ResourceFile(),
    ];
    $request->jobScheduleUpdateParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->startTask->runElevated = false;
    $request->jobScheduleUpdateParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->startTask->waitForSuccess = false;
    $request->jobScheduleUpdateParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->targetDedicated = 9766;
    $request->jobScheduleUpdateParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->targetOSVersion = 'minus';
    $request->jobScheduleUpdateParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->taskSchedulingPolicy = new TaskSchedulingPolicy();
    $request->jobScheduleUpdateParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->taskSchedulingPolicy->nodeFillType = TaskSchedulingPolicyNodeFillTypeEnum::SPREAD;
    $request->jobScheduleUpdateParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->vmSize = 'sapiente';
    $request->jobScheduleUpdateParameter->jobSpecification->poolInfo->autoPoolSpecification->poolLifetimeOption = AutoPoolSpecificationPoolLifetimeOptionEnum::JOBSCHEDULE;
    $request->jobScheduleUpdateParameter->jobSpecification->poolInfo->poolId = 'esse';
    $request->jobScheduleUpdateParameter->jobSpecification->priority = 503427;
    $request->jobScheduleUpdateParameter->jobSpecification->usesTaskDependencies = false;
    $request->jobScheduleUpdateParameter->metadata = [
        new MetadataItem(),
        new MetadataItem(),
        new MetadataItem(),
    ];
    $request->jobScheduleUpdateParameter->schedule = new Schedule();
    $request->jobScheduleUpdateParameter->schedule->doNotRunAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-06-05T19:02:55.998Z');
    $request->jobScheduleUpdateParameter->schedule->doNotRunUntil = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-01T05:26:41.765Z');
    $request->jobScheduleUpdateParameter->schedule->recurrenceInterval = 'quasi';
    $request->jobScheduleUpdateParameter->schedule->startWindow = 'a';
    $request->apiVersion = 'error';
    $request->clientRequestId = 'sint';
    $request->jobScheduleId = 'pariatur';
    $request->ocpDate = 'possimus';
    $request->returnClientRequestId = false;
    $request->timeout = 157632;

    $response = $sdk->jobSchedules->jobScheduleUpdate($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
