# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/windows.net/batch-BatchService/2016-02-01.3.0/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Accounts.AccountListNodeAgentSkus(ctx, operations.AccountListNodeAgentSkusRequest{
        DollarFilter: sdk.String("corrupti"),
        APIVersion: "provident",
        ClientRequestID: sdk.String("distinctio"),
        Maxresults: sdk.Int(844266),
        OcpDate: sdk.String("unde"),
        ReturnClientRequestID: sdk.Bool(false),
        Timeout: sdk.Int(857946),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AccountListNodeAgentSkusResult != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Accounts](docs/accounts/README.md)

* [AccountListNodeAgentSkus](docs/accounts/README.md#accountlistnodeagentskus) - Lists all node agent SKUs supported by the Azure Batch service.

### [Applications](docs/applications/README.md)

* [ApplicationGet](docs/applications/README.md#applicationget) - Gets information about the specified application.
* [ApplicationList](docs/applications/README.md#applicationlist) - Lists all of the applications available in the specified account.

### [Certificates](docs/certificates/README.md)

* [CertificateAdd](docs/certificates/README.md#certificateadd) - Adds a certificate to the specified account.
* [CertificateCancelDeletion](docs/certificates/README.md#certificatecanceldeletion) - Cancels a failed deletion of a certificate from the specified account.
* [CertificateDelete](docs/certificates/README.md#certificatedelete) - Deletes a certificate from the specified account.
* [CertificateGet](docs/certificates/README.md#certificateget) - Gets information about the specified certificate.
* [CertificateList](docs/certificates/README.md#certificatelist) - Lists all of the certificates that have been added to the specified account.

### [ComputeNodes](docs/computenodes/README.md)

* [ComputeNodeAddUser](docs/computenodes/README.md#computenodeadduser) - Adds a user account to the specified compute node.
* [ComputeNodeDeleteUser](docs/computenodes/README.md#computenodedeleteuser) - Deletes a user account from the specified compute node.
* [ComputeNodeDisableScheduling](docs/computenodes/README.md#computenodedisablescheduling) - Disable task scheduling of the specified compute node.
* [ComputeNodeEnableScheduling](docs/computenodes/README.md#computenodeenablescheduling) - Enable task scheduling of the specified compute node.
* [ComputeNodeGet](docs/computenodes/README.md#computenodeget) - Gets information about the specified compute node.
* [ComputeNodeGetRemoteDesktop](docs/computenodes/README.md#computenodegetremotedesktop) - Gets the Remote Desktop Protocol file for the specified compute node.
* [ComputeNodeGetRemoteLoginSettings](docs/computenodes/README.md#computenodegetremoteloginsettings) - Gets the settings required for remote login to a compute node.
* [ComputeNodeList](docs/computenodes/README.md#computenodelist) - Lists the compute nodes in the specified pool.
* [ComputeNodeReboot](docs/computenodes/README.md#computenodereboot) - Restarts the specified compute node.
* [ComputeNodeReimage](docs/computenodes/README.md#computenodereimage) - Reinstalls the operating system on the specified compute node.
* [ComputeNodeUpdateUser](docs/computenodes/README.md#computenodeupdateuser) - Updates the password or expiration time of a user account on the specified compute node.
* [PoolRemoveNodes](docs/computenodes/README.md#poolremovenodes) - Removes compute nodes from the specified pool.

### [Files](docs/files/README.md)

* [FileDeleteFromComputeNode](docs/files/README.md#filedeletefromcomputenode) - Deletes the specified task file from the compute node.
* [FileDeleteFromTask](docs/files/README.md#filedeletefromtask) - Deletes the specified task file from the compute node where the task ran.
* [FileGetFromComputeNode](docs/files/README.md#filegetfromcomputenode) - Returns the content of the specified task file.
* [FileGetFromTask](docs/files/README.md#filegetfromtask) - Returns the content of the specified task file.
* [FileGetNodeFilePropertiesFromComputeNode](docs/files/README.md#filegetnodefilepropertiesfromcomputenode) - Gets the properties of the specified compute node file.
* [FileGetNodeFilePropertiesFromTask](docs/files/README.md#filegetnodefilepropertiesfromtask) - Gets the properties of the specified task file.
* [FileListFromComputeNode](docs/files/README.md#filelistfromcomputenode) - Lists all of the files in task directories on the specified compute node.
* [FileListFromTask](docs/files/README.md#filelistfromtask) - Lists the files in a task's directory on its compute node.

### [JobSchedules](docs/jobschedules/README.md)

* [JobScheduleAdd](docs/jobschedules/README.md#jobscheduleadd) - Adds a job schedule to the specified account.
* [JobScheduleDelete](docs/jobschedules/README.md#jobscheduledelete) - Deletes a job schedule from the specified account.
* [JobScheduleDisable](docs/jobschedules/README.md#jobscheduledisable) - Disables a job schedule.
* [JobScheduleEnable](docs/jobschedules/README.md#jobscheduleenable) - Enables a job schedule.
* [JobScheduleExists](docs/jobschedules/README.md#jobscheduleexists) - Checks the specified job schedule exists.
* [JobScheduleGet](docs/jobschedules/README.md#jobscheduleget) - Gets information about the specified job schedule.
* [JobScheduleList](docs/jobschedules/README.md#jobschedulelist) - Lists all of the job schedules in the specified account.
* [JobSchedulePatch](docs/jobschedules/README.md#jobschedulepatch) - Updates the properties of the specified job schedule.
* [JobScheduleTerminate](docs/jobschedules/README.md#jobscheduleterminate) - Terminates a job schedule.
* [JobScheduleUpdate](docs/jobschedules/README.md#jobscheduleupdate) - Updates the properties of the specified job schedule.

### [Jobs](docs/jobs/README.md)

* [JobAdd](docs/jobs/README.md#jobadd) - Adds a job to the specified account.
* [JobDelete](docs/jobs/README.md#jobdelete) - Deletes a job.
* [JobDisable](docs/jobs/README.md#jobdisable) - Disables the specified job, preventing new tasks from running.
* [JobEnable](docs/jobs/README.md#jobenable) - Enables the specified job, allowing new tasks to run.
* [JobGet](docs/jobs/README.md#jobget) - Gets information about the specified job.
* [JobGetAllJobsLifetimeStatistics](docs/jobs/README.md#jobgetalljobslifetimestatistics) - Gets lifetime summary statistics for all of the jobs in the specified account. Statistics are aggregated across all jobs that have ever existed in the account, from account creation to the last update time of the statistics.
* [JobList](docs/jobs/README.md#joblist) - Lists all of the jobs in the specified account.
* [JobListFromJobSchedule](docs/jobs/README.md#joblistfromjobschedule) - Lists the jobs that have been created under the specified job schedule.
* [JobListPreparationAndReleaseTaskStatus](docs/jobs/README.md#joblistpreparationandreleasetaskstatus) - Lists the execution status of the Job Preparation and Job Release task for the specified job across the compute nodes where the job has run.
* [JobPatch](docs/jobs/README.md#jobpatch) - Updates the properties of a job.
* [JobTerminate](docs/jobs/README.md#jobterminate) - Terminates the specified job, marking it as completed.
* [JobUpdate](docs/jobs/README.md#jobupdate) - Updates the properties of a job.

### [Pools](docs/pools/README.md)

* [PoolAdd](docs/pools/README.md#pooladd) - Adds a pool to the specified account.
* [PoolDelete](docs/pools/README.md#pooldelete) - Deletes a pool from the specified account.
* [PoolDisableAutoScale](docs/pools/README.md#pooldisableautoscale) - Disables automatic scaling for a pool.
* [PoolEnableAutoScale](docs/pools/README.md#poolenableautoscale) - Enables automatic scaling for a pool.
* [PoolEvaluateAutoScale](docs/pools/README.md#poolevaluateautoscale) - Gets the result of evaluating an automatic scaling formula on the pool.
* [PoolExists](docs/pools/README.md#poolexists) - Gets basic properties of a pool.
* [PoolGet](docs/pools/README.md#poolget) - Gets information about the specified pool.
* [PoolGetAllPoolsLifetimeStatistics](docs/pools/README.md#poolgetallpoolslifetimestatistics) - Gets lifetime summary statistics for all of the pools in the specified account. Statistics are aggregated across all pools that have ever existed in the account, from account creation to the last update time of the statistics.
* [PoolList](docs/pools/README.md#poollist) - Lists all of the pools in the specified account.
* [PoolListPoolUsageMetrics](docs/pools/README.md#poollistpoolusagemetrics) - Lists the usage metrics, aggregated by pool across individual time intervals, for the specified account.
* [PoolPatch](docs/pools/README.md#poolpatch) - Updates the properties of a pool.
* [PoolResize](docs/pools/README.md#poolresize) - Changes the number of compute nodes that are assigned to a pool.
* [PoolStopResize](docs/pools/README.md#poolstopresize) - Stops an ongoing resize operation on the pool. This does not restore the pool to its previous state before the resize operation: it only stops any further changes being made, and the pool maintains its current state.
* [PoolUpdateProperties](docs/pools/README.md#poolupdateproperties) - Updates the properties of a pool.
* [PoolUpgradeOS](docs/pools/README.md#poolupgradeos) - Upgrades the operating system of the specified pool.

### [Tasks](docs/tasks/README.md)

* [TaskAdd](docs/tasks/README.md#taskadd) - Adds a task to the specified job.
* [TaskAddCollection](docs/tasks/README.md#taskaddcollection) - Adds a collection of tasks to the specified job.
* [TaskDelete](docs/tasks/README.md#taskdelete) - Deletes a task from the specified job.
* [TaskGet](docs/tasks/README.md#taskget) - Gets information about the specified task.
* [TaskList](docs/tasks/README.md#tasklist) - Lists all of the tasks that are associated with the specified job.
* [TaskListSubtasks](docs/tasks/README.md#tasklistsubtasks) - Lists all of the subtasks that are associated with the specified multi-instance task.
* [TaskTerminate](docs/tasks/README.md#taskterminate) - Terminates the specified task.
* [TaskUpdate](docs/tasks/README.md#taskupdate) - Updates the properties of the specified task.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
