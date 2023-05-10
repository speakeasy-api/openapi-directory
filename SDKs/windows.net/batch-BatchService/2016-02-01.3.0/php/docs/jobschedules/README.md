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
use \OpenAPI\OpenAPI\Models\Shared\CertificateReferenceVisibilityEnum;
use \OpenAPI\OpenAPI\Models\Shared\CloudServiceConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\StartTask;
use \OpenAPI\OpenAPI\Models\Shared\TaskSchedulingPolicy;
use \OpenAPI\OpenAPI\Models\Shared\TaskSchedulingPolicyNodeFillTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\VirtualMachineConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\ImageReference;
use \OpenAPI\OpenAPI\Models\Shared\WindowsConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\AutoPoolSpecificationPoolLifetimeOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\Schedule;

$sdk = SDK::builder()
    ->build();

try {
    $request = new JobScheduleAddRequest();
    $request->jobScheduleAddParameter = new JobScheduleAddParameter();
    $request->jobScheduleAddParameter->displayName = 'non';
    $request->jobScheduleAddParameter->id = '95efb9ba-88f3-4a66-9970-74ba4469b6e2';
    $request->jobScheduleAddParameter->jobSpecification = new JobSpecification();
    $request->jobScheduleAddParameter->jobSpecification->commonEnvironmentSettings = [
        new EnvironmentSetting(),
    ];
    $request->jobScheduleAddParameter->jobSpecification->constraints = new JobConstraints();
    $request->jobScheduleAddParameter->jobSpecification->constraints->maxTaskRetryCount = 298282;
    $request->jobScheduleAddParameter->jobSpecification->constraints->maxWallClockTime = 'et';
    $request->jobScheduleAddParameter->jobSpecification->displayName = 'excepturi';
    $request->jobScheduleAddParameter->jobSpecification->jobManagerTask = new JobManagerTask();
    $request->jobScheduleAddParameter->jobSpecification->jobManagerTask->commandLine = 'ullam';
    $request->jobScheduleAddParameter->jobSpecification->jobManagerTask->constraints = new TaskConstraints();
    $request->jobScheduleAddParameter->jobSpecification->jobManagerTask->constraints->maxTaskRetryCount = 590873;
    $request->jobScheduleAddParameter->jobSpecification->jobManagerTask->constraints->maxWallClockTime = 'quos';
    $request->jobScheduleAddParameter->jobSpecification->jobManagerTask->constraints->retentionTime = 'sint';
    $request->jobScheduleAddParameter->jobSpecification->jobManagerTask->displayName = 'accusantium';
    $request->jobScheduleAddParameter->jobSpecification->jobManagerTask->environmentSettings = [
        new EnvironmentSetting(),
        new EnvironmentSetting(),
        new EnvironmentSetting(),
    ];
    $request->jobScheduleAddParameter->jobSpecification->jobManagerTask->id = 'fa563e25-16fe-44c8-b711-e5b7fd2ed028';
    $request->jobScheduleAddParameter->jobSpecification->jobManagerTask->killJobOnCompletion = false;
    $request->jobScheduleAddParameter->jobSpecification->jobManagerTask->resourceFiles = [
        new ResourceFile(),
        new ResourceFile(),
        new ResourceFile(),
    ];
    $request->jobScheduleAddParameter->jobSpecification->jobManagerTask->runElevated = false;
    $request->jobScheduleAddParameter->jobSpecification->jobManagerTask->runExclusive = false;
    $request->jobScheduleAddParameter->jobSpecification->jobPreparationTask = new JobPreparationTask();
    $request->jobScheduleAddParameter->jobSpecification->jobPreparationTask->commandLine = 'magni';
    $request->jobScheduleAddParameter->jobSpecification->jobPreparationTask->constraints = new TaskConstraints();
    $request->jobScheduleAddParameter->jobSpecification->jobPreparationTask->constraints->maxTaskRetryCount = 123820;
    $request->jobScheduleAddParameter->jobSpecification->jobPreparationTask->constraints->maxWallClockTime = 'quo';
    $request->jobScheduleAddParameter->jobSpecification->jobPreparationTask->constraints->retentionTime = 'illum';
    $request->jobScheduleAddParameter->jobSpecification->jobPreparationTask->environmentSettings = [
        new EnvironmentSetting(),
        new EnvironmentSetting(),
        new EnvironmentSetting(),
        new EnvironmentSetting(),
    ];
    $request->jobScheduleAddParameter->jobSpecification->jobPreparationTask->id = 'c692601f-b576-4b0d-9f0d-30c5fbb25870';
    $request->jobScheduleAddParameter->jobSpecification->jobPreparationTask->rerunOnNodeRebootAfterSuccess = false;
    $request->jobScheduleAddParameter->jobSpecification->jobPreparationTask->resourceFiles = [
        new ResourceFile(),
        new ResourceFile(),
    ];
    $request->jobScheduleAddParameter->jobSpecification->jobPreparationTask->runElevated = false;
    $request->jobScheduleAddParameter->jobSpecification->jobPreparationTask->waitForSuccess = false;
    $request->jobScheduleAddParameter->jobSpecification->jobReleaseTask = new JobReleaseTask();
    $request->jobScheduleAddParameter->jobSpecification->jobReleaseTask->commandLine = 'nesciunt';
    $request->jobScheduleAddParameter->jobSpecification->jobReleaseTask->environmentSettings = [
        new EnvironmentSetting(),
    ];
    $request->jobScheduleAddParameter->jobSpecification->jobReleaseTask->id = '02c73d5f-e9b9-40c2-8909-b3fe49a8d9cb';
    $request->jobScheduleAddParameter->jobSpecification->jobReleaseTask->maxWallClockTime = 'delectus';
    $request->jobScheduleAddParameter->jobSpecification->jobReleaseTask->resourceFiles = [
        new ResourceFile(),
        new ResourceFile(),
    ];
    $request->jobScheduleAddParameter->jobSpecification->jobReleaseTask->retentionTime = 'quos';
    $request->jobScheduleAddParameter->jobSpecification->jobReleaseTask->runElevated = false;
    $request->jobScheduleAddParameter->jobSpecification->metadata = [
        new MetadataItem(),
        new MetadataItem(),
    ];
    $request->jobScheduleAddParameter->jobSpecification->poolInfo = new PoolInformation();
    $request->jobScheduleAddParameter->jobSpecification->poolInfo->autoPoolSpecification = new AutoPoolSpecification();
    $request->jobScheduleAddParameter->jobSpecification->poolInfo->autoPoolSpecification->autoPoolIdPrefix = 'dolorem';
    $request->jobScheduleAddParameter->jobSpecification->poolInfo->autoPoolSpecification->keepAlive = false;
    $request->jobScheduleAddParameter->jobSpecification->poolInfo->autoPoolSpecification->pool = new PoolSpecification();
    $request->jobScheduleAddParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->applicationPackageReferences = [
        new ApplicationPackageReference(),
    ];
    $request->jobScheduleAddParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->autoScaleEvaluationInterval = 'dolor';
    $request->jobScheduleAddParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->autoScaleFormula = 'qui';
    $request->jobScheduleAddParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->certificateReferences = [
        new CertificateReference(),
    ];
    $request->jobScheduleAddParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->cloudServiceConfiguration = new CloudServiceConfiguration();
    $request->jobScheduleAddParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->cloudServiceConfiguration->currentOSVersion = 'hic';
    $request->jobScheduleAddParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->cloudServiceConfiguration->osFamily = 'excepturi';
    $request->jobScheduleAddParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->cloudServiceConfiguration->targetOSVersion = 'cum';
    $request->jobScheduleAddParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->displayName = 'voluptate';
    $request->jobScheduleAddParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->enableAutoScale = false;
    $request->jobScheduleAddParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->enableInterNodeCommunication = false;
    $request->jobScheduleAddParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->maxTasksPerNode = 490459;
    $request->jobScheduleAddParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->metadata = [
        new MetadataItem(),
        new MetadataItem(),
        new MetadataItem(),
        new MetadataItem(),
    ];
    $request->jobScheduleAddParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->resizeTimeout = 'amet';
    $request->jobScheduleAddParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->startTask = new StartTask();
    $request->jobScheduleAddParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->startTask->commandLine = 'dolorum';
    $request->jobScheduleAddParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->startTask->environmentSettings = [
        new EnvironmentSetting(),
        new EnvironmentSetting(),
    ];
    $request->jobScheduleAddParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->startTask->maxTaskRetryCount = 85295;
    $request->jobScheduleAddParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->startTask->resourceFiles = [
        new ResourceFile(),
    ];
    $request->jobScheduleAddParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->startTask->runElevated = false;
    $request->jobScheduleAddParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->startTask->waitForSuccess = false;
    $request->jobScheduleAddParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->targetDedicated = 56418;
    $request->jobScheduleAddParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->taskSchedulingPolicy = new TaskSchedulingPolicy();
    $request->jobScheduleAddParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->taskSchedulingPolicy->nodeFillType = TaskSchedulingPolicyNodeFillTypeEnum::PACK;
    $request->jobScheduleAddParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->virtualMachineConfiguration = new VirtualMachineConfiguration();
    $request->jobScheduleAddParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->virtualMachineConfiguration->imageReference = new ImageReference();
    $request->jobScheduleAddParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->virtualMachineConfiguration->imageReference->offer = 'odio';
    $request->jobScheduleAddParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->virtualMachineConfiguration->imageReference->publisher = 'quaerat';
    $request->jobScheduleAddParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->virtualMachineConfiguration->imageReference->sku = 'accusamus';
    $request->jobScheduleAddParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->virtualMachineConfiguration->imageReference->version = 'quidem';
    $request->jobScheduleAddParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->virtualMachineConfiguration->nodeAgentSKUId = 'voluptatibus';
    $request->jobScheduleAddParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->virtualMachineConfiguration->windowsConfiguration = new WindowsConfiguration();
    $request->jobScheduleAddParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->virtualMachineConfiguration->windowsConfiguration->enableAutomaticUpdates = false;
    $request->jobScheduleAddParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->vmSize = 'voluptas';
    $request->jobScheduleAddParameter->jobSpecification->poolInfo->autoPoolSpecification->poolLifetimeOption = AutoPoolSpecificationPoolLifetimeOptionEnum::JOB;
    $request->jobScheduleAddParameter->jobSpecification->poolInfo->poolId = 'eos';
    $request->jobScheduleAddParameter->jobSpecification->priority = 542499;
    $request->jobScheduleAddParameter->jobSpecification->usesTaskDependencies = false;
    $request->jobScheduleAddParameter->metadata = [
        new MetadataItem(),
    ];
    $request->jobScheduleAddParameter->schedule = new Schedule();
    $request->jobScheduleAddParameter->schedule->doNotRunAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-19T08:40:45.996Z');
    $request->jobScheduleAddParameter->schedule->doNotRunUntil = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-08-23T01:02:18.527Z');
    $request->jobScheduleAddParameter->schedule->recurrenceInterval = 'iusto';
    $request->jobScheduleAddParameter->schedule->startWindow = 'voluptate';
    $request->apiVersion = 'dolorum';
    $request->clientRequestId = 'deleniti';
    $request->ocpDate = 'omnis';
    $request->returnClientRequestId = false;
    $request->timeout = 896672;

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
    $request->ifMatch = 'distinctio';
    $request->ifModifiedSince = 'asperiores';
    $request->ifNoneMatch = 'nihil';
    $request->ifUnmodifiedSince = 'ipsum';
    $request->apiVersion = 'voluptate';
    $request->clientRequestId = 'id';
    $request->jobScheduleId = 'saepe';
    $request->ocpDate = 'eius';
    $request->returnClientRequestId = false;
    $request->timeout = 137220;

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
    $request->ifMatch = 'perferendis';
    $request->ifModifiedSince = 'amet';
    $request->ifNoneMatch = 'optio';
    $request->ifUnmodifiedSince = 'accusamus';
    $request->apiVersion = 'ad';
    $request->clientRequestId = 'saepe';
    $request->jobScheduleId = 'suscipit';
    $request->ocpDate = 'deserunt';
    $request->returnClientRequestId = false;
    $request->timeout = 588317;

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
    $request->ifMatch = 'minima';
    $request->ifModifiedSince = 'repellendus';
    $request->ifNoneMatch = 'totam';
    $request->ifUnmodifiedSince = 'similique';
    $request->apiVersion = 'alias';
    $request->clientRequestId = 'at';
    $request->jobScheduleId = 'quaerat';
    $request->ocpDate = 'tempora';
    $request->returnClientRequestId = false;
    $request->timeout = 425451;

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
    $request->ifMatch = 'quod';
    $request->ifModifiedSince = 'officiis';
    $request->ifNoneMatch = 'qui';
    $request->ifUnmodifiedSince = 'dolorum';
    $request->apiVersion = 'a';
    $request->clientRequestId = 'esse';
    $request->jobScheduleId = 'harum';
    $request->ocpDate = 'iusto';
    $request->returnClientRequestId = false;
    $request->timeout = 215507;

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
    $request->dollarExpand = 'quisquam';
    $request->dollarSelect = 'tenetur';
    $request->ifMatch = 'amet';
    $request->ifModifiedSince = 'tempore';
    $request->ifNoneMatch = 'accusamus';
    $request->ifUnmodifiedSince = 'numquam';
    $request->apiVersion = 'enim';
    $request->clientRequestId = 'dolorem';
    $request->jobScheduleId = 'sapiente';
    $request->ocpDate = 'totam';
    $request->returnClientRequestId = false;
    $request->timeout = 471752;

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
    $request->dollarExpand = 'sit';
    $request->dollarFilter = 'expedita';
    $request->dollarSelect = 'neque';
    $request->apiVersion = 'sed';
    $request->clientRequestId = 'vel';
    $request->maxresults = 730442;
    $request->ocpDate = 'voluptas';
    $request->returnClientRequestId = false;
    $request->timeout = 646265;

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
use \OpenAPI\OpenAPI\Models\Shared\CertificateReferenceVisibilityEnum;
use \OpenAPI\OpenAPI\Models\Shared\CloudServiceConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\StartTask;
use \OpenAPI\OpenAPI\Models\Shared\TaskSchedulingPolicy;
use \OpenAPI\OpenAPI\Models\Shared\TaskSchedulingPolicyNodeFillTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\VirtualMachineConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\ImageReference;
use \OpenAPI\OpenAPI\Models\Shared\WindowsConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\AutoPoolSpecificationPoolLifetimeOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\Schedule;

$sdk = SDK::builder()
    ->build();

try {
    $request = new JobSchedulePatchRequest();
    $request->ifMatch = 'quam';
    $request->ifModifiedSince = 'ipsum';
    $request->ifNoneMatch = 'incidunt';
    $request->ifUnmodifiedSince = 'qui';
    $request->jobSchedulePatchParameter = new JobSchedulePatchParameter();
    $request->jobSchedulePatchParameter->jobSpecification = new JobSpecification();
    $request->jobSchedulePatchParameter->jobSpecification->commonEnvironmentSettings = [
        new EnvironmentSetting(),
        new EnvironmentSetting(),
        new EnvironmentSetting(),
    ];
    $request->jobSchedulePatchParameter->jobSpecification->constraints = new JobConstraints();
    $request->jobSchedulePatchParameter->jobSpecification->constraints->maxTaskRetryCount = 807581;
    $request->jobSchedulePatchParameter->jobSpecification->constraints->maxWallClockTime = 'pariatur';
    $request->jobSchedulePatchParameter->jobSpecification->displayName = 'soluta';
    $request->jobSchedulePatchParameter->jobSpecification->jobManagerTask = new JobManagerTask();
    $request->jobSchedulePatchParameter->jobSpecification->jobManagerTask->commandLine = 'dicta';
    $request->jobSchedulePatchParameter->jobSpecification->jobManagerTask->constraints = new TaskConstraints();
    $request->jobSchedulePatchParameter->jobSpecification->jobManagerTask->constraints->maxTaskRetryCount = 674848;
    $request->jobSchedulePatchParameter->jobSpecification->jobManagerTask->constraints->maxWallClockTime = 'totam';
    $request->jobSchedulePatchParameter->jobSpecification->jobManagerTask->constraints->retentionTime = 'incidunt';
    $request->jobSchedulePatchParameter->jobSpecification->jobManagerTask->displayName = 'aspernatur';
    $request->jobSchedulePatchParameter->jobSpecification->jobManagerTask->environmentSettings = [
        new EnvironmentSetting(),
    ];
    $request->jobSchedulePatchParameter->jobSpecification->jobManagerTask->id = 'bb679d23-2271-45bf-8cbb-1e31b8b90f34';
    $request->jobSchedulePatchParameter->jobSpecification->jobManagerTask->killJobOnCompletion = false;
    $request->jobSchedulePatchParameter->jobSpecification->jobManagerTask->resourceFiles = [
        new ResourceFile(),
        new ResourceFile(),
    ];
    $request->jobSchedulePatchParameter->jobSpecification->jobManagerTask->runElevated = false;
    $request->jobSchedulePatchParameter->jobSpecification->jobManagerTask->runExclusive = false;
    $request->jobSchedulePatchParameter->jobSpecification->jobPreparationTask = new JobPreparationTask();
    $request->jobSchedulePatchParameter->jobSpecification->jobPreparationTask->commandLine = 'adipisci';
    $request->jobSchedulePatchParameter->jobSpecification->jobPreparationTask->constraints = new TaskConstraints();
    $request->jobSchedulePatchParameter->jobSpecification->jobPreparationTask->constraints->maxTaskRetryCount = 677263;
    $request->jobSchedulePatchParameter->jobSpecification->jobPreparationTask->constraints->maxWallClockTime = 'architecto';
    $request->jobSchedulePatchParameter->jobSpecification->jobPreparationTask->constraints->retentionTime = 'quae';
    $request->jobSchedulePatchParameter->jobSpecification->jobPreparationTask->environmentSettings = [
        new EnvironmentSetting(),
    ];
    $request->jobSchedulePatchParameter->jobSpecification->jobPreparationTask->id = '8e0adcf4-b921-4879-bce9-53f73ef7fbc7';
    $request->jobSchedulePatchParameter->jobSpecification->jobPreparationTask->rerunOnNodeRebootAfterSuccess = false;
    $request->jobSchedulePatchParameter->jobSpecification->jobPreparationTask->resourceFiles = [
        new ResourceFile(),
        new ResourceFile(),
        new ResourceFile(),
    ];
    $request->jobSchedulePatchParameter->jobSpecification->jobPreparationTask->runElevated = false;
    $request->jobSchedulePatchParameter->jobSpecification->jobPreparationTask->waitForSuccess = false;
    $request->jobSchedulePatchParameter->jobSpecification->jobReleaseTask = new JobReleaseTask();
    $request->jobSchedulePatchParameter->jobSpecification->jobReleaseTask->commandLine = 'facilis';
    $request->jobSchedulePatchParameter->jobSpecification->jobReleaseTask->environmentSettings = [
        new EnvironmentSetting(),
        new EnvironmentSetting(),
        new EnvironmentSetting(),
        new EnvironmentSetting(),
    ];
    $request->jobSchedulePatchParameter->jobSpecification->jobReleaseTask->id = '74dd39c0-f5d2-4cff-bc70-a45626d43681';
    $request->jobSchedulePatchParameter->jobSpecification->jobReleaseTask->maxWallClockTime = 'dolor';
    $request->jobSchedulePatchParameter->jobSpecification->jobReleaseTask->resourceFiles = [
        new ResourceFile(),
        new ResourceFile(),
        new ResourceFile(),
        new ResourceFile(),
    ];
    $request->jobSchedulePatchParameter->jobSpecification->jobReleaseTask->retentionTime = 'quasi';
    $request->jobSchedulePatchParameter->jobSpecification->jobReleaseTask->runElevated = false;
    $request->jobSchedulePatchParameter->jobSpecification->metadata = [
        new MetadataItem(),
        new MetadataItem(),
    ];
    $request->jobSchedulePatchParameter->jobSpecification->poolInfo = new PoolInformation();
    $request->jobSchedulePatchParameter->jobSpecification->poolInfo->autoPoolSpecification = new AutoPoolSpecification();
    $request->jobSchedulePatchParameter->jobSpecification->poolInfo->autoPoolSpecification->autoPoolIdPrefix = 'nulla';
    $request->jobSchedulePatchParameter->jobSpecification->poolInfo->autoPoolSpecification->keepAlive = false;
    $request->jobSchedulePatchParameter->jobSpecification->poolInfo->autoPoolSpecification->pool = new PoolSpecification();
    $request->jobSchedulePatchParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->applicationPackageReferences = [
        new ApplicationPackageReference(),
        new ApplicationPackageReference(),
        new ApplicationPackageReference(),
    ];
    $request->jobSchedulePatchParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->autoScaleEvaluationInterval = 'voluptatibus';
    $request->jobSchedulePatchParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->autoScaleFormula = 'nostrum';
    $request->jobSchedulePatchParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->certificateReferences = [
        new CertificateReference(),
        new CertificateReference(),
        new CertificateReference(),
        new CertificateReference(),
    ];
    $request->jobSchedulePatchParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->cloudServiceConfiguration = new CloudServiceConfiguration();
    $request->jobSchedulePatchParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->cloudServiceConfiguration->currentOSVersion = 'quisquam';
    $request->jobSchedulePatchParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->cloudServiceConfiguration->osFamily = 'saepe';
    $request->jobSchedulePatchParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->cloudServiceConfiguration->targetOSVersion = 'ea';
    $request->jobSchedulePatchParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->displayName = 'impedit';
    $request->jobSchedulePatchParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->enableAutoScale = false;
    $request->jobSchedulePatchParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->enableInterNodeCommunication = false;
    $request->jobSchedulePatchParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->maxTasksPerNode = 359271;
    $request->jobSchedulePatchParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->metadata = [
        new MetadataItem(),
        new MetadataItem(),
    ];
    $request->jobSchedulePatchParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->resizeTimeout = 'aliquid';
    $request->jobSchedulePatchParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->startTask = new StartTask();
    $request->jobSchedulePatchParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->startTask->commandLine = 'inventore';
    $request->jobSchedulePatchParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->startTask->environmentSettings = [
        new EnvironmentSetting(),
        new EnvironmentSetting(),
    ];
    $request->jobSchedulePatchParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->startTask->maxTaskRetryCount = 407241;
    $request->jobSchedulePatchParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->startTask->resourceFiles = [
        new ResourceFile(),
        new ResourceFile(),
        new ResourceFile(),
        new ResourceFile(),
    ];
    $request->jobSchedulePatchParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->startTask->runElevated = false;
    $request->jobSchedulePatchParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->startTask->waitForSuccess = false;
    $request->jobSchedulePatchParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->targetDedicated = 232234;
    $request->jobSchedulePatchParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->taskSchedulingPolicy = new TaskSchedulingPolicy();
    $request->jobSchedulePatchParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->taskSchedulingPolicy->nodeFillType = TaskSchedulingPolicyNodeFillTypeEnum::UNMAPPED;
    $request->jobSchedulePatchParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->virtualMachineConfiguration = new VirtualMachineConfiguration();
    $request->jobSchedulePatchParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->virtualMachineConfiguration->imageReference = new ImageReference();
    $request->jobSchedulePatchParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->virtualMachineConfiguration->imageReference->offer = 'aspernatur';
    $request->jobSchedulePatchParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->virtualMachineConfiguration->imageReference->publisher = 'minima';
    $request->jobSchedulePatchParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->virtualMachineConfiguration->imageReference->sku = 'eaque';
    $request->jobSchedulePatchParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->virtualMachineConfiguration->imageReference->version = 'a';
    $request->jobSchedulePatchParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->virtualMachineConfiguration->nodeAgentSKUId = 'libero';
    $request->jobSchedulePatchParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->virtualMachineConfiguration->windowsConfiguration = new WindowsConfiguration();
    $request->jobSchedulePatchParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->virtualMachineConfiguration->windowsConfiguration->enableAutomaticUpdates = false;
    $request->jobSchedulePatchParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->vmSize = 'aut';
    $request->jobSchedulePatchParameter->jobSpecification->poolInfo->autoPoolSpecification->poolLifetimeOption = AutoPoolSpecificationPoolLifetimeOptionEnum::JOBSCHEDULE;
    $request->jobSchedulePatchParameter->jobSpecification->poolInfo->poolId = 'deleniti';
    $request->jobSchedulePatchParameter->jobSpecification->priority = 770581;
    $request->jobSchedulePatchParameter->jobSpecification->usesTaskDependencies = false;
    $request->jobSchedulePatchParameter->metadata = [
        new MetadataItem(),
        new MetadataItem(),
    ];
    $request->jobSchedulePatchParameter->schedule = new Schedule();
    $request->jobSchedulePatchParameter->schedule->doNotRunAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-12T18:08:46.973Z');
    $request->jobSchedulePatchParameter->schedule->doNotRunUntil = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-01T12:32:41.161Z');
    $request->jobSchedulePatchParameter->schedule->recurrenceInterval = 'et';
    $request->jobSchedulePatchParameter->schedule->startWindow = 'dolorum';
    $request->apiVersion = 'laborum';
    $request->clientRequestId = 'placeat';
    $request->jobScheduleId = 'velit';
    $request->ocpDate = 'eum';
    $request->returnClientRequestId = false;
    $request->timeout = 420539;

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
    $request->ifMatch = 'nobis';
    $request->ifModifiedSince = 'quas';
    $request->ifNoneMatch = 'assumenda';
    $request->ifUnmodifiedSince = 'nulla';
    $request->apiVersion = 'voluptas';
    $request->clientRequestId = 'libero';
    $request->jobScheduleId = 'quasi';
    $request->ocpDate = 'tempora';
    $request->returnClientRequestId = false;
    $request->timeout = 256139;

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
use \OpenAPI\OpenAPI\Models\Shared\CertificateReferenceVisibilityEnum;
use \OpenAPI\OpenAPI\Models\Shared\CloudServiceConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\StartTask;
use \OpenAPI\OpenAPI\Models\Shared\TaskSchedulingPolicy;
use \OpenAPI\OpenAPI\Models\Shared\TaskSchedulingPolicyNodeFillTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\VirtualMachineConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\ImageReference;
use \OpenAPI\OpenAPI\Models\Shared\WindowsConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\AutoPoolSpecificationPoolLifetimeOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\Schedule;

$sdk = SDK::builder()
    ->build();

try {
    $request = new JobScheduleUpdateRequest();
    $request->ifMatch = 'explicabo';
    $request->ifModifiedSince = 'provident';
    $request->ifNoneMatch = 'ipsa';
    $request->ifUnmodifiedSince = 'molestiae';
    $request->jobScheduleUpdateParameter = new JobScheduleUpdateParameter();
    $request->jobScheduleUpdateParameter->jobSpecification = new JobSpecification();
    $request->jobScheduleUpdateParameter->jobSpecification->commonEnvironmentSettings = [
        new EnvironmentSetting(),
        new EnvironmentSetting(),
    ];
    $request->jobScheduleUpdateParameter->jobSpecification->constraints = new JobConstraints();
    $request->jobScheduleUpdateParameter->jobSpecification->constraints->maxTaskRetryCount = 487935;
    $request->jobScheduleUpdateParameter->jobSpecification->constraints->maxWallClockTime = 'eius';
    $request->jobScheduleUpdateParameter->jobSpecification->displayName = 'esse';
    $request->jobScheduleUpdateParameter->jobSpecification->jobManagerTask = new JobManagerTask();
    $request->jobScheduleUpdateParameter->jobSpecification->jobManagerTask->commandLine = 'esse';
    $request->jobScheduleUpdateParameter->jobSpecification->jobManagerTask->constraints = new TaskConstraints();
    $request->jobScheduleUpdateParameter->jobSpecification->jobManagerTask->constraints->maxTaskRetryCount = 524593;
    $request->jobScheduleUpdateParameter->jobSpecification->jobManagerTask->constraints->maxWallClockTime = 'fuga';
    $request->jobScheduleUpdateParameter->jobSpecification->jobManagerTask->constraints->retentionTime = 'reprehenderit';
    $request->jobScheduleUpdateParameter->jobSpecification->jobManagerTask->displayName = 'quidem';
    $request->jobScheduleUpdateParameter->jobSpecification->jobManagerTask->environmentSettings = [
        new EnvironmentSetting(),
        new EnvironmentSetting(),
        new EnvironmentSetting(),
        new EnvironmentSetting(),
    ];
    $request->jobScheduleUpdateParameter->jobSpecification->jobManagerTask->id = '466d28c1-0ab3-4cdc-a425-1904e523c7e0';
    $request->jobScheduleUpdateParameter->jobSpecification->jobManagerTask->killJobOnCompletion = false;
    $request->jobScheduleUpdateParameter->jobSpecification->jobManagerTask->resourceFiles = [
        new ResourceFile(),
        new ResourceFile(),
        new ResourceFile(),
    ];
    $request->jobScheduleUpdateParameter->jobSpecification->jobManagerTask->runElevated = false;
    $request->jobScheduleUpdateParameter->jobSpecification->jobManagerTask->runExclusive = false;
    $request->jobScheduleUpdateParameter->jobSpecification->jobPreparationTask = new JobPreparationTask();
    $request->jobScheduleUpdateParameter->jobSpecification->jobPreparationTask->commandLine = 'quod';
    $request->jobScheduleUpdateParameter->jobSpecification->jobPreparationTask->constraints = new TaskConstraints();
    $request->jobScheduleUpdateParameter->jobSpecification->jobPreparationTask->constraints->maxTaskRetryCount = 490819;
    $request->jobScheduleUpdateParameter->jobSpecification->jobPreparationTask->constraints->maxWallClockTime = 'inventore';
    $request->jobScheduleUpdateParameter->jobSpecification->jobPreparationTask->constraints->retentionTime = 'nihil';
    $request->jobScheduleUpdateParameter->jobSpecification->jobPreparationTask->environmentSettings = [
        new EnvironmentSetting(),
        new EnvironmentSetting(),
        new EnvironmentSetting(),
    ];
    $request->jobScheduleUpdateParameter->jobSpecification->jobPreparationTask->id = 'e4796f2a-70c6-4882-82aa-482562f222e9';
    $request->jobScheduleUpdateParameter->jobSpecification->jobPreparationTask->rerunOnNodeRebootAfterSuccess = false;
    $request->jobScheduleUpdateParameter->jobSpecification->jobPreparationTask->resourceFiles = [
        new ResourceFile(),
        new ResourceFile(),
        new ResourceFile(),
    ];
    $request->jobScheduleUpdateParameter->jobSpecification->jobPreparationTask->runElevated = false;
    $request->jobScheduleUpdateParameter->jobSpecification->jobPreparationTask->waitForSuccess = false;
    $request->jobScheduleUpdateParameter->jobSpecification->jobReleaseTask = new JobReleaseTask();
    $request->jobScheduleUpdateParameter->jobSpecification->jobReleaseTask->commandLine = 'et';
    $request->jobScheduleUpdateParameter->jobSpecification->jobReleaseTask->environmentSettings = [
        new EnvironmentSetting(),
        new EnvironmentSetting(),
    ];
    $request->jobScheduleUpdateParameter->jobSpecification->jobReleaseTask->id = 'ee17cbe6-1e6b-47b9-9bc0-ab3c20c4f378';
    $request->jobScheduleUpdateParameter->jobSpecification->jobReleaseTask->maxWallClockTime = 'provident';
    $request->jobScheduleUpdateParameter->jobSpecification->jobReleaseTask->resourceFiles = [
        new ResourceFile(),
        new ResourceFile(),
        new ResourceFile(),
        new ResourceFile(),
    ];
    $request->jobScheduleUpdateParameter->jobSpecification->jobReleaseTask->retentionTime = 'nulla';
    $request->jobScheduleUpdateParameter->jobSpecification->jobReleaseTask->runElevated = false;
    $request->jobScheduleUpdateParameter->jobSpecification->metadata = [
        new MetadataItem(),
        new MetadataItem(),
        new MetadataItem(),
    ];
    $request->jobScheduleUpdateParameter->jobSpecification->poolInfo = new PoolInformation();
    $request->jobScheduleUpdateParameter->jobSpecification->poolInfo->autoPoolSpecification = new AutoPoolSpecification();
    $request->jobScheduleUpdateParameter->jobSpecification->poolInfo->autoPoolSpecification->autoPoolIdPrefix = 'esse';
    $request->jobScheduleUpdateParameter->jobSpecification->poolInfo->autoPoolSpecification->keepAlive = false;
    $request->jobScheduleUpdateParameter->jobSpecification->poolInfo->autoPoolSpecification->pool = new PoolSpecification();
    $request->jobScheduleUpdateParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->applicationPackageReferences = [
        new ApplicationPackageReference(),
    ];
    $request->jobScheduleUpdateParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->autoScaleEvaluationInterval = 'a';
    $request->jobScheduleUpdateParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->autoScaleFormula = 'error';
    $request->jobScheduleUpdateParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->certificateReferences = [
        new CertificateReference(),
        new CertificateReference(),
        new CertificateReference(),
    ];
    $request->jobScheduleUpdateParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->cloudServiceConfiguration = new CloudServiceConfiguration();
    $request->jobScheduleUpdateParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->cloudServiceConfiguration->currentOSVersion = 'pariatur';
    $request->jobScheduleUpdateParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->cloudServiceConfiguration->osFamily = 'possimus';
    $request->jobScheduleUpdateParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->cloudServiceConfiguration->targetOSVersion = 'quia';
    $request->jobScheduleUpdateParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->displayName = 'eveniet';
    $request->jobScheduleUpdateParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->enableAutoScale = false;
    $request->jobScheduleUpdateParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->enableInterNodeCommunication = false;
    $request->jobScheduleUpdateParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->maxTasksPerNode = 992430;
    $request->jobScheduleUpdateParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->metadata = [
        new MetadataItem(),
        new MetadataItem(),
        new MetadataItem(),
        new MetadataItem(),
    ];
    $request->jobScheduleUpdateParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->resizeTimeout = 'veritatis';
    $request->jobScheduleUpdateParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->startTask = new StartTask();
    $request->jobScheduleUpdateParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->startTask->commandLine = 'consequuntur';
    $request->jobScheduleUpdateParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->startTask->environmentSettings = [
        new EnvironmentSetting(),
    ];
    $request->jobScheduleUpdateParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->startTask->maxTaskRetryCount = 628899;
    $request->jobScheduleUpdateParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->startTask->resourceFiles = [
        new ResourceFile(),
        new ResourceFile(),
        new ResourceFile(),
    ];
    $request->jobScheduleUpdateParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->startTask->runElevated = false;
    $request->jobScheduleUpdateParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->startTask->waitForSuccess = false;
    $request->jobScheduleUpdateParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->targetDedicated = 398434;
    $request->jobScheduleUpdateParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->taskSchedulingPolicy = new TaskSchedulingPolicy();
    $request->jobScheduleUpdateParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->taskSchedulingPolicy->nodeFillType = TaskSchedulingPolicyNodeFillTypeEnum::UNMAPPED;
    $request->jobScheduleUpdateParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->virtualMachineConfiguration = new VirtualMachineConfiguration();
    $request->jobScheduleUpdateParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->virtualMachineConfiguration->imageReference = new ImageReference();
    $request->jobScheduleUpdateParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->virtualMachineConfiguration->imageReference->offer = 'quae';
    $request->jobScheduleUpdateParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->virtualMachineConfiguration->imageReference->publisher = 'earum';
    $request->jobScheduleUpdateParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->virtualMachineConfiguration->imageReference->sku = 'vel';
    $request->jobScheduleUpdateParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->virtualMachineConfiguration->imageReference->version = 'in';
    $request->jobScheduleUpdateParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->virtualMachineConfiguration->nodeAgentSKUId = 'eius';
    $request->jobScheduleUpdateParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->virtualMachineConfiguration->windowsConfiguration = new WindowsConfiguration();
    $request->jobScheduleUpdateParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->virtualMachineConfiguration->windowsConfiguration->enableAutomaticUpdates = false;
    $request->jobScheduleUpdateParameter->jobSpecification->poolInfo->autoPoolSpecification->pool->vmSize = 'libero';
    $request->jobScheduleUpdateParameter->jobSpecification->poolInfo->autoPoolSpecification->poolLifetimeOption = AutoPoolSpecificationPoolLifetimeOptionEnum::UNMAPPED;
    $request->jobScheduleUpdateParameter->jobSpecification->poolInfo->poolId = 'soluta';
    $request->jobScheduleUpdateParameter->jobSpecification->priority = 33304;
    $request->jobScheduleUpdateParameter->jobSpecification->usesTaskDependencies = false;
    $request->jobScheduleUpdateParameter->metadata = [
        new MetadataItem(),
        new MetadataItem(),
    ];
    $request->jobScheduleUpdateParameter->schedule = new Schedule();
    $request->jobScheduleUpdateParameter->schedule->doNotRunAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-22T20:24:31.399Z');
    $request->jobScheduleUpdateParameter->schedule->doNotRunUntil = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-22T23:37:21.399Z');
    $request->jobScheduleUpdateParameter->schedule->recurrenceInterval = 'ullam';
    $request->jobScheduleUpdateParameter->schedule->startWindow = 'nisi';
    $request->apiVersion = 'aut';
    $request->clientRequestId = 'voluptatum';
    $request->jobScheduleId = 'qui';
    $request->ocpDate = 'quibusdam';
    $request->returnClientRequestId = false;
    $request->timeout = 401259;

    $response = $sdk->jobSchedules->jobScheduleUpdate($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
