# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AccountListNodeAgentSkusRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AccountListNodeAgentSkusRequest();
    $request->dollarFilter = 'corrupti';
    $request->apiVersion = 'provident';
    $request->clientRequestId = 'distinctio';
    $request->maxresults = 844266;
    $request->ocpDate = 'unde';
    $request->returnClientRequestId = false;
    $request->timeout = 857946;

    $response = $sdk->accounts->accountListNodeAgentSkus($request);

    if ($response->accountListNodeAgentSkusResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [accounts](docs/accounts/README.md)

* [accountListNodeAgentSkus](docs/accounts/README.md#accountlistnodeagentskus) - Lists all node agent SKUs supported by the Azure Batch service.

### [applications](docs/applications/README.md)

* [applicationGet](docs/applications/README.md#applicationget) - Gets information about the specified application.
* [applicationList](docs/applications/README.md#applicationlist) - Lists all of the applications available in the specified account.

### [certificates](docs/certificates/README.md)

* [certificateAdd](docs/certificates/README.md#certificateadd) - Adds a certificate to the specified account.
* [certificateCancelDeletion](docs/certificates/README.md#certificatecanceldeletion) - Cancels a failed deletion of a certificate from the specified account.
* [certificateDelete](docs/certificates/README.md#certificatedelete) - Deletes a certificate from the specified account.
* [certificateGet](docs/certificates/README.md#certificateget) - Gets information about the specified certificate.
* [certificateList](docs/certificates/README.md#certificatelist) - Lists all of the certificates that have been added to the specified account.

### [computeNodes](docs/computenodes/README.md)

* [computeNodeAddUser](docs/computenodes/README.md#computenodeadduser) - Adds a user account to the specified compute node.
* [computeNodeDeleteUser](docs/computenodes/README.md#computenodedeleteuser) - Deletes a user account from the specified compute node.
* [computeNodeDisableScheduling](docs/computenodes/README.md#computenodedisablescheduling) - Disable task scheduling of the specified compute node.
* [computeNodeEnableScheduling](docs/computenodes/README.md#computenodeenablescheduling) - Enable task scheduling of the specified compute node.
* [computeNodeGet](docs/computenodes/README.md#computenodeget) - Gets information about the specified compute node.
* [computeNodeGetRemoteDesktop](docs/computenodes/README.md#computenodegetremotedesktop) - Gets the Remote Desktop Protocol file for the specified compute node.
* [computeNodeGetRemoteLoginSettings](docs/computenodes/README.md#computenodegetremoteloginsettings) - Gets the settings required for remote login to a compute node.
* [computeNodeList](docs/computenodes/README.md#computenodelist) - Lists the compute nodes in the specified pool.
* [computeNodeReboot](docs/computenodes/README.md#computenodereboot) - Restarts the specified compute node.
* [computeNodeReimage](docs/computenodes/README.md#computenodereimage) - Reinstalls the operating system on the specified compute node.
* [computeNodeUpdateUser](docs/computenodes/README.md#computenodeupdateuser) - Updates the password or expiration time of a user account on the specified compute node.
* [poolRemoveNodes](docs/computenodes/README.md#poolremovenodes) - Removes compute nodes from the specified pool.

### [files](docs/files/README.md)

* [fileDeleteFromComputeNode](docs/files/README.md#filedeletefromcomputenode) - Deletes the specified task file from the compute node.
* [fileDeleteFromTask](docs/files/README.md#filedeletefromtask) - Deletes the specified task file from the compute node where the task ran.
* [fileGetFromComputeNode](docs/files/README.md#filegetfromcomputenode) - Returns the content of the specified task file.
* [fileGetFromTask](docs/files/README.md#filegetfromtask) - Returns the content of the specified task file.
* [fileGetNodeFilePropertiesFromComputeNode](docs/files/README.md#filegetnodefilepropertiesfromcomputenode) - Gets the properties of the specified compute node file.
* [fileGetNodeFilePropertiesFromTask](docs/files/README.md#filegetnodefilepropertiesfromtask) - Gets the properties of the specified task file.
* [fileListFromComputeNode](docs/files/README.md#filelistfromcomputenode) - Lists all of the files in task directories on the specified compute node.
* [fileListFromTask](docs/files/README.md#filelistfromtask) - Lists the files in a task's directory on its compute node.

### [jobSchedules](docs/jobschedules/README.md)

* [jobScheduleAdd](docs/jobschedules/README.md#jobscheduleadd) - Adds a job schedule to the specified account.
* [jobScheduleDelete](docs/jobschedules/README.md#jobscheduledelete) - Deletes a job schedule from the specified account.
* [jobScheduleDisable](docs/jobschedules/README.md#jobscheduledisable) - Disables a job schedule.
* [jobScheduleEnable](docs/jobschedules/README.md#jobscheduleenable) - Enables a job schedule.
* [jobScheduleExists](docs/jobschedules/README.md#jobscheduleexists) - Checks the specified job schedule exists.
* [jobScheduleGet](docs/jobschedules/README.md#jobscheduleget) - Gets information about the specified job schedule.
* [jobScheduleList](docs/jobschedules/README.md#jobschedulelist) - Lists all of the job schedules in the specified account.
* [jobSchedulePatch](docs/jobschedules/README.md#jobschedulepatch) - Updates the properties of the specified job schedule.
* [jobScheduleTerminate](docs/jobschedules/README.md#jobscheduleterminate) - Terminates a job schedule.
* [jobScheduleUpdate](docs/jobschedules/README.md#jobscheduleupdate) - Updates the properties of the specified job schedule.

### [jobs](docs/jobs/README.md)

* [jobAdd](docs/jobs/README.md#jobadd) - Adds a job to the specified account.
* [jobDelete](docs/jobs/README.md#jobdelete) - Deletes a job.
* [jobDisable](docs/jobs/README.md#jobdisable) - Disables the specified job, preventing new tasks from running.
* [jobEnable](docs/jobs/README.md#jobenable) - Enables the specified job, allowing new tasks to run.
* [jobGet](docs/jobs/README.md#jobget) - Gets information about the specified job.
* [jobGetAllJobsLifetimeStatistics](docs/jobs/README.md#jobgetalljobslifetimestatistics) - Gets lifetime summary statistics for all of the jobs in the specified account. Statistics are aggregated across all jobs that have ever existed in the account, from account creation to the last update time of the statistics.
* [jobList](docs/jobs/README.md#joblist) - Lists all of the jobs in the specified account.
* [jobListFromJobSchedule](docs/jobs/README.md#joblistfromjobschedule) - Lists the jobs that have been created under the specified job schedule.
* [jobListPreparationAndReleaseTaskStatus](docs/jobs/README.md#joblistpreparationandreleasetaskstatus) - Lists the execution status of the Job Preparation and Job Release task for the specified job across the compute nodes where the job has run.
* [jobPatch](docs/jobs/README.md#jobpatch) - Updates the properties of a job.
* [jobTerminate](docs/jobs/README.md#jobterminate) - Terminates the specified job, marking it as completed.
* [jobUpdate](docs/jobs/README.md#jobupdate) - Updates the properties of a job.

### [pools](docs/pools/README.md)

* [poolAdd](docs/pools/README.md#pooladd) - Adds a pool to the specified account.
* [poolDelete](docs/pools/README.md#pooldelete) - Deletes a pool from the specified account.
* [poolDisableAutoScale](docs/pools/README.md#pooldisableautoscale) - Disables automatic scaling for a pool.
* [poolEnableAutoScale](docs/pools/README.md#poolenableautoscale) - Enables automatic scaling for a pool.
* [poolEvaluateAutoScale](docs/pools/README.md#poolevaluateautoscale) - Gets the result of evaluating an automatic scaling formula on the pool.
* [poolExists](docs/pools/README.md#poolexists) - Gets basic properties of a pool.
* [poolGet](docs/pools/README.md#poolget) - Gets information about the specified pool.
* [poolGetAllPoolsLifetimeStatistics](docs/pools/README.md#poolgetallpoolslifetimestatistics) - Gets lifetime summary statistics for all of the pools in the specified account. Statistics are aggregated across all pools that have ever existed in the account, from account creation to the last update time of the statistics.
* [poolList](docs/pools/README.md#poollist) - Lists all of the pools in the specified account.
* [poolListPoolUsageMetrics](docs/pools/README.md#poollistpoolusagemetrics) - Lists the usage metrics, aggregated by pool across individual time intervals, for the specified account.
* [poolPatch](docs/pools/README.md#poolpatch) - Updates the properties of a pool.
* [poolResize](docs/pools/README.md#poolresize) - Changes the number of compute nodes that are assigned to a pool.
* [poolStopResize](docs/pools/README.md#poolstopresize) - Stops an ongoing resize operation on the pool. This does not restore the pool to its previous state before the resize operation: it only stops any further changes being made, and the pool maintains its current state.
* [poolUpdateProperties](docs/pools/README.md#poolupdateproperties) - Updates the properties of a pool.
* [poolUpgradeOS](docs/pools/README.md#poolupgradeos) - Upgrades the operating system of the specified pool.

### [tasks](docs/tasks/README.md)

* [taskAdd](docs/tasks/README.md#taskadd) - Adds a task to the specified job.
* [taskAddCollection](docs/tasks/README.md#taskaddcollection) - Adds a collection of tasks to the specified job.
* [taskDelete](docs/tasks/README.md#taskdelete) - Deletes a task from the specified job.
* [taskGet](docs/tasks/README.md#taskget) - Gets information about the specified task.
* [taskList](docs/tasks/README.md#tasklist) - Lists all of the tasks that are associated with the specified job.
* [taskListSubtasks](docs/tasks/README.md#tasklistsubtasks) - Lists all of the subtasks that are associated with the specified multi-instance task.
* [taskTerminate](docs/tasks/README.md#taskterminate) - Terminates the specified task.
* [taskUpdate](docs/tasks/README.md#taskupdate) - Updates the properties of the specified task.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
