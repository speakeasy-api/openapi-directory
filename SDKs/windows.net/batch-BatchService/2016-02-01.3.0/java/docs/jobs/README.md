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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.JobAddRequest;
import org.openapis.openapi.models.operations.JobAddResponse;
import org.openapis.openapi.models.shared.ApplicationPackageReference;
import org.openapis.openapi.models.shared.AutoPoolSpecification;
import org.openapis.openapi.models.shared.AutoPoolSpecificationPoolLifetimeOptionEnum;
import org.openapis.openapi.models.shared.CertificateReference;
import org.openapis.openapi.models.shared.CertificateReferenceStoreLocationEnum;
import org.openapis.openapi.models.shared.CertificateReferenceVisibilityEnum;
import org.openapis.openapi.models.shared.CloudServiceConfiguration;
import org.openapis.openapi.models.shared.EnvironmentSetting;
import org.openapis.openapi.models.shared.ImageReference;
import org.openapis.openapi.models.shared.JobAddParameter;
import org.openapis.openapi.models.shared.JobConstraints;
import org.openapis.openapi.models.shared.JobManagerTask;
import org.openapis.openapi.models.shared.JobPreparationTask;
import org.openapis.openapi.models.shared.JobReleaseTask;
import org.openapis.openapi.models.shared.MetadataItem;
import org.openapis.openapi.models.shared.PoolInformation;
import org.openapis.openapi.models.shared.PoolSpecification;
import org.openapis.openapi.models.shared.ResourceFile;
import org.openapis.openapi.models.shared.StartTask;
import org.openapis.openapi.models.shared.TaskConstraints;
import org.openapis.openapi.models.shared.TaskSchedulingPolicy;
import org.openapis.openapi.models.shared.TaskSchedulingPolicyNodeFillTypeEnum;
import org.openapis.openapi.models.shared.VirtualMachineConfiguration;
import org.openapis.openapi.models.shared.WindowsConfiguration;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            JobAddRequest req = new JobAddRequest(                new JobAddParameter("provident",                 new PoolInformation() {{
                                                autoPoolSpecification = new AutoPoolSpecification(AutoPoolSpecificationPoolLifetimeOptionEnum.UNMAPPED) {{
                                                    autoPoolIdPrefix = "animi";
                                                    keepAlive = false;
                                                    pool = new PoolSpecification() {{
                                                        applicationPackageReferences = new org.openapis.openapi.models.shared.ApplicationPackageReference[]{{
                                                            add(new ApplicationPackageReference("repellat") {{
                                                                applicationId = "aliquid";
                                                                version = "accusantium";
                                                            }}),
                                                            add(new ApplicationPackageReference("in") {{
                                                                applicationId = "doloribus";
                                                                version = "ullam";
                                                            }}),
                                                        }};
                                                        autoScaleEvaluationInterval = "nam";
                                                        autoScaleFormula = "earum";
                                                        certificateReferences = new org.openapis.openapi.models.shared.CertificateReference[]{{
                                                            add(new CertificateReference("vitae", "rerum") {{
                                                                storeLocation = CertificateReferenceStoreLocationEnum.UNMAPPED;
                                                                storeName = "placeat";
                                                                thumbprint = "modi";
                                                                thumbprintAlgorithm = "voluptatibus";
                                                                visibility = new org.openapis.openapi.models.shared.CertificateReferenceVisibilityEnum[]{{
                                                                    add(CertificateReferenceVisibilityEnum.UNMAPPED),
                                                                    add(CertificateReferenceVisibilityEnum.UNMAPPED),
                                                                    add(CertificateReferenceVisibilityEnum.UNMAPPED),
                                                                }};
                                                            }}),
                                                            add(new CertificateReference("eum", "eius") {{
                                                                storeLocation = CertificateReferenceStoreLocationEnum.CURRENTUSER;
                                                                storeName = "quis";
                                                                thumbprint = "inventore";
                                                                thumbprintAlgorithm = "fugit";
                                                                visibility = new org.openapis.openapi.models.shared.CertificateReferenceVisibilityEnum[]{{
                                                                    add(CertificateReferenceVisibilityEnum.STARTTASK),
                                                                    add(CertificateReferenceVisibilityEnum.STARTTASK),
                                                                    add(CertificateReferenceVisibilityEnum.STARTTASK),
                                                                    add(CertificateReferenceVisibilityEnum.STARTTASK),
                                                                }};
                                                            }}),
                                                            add(new CertificateReference("cupiditate", "provident") {{
                                                                storeLocation = CertificateReferenceStoreLocationEnum.LOCALMACHINE;
                                                                storeName = "at";
                                                                thumbprint = "impedit";
                                                                thumbprintAlgorithm = "eos";
                                                                visibility = new org.openapis.openapi.models.shared.CertificateReferenceVisibilityEnum[]{{
                                                                    add(CertificateReferenceVisibilityEnum.TASK),
                                                                    add(CertificateReferenceVisibilityEnum.STARTTASK),
                                                                    add(CertificateReferenceVisibilityEnum.TASK),
                                                                    add(CertificateReferenceVisibilityEnum.STARTTASK),
                                                                }};
                                                            }}),
                                                        }};
                                                        cloudServiceConfiguration = new CloudServiceConfiguration("earum") {{
                                                            currentOSVersion = "soluta";
                                                            targetOSVersion = "hic";
                                                        }};;
                                                        displayName = "illum";
                                                        enableAutoScale = false;
                                                        enableInterNodeCommunication = false;
                                                        maxTasksPerNode = 52508;
                                                        metadata = new org.openapis.openapi.models.shared.MetadataItem[]{{
                                                            add(new MetadataItem() {{
                                                                name = "Cary Toy";
                                                                value = "suscipit";
                                                            }}),
                                                            add(new MetadataItem() {{
                                                                name = "Denise Runolfsdottir";
                                                                value = "animi";
                                                            }}),
                                                            add(new MetadataItem() {{
                                                                name = "Mr. Jody Altenwerth";
                                                                value = "natus";
                                                            }}),
                                                            add(new MetadataItem() {{
                                                                name = "Mr. Sam Flatley";
                                                                value = "nulla";
                                                            }}),
                                                        }};
                                                        resizeTimeout = "necessitatibus";
                                                        startTask = new StartTask() {{
                                                            commandLine = "ipsa";
                                                            environmentSettings = new org.openapis.openapi.models.shared.EnvironmentSetting[]{{
                                                                add(new EnvironmentSetting() {{
                                                                    name = "Tanya Buckridge";
                                                                    value = "praesentium";
                                                                }}),
                                                                add(new EnvironmentSetting() {{
                                                                    name = "Dr. Van Kassulke Sr.";
                                                                    value = "odio";
                                                                }}),
                                                            }};
                                                            maxTaskRetryCount = 271252;
                                                            resourceFiles = new org.openapis.openapi.models.shared.ResourceFile[]{{
                                                                add(new ResourceFile() {{
                                                                    blobSource = "ex";
                                                                    fileMode = "consectetur";
                                                                    filePath = "aliquid";
                                                                }}),
                                                                add(new ResourceFile() {{
                                                                    blobSource = "ipsa";
                                                                    fileMode = "laborum";
                                                                    filePath = "sunt";
                                                                }}),
                                                            }};
                                                            runElevated = false;
                                                            waitForSuccess = false;
                                                        }};;
                                                        targetDedicated = 344718;
                                                        taskSchedulingPolicy = new TaskSchedulingPolicy(TaskSchedulingPolicyNodeFillTypeEnum.UNMAPPED);;
                                                        virtualMachineConfiguration = new VirtualMachineConfiguration(                new ImageReference("expedita", "aliquid", "officia") {{
                                                                            version = "suscipit";
                                                                        }};, "aliquid") {{
                                                            windowsConfiguration = new WindowsConfiguration() {{
                                                                enableAutomaticUpdates = false;
                                                            }};;
                                                        }};;
                                                        vmSize = "perferendis";
                                                    }};;
                                                }};;
                                                poolId = "eum";
                                            }};) {{
                                commonEnvironmentSettings = new org.openapis.openapi.models.shared.EnvironmentSetting[]{{
                                    add(new EnvironmentSetting() {{
                                        name = "Alfonso Bernier";
                                        value = "voluptates";
                                    }}),
                                    add(new EnvironmentSetting() {{
                                        name = "Cameron Reinger";
                                        value = "enim";
                                    }}),
                                }};
                                constraints = new JobConstraints() {{
                                    maxTaskRetryCount = 110477;
                                    maxWallClockTime = "repellendus";
                                }};;
                                displayName = "ex";
                                jobManagerTask = new JobManagerTask() {{
                                    commandLine = "quo";
                                    constraints = new TaskConstraints() {{
                                        maxTaskRetryCount = 405373;
                                        maxWallClockTime = "ut";
                                        retentionTime = "ad";
                                    }};;
                                    displayName = "expedita";
                                    environmentSettings = new org.openapis.openapi.models.shared.EnvironmentSetting[]{{
                                        add(new EnvironmentSetting() {{
                                            name = "Ms. Jonathon Jacobs";
                                            value = "veritatis";
                                        }}),
                                    }};
                                    id = "baa0fe1a-de00-48e6-b8c5-f350d8cdb5a3";
                                    killJobOnCompletion = false;
                                    resourceFiles = new org.openapis.openapi.models.shared.ResourceFile[]{{
                                        add(new ResourceFile() {{
                                            blobSource = "inventore";
                                            fileMode = "deleniti";
                                            filePath = "veritatis";
                                        }}),
                                        add(new ResourceFile() {{
                                            blobSource = "tempora";
                                            fileMode = "dolor";
                                            filePath = "consequatur";
                                        }}),
                                    }};
                                    runElevated = false;
                                    runExclusive = false;
                                }};;
                                jobPreparationTask = new JobPreparationTask() {{
                                    commandLine = "architecto";
                                    constraints = new TaskConstraints() {{
                                        maxTaskRetryCount = 24944;
                                        maxWallClockTime = "modi";
                                        retentionTime = "fugit";
                                    }};;
                                    environmentSettings = new org.openapis.openapi.models.shared.EnvironmentSetting[]{{
                                        add(new EnvironmentSetting() {{
                                            name = "Eric Fadel";
                                            value = "consequuntur";
                                        }}),
                                    }};
                                    id = "08ece7e2-53b6-4684-91c6-c6e205e16dea";
                                    rerunOnNodeRebootAfterSuccess = false;
                                    resourceFiles = new org.openapis.openapi.models.shared.ResourceFile[]{{
                                        add(new ResourceFile() {{
                                            blobSource = "sequi";
                                            fileMode = "doloribus";
                                            filePath = "repudiandae";
                                        }}),
                                        add(new ResourceFile() {{
                                            blobSource = "optio";
                                            fileMode = "occaecati";
                                            filePath = "nemo";
                                        }}),
                                        add(new ResourceFile() {{
                                            blobSource = "voluptate";
                                            fileMode = "blanditiis";
                                            filePath = "officia";
                                        }}),
                                    }};
                                    runElevated = false;
                                    waitForSuccess = false;
                                }};;
                                jobReleaseTask = new JobReleaseTask() {{
                                    commandLine = "voluptas";
                                    environmentSettings = new org.openapis.openapi.models.shared.EnvironmentSetting[]{{
                                        add(new EnvironmentSetting() {{
                                            name = "Brandy Gibson";
                                            value = "nesciunt";
                                        }}),
                                        add(new EnvironmentSetting() {{
                                            name = "Ms. Armando Gottlieb";
                                            value = "dicta";
                                        }}),
                                    }};
                                    id = "62309fb0-9299-421a-afb9-f58c4d86e68e";
                                    maxWallClockTime = "modi";
                                    resourceFiles = new org.openapis.openapi.models.shared.ResourceFile[]{{
                                        add(new ResourceFile() {{
                                            blobSource = "vero";
                                            fileMode = "voluptatem";
                                            filePath = "ipsam";
                                        }}),
                                        add(new ResourceFile() {{
                                            blobSource = "vel";
                                            fileMode = "alias";
                                            filePath = "quasi";
                                        }}),
                                        add(new ResourceFile() {{
                                            blobSource = "non";
                                            fileMode = "maiores";
                                            filePath = "enim";
                                        }}),
                                    }};
                                    retentionTime = "sint";
                                    runElevated = false;
                                }};;
                                metadata = new org.openapis.openapi.models.shared.MetadataItem[]{{
                                    add(new MetadataItem() {{
                                        name = "Claude Hickle";
                                        value = "quis";
                                    }}),
                                    add(new MetadataItem() {{
                                        name = "Tomas Ryan";
                                        value = "asperiores";
                                    }}),
                                    add(new MetadataItem() {{
                                        name = "Loretta Tremblay DDS";
                                        value = "fuga";
                                    }}),
                                    add(new MetadataItem() {{
                                        name = "Vincent Frami";
                                        value = "impedit";
                                    }}),
                                }};
                                priority = 166047;
                                usesTaskDependencies = false;
                            }};, "soluta") {{
                clientRequestId = "repudiandae";
                ocpDate = "nam";
                returnClientRequestId = false;
                timeout = 294076;
            }};            

            JobAddResponse res = sdk.jobs.jobAdd(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## jobDelete

Deletes a job.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.JobDeleteRequest;
import org.openapis.openapi.models.operations.JobDeleteResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            JobDeleteRequest req = new JobDeleteRequest("iusto", "voluptate") {{
                ifMatch = "sequi";
                ifModifiedSince = "dignissimos";
                ifNoneMatch = "neque";
                ifUnmodifiedSince = "quo";
                clientRequestId = "deleniti";
                ocpDate = "quibusdam";
                returnClientRequestId = false;
                timeout = 437814;
            }};            

            JobDeleteResponse res = sdk.jobs.jobDelete(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## jobDisable

Disables the specified job, preventing new tasks from running.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.JobDisableRequest;
import org.openapis.openapi.models.operations.JobDisableResponse;
import org.openapis.openapi.models.shared.JobDisableParameter;
import org.openapis.openapi.models.shared.JobDisableParameterDisableTasksEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            JobDisableRequest req = new JobDisableRequest(                new JobDisableParameter(JobDisableParameterDisableTasksEnum.REQUEUE);, "voluptatibus", "vel") {{
                ifMatch = "magnam";
                ifModifiedSince = "quibusdam";
                ifNoneMatch = "inventore";
                ifUnmodifiedSince = "facere";
                clientRequestId = "libero";
                ocpDate = "architecto";
                returnClientRequestId = false;
                timeout = 975425;
            }};            

            JobDisableResponse res = sdk.jobs.jobDisable(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## jobEnable

Enables the specified job, allowing new tasks to run.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.JobEnableRequest;
import org.openapis.openapi.models.operations.JobEnableResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            JobEnableRequest req = new JobEnableRequest("quia", "porro") {{
                ifMatch = "aliquam";
                ifModifiedSince = "velit";
                ifNoneMatch = "illo";
                ifUnmodifiedSince = "accusantium";
                clientRequestId = "vel";
                ocpDate = "ea";
                returnClientRequestId = false;
                timeout = 107617;
            }};            

            JobEnableResponse res = sdk.jobs.jobEnable(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## jobGet

Gets information about the specified job.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.JobGetRequest;
import org.openapis.openapi.models.operations.JobGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            JobGetRequest req = new JobGetRequest("vero", "excepturi") {{
                dollarExpand = "eum";
                dollarSelect = "velit";
                clientRequestId = "ut";
                ocpDate = "perspiciatis";
                returnClientRequestId = false;
                timeout = 935302;
            }};            

            JobGetResponse res = sdk.jobs.jobGet(req);

            if (res.cloudJob != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## jobGetAllJobsLifetimeStatistics

Gets lifetime summary statistics for all of the jobs in the specified account. Statistics are aggregated across all jobs that have ever existed in the account, from account creation to the last update time of the statistics.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.JobGetAllJobsLifetimeStatisticsRequest;
import org.openapis.openapi.models.operations.JobGetAllJobsLifetimeStatisticsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            JobGetAllJobsLifetimeStatisticsRequest req = new JobGetAllJobsLifetimeStatisticsRequest("dicta") {{
                clientRequestId = "impedit";
                ocpDate = "voluptatibus";
                returnClientRequestId = false;
                timeout = 610987;
            }};            

            JobGetAllJobsLifetimeStatisticsResponse res = sdk.jobs.jobGetAllJobsLifetimeStatistics(req);

            if (res.jobStatistics != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## jobList

Lists all of the jobs in the specified account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.JobListRequest;
import org.openapis.openapi.models.operations.JobListResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            JobListRequest req = new JobListRequest("itaque") {{
                dollarExpand = "alias";
                dollarFilter = "nisi";
                dollarSelect = "itaque";
                clientRequestId = "velit";
                maxresults = 673838;
                ocpDate = "non";
                returnClientRequestId = false;
                timeout = 224467;
            }};            

            JobListResponse res = sdk.jobs.jobList(req);

            if (res.cloudJobListResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## jobListFromJobSchedule

Lists the jobs that have been created under the specified job schedule.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.JobListFromJobScheduleRequest;
import org.openapis.openapi.models.operations.JobListFromJobScheduleResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            JobListFromJobScheduleRequest req = new JobListFromJobScheduleRequest("iusto", "sit") {{
                dollarExpand = "doloremque";
                dollarFilter = "consequatur";
                dollarSelect = "officia";
                clientRequestId = "recusandae";
                maxresults = 408303;
                ocpDate = "quidem";
                returnClientRequestId = false;
                timeout = 377406;
            }};            

            JobListFromJobScheduleResponse res = sdk.jobs.jobListFromJobSchedule(req);

            if (res.cloudJobListResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## jobListPreparationAndReleaseTaskStatus

Lists the execution status of the Job Preparation and Job Release task for the specified job across the compute nodes where the job has run.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.JobListPreparationAndReleaseTaskStatusRequest;
import org.openapis.openapi.models.operations.JobListPreparationAndReleaseTaskStatusResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            JobListPreparationAndReleaseTaskStatusRequest req = new JobListPreparationAndReleaseTaskStatusRequest("facilis", "placeat") {{
                dollarFilter = "perspiciatis";
                dollarSelect = "expedita";
                clientRequestId = "deleniti";
                maxresults = 954334;
                ocpDate = "voluptate";
                returnClientRequestId = false;
                timeout = 351936;
            }};            

            JobListPreparationAndReleaseTaskStatusResponse res = sdk.jobs.jobListPreparationAndReleaseTaskStatus(req);

            if (res.cloudJobListPreparationAndReleaseTaskStatusResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## jobPatch

Updates the properties of a job.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.JobPatchRequest;
import org.openapis.openapi.models.operations.JobPatchResponse;
import org.openapis.openapi.models.shared.ApplicationPackageReference;
import org.openapis.openapi.models.shared.AutoPoolSpecification;
import org.openapis.openapi.models.shared.AutoPoolSpecificationPoolLifetimeOptionEnum;
import org.openapis.openapi.models.shared.CertificateReference;
import org.openapis.openapi.models.shared.CertificateReferenceStoreLocationEnum;
import org.openapis.openapi.models.shared.CertificateReferenceVisibilityEnum;
import org.openapis.openapi.models.shared.CloudServiceConfiguration;
import org.openapis.openapi.models.shared.EnvironmentSetting;
import org.openapis.openapi.models.shared.ImageReference;
import org.openapis.openapi.models.shared.JobConstraints;
import org.openapis.openapi.models.shared.JobPatchParameter;
import org.openapis.openapi.models.shared.MetadataItem;
import org.openapis.openapi.models.shared.PoolInformation;
import org.openapis.openapi.models.shared.PoolSpecification;
import org.openapis.openapi.models.shared.ResourceFile;
import org.openapis.openapi.models.shared.StartTask;
import org.openapis.openapi.models.shared.TaskSchedulingPolicy;
import org.openapis.openapi.models.shared.TaskSchedulingPolicyNodeFillTypeEnum;
import org.openapis.openapi.models.shared.VirtualMachineConfiguration;
import org.openapis.openapi.models.shared.WindowsConfiguration;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            JobPatchRequest req = new JobPatchRequest(                new JobPatchParameter() {{
                                constraints = new JobConstraints() {{
                                    maxTaskRetryCount = 600193;
                                    maxWallClockTime = "necessitatibus";
                                }};;
                                metadata = new org.openapis.openapi.models.shared.MetadataItem[]{{
                                    add(new MetadataItem() {{
                                        name = "Clyde Herzog";
                                        value = "esse";
                                    }}),
                                    add(new MetadataItem() {{
                                        name = "Christine Swift Jr.";
                                        value = "dolorem";
                                    }}),
                                    add(new MetadataItem() {{
                                        name = "Tina Moore";
                                        value = "soluta";
                                    }}),
                                }};
                                poolInfo = new PoolInformation() {{
                                    autoPoolSpecification = new AutoPoolSpecification(AutoPoolSpecificationPoolLifetimeOptionEnum.UNMAPPED) {{
                                        autoPoolIdPrefix = "rem";
                                        keepAlive = false;
                                        pool = new PoolSpecification() {{
                                            applicationPackageReferences = new org.openapis.openapi.models.shared.ApplicationPackageReference[]{{
                                                add(new ApplicationPackageReference("alias") {{
                                                    applicationId = "odio";
                                                    version = "fugit";
                                                }}),
                                                add(new ApplicationPackageReference("quae") {{
                                                    applicationId = "magni";
                                                    version = "vel";
                                                }}),
                                                add(new ApplicationPackageReference("neque") {{
                                                    applicationId = "quae";
                                                    version = "modi";
                                                }}),
                                            }};
                                            autoScaleEvaluationInterval = "exercitationem";
                                            autoScaleFormula = "itaque";
                                            certificateReferences = new org.openapis.openapi.models.shared.CertificateReference[]{{
                                                add(new CertificateReference("libero", "dicta") {{
                                                    storeLocation = CertificateReferenceStoreLocationEnum.CURRENTUSER;
                                                    storeName = "unde";
                                                    thumbprint = "nulla";
                                                    thumbprintAlgorithm = "distinctio";
                                                    visibility = new org.openapis.openapi.models.shared.CertificateReferenceVisibilityEnum[]{{
                                                        add(CertificateReferenceVisibilityEnum.STARTTASK),
                                                        add(CertificateReferenceVisibilityEnum.STARTTASK),
                                                        add(CertificateReferenceVisibilityEnum.TASK),
                                                        add(CertificateReferenceVisibilityEnum.REMOTEUSER),
                                                    }};
                                                }}),
                                            }};
                                            cloudServiceConfiguration = new CloudServiceConfiguration("id") {{
                                                currentOSVersion = "libero";
                                                targetOSVersion = "fugiat";
                                            }};;
                                            displayName = "officia";
                                            enableAutoScale = false;
                                            enableInterNodeCommunication = false;
                                            maxTasksPerNode = 554603;
                                            metadata = new org.openapis.openapi.models.shared.MetadataItem[]{{
                                                add(new MetadataItem() {{
                                                    name = "Marlene Beer Jr.";
                                                    value = "totam";
                                                }}),
                                                add(new MetadataItem() {{
                                                    name = "Ms. Lynne Rau";
                                                    value = "dolores";
                                                }}),
                                                add(new MetadataItem() {{
                                                    name = "Albert Ortiz";
                                                    value = "molestiae";
                                                }}),
                                                add(new MetadataItem() {{
                                                    name = "Sheldon Treutel";
                                                    value = "ea";
                                                }}),
                                            }};
                                            resizeTimeout = "autem";
                                            startTask = new StartTask() {{
                                                commandLine = "ipsam";
                                                environmentSettings = new org.openapis.openapi.models.shared.EnvironmentSetting[]{{
                                                    add(new EnvironmentSetting() {{
                                                        name = "Dan Towne";
                                                        value = "at";
                                                    }}),
                                                    add(new EnvironmentSetting() {{
                                                        name = "Rachel Powlowski";
                                                        value = "accusantium";
                                                    }}),
                                                    add(new EnvironmentSetting() {{
                                                        name = "Erick Dare";
                                                        value = "praesentium";
                                                    }}),
                                                }};
                                                maxTaskRetryCount = 140316;
                                                resourceFiles = new org.openapis.openapi.models.shared.ResourceFile[]{{
                                                    add(new ResourceFile() {{
                                                        blobSource = "corporis";
                                                        fileMode = "error";
                                                        filePath = "earum";
                                                    }}),
                                                }};
                                                runElevated = false;
                                                waitForSuccess = false;
                                            }};;
                                            targetDedicated = 239337;
                                            taskSchedulingPolicy = new TaskSchedulingPolicy(TaskSchedulingPolicyNodeFillTypeEnum.UNMAPPED);;
                                            virtualMachineConfiguration = new VirtualMachineConfiguration(                new ImageReference("similique", "ut", "quidem") {{
                                                                version = "quis";
                                                            }};, "beatae") {{
                                                windowsConfiguration = new WindowsConfiguration() {{
                                                    enableAutomaticUpdates = false;
                                                }};;
                                            }};;
                                            vmSize = "unde";
                                        }};;
                                    }};;
                                    poolId = "molestiae";
                                }};;
                                priority = 963198;
                            }};, "cupiditate", "fugit") {{
                ifMatch = "numquam";
                ifModifiedSince = "numquam";
                ifNoneMatch = "nesciunt";
                ifUnmodifiedSince = "at";
                clientRequestId = "officia";
                ocpDate = "dignissimos";
                returnClientRequestId = false;
                timeout = 760744;
            }};            

            JobPatchResponse res = sdk.jobs.jobPatch(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## jobTerminate

Terminates the specified job, marking it as completed.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.JobTerminateRequest;
import org.openapis.openapi.models.operations.JobTerminateResponse;
import org.openapis.openapi.models.shared.JobTerminateParameter;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            JobTerminateRequest req = new JobTerminateRequest("necessitatibus", "corporis") {{
                ifMatch = "qui";
                ifModifiedSince = "expedita";
                ifNoneMatch = "voluptatum";
                ifUnmodifiedSince = "cupiditate";
                jobTerminateParameter = new JobTerminateParameter() {{
                    terminateReason = "minima";
                }};;
                clientRequestId = "placeat";
                ocpDate = "enim";
                returnClientRequestId = false;
                timeout = 204072;
            }};            

            JobTerminateResponse res = sdk.jobs.jobTerminate(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## jobUpdate

Updates the properties of a job.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.JobUpdateRequest;
import org.openapis.openapi.models.operations.JobUpdateResponse;
import org.openapis.openapi.models.shared.ApplicationPackageReference;
import org.openapis.openapi.models.shared.AutoPoolSpecification;
import org.openapis.openapi.models.shared.AutoPoolSpecificationPoolLifetimeOptionEnum;
import org.openapis.openapi.models.shared.CertificateReference;
import org.openapis.openapi.models.shared.CertificateReferenceStoreLocationEnum;
import org.openapis.openapi.models.shared.CertificateReferenceVisibilityEnum;
import org.openapis.openapi.models.shared.CloudServiceConfiguration;
import org.openapis.openapi.models.shared.EnvironmentSetting;
import org.openapis.openapi.models.shared.ImageReference;
import org.openapis.openapi.models.shared.JobConstraints;
import org.openapis.openapi.models.shared.JobUpdateParameter;
import org.openapis.openapi.models.shared.MetadataItem;
import org.openapis.openapi.models.shared.PoolInformation;
import org.openapis.openapi.models.shared.PoolSpecification;
import org.openapis.openapi.models.shared.ResourceFile;
import org.openapis.openapi.models.shared.StartTask;
import org.openapis.openapi.models.shared.TaskSchedulingPolicy;
import org.openapis.openapi.models.shared.TaskSchedulingPolicyNodeFillTypeEnum;
import org.openapis.openapi.models.shared.VirtualMachineConfiguration;
import org.openapis.openapi.models.shared.WindowsConfiguration;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            JobUpdateRequest req = new JobUpdateRequest(                new JobUpdateParameter(                new PoolInformation() {{
                                                autoPoolSpecification = new AutoPoolSpecification(AutoPoolSpecificationPoolLifetimeOptionEnum.JOB) {{
                                                    autoPoolIdPrefix = "minus";
                                                    keepAlive = false;
                                                    pool = new PoolSpecification() {{
                                                        applicationPackageReferences = new org.openapis.openapi.models.shared.ApplicationPackageReference[]{{
                                                            add(new ApplicationPackageReference("magnam") {{
                                                                applicationId = "modi";
                                                                version = "corporis";
                                                            }}),
                                                            add(new ApplicationPackageReference("tempore") {{
                                                                applicationId = "voluptates";
                                                                version = "maiores";
                                                            }}),
                                                        }};
                                                        autoScaleEvaluationInterval = "aperiam";
                                                        autoScaleFormula = "libero";
                                                        certificateReferences = new org.openapis.openapi.models.shared.CertificateReference[]{{
                                                            add(new CertificateReference("est", "impedit") {{
                                                                storeLocation = CertificateReferenceStoreLocationEnum.CURRENTUSER;
                                                                storeName = "totam";
                                                                thumbprint = "occaecati";
                                                                thumbprintAlgorithm = "voluptas";
                                                                visibility = new org.openapis.openapi.models.shared.CertificateReferenceVisibilityEnum[]{{
                                                                    add(CertificateReferenceVisibilityEnum.STARTTASK),
                                                                    add(CertificateReferenceVisibilityEnum.UNMAPPED),
                                                                    add(CertificateReferenceVisibilityEnum.REMOTEUSER),
                                                                    add(CertificateReferenceVisibilityEnum.TASK),
                                                                }};
                                                            }}),
                                                        }};
                                                        cloudServiceConfiguration = new CloudServiceConfiguration("delectus") {{
                                                            currentOSVersion = "tempore";
                                                            targetOSVersion = "vero";
                                                        }};;
                                                        displayName = "odit";
                                                        enableAutoScale = false;
                                                        enableInterNodeCommunication = false;
                                                        maxTasksPerNode = 997437;
                                                        metadata = new org.openapis.openapi.models.shared.MetadataItem[]{{
                                                            add(new MetadataItem() {{
                                                                name = "Bessie Bayer";
                                                                value = "in";
                                                            }}),
                                                            add(new MetadataItem() {{
                                                                name = "Sonia D'Amore IV";
                                                                value = "voluptate";
                                                            }}),
                                                            add(new MetadataItem() {{
                                                                name = "Bradford Murazik";
                                                                value = "quaerat";
                                                            }}),
                                                            add(new MetadataItem() {{
                                                                name = "Cecelia Schroeder";
                                                                value = "quam";
                                                            }}),
                                                        }};
                                                        resizeTimeout = "dolorem";
                                                        startTask = new StartTask() {{
                                                            commandLine = "modi";
                                                            environmentSettings = new org.openapis.openapi.models.shared.EnvironmentSetting[]{{
                                                                add(new EnvironmentSetting() {{
                                                                    name = "Ignacio Dietrich";
                                                                    value = "dicta";
                                                                }}),
                                                            }};
                                                            maxTaskRetryCount = 936928;
                                                            resourceFiles = new org.openapis.openapi.models.shared.ResourceFile[]{{
                                                                add(new ResourceFile() {{
                                                                    blobSource = "animi";
                                                                    fileMode = "dolores";
                                                                    filePath = "nam";
                                                                }}),
                                                                add(new ResourceFile() {{
                                                                    blobSource = "dicta";
                                                                    fileMode = "consequuntur";
                                                                    filePath = "necessitatibus";
                                                                }}),
                                                            }};
                                                            runElevated = false;
                                                            waitForSuccess = false;
                                                        }};;
                                                        targetDedicated = 748224;
                                                        taskSchedulingPolicy = new TaskSchedulingPolicy(TaskSchedulingPolicyNodeFillTypeEnum.SPREAD);;
                                                        virtualMachineConfiguration = new VirtualMachineConfiguration(                new ImageReference("ducimus", "maiores", "veritatis") {{
                                                                            version = "quasi";
                                                                        }};, "laboriosam") {{
                                                            windowsConfiguration = new WindowsConfiguration() {{
                                                                enableAutomaticUpdates = false;
                                                            }};;
                                                        }};;
                                                        vmSize = "pariatur";
                                                    }};;
                                                }};;
                                                poolId = "libero";
                                            }};) {{
                                constraints = new JobConstraints() {{
                                    maxTaskRetryCount = 566506;
                                    maxWallClockTime = "occaecati";
                                }};;
                                metadata = new org.openapis.openapi.models.shared.MetadataItem[]{{
                                    add(new MetadataItem() {{
                                        name = "Bernice Yundt";
                                        value = "enim";
                                    }}),
                                    add(new MetadataItem() {{
                                        name = "Matt Macejkovic";
                                        value = "odio";
                                    }}),
                                }};
                                priority = 51170;
                            }};, "saepe", "architecto") {{
                ifMatch = "quos";
                ifModifiedSince = "iste";
                ifNoneMatch = "assumenda";
                ifUnmodifiedSince = "tempore";
                clientRequestId = "libero";
                ocpDate = "velit";
                returnClientRequestId = false;
                timeout = 38557;
            }};            

            JobUpdateResponse res = sdk.jobs.jobUpdate(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
