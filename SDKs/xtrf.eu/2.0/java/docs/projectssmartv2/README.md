# projectsSmartV2

## Overview

To change the description use /examples/TagsDescriptions.json

### Available Operations

* [addExternalFileLinks](#addexternalfilelinks)
* [addFileLinks1](#addfilelinks1) - Adds file links to the project as added by PM.
* [addFiles1](#addfiles1) - Adds files to the project as added by PM.
* [addJobToProcess](#addjobtoprocess) - Returns process id.
* [archive](#archive) - Prepares a ZIP archive that contains the specified files.
* [changeStatus2](#changestatus2) - Changes project status if possible (400 Bad Request is returned otherwise).
* [createPayable2](#createpayable2) - Adds a payable to a project.
* [createReceivable2](#createreceivable2) - Adds a receivable to a project.
* [create6](#create6) - Creates a new Smart Project.
* [deletePayable2](#deletepayable2) - Deletes a payable.
* [deleteReceivable2](#deletereceivable2) - Deletes a receivable.
* [getByExternalId1](#getbyexternalid1) - Returns project details.
* [getById9](#getbyid9) - Returns project details.
* [getCATToolProjectInfo](#getcattoolprojectinfo) - Returns if cat tool project is created or queued.
* [getContacts2](#getcontacts2) - Returns Client Contacts information for a project.
* [getCustomFields8](#getcustomfields8) - Returns a list of custom field keys and values for a project.
* [getDeliverableFiles](#getdeliverablefiles) - Returns list of files in a project, that are ready to be delivered to client.
* [getFileById2](#getfilebyid2) - Returns details of a file.
* [getFileContentById](#getfilecontentbyid) - Downloads a file content.
* [getFiles](#getfiles) - Returns list of files in a project.
* [getFinance2](#getfinance2) - Returns finance information for a project.
* [getJobs](#getjobs) - Returns list of jobs in a project.
* [getProcessId](#getprocessid) - Returns process id.
* [updateClientDeadline](#updateclientdeadline) - Updates Client Deadline for a project.
* [updateClientNotes](#updateclientnotes) - Updates Client Notes for a project.
* [updateClientReferenceNumber](#updateclientreferencenumber) - Updates Client Reference Number for a project.
* [updateContacts2](#updatecontacts2) - Updates Client Contacts for a project.
* [updateCustomField2](#updatecustomfield2) - Updates a custom field with a specified key in a project
* [updateInternalNotes](#updateinternalnotes) - Updates Internal Notes for a project.
* [updateOrderedOn](#updateorderedon) - Updates Order Date for a project.
* [updatePayable2](#updatepayable2) - Updates a payable.
* [updateReceivable2](#updatereceivable2) - Updates a receivable.
* [updateSourceLanguage](#updatesourcelanguage) - Updates source language for a project.
* [updateSpecialization](#updatespecialization) - Updates specialization for a project.
* [updateTargetLanguages](#updatetargetlanguages) - Updates target languages for a project.
* [updateVendorInstructions](#updatevendorinstructions) - Updates instructions for all vendors performing the jobs in a project.
* [updateVolume](#updatevolume) - Updates volume for a project.
* [uploadFile2](#uploadfile2) - Uploads file to the project as a file uploaded by PM.

## addExternalFileLinks

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddExternalFileLinksRequest;
import org.openapis.openapi.models.operations.AddExternalFileLinksResponse;
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

            AddExternalFileLinksRequest req = new AddExternalFileLinksRequest(                new ExternalFileDto() {{
                                category = "laborum";
                                externalInfo = new java.util.HashMap<String, String>() {{
                                    put("dolor", "iusto");
                                    put("sit", "doloremque");
                                }};
                                filename = "consequatur";
                                languageCombinationIds = new org.openapis.openapi.models.shared.LanguageCombinationDto[]{{
                                    add(new LanguageCombinationDto() {{
                                        sourceLanguageId = 927403L;
                                        targetLanguageId = 408303L;
                                    }}),
                                    add(new LanguageCombinationDto() {{
                                        sourceLanguageId = 693153L;
                                        targetLanguageId = 377406L;
                                    }}),
                                    add(new LanguageCombinationDto() {{
                                        sourceLanguageId = 705148L;
                                        targetLanguageId = 809365L;
                                    }}),
                                }};
                                languageIds = new Long[]{{
                                    add(709036L),
                                    add(537236L),
                                    add(954334L),
                                }};
                            }};, "voluptate");            

            AddExternalFileLinksResponse res = sdk.projectsSmartV2.addExternalFileLinks(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## addFileLinks1

Adds file links to the project as added by PM. The following properties can be specified for each file link:<ul><li>url (required, 400 Bad Request is returned otherwise)</li><li>category (required, 400 Bad Request is returned otherwise)</li><li>languageIds – when the file category depends on a list of languages</li><li>languageCombinationIds – when the file category depends on a list of language combinations</li></ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddFileLinks1Request;
import org.openapis.openapi.models.operations.AddFileLinks1Response;
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

            AddFileLinks1Request req = new AddFileLinks1Request(                new FileLinkCategorizationsDto() {{
                                fileLinks = new org.openapis.openapi.models.shared.FileLinkCategorizationDto[]{{
                                    add(new FileLinkCategorizationDto() {{
                                        category = "unde";
                                        externalInfo = new java.util.HashMap<String, String>() {{
                                            put("animi", "impedit");
                                            put("ipsam", "corporis");
                                            put("est", "error");
                                            put("esse", "labore");
                                        }};
                                        filename = "veritatis";
                                        languageCombinationIds = new org.openapis.openapi.models.shared.LanguageCombinationDto[]{{
                                            add(new LanguageCombinationDto() {{
                                                sourceLanguageId = 233173L;
                                                targetLanguageId = 112427L;
                                            }}),
                                            add(new LanguageCombinationDto() {{
                                                sourceLanguageId = 81371L;
                                                targetLanguageId = 212434L;
                                            }}),
                                            add(new LanguageCombinationDto() {{
                                                sourceLanguageId = 322017L;
                                                targetLanguageId = 183033L;
                                            }}),
                                            add(new LanguageCombinationDto() {{
                                                sourceLanguageId = 611328L;
                                                targetLanguageId = 403026L;
                                            }}),
                                        }};
                                        languageIds = new Long[]{{
                                            add(745233L),
                                            add(726227L),
                                        }};
                                        toBeGenerated = false;
                                        url = "rem";
                                    }}),
                                    add(new FileLinkCategorizationDto() {{
                                        category = "dolorum";
                                        externalInfo = new java.util.HashMap<String, String>() {{
                                            put("fugit", "alias");
                                            put("magni", "vel");
                                        }};
                                        filename = "quae";
                                        languageCombinationIds = new org.openapis.openapi.models.shared.LanguageCombinationDto[]{{
                                            add(new LanguageCombinationDto() {{
                                                sourceLanguageId = 264333L;
                                                targetLanguageId = 208253L;
                                            }}),
                                        }};
                                        languageIds = new Long[]{{
                                            add(932394L),
                                            add(88248L),
                                        }};
                                        toBeGenerated = false;
                                        url = "ipsum";
                                    }}),
                                }};
                            }};, "unde");            

            AddFileLinks1Response res = sdk.projectsSmartV2.addFileLinks1(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## addFiles1

Adds files to the project as added by PM. The files have to be uploaded beforehand (see "POST /v2/projects/{projectId}/files/upload" operation). The following properties can be specified for each file:<ul><li>category (required, 400 Bad Request is returned otherwise)</li><li>languageIds – when the file category depends on a list of languages</li><li>languageCombinationIds – when the file category depends on a list of language combinations</li></ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddFiles1Request;
import org.openapis.openapi.models.operations.AddFiles1Response;
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

            AddFiles1Request req = new AddFiles1Request(                new FileCategorizationsDto() {{
                                files = new org.openapis.openapi.models.shared.FileCategorizationDto[]{{
                                    add(new FileCategorizationDto() {{
                                        category = "distinctio";
                                        fileId = "maxime";
                                        languageCombinationIds = new org.openapis.openapi.models.shared.LanguageCombinationDto[]{{
                                            add(new LanguageCombinationDto() {{
                                                sourceLanguageId = 159146L;
                                                targetLanguageId = 342137L;
                                            }}),
                                        }};
                                        languageIds = new Long[]{{
                                            add(727250L),
                                            add(115661L),
                                            add(663318L),
                                        }};
                                    }}),
                                    add(new FileCategorizationDto() {{
                                        category = "libero";
                                        fileId = "fugiat";
                                        languageCombinationIds = new org.openapis.openapi.models.shared.LanguageCombinationDto[]{{
                                            add(new LanguageCombinationDto() {{
                                                sourceLanguageId = 554603L;
                                                targetLanguageId = 811939L;
                                            }}),
                                            add(new LanguageCombinationDto() {{
                                                sourceLanguageId = 25756L;
                                                targetLanguageId = 479385L;
                                            }}),
                                            add(new LanguageCombinationDto() {{
                                                sourceLanguageId = 57320L;
                                                targetLanguageId = 914864L;
                                            }}),
                                        }};
                                        languageIds = new Long[]{{
                                            add(49348L),
                                        }};
                                    }}),
                                    add(new FileCategorizationDto() {{
                                        category = "totam";
                                        fileId = "dolore";
                                        languageCombinationIds = new org.openapis.openapi.models.shared.LanguageCombinationDto[]{{
                                            add(new LanguageCombinationDto() {{
                                                sourceLanguageId = 715053L;
                                                targetLanguageId = 32273L;
                                            }}),
                                            add(new LanguageCombinationDto() {{
                                                sourceLanguageId = 418109L;
                                                targetLanguageId = 456688L;
                                            }}),
                                            add(new LanguageCombinationDto() {{
                                                sourceLanguageId = 172951L;
                                                targetLanguageId = 824798L;
                                            }}),
                                            add(new LanguageCombinationDto() {{
                                                sourceLanguageId = 107210L;
                                                targetLanguageId = 668606L;
                                            }}),
                                        }};
                                        languageIds = new Long[]{{
                                            add(545918L),
                                            add(473143L),
                                            add(588812L),
                                            add(882284L),
                                        }};
                                    }}),
                                    add(new FileCategorizationDto() {{
                                        category = "necessitatibus";
                                        fileId = "tempore";
                                        languageCombinationIds = new org.openapis.openapi.models.shared.LanguageCombinationDto[]{{
                                            add(new LanguageCombinationDto() {{
                                                sourceLanguageId = 409726L;
                                                targetLanguageId = 421819L;
                                            }}),
                                            add(new LanguageCombinationDto() {{
                                                sourceLanguageId = 373511L;
                                                targetLanguageId = 702952L;
                                            }}),
                                            add(new LanguageCombinationDto() {{
                                                sourceLanguageId = 515638L;
                                                targetLanguageId = 357207L;
                                            }}),
                                        }};
                                        languageIds = new Long[]{{
                                            add(972912L),
                                            add(737279L),
                                            add(872303L),
                                            add(5152L),
                                        }};
                                    }}),
                                }};
                            }};, "quia");            

            AddFiles1Response res = sdk.projectsSmartV2.addFiles1(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## addJobToProcess

Returns process id.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddJobToProcessRequest;
import org.openapis.openapi.models.operations.AddJobToProcessResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            AddJobToProcessRequest req = new AddJobToProcessRequest("quidem");            

            AddJobToProcessResponse res = sdk.projectsSmartV2.addJobToProcess(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## archive

Prepares a ZIP archive that contains the specified files.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ArchiveResponse;
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

            org.openapis.openapi.models.shared.FilesDto req = new FilesDto() {{
                files = new String[]{{
                    add("repudiandae"),
                    add("accusantium"),
                    add("expedita"),
                }};
            }};            

            ArchiveResponse res = sdk.projectsSmartV2.archive(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## changeStatus2

Changes project status if possible (400 Bad Request is returned otherwise). The status has to be specified using one of the following keys: <ul><li>CANCELLED – available when the job has one of the following statuses: OPEN, STARTED</li></ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ChangeStatus2Request;
import org.openapis.openapi.models.operations.ChangeStatus2Response;
import org.openapis.openapi.models.shared.ProjectStatusDTO;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            ChangeStatus2Request req = new ChangeStatus2Request(                new ProjectStatusDTO() {{
                                status = "officiis";
                            }};, "eos");            

            ChangeStatus2Response res = sdk.projectsSmartV2.changeStatus2(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createPayable2

Adds a payable to a project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreatePayable2Request;
import org.openapis.openapi.models.operations.CreatePayable2Response;
import org.openapis.openapi.models.shared.ChargeLanguageCombinationDTO;
import org.openapis.openapi.models.shared.FileDTO;
import org.openapis.openapi.models.shared.PayableCreateDTO;
import org.openapis.openapi.models.shared.PayableCreateDTORateOriginEnum;
import org.openapis.openapi.models.shared.PayableCreateDTOTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreatePayable2Request req = new CreatePayable2Request(                new PayableCreateDTO() {{
                                calculationUnitId = 844854L;
                                catLogFile = new FileDTO() {{
                                    content = "odio";
                                    name = "Fred Champlin";
                                    token = "earum";
                                    url = "adipisci";
                                }};;
                                currencyId = 923306L;
                                description = "similique";
                                id = 282837L;
                                ignoreMinimumCharge = false;
                                invoiceId = "quidem";
                                jobId = new java.util.HashMap<String, Object>() {{
                                    put("beatae", "unde");
                                    put("molestiae", "delectus");
                                }};
                                jobTypeId = 585593L;
                                languageCombination = new ChargeLanguageCombinationDTO() {{
                                    sourceLanguageId = 147801L;
                                    targetLanguageId = 253625L;
                                }};;
                                languageCombinationIdNumber = "numquam";
                                minimumCharge = 2010.1;
                                quantity = 8735.57;
                                rate = 6378.56;
                                rateOrigin = PayableCreateDTORateOriginEnum.PRICE_LIST;
                                total = 7607.44;
                                type = PayableCreateDTOTypeEnum.CAT;
                            }};, "corporis");            

            CreatePayable2Response res = sdk.projectsSmartV2.createPayable2(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createReceivable2

Adds a receivable to a project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateReceivable2Request;
import org.openapis.openapi.models.operations.CreateReceivable2Response;
import org.openapis.openapi.models.shared.ChargeLanguageCombinationDTO;
import org.openapis.openapi.models.shared.FileDTO;
import org.openapis.openapi.models.shared.ReceivableCreateDTO;
import org.openapis.openapi.models.shared.ReceivableCreateDTORateOriginEnum;
import org.openapis.openapi.models.shared.ReceivableCreateDTOTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateReceivable2Request req = new CreateReceivable2Request(                new ReceivableCreateDTO() {{
                                calculationUnitId = 185518L;
                                catLogFile = new FileDTO() {{
                                    content = "expedita";
                                    name = "Terrance Hansen";
                                    token = "neque";
                                    url = "in";
                                }};;
                                currencyId = 796397L;
                                description = "eum";
                                id = 266408L;
                                ignoreMinimumCharge = false;
                                invoiceId = "corporis";
                                jobTypeId = 298264L;
                                languageCombination = new ChargeLanguageCombinationDTO() {{
                                    sourceLanguageId = 914971L;
                                    targetLanguageId = 978173L;
                                }};;
                                languageCombinationIdNumber = "tempore";
                                minimumCharge = 460.13;
                                quantity = 7275.47;
                                rate = 1897.53;
                                rateOrigin = ReceivableCreateDTORateOriginEnum.PRICE_LIST;
                                taskId = 520875L;
                                total = 5777.09;
                                type = ReceivableCreateDTOTypeEnum.SIMPLE;
                            }};, "quo");            

            CreateReceivable2Response res = sdk.projectsSmartV2.createReceivable2(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## create6

Creates a new Smart Project. If the specified service ID refers to Classic Project, 400 Bad Request is returned instead.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Create6Response;
import org.openapis.openapi.models.shared.ProjectCreateDTO;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.ProjectCreateDTO req = new ProjectCreateDTO() {{
                clientId = 242099L;
                externalId = "minus";
                name = "Dean Ortiz";
                serviceId = 735894L;
            }};            

            Create6Response res = sdk.projectsSmartV2.create6(req);

            if (res.projectDTOv2 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deletePayable2

Deletes a payable.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeletePayable2Request;
import org.openapis.openapi.models.operations.DeletePayable2Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeletePayable2Request req = new DeletePayable2Request(878601L, "odit");            

            DeletePayable2Response res = sdk.projectsSmartV2.deletePayable2(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteReceivable2

Deletes a receivable.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteReceivable2Request;
import org.openapis.openapi.models.operations.DeleteReceivable2Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteReceivable2Request req = new DeleteReceivable2Request("repellat", 865946L);            

            DeleteReceivable2Response res = sdk.projectsSmartV2.deleteReceivable2(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getByExternalId1

Returns project details.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetByExternalId1Request;
import org.openapis.openapi.models.operations.GetByExternalId1Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetByExternalId1Request req = new GetByExternalId1Request("nemo");            

            GetByExternalId1Response res = sdk.projectsSmartV2.getByExternalId1(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getById9

Returns project details. If the specified project ID refers to Classic Project, 400 Bad Request is returned instead.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetById9Request;
import org.openapis.openapi.models.operations.GetById9Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetById9Request req = new GetById9Request("reprehenderit");            

            GetById9Response res = sdk.projectsSmartV2.getById9(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCATToolProjectInfo

Returns if cat tool project is created or queued.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCATToolProjectInfoRequest;
import org.openapis.openapi.models.operations.GetCATToolProjectInfoResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetCATToolProjectInfoRequest req = new GetCATToolProjectInfoRequest("aperiam");            

            GetCATToolProjectInfoResponse res = sdk.projectsSmartV2.getCATToolProjectInfo(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getContacts2

Returns Client Contacts information for a project

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetContacts2Request;
import org.openapis.openapi.models.operations.GetContacts2Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetContacts2Request req = new GetContacts2Request("odio");            

            GetContacts2Response res = sdk.projectsSmartV2.getContacts2(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCustomFields8

Returns a list of custom field keys and values for a project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCustomFields8Request;
import org.openapis.openapi.models.operations.GetCustomFields8Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetCustomFields8Request req = new GetCustomFields8Request("minima");            

            GetCustomFields8Response res = sdk.projectsSmartV2.getCustomFields8(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeliverableFiles

Returns list of files in a project, that are ready to be delivered to client. A file is considered deliverable to client when all of the following criteria are met:<ul><li>the file was added to a job in the last step in the process</li><li>the file is marked as verified (if it was added in a verification step and the file is verifiable, according to its category)</li><li>the job is finished (has Ready status)</li></ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeliverableFilesRequest;
import org.openapis.openapi.models.operations.GetDeliverableFilesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeliverableFilesRequest req = new GetDeliverableFilesRequest("in");            

            GetDeliverableFilesResponse res = sdk.projectsSmartV2.getDeliverableFiles(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getFileById2

Returns details of a file.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFileById2Request;
import org.openapis.openapi.models.operations.GetFileById2Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetFileById2Request req = new GetFileById2Request("ducimus");            

            GetFileById2Response res = sdk.projectsSmartV2.getFileById2(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getFileContentById

Downloads a file content.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFileContentByIdRequest;
import org.openapis.openapi.models.operations.GetFileContentByIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetFileContentByIdRequest req = new GetFileContentByIdRequest("excepturi", "dolores");            

            GetFileContentByIdResponse res = sdk.projectsSmartV2.getFileContentById(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getFiles

Returns list of files in a project. Only files added to the project (i.e. files that have assigned category and languages) are listed.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFilesRequest;
import org.openapis.openapi.models.operations.GetFilesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetFilesRequest req = new GetFilesRequest("error");            

            GetFilesResponse res = sdk.projectsSmartV2.getFiles(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getFinance2

Returns finance information for a project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFinance2Request;
import org.openapis.openapi.models.operations.GetFinance2Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetFinance2Request req = new GetFinance2Request("veritatis");            

            GetFinance2Response res = sdk.projectsSmartV2.getFinance2(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getJobs

Returns list of jobs in a project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetJobsRequest;
import org.openapis.openapi.models.operations.GetJobsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetJobsRequest req = new GetJobsRequest("ducimus");            

            GetJobsResponse res = sdk.projectsSmartV2.getJobs(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getProcessId

Returns process id.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProcessIdRequest;
import org.openapis.openapi.models.operations.GetProcessIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetProcessIdRequest req = new GetProcessIdRequest("voluptate");            

            GetProcessIdResponse res = sdk.projectsSmartV2.getProcessId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateClientDeadline

Updates Client Deadline for a project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateClientDeadlineRequest;
import org.openapis.openapi.models.operations.UpdateClientDeadlineResponse;
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

            UpdateClientDeadlineRequest req = new UpdateClientDeadlineRequest(                new TimeDTO() {{
                                value = 866789L;
                            }};, "itaque");            

            UpdateClientDeadlineResponse res = sdk.projectsSmartV2.updateClientDeadline(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateClientNotes

Updates Client Notes for a project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateClientNotesRequest;
import org.openapis.openapi.models.operations.UpdateClientNotesResponse;
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

            UpdateClientNotesRequest req = new UpdateClientNotesRequest(                new StringDTO() {{
                                value = "similique";
                            }};, "optio");            

            UpdateClientNotesResponse res = sdk.projectsSmartV2.updateClientNotes(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateClientReferenceNumber

Updates Client Reference Number for a project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateClientReferenceNumberRequest;
import org.openapis.openapi.models.operations.UpdateClientReferenceNumberResponse;
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

            UpdateClientReferenceNumberRequest req = new UpdateClientReferenceNumberRequest(                new StringDTO() {{
                                value = "ex";
                            }};, "quaerat");            

            UpdateClientReferenceNumberResponse res = sdk.projectsSmartV2.updateClientReferenceNumber(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateContacts2

Updates Client Contacts for a project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateContacts2Request;
import org.openapis.openapi.models.operations.UpdateContacts2Response;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SmartContactsDTO;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateContacts2Request req = new UpdateContacts2Request(                new SmartContactsDTO() {{
                                additionalIds = new Long[]{{
                                    add(888616L),
                                    add(810839L),
                                }};
                                primaryId = 697274L;
                            }};, "exercitationem");            

            UpdateContacts2Response res = sdk.projectsSmartV2.updateContacts2(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateCustomField2

Updates a custom field with a specified key in a project

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateCustomField2Request;
import org.openapis.openapi.models.operations.UpdateCustomField2Response;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SmartCustomFieldDTO;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateCustomField2Request req = new UpdateCustomField2Request(                new SmartCustomFieldDTO() {{
                                value = new java.util.HashMap<String, Object>() {{
                                    put("dolorem", "modi");
                                    put("ipsa", "sint");
                                }};
                            }};, "vero", "sequi");            

            UpdateCustomField2Response res = sdk.projectsSmartV2.updateCustomField2(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateInternalNotes

Updates Internal Notes for a project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateInternalNotesRequest;
import org.openapis.openapi.models.operations.UpdateInternalNotesResponse;
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

            UpdateInternalNotesRequest req = new UpdateInternalNotesRequest(                new StringDTO() {{
                                value = "repudiandae";
                            }};, "cum");            

            UpdateInternalNotesResponse res = sdk.projectsSmartV2.updateInternalNotes(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateOrderedOn

Updates Order Date for a project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateOrderedOnRequest;
import org.openapis.openapi.models.operations.UpdateOrderedOnResponse;
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

            UpdateOrderedOnRequest req = new UpdateOrderedOnRequest(                new TimeDTO() {{
                                value = 120120L;
                            }};, "earum");            

            UpdateOrderedOnResponse res = sdk.projectsSmartV2.updateOrderedOn(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updatePayable2

Updates a payable.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdatePayable2Request;
import org.openapis.openapi.models.operations.UpdatePayable2Response;
import org.openapis.openapi.models.shared.ChargeLanguageCombinationDTO;
import org.openapis.openapi.models.shared.PayableDTO;
import org.openapis.openapi.models.shared.PayableDTORateOriginEnum;
import org.openapis.openapi.models.shared.PayableDTOTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdatePayable2Request req = new UpdatePayable2Request(                new PayableDTO() {{
                                calculationUnitId = 334474L;
                                currencyId = 659268L;
                                description = "dolores";
                                id = 724994L;
                                ignoreMinimumCharge = false;
                                invoiceId = "dicta";
                                jobId = new java.util.HashMap<String, Object>() {{
                                    put("necessitatibus", "nobis");
                                }};
                                jobTypeId = 56877L;
                                languageCombination = new ChargeLanguageCombinationDTO() {{
                                    sourceLanguageId = 497357L;
                                    targetLanguageId = 980486L;
                                }};;
                                languageCombinationIdNumber = "veritatis";
                                minimumCharge = 964.5;
                                quantity = 3864.47;
                                rate = 8634.71;
                                rateOrigin = PayableDTORateOriginEnum.FILLED_MANUALLY;
                                total = 5665.06;
                                type = PayableDTOTypeEnum.CAT;
                            }};, 367917L, "aliquam");            

            UpdatePayable2Response res = sdk.projectsSmartV2.updatePayable2(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateReceivable2

Updates a receivable.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateReceivable2Request;
import org.openapis.openapi.models.operations.UpdateReceivable2Response;
import org.openapis.openapi.models.shared.ChargeLanguageCombinationDTO;
import org.openapis.openapi.models.shared.ReceivableDTO;
import org.openapis.openapi.models.shared.ReceivableDTORateOriginEnum;
import org.openapis.openapi.models.shared.ReceivableDTOTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateReceivable2Request req = new UpdateReceivable2Request(                new ReceivableDTO() {{
                                calculationUnitId = 342342L;
                                currencyId = 988749L;
                                description = "eligendi";
                                id = 574032L;
                                ignoreMinimumCharge = false;
                                invoiceId = "enim";
                                jobTypeId = 944950L;
                                languageCombination = new ChargeLanguageCombinationDTO() {{
                                    sourceLanguageId = 657319L;
                                    targetLanguageId = 559774L;
                                }};;
                                languageCombinationIdNumber = "totam";
                                minimumCharge = 5646.67;
                                quantity = 4849.66;
                                rate = 511.7;
                                rateOrigin = ReceivableDTORateOriginEnum.AUTOCALCULATED;
                                taskId = 104078L;
                                total = 5546.45;
                                type = ReceivableDTOTypeEnum.CAT;
                            }};, "assumenda", 731634L);            

            UpdateReceivable2Response res = sdk.projectsSmartV2.updateReceivable2(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateSourceLanguage

Updates source language for a project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateSourceLanguageRequest;
import org.openapis.openapi.models.operations.UpdateSourceLanguageResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SourceLanguageDTO;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateSourceLanguageRequest req = new UpdateSourceLanguageRequest(                new SourceLanguageDTO() {{
                                sourceLanguageId = 725574L;
                            }};, "velit");            

            UpdateSourceLanguageResponse res = sdk.projectsSmartV2.updateSourceLanguage(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateSpecialization

Updates specialization for a project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateSpecializationRequest;
import org.openapis.openapi.models.operations.UpdateSpecializationResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SpecializationDTO;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateSpecializationRequest req = new UpdateSpecializationRequest(                new SpecializationDTO() {{
                                specializationId = 38557L;
                            }};, "delectus");            

            UpdateSpecializationResponse res = sdk.projectsSmartV2.updateSpecialization(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateTargetLanguages

Updates target languages for a project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateTargetLanguagesRequest;
import org.openapis.openapi.models.operations.UpdateTargetLanguagesResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TargetLanguagesDTO;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateTargetLanguagesRequest req = new UpdateTargetLanguagesRequest(                new TargetLanguagesDTO() {{
                                targetLanguageIds = new Long[]{{
                                    add(741238L),
                                    add(216870L),
                                    add(238011L),
                                    add(903150L),
                                }};
                            }};, "deserunt");            

            UpdateTargetLanguagesResponse res = sdk.projectsSmartV2.updateTargetLanguages(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateVendorInstructions

Updates instructions for all vendors performing the jobs in a project. See also "PUT /jobs/{jobId}/instructions" for updating instructions for a specific job in a project or quote.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateVendorInstructionsRequest;
import org.openapis.openapi.models.operations.UpdateVendorInstructionsResponse;
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

            UpdateVendorInstructionsRequest req = new UpdateVendorInstructionsRequest(                new StringDTO() {{
                                value = "doloremque";
                            }};, "quis");            

            UpdateVendorInstructionsResponse res = sdk.projectsSmartV2.updateVendorInstructions(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateVolume

Updates volume for a project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateVolumeRequest;
import org.openapis.openapi.models.operations.UpdateVolumeResponse;
import org.openapis.openapi.models.shared.BigDecimalDTO;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateVolumeRequest req = new UpdateVolumeRequest(                new BigDecimalDTO() {{
                                value = 3330.72;
                            }};, "libero");            

            UpdateVolumeResponse res = sdk.projectsSmartV2.updateVolume(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## uploadFile2

Uploads file to the project as a file uploaded by PM. Only one file can be uploaded at once. When the upload is finished the file has to be added by specifying its category and languages (see "PUT /v2/projects/{projectId}/files/add" operation

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UploadFile2Request;
import org.openapis.openapi.models.operations.UploadFile2Response;
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

            UploadFile2Request req = new UploadFile2Request(                new FileToUploadDto() {{
                                file = new FileToUploadDtoFile("architecto".getBytes(), "cupiditate");;
                            }};, "molestiae");            

            UploadFile2Response res = sdk.projectsSmartV2.uploadFile2(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
