# jobsClassic

## Overview

To change the description use /examples/TagsDescriptions.json

### Available Operations

* [assignFileToJobOutput](#assignfiletojoboutput)
* [assignVendor](#assignvendor) - Assigns vendor to a job in a project.
* [changeStatus](#changestatus) - Changes job status if possible (400 Bad Request is returned otherwise).
* [getJobDetails](#getjobdetails) - Returns job details by jobId.
* [getJobFiles](#getjobfiles) - Returns list of input and output files of a job.
* [getJobFiles1](#getjobfiles1) - Returns file metadata.
* [updateDates](#updatedates) - Updates dates of a given job.
* [updateInstructions](#updateinstructions) - Updates instructions for a job.

## assignFileToJobOutput

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssignFileToJobOutputRequest;
import org.openapis.openapi.models.operations.AssignFileToJobOutputResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TaskFileDTO;
import org.openapis.openapi.models.shared.TaskFileDTOCategoryEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssignFileToJobOutputRequest req = new AssignFileToJobOutputRequest(                new TaskFileDTO() {{
                                category = TaskFileDTOCategoryEnum.WORKFILE;
                                content = "enim";
                                name = "Sheila Wilderman";
                                token = "saepe";
                                url = "consequuntur";
                            }};, "occaecati");            

            AssignFileToJobOutputResponse res = sdk.jobsClassic.assignFileToJobOutput(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## assignVendor

Assigns vendor to a job in a project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssignVendorRequest;
import org.openapis.openapi.models.operations.AssignVendorResponse;
import org.openapis.openapi.models.shared.AssignVendorDTO;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssignVendorRequest req = new AssignVendorRequest(                new AssignVendorDTO() {{
                                recalculateRates = false;
                                vendorPriceProfileId = 886305L;
                            }};, "perspiciatis");            

            AssignVendorResponse res = sdk.jobsClassic.assignVendor(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## changeStatus

Changes job status if possible (400 Bad Request is returned otherwise). The status has to be specified using one of the following keys:<ul><li>OPEN – available when the job has one of the following statuses: ACCEPTED, CANCELED</li><li>ACCEPTED – available when the job has one of the following statuses: OPEN (Vendor and dates have to be set before calling the operation), STARTED</li><li>STARTED – available when the job has one of the following statuses: ACCEPTED, READY</li><li>READY – available when the job has one of the following statuses: STARTED</li><li>CANCELLED – available when the job has one of the following statuses: OPEN, ACCEPTED, STARTED, OFFERS_SENT</li><li>OFFERS_SENT – not available as a target status for this operation</li></ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ChangeStatusRequest;
import org.openapis.openapi.models.operations.ChangeStatusResponse;
import org.openapis.openapi.models.shared.JobStatusDTO;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            ChangeStatusRequest req = new ChangeStatusRequest(                new JobStatusDTO() {{
                                externalId = "in";
                                status = "adipisci";
                            }};, "eveniet");            

            ChangeStatusResponse res = sdk.jobsClassic.changeStatus(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getJobDetails

Returns job details by jobId.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetJobDetailsRequest;
import org.openapis.openapi.models.operations.GetJobDetailsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetJobDetailsRequest req = new GetJobDetailsRequest("occaecati");            

            GetJobDetailsResponse res = sdk.jobsClassic.getJobDetails(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getJobFiles

Returns list of input and output files of a job.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetJobFilesRequest;
import org.openapis.openapi.models.operations.GetJobFilesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetJobFilesRequest req = new GetJobFilesRequest("consequuntur");            

            GetJobFilesResponse res = sdk.jobsClassic.getJobFiles(req);

            if (res.jobFilesDTO != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getJobFiles1

Returns file metadata.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetJobFiles1Request;
import org.openapis.openapi.models.operations.GetJobFiles1Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetJobFiles1Request req = new GetJobFiles1Request(145870L, "id");            

            GetJobFiles1Response res = sdk.jobsClassic.getJobFiles1(req);

            if (res.fileMetadataDTO != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateDates

Updates dates of a given job.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateDatesRequest;
import org.openapis.openapi.models.operations.UpdateDatesResponse;
import org.openapis.openapi.models.shared.JobDatesDto;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateDatesRequest req = new UpdateDatesRequest(                new JobDatesDto() {{
                                actualEndDate = 335631L;
                                actualStartDate = 440264L;
                                deadline = 625528L;
                                startDate = 76486L;
                            }};, "corporis");            

            UpdateDatesResponse res = sdk.jobsClassic.updateDates(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateInstructions

Updates instructions for a job.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateInstructionsRequest;
import org.openapis.openapi.models.operations.UpdateInstructionsResponse;
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

            UpdateInstructionsRequest req = new UpdateInstructionsRequest(                new InstructionsDTO() {{
                                forProvider = "quidem";
                                fromCustomer = "eveniet";
                                internal = "non";
                                notes = "vero";
                                paymentNoteForCustomer = "doloremque";
                                paymentNoteForVendor = "iure";
                            }};, "ipsa");            

            UpdateInstructionsResponse res = sdk.jobsClassic.updateInstructions(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
