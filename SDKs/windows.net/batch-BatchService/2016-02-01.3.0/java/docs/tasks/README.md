# tasks

### Available Operations

* [taskAdd](#taskadd) - Adds a task to the specified job.
* [taskAddCollection](#taskaddcollection) - Adds a collection of tasks to the specified job.
* [taskDelete](#taskdelete) - Deletes a task from the specified job.
* [taskGet](#taskget) - Gets information about the specified task.
* [taskList](#tasklist) - Lists all of the tasks that are associated with the specified job.
* [taskListSubtasks](#tasklistsubtasks) - Lists all of the subtasks that are associated with the specified multi-instance task.
* [taskTerminate](#taskterminate) - Terminates the specified task.
* [taskUpdate](#taskupdate) - Updates the properties of the specified task.

## taskAdd

Adds a task to the specified job.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TaskAddRequest;
import org.openapis.openapi.models.operations.TaskAddResponse;
import org.openapis.openapi.models.shared.AffinityInformation;
import org.openapis.openapi.models.shared.EnvironmentSetting;
import org.openapis.openapi.models.shared.MultiInstanceSettings;
import org.openapis.openapi.models.shared.ResourceFile;
import org.openapis.openapi.models.shared.TaskAddParameter;
import org.openapis.openapi.models.shared.TaskConstraints;
import org.openapis.openapi.models.shared.TaskDependencies;
import org.openapis.openapi.models.shared.TaskIdRange;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TaskAddRequest req = new TaskAddRequest(                new TaskAddParameter("maxime", "modi") {{
                                affinityInfo = new AffinityInformation() {{
                                    affinityId = "consequuntur";
                                }};;
                                constraints = new TaskConstraints() {{
                                    maxTaskRetryCount = 828147;
                                    maxWallClockTime = "vero";
                                    retentionTime = "doloribus";
                                }};;
                                dependsOn = new TaskDependencies() {{
                                    taskIdRanges = new org.openapis.openapi.models.shared.TaskIdRange[]{{
                                        add(new TaskIdRange(518990, 969168) {{
                                            end = 783397;
                                            start = 883819;
                                        }}),
                                        add(new TaskIdRange(472414, 458412) {{
                                            end = 66074;
                                            start = 573444;
                                        }}),
                                        add(new TaskIdRange(202796, 895513) {{
                                            end = 438256;
                                            start = 485031;
                                        }}),
                                        add(new TaskIdRange(357758, 375350) {{
                                            end = 423588;
                                            start = 208683;
                                        }}),
                                    }};
                                    taskIds = new String[]{{
                                        add("officia"),
                                    }};
                                }};;
                                displayName = "reprehenderit";
                                environmentSettings = new org.openapis.openapi.models.shared.EnvironmentSetting[]{{
                                    add(new EnvironmentSetting() {{
                                        name = "Angela Lebsack II";
                                        value = "saepe";
                                    }}),
                                    add(new EnvironmentSetting() {{
                                        name = "Ernestine Hackett";
                                        value = "fugiat";
                                    }}),
                                    add(new EnvironmentSetting() {{
                                        name = "Mrs. Brendan Franecki";
                                        value = "illo";
                                    }}),
                                }};
                                multiInstanceSettings = new MultiInstanceSettings(997995) {{
                                    commonResourceFiles = new org.openapis.openapi.models.shared.ResourceFile[]{{
                                        add(new ResourceFile() {{
                                            blobSource = "doloribus";
                                            fileMode = "possimus";
                                            filePath = "unde";
                                        }}),
                                        add(new ResourceFile() {{
                                            blobSource = "incidunt";
                                            fileMode = "explicabo";
                                            filePath = "ipsam";
                                        }}),
                                    }};
                                    coordinationCommandLine = "cupiditate";
                                }};;
                                resourceFiles = new org.openapis.openapi.models.shared.ResourceFile[]{{
                                    add(new ResourceFile() {{
                                        blobSource = "alias";
                                        fileMode = "quidem";
                                        filePath = "nesciunt";
                                    }}),
                                    add(new ResourceFile() {{
                                        blobSource = "commodi";
                                        fileMode = "sapiente";
                                        filePath = "consequuntur";
                                    }}),
                                    add(new ResourceFile() {{
                                        blobSource = "veniam";
                                        fileMode = "debitis";
                                        filePath = "officia";
                                    }}),
                                    add(new ResourceFile() {{
                                        blobSource = "sint";
                                        fileMode = "ut";
                                        filePath = "numquam";
                                    }}),
                                }};
                                runElevated = false;
                            }};, "tenetur", "adipisci") {{
                clientRequestId = "libero";
                ocpDate = "in";
                returnClientRequestId = false;
                timeout = 329651;
            }};            

            TaskAddResponse res = sdk.tasks.taskAdd(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## taskAddCollection

Adds a collection of tasks to the specified job.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TaskAddCollectionRequest;
import org.openapis.openapi.models.operations.TaskAddCollectionResponse;
import org.openapis.openapi.models.shared.AffinityInformation;
import org.openapis.openapi.models.shared.EnvironmentSetting;
import org.openapis.openapi.models.shared.MultiInstanceSettings;
import org.openapis.openapi.models.shared.ResourceFile;
import org.openapis.openapi.models.shared.TaskAddCollectionParameter;
import org.openapis.openapi.models.shared.TaskAddParameter;
import org.openapis.openapi.models.shared.TaskConstraints;
import org.openapis.openapi.models.shared.TaskDependencies;
import org.openapis.openapi.models.shared.TaskIdRange;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TaskAddCollectionRequest req = new TaskAddCollectionRequest(                new TaskAddCollectionParameter(                new org.openapis.openapi.models.shared.TaskAddParameter[]{{
                                                add(new TaskAddParameter("id", "saepe") {{
                                                    affinityInfo = new AffinityInformation() {{
                                                        affinityId = "minus";
                                                    }};
                                                    commandLine = "ab";
                                                    constraints = new TaskConstraints() {{
                                                        maxTaskRetryCount = 108165;
                                                        maxWallClockTime = "hic";
                                                        retentionTime = "nisi";
                                                    }};
                                                    dependsOn = new TaskDependencies() {{
                                                        taskIdRanges = new org.openapis.openapi.models.shared.TaskIdRange[]{{
                                                            add(new TaskIdRange(683727, 326903) {{
                                                                end = 221218;
                                                                start = 496548;
                                                            }}),
                                                            add(new TaskIdRange(397026, 166289) {{
                                                                end = 102446;
                                                                start = 181476;
                                                            }}),
                                                            add(new TaskIdRange(506343, 220528) {{
                                                                end = 276650;
                                                                start = 240490;
                                                            }}),
                                                            add(new TaskIdRange(706411, 769634) {{
                                                                end = 349898;
                                                                start = 709701;
                                                            }}),
                                                        }};
                                                        taskIds = new String[]{{
                                                            add("nemo"),
                                                        }};
                                                    }};
                                                    displayName = "culpa";
                                                    environmentSettings = new org.openapis.openapi.models.shared.EnvironmentSetting[]{{
                                                        add(new EnvironmentSetting() {{
                                                            name = "Rosie Glover";
                                                            value = "itaque";
                                                        }}),
                                                    }};
                                                    id = "fc5fde10-a0ce-4216-9e51-0019c6dc5e34";
                                                    multiInstanceSettings = new MultiInstanceSettings(697330) {{
                                                        commonResourceFiles = new org.openapis.openapi.models.shared.ResourceFile[]{{
                                                            add(new ResourceFile() {{
                                                                blobSource = "laboriosam";
                                                                fileMode = "sed";
                                                                filePath = "odio";
                                                            }}),
                                                            add(new ResourceFile() {{
                                                                blobSource = "natus";
                                                                fileMode = "provident";
                                                                filePath = "cum";
                                                            }}),
                                                        }};
                                                        coordinationCommandLine = "doloribus";
                                                        numberOfInstances = 703966;
                                                    }};
                                                    resourceFiles = new org.openapis.openapi.models.shared.ResourceFile[]{{
                                                        add(new ResourceFile() {{
                                                            blobSource = "laboriosam";
                                                            fileMode = "unde";
                                                            filePath = "modi";
                                                        }}),
                                                        add(new ResourceFile() {{
                                                            blobSource = "perspiciatis";
                                                            fileMode = "hic";
                                                            filePath = "cum";
                                                        }}),
                                                        add(new ResourceFile() {{
                                                            blobSource = "aspernatur";
                                                            fileMode = "libero";
                                                            filePath = "nam";
                                                        }}),
                                                        add(new ResourceFile() {{
                                                            blobSource = "incidunt";
                                                            fileMode = "recusandae";
                                                            filePath = "quod";
                                                        }}),
                                                    }};
                                                    runElevated = false;
                                                }}),
                                                add(new TaskAddParameter("eligendi", "quasi") {{
                                                    affinityInfo = new AffinityInformation() {{
                                                        affinityId = "autem";
                                                    }};
                                                    commandLine = "quo";
                                                    constraints = new TaskConstraints() {{
                                                        maxTaskRetryCount = 198991;
                                                        maxWallClockTime = "illum";
                                                        retentionTime = "nemo";
                                                    }};
                                                    dependsOn = new TaskDependencies() {{
                                                        taskIdRanges = new org.openapis.openapi.models.shared.TaskIdRange[]{{
                                                            add(new TaskIdRange(649534, 827051) {{
                                                                end = 706872;
                                                                start = 247618;
                                                            }}),
                                                            add(new TaskIdRange(866861, 323365) {{
                                                                end = 927977;
                                                                start = 718981;
                                                            }}),
                                                            add(new TaskIdRange(911451, 673191) {{
                                                                end = 816151;
                                                                start = 674683;
                                                            }}),
                                                            add(new TaskIdRange(369523, 60) {{
                                                                end = 276337;
                                                                start = 802356;
                                                            }}),
                                                        }};
                                                        taskIds = new String[]{{
                                                            add("deserunt"),
                                                            add("molestias"),
                                                        }};
                                                    }};
                                                    displayName = "laborum";
                                                    environmentSettings = new org.openapis.openapi.models.shared.EnvironmentSetting[]{{
                                                        add(new EnvironmentSetting() {{
                                                            name = "Mr. Leroy Sanford";
                                                            value = "magnam";
                                                        }}),
                                                        add(new EnvironmentSetting() {{
                                                            name = "Lynne Weissnat";
                                                            value = "unde";
                                                        }}),
                                                        add(new EnvironmentSetting() {{
                                                            name = "Jeremiah O'Hara";
                                                            value = "esse";
                                                        }}),
                                                    }};
                                                    id = "8adc1ac6-00de-4c00-9ac8-02e2ec09ff8f";
                                                    multiInstanceSettings = new MultiInstanceSettings(985360) {{
                                                        commonResourceFiles = new org.openapis.openapi.models.shared.ResourceFile[]{{
                                                            add(new ResourceFile() {{
                                                                blobSource = "asperiores";
                                                                fileMode = "rem";
                                                                filePath = "dicta";
                                                            }}),
                                                        }};
                                                        coordinationCommandLine = "suscipit";
                                                        numberOfInstances = 938257;
                                                    }};
                                                    resourceFiles = new org.openapis.openapi.models.shared.ResourceFile[]{{
                                                        add(new ResourceFile() {{
                                                            blobSource = "eius";
                                                            fileMode = "esse";
                                                            filePath = "in";
                                                        }}),
                                                    }};
                                                    runElevated = false;
                                                }}),
                                            }});, "neque", "vero") {{
                clientRequestId = "excepturi";
                ocpDate = "accusantium";
                returnClientRequestId = false;
                timeout = 185816;
            }};            

            TaskAddCollectionResponse res = sdk.tasks.taskAddCollection(req);

            if (res.taskAddCollectionResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## taskDelete

Deletes a task from the specified job.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TaskDeleteRequest;
import org.openapis.openapi.models.operations.TaskDeleteResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TaskDeleteRequest req = new TaskDeleteRequest("impedit", "beatae", "incidunt") {{
                ifMatch = "dicta";
                ifModifiedSince = "odit";
                ifNoneMatch = "corporis";
                ifUnmodifiedSince = "rerum";
                clientRequestId = "alias";
                ocpDate = "error";
                returnClientRequestId = false;
                timeout = 424854;
            }};            

            TaskDeleteResponse res = sdk.tasks.taskDelete(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## taskGet

Gets information about the specified task.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TaskGetRequest;
import org.openapis.openapi.models.operations.TaskGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TaskGetRequest req = new TaskGetRequest("accusantium", "id", "laboriosam") {{
                dollarExpand = "ex";
                dollarSelect = "quas";
                ifMatch = "veritatis";
                ifModifiedSince = "ullam";
                ifNoneMatch = "quae";
                ifUnmodifiedSince = "similique";
                clientRequestId = "incidunt";
                ocpDate = "quam";
                returnClientRequestId = false;
                timeout = 169312;
            }};            

            TaskGetResponse res = sdk.tasks.taskGet(req);

            if (res.cloudTask != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## taskList

Lists all of the tasks that are associated with the specified job.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TaskListRequest;
import org.openapis.openapi.models.operations.TaskListResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TaskListRequest req = new TaskListRequest("deserunt", "delectus") {{
                dollarExpand = "omnis";
                dollarFilter = "sed";
                dollarSelect = "nesciunt";
                clientRequestId = "maxime";
                maxresults = 337841;
                ocpDate = "cupiditate";
                returnClientRequestId = false;
                timeout = 303253;
            }};            

            TaskListResponse res = sdk.tasks.taskList(req);

            if (res.cloudTaskListResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## taskListSubtasks

Lists all of the subtasks that are associated with the specified multi-instance task.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TaskListSubtasksRequest;
import org.openapis.openapi.models.operations.TaskListSubtasksResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TaskListSubtasksRequest req = new TaskListSubtasksRequest("excepturi", "maiores", "laudantium") {{
                dollarSelect = "velit";
                clientRequestId = "reiciendis";
                ocpDate = "amet";
                returnClientRequestId = false;
                timeout = 363845;
            }};            

            TaskListSubtasksResponse res = sdk.tasks.taskListSubtasks(req);

            if (res.cloudTaskListSubtasksResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## taskTerminate

Terminates the specified task.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TaskTerminateRequest;
import org.openapis.openapi.models.operations.TaskTerminateResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TaskTerminateRequest req = new TaskTerminateRequest("ipsa", "quisquam", "tenetur") {{
                ifMatch = "quas";
                ifModifiedSince = "molestiae";
                ifNoneMatch = "aliquid";
                ifUnmodifiedSince = "asperiores";
                clientRequestId = "a";
                ocpDate = "nobis";
                returnClientRequestId = false;
                timeout = 598316;
            }};            

            TaskTerminateResponse res = sdk.tasks.taskTerminate(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## taskUpdate

Updates the properties of the specified task.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TaskUpdateRequest;
import org.openapis.openapi.models.operations.TaskUpdateResponse;
import org.openapis.openapi.models.shared.TaskConstraints;
import org.openapis.openapi.models.shared.TaskUpdateParameter;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TaskUpdateRequest req = new TaskUpdateRequest(                new TaskUpdateParameter() {{
                                constraints = new TaskConstraints() {{
                                    maxTaskRetryCount = 34245;
                                    maxWallClockTime = "dicta";
                                    retentionTime = "minus";
                                }};;
                            }};, "commodi", "eveniet", "porro") {{
                ifMatch = "tempore";
                ifModifiedSince = "quidem";
                ifNoneMatch = "modi";
                ifUnmodifiedSince = "voluptates";
                clientRequestId = "fugit";
                ocpDate = "eius";
                returnClientRequestId = false;
                timeout = 194058;
            }};            

            TaskUpdateResponse res = sdk.tasks.taskUpdate(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
