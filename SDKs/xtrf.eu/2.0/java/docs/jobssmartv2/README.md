# jobsSmartV2

## Overview

To change the description use /examples/TagsDescriptions.json

### Available Operations

* [addExternalFileLink](#addexternalfilelink)
* [addFileLinks](#addfilelinks) - Adds file link to the project as a link delivered in the job.
* [addFiles](#addfiles) - Adds files to the project as delivered in the job.
* [assignVendor1](#assignvendor1) - Assigns vendor to a job in a project.
* [changeDates](#changedates) - Updates dates of a given job.
* [changeStatus1](#changestatus1) - Changes job status if possible (400 Bad Request is returned otherwise).
* [getByExternalId](#getbyexternalid)
* [getDeliveredFiles](#getdeliveredfiles) - Returns list of files delivered in the job.
* [getFileById1](#getfilebyid1) - Returns details for a job.
* [getSharedReferenceFiles](#getsharedreferencefiles) - Returns list of files shared with the job as Reference Files.
* [getSharedWorkFiles](#getsharedworkfiles) - Returns list of files shared with the job as Work Files.
* [shareAsReferenceFiles](#shareasreferencefiles) - Shares selected files as Reference Files with a job in a project.
* [shareAsWorkFiles](#shareasworkfiles) - Shares selected files as Work Files with a job in a project.
* [stopSharing](#stopsharing) - Stops sharing selected files with a job in a project.
* [updateInstructions4](#updateinstructions4) - Updates instructions for a job.
* [uploadFile1](#uploadfile1) - Uploads file to the project as a file delivered in the job.

## addExternalFileLink

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddExternalFileLinkRequest;
import org.openapis.openapi.models.operations.AddExternalFileLinkResponse;
import org.openapis.openapi.models.shared.ExternalFileDto;
import org.openapis.openapi.models.shared.LanguageCombinationDto;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            AddExternalFileLinkRequest req = new AddExternalFileLinkRequest(                new ExternalFileDto() {{
                                category = "totam";
                                externalInfo = new java.util.HashMap<String, String>() {{
                                    put("molestiae", "eveniet");
                                }};
                                filename = "qui";
                                languageCombinationIds = new org.openapis.openapi.models.shared.LanguageCombinationDto[]{{
                                    add(new LanguageCombinationDto() {{
                                        sourceLanguageId = 434761L;
                                        targetLanguageId = 898063L;
                                    }}),
                                    add(new LanguageCombinationDto() {{
                                        sourceLanguageId = 187552L;
                                        targetLanguageId = 672582L;
                                    }}),
                                    add(new LanguageCombinationDto() {{
                                        sourceLanguageId = 715208L;
                                        targetLanguageId = 528940L;
                                    }}),
                                }};
                                languageIds = new Long[]{{
                                    add(304446L),
                                    add(320565L),
                                    add(997963L),
                                }};
                            }};, "alias");            

            AddExternalFileLinkResponse res = sdk.jobsSmartV2.addExternalFileLink(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## addFileLinks

Adds file link to the project as a link delivered in the job. The following properties can be specified for each file link:<ul><li>url (required, 400 Bad Request is returned otherwise)</li><li>category (required, 400 Bad Request is returned otherwise)</li><li>languageIds – when the file category depends on a list of languages</li><li>languageCombinationIds – when the file category depends on a list of language combinations</li></ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddFileLinksRequest;
import org.openapis.openapi.models.operations.AddFileLinksResponse;
import org.openapis.openapi.models.shared.FileLinkCategorizationDto;
import org.openapis.openapi.models.shared.FileLinkCategorizationsDto;
import org.openapis.openapi.models.shared.LanguageCombinationDto;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            AddFileLinksRequest req = new AddFileLinksRequest(                new FileLinkCategorizationsDto() {{
                                fileLinks = new org.openapis.openapi.models.shared.FileLinkCategorizationDto[]{{
                                    add(new FileLinkCategorizationDto() {{
                                        category = "perspiciatis";
                                        externalInfo = new java.util.HashMap<String, String>() {{
                                            put("mollitia", "voluptas");
                                            put("alias", "maiores");
                                        }};
                                        filename = "reiciendis";
                                        languageCombinationIds = new org.openapis.openapi.models.shared.LanguageCombinationDto[]{{
                                            add(new LanguageCombinationDto() {{
                                                sourceLanguageId = 663866L;
                                                targetLanguageId = 327988L;
                                            }}),
                                        }};
                                        languageIds = new Long[]{{
                                            add(680349L),
                                            add(200364L),
                                        }};
                                        toBeGenerated = false;
                                        url = "quae";
                                    }}),
                                    add(new FileLinkCategorizationDto() {{
                                        category = "recusandae";
                                        externalInfo = new java.util.HashMap<String, String>() {{
                                            put("quaerat", "molestiae");
                                            put("ex", "ut");
                                            put("culpa", "adipisci");
                                        }};
                                        filename = "debitis";
                                        languageCombinationIds = new org.openapis.openapi.models.shared.LanguageCombinationDto[]{{
                                            add(new LanguageCombinationDto() {{
                                                sourceLanguageId = 432606L;
                                                targetLanguageId = 367927L;
                                            }}),
                                            add(new LanguageCombinationDto() {{
                                                sourceLanguageId = 928219L;
                                                targetLanguageId = 456520L;
                                            }}),
                                            add(new LanguageCombinationDto() {{
                                                sourceLanguageId = 592081L;
                                                targetLanguageId = 337477L;
                                            }}),
                                        }};
                                        languageIds = new Long[]{{
                                            add(970494L),
                                            add(592780L),
                                        }};
                                        toBeGenerated = false;
                                        url = "aspernatur";
                                    }}),
                                }};
                            }};, "ullam");            

            AddFileLinksResponse res = sdk.jobsSmartV2.addFileLinks(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## addFiles

Adds files to the project as delivered in the job. The files have to be uploaded beforehand (see "POST /jobs/{jobId}/files/upload" operation). The following properties can be specified for each file:<ul><li>category (required, 400 Bad Request is returned otherwise)</li><li>languageIds – when the file category depends on a list of languages</li><li>languageCombinationIds – when the file category depends on a list of language combinations</li></ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddFilesRequest;
import org.openapis.openapi.models.operations.AddFilesResponse;
import org.openapis.openapi.models.shared.FileCategorizationDto;
import org.openapis.openapi.models.shared.FileCategorizationsDto;
import org.openapis.openapi.models.shared.LanguageCombinationDto;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            AddFilesRequest req = new AddFilesRequest(                new FileCategorizationsDto() {{
                                files = new org.openapis.openapi.models.shared.FileCategorizationDto[]{{
                                    add(new FileCategorizationDto() {{
                                        category = "animi";
                                        fileId = "nostrum";
                                        languageCombinationIds = new org.openapis.openapi.models.shared.LanguageCombinationDto[]{{
                                            add(new LanguageCombinationDto() {{
                                                sourceLanguageId = 591027L;
                                                targetLanguageId = 821719L;
                                            }}),
                                            add(new LanguageCombinationDto() {{
                                                sourceLanguageId = 659177L;
                                                targetLanguageId = 402767L;
                                            }}),
                                            add(new LanguageCombinationDto() {{
                                                sourceLanguageId = 397257L;
                                                targetLanguageId = 37565L;
                                            }}),
                                        }};
                                        languageIds = new Long[]{{
                                            add(984632L),
                                            add(351893L),
                                            add(448143L),
                                            add(721407L),
                                        }};
                                    }}),
                                }};
                            }};, "earum");            

            AddFilesResponse res = sdk.jobsSmartV2.addFiles(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## assignVendor1

Assigns vendor to a job in a project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssignVendor1Request;
import org.openapis.openapi.models.operations.AssignVendor1Response;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.VendorPriceProfileDTO;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssignVendor1Request req = new AssignVendor1Request(                new VendorPriceProfileDTO() {{
                                vendorPriceProfileId = 637583L;
                            }};, "laborum");            

            AssignVendor1Response res = sdk.jobsSmartV2.assignVendor1(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## changeDates

Updates dates of a given job.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ChangeDatesRequest;
import org.openapis.openapi.models.operations.ChangeDatesResponse;
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

            ChangeDatesRequest req = new ChangeDatesRequest(                new JobDatesDto() {{
                                actualEndDate = 813054L;
                                actualStartDate = 266697L;
                                deadline = 976226L;
                                startDate = 564064L;
                            }};, "officiis");            

            ChangeDatesResponse res = sdk.jobsSmartV2.changeDates(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## changeStatus1

Changes job status if possible (400 Bad Request is returned otherwise). The status has to be specified using one of the following keys:<ul><li>OPEN – available when the job has one of the following statuses: ACCEPTED, CANCELED</li><li>ACCEPTED – available when the job has one of the following statuses: OPEN (Vendor and dates have to be set before calling the operation), STARTED</li><li>STARTED – available when the job has one of the following statuses: ACCEPTED, READY</li><li>READY – available when the job has one of the following statuses: STARTED</li><li>CANCELLED – available when the job has one of the following statuses: OPEN, ACCEPTED, STARTED, OFFERS_SENT</li><li>OFFERS_SENT – not available as a target status for this operation</li></ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ChangeStatus1Request;
import org.openapis.openapi.models.operations.ChangeStatus1Response;
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

            ChangeStatus1Request req = new ChangeStatus1Request(                new JobStatusDTO() {{
                                externalId = "sapiente";
                                status = "cumque";
                            }};, "vitae");            

            ChangeStatus1Response res = sdk.jobsSmartV2.changeStatus1(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getByExternalId

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetByExternalIdRequest;
import org.openapis.openapi.models.operations.GetByExternalIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetByExternalIdRequest req = new GetByExternalIdRequest() {{
                externalId = "rerum";
                externalProjectId = "tempora";
            }};            

            GetByExternalIdResponse res = sdk.jobsSmartV2.getByExternalId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeliveredFiles

Returns list of files delivered in the job.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeliveredFilesRequest;
import org.openapis.openapi.models.operations.GetDeliveredFilesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeliveredFilesRequest req = new GetDeliveredFilesRequest("quis");            

            GetDeliveredFilesResponse res = sdk.jobsSmartV2.getDeliveredFiles(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getFileById1

Returns details for a job.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFileById1Request;
import org.openapis.openapi.models.operations.GetFileById1Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetFileById1Request req = new GetFileById1Request("inventore");            

            GetFileById1Response res = sdk.jobsSmartV2.getFileById1(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSharedReferenceFiles

Returns list of files shared with the job as Reference Files.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSharedReferenceFilesRequest;
import org.openapis.openapi.models.operations.GetSharedReferenceFilesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSharedReferenceFilesRequest req = new GetSharedReferenceFilesRequest("fugit");            

            GetSharedReferenceFilesResponse res = sdk.jobsSmartV2.getSharedReferenceFiles(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSharedWorkFiles

Returns list of files shared with the job as Work Files.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSharedWorkFilesRequest;
import org.openapis.openapi.models.operations.GetSharedWorkFilesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSharedWorkFilesRequest req = new GetSharedWorkFilesRequest("cumque");            

            GetSharedWorkFilesResponse res = sdk.jobsSmartV2.getSharedWorkFiles(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## shareAsReferenceFiles

Shares selected files as Reference Files with a job in a project. The files and the job have to be part of the same project. The operation is finished successfully even if some of the selected files were already shared with the job. If a file was shared with the job as Work File, it will now be shared as Reference File (and not as Work File).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ShareAsReferenceFilesRequest;
import org.openapis.openapi.models.operations.ShareAsReferenceFilesResponse;
import org.openapis.openapi.models.shared.FilesDto;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            ShareAsReferenceFilesRequest req = new ShareAsReferenceFilesRequest(                new FilesDto() {{
                                files = new String[]{{
                                    add("perferendis"),
                                }};
                            }};, "velit");            

            ShareAsReferenceFilesResponse res = sdk.jobsSmartV2.shareAsReferenceFiles(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## shareAsWorkFiles

Shares selected files as Work Files with a job in a project. The files and the job have to be part of the same project. The operation is finished successfully even if some of the selected files were already shared with the job. If a file was shared with the job as Reference File, it will now be shared as Work File (and not as Reference File).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ShareAsWorkFilesRequest;
import org.openapis.openapi.models.operations.ShareAsWorkFilesResponse;
import org.openapis.openapi.models.shared.FilesDto;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            ShareAsWorkFilesRequest req = new ShareAsWorkFilesRequest(                new FilesDto() {{
                                files = new String[]{{
                                    add("eum"),
                                }};
                            }};, "eius");            

            ShareAsWorkFilesResponse res = sdk.jobsSmartV2.shareAsWorkFiles(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## stopSharing

Stops sharing selected files with a job in a project. The files and the job have to be part of the same project. The operation is finished successfully even if some of the selected files were not shared with the job.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StopSharingRequest;
import org.openapis.openapi.models.operations.StopSharingResponse;
import org.openapis.openapi.models.shared.FilesDto;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            StopSharingRequest req = new StopSharingRequest(                new FilesDto() {{
                                files = new String[]{{
                                    add("at"),
                                    add("impedit"),
                                    add("eos"),
                                }};
                            }};, "sapiente");            

            StopSharingResponse res = sdk.jobsSmartV2.stopSharing(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateInstructions4

Updates instructions for a job. See also "PUT /projects/{projectId}/vendorInstructions" and "PUT /quotes/{quoteId}/vendorInstructions" for updating instructions for all jobs in a project or quote.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateInstructions4Request;
import org.openapis.openapi.models.operations.UpdateInstructions4Response;
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

            UpdateInstructions4Request req = new UpdateInstructions4Request(                new StringDTO() {{
                                value = "eum";
                            }};, "dicta");            

            UpdateInstructions4Response res = sdk.jobsSmartV2.updateInstructions4(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## uploadFile1

Uploads file to the project as a file delivered in the job. Only one file can be uploaded at once. When the upload is finished the file has to be added by specifying its category and languages (see "PUT /jobs/{jobId}/files/add" operation).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UploadFile1Request;
import org.openapis.openapi.models.operations.UploadFile1Response;
import org.openapis.openapi.models.shared.FileToUploadDto;
import org.openapis.openapi.models.shared.FileToUploadDtoFile;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            UploadFile1Request req = new UploadFile1Request(                new FileToUploadDto() {{
                                file = new FileToUploadDtoFile("minima".getBytes(), "beatae");;
                            }};, "cupiditate");            

            UploadFile1Response res = sdk.jobsSmartV2.uploadFile1(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
