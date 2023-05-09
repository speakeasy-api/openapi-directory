# tasksClassic

## Overview

To change the description use /examples/TagsDescriptions.json

### Available Operations

* [addFile](#addfile) - Adds files to a given task.
* [delete14](#delete14) - Removes a task.
* [getContacts1](#getcontacts1) - Returns contacts of a given task.
* [getCustomFields7](#getcustomfields7) - Returns custom fields of a given task.
* [getDates3](#getdates3) - Returns dates of a given task.
* [getInstructions2](#getinstructions2) - Returns instructions of a given task.
* [getProgress](#getprogress) - Returns progress of a given task.
* [getTaskFiles](#gettaskfiles) - Returns lists of files of a given task.
* [start1](#start1) - Starts a task.
* [updateClientTaskPONumber](#updateclienttaskponumber) - Updates Client Task PO Number of a given task.
* [updateContacts1](#updatecontacts1) - Updates contacts of a given task.
* [updateCustomFields5](#updatecustomfields5) - Updates custom fields of a given task.
* [updateDates2](#updatedates2) - Updates dates of a given task.
* [updateInstructions3](#updateinstructions3) - Updates instructions of a given task.
* [updateName](#updatename) - Updates name of a given task.

## addFile

Adds files to a given task.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddFileRequest;
import org.openapis.openapi.models.operations.AddFileResponse;
import org.openapis.openapi.models.shared.FileDTO;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            AddFileRequest req = new AddFileRequest(                new FileDTO() {{
                                content = "adipisci";
                                name = "Harvey Harber";
                                token = "ab";
                                url = "beatae";
                            }};, "hic");            

            AddFileResponse res = sdk.tasksClassic.addFile(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## delete14

Removes a task.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Delete14Request;
import org.openapis.openapi.models.operations.Delete14Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            Delete14Request req = new Delete14Request("nisi") {{
                forceJobsRemoval = false;
                removeExternalProjects = false;
                removeFilesFromDisc = false;
            }};            

            Delete14Response res = sdk.tasksClassic.delete14(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getContacts1

Returns contacts of a given task.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetContacts1Request;
import org.openapis.openapi.models.operations.GetContacts1Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetContacts1Request req = new GetContacts1Request("quisquam");            

            GetContacts1Response res = sdk.tasksClassic.getContacts1(req);

            if (res.contactsDTO != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCustomFields7

Returns custom fields of a given task.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCustomFields7Request;
import org.openapis.openapi.models.operations.GetCustomFields7Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetCustomFields7Request req = new GetCustomFields7Request("dolor");            

            GetCustomFields7Response res = sdk.tasksClassic.getCustomFields7(req);

            if (res.customFieldsDTO != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDates3

Returns dates of a given task.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDates3Request;
import org.openapis.openapi.models.operations.GetDates3Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDates3Request req = new GetDates3Request("ducimus");            

            GetDates3Response res = sdk.tasksClassic.getDates3(req);

            if (res.projectDatesDTO != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getInstructions2

Returns instructions of a given task.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetInstructions2Request;
import org.openapis.openapi.models.operations.GetInstructions2Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetInstructions2Request req = new GetInstructions2Request("fuga");            

            GetInstructions2Response res = sdk.tasksClassic.getInstructions2(req);

            if (res.instructionsDTO != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getProgress

Returns progress of a given task. Progress contains information about task's status (ie. opened or ready) and current phase (ie. translation). Workflow phase is defined as the first one which contains not ready jobs (ie. opened or started). When no such job exists then workflow phase is not included.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProgressRequest;
import org.openapis.openapi.models.operations.GetProgressResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetProgressRequest req = new GetProgressRequest("minima");            

            GetProgressResponse res = sdk.tasksClassic.getProgress(req);

            if (res.taskProgressDTO != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTaskFiles

Returns several lists of files for a given task: input files divided by type, output files, bundles, files per job, preview files.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTaskFilesRequest;
import org.openapis.openapi.models.operations.GetTaskFilesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetTaskFilesRequest req = new GetTaskFilesRequest("architecto");            

            GetTaskFilesResponse res = sdk.tasksClassic.getTaskFiles(req);

            if (res.taskFilesDTO != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## start1

Starts a task.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Start1Request;
import org.openapis.openapi.models.operations.Start1Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            Start1Request req = new Start1Request("qui");            

            Start1Response res = sdk.tasksClassic.start1(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateClientTaskPONumber

Updates Client Task PO Number of a given task.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateClientTaskPONumberRequest;
import org.openapis.openapi.models.operations.UpdateClientTaskPONumberResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StringDTO;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateClientTaskPONumberRequest req = new UpdateClientTaskPONumberRequest(                new StringDTO() {{
                                value = "aliquid";
                            }};, "magni");            

            UpdateClientTaskPONumberResponse res = sdk.tasksClassic.updateClientTaskPONumber(req);

            if (res.stringDTO != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateContacts1

Updates contacts of a given task.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateContacts1Request;
import org.openapis.openapi.models.operations.UpdateContacts1Response;
import org.openapis.openapi.models.shared.ContactsDTO;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateContacts1Request req = new UpdateContacts1Request(                new ContactsDTO() {{
                                additionalIds = new Long[]{{
                                    add(240490L),
                                    add(506343L),
                                }};
                                primaryId = 220528L;
                                sendBackToId = 349898L;
                            }};, "expedita");            

            UpdateContacts1Response res = sdk.tasksClassic.updateContacts1(req);

            if (res.contactsDTO != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateCustomFields5

Updates custom fields of a given task.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateCustomFields5Request;
import org.openapis.openapi.models.operations.UpdateCustomFields5Response;
import org.openapis.openapi.models.shared.CustomFieldDTO;
import org.openapis.openapi.models.shared.CustomFieldDTOTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateCustomFields5Request req = new UpdateCustomFields5Request(                new org.openapis.openapi.models.shared.CustomFieldDTO[]{{
                                add(new CustomFieldDTO() {{
                                    key = "impedit";
                                    name = "Renee Nader";
                                    type = CustomFieldDTOTypeEnum.CHECKBOX;
                                    value = new java.util.HashMap<String, Object>() {{
                                        put("veniam", "quod");
                                        put("itaque", "a");
                                    }};
                                }}),
                                add(new CustomFieldDTO() {{
                                    key = "quisquam";
                                    name = "Ora Shields Jr.";
                                    type = CustomFieldDTOTypeEnum.CHECKBOX;
                                    value = new java.util.HashMap<String, Object>() {{
                                        put("nobis", "necessitatibus");
                                    }};
                                }}),
                                add(new CustomFieldDTO() {{
                                    key = "quia";
                                    name = "Kristin Mertz";
                                    type = CustomFieldDTOTypeEnum.TEXT;
                                    value = new java.util.HashMap<String, Object>() {{
                                        put("perferendis", "veritatis");
                                    }};
                                }}),
                            }}, "provident");            

            UpdateCustomFields5Response res = sdk.tasksClassic.updateCustomFields5(req);

            if (res.customFieldsDTO != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateDates2

Updates dates of a given task.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateDates2Request;
import org.openapis.openapi.models.operations.UpdateDates2Response;
import org.openapis.openapi.models.shared.ProjectDatesDTO;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TimeDTO;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateDates2Request req = new UpdateDates2Request(                new ProjectDatesDTO() {{
                                actualDeliveryDate = new TimeDTO() {{
                                    value = 765833L;
                                }};;
                                actualStartDate = new TimeDTO() {{
                                    value = 435531L;
                                }};;
                                deadline = new TimeDTO() {{
                                    value = 842402L;
                                }};;
                                startDate = new TimeDTO() {{
                                    value = 798690L;
                                }};;
                            }};, "nemo");            

            UpdateDates2Response res = sdk.tasksClassic.updateDates2(req);

            if (res.projectDatesDTO != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateInstructions3

Updates instructions of a given task.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateInstructions3Request;
import org.openapis.openapi.models.operations.UpdateInstructions3Response;
import org.openapis.openapi.models.shared.InstructionsDTO;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateInstructions3Request req = new UpdateInstructions3Request(                new InstructionsDTO() {{
                                forProvider = "recusandae";
                                fromCustomer = "velit";
                                internal = "magnam";
                                notes = "dignissimos";
                                paymentNoteForCustomer = "laboriosam";
                                paymentNoteForVendor = "sed";
                            }};, "odio");            

            UpdateInstructions3Response res = sdk.tasksClassic.updateInstructions3(req);

            if (res.instructionsDTO != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateName

Updates name of a given task.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNameRequest;
import org.openapis.openapi.models.operations.UpdateNameResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StringDTO;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNameRequest req = new UpdateNameRequest(                new StringDTO() {{
                                value = "natus";
                            }};, "provident");            

            UpdateNameResponse res = sdk.tasksClassic.updateName(req);

            if (res.stringDTO != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
