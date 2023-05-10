# jobs

### Available Operations

* [jobAdd](#jobadd) - Adds a job to the specified account.
* [jobDelete](#jobdelete) - Deletes a job.
* [jobDisable](#jobdisable) - Disables the specified job, preventing new tasks from running.
* [jobEnable](#jobenable) - Enables the specified job, allowing new tasks to run.
* [jobGet](#jobget) - Gets information about the specified job.
* [jobGetAllJobsLifetimeStatistics](#jobgetalljobslifetimestatistics) - Gets lifetime summary statistics for all of the jobs in the specified account. Statistics are aggregated across all jobs that have ever existed in the account, from account creation to the last update time of the statistics.
* [jobList](#joblist) - Lists all of the jobs in the specified account.
* [jobListFromJobSchedule](#joblistfromjobschedule) - Lists the jobs that have been created under the specified job schedule.
* [jobListPreparationAndReleaseTaskStatus](#joblistpreparationandreleasetaskstatus) - Lists the execution status of the Job Preparation and Job Release task for the specified job across the compute nodes where the job has run.
* [jobPatch](#jobpatch) - Updates the properties of a job.
* [jobTerminate](#jobterminate) - Terminates the specified job, marking it as completed.
* [jobUpdate](#jobupdate) - Updates the properties of a job.

## jobAdd

Adds a job to the specified account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\JobAddRequest;
use \OpenAPI\OpenAPI\Models\Shared\JobAddParameter;
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

$sdk = SDK::builder()
    ->build();

try {
    $request = new JobAddRequest();
    $request->jobAddParameter = new JobAddParameter();
    $request->jobAddParameter->commonEnvironmentSettings = [
        new EnvironmentSetting(),
        new EnvironmentSetting(),
        new EnvironmentSetting(),
        new EnvironmentSetting(),
    ];
    $request->jobAddParameter->constraints = new JobConstraints();
    $request->jobAddParameter->constraints->maxTaskRetryCount = 992430;
    $request->jobAddParameter->constraints->maxWallClockTime = 'facere';
    $request->jobAddParameter->displayName = 'veritatis';
    $request->jobAddParameter->id = '21aa6f1e-674b-4db0-8f15-756082d68ea1';
    $request->jobAddParameter->jobManagerTask = new JobManagerTask();
    $request->jobAddParameter->jobManagerTask->commandLine = 'omnis';
    $request->jobAddParameter->jobManagerTask->constraints = new TaskConstraints();
    $request->jobAddParameter->jobManagerTask->constraints->maxTaskRetryCount = 945302;
    $request->jobAddParameter->jobManagerTask->constraints->maxWallClockTime = 'quasi';
    $request->jobAddParameter->jobManagerTask->constraints->retentionTime = 'at';
    $request->jobAddParameter->jobManagerTask->displayName = 'et';
    $request->jobAddParameter->jobManagerTask->environmentSettings = [
        new EnvironmentSetting(),
        new EnvironmentSetting(),
    ];
    $request->jobAddParameter->jobManagerTask->id = '051339d0-8086-4a18-8039-4c26071f93f5';
    $request->jobAddParameter->jobManagerTask->killJobOnCompletion = false;
    $request->jobAddParameter->jobManagerTask->resourceFiles = [
        new ResourceFile(),
        new ResourceFile(),
        new ResourceFile(),
        new ResourceFile(),
    ];
    $request->jobAddParameter->jobManagerTask->runElevated = false;
    $request->jobAddParameter->jobManagerTask->runExclusive = false;
    $request->jobAddParameter->jobPreparationTask = new JobPreparationTask();
    $request->jobAddParameter->jobPreparationTask->commandLine = 'aperiam';
    $request->jobAddParameter->jobPreparationTask->constraints = new TaskConstraints();
    $request->jobAddParameter->jobPreparationTask->constraints->maxTaskRetryCount = 409054;
    $request->jobAddParameter->jobPreparationTask->constraints->maxWallClockTime = 'quaerat';
    $request->jobAddParameter->jobPreparationTask->constraints->retentionTime = 'consequuntur';
    $request->jobAddParameter->jobPreparationTask->environmentSettings = [
        new EnvironmentSetting(),
        new EnvironmentSetting(),
        new EnvironmentSetting(),
        new EnvironmentSetting(),
    ];
    $request->jobAddParameter->jobPreparationTask->id = 'ac7af515-cc41-43aa-a3aa-e8d67864dbb6';
    $request->jobAddParameter->jobPreparationTask->rerunOnNodeRebootAfterSuccess = false;
    $request->jobAddParameter->jobPreparationTask->resourceFiles = [
        new ResourceFile(),
        new ResourceFile(),
    ];
    $request->jobAddParameter->jobPreparationTask->runElevated = false;
    $request->jobAddParameter->jobPreparationTask->waitForSuccess = false;
    $request->jobAddParameter->jobReleaseTask = new JobReleaseTask();
    $request->jobAddParameter->jobReleaseTask->commandLine = 'corporis';
    $request->jobAddParameter->jobReleaseTask->environmentSettings = [
        new EnvironmentSetting(),
        new EnvironmentSetting(),
        new EnvironmentSetting(),
        new EnvironmentSetting(),
    ];
    $request->jobAddParameter->jobReleaseTask->id = 'd5e60b37-5ed4-4f6f-bee4-1f33317fe35b';
    $request->jobAddParameter->jobReleaseTask->maxWallClockTime = 'laboriosam';
    $request->jobAddParameter->jobReleaseTask->resourceFiles = [
        new ResourceFile(),
    ];
    $request->jobAddParameter->jobReleaseTask->retentionTime = 'voluptates';
    $request->jobAddParameter->jobReleaseTask->runElevated = false;
    $request->jobAddParameter->metadata = [
        new MetadataItem(),
        new MetadataItem(),
        new MetadataItem(),
    ];
    $request->jobAddParameter->poolInfo = new PoolInformation();
    $request->jobAddParameter->poolInfo->autoPoolSpecification = new AutoPoolSpecification();
    $request->jobAddParameter->poolInfo->autoPoolSpecification->autoPoolIdPrefix = 'vitae';
    $request->jobAddParameter->poolInfo->autoPoolSpecification->keepAlive = false;
    $request->jobAddParameter->poolInfo->autoPoolSpecification->pool = new PoolSpecification();
    $request->jobAddParameter->poolInfo->autoPoolSpecification->pool->applicationPackageReferences = [
        new ApplicationPackageReference(),
        new ApplicationPackageReference(),
        new ApplicationPackageReference(),
        new ApplicationPackageReference(),
    ];
    $request->jobAddParameter->poolInfo->autoPoolSpecification->pool->autoScaleEvaluationInterval = 'similique';
    $request->jobAddParameter->poolInfo->autoPoolSpecification->pool->autoScaleFormula = 'tempora';
    $request->jobAddParameter->poolInfo->autoPoolSpecification->pool->certificateReferences = [
        new CertificateReference(),
    ];
    $request->jobAddParameter->poolInfo->autoPoolSpecification->pool->displayName = 'voluptas';
    $request->jobAddParameter->poolInfo->autoPoolSpecification->pool->enableAutoScale = false;
    $request->jobAddParameter->poolInfo->autoPoolSpecification->pool->enableInterNodeCommunication = false;
    $request->jobAddParameter->poolInfo->autoPoolSpecification->pool->maxTasksPerNode = 374244;
    $request->jobAddParameter->poolInfo->autoPoolSpecification->pool->metadata = [
        new MetadataItem(),
        new MetadataItem(),
    ];
    $request->jobAddParameter->poolInfo->autoPoolSpecification->pool->osFamily = 'minima';
    $request->jobAddParameter->poolInfo->autoPoolSpecification->pool->resizeTimeout = 'nobis';
    $request->jobAddParameter->poolInfo->autoPoolSpecification->pool->startTask = new StartTask();
    $request->jobAddParameter->poolInfo->autoPoolSpecification->pool->startTask->commandLine = 'dolorum';
    $request->jobAddParameter->poolInfo->autoPoolSpecification->pool->startTask->environmentSettings = [
        new EnvironmentSetting(),
    ];
    $request->jobAddParameter->poolInfo->autoPoolSpecification->pool->startTask->maxTaskRetryCount = 795535;
    $request->jobAddParameter->poolInfo->autoPoolSpecification->pool->startTask->resourceFiles = [
        new ResourceFile(),
    ];
    $request->jobAddParameter->poolInfo->autoPoolSpecification->pool->startTask->runElevated = false;
    $request->jobAddParameter->poolInfo->autoPoolSpecification->pool->startTask->waitForSuccess = false;
    $request->jobAddParameter->poolInfo->autoPoolSpecification->pool->targetDedicated = 503934;
    $request->jobAddParameter->poolInfo->autoPoolSpecification->pool->targetOSVersion = 'in';
    $request->jobAddParameter->poolInfo->autoPoolSpecification->pool->taskSchedulingPolicy = new TaskSchedulingPolicy();
    $request->jobAddParameter->poolInfo->autoPoolSpecification->pool->taskSchedulingPolicy->nodeFillType = TaskSchedulingPolicyNodeFillTypeEnum::SPREAD;
    $request->jobAddParameter->poolInfo->autoPoolSpecification->pool->vmSize = 'aliquam';
    $request->jobAddParameter->poolInfo->autoPoolSpecification->poolLifetimeOption = AutoPoolSpecificationPoolLifetimeOptionEnum::UNMAPPED;
    $request->jobAddParameter->poolInfo->poolId = 'temporibus';
    $request->jobAddParameter->priority = 351870;
    $request->jobAddParameter->usesTaskDependencies = false;
    $request->apiVersion = 'adipisci';
    $request->clientRequestId = 'cum';
    $request->ocpDate = 'blanditiis';
    $request->returnClientRequestId = false;
    $request->timeout = 555361;

    $response = $sdk->jobs->jobAdd($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## jobDelete

Deletes a job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\JobDeleteRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new JobDeleteRequest();
    $request->ifMatch = 'hic';
    $request->ifModifiedSince = 'nesciunt';
    $request->ifNoneMatch = 'culpa';
    $request->ifUnmodifiedSince = 'corrupti';
    $request->apiVersion = 'pariatur';
    $request->clientRequestId = 'totam';
    $request->jobId = 'hic';
    $request->ocpDate = 'exercitationem';
    $request->returnClientRequestId = false;
    $request->timeout = 750765;

    $response = $sdk->jobs->jobDelete($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## jobDisable

Disables the specified job, preventing new tasks from running.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\JobDisableRequest;
use \OpenAPI\OpenAPI\Models\Shared\JobDisableParameter;
use \OpenAPI\OpenAPI\Models\Shared\JobDisableParameterDisableTasksEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new JobDisableRequest();
    $request->ifMatch = 'sit';
    $request->ifModifiedSince = 'rerum';
    $request->ifNoneMatch = 'sed';
    $request->ifUnmodifiedSince = 'reiciendis';
    $request->jobDisableParameter = new JobDisableParameter();
    $request->jobDisableParameter->disableTasks = JobDisableParameterDisableTasksEnum::REQUEUE;
    $request->apiVersion = 'asperiores';
    $request->clientRequestId = 'facilis';
    $request->jobId = 'voluptate';
    $request->ocpDate = 'expedita';
    $request->returnClientRequestId = false;
    $request->timeout = 70869;

    $response = $sdk->jobs->jobDisable($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## jobEnable

Enables the specified job, allowing new tasks to run.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\JobEnableRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new JobEnableRequest();
    $request->ifMatch = 'iste';
    $request->ifModifiedSince = 'dolore';
    $request->ifNoneMatch = 'laborum';
    $request->ifUnmodifiedSince = 'sed';
    $request->apiVersion = 'in';
    $request->clientRequestId = 'commodi';
    $request->jobId = 'quidem';
    $request->ocpDate = 'explicabo';
    $request->returnClientRequestId = false;
    $request->timeout = 378326;

    $response = $sdk->jobs->jobEnable($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## jobGet

Gets information about the specified job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\JobGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new JobGetRequest();
    $request->dollarExpand = 'unde';
    $request->dollarSelect = 'architecto';
    $request->apiVersion = 'suscipit';
    $request->clientRequestId = 'sapiente';
    $request->jobId = 'debitis';
    $request->ocpDate = 'illo';
    $request->returnClientRequestId = false;
    $request->timeout = 967795;

    $response = $sdk->jobs->jobGet($request);

    if ($response->cloudJob !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## jobGetAllJobsLifetimeStatistics

Gets lifetime summary statistics for all of the jobs in the specified account. Statistics are aggregated across all jobs that have ever existed in the account, from account creation to the last update time of the statistics.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\JobGetAllJobsLifetimeStatisticsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new JobGetAllJobsLifetimeStatisticsRequest();
    $request->apiVersion = 'perferendis';
    $request->clientRequestId = 'corrupti';
    $request->ocpDate = 'maiores';
    $request->returnClientRequestId = false;
    $request->timeout = 274823;

    $response = $sdk->jobs->jobGetAllJobsLifetimeStatistics($request);

    if ($response->jobStatistics !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## jobList

Lists all of the jobs in the specified account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\JobListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new JobListRequest();
    $request->dollarExpand = 'sed';
    $request->dollarFilter = 'provident';
    $request->dollarSelect = 'eius';
    $request->apiVersion = 'necessitatibus';
    $request->clientRequestId = 'ipsum';
    $request->maxresults = 406733;
    $request->ocpDate = 'occaecati';
    $request->returnClientRequestId = false;
    $request->timeout = 552078;

    $response = $sdk->jobs->jobList($request);

    if ($response->cloudJobListResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## jobListFromJobSchedule

Lists the jobs that have been created under the specified job schedule.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\JobListFromJobScheduleRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new JobListFromJobScheduleRequest();
    $request->dollarExpand = 'voluptatibus';
    $request->dollarFilter = 'tempora';
    $request->dollarSelect = 'tempora';
    $request->apiVersion = 'voluptate';
    $request->clientRequestId = 'reiciendis';
    $request->jobScheduleId = 'ex';
    $request->maxresults = 25497;
    $request->ocpDate = 'non';
    $request->returnClientRequestId = false;
    $request->timeout = 888044;

    $response = $sdk->jobs->jobListFromJobSchedule($request);

    if ($response->cloudJobListResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## jobListPreparationAndReleaseTaskStatus

Lists the execution status of the Job Preparation and Job Release task for the specified job across the compute nodes where the job has run.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\JobListPreparationAndReleaseTaskStatusRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new JobListPreparationAndReleaseTaskStatusRequest();
    $request->dollarFilter = 'praesentium';
    $request->dollarSelect = 'facilis';
    $request->apiVersion = 'quaerat';
    $request->clientRequestId = 'incidunt';
    $request->jobId = 'ipsam';
    $request->maxresults = 894864;
    $request->ocpDate = 'rem';
    $request->returnClientRequestId = false;
    $request->timeout = 26522;

    $response = $sdk->jobs->jobListPreparationAndReleaseTaskStatus($request);

    if ($response->cloudJobListPreparationAndReleaseTaskStatusResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## jobPatch

Updates the properties of a job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\JobPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\JobPatchParameter;
use \OpenAPI\OpenAPI\Models\Shared\JobConstraints;
use \OpenAPI\OpenAPI\Models\Shared\MetadataItem;
use \OpenAPI\OpenAPI\Models\Shared\PoolInformation;
use \OpenAPI\OpenAPI\Models\Shared\AutoPoolSpecification;
use \OpenAPI\OpenAPI\Models\Shared\PoolSpecification;
use \OpenAPI\OpenAPI\Models\Shared\ApplicationPackageReference;
use \OpenAPI\OpenAPI\Models\Shared\CertificateReference;
use \OpenAPI\OpenAPI\Models\Shared\CertificateReferenceStoreLocationEnum;
use \OpenAPI\OpenAPI\Models\Shared\StartTask;
use \OpenAPI\OpenAPI\Models\Shared\EnvironmentSetting;
use \OpenAPI\OpenAPI\Models\Shared\ResourceFile;
use \OpenAPI\OpenAPI\Models\Shared\TaskSchedulingPolicy;
use \OpenAPI\OpenAPI\Models\Shared\TaskSchedulingPolicyNodeFillTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AutoPoolSpecificationPoolLifetimeOptionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new JobPatchRequest();
    $request->ifMatch = 'nobis';
    $request->ifModifiedSince = 'error';
    $request->ifNoneMatch = 'veniam';
    $request->ifUnmodifiedSince = 'minima';
    $request->jobPatchParameter = new JobPatchParameter();
    $request->jobPatchParameter->constraints = new JobConstraints();
    $request->jobPatchParameter->constraints->maxTaskRetryCount = 924159;
    $request->jobPatchParameter->constraints->maxWallClockTime = 'reiciendis';
    $request->jobPatchParameter->metadata = [
        new MetadataItem(),
        new MetadataItem(),
        new MetadataItem(),
        new MetadataItem(),
    ];
    $request->jobPatchParameter->poolInfo = new PoolInformation();
    $request->jobPatchParameter->poolInfo->autoPoolSpecification = new AutoPoolSpecification();
    $request->jobPatchParameter->poolInfo->autoPoolSpecification->autoPoolIdPrefix = 'magni';
    $request->jobPatchParameter->poolInfo->autoPoolSpecification->keepAlive = false;
    $request->jobPatchParameter->poolInfo->autoPoolSpecification->pool = new PoolSpecification();
    $request->jobPatchParameter->poolInfo->autoPoolSpecification->pool->applicationPackageReferences = [
        new ApplicationPackageReference(),
    ];
    $request->jobPatchParameter->poolInfo->autoPoolSpecification->pool->autoScaleEvaluationInterval = 'saepe';
    $request->jobPatchParameter->poolInfo->autoPoolSpecification->pool->autoScaleFormula = 'numquam';
    $request->jobPatchParameter->poolInfo->autoPoolSpecification->pool->certificateReferences = [
        new CertificateReference(),
        new CertificateReference(),
    ];
    $request->jobPatchParameter->poolInfo->autoPoolSpecification->pool->displayName = 'in';
    $request->jobPatchParameter->poolInfo->autoPoolSpecification->pool->enableAutoScale = false;
    $request->jobPatchParameter->poolInfo->autoPoolSpecification->pool->enableInterNodeCommunication = false;
    $request->jobPatchParameter->poolInfo->autoPoolSpecification->pool->maxTasksPerNode = 889234;
    $request->jobPatchParameter->poolInfo->autoPoolSpecification->pool->metadata = [
        new MetadataItem(),
    ];
    $request->jobPatchParameter->poolInfo->autoPoolSpecification->pool->osFamily = 'laudantium';
    $request->jobPatchParameter->poolInfo->autoPoolSpecification->pool->resizeTimeout = 'exercitationem';
    $request->jobPatchParameter->poolInfo->autoPoolSpecification->pool->startTask = new StartTask();
    $request->jobPatchParameter->poolInfo->autoPoolSpecification->pool->startTask->commandLine = 'praesentium';
    $request->jobPatchParameter->poolInfo->autoPoolSpecification->pool->startTask->environmentSettings = [
        new EnvironmentSetting(),
        new EnvironmentSetting(),
        new EnvironmentSetting(),
    ];
    $request->jobPatchParameter->poolInfo->autoPoolSpecification->pool->startTask->maxTaskRetryCount = 386827;
    $request->jobPatchParameter->poolInfo->autoPoolSpecification->pool->startTask->resourceFiles = [
        new ResourceFile(),
        new ResourceFile(),
        new ResourceFile(),
    ];
    $request->jobPatchParameter->poolInfo->autoPoolSpecification->pool->startTask->runElevated = false;
    $request->jobPatchParameter->poolInfo->autoPoolSpecification->pool->startTask->waitForSuccess = false;
    $request->jobPatchParameter->poolInfo->autoPoolSpecification->pool->targetDedicated = 530089;
    $request->jobPatchParameter->poolInfo->autoPoolSpecification->pool->targetOSVersion = 'error';
    $request->jobPatchParameter->poolInfo->autoPoolSpecification->pool->taskSchedulingPolicy = new TaskSchedulingPolicy();
    $request->jobPatchParameter->poolInfo->autoPoolSpecification->pool->taskSchedulingPolicy->nodeFillType = TaskSchedulingPolicyNodeFillTypeEnum::UNMAPPED;
    $request->jobPatchParameter->poolInfo->autoPoolSpecification->pool->vmSize = 'expedita';
    $request->jobPatchParameter->poolInfo->autoPoolSpecification->poolLifetimeOption = AutoPoolSpecificationPoolLifetimeOptionEnum::UNMAPPED;
    $request->jobPatchParameter->poolInfo->poolId = 'neque';
    $request->jobPatchParameter->priority = 677115;
    $request->apiVersion = 'nostrum';
    $request->clientRequestId = 'officia';
    $request->jobId = 'dolorum';
    $request->ocpDate = 'corrupti';
    $request->returnClientRequestId = false;
    $request->timeout = 879235;

    $response = $sdk->jobs->jobPatch($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## jobTerminate

Terminates the specified job, marking it as completed.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\JobTerminateRequest;
use \OpenAPI\OpenAPI\Models\Shared\JobTerminateParameter;

$sdk = SDK::builder()
    ->build();

try {
    $request = new JobTerminateRequest();
    $request->ifMatch = 'tempora';
    $request->ifModifiedSince = 'atque';
    $request->ifNoneMatch = 'fugit';
    $request->ifUnmodifiedSince = 'ut';
    $request->jobTerminateParameter = new JobTerminateParameter();
    $request->jobTerminateParameter->terminateReason = 'fugiat';
    $request->apiVersion = 'voluptatem';
    $request->clientRequestId = 'culpa';
    $request->jobId = 'expedita';
    $request->ocpDate = 'magnam';
    $request->returnClientRequestId = false;
    $request->timeout = 7884;

    $response = $sdk->jobs->jobTerminate($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## jobUpdate

Updates the properties of a job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\JobUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\JobUpdateParameter;
use \OpenAPI\OpenAPI\Models\Shared\JobConstraints;
use \OpenAPI\OpenAPI\Models\Shared\MetadataItem;
use \OpenAPI\OpenAPI\Models\Shared\PoolInformation;
use \OpenAPI\OpenAPI\Models\Shared\AutoPoolSpecification;
use \OpenAPI\OpenAPI\Models\Shared\PoolSpecification;
use \OpenAPI\OpenAPI\Models\Shared\ApplicationPackageReference;
use \OpenAPI\OpenAPI\Models\Shared\CertificateReference;
use \OpenAPI\OpenAPI\Models\Shared\CertificateReferenceStoreLocationEnum;
use \OpenAPI\OpenAPI\Models\Shared\StartTask;
use \OpenAPI\OpenAPI\Models\Shared\EnvironmentSetting;
use \OpenAPI\OpenAPI\Models\Shared\ResourceFile;
use \OpenAPI\OpenAPI\Models\Shared\TaskSchedulingPolicy;
use \OpenAPI\OpenAPI\Models\Shared\TaskSchedulingPolicyNodeFillTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AutoPoolSpecificationPoolLifetimeOptionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new JobUpdateRequest();
    $request->ifMatch = 'esse';
    $request->ifModifiedSince = 'ipsam';
    $request->ifNoneMatch = 'sit';
    $request->ifUnmodifiedSince = 'voluptatum';
    $request->jobUpdateParameter = new JobUpdateParameter();
    $request->jobUpdateParameter->constraints = new JobConstraints();
    $request->jobUpdateParameter->constraints->maxTaskRetryCount = 558065;
    $request->jobUpdateParameter->constraints->maxWallClockTime = 'repudiandae';
    $request->jobUpdateParameter->metadata = [
        new MetadataItem(),
        new MetadataItem(),
    ];
    $request->jobUpdateParameter->poolInfo = new PoolInformation();
    $request->jobUpdateParameter->poolInfo->autoPoolSpecification = new AutoPoolSpecification();
    $request->jobUpdateParameter->poolInfo->autoPoolSpecification->autoPoolIdPrefix = 'et';
    $request->jobUpdateParameter->poolInfo->autoPoolSpecification->keepAlive = false;
    $request->jobUpdateParameter->poolInfo->autoPoolSpecification->pool = new PoolSpecification();
    $request->jobUpdateParameter->poolInfo->autoPoolSpecification->pool->applicationPackageReferences = [
        new ApplicationPackageReference(),
        new ApplicationPackageReference(),
        new ApplicationPackageReference(),
    ];
    $request->jobUpdateParameter->poolInfo->autoPoolSpecification->pool->autoScaleEvaluationInterval = 'ex';
    $request->jobUpdateParameter->poolInfo->autoPoolSpecification->pool->autoScaleFormula = 'sed';
    $request->jobUpdateParameter->poolInfo->autoPoolSpecification->pool->certificateReferences = [
        new CertificateReference(),
    ];
    $request->jobUpdateParameter->poolInfo->autoPoolSpecification->pool->displayName = 'vel';
    $request->jobUpdateParameter->poolInfo->autoPoolSpecification->pool->enableAutoScale = false;
    $request->jobUpdateParameter->poolInfo->autoPoolSpecification->pool->enableInterNodeCommunication = false;
    $request->jobUpdateParameter->poolInfo->autoPoolSpecification->pool->maxTasksPerNode = 342611;
    $request->jobUpdateParameter->poolInfo->autoPoolSpecification->pool->metadata = [
        new MetadataItem(),
        new MetadataItem(),
        new MetadataItem(),
        new MetadataItem(),
    ];
    $request->jobUpdateParameter->poolInfo->autoPoolSpecification->pool->osFamily = 'error';
    $request->jobUpdateParameter->poolInfo->autoPoolSpecification->pool->resizeTimeout = 'consequatur';
    $request->jobUpdateParameter->poolInfo->autoPoolSpecification->pool->startTask = new StartTask();
    $request->jobUpdateParameter->poolInfo->autoPoolSpecification->pool->startTask->commandLine = 'incidunt';
    $request->jobUpdateParameter->poolInfo->autoPoolSpecification->pool->startTask->environmentSettings = [
        new EnvironmentSetting(),
        new EnvironmentSetting(),
        new EnvironmentSetting(),
        new EnvironmentSetting(),
    ];
    $request->jobUpdateParameter->poolInfo->autoPoolSpecification->pool->startTask->maxTaskRetryCount = 209750;
    $request->jobUpdateParameter->poolInfo->autoPoolSpecification->pool->startTask->resourceFiles = [
        new ResourceFile(),
        new ResourceFile(),
        new ResourceFile(),
    ];
    $request->jobUpdateParameter->poolInfo->autoPoolSpecification->pool->startTask->runElevated = false;
    $request->jobUpdateParameter->poolInfo->autoPoolSpecification->pool->startTask->waitForSuccess = false;
    $request->jobUpdateParameter->poolInfo->autoPoolSpecification->pool->targetDedicated = 115703;
    $request->jobUpdateParameter->poolInfo->autoPoolSpecification->pool->targetOSVersion = 'architecto';
    $request->jobUpdateParameter->poolInfo->autoPoolSpecification->pool->taskSchedulingPolicy = new TaskSchedulingPolicy();
    $request->jobUpdateParameter->poolInfo->autoPoolSpecification->pool->taskSchedulingPolicy->nodeFillType = TaskSchedulingPolicyNodeFillTypeEnum::PACK;
    $request->jobUpdateParameter->poolInfo->autoPoolSpecification->pool->vmSize = 'labore';
    $request->jobUpdateParameter->poolInfo->autoPoolSpecification->poolLifetimeOption = AutoPoolSpecificationPoolLifetimeOptionEnum::UNMAPPED;
    $request->jobUpdateParameter->poolInfo->poolId = 'atque';
    $request->jobUpdateParameter->priority = 671957;
    $request->apiVersion = 'nam';
    $request->clientRequestId = 'tenetur';
    $request->jobId = 'laboriosam';
    $request->ocpDate = 'alias';
    $request->returnClientRequestId = false;
    $request->timeout = 227084;

    $response = $sdk->jobs->jobUpdate($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
