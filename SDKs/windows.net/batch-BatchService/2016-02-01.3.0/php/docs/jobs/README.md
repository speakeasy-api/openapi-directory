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
use \OpenAPI\OpenAPI\Models\Shared\CertificateReferenceVisibilityEnum;
use \OpenAPI\OpenAPI\Models\Shared\CloudServiceConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\StartTask;
use \OpenAPI\OpenAPI\Models\Shared\TaskSchedulingPolicy;
use \OpenAPI\OpenAPI\Models\Shared\TaskSchedulingPolicyNodeFillTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\VirtualMachineConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\ImageReference;
use \OpenAPI\OpenAPI\Models\Shared\WindowsConfiguration;
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
    ];
    $request->jobAddParameter->constraints = new JobConstraints();
    $request->jobAddParameter->constraints->maxTaskRetryCount = 929292;
    $request->jobAddParameter->constraints->maxWallClockTime = 'dolorum';
    $request->jobAddParameter->displayName = 'architecto';
    $request->jobAddParameter->id = '9f1d1705-1339-4d08-886a-1840394c2607';
    $request->jobAddParameter->jobManagerTask = new JobManagerTask();
    $request->jobAddParameter->jobManagerTask->commandLine = 'dicta';
    $request->jobAddParameter->jobManagerTask->constraints = new TaskConstraints();
    $request->jobAddParameter->jobManagerTask->constraints->maxTaskRetryCount = 981640;
    $request->jobAddParameter->jobManagerTask->constraints->maxWallClockTime = 'natus';
    $request->jobAddParameter->jobManagerTask->constraints->retentionTime = 'velit';
    $request->jobAddParameter->jobManagerTask->displayName = 'voluptatibus';
    $request->jobAddParameter->jobManagerTask->environmentSettings = [
        new EnvironmentSetting(),
        new EnvironmentSetting(),
    ];
    $request->jobAddParameter->jobManagerTask->id = 'f0642dac-7af5-415c-8413-aa63aae8d678';
    $request->jobAddParameter->jobManagerTask->killJobOnCompletion = false;
    $request->jobAddParameter->jobManagerTask->resourceFiles = [
        new ResourceFile(),
        new ResourceFile(),
    ];
    $request->jobAddParameter->jobManagerTask->runElevated = false;
    $request->jobAddParameter->jobManagerTask->runExclusive = false;
    $request->jobAddParameter->jobPreparationTask = new JobPreparationTask();
    $request->jobAddParameter->jobPreparationTask->commandLine = 'labore';
    $request->jobAddParameter->jobPreparationTask->constraints = new TaskConstraints();
    $request->jobAddParameter->jobPreparationTask->constraints->maxTaskRetryCount = 822560;
    $request->jobAddParameter->jobPreparationTask->constraints->maxWallClockTime = 'facilis';
    $request->jobAddParameter->jobPreparationTask->constraints->retentionTime = 'cum';
    $request->jobAddParameter->jobPreparationTask->environmentSettings = [
        new EnvironmentSetting(),
        new EnvironmentSetting(),
    ];
    $request->jobAddParameter->jobPreparationTask->id = '75fd5e60-b375-4ed4-b6fb-ee41f33317fe';
    $request->jobAddParameter->jobPreparationTask->rerunOnNodeRebootAfterSuccess = false;
    $request->jobAddParameter->jobPreparationTask->resourceFiles = [
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
    ];
    $request->jobAddParameter->jobReleaseTask->id = '60eb1ea4-2655-45ba-bc28-744ed53b88f3';
    $request->jobAddParameter->jobReleaseTask->maxWallClockTime = 'culpa';
    $request->jobAddParameter->jobReleaseTask->resourceFiles = [
        new ResourceFile(),
        new ResourceFile(),
        new ResourceFile(),
    ];
    $request->jobAddParameter->jobReleaseTask->retentionTime = 'pariatur';
    $request->jobAddParameter->jobReleaseTask->runElevated = false;
    $request->jobAddParameter->metadata = [
        new MetadataItem(),
        new MetadataItem(),
        new MetadataItem(),
    ];
    $request->jobAddParameter->poolInfo = new PoolInformation();
    $request->jobAddParameter->poolInfo->autoPoolSpecification = new AutoPoolSpecification();
    $request->jobAddParameter->poolInfo->autoPoolSpecification->autoPoolIdPrefix = 'hic';
    $request->jobAddParameter->poolInfo->autoPoolSpecification->keepAlive = false;
    $request->jobAddParameter->poolInfo->autoPoolSpecification->pool = new PoolSpecification();
    $request->jobAddParameter->poolInfo->autoPoolSpecification->pool->applicationPackageReferences = [
        new ApplicationPackageReference(),
        new ApplicationPackageReference(),
    ];
    $request->jobAddParameter->poolInfo->autoPoolSpecification->pool->autoScaleEvaluationInterval = 'nobis';
    $request->jobAddParameter->poolInfo->autoPoolSpecification->pool->autoScaleFormula = 'sit';
    $request->jobAddParameter->poolInfo->autoPoolSpecification->pool->certificateReferences = [
        new CertificateReference(),
        new CertificateReference(),
        new CertificateReference(),
    ];
    $request->jobAddParameter->poolInfo->autoPoolSpecification->pool->cloudServiceConfiguration = new CloudServiceConfiguration();
    $request->jobAddParameter->poolInfo->autoPoolSpecification->pool->cloudServiceConfiguration->currentOSVersion = 'sed';
    $request->jobAddParameter->poolInfo->autoPoolSpecification->pool->cloudServiceConfiguration->osFamily = 'reiciendis';
    $request->jobAddParameter->poolInfo->autoPoolSpecification->pool->cloudServiceConfiguration->targetOSVersion = 'explicabo';
    $request->jobAddParameter->poolInfo->autoPoolSpecification->pool->displayName = 'asperiores';
    $request->jobAddParameter->poolInfo->autoPoolSpecification->pool->enableAutoScale = false;
    $request->jobAddParameter->poolInfo->autoPoolSpecification->pool->enableInterNodeCommunication = false;
    $request->jobAddParameter->poolInfo->autoPoolSpecification->pool->maxTasksPerNode = 707918;
    $request->jobAddParameter->poolInfo->autoPoolSpecification->pool->metadata = [
        new MetadataItem(),
        new MetadataItem(),
    ];
    $request->jobAddParameter->poolInfo->autoPoolSpecification->pool->resizeTimeout = 'expedita';
    $request->jobAddParameter->poolInfo->autoPoolSpecification->pool->startTask = new StartTask();
    $request->jobAddParameter->poolInfo->autoPoolSpecification->pool->startTask->commandLine = 'ab';
    $request->jobAddParameter->poolInfo->autoPoolSpecification->pool->startTask->environmentSettings = [
        new EnvironmentSetting(),
        new EnvironmentSetting(),
        new EnvironmentSetting(),
    ];
    $request->jobAddParameter->poolInfo->autoPoolSpecification->pool->startTask->maxTaskRetryCount = 292794;
    $request->jobAddParameter->poolInfo->autoPoolSpecification->pool->startTask->resourceFiles = [
        new ResourceFile(),
        new ResourceFile(),
        new ResourceFile(),
    ];
    $request->jobAddParameter->poolInfo->autoPoolSpecification->pool->startTask->runElevated = false;
    $request->jobAddParameter->poolInfo->autoPoolSpecification->pool->startTask->waitForSuccess = false;
    $request->jobAddParameter->poolInfo->autoPoolSpecification->pool->targetDedicated = 152354;
    $request->jobAddParameter->poolInfo->autoPoolSpecification->pool->taskSchedulingPolicy = new TaskSchedulingPolicy();
    $request->jobAddParameter->poolInfo->autoPoolSpecification->pool->taskSchedulingPolicy->nodeFillType = TaskSchedulingPolicyNodeFillTypeEnum::PACK;
    $request->jobAddParameter->poolInfo->autoPoolSpecification->pool->virtualMachineConfiguration = new VirtualMachineConfiguration();
    $request->jobAddParameter->poolInfo->autoPoolSpecification->pool->virtualMachineConfiguration->imageReference = new ImageReference();
    $request->jobAddParameter->poolInfo->autoPoolSpecification->pool->virtualMachineConfiguration->imageReference->offer = 'commodi';
    $request->jobAddParameter->poolInfo->autoPoolSpecification->pool->virtualMachineConfiguration->imageReference->publisher = 'quidem';
    $request->jobAddParameter->poolInfo->autoPoolSpecification->pool->virtualMachineConfiguration->imageReference->sku = 'explicabo';
    $request->jobAddParameter->poolInfo->autoPoolSpecification->pool->virtualMachineConfiguration->imageReference->version = 'voluptas';
    $request->jobAddParameter->poolInfo->autoPoolSpecification->pool->virtualMachineConfiguration->nodeAgentSKUId = 'unde';
    $request->jobAddParameter->poolInfo->autoPoolSpecification->pool->virtualMachineConfiguration->windowsConfiguration = new WindowsConfiguration();
    $request->jobAddParameter->poolInfo->autoPoolSpecification->pool->virtualMachineConfiguration->windowsConfiguration->enableAutomaticUpdates = false;
    $request->jobAddParameter->poolInfo->autoPoolSpecification->pool->vmSize = 'architecto';
    $request->jobAddParameter->poolInfo->autoPoolSpecification->poolLifetimeOption = AutoPoolSpecificationPoolLifetimeOptionEnum::JOB;
    $request->jobAddParameter->poolInfo->poolId = 'sapiente';
    $request->jobAddParameter->priority = 895386;
    $request->jobAddParameter->usesTaskDependencies = false;
    $request->apiVersion = 'illo';
    $request->clientRequestId = 'reiciendis';
    $request->ocpDate = 'perferendis';
    $request->returnClientRequestId = false;
    $request->timeout = 546885;

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
    $request->ifMatch = 'maiores';
    $request->ifModifiedSince = 'incidunt';
    $request->ifNoneMatch = 'sed';
    $request->ifUnmodifiedSince = 'provident';
    $request->apiVersion = 'eius';
    $request->clientRequestId = 'necessitatibus';
    $request->jobId = 'ipsum';
    $request->ocpDate = 'ea';
    $request->returnClientRequestId = false;
    $request->timeout = 579912;

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
    $request->ifMatch = 'quos';
    $request->ifModifiedSince = 'voluptatibus';
    $request->ifNoneMatch = 'tempora';
    $request->ifUnmodifiedSince = 'tempora';
    $request->jobDisableParameter = new JobDisableParameter();
    $request->jobDisableParameter->disableTasks = JobDisableParameterDisableTasksEnum::TERMINATE;
    $request->apiVersion = 'reiciendis';
    $request->clientRequestId = 'ex';
    $request->jobId = 'sit';
    $request->ocpDate = 'non';
    $request->returnClientRequestId = false;
    $request->timeout = 888044;

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
    $request->ifMatch = 'praesentium';
    $request->ifModifiedSince = 'facilis';
    $request->ifNoneMatch = 'quaerat';
    $request->ifUnmodifiedSince = 'incidunt';
    $request->apiVersion = 'ipsam';
    $request->clientRequestId = 'debitis';
    $request->jobId = 'rem';
    $request->ocpDate = 'sit';
    $request->returnClientRequestId = false;
    $request->timeout = 750595;

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
    $request->dollarExpand = 'error';
    $request->dollarSelect = 'veniam';
    $request->apiVersion = 'minima';
    $request->clientRequestId = 'recusandae';
    $request->jobId = 'reiciendis';
    $request->ocpDate = 'nulla';
    $request->returnClientRequestId = false;
    $request->timeout = 168576;

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
    $request->apiVersion = 'aperiam';
    $request->clientRequestId = 'saepe';
    $request->ocpDate = 'numquam';
    $request->returnClientRequestId = false;
    $request->timeout = 329935;

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
    $request->dollarExpand = 'in';
    $request->dollarFilter = 'officiis';
    $request->dollarSelect = 'beatae';
    $request->apiVersion = 'laudantium';
    $request->clientRequestId = 'exercitationem';
    $request->maxresults = 510629;
    $request->ocpDate = 'cum';
    $request->returnClientRequestId = false;
    $request->timeout = 386827;

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
    $request->dollarExpand = 'dolorum';
    $request->dollarFilter = 'voluptatum';
    $request->dollarSelect = 'error';
    $request->apiVersion = 'hic';
    $request->clientRequestId = 'expedita';
    $request->jobScheduleId = 'debitis';
    $request->maxresults = 204923;
    $request->ocpDate = 'dolorum';
    $request->returnClientRequestId = false;
    $request->timeout = 341698;

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
    $request->dollarFilter = 'officia';
    $request->dollarSelect = 'dolorum';
    $request->apiVersion = 'corrupti';
    $request->clientRequestId = 'accusamus';
    $request->jobId = 'tempora';
    $request->maxresults = 543678;
    $request->ocpDate = 'fugit';
    $request->returnClientRequestId = false;
    $request->timeout = 282699;

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
use \OpenAPI\OpenAPI\Models\Shared\CertificateReferenceVisibilityEnum;
use \OpenAPI\OpenAPI\Models\Shared\CloudServiceConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\StartTask;
use \OpenAPI\OpenAPI\Models\Shared\EnvironmentSetting;
use \OpenAPI\OpenAPI\Models\Shared\ResourceFile;
use \OpenAPI\OpenAPI\Models\Shared\TaskSchedulingPolicy;
use \OpenAPI\OpenAPI\Models\Shared\TaskSchedulingPolicyNodeFillTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\VirtualMachineConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\ImageReference;
use \OpenAPI\OpenAPI\Models\Shared\WindowsConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\AutoPoolSpecificationPoolLifetimeOptionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new JobPatchRequest();
    $request->ifMatch = 'fugiat';
    $request->ifModifiedSince = 'voluptatem';
    $request->ifNoneMatch = 'culpa';
    $request->ifUnmodifiedSince = 'expedita';
    $request->jobPatchParameter = new JobPatchParameter();
    $request->jobPatchParameter->constraints = new JobConstraints();
    $request->jobPatchParameter->constraints->maxTaskRetryCount = 299643;
    $request->jobPatchParameter->constraints->maxWallClockTime = 'consequatur';
    $request->jobPatchParameter->metadata = [
        new MetadataItem(),
        new MetadataItem(),
    ];
    $request->jobPatchParameter->poolInfo = new PoolInformation();
    $request->jobPatchParameter->poolInfo->autoPoolSpecification = new AutoPoolSpecification();
    $request->jobPatchParameter->poolInfo->autoPoolSpecification->autoPoolIdPrefix = 'ipsam';
    $request->jobPatchParameter->poolInfo->autoPoolSpecification->keepAlive = false;
    $request->jobPatchParameter->poolInfo->autoPoolSpecification->pool = new PoolSpecification();
    $request->jobPatchParameter->poolInfo->autoPoolSpecification->pool->applicationPackageReferences = [
        new ApplicationPackageReference(),
    ];
    $request->jobPatchParameter->poolInfo->autoPoolSpecification->pool->autoScaleEvaluationInterval = 'voluptatum';
    $request->jobPatchParameter->poolInfo->autoPoolSpecification->pool->autoScaleFormula = 'quas';
    $request->jobPatchParameter->poolInfo->autoPoolSpecification->pool->certificateReferences = [
        new CertificateReference(),
        new CertificateReference(),
        new CertificateReference(),
        new CertificateReference(),
    ];
    $request->jobPatchParameter->poolInfo->autoPoolSpecification->pool->cloudServiceConfiguration = new CloudServiceConfiguration();
    $request->jobPatchParameter->poolInfo->autoPoolSpecification->pool->cloudServiceConfiguration->currentOSVersion = 'corporis';
    $request->jobPatchParameter->poolInfo->autoPoolSpecification->pool->cloudServiceConfiguration->osFamily = 'et';
    $request->jobPatchParameter->poolInfo->autoPoolSpecification->pool->cloudServiceConfiguration->targetOSVersion = 'blanditiis';
    $request->jobPatchParameter->poolInfo->autoPoolSpecification->pool->displayName = 'ex';
    $request->jobPatchParameter->poolInfo->autoPoolSpecification->pool->enableAutoScale = false;
    $request->jobPatchParameter->poolInfo->autoPoolSpecification->pool->enableInterNodeCommunication = false;
    $request->jobPatchParameter->poolInfo->autoPoolSpecification->pool->maxTasksPerNode = 153627;
    $request->jobPatchParameter->poolInfo->autoPoolSpecification->pool->metadata = [
        new MetadataItem(),
    ];
    $request->jobPatchParameter->poolInfo->autoPoolSpecification->pool->resizeTimeout = 'vel';
    $request->jobPatchParameter->poolInfo->autoPoolSpecification->pool->startTask = new StartTask();
    $request->jobPatchParameter->poolInfo->autoPoolSpecification->pool->startTask->commandLine = 'nostrum';
    $request->jobPatchParameter->poolInfo->autoPoolSpecification->pool->startTask->environmentSettings = [
        new EnvironmentSetting(),
        new EnvironmentSetting(),
        new EnvironmentSetting(),
        new EnvironmentSetting(),
    ];
    $request->jobPatchParameter->poolInfo->autoPoolSpecification->pool->startTask->maxTaskRetryCount = 622231;
    $request->jobPatchParameter->poolInfo->autoPoolSpecification->pool->startTask->resourceFiles = [
        new ResourceFile(),
    ];
    $request->jobPatchParameter->poolInfo->autoPoolSpecification->pool->startTask->runElevated = false;
    $request->jobPatchParameter->poolInfo->autoPoolSpecification->pool->startTask->waitForSuccess = false;
    $request->jobPatchParameter->poolInfo->autoPoolSpecification->pool->targetDedicated = 279068;
    $request->jobPatchParameter->poolInfo->autoPoolSpecification->pool->taskSchedulingPolicy = new TaskSchedulingPolicy();
    $request->jobPatchParameter->poolInfo->autoPoolSpecification->pool->taskSchedulingPolicy->nodeFillType = TaskSchedulingPolicyNodeFillTypeEnum::UNMAPPED;
    $request->jobPatchParameter->poolInfo->autoPoolSpecification->pool->virtualMachineConfiguration = new VirtualMachineConfiguration();
    $request->jobPatchParameter->poolInfo->autoPoolSpecification->pool->virtualMachineConfiguration->imageReference = new ImageReference();
    $request->jobPatchParameter->poolInfo->autoPoolSpecification->pool->virtualMachineConfiguration->imageReference->offer = 'dolorem';
    $request->jobPatchParameter->poolInfo->autoPoolSpecification->pool->virtualMachineConfiguration->imageReference->publisher = 'harum';
    $request->jobPatchParameter->poolInfo->autoPoolSpecification->pool->virtualMachineConfiguration->imageReference->sku = 'dicta';
    $request->jobPatchParameter->poolInfo->autoPoolSpecification->pool->virtualMachineConfiguration->imageReference->version = 'architecto';
    $request->jobPatchParameter->poolInfo->autoPoolSpecification->pool->virtualMachineConfiguration->nodeAgentSKUId = 'occaecati';
    $request->jobPatchParameter->poolInfo->autoPoolSpecification->pool->virtualMachineConfiguration->windowsConfiguration = new WindowsConfiguration();
    $request->jobPatchParameter->poolInfo->autoPoolSpecification->pool->virtualMachineConfiguration->windowsConfiguration->enableAutomaticUpdates = false;
    $request->jobPatchParameter->poolInfo->autoPoolSpecification->pool->vmSize = 'labore';
    $request->jobPatchParameter->poolInfo->autoPoolSpecification->poolLifetimeOption = AutoPoolSpecificationPoolLifetimeOptionEnum::UNMAPPED;
    $request->jobPatchParameter->poolInfo->poolId = 'atque';
    $request->jobPatchParameter->priority = 671957;
    $request->apiVersion = 'nam';
    $request->clientRequestId = 'tenetur';
    $request->jobId = 'laboriosam';
    $request->ocpDate = 'alias';
    $request->returnClientRequestId = false;
    $request->timeout = 227084;

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
    $request->ifMatch = 'deserunt';
    $request->ifModifiedSince = 'voluptate';
    $request->ifNoneMatch = 'unde';
    $request->ifUnmodifiedSince = 'reiciendis';
    $request->jobTerminateParameter = new JobTerminateParameter();
    $request->jobTerminateParameter->terminateReason = 'provident';
    $request->apiVersion = 'repellendus';
    $request->clientRequestId = 'delectus';
    $request->jobId = 'voluptates';
    $request->ocpDate = 'perferendis';
    $request->returnClientRequestId = false;
    $request->timeout = 667285;

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
use \OpenAPI\OpenAPI\Models\Shared\CertificateReferenceVisibilityEnum;
use \OpenAPI\OpenAPI\Models\Shared\CloudServiceConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\StartTask;
use \OpenAPI\OpenAPI\Models\Shared\EnvironmentSetting;
use \OpenAPI\OpenAPI\Models\Shared\ResourceFile;
use \OpenAPI\OpenAPI\Models\Shared\TaskSchedulingPolicy;
use \OpenAPI\OpenAPI\Models\Shared\TaskSchedulingPolicyNodeFillTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\VirtualMachineConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\ImageReference;
use \OpenAPI\OpenAPI\Models\Shared\WindowsConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\AutoPoolSpecificationPoolLifetimeOptionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new JobUpdateRequest();
    $request->ifMatch = 'quidem';
    $request->ifModifiedSince = 'reprehenderit';
    $request->ifNoneMatch = 'facere';
    $request->ifUnmodifiedSince = 'fuga';
    $request->jobUpdateParameter = new JobUpdateParameter();
    $request->jobUpdateParameter->constraints = new JobConstraints();
    $request->jobUpdateParameter->constraints->maxTaskRetryCount = 509807;
    $request->jobUpdateParameter->constraints->maxWallClockTime = 'mollitia';
    $request->jobUpdateParameter->metadata = [
        new MetadataItem(),
        new MetadataItem(),
    ];
    $request->jobUpdateParameter->poolInfo = new PoolInformation();
    $request->jobUpdateParameter->poolInfo->autoPoolSpecification = new AutoPoolSpecification();
    $request->jobUpdateParameter->poolInfo->autoPoolSpecification->autoPoolIdPrefix = 'voluptatem';
    $request->jobUpdateParameter->poolInfo->autoPoolSpecification->keepAlive = false;
    $request->jobUpdateParameter->poolInfo->autoPoolSpecification->pool = new PoolSpecification();
    $request->jobUpdateParameter->poolInfo->autoPoolSpecification->pool->applicationPackageReferences = [
        new ApplicationPackageReference(),
        new ApplicationPackageReference(),
        new ApplicationPackageReference(),
        new ApplicationPackageReference(),
    ];
    $request->jobUpdateParameter->poolInfo->autoPoolSpecification->pool->autoScaleEvaluationInterval = 'repudiandae';
    $request->jobUpdateParameter->poolInfo->autoPoolSpecification->pool->autoScaleFormula = 'quasi';
    $request->jobUpdateParameter->poolInfo->autoPoolSpecification->pool->certificateReferences = [
        new CertificateReference(),
        new CertificateReference(),
        new CertificateReference(),
    ];
    $request->jobUpdateParameter->poolInfo->autoPoolSpecification->pool->cloudServiceConfiguration = new CloudServiceConfiguration();
    $request->jobUpdateParameter->poolInfo->autoPoolSpecification->pool->cloudServiceConfiguration->currentOSVersion = 'reprehenderit';
    $request->jobUpdateParameter->poolInfo->autoPoolSpecification->pool->cloudServiceConfiguration->osFamily = 'asperiores';
    $request->jobUpdateParameter->poolInfo->autoPoolSpecification->pool->cloudServiceConfiguration->targetOSVersion = 'totam';
    $request->jobUpdateParameter->poolInfo->autoPoolSpecification->pool->displayName = 'suscipit';
    $request->jobUpdateParameter->poolInfo->autoPoolSpecification->pool->enableAutoScale = false;
    $request->jobUpdateParameter->poolInfo->autoPoolSpecification->pool->enableInterNodeCommunication = false;
    $request->jobUpdateParameter->poolInfo->autoPoolSpecification->pool->maxTasksPerNode = 693957;
    $request->jobUpdateParameter->poolInfo->autoPoolSpecification->pool->metadata = [
        new MetadataItem(),
        new MetadataItem(),
        new MetadataItem(),
        new MetadataItem(),
    ];
    $request->jobUpdateParameter->poolInfo->autoPoolSpecification->pool->resizeTimeout = 'et';
    $request->jobUpdateParameter->poolInfo->autoPoolSpecification->pool->startTask = new StartTask();
    $request->jobUpdateParameter->poolInfo->autoPoolSpecification->pool->startTask->commandLine = 'esse';
    $request->jobUpdateParameter->poolInfo->autoPoolSpecification->pool->startTask->environmentSettings = [
        new EnvironmentSetting(),
    ];
    $request->jobUpdateParameter->poolInfo->autoPoolSpecification->pool->startTask->maxTaskRetryCount = 826825;
    $request->jobUpdateParameter->poolInfo->autoPoolSpecification->pool->startTask->resourceFiles = [
        new ResourceFile(),
        new ResourceFile(),
    ];
    $request->jobUpdateParameter->poolInfo->autoPoolSpecification->pool->startTask->runElevated = false;
    $request->jobUpdateParameter->poolInfo->autoPoolSpecification->pool->startTask->waitForSuccess = false;
    $request->jobUpdateParameter->poolInfo->autoPoolSpecification->pool->targetDedicated = 539118;
    $request->jobUpdateParameter->poolInfo->autoPoolSpecification->pool->taskSchedulingPolicy = new TaskSchedulingPolicy();
    $request->jobUpdateParameter->poolInfo->autoPoolSpecification->pool->taskSchedulingPolicy->nodeFillType = TaskSchedulingPolicyNodeFillTypeEnum::PACK;
    $request->jobUpdateParameter->poolInfo->autoPoolSpecification->pool->virtualMachineConfiguration = new VirtualMachineConfiguration();
    $request->jobUpdateParameter->poolInfo->autoPoolSpecification->pool->virtualMachineConfiguration->imageReference = new ImageReference();
    $request->jobUpdateParameter->poolInfo->autoPoolSpecification->pool->virtualMachineConfiguration->imageReference->offer = 'officiis';
    $request->jobUpdateParameter->poolInfo->autoPoolSpecification->pool->virtualMachineConfiguration->imageReference->publisher = 'officiis';
    $request->jobUpdateParameter->poolInfo->autoPoolSpecification->pool->virtualMachineConfiguration->imageReference->sku = 'accusamus';
    $request->jobUpdateParameter->poolInfo->autoPoolSpecification->pool->virtualMachineConfiguration->imageReference->version = 'natus';
    $request->jobUpdateParameter->poolInfo->autoPoolSpecification->pool->virtualMachineConfiguration->nodeAgentSKUId = 'minima';
    $request->jobUpdateParameter->poolInfo->autoPoolSpecification->pool->virtualMachineConfiguration->windowsConfiguration = new WindowsConfiguration();
    $request->jobUpdateParameter->poolInfo->autoPoolSpecification->pool->virtualMachineConfiguration->windowsConfiguration->enableAutomaticUpdates = false;
    $request->jobUpdateParameter->poolInfo->autoPoolSpecification->pool->vmSize = 'aspernatur';
    $request->jobUpdateParameter->poolInfo->autoPoolSpecification->poolLifetimeOption = AutoPoolSpecificationPoolLifetimeOptionEnum::JOB;
    $request->jobUpdateParameter->poolInfo->poolId = 'maiores';
    $request->jobUpdateParameter->priority = 544647;
    $request->apiVersion = 'at';
    $request->clientRequestId = 'error';
    $request->jobId = 'blanditiis';
    $request->ocpDate = 'suscipit';
    $request->returnClientRequestId = false;
    $request->timeout = 922348;

    $response = $sdk->jobs->jobUpdate($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
