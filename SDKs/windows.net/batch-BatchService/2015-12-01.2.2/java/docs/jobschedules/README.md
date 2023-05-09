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
import org.openapis.openapi.models.shared.EnvironmentSetting;
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

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            JobScheduleAddRequest req = new JobScheduleAddRequest(                new JobScheduleAddParameter("eum",                 new JobSpecification() {{
                                                commonEnvironmentSettings = new org.openapis.openapi.models.shared.EnvironmentSetting[]{{
                                                    add(new EnvironmentSetting() {{
                                                        name = "Sergio Hyatt";
                                                        value = "sint";
                                                    }}),
                                                }};
                                                constraints = new JobConstraints() {{
                                                    maxTaskRetryCount = 638921;
                                                    maxWallClockTime = "dolor";
                                                }};;
                                                displayName = "debitis";
                                                jobManagerTask = new JobManagerTask() {{
                                                    commandLine = "a";
                                                    constraints = new TaskConstraints() {{
                                                        maxTaskRetryCount = 680056;
                                                        maxWallClockTime = "in";
                                                        retentionTime = "in";
                                                    }};;
                                                    displayName = "illum";
                                                    environmentSettings = new org.openapis.openapi.models.shared.EnvironmentSetting[]{{
                                                        add(new EnvironmentSetting() {{
                                                            name = "Keith Gulgowski";
                                                            value = "ea";
                                                        }}),
                                                        add(new EnvironmentSetting() {{
                                                            name = "Kayla Thompson";
                                                            value = "enim";
                                                        }}),
                                                        add(new EnvironmentSetting() {{
                                                            name = "Toby Pouros";
                                                            value = "id";
                                                        }}),
                                                        add(new EnvironmentSetting() {{
                                                            name = "Jaime Will";
                                                            value = "nisi";
                                                        }}),
                                                    }};
                                                    id = "6997074b-a446-49b6-a214-1959890afa56";
                                                    killJobOnCompletion = false;
                                                    resourceFiles = new org.openapis.openapi.models.shared.ResourceFile[]{{
                                                        add(new ResourceFile() {{
                                                            blobSource = "necessitatibus";
                                                            filePath = "odit";
                                                        }}),
                                                    }};
                                                    runElevated = false;
                                                    runExclusive = false;
                                                }};;
                                                jobPreparationTask = new JobPreparationTask() {{
                                                    commandLine = "nemo";
                                                    constraints = new TaskConstraints() {{
                                                        maxTaskRetryCount = 97260;
                                                        maxWallClockTime = "iure";
                                                        retentionTime = "doloribus";
                                                    }};;
                                                    environmentSettings = new org.openapis.openapi.models.shared.EnvironmentSetting[]{{
                                                        add(new EnvironmentSetting() {{
                                                            name = "Jasmine Lind";
                                                            value = "architecto";
                                                        }}),
                                                        add(new EnvironmentSetting() {{
                                                            name = "Elvira Herman";
                                                            value = "repellat";
                                                        }}),
                                                        add(new EnvironmentSetting() {{
                                                            name = "Louis Turner Sr.";
                                                            value = "praesentium";
                                                        }}),
                                                        add(new EnvironmentSetting() {{
                                                            name = "Victor Casper";
                                                            value = "pariatur";
                                                        }}),
                                                    }};
                                                    id = "c692601f-b576-4b0d-9f0d-30c5fbb25870";
                                                    rerunOnNodeRebootAfterSuccess = false;
                                                    resourceFiles = new org.openapis.openapi.models.shared.ResourceFile[]{{
                                                        add(new ResourceFile() {{
                                                            blobSource = "nesciunt";
                                                            filePath = "eos";
                                                        }}),
                                                        add(new ResourceFile() {{
                                                            blobSource = "perferendis";
                                                            filePath = "dolores";
                                                        }}),
                                                    }};
                                                    runElevated = false;
                                                    waitForSuccess = false;
                                                }};;
                                                jobReleaseTask = new JobReleaseTask() {{
                                                    commandLine = "minus";
                                                    environmentSettings = new org.openapis.openapi.models.shared.EnvironmentSetting[]{{
                                                        add(new EnvironmentSetting() {{
                                                            name = "Eula Hegmann";
                                                            value = "omnis";
                                                        }}),
                                                        add(new EnvironmentSetting() {{
                                                            name = "Freddie Bartoletti";
                                                            value = "blanditiis";
                                                        }}),
                                                    }};
                                                    id = "909b3fe4-9a8d-49cb-b486-33323f9b77f3";
                                                    maxWallClockTime = "dolorum";
                                                    resourceFiles = new org.openapis.openapi.models.shared.ResourceFile[]{{
                                                        add(new ResourceFile() {{
                                                            blobSource = "veritatis";
                                                            filePath = "ipsa";
                                                        }}),
                                                        add(new ResourceFile() {{
                                                            blobSource = "ipsa";
                                                            filePath = "iure";
                                                        }}),
                                                    }};
                                                    retentionTime = "odio";
                                                    runElevated = false;
                                                }};;
                                                metadata = new org.openapis.openapi.models.shared.MetadataItem[]{{
                                                    add(new MetadataItem() {{
                                                        name = "Rickey Wolf";
                                                        value = "eos";
                                                    }}),
                                                    add(new MetadataItem() {{
                                                        name = "Miss Paul Steuber";
                                                        value = "iusto";
                                                    }}),
                                                }};
                                                poolInfo = new PoolInformation() {{
                                                    autoPoolSpecification = new AutoPoolSpecification(AutoPoolSpecificationPoolLifetimeOptionEnum.JOB) {{
                                                        autoPoolIdPrefix = "dolorum";
                                                        keepAlive = false;
                                                        pool = new PoolSpecification() {{
                                                            applicationPackageReferences = new org.openapis.openapi.models.shared.ApplicationPackageReference[]{{
                                                                add(new ApplicationPackageReference("distinctio") {{
                                                                    applicationId = "omnis";
                                                                    version = "necessitatibus";
                                                                }}),
                                                                add(new ApplicationPackageReference("ipsum") {{
                                                                    applicationId = "asperiores";
                                                                    version = "nihil";
                                                                }}),
                                                                add(new ApplicationPackageReference("saepe") {{
                                                                    applicationId = "voluptate";
                                                                    version = "id";
                                                                }}),
                                                            }};
                                                            autoScaleEvaluationInterval = "eius";
                                                            autoScaleFormula = "aspernatur";
                                                            certificateReferences = new org.openapis.openapi.models.shared.CertificateReference[]{{
                                                                add(new CertificateReference("suscipit", "deserunt") {{
                                                                    storeLocation = CertificateReferenceStoreLocationEnum.CURRENTUSER;
                                                                    storeName = "optio";
                                                                    thumbprint = "accusamus";
                                                                    thumbprintAlgorithm = "ad";
                                                                    visibility = "saepe";
                                                                }}),
                                                            }};
                                                            displayName = "provident";
                                                            enableAutoScale = false;
                                                            enableInterNodeCommunication = false;
                                                            maxTasksPerNode = 324683;
                                                            metadata = new org.openapis.openapi.models.shared.MetadataItem[]{{
                                                                add(new MetadataItem() {{
                                                                    name = "Donnie Abbott";
                                                                    value = "tempora";
                                                                }}),
                                                                add(new MetadataItem() {{
                                                                    name = "Bernadette Torp";
                                                                    value = "a";
                                                                }}),
                                                                add(new MetadataItem() {{
                                                                    name = "Fannie Kub";
                                                                    value = "tenetur";
                                                                }}),
                                                                add(new MetadataItem() {{
                                                                    name = "Kelli Thompson";
                                                                    value = "dolorem";
                                                                }}),
                                                            }};
                                                            osFamily = "sapiente";
                                                            resizeTimeout = "totam";
                                                            startTask = new StartTask() {{
                                                                commandLine = "nihil";
                                                                environmentSettings = new org.openapis.openapi.models.shared.EnvironmentSetting[]{{
                                                                    add(new EnvironmentSetting() {{
                                                                        name = "Luis Cremin";
                                                                        value = "voluptas";
                                                                    }}),
                                                                }};
                                                                maxTaskRetryCount = 646265;
                                                                resourceFiles = new org.openapis.openapi.models.shared.ResourceFile[]{{
                                                                    add(new ResourceFile() {{
                                                                        blobSource = "ipsum";
                                                                        filePath = "incidunt";
                                                                    }}),
                                                                    add(new ResourceFile() {{
                                                                        blobSource = "qui";
                                                                        filePath = "cupiditate";
                                                                    }}),
                                                                }};
                                                                runElevated = false;
                                                                waitForSuccess = false;
                                                            }};;
                                                            targetDedicated = 807581;
                                                            targetOSVersion = "pariatur";
                                                            taskSchedulingPolicy = new TaskSchedulingPolicy(TaskSchedulingPolicyNodeFillTypeEnum.UNMAPPED);;
                                                            vmSize = "dicta";
                                                        }};;
                                                    }};;
                                                    poolId = "laborum";
                                                }};;
                                                priority = 517379;
                                                usesTaskDependencies = false;
                                            }};,                 new Schedule() {{
                                                doNotRunAfter = OffsetDateTime.parse("2022-11-13T19:04:59.225Z");
                                                doNotRunUntil = OffsetDateTime.parse("2022-04-14T08:18:32.851Z");
                                                recurrenceInterval = "facilis";
                                                startWindow = "aliquid";
                                            }};) {{
                                displayName = "quam";
                                metadata = new org.openapis.openapi.models.shared.MetadataItem[]{{
                                    add(new MetadataItem() {{
                                        name = "Shawn Doyle";
                                        value = "odio";
                                    }}),
                                    add(new MetadataItem() {{
                                        name = "Marion Reichert DDS";
                                        value = "soluta";
                                    }}),
                                    add(new MetadataItem() {{
                                        name = "Carl Turner DDS";
                                        value = "quos";
                                    }}),
                                }};
                            }};, "tempore") {{
                clientRequestId = "cupiditate";
                ocpDate = "aperiam";
                returnClientRequestId = false;
                timeout = 961937;
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

            JobScheduleDeleteRequest req = new JobScheduleDeleteRequest("dolorem", "dolore") {{
                ifMatch = "labore";
                ifModifiedSince = "adipisci";
                ifNoneMatch = "dolorum";
                ifUnmodifiedSince = "architecto";
                clientRequestId = "quae";
                ocpDate = "aut";
                returnClientRequestId = false;
                timeout = 555649;
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

            JobScheduleDisableRequest req = new JobScheduleDisableRequest("itaque", "consequatur") {{
                ifMatch = "est";
                ifModifiedSince = "repellendus";
                ifNoneMatch = "porro";
                ifUnmodifiedSince = "doloribus";
                clientRequestId = "ut";
                ocpDate = "facilis";
                returnClientRequestId = false;
                timeout = 586410;
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

            JobScheduleEnableRequest req = new JobScheduleEnableRequest("qui", "quae") {{
                ifMatch = "laudantium";
                ifModifiedSince = "odio";
                ifNoneMatch = "occaecati";
                ifUnmodifiedSince = "voluptatibus";
                clientRequestId = "quisquam";
                ocpDate = "vero";
                returnClientRequestId = false;
                timeout = 606476;
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

            JobScheduleExistsRequest req = new JobScheduleExistsRequest("quis", "ipsum") {{
                dollarSelect = "delectus";
                ifMatch = "voluptate";
                ifModifiedSince = "consectetur";
                ifNoneMatch = "vero";
                ifUnmodifiedSince = "tenetur";
                clientRequestId = "dignissimos";
                ocpDate = "hic";
                returnClientRequestId = false;
                timeout = 715561;
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

            JobScheduleGetRequest req = new JobScheduleGetRequest("quod", "odio") {{
                dollarExpand = "similique";
                dollarSelect = "facilis";
                ifMatch = "vero";
                ifModifiedSince = "ducimus";
                ifNoneMatch = "dolore";
                ifUnmodifiedSince = "quibusdam";
                clientRequestId = "illum";
                ocpDate = "sequi";
                returnClientRequestId = false;
                timeout = 617877;
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

            JobScheduleListRequest req = new JobScheduleListRequest("impedit") {{
                dollarExpand = "aut";
                dollarFilter = "voluptatibus";
                dollarSelect = "exercitationem";
                clientRequestId = "nulla";
                maxresults = 148141;
                ocpDate = "porro";
                returnClientRequestId = false;
                timeout = 981830;
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
import org.openapis.openapi.models.shared.EnvironmentSetting;
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

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            JobSchedulePatchRequest req = new JobSchedulePatchRequest(                new JobSchedulePatchParameter() {{
                                jobSpecification = new JobSpecification() {{
                                    commonEnvironmentSettings = new org.openapis.openapi.models.shared.EnvironmentSetting[]{{
                                        add(new EnvironmentSetting() {{
                                            name = "Miss Vicky Kuphal";
                                            value = "ipsam";
                                        }}),
                                        add(new EnvironmentSetting() {{
                                            name = "Judy Keebler";
                                            value = "ratione";
                                        }}),
                                        add(new EnvironmentSetting() {{
                                            name = "Mabel Cartwright";
                                            value = "quasi";
                                        }}),
                                        add(new EnvironmentSetting() {{
                                            name = "Freda Marks";
                                            value = "sapiente";
                                        }}),
                                    }};
                                    constraints = new JobConstraints() {{
                                        maxTaskRetryCount = 788873;
                                        maxWallClockTime = "saepe";
                                    }};;
                                    displayName = "ea";
                                    jobManagerTask = new JobManagerTask() {{
                                        commandLine = "impedit";
                                        constraints = new TaskConstraints() {{
                                            maxTaskRetryCount = 359271;
                                            maxWallClockTime = "veniam";
                                            retentionTime = "aliquid";
                                        }};;
                                        displayName = "inventore";
                                        environmentSettings = new org.openapis.openapi.models.shared.EnvironmentSetting[]{{
                                            add(new EnvironmentSetting() {{
                                                name = "Krista Feeney";
                                                value = "minima";
                                            }}),
                                            add(new EnvironmentSetting() {{
                                                name = "Mr. Elsa Reinger";
                                                value = "impedit";
                                            }}),
                                        }};
                                        id = "42e141aa-c366-4c8d-96b1-442907474778";
                                        killJobOnCompletion = false;
                                        resourceFiles = new org.openapis.openapi.models.shared.ResourceFile[]{{
                                            add(new ResourceFile() {{
                                                blobSource = "reprehenderit";
                                                filePath = "quidem";
                                            }}),
                                            add(new ResourceFile() {{
                                                blobSource = "fugiat";
                                                filePath = "ut";
                                            }}),
                                            add(new ResourceFile() {{
                                                blobSource = "eum";
                                                filePath = "suscipit";
                                            }}),
                                        }};
                                        runElevated = false;
                                        runExclusive = false;
                                    }};;
                                    jobPreparationTask = new JobPreparationTask() {{
                                        commandLine = "assumenda";
                                        constraints = new TaskConstraints() {{
                                            maxTaskRetryCount = 181151;
                                            maxWallClockTime = "praesentium";
                                            retentionTime = "quisquam";
                                        }};;
                                        environmentSettings = new org.openapis.openapi.models.shared.EnvironmentSetting[]{{
                                            add(new EnvironmentSetting() {{
                                                name = "Amelia Predovic";
                                                value = "illum";
                                            }}),
                                        }};
                                        id = "ca425190-4e52-43c7-a0bc-7178e4796f2a";
                                        rerunOnNodeRebootAfterSuccess = false;
                                        resourceFiles = new org.openapis.openapi.models.shared.ResourceFile[]{{
                                            add(new ResourceFile() {{
                                                blobSource = "accusantium";
                                                filePath = "porro";
                                            }}),
                                            add(new ResourceFile() {{
                                                blobSource = "eum";
                                                filePath = "quas";
                                            }}),
                                        }};
                                        runElevated = false;
                                        waitForSuccess = false;
                                    }};;
                                    jobReleaseTask = new JobReleaseTask() {{
                                        commandLine = "praesentium";
                                        environmentSettings = new org.openapis.openapi.models.shared.EnvironmentSetting[]{{
                                            add(new EnvironmentSetting() {{
                                                name = "Wayne Parker";
                                                value = "atque";
                                            }}),
                                        }};
                                        id = "2562f222-e981-47ee-97cb-e61e6b7b95bc";
                                        maxWallClockTime = "sit";
                                        resourceFiles = new org.openapis.openapi.models.shared.ResourceFile[]{{
                                            add(new ResourceFile() {{
                                                blobSource = "tempore";
                                                filePath = "adipisci";
                                            }}),
                                            add(new ResourceFile() {{
                                                blobSource = "cumque";
                                                filePath = "consequuntur";
                                            }}),
                                            add(new ResourceFile() {{
                                                blobSource = "consequatur";
                                                filePath = "minus";
                                            }}),
                                        }};
                                        retentionTime = "quaerat";
                                        runElevated = false;
                                    }};;
                                    metadata = new org.openapis.openapi.models.shared.MetadataItem[]{{
                                        add(new MetadataItem() {{
                                            name = "Joy Labadie";
                                            value = "nulla";
                                        }}),
                                        add(new MetadataItem() {{
                                            name = "Cory Boyle";
                                            value = "sint";
                                        }}),
                                        add(new MetadataItem() {{
                                            name = "Rufus Crona";
                                            value = "facere";
                                        }}),
                                        add(new MetadataItem() {{
                                            name = "Marilyn Botsford";
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
                                                    add(new CertificateReference("itaque", "dolorum") {{
                                                        storeLocation = CertificateReferenceStoreLocationEnum.LOCALMACHINE;
                                                        storeName = "qui";
                                                        thumbprint = "quibusdam";
                                                        thumbprintAlgorithm = "ex";
                                                        visibility = "deleniti";
                                                    }}),
                                                }};
                                                displayName = "architecto";
                                                enableAutoScale = false;
                                                enableInterNodeCommunication = false;
                                                maxTasksPerNode = 609178;
                                                metadata = new org.openapis.openapi.models.shared.MetadataItem[]{{
                                                    add(new MetadataItem() {{
                                                        name = "Lynette Bosco II";
                                                        value = "veritatis";
                                                    }}),
                                                    add(new MetadataItem() {{
                                                        name = "Sherry Morar IV";
                                                        value = "aut";
                                                    }}),
                                                    add(new MetadataItem() {{
                                                        name = "Ms. Duane O'Conner";
                                                        value = "voluptatem";
                                                    }}),
                                                    add(new MetadataItem() {{
                                                        name = "Toni Fritsch";
                                                        value = "voluptas";
                                                    }}),
                                                }};
                                                osFamily = "aut";
                                                resizeTimeout = "dignissimos";
                                                startTask = new StartTask() {{
                                                    commandLine = "dicta";
                                                    environmentSettings = new org.openapis.openapi.models.shared.EnvironmentSetting[]{{
                                                        add(new EnvironmentSetting() {{
                                                            name = "Lee Wiza";
                                                            value = "aperiam";
                                                        }}),
                                                        add(new EnvironmentSetting() {{
                                                            name = "Bertha Cruickshank";
                                                            value = "maxime";
                                                        }}),
                                                        add(new EnvironmentSetting() {{
                                                            name = "Blanche Yundt II";
                                                            value = "porro";
                                                        }}),
                                                        add(new EnvironmentSetting() {{
                                                            name = "Francisco Bernier";
                                                            value = "id";
                                                        }}),
                                                    }};
                                                    maxTaskRetryCount = 380729;
                                                    resourceFiles = new org.openapis.openapi.models.shared.ResourceFile[]{{
                                                        add(new ResourceFile() {{
                                                            blobSource = "culpa";
                                                            filePath = "est";
                                                        }}),
                                                    }};
                                                    runElevated = false;
                                                    waitForSuccess = false;
                                                }};;
                                                targetDedicated = 926880;
                                                targetOSVersion = "totam";
                                                taskSchedulingPolicy = new TaskSchedulingPolicy(TaskSchedulingPolicyNodeFillTypeEnum.UNMAPPED);;
                                                vmSize = "vel";
                                            }};;
                                        }};;
                                        poolId = "ducimus";
                                    }};;
                                    priority = 554688;
                                    usesTaskDependencies = false;
                                }};;
                                metadata = new org.openapis.openapi.models.shared.MetadataItem[]{{
                                    add(new MetadataItem() {{
                                        name = "Elena Quigley";
                                        value = "in";
                                    }}),
                                    add(new MetadataItem() {{
                                        name = "Lela Shields";
                                        value = "aliquid";
                                    }}),
                                }};
                                schedule = new Schedule() {{
                                    doNotRunAfter = OffsetDateTime.parse("2022-04-06T09:08:23.430Z");
                                    doNotRunUntil = OffsetDateTime.parse("2022-07-21T02:01:44.496Z");
                                    recurrenceInterval = "exercitationem";
                                    startWindow = "earum";
                                }};;
                            }};, "facere", "numquam") {{
                ifMatch = "doloribus";
                ifModifiedSince = "suscipit";
                ifNoneMatch = "reiciendis";
                ifUnmodifiedSince = "quidem";
                clientRequestId = "saepe";
                ocpDate = "necessitatibus";
                returnClientRequestId = false;
                timeout = 296556;
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

            JobScheduleTerminateRequest req = new JobScheduleTerminateRequest("sunt", "asperiores") {{
                ifMatch = "adipisci";
                ifModifiedSince = "non";
                ifNoneMatch = "amet";
                ifUnmodifiedSince = "beatae";
                clientRequestId = "dignissimos";
                ocpDate = "a";
                returnClientRequestId = false;
                timeout = 891523;
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
import org.openapis.openapi.models.shared.EnvironmentSetting;
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

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            JobScheduleUpdateRequest req = new JobScheduleUpdateRequest(                new JobScheduleUpdateParameter(                new JobSpecification() {{
                                                commonEnvironmentSettings = new org.openapis.openapi.models.shared.EnvironmentSetting[]{{
                                                    add(new EnvironmentSetting() {{
                                                        name = "Dr. Maryann Howe";
                                                        value = "vitae";
                                                    }}),
                                                }};
                                                constraints = new JobConstraints() {{
                                                    maxTaskRetryCount = 881721;
                                                    maxWallClockTime = "similique";
                                                }};;
                                                displayName = "tempora";
                                                jobManagerTask = new JobManagerTask() {{
                                                    commandLine = "aspernatur";
                                                    constraints = new TaskConstraints() {{
                                                        maxTaskRetryCount = 379057;
                                                        maxWallClockTime = "voluptas";
                                                        retentionTime = "voluptas";
                                                    }};;
                                                    displayName = "minima";
                                                    environmentSettings = new org.openapis.openapi.models.shared.EnvironmentSetting[]{{
                                                        add(new EnvironmentSetting() {{
                                                            name = "Travis Schinner";
                                                            value = "in";
                                                        }}),
                                                        add(new EnvironmentSetting() {{
                                                            name = "Suzanne Torphy";
                                                            value = "adipisci";
                                                        }}),
                                                        add(new EnvironmentSetting() {{
                                                            name = "Guy Luettgen";
                                                            value = "culpa";
                                                        }}),
                                                    }};
                                                    id = "8d8f5c0b-2f2f-4b7b-994a-276b26916fe1";
                                                    killJobOnCompletion = false;
                                                    resourceFiles = new org.openapis.openapi.models.shared.ResourceFile[]{{
                                                        add(new ResourceFile() {{
                                                            blobSource = "perferendis";
                                                            filePath = "corrupti";
                                                        }}),
                                                        add(new ResourceFile() {{
                                                            blobSource = "maiores";
                                                            filePath = "incidunt";
                                                        }}),
                                                        add(new ResourceFile() {{
                                                            blobSource = "sed";
                                                            filePath = "provident";
                                                        }}),
                                                        add(new ResourceFile() {{
                                                            blobSource = "eius";
                                                            filePath = "necessitatibus";
                                                        }}),
                                                    }};
                                                    runElevated = false;
                                                    runExclusive = false;
                                                }};;
                                                jobPreparationTask = new JobPreparationTask() {{
                                                    commandLine = "ipsum";
                                                    constraints = new TaskConstraints() {{
                                                        maxTaskRetryCount = 406733;
                                                        maxWallClockTime = "occaecati";
                                                        retentionTime = "quos";
                                                    }};;
                                                    environmentSettings = new org.openapis.openapi.models.shared.EnvironmentSetting[]{{
                                                        add(new EnvironmentSetting() {{
                                                            name = "Rhonda Klocko";
                                                            value = "sit";
                                                        }}),
                                                        add(new EnvironmentSetting() {{
                                                            name = "Cecelia Lakin";
                                                            value = "incidunt";
                                                        }}),
                                                        add(new EnvironmentSetting() {{
                                                            name = "Miss Alyssa Leffler";
                                                            value = "veniam";
                                                        }}),
                                                        add(new EnvironmentSetting() {{
                                                            name = "Sophie Wisoky";
                                                            value = "aperiam";
                                                        }}),
                                                    }};
                                                    id = "e457e185-8b6a-489f-be3a-5aa8e4824d0a";
                                                    rerunOnNodeRebootAfterSuccess = false;
                                                    resourceFiles = new org.openapis.openapi.models.shared.ResourceFile[]{{
                                                        add(new ResourceFile() {{
                                                            blobSource = "magnam";
                                                            filePath = "consequatur";
                                                        }}),
                                                        add(new ResourceFile() {{
                                                            blobSource = "esse";
                                                            filePath = "ipsam";
                                                        }}),
                                                        add(new ResourceFile() {{
                                                            blobSource = "sit";
                                                            filePath = "voluptatum";
                                                        }}),
                                                    }};
                                                    runElevated = false;
                                                    waitForSuccess = false;
                                                }};;
                                                jobReleaseTask = new JobReleaseTask() {{
                                                    commandLine = "quas";
                                                    environmentSettings = new org.openapis.openapi.models.shared.EnvironmentSetting[]{{
                                                        add(new EnvironmentSetting() {{
                                                            name = "Janet Kuvalis";
                                                            value = "sit";
                                                        }}),
                                                        add(new EnvironmentSetting() {{
                                                            name = "Bernice Ullrich II";
                                                            value = "reiciendis";
                                                        }}),
                                                        add(new EnvironmentSetting() {{
                                                            name = "Ms. Opal Buckridge";
                                                            value = "quidem";
                                                        }}),
                                                        add(new EnvironmentSetting() {{
                                                            name = "Cameron Reilly";
                                                            value = "alias";
                                                        }}),
                                                    }};
                                                    id = "3a79f9df-e0ab-47da-8a50-ce187f86bc17";
                                                    maxWallClockTime = "amet";
                                                    resourceFiles = new org.openapis.openapi.models.shared.ResourceFile[]{{
                                                        add(new ResourceFile() {{
                                                            blobSource = "ea";
                                                            filePath = "atque";
                                                        }}),
                                                        add(new ResourceFile() {{
                                                            blobSource = "error";
                                                            filePath = "officiis";
                                                        }}),
                                                        add(new ResourceFile() {{
                                                            blobSource = "officiis";
                                                            filePath = "accusamus";
                                                        }}),
                                                        add(new ResourceFile() {{
                                                            blobSource = "natus";
                                                            filePath = "minima";
                                                        }}),
                                                    }};
                                                    retentionTime = "aspernatur";
                                                    runElevated = false;
                                                }};;
                                                metadata = new org.openapis.openapi.models.shared.MetadataItem[]{{
                                                    add(new MetadataItem() {{
                                                        name = "Johnnie Swaniawski";
                                                        value = "suscipit";
                                                    }}),
                                                    add(new MetadataItem() {{
                                                        name = "Dr. Ivan Littel";
                                                        value = "repellendus";
                                                    }}),
                                                }};
                                                poolInfo = new PoolInformation() {{
                                                    autoPoolSpecification = new AutoPoolSpecification(AutoPoolSpecificationPoolLifetimeOptionEnum.JOBSCHEDULE) {{
                                                        autoPoolIdPrefix = "reiciendis";
                                                        keepAlive = false;
                                                        pool = new PoolSpecification() {{
                                                            applicationPackageReferences = new org.openapis.openapi.models.shared.ApplicationPackageReference[]{{
                                                                add(new ApplicationPackageReference("accusantium") {{
                                                                    applicationId = "repudiandae";
                                                                    version = "dicta";
                                                                }}),
                                                            }};
                                                            autoScaleEvaluationInterval = "beatae";
                                                            autoScaleFormula = "dolores";
                                                            certificateReferences = new org.openapis.openapi.models.shared.CertificateReference[]{{
                                                                add(new CertificateReference("saepe", "consequuntur") {{
                                                                    storeLocation = CertificateReferenceStoreLocationEnum.LOCALMACHINE;
                                                                    storeName = "velit";
                                                                    thumbprint = "a";
                                                                    thumbprintAlgorithm = "molestias";
                                                                    visibility = "magnam";
                                                                }}),
                                                                add(new CertificateReference("eveniet", "occaecati") {{
                                                                    storeLocation = CertificateReferenceStoreLocationEnum.LOCALMACHINE;
                                                                    storeName = "officiis";
                                                                    thumbprint = "perspiciatis";
                                                                    thumbprintAlgorithm = "in";
                                                                    visibility = "adipisci";
                                                                }}),
                                                            }};
                                                            displayName = "consequuntur";
                                                            enableAutoScale = false;
                                                            enableInterNodeCommunication = false;
                                                            maxTasksPerNode = 145870;
                                                            metadata = new org.openapis.openapi.models.shared.MetadataItem[]{{
                                                                add(new MetadataItem() {{
                                                                    name = "Mrs. Bessie Muller";
                                                                    value = "eveniet";
                                                                }}),
                                                                add(new MetadataItem() {{
                                                                    name = "Meghan Batz IV";
                                                                    value = "quae";
                                                                }}),
                                                                add(new MetadataItem() {{
                                                                    name = "Tricia Denesik";
                                                                    value = "necessitatibus";
                                                                }}),
                                                            }};
                                                            osFamily = "ratione";
                                                            resizeTimeout = "laborum";
                                                            startTask = new StartTask() {{
                                                                commandLine = "distinctio";
                                                                environmentSettings = new org.openapis.openapi.models.shared.EnvironmentSetting[]{{
                                                                    add(new EnvironmentSetting() {{
                                                                        name = "Jim Hammes II";
                                                                        value = "perspiciatis";
                                                                    }}),
                                                                    add(new EnvironmentSetting() {{
                                                                        name = "Dr. Iris Hodkiewicz";
                                                                        value = "dolores";
                                                                    }}),
                                                                    add(new EnvironmentSetting() {{
                                                                        name = "Warren Greenholt";
                                                                        value = "quae";
                                                                    }}),
                                                                }};
                                                                maxTaskRetryCount = 925703;
                                                                resourceFiles = new org.openapis.openapi.models.shared.ResourceFile[]{{
                                                                    add(new ResourceFile() {{
                                                                        blobSource = "quaerat";
                                                                        filePath = "molestiae";
                                                                    }}),
                                                                    add(new ResourceFile() {{
                                                                        blobSource = "ex";
                                                                        filePath = "ut";
                                                                    }}),
                                                                    add(new ResourceFile() {{
                                                                        blobSource = "culpa";
                                                                        filePath = "adipisci";
                                                                    }}),
                                                                }};
                                                                runElevated = false;
                                                                waitForSuccess = false;
                                                            }};;
                                                            targetDedicated = 890653;
                                                            targetOSVersion = "laudantium";
                                                            taskSchedulingPolicy = new TaskSchedulingPolicy(TaskSchedulingPolicyNodeFillTypeEnum.PACK);;
                                                            vmSize = "nemo";
                                                        }};;
                                                    }};;
                                                    poolId = "recusandae";
                                                }};;
                                                priority = 456520;
                                                usesTaskDependencies = false;
                                            }};,                 new Schedule() {{
                                                doNotRunAfter = OffsetDateTime.parse("2022-04-29T15:23:46.044Z");
                                                doNotRunUntil = OffsetDateTime.parse("2022-01-11T18:28:30.775Z");
                                                recurrenceInterval = "provident";
                                                startWindow = "aspernatur";
                                            }};) {{
                                metadata = new org.openapis.openapi.models.shared.MetadataItem[]{{
                                    add(new MetadataItem() {{
                                        name = "Lynda Heathcote";
                                        value = "possimus";
                                    }}),
                                    add(new MetadataItem() {{
                                        name = "Dr. Reginald Hyatt";
                                        value = "ullam";
                                    }}),
                                }};
                            }};, "in", "nam") {{
                ifMatch = "earum";
                ifModifiedSince = "officia";
                ifNoneMatch = "laborum";
                ifUnmodifiedSince = "placeat";
                clientRequestId = "modi";
                ocpDate = "voluptatibus";
                returnClientRequestId = false;
                timeout = 564064;
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
