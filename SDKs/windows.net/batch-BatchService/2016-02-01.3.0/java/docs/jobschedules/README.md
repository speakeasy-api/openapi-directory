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

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.JobScheduleAddRequest;
import org.openapis.openapi.models.operations.JobScheduleAddResponse;
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
import org.openapis.openapi.models.shared.JobManagerTask;
import org.openapis.openapi.models.shared.JobPreparationTask;
import org.openapis.openapi.models.shared.JobReleaseTask;
import org.openapis.openapi.models.shared.JobScheduleAddParameter;
import org.openapis.openapi.models.shared.JobSpecification;
import org.openapis.openapi.models.shared.MetadataItem;
import org.openapis.openapi.models.shared.PoolInformation;
import org.openapis.openapi.models.shared.PoolSpecification;
import org.openapis.openapi.models.shared.ResourceFile;
import org.openapis.openapi.models.shared.Schedule;
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

            JobScheduleAddRequest req = new JobScheduleAddRequest(                new JobScheduleAddParameter("rerum",                 new JobSpecification() {{
                                                commonEnvironmentSettings = new org.openapis.openapi.models.shared.EnvironmentSetting[]{{
                                                    add(new EnvironmentSetting() {{
                                                        name = "Blanca Schulist";
                                                        value = "laborum";
                                                    }}),
                                                }};
                                                constraints = new JobConstraints() {{
                                                    maxTaskRetryCount = 881104;
                                                    maxWallClockTime = "non";
                                                }};;
                                                displayName = "occaecati";
                                                jobManagerTask = new JobManagerTask() {{
                                                    commandLine = "enim";
                                                    constraints = new TaskConstraints() {{
                                                        maxTaskRetryCount = 881736;
                                                        maxWallClockTime = "delectus";
                                                        retentionTime = "quidem";
                                                    }};;
                                                    displayName = "provident";
                                                    environmentSettings = new org.openapis.openapi.models.shared.EnvironmentSetting[]{{
                                                        add(new EnvironmentSetting() {{
                                                            name = "Nelson Lesch";
                                                            value = "deserunt";
                                                        }}),
                                                        add(new EnvironmentSetting() {{
                                                            name = "Wilma Mosciski";
                                                            value = "perferendis";
                                                        }}),
                                                        add(new EnvironmentSetting() {{
                                                            name = "Megan Rau";
                                                            value = "labore";
                                                        }}),
                                                    }};
                                                    id = "69b6e214-1959-4890-afa5-63e2516fe4c8";
                                                    killJobOnCompletion = false;
                                                    resourceFiles = new org.openapis.openapi.models.shared.ResourceFile[]{{
                                                        add(new ResourceFile() {{
                                                            blobSource = "in";
                                                            fileMode = "architecto";
                                                            filePath = "architecto";
                                                        }}),
                                                        add(new ResourceFile() {{
                                                            blobSource = "repudiandae";
                                                            fileMode = "ullam";
                                                            filePath = "expedita";
                                                        }}),
                                                        add(new ResourceFile() {{
                                                            blobSource = "nihil";
                                                            fileMode = "repellat";
                                                            filePath = "quibusdam";
                                                        }}),
                                                    }};
                                                    runElevated = false;
                                                    runExclusive = false;
                                                }};;
                                                jobPreparationTask = new JobPreparationTask() {{
                                                    commandLine = "sed";
                                                    constraints = new TaskConstraints() {{
                                                        maxTaskRetryCount = 904648;
                                                        maxWallClockTime = "pariatur";
                                                        retentionTime = "accusantium";
                                                    }};;
                                                    environmentSettings = new org.openapis.openapi.models.shared.EnvironmentSetting[]{{
                                                        add(new EnvironmentSetting() {{
                                                            name = "Miss Nick Cummerata";
                                                            value = "pariatur";
                                                        }}),
                                                    }};
                                                    id = "c692601f-b576-4b0d-9f0d-30c5fbb25870";
                                                    rerunOnNodeRebootAfterSuccess = false;
                                                    resourceFiles = new org.openapis.openapi.models.shared.ResourceFile[]{{
                                                        add(new ResourceFile() {{
                                                            blobSource = "nesciunt";
                                                            fileMode = "eos";
                                                            filePath = "perferendis";
                                                        }}),
                                                        add(new ResourceFile() {{
                                                            blobSource = "dolores";
                                                            fileMode = "minus";
                                                            filePath = "quam";
                                                        }}),
                                                    }};
                                                    runElevated = false;
                                                    waitForSuccess = false;
                                                }};;
                                                jobReleaseTask = new JobReleaseTask() {{
                                                    commandLine = "dolor";
                                                    environmentSettings = new org.openapis.openapi.models.shared.EnvironmentSetting[]{{
                                                        add(new EnvironmentSetting() {{
                                                            name = "Mindy Walter";
                                                            value = "perspiciatis";
                                                        }}),
                                                        add(new EnvironmentSetting() {{
                                                            name = "Robyn Cruickshank";
                                                            value = "eaque";
                                                        }}),
                                                        add(new EnvironmentSetting() {{
                                                            name = "Jean Ferry";
                                                            value = "modi";
                                                        }}),
                                                        add(new EnvironmentSetting() {{
                                                            name = "Omar Leuschke";
                                                            value = "nobis";
                                                        }}),
                                                    }};
                                                    id = "bf486333-23f9-4b77-b3a4-100674ebf692";
                                                    maxWallClockTime = "atque";
                                                    resourceFiles = new org.openapis.openapi.models.shared.ResourceFile[]{{
                                                        add(new ResourceFile() {{
                                                            blobSource = "fugiat";
                                                            fileMode = "ab";
                                                            filePath = "soluta";
                                                        }}),
                                                    }};
                                                    retentionTime = "dolorum";
                                                    runElevated = false;
                                                }};;
                                                metadata = new org.openapis.openapi.models.shared.MetadataItem[]{{
                                                    add(new MetadataItem() {{
                                                        name = "Sonya Leuschke";
                                                        value = "distinctio";
                                                    }}),
                                                    add(new MetadataItem() {{
                                                        name = "Jessie Emmerich";
                                                        value = "saepe";
                                                    }}),
                                                }};
                                                poolInfo = new PoolInformation() {{
                                                    autoPoolSpecification = new AutoPoolSpecification(AutoPoolSpecificationPoolLifetimeOptionEnum.JOBSCHEDULE) {{
                                                        autoPoolIdPrefix = "aspernatur";
                                                        keepAlive = false;
                                                        pool = new PoolSpecification() {{
                                                            applicationPackageReferences = new org.openapis.openapi.models.shared.ApplicationPackageReference[]{{
                                                                add(new ApplicationPackageReference("accusamus") {{
                                                                    applicationId = "amet";
                                                                    version = "optio";
                                                                }}),
                                                            }};
                                                            autoScaleEvaluationInterval = "ad";
                                                            autoScaleFormula = "saepe";
                                                            certificateReferences = new org.openapis.openapi.models.shared.CertificateReference[]{{
                                                                add(new CertificateReference("quaerat", "tempora") {{
                                                                    storeLocation = CertificateReferenceStoreLocationEnum.LOCALMACHINE;
                                                                    storeName = "provident";
                                                                    thumbprint = "minima";
                                                                    thumbprintAlgorithm = "repellendus";
                                                                    visibility = new org.openapis.openapi.models.shared.CertificateReferenceVisibilityEnum[]{{
                                                                        add(CertificateReferenceVisibilityEnum.REMOTEUSER),
                                                                        add(CertificateReferenceVisibilityEnum.STARTTASK),
                                                                        add(CertificateReferenceVisibilityEnum.UNMAPPED),
                                                                    }};
                                                                }}),
                                                                add(new CertificateReference("iusto", "ipsum") {{
                                                                    storeLocation = CertificateReferenceStoreLocationEnum.LOCALMACHINE;
                                                                    storeName = "quod";
                                                                    thumbprint = "officiis";
                                                                    thumbprintAlgorithm = "qui";
                                                                    visibility = new org.openapis.openapi.models.shared.CertificateReferenceVisibilityEnum[]{{
                                                                        add(CertificateReferenceVisibilityEnum.UNMAPPED),
                                                                        add(CertificateReferenceVisibilityEnum.TASK),
                                                                        add(CertificateReferenceVisibilityEnum.REMOTEUSER),
                                                                    }};
                                                                }}),
                                                            }};
                                                            cloudServiceConfiguration = new CloudServiceConfiguration("quisquam") {{
                                                                currentOSVersion = "tenetur";
                                                                targetOSVersion = "amet";
                                                            }};;
                                                            displayName = "tempore";
                                                            enableAutoScale = false;
                                                            enableInterNodeCommunication = false;
                                                            maxTasksPerNode = 880298;
                                                            metadata = new org.openapis.openapi.models.shared.MetadataItem[]{{
                                                                add(new MetadataItem() {{
                                                                    name = "Florence Will";
                                                                    value = "sit";
                                                                }}),
                                                                add(new MetadataItem() {{
                                                                    name = "Luis Cremin";
                                                                    value = "voluptas";
                                                                }}),
                                                            }};
                                                            resizeTimeout = "deserunt";
                                                            startTask = new StartTask() {{
                                                                commandLine = "quam";
                                                                environmentSettings = new org.openapis.openapi.models.shared.EnvironmentSetting[]{{
                                                                    add(new EnvironmentSetting() {{
                                                                        name = "Norma McGlynn";
                                                                        value = "soluta";
                                                                    }}),
                                                                }};
                                                                maxTaskRetryCount = 117531;
                                                                resourceFiles = new org.openapis.openapi.models.shared.ResourceFile[]{{
                                                                    add(new ResourceFile() {{
                                                                        blobSource = "totam";
                                                                        fileMode = "incidunt";
                                                                        filePath = "aspernatur";
                                                                    }}),
                                                                    add(new ResourceFile() {{
                                                                        blobSource = "dolores";
                                                                        fileMode = "distinctio";
                                                                        filePath = "facilis";
                                                                    }}),
                                                                    add(new ResourceFile() {{
                                                                        blobSource = "aliquid";
                                                                        fileMode = "quam";
                                                                        filePath = "molestias";
                                                                    }}),
                                                                }};
                                                                runElevated = false;
                                                                waitForSuccess = false;
                                                            }};;
                                                            targetDedicated = 840429;
                                                            taskSchedulingPolicy = new TaskSchedulingPolicy(TaskSchedulingPolicyNodeFillTypeEnum.SPREAD);;
                                                            virtualMachineConfiguration = new VirtualMachineConfiguration(                new ImageReference("neque", "fugit", "magni") {{
                                                                                version = "odio";
                                                                            }};, "sunt") {{
                                                                windowsConfiguration = new WindowsConfiguration() {{
                                                                    enableAutomaticUpdates = false;
                                                                }};;
                                                            }};;
                                                            vmSize = "ullam";
                                                        }};;
                                                    }};;
                                                    poolId = "nam";
                                                }};;
                                                priority = 940432;
                                                usesTaskDependencies = false;
                                            }};,                 new Schedule() {{
                                                doNotRunAfter = OffsetDateTime.parse("2022-03-27T15:45:02.604Z");
                                                doNotRunUntil = OffsetDateTime.parse("2021-07-03T11:24:47.623Z");
                                                recurrenceInterval = "et";
                                                startWindow = "saepe";
                                            }};) {{
                                displayName = "ipsum";
                                metadata = new org.openapis.openapi.models.shared.MetadataItem[]{{
                                    add(new MetadataItem() {{
                                        name = "Isaac Reynolds DVM";
                                        value = "dolorem";
                                    }}),
                                }};
                            }};, "dolore") {{
                clientRequestId = "labore";
                ocpDate = "adipisci";
                returnClientRequestId = false;
                timeout = 677263;
            }};            

            JobScheduleAddResponse res = sdk.jobSchedules.jobScheduleAdd(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## jobScheduleDelete

Deletes a job schedule from the specified account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.JobScheduleDeleteRequest;
import org.openapis.openapi.models.operations.JobScheduleDeleteResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            JobScheduleDeleteRequest req = new JobScheduleDeleteRequest("architecto", "quae") {{
                ifMatch = "aut";
                ifModifiedSince = "quas";
                ifNoneMatch = "itaque";
                ifUnmodifiedSince = "consequatur";
                clientRequestId = "est";
                ocpDate = "repellendus";
                returnClientRequestId = false;
                timeout = 785153;
            }};            

            JobScheduleDeleteResponse res = sdk.jobSchedules.jobScheduleDelete(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## jobScheduleDisable

Disables a job schedule.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.JobScheduleDisableRequest;
import org.openapis.openapi.models.operations.JobScheduleDisableResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            JobScheduleDisableRequest req = new JobScheduleDisableRequest("doloribus", "ut") {{
                ifMatch = "facilis";
                ifModifiedSince = "cupiditate";
                ifNoneMatch = "qui";
                ifUnmodifiedSince = "quae";
                clientRequestId = "laudantium";
                ocpDate = "odio";
                returnClientRequestId = false;
                timeout = 580447;
            }};            

            JobScheduleDisableResponse res = sdk.jobSchedules.jobScheduleDisable(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## jobScheduleEnable

Enables a job schedule.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.JobScheduleEnableRequest;
import org.openapis.openapi.models.operations.JobScheduleEnableResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            JobScheduleEnableRequest req = new JobScheduleEnableRequest("voluptatibus", "quisquam") {{
                ifMatch = "vero";
                ifModifiedSince = "omnis";
                ifNoneMatch = "quis";
                ifUnmodifiedSince = "ipsum";
                clientRequestId = "delectus";
                ocpDate = "voluptate";
                returnClientRequestId = false;
                timeout = 231701;
            }};            

            JobScheduleEnableResponse res = sdk.jobSchedules.jobScheduleEnable(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## jobScheduleExists

Checks the specified job schedule exists.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.JobScheduleExistsRequest;
import org.openapis.openapi.models.operations.JobScheduleExistsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            JobScheduleExistsRequest req = new JobScheduleExistsRequest("vero", "tenetur") {{
                ifMatch = "dignissimos";
                ifModifiedSince = "hic";
                ifNoneMatch = "distinctio";
                ifUnmodifiedSince = "quod";
                clientRequestId = "odio";
                ocpDate = "similique";
                returnClientRequestId = false;
                timeout = 708548;
            }};            

            JobScheduleExistsResponse res = sdk.jobSchedules.jobScheduleExists(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## jobScheduleGet

Gets information about the specified job schedule.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.JobScheduleGetRequest;
import org.openapis.openapi.models.operations.JobScheduleGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            JobScheduleGetRequest req = new JobScheduleGetRequest("vero", "ducimus") {{
                dollarExpand = "dolore";
                dollarSelect = "quibusdam";
                ifMatch = "illum";
                ifModifiedSince = "sequi";
                ifNoneMatch = "natus";
                ifUnmodifiedSince = "impedit";
                clientRequestId = "aut";
                ocpDate = "voluptatibus";
                returnClientRequestId = false;
                timeout = 347233;
            }};            

            JobScheduleGetResponse res = sdk.jobSchedules.jobScheduleGet(req);

            if (res.cloudJobSchedule != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## jobScheduleList

Lists all of the job schedules in the specified account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.JobScheduleListRequest;
import org.openapis.openapi.models.operations.JobScheduleListResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            JobScheduleListRequest req = new JobScheduleListRequest("nulla") {{
                dollarExpand = "fugit";
                dollarFilter = "porro";
                dollarSelect = "maiores";
                clientRequestId = "doloribus";
                maxresults = 478370;
                ocpDate = "eligendi";
                returnClientRequestId = false;
                timeout = 497391;
            }};            

            JobScheduleListResponse res = sdk.jobSchedules.jobScheduleList(req);

            if (res.cloudJobScheduleListResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## jobSchedulePatch

Updates the properties of the specified job schedule.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.JobSchedulePatchRequest;
import org.openapis.openapi.models.operations.JobSchedulePatchResponse;
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
import org.openapis.openapi.models.shared.JobManagerTask;
import org.openapis.openapi.models.shared.JobPreparationTask;
import org.openapis.openapi.models.shared.JobReleaseTask;
import org.openapis.openapi.models.shared.JobSchedulePatchParameter;
import org.openapis.openapi.models.shared.JobSpecification;
import org.openapis.openapi.models.shared.MetadataItem;
import org.openapis.openapi.models.shared.PoolInformation;
import org.openapis.openapi.models.shared.PoolSpecification;
import org.openapis.openapi.models.shared.ResourceFile;
import org.openapis.openapi.models.shared.Schedule;
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

            JobSchedulePatchRequest req = new JobSchedulePatchRequest(                new JobSchedulePatchParameter() {{
                                jobSpecification = new JobSpecification() {{
                                    commonEnvironmentSettings = new org.openapis.openapi.models.shared.EnvironmentSetting[]{{
                                        add(new EnvironmentSetting() {{
                                            name = "Don Hills";
                                            value = "vel";
                                        }}),
                                    }};
                                    constraints = new JobConstraints() {{
                                        maxTaskRetryCount = 822118;
                                        maxWallClockTime = "magnam";
                                    }};;
                                    displayName = "ratione";
                                    jobManagerTask = new JobManagerTask() {{
                                        commandLine = "ex";
                                        constraints = new TaskConstraints() {{
                                            maxTaskRetryCount = 511319;
                                            maxWallClockTime = "dicta";
                                            retentionTime = "dolor";
                                        }};;
                                        displayName = "maiores";
                                        environmentSettings = new org.openapis.openapi.models.shared.EnvironmentSetting[]{{
                                            add(new EnvironmentSetting() {{
                                                name = "Freda Marks";
                                                value = "sapiente";
                                            }}),
                                        }};
                                        id = "ce6c5561-46c3-4e25-8fb0-08c42e141aac";
                                        killJobOnCompletion = false;
                                        resourceFiles = new org.openapis.openapi.models.shared.ResourceFile[]{{
                                            add(new ResourceFile() {{
                                                blobSource = "eum";
                                                fileMode = "autem";
                                                filePath = "nobis";
                                            }}),
                                        }};
                                        runElevated = false;
                                        runExclusive = false;
                                    }};;
                                    jobPreparationTask = new JobPreparationTask() {{
                                        commandLine = "quas";
                                        constraints = new TaskConstraints() {{
                                            maxTaskRetryCount = 829603;
                                            maxWallClockTime = "nulla";
                                            retentionTime = "voluptas";
                                        }};;
                                        environmentSettings = new org.openapis.openapi.models.shared.EnvironmentSetting[]{{
                                            add(new EnvironmentSetting() {{
                                                name = "Anita Gerhold";
                                                value = "ipsa";
                                            }}),
                                            add(new EnvironmentSetting() {{
                                                name = "Megan Kuhlman";
                                                value = "esse";
                                            }}),
                                            add(new EnvironmentSetting() {{
                                                name = "Blake Kihn";
                                                value = "ut";
                                            }}),
                                        }};
                                        id = "66d28c10-ab3c-4dca-8251-904e523c7e0b";
                                        rerunOnNodeRebootAfterSuccess = false;
                                        resourceFiles = new org.openapis.openapi.models.shared.ResourceFile[]{{
                                            add(new ResourceFile() {{
                                                blobSource = "dignissimos";
                                                fileMode = "inventore";
                                                filePath = "nihil";
                                            }}),
                                            add(new ResourceFile() {{
                                                blobSource = "totam";
                                                fileMode = "accusamus";
                                                filePath = "aliquam";
                                            }}),
                                            add(new ResourceFile() {{
                                                blobSource = "odio";
                                                fileMode = "occaecati";
                                                filePath = "commodi";
                                            }}),
                                            add(new ResourceFile() {{
                                                blobSource = "sapiente";
                                                fileMode = "dolores";
                                                filePath = "deserunt";
                                            }}),
                                        }};
                                        runElevated = false;
                                        waitForSuccess = false;
                                    }};;
                                    jobReleaseTask = new JobReleaseTask() {{
                                        commandLine = "molestiae";
                                        environmentSettings = new org.openapis.openapi.models.shared.EnvironmentSetting[]{{
                                            add(new EnvironmentSetting() {{
                                                name = "Franklin Lynch";
                                                value = "deleniti";
                                            }}),
                                        }};
                                        id = "2aa48256-2f22-42e9-817e-e17cbe61e6b7";
                                        maxWallClockTime = "rerum";
                                        resourceFiles = new org.openapis.openapi.models.shared.ResourceFile[]{{
                                            add(new ResourceFile() {{
                                                blobSource = "minima";
                                                fileMode = "distinctio";
                                                filePath = "eligendi";
                                            }}),
                                            add(new ResourceFile() {{
                                                blobSource = "sit";
                                                fileMode = "culpa";
                                                filePath = "tempore";
                                            }}),
                                            add(new ResourceFile() {{
                                                blobSource = "adipisci";
                                                fileMode = "cumque";
                                                filePath = "consequuntur";
                                            }}),
                                        }};
                                        retentionTime = "consequatur";
                                        runElevated = false;
                                    }};;
                                    metadata = new org.openapis.openapi.models.shared.MetadataItem[]{{
                                        add(new MetadataItem() {{
                                            name = "Miranda Feest";
                                            value = "provident";
                                        }}),
                                        add(new MetadataItem() {{
                                            name = "Ismael Lynch DVM";
                                            value = "error";
                                        }}),
                                        add(new MetadataItem() {{
                                            name = "Jody Schuster";
                                            value = "asperiores";
                                        }}),
                                        add(new MetadataItem() {{
                                            name = "Miss Peter Cronin";
                                            value = "aliquid";
                                        }}),
                                    }};
                                    poolInfo = new PoolInformation() {{
                                        autoPoolSpecification = new AutoPoolSpecification(AutoPoolSpecificationPoolLifetimeOptionEnum.UNMAPPED) {{
                                            autoPoolIdPrefix = "quae";
                                            keepAlive = false;
                                            pool = new PoolSpecification() {{
                                                applicationPackageReferences = new org.openapis.openapi.models.shared.ApplicationPackageReference[]{{
                                                    add(new ApplicationPackageReference("eius") {{
                                                        applicationId = "vel";
                                                        version = "in";
                                                    }}),
                                                    add(new ApplicationPackageReference("soluta") {{
                                                        applicationId = "libero";
                                                        version = "illum";
                                                    }}),
                                                    add(new ApplicationPackageReference("sapiente") {{
                                                        applicationId = "accusantium";
                                                        version = "aliquam";
                                                    }}),
                                                    add(new ApplicationPackageReference("reprehenderit") {{
                                                        applicationId = "dicta";
                                                        version = "ullam";
                                                    }}),
                                                }};
                                                autoScaleEvaluationInterval = "ullam";
                                                autoScaleFormula = "nisi";
                                                certificateReferences = new org.openapis.openapi.models.shared.CertificateReference[]{{
                                                    add(new CertificateReference("omnis", "tenetur") {{
                                                        storeLocation = CertificateReferenceStoreLocationEnum.LOCALMACHINE;
                                                        storeName = "qui";
                                                        thumbprint = "quibusdam";
                                                        thumbprintAlgorithm = "ex";
                                                        visibility = new org.openapis.openapi.models.shared.CertificateReferenceVisibilityEnum[]{{
                                                            add(CertificateReferenceVisibilityEnum.UNMAPPED),
                                                            add(CertificateReferenceVisibilityEnum.REMOTEUSER),
                                                            add(CertificateReferenceVisibilityEnum.STARTTASK),
                                                        }};
                                                    }}),
                                                }};
                                                cloudServiceConfiguration = new CloudServiceConfiguration("quasi") {{
                                                    currentOSVersion = "at";
                                                    targetOSVersion = "et";
                                                }};;
                                                displayName = "voluptate";
                                                enableAutoScale = false;
                                                enableInterNodeCommunication = false;
                                                maxTasksPerNode = 55965;
                                                metadata = new org.openapis.openapi.models.shared.MetadataItem[]{{
                                                    add(new MetadataItem() {{
                                                        name = "Edith Ferry";
                                                        value = "accusantium";
                                                    }}),
                                                    add(new MetadataItem() {{
                                                        name = "Charles Langworth";
                                                        value = "ab";
                                                    }}),
                                                }};
                                                resizeTimeout = "corrupti";
                                                startTask = new StartTask() {{
                                                    commandLine = "non";
                                                    environmentSettings = new org.openapis.openapi.models.shared.EnvironmentSetting[]{{
                                                        add(new EnvironmentSetting() {{
                                                            name = "Toni Fritsch";
                                                            value = "voluptas";
                                                        }}),
                                                    }};
                                                    maxTaskRetryCount = 12036;
                                                    resourceFiles = new org.openapis.openapi.models.shared.ResourceFile[]{{
                                                        add(new ResourceFile() {{
                                                            blobSource = "dicta";
                                                            fileMode = "maiores";
                                                            filePath = "natus";
                                                        }}),
                                                        add(new ResourceFile() {{
                                                            blobSource = "velit";
                                                            fileMode = "voluptatibus";
                                                            filePath = "voluptas";
                                                        }}),
                                                    }};
                                                    runElevated = false;
                                                    waitForSuccess = false;
                                                }};;
                                                targetDedicated = 990345;
                                                taskSchedulingPolicy = new TaskSchedulingPolicy(TaskSchedulingPolicyNodeFillTypeEnum.SPREAD);;
                                                virtualMachineConfiguration = new VirtualMachineConfiguration(                new ImageReference("ea", "quaerat", "consequuntur") {{
                                                                    version = "repellendus";
                                                                }};, "officia") {{
                                                    windowsConfiguration = new WindowsConfiguration() {{
                                                        enableAutomaticUpdates = false;
                                                    }};;
                                                }};;
                                                vmSize = "maxime";
                                            }};;
                                        }};;
                                        poolId = "dignissimos";
                                    }};;
                                    priority = 640024;
                                    usesTaskDependencies = false;
                                }};;
                                metadata = new org.openapis.openapi.models.shared.MetadataItem[]{{
                                    add(new MetadataItem() {{
                                        name = "Anna Hahn";
                                        value = "labore";
                                    }}),
                                    add(new MetadataItem() {{
                                        name = "Josephine Paucek";
                                        value = "velit";
                                    }}),
                                    add(new MetadataItem() {{
                                        name = "Rex Walter";
                                        value = "vel";
                                    }}),
                                    add(new MetadataItem() {{
                                        name = "Billie Keebler";
                                        value = "facilis";
                                    }}),
                                }};
                                schedule = new Schedule() {{
                                    doNotRunAfter = OffsetDateTime.parse("2022-03-04T03:42:26.898Z");
                                    doNotRunUntil = OffsetDateTime.parse("2022-08-22T09:37:14.602Z");
                                    recurrenceInterval = "reiciendis";
                                    startWindow = "assumenda";
                                }};;
                            }};, "nemo", "recusandae") {{
                ifMatch = "aliquid";
                ifModifiedSince = "aperiam";
                ifNoneMatch = "cum";
                ifUnmodifiedSince = "consectetur";
                clientRequestId = "in";
                ocpDate = "exercitationem";
                returnClientRequestId = false;
                timeout = 937285;
            }};            

            JobSchedulePatchResponse res = sdk.jobSchedules.jobSchedulePatch(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## jobScheduleTerminate

Terminates a job schedule.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.JobScheduleTerminateRequest;
import org.openapis.openapi.models.operations.JobScheduleTerminateResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            JobScheduleTerminateRequest req = new JobScheduleTerminateRequest("facere", "numquam") {{
                ifMatch = "doloribus";
                ifModifiedSince = "suscipit";
                ifNoneMatch = "reiciendis";
                ifUnmodifiedSince = "quidem";
                clientRequestId = "saepe";
                ocpDate = "necessitatibus";
                returnClientRequestId = false;
                timeout = 296556;
            }};            

            JobScheduleTerminateResponse res = sdk.jobSchedules.jobScheduleTerminate(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## jobScheduleUpdate

Updates the properties of the specified job schedule.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.JobScheduleUpdateRequest;
import org.openapis.openapi.models.operations.JobScheduleUpdateResponse;
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
import org.openapis.openapi.models.shared.JobManagerTask;
import org.openapis.openapi.models.shared.JobPreparationTask;
import org.openapis.openapi.models.shared.JobReleaseTask;
import org.openapis.openapi.models.shared.JobScheduleUpdateParameter;
import org.openapis.openapi.models.shared.JobSpecification;
import org.openapis.openapi.models.shared.MetadataItem;
import org.openapis.openapi.models.shared.PoolInformation;
import org.openapis.openapi.models.shared.PoolSpecification;
import org.openapis.openapi.models.shared.ResourceFile;
import org.openapis.openapi.models.shared.Schedule;
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

            JobScheduleUpdateRequest req = new JobScheduleUpdateRequest(                new JobScheduleUpdateParameter(                new JobSpecification() {{
                                                commonEnvironmentSettings = new org.openapis.openapi.models.shared.EnvironmentSetting[]{{
                                                    add(new EnvironmentSetting() {{
                                                        name = "Chad Franey IV";
                                                        value = "a";
                                                    }}),
                                                }};
                                                constraints = new JobConstraints() {{
                                                    maxTaskRetryCount = 891523;
                                                    maxWallClockTime = "consectetur";
                                                }};;
                                                displayName = "corporis";
                                                jobManagerTask = new JobManagerTask() {{
                                                    commandLine = "harum";
                                                    constraints = new TaskConstraints() {{
                                                        maxTaskRetryCount = 385237;
                                                        maxWallClockTime = "ipsa";
                                                        retentionTime = "voluptates";
                                                    }};;
                                                    displayName = "libero";
                                                    environmentSettings = new org.openapis.openapi.models.shared.EnvironmentSetting[]{{
                                                        add(new EnvironmentSetting() {{
                                                            name = "Otis Goldner";
                                                            value = "voluptas";
                                                        }}),
                                                    }};
                                                    id = "55ba3c28-744e-4d53-b88f-3a8d8f5c0b2f";
                                                    killJobOnCompletion = false;
                                                    resourceFiles = new org.openapis.openapi.models.shared.ResourceFile[]{{
                                                        add(new ResourceFile() {{
                                                            blobSource = "asperiores";
                                                            fileMode = "facilis";
                                                            filePath = "voluptate";
                                                        }}),
                                                    }};
                                                    runElevated = false;
                                                    runExclusive = false;
                                                }};;
                                                jobPreparationTask = new JobPreparationTask() {{
                                                    commandLine = "expedita";
                                                    constraints = new TaskConstraints() {{
                                                        maxTaskRetryCount = 70869;
                                                        maxWallClockTime = "iste";
                                                        retentionTime = "dolore";
                                                    }};;
                                                    environmentSettings = new org.openapis.openapi.models.shared.EnvironmentSetting[]{{
                                                        add(new EnvironmentSetting() {{
                                                            name = "Pearl Johnson";
                                                            value = "voluptas";
                                                        }}),
                                                        add(new EnvironmentSetting() {{
                                                            name = "Joe Hoppe";
                                                            value = "illo";
                                                        }}),
                                                        add(new EnvironmentSetting() {{
                                                            name = "Thomas Lockman";
                                                            value = "sed";
                                                        }}),
                                                    }};
                                                    id = "94e3698f-447f-4603-a8b4-45e80ca55efd";
                                                    rerunOnNodeRebootAfterSuccess = false;
                                                    resourceFiles = new org.openapis.openapi.models.shared.ResourceFile[]{{
                                                        add(new ResourceFile() {{
                                                            blobSource = "aperiam";
                                                            fileMode = "saepe";
                                                            filePath = "numquam";
                                                        }}),
                                                    }};
                                                    runElevated = false;
                                                    waitForSuccess = false;
                                                }};;
                                                jobReleaseTask = new JobReleaseTask() {{
                                                    commandLine = "veniam";
                                                    environmentSettings = new org.openapis.openapi.models.shared.EnvironmentSetting[]{{
                                                        add(new EnvironmentSetting() {{
                                                            name = "Jack Langworth";
                                                            value = "cum";
                                                        }}),
                                                        add(new EnvironmentSetting() {{
                                                            name = "Lee Lehner";
                                                            value = "expedita";
                                                        }}),
                                                    }};
                                                    id = "e3a5aa8e-4824-4d0a-b407-5088e5186206";
                                                    maxWallClockTime = "nostrum";
                                                    resourceFiles = new org.openapis.openapi.models.shared.ResourceFile[]{{
                                                        add(new ResourceFile() {{
                                                            blobSource = "error";
                                                            fileMode = "consequatur";
                                                            filePath = "incidunt";
                                                        }}),
                                                        add(new ResourceFile() {{
                                                            blobSource = "reiciendis";
                                                            fileMode = "dolorem";
                                                            filePath = "harum";
                                                        }}),
                                                        add(new ResourceFile() {{
                                                            blobSource = "dicta";
                                                            fileMode = "architecto";
                                                            filePath = "occaecati";
                                                        }}),
                                                        add(new ResourceFile() {{
                                                            blobSource = "labore";
                                                            fileMode = "quidem";
                                                            filePath = "atque";
                                                        }}),
                                                    }};
                                                    retentionTime = "laborum";
                                                    runElevated = false;
                                                }};;
                                                metadata = new org.openapis.openapi.models.shared.MetadataItem[]{{
                                                    add(new MetadataItem() {{
                                                        name = "Brent Abernathy";
                                                        value = "voluptate";
                                                    }}),
                                                    add(new MetadataItem() {{
                                                        name = "Boyd McKenzie";
                                                        value = "voluptates";
                                                    }}),
                                                    add(new MetadataItem() {{
                                                        name = "Monique Predovic";
                                                        value = "fuga";
                                                    }}),
                                                }};
                                                poolInfo = new PoolInformation() {{
                                                    autoPoolSpecification = new AutoPoolSpecification(AutoPoolSpecificationPoolLifetimeOptionEnum.JOB) {{
                                                        autoPoolIdPrefix = "mollitia";
                                                        keepAlive = false;
                                                        pool = new PoolSpecification() {{
                                                            applicationPackageReferences = new org.openapis.openapi.models.shared.ApplicationPackageReference[]{{
                                                                add(new ApplicationPackageReference("repudiandae") {{
                                                                    applicationId = "voluptatem";
                                                                    version = "quisquam";
                                                                }}),
                                                                add(new ApplicationPackageReference("reprehenderit") {{
                                                                    applicationId = "quasi";
                                                                    version = "atque";
                                                                }}),
                                                            }};
                                                            autoScaleEvaluationInterval = "asperiores";
                                                            autoScaleFormula = "totam";
                                                            certificateReferences = new org.openapis.openapi.models.shared.CertificateReference[]{{
                                                                add(new CertificateReference("ea", "atque") {{
                                                                    storeLocation = CertificateReferenceStoreLocationEnum.UNMAPPED;
                                                                    storeName = "maxime";
                                                                    thumbprint = "et";
                                                                    thumbprintAlgorithm = "esse";
                                                                    visibility = new org.openapis.openapi.models.shared.CertificateReferenceVisibilityEnum[]{{
                                                                        add(CertificateReferenceVisibilityEnum.UNMAPPED),
                                                                    }};
                                                                }}),
                                                                add(new CertificateReference("maiores", "corrupti") {{
                                                                    storeLocation = CertificateReferenceStoreLocationEnum.LOCALMACHINE;
                                                                    storeName = "officiis";
                                                                    thumbprint = "officiis";
                                                                    thumbprintAlgorithm = "accusamus";
                                                                    visibility = new org.openapis.openapi.models.shared.CertificateReferenceVisibilityEnum[]{{
                                                                        add(CertificateReferenceVisibilityEnum.TASK),
                                                                        add(CertificateReferenceVisibilityEnum.STARTTASK),
                                                                        add(CertificateReferenceVisibilityEnum.TASK),
                                                                    }};
                                                                }}),
                                                            }};
                                                            cloudServiceConfiguration = new CloudServiceConfiguration("at") {{
                                                                currentOSVersion = "error";
                                                                targetOSVersion = "blanditiis";
                                                            }};;
                                                            displayName = "suscipit";
                                                            enableAutoScale = false;
                                                            enableInterNodeCommunication = false;
                                                            maxTasksPerNode = 922348;
                                                            metadata = new org.openapis.openapi.models.shared.MetadataItem[]{{
                                                                add(new MetadataItem() {{
                                                                    name = "Willie Walker";
                                                                    value = "labore";
                                                                }}),
                                                                add(new MetadataItem() {{
                                                                    name = "Mr. Anthony Waelchi Sr.";
                                                                    value = "enim";
                                                                }}),
                                                                add(new MetadataItem() {{
                                                                    name = "Sheila Wilderman";
                                                                    value = "saepe";
                                                                }}),
                                                            }};
                                                            resizeTimeout = "consequuntur";
                                                            startTask = new StartTask() {{
                                                                commandLine = "occaecati";
                                                                environmentSettings = new org.openapis.openapi.models.shared.EnvironmentSetting[]{{
                                                                    add(new EnvironmentSetting() {{
                                                                        name = "Arnold Ferry";
                                                                        value = "consequuntur";
                                                                    }}),
                                                                    add(new EnvironmentSetting() {{
                                                                        name = "Amelia Harvey";
                                                                        value = "illo";
                                                                    }}),
                                                                    add(new EnvironmentSetting() {{
                                                                        name = "Melody Vandervort";
                                                                        value = "doloremque";
                                                                    }}),
                                                                    add(new EnvironmentSetting() {{
                                                                        name = "Ms. Melissa Larson";
                                                                        value = "qui";
                                                                    }}),
                                                                }};
                                                                maxTaskRetryCount = 739884;
                                                                resourceFiles = new org.openapis.openapi.models.shared.ResourceFile[]{{
                                                                    add(new ResourceFile() {{
                                                                        blobSource = "necessitatibus";
                                                                        fileMode = "ratione";
                                                                        filePath = "laborum";
                                                                    }}),
                                                                    add(new ResourceFile() {{
                                                                        blobSource = "distinctio";
                                                                        fileMode = "voluptatum";
                                                                        filePath = "rem";
                                                                    }}),
                                                                }};
                                                                runElevated = false;
                                                                waitForSuccess = false;
                                                            }};;
                                                            targetDedicated = 304446;
                                                            taskSchedulingPolicy = new TaskSchedulingPolicy(TaskSchedulingPolicyNodeFillTypeEnum.SPREAD);;
                                                            virtualMachineConfiguration = new VirtualMachineConfiguration(                new ImageReference("repellat", "alias", "corporis") {{
                                                                                version = "perspiciatis";
                                                                            }};, "nihil") {{
                                                                windowsConfiguration = new WindowsConfiguration() {{
                                                                    enableAutomaticUpdates = false;
                                                                }};;
                                                            }};;
                                                            vmSize = "mollitia";
                                                        }};;
                                                    }};;
                                                    poolId = "voluptas";
                                                }};;
                                                priority = 5189;
                                                usesTaskDependencies = false;
                                            }};,                 new Schedule() {{
                                                doNotRunAfter = OffsetDateTime.parse("2020-02-03T14:34:15.560Z");
                                                doNotRunUntil = OffsetDateTime.parse("2022-05-03T16:31:59.395Z");
                                                recurrenceInterval = "minima";
                                                startWindow = "dolore";
                                            }};) {{
                                metadata = new org.openapis.openapi.models.shared.MetadataItem[]{{
                                    add(new MetadataItem() {{
                                        name = "Amy Walsh";
                                        value = "molestiae";
                                    }}),
                                    add(new MetadataItem() {{
                                        name = "April Nader";
                                        value = "laudantium";
                                    }}),
                                    add(new MetadataItem() {{
                                        name = "Vivian Ward";
                                        value = "quis";
                                    }}),
                                }};
                            }};, "eum", "reiciendis") {{
                ifMatch = "provident";
                ifModifiedSince = "aspernatur";
                ifNoneMatch = "ullam";
                ifUnmodifiedSince = "quasi";
                clientRequestId = "animi";
                ocpDate = "nostrum";
                returnClientRequestId = false;
                timeout = 652309;
            }};            

            JobScheduleUpdateResponse res = sdk.jobSchedules.jobScheduleUpdate(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
