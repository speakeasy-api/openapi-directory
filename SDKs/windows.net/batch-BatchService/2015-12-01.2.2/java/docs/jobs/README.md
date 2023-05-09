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
import org.openapis.openapi.models.shared.EnvironmentSetting;
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

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            JobAddRequest req = new JobAddRequest(                new JobAddParameter("officiis",                 new PoolInformation() {{
                                                autoPoolSpecification = new AutoPoolSpecification(AutoPoolSpecificationPoolLifetimeOptionEnum.UNMAPPED) {{
                                                    autoPoolIdPrefix = "cumque";
                                                    keepAlive = false;
                                                    pool = new PoolSpecification() {{
                                                        applicationPackageReferences = new org.openapis.openapi.models.shared.ApplicationPackageReference[]{{
                                                            add(new ApplicationPackageReference("quis") {{
                                                                applicationId = "rerum";
                                                                version = "tempora";
                                                            }}),
                                                        }};
                                                        autoScaleEvaluationInterval = "inventore";
                                                        autoScaleFormula = "fugit";
                                                        certificateReferences = new org.openapis.openapi.models.shared.CertificateReference[]{{
                                                            add(new CertificateReference("eius", "rem") {{
                                                                storeLocation = CertificateReferenceStoreLocationEnum.CURRENTUSER;
                                                                storeName = "perferendis";
                                                                thumbprint = "velit";
                                                                thumbprintAlgorithm = "aspernatur";
                                                                visibility = "eum";
                                                            }}),
                                                            add(new CertificateReference("dicta", "minima") {{
                                                                storeLocation = CertificateReferenceStoreLocationEnum.UNMAPPED;
                                                                storeName = "impedit";
                                                                thumbprint = "eos";
                                                                thumbprintAlgorithm = "sapiente";
                                                                visibility = "eum";
                                                            }}),
                                                            add(new CertificateReference("hic", "illum") {{
                                                                storeLocation = CertificateReferenceStoreLocationEnum.CURRENTUSER;
                                                                storeName = "cupiditate";
                                                                thumbprint = "provident";
                                                                thumbprintAlgorithm = "earum";
                                                                visibility = "soluta";
                                                            }}),
                                                            add(new CertificateReference("aliquid", "porro") {{
                                                                storeLocation = CertificateReferenceStoreLocationEnum.CURRENTUSER;
                                                                storeName = "earum";
                                                                thumbprint = "perspiciatis";
                                                                thumbprintAlgorithm = "maiores";
                                                                visibility = "debitis";
                                                            }}),
                                                        }};
                                                        displayName = "suscipit";
                                                        enableAutoScale = false;
                                                        enableInterNodeCommunication = false;
                                                        maxTasksPerNode = 211534;
                                                        metadata = new org.openapis.openapi.models.shared.MetadataItem[]{{
                                                            add(new MetadataItem() {{
                                                                name = "Grant Dickens";
                                                                value = "nulla";
                                                            }}),
                                                        }};
                                                        osFamily = "consequatur";
                                                        resizeTimeout = "quasi";
                                                        startTask = new StartTask() {{
                                                            commandLine = "et";
                                                            environmentSettings = new org.openapis.openapi.models.shared.EnvironmentSetting[]{{
                                                                add(new EnvironmentSetting() {{
                                                                    name = "Tracy Homenick Sr.";
                                                                    value = "doloribus";
                                                                }}),
                                                                add(new EnvironmentSetting() {{
                                                                    name = "Terence Beer";
                                                                    value = "molestiae";
                                                                }}),
                                                            }};
                                                            maxTaskRetryCount = 115834;
                                                            resourceFiles = new org.openapis.openapi.models.shared.ResourceFile[]{{
                                                                add(new ResourceFile() {{
                                                                    blobSource = "esse";
                                                                    filePath = "praesentium";
                                                                }}),
                                                                add(new ResourceFile() {{
                                                                    blobSource = "maiores";
                                                                    filePath = "reiciendis";
                                                                }}),
                                                            }};
                                                            runElevated = false;
                                                            waitForSuccess = false;
                                                        }};;
                                                        targetDedicated = 423706;
                                                        targetOSVersion = "architecto";
                                                        taskSchedulingPolicy = new TaskSchedulingPolicy(TaskSchedulingPolicyNodeFillTypeEnum.UNMAPPED);;
                                                        vmSize = "doloremque";
                                                    }};;
                                                }};;
                                                poolId = "dicta";
                                            }};) {{
                                commonEnvironmentSettings = new org.openapis.openapi.models.shared.EnvironmentSetting[]{{
                                    add(new EnvironmentSetting() {{
                                        name = "Joy Jacobson";
                                        value = "ipsa";
                                    }}),
                                    add(new EnvironmentSetting() {{
                                        name = "Ralph Hegmann";
                                        value = "aliquid";
                                    }}),
                                }};
                                constraints = new JobConstraints() {{
                                    maxTaskRetryCount = 639187;
                                    maxWallClockTime = "suscipit";
                                }};;
                                displayName = "aliquid";
                                jobManagerTask = new JobManagerTask() {{
                                    commandLine = "perferendis";
                                    constraints = new TaskConstraints() {{
                                        maxTaskRetryCount = 431760;
                                        maxWallClockTime = "voluptas";
                                        retentionTime = "iste";
                                    }};;
                                    displayName = "id";
                                    environmentSettings = new org.openapis.openapi.models.shared.EnvironmentSetting[]{{
                                        add(new EnvironmentSetting() {{
                                            name = "Woodrow Volkman";
                                            value = "libero";
                                        }}),
                                    }};
                                    id = "5851d6c6-45b0-48b6-9891-baa0fe1ade00";
                                    killJobOnCompletion = false;
                                    resourceFiles = new org.openapis.openapi.models.shared.ResourceFile[]{{
                                        add(new ResourceFile() {{
                                            blobSource = "earum";
                                            filePath = "ex";
                                        }}),
                                        add(new ResourceFile() {{
                                            blobSource = "sapiente";
                                            filePath = "rem";
                                        }}),
                                        add(new ResourceFile() {{
                                            blobSource = "minus";
                                            filePath = "nemo";
                                        }}),
                                    }};
                                    runElevated = false;
                                    runExclusive = false;
                                }};;
                                jobPreparationTask = new JobPreparationTask() {{
                                    commandLine = "asperiores";
                                    constraints = new TaskConstraints() {{
                                        maxTaskRetryCount = 190567;
                                        maxWallClockTime = "ullam";
                                        retentionTime = "perferendis";
                                    }};;
                                    environmentSettings = new org.openapis.openapi.models.shared.EnvironmentSetting[]{{
                                        add(new EnvironmentSetting() {{
                                            name = "Myron Spinka";
                                            value = "culpa";
                                        }}),
                                        add(new EnvironmentSetting() {{
                                            name = "Michele Bode II";
                                            value = "dolor";
                                        }}),
                                        add(new EnvironmentSetting() {{
                                            name = "Alice Bailey";
                                            value = "ab";
                                        }}),
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
                                            filePath = "doloribus";
                                        }}),
                                        add(new ResourceFile() {{
                                            blobSource = "repudiandae";
                                            filePath = "optio";
                                        }}),
                                        add(new ResourceFile() {{
                                            blobSource = "occaecati";
                                            filePath = "nemo";
                                        }}),
                                    }};
                                    runElevated = false;
                                    waitForSuccess = false;
                                }};;
                                jobReleaseTask = new JobReleaseTask() {{
                                    commandLine = "voluptate";
                                    environmentSettings = new org.openapis.openapi.models.shared.EnvironmentSetting[]{{
                                        add(new EnvironmentSetting() {{
                                            name = "Hector Funk";
                                            value = "eius";
                                        }}),
                                        add(new EnvironmentSetting() {{
                                            name = "Caroline Dooley";
                                            value = "incidunt";
                                        }}),
                                        add(new EnvironmentSetting() {{
                                            name = "Mrs. Hilda Stark";
                                            value = "consectetur";
                                        }}),
                                    }};
                                    id = "09fb0929-921a-4efb-9f58-c4d86e68e4be";
                                    maxWallClockTime = "voluptatem";
                                    resourceFiles = new org.openapis.openapi.models.shared.ResourceFile[]{{
                                        add(new ResourceFile() {{
                                            blobSource = "vel";
                                            filePath = "alias";
                                        }}),
                                        add(new ResourceFile() {{
                                            blobSource = "quasi";
                                            filePath = "non";
                                        }}),
                                    }};
                                    retentionTime = "maiores";
                                    runElevated = false;
                                }};;
                                metadata = new org.openapis.openapi.models.shared.MetadataItem[]{{
                                    add(new MetadataItem() {{
                                        name = "Orville Nolan";
                                        value = "reprehenderit";
                                    }}),
                                    add(new MetadataItem() {{
                                        name = "Alvin Marquardt";
                                        value = "hic";
                                    }}),
                                }};
                                priority = 900103;
                                usesTaskDependencies = false;
                            }};, "asperiores") {{
                clientRequestId = "ex";
                ocpDate = "voluptas";
                returnClientRequestId = false;
                timeout = 895346;
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

            JobDeleteRequest req = new JobDeleteRequest("delectus", "quae") {{
                ifMatch = "minus";
                ifModifiedSince = "fuga";
                ifNoneMatch = "laborum";
                ifUnmodifiedSince = "consectetur";
                clientRequestId = "velit";
                ocpDate = "atque";
                returnClientRequestId = false;
                timeout = 216457;
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

            JobDisableRequest req = new JobDisableRequest(                new JobDisableParameter(JobDisableParameterDisableTasksEnum.WAIT);, "magni", "soluta") {{
                ifMatch = "repudiandae";
                ifModifiedSince = "nam";
                ifNoneMatch = "dolore";
                ifUnmodifiedSince = "iusto";
                clientRequestId = "voluptate";
                ocpDate = "sequi";
                returnClientRequestId = false;
                timeout = 493958;
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

            JobEnableRequest req = new JobEnableRequest("neque", "quo") {{
                ifMatch = "deleniti";
                ifModifiedSince = "quibusdam";
                ifNoneMatch = "iure";
                ifUnmodifiedSince = "odit";
                clientRequestId = "voluptatibus";
                ocpDate = "vel";
                returnClientRequestId = false;
                timeout = 300824;
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

            JobGetRequest req = new JobGetRequest("quibusdam", "inventore") {{
                dollarExpand = "facere";
                dollarSelect = "libero";
                clientRequestId = "architecto";
                ocpDate = "voluptatibus";
                returnClientRequestId = false;
                timeout = 156383;
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

            JobGetAllJobsLifetimeStatisticsRequest req = new JobGetAllJobsLifetimeStatisticsRequest("porro") {{
                clientRequestId = "aliquam";
                ocpDate = "velit";
                returnClientRequestId = false;
                timeout = 75359;
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

            JobListRequest req = new JobListRequest("accusantium") {{
                dollarExpand = "vel";
                dollarFilter = "ea";
                dollarSelect = "beatae";
                clientRequestId = "vero";
                maxresults = 568218;
                ocpDate = "eum";
                returnClientRequestId = false;
                timeout = 246557;
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

            JobListFromJobScheduleRequest req = new JobListFromJobScheduleRequest("ut", "perspiciatis") {{
                dollarExpand = "earum";
                dollarFilter = "dicta";
                dollarSelect = "impedit";
                clientRequestId = "voluptatibus";
                maxresults = 610987;
                ocpDate = "itaque";
                returnClientRequestId = false;
                timeout = 2677;
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

            JobListPreparationAndReleaseTaskStatusRequest req = new JobListPreparationAndReleaseTaskStatusRequest("nisi", "itaque") {{
                dollarFilter = "velit";
                dollarSelect = "laborum";
                clientRequestId = "non";
                maxresults = 224467;
                ocpDate = "iusto";
                returnClientRequestId = false;
                timeout = 24753;
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
import org.openapis.openapi.models.shared.EnvironmentSetting;
import org.openapis.openapi.models.shared.JobConstraints;
import org.openapis.openapi.models.shared.JobPatchParameter;
import org.openapis.openapi.models.shared.MetadataItem;
import org.openapis.openapi.models.shared.PoolInformation;
import org.openapis.openapi.models.shared.PoolSpecification;
import org.openapis.openapi.models.shared.ResourceFile;
import org.openapis.openapi.models.shared.StartTask;
import org.openapis.openapi.models.shared.TaskSchedulingPolicy;
import org.openapis.openapi.models.shared.TaskSchedulingPolicyNodeFillTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            JobPatchRequest req = new JobPatchRequest(                new JobPatchParameter() {{
                                constraints = new JobConstraints() {{
                                    maxTaskRetryCount = 39992;
                                    maxWallClockTime = "consequatur";
                                }};;
                                metadata = new org.openapis.openapi.models.shared.MetadataItem[]{{
                                    add(new MetadataItem() {{
                                        name = "Angel Pouros";
                                        value = "placeat";
                                    }}),
                                    add(new MetadataItem() {{
                                        name = "Malcolm Lind";
                                        value = "ullam";
                                    }}),
                                    add(new MetadataItem() {{
                                        name = "Terence O'Keefe";
                                        value = "corporis";
                                    }}),
                                }};
                                poolInfo = new PoolInformation() {{
                                    autoPoolSpecification = new AutoPoolSpecification(AutoPoolSpecificationPoolLifetimeOptionEnum.UNMAPPED) {{
                                        autoPoolIdPrefix = "error";
                                        keepAlive = false;
                                        pool = new PoolSpecification() {{
                                            applicationPackageReferences = new org.openapis.openapi.models.shared.ApplicationPackageReference[]{{
                                                add(new ApplicationPackageReference("vero") {{
                                                    applicationId = "labore";
                                                    version = "veritatis";
                                                }}),
                                                add(new ApplicationPackageReference("inventore") {{
                                                    applicationId = "consectetur";
                                                    version = "vitae";
                                                }}),
                                            }};
                                            autoScaleEvaluationInterval = "dolorem";
                                            autoScaleFormula = "ad";
                                            certificateReferences = new org.openapis.openapi.models.shared.CertificateReference[]{{
                                                add(new CertificateReference("rem", "dolorum") {{
                                                    storeLocation = CertificateReferenceStoreLocationEnum.LOCALMACHINE;
                                                    storeName = "ex";
                                                    thumbprint = "nemo";
                                                    thumbprintAlgorithm = "soluta";
                                                    visibility = "libero";
                                                }}),
                                            }};
                                            displayName = "odio";
                                            enableAutoScale = false;
                                            enableInterNodeCommunication = false;
                                            maxTasksPerNode = 144691;
                                            metadata = new org.openapis.openapi.models.shared.MetadataItem[]{{
                                                add(new MetadataItem() {{
                                                    name = "Mrs. Gina Bergnaum";
                                                    value = "exercitationem";
                                                }}),
                                            }};
                                            osFamily = "itaque";
                                            resizeTimeout = "et";
                                            startTask = new StartTask() {{
                                                commandLine = "ipsum";
                                                environmentSettings = new org.openapis.openapi.models.shared.EnvironmentSetting[]{{
                                                    add(new EnvironmentSetting() {{
                                                        name = "Kelvin Schmitt";
                                                        value = "nostrum";
                                                    }}),
                                                    add(new EnvironmentSetting() {{
                                                        name = "Wm Buckridge";
                                                        value = "fugiat";
                                                    }}),
                                                    add(new EnvironmentSetting() {{
                                                        name = "Ms. Morris Schulist DVM";
                                                        value = "inventore";
                                                    }}),
                                                }};
                                                maxTaskRetryCount = 49348;
                                                resourceFiles = new org.openapis.openapi.models.shared.ResourceFile[]{{
                                                    add(new ResourceFile() {{
                                                        blobSource = "dolore";
                                                        filePath = "eligendi";
                                                    }}),
                                                    add(new ResourceFile() {{
                                                        blobSource = "distinctio";
                                                        filePath = "voluptatem";
                                                    }}),
                                                    add(new ResourceFile() {{
                                                        blobSource = "autem";
                                                        filePath = "esse";
                                                    }}),
                                                }};
                                                runElevated = false;
                                                waitForSuccess = false;
                                            }};;
                                            targetDedicated = 172951;
                                            targetOSVersion = "assumenda";
                                            taskSchedulingPolicy = new TaskSchedulingPolicy(TaskSchedulingPolicyNodeFillTypeEnum.SPREAD);;
                                            vmSize = "est";
                                        }};;
                                    }};;
                                    poolId = "facere";
                                }};;
                                priority = 545918;
                            }};, "molestiae", "provident") {{
                ifMatch = "accusamus";
                ifModifiedSince = "necessitatibus";
                ifNoneMatch = "tempore";
                ifUnmodifiedSince = "sint";
                clientRequestId = "ea";
                ocpDate = "autem";
                returnClientRequestId = false;
                timeout = 373511;
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

            JobTerminateRequest req = new JobTerminateRequest("rerum", "laudantium") {{
                ifMatch = "corporis";
                ifModifiedSince = "officiis";
                ifNoneMatch = "voluptatibus";
                ifUnmodifiedSince = "cum";
                jobTerminateParameter = new JobTerminateParameter() {{
                    terminateReason = "at";
                }};;
                clientRequestId = "alias";
                ocpDate = "quia";
                returnClientRequestId = false;
                timeout = 694158;
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
import org.openapis.openapi.models.shared.EnvironmentSetting;
import org.openapis.openapi.models.shared.JobConstraints;
import org.openapis.openapi.models.shared.JobUpdateParameter;
import org.openapis.openapi.models.shared.MetadataItem;
import org.openapis.openapi.models.shared.PoolInformation;
import org.openapis.openapi.models.shared.PoolSpecification;
import org.openapis.openapi.models.shared.ResourceFile;
import org.openapis.openapi.models.shared.StartTask;
import org.openapis.openapi.models.shared.TaskSchedulingPolicy;
import org.openapis.openapi.models.shared.TaskSchedulingPolicyNodeFillTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            JobUpdateRequest req = new JobUpdateRequest(                new JobUpdateParameter(                new PoolInformation() {{
                                                autoPoolSpecification = new AutoPoolSpecification(AutoPoolSpecificationPoolLifetimeOptionEnum.UNMAPPED) {{
                                                    autoPoolIdPrefix = "repudiandae";
                                                    keepAlive = false;
                                                    pool = new PoolSpecification() {{
                                                        applicationPackageReferences = new org.openapis.openapi.models.shared.ApplicationPackageReference[]{{
                                                            add(new ApplicationPackageReference("eos") {{
                                                                applicationId = "expedita";
                                                                version = "officiis";
                                                            }}),
                                                        }};
                                                        autoScaleEvaluationInterval = "quibusdam";
                                                        autoScaleFormula = "odio";
                                                        certificateReferences = new org.openapis.openapi.models.shared.CertificateReference[]{{
                                                            add(new CertificateReference("adipisci", "recusandae") {{
                                                                storeLocation = CertificateReferenceStoreLocationEnum.CURRENTUSER;
                                                                storeName = "explicabo";
                                                                thumbprint = "corporis";
                                                                thumbprintAlgorithm = "error";
                                                                visibility = "earum";
                                                            }}),
                                                            add(new CertificateReference("unde", "molestiae") {{
                                                                storeLocation = CertificateReferenceStoreLocationEnum.LOCALMACHINE;
                                                                storeName = "ut";
                                                                thumbprint = "quidem";
                                                                thumbprintAlgorithm = "quis";
                                                                visibility = "beatae";
                                                            }}),
                                                            add(new CertificateReference("nesciunt", "at") {{
                                                                storeLocation = CertificateReferenceStoreLocationEnum.UNMAPPED;
                                                                storeName = "cupiditate";
                                                                thumbprint = "fugit";
                                                                thumbprintAlgorithm = "numquam";
                                                                visibility = "numquam";
                                                            }}),
                                                        }};
                                                        displayName = "officia";
                                                        enableAutoScale = false;
                                                        enableInterNodeCommunication = false;
                                                        maxTasksPerNode = 491892;
                                                        metadata = new org.openapis.openapi.models.shared.MetadataItem[]{{
                                                            add(new MetadataItem() {{
                                                                name = "Lewis Denesik";
                                                                value = "cupiditate";
                                                            }}),
                                                            add(new MetadataItem() {{
                                                                name = "Nichole Halvorson";
                                                                value = "minus";
                                                            }}),
                                                            add(new MetadataItem() {{
                                                                name = "Emma Herzog";
                                                                value = "maiores";
                                                            }}),
                                                            add(new MetadataItem() {{
                                                                name = "Jason Rempel";
                                                                value = "totam";
                                                            }}),
                                                        }};
                                                        osFamily = "occaecati";
                                                        resizeTimeout = "voluptas";
                                                        startTask = new StartTask() {{
                                                            commandLine = "quo";
                                                            environmentSettings = new org.openapis.openapi.models.shared.EnvironmentSetting[]{{
                                                                add(new EnvironmentSetting() {{
                                                                    name = "Grant Heathcote";
                                                                    value = "delectus";
                                                                }}),
                                                            }};
                                                            maxTaskRetryCount = 735894;
                                                            resourceFiles = new org.openapis.openapi.models.shared.ResourceFile[]{{
                                                                add(new ResourceFile() {{
                                                                    blobSource = "odit";
                                                                    filePath = "repellat";
                                                                }}),
                                                                add(new ResourceFile() {{
                                                                    blobSource = "pariatur";
                                                                    filePath = "nemo";
                                                                }}),
                                                                add(new ResourceFile() {{
                                                                    blobSource = "reprehenderit";
                                                                    filePath = "aperiam";
                                                                }}),
                                                                add(new ResourceFile() {{
                                                                    blobSource = "odio";
                                                                    filePath = "minima";
                                                                }}),
                                                            }};
                                                            runElevated = false;
                                                            waitForSuccess = false;
                                                        }};;
                                                        targetDedicated = 448369;
                                                        targetOSVersion = "ducimus";
                                                        taskSchedulingPolicy = new TaskSchedulingPolicy(TaskSchedulingPolicyNodeFillTypeEnum.PACK);;
                                                        vmSize = "dolores";
                                                    }};;
                                                }};;
                                                poolId = "error";
                                            }};) {{
                                constraints = new JobConstraints() {{
                                    maxTaskRetryCount = 85076;
                                    maxWallClockTime = "ducimus";
                                }};;
                                metadata = new org.openapis.openapi.models.shared.MetadataItem[]{{
                                    add(new MetadataItem() {{
                                        name = "Bradford Murazik";
                                        value = "quaerat";
                                    }}),
                                    add(new MetadataItem() {{
                                        name = "Cecelia Schroeder";
                                        value = "quam";
                                    }}),
                                }};
                                priority = 211455;
                            }};, "modi", "ipsa") {{
                ifMatch = "sint";
                ifModifiedSince = "vero";
                ifNoneMatch = "sequi";
                ifUnmodifiedSince = "repudiandae";
                clientRequestId = "cum";
                ocpDate = "dicta";
                returnClientRequestId = false;
                timeout = 936928;
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
