# projectsClassic

## Overview

To change the description use /examples/TagsDescriptions.json

### Available Operations

* [createLanguageCombination](#createlanguagecombination) - Creates a new language combination for a given project without creating a task.
* [createPayable](#createpayable) - Adds a payable to a project.
* [createReceivable](#createreceivable) - Adds a receivable to a project.
* [createTask](#createtask) - Creates a new task for a given project.
* [create5](#create5) - Creates a new Classic Project.
* [deletePayable](#deletepayable) - Deletes a payable.
* [deleteReceivable](#deletereceivable) - Deletes a receivable.
* [delete12](#delete12) - Removes a project.
* [getAllIds6](#getallids6) - Returns projects' internal identifiers.
* [getById7](#getbyid7) - Returns project details.
* [getContacts](#getcontacts) - Returns contacts of a given project.
* [getCustomFields5](#getcustomfields5) - Returns custom fields of a given project.
* [getDates1](#getdates1) - Returns dates of a given project.
* [getFileById](#getfilebyid) - Downloads a file.
* [getFinance](#getfinance) - Returns finance of a given project.
* [getInstructions](#getinstructions) - Returns instructions of a given project.
* [updateContacts](#updatecontacts) - Updates contacts of a given project.
* [updateCustomFields3](#updatecustomfields3) - Updates custom fields of a given project.
* [updateDates1](#updatedates1) - Updates dates of a given project.
* [updateInstructions1](#updateinstructions1) - Updates instructions of a given project.
* [updatePayable](#updatepayable) - Updates a payable.
* [updateReceivable](#updatereceivable) - Updates a receivable.

## createLanguageCombination

Creates a new language combination for a given project without creating a task.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateLanguageCombinationRequest;
import org.openapis.openapi.models.operations.CreateLanguageCombinationResponse;
import org.openapis.openapi.models.shared.CommonLanguageCombinationDTO;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateLanguageCombinationRequest req = new CreateLanguageCombinationRequest(                new CommonLanguageCombinationDTO() {{
                                sourceLanguageId = 58534L;
                                targetLanguageId = 271113L;
                            }};, "nihil");            

            CreateLanguageCombinationResponse res = sdk.projectsClassic.createLanguageCombination(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createPayable

Adds a payable to a project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreatePayableRequest;
import org.openapis.openapi.models.operations.CreatePayableResponse;
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

            CreatePayableRequest req = new CreatePayableRequest(                new PayableCreateDTO() {{
                                calculationUnitId = 473190L;
                                catLogFile = new FileDTO() {{
                                    content = "dicta";
                                    name = "Tamara Lang";
                                    token = "vel";
                                    url = "architecto";
                                }};;
                                currencyId = 857125L;
                                description = "doloremque";
                                id = 117315L;
                                ignoreMinimumCharge = false;
                                invoiceId = "odio";
                                jobId = new java.util.HashMap<String, Object>() {{
                                    put("esse", "ex");
                                    put("consectetur", "aliquid");
                                }};
                                jobTypeId = 58870L;
                                languageCombination = new ChargeLanguageCombinationDTO() {{
                                    sourceLanguageId = 671384L;
                                    targetLanguageId = 123844L;
                                }};;
                                languageCombinationIdNumber = "nostrum";
                                minimumCharge = 8567.56;
                                quantity = 7137.67;
                                rate = 3996.67;
                                rateOrigin = PayableCreateDTORateOriginEnum.FILLED_MANUALLY;
                                total = 3813.97;
                                type = PayableCreateDTOTypeEnum.SIMPLE;
                            }};, "perferendis");            

            CreatePayableResponse res = sdk.projectsClassic.createPayable(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createReceivable

Adds a receivable to a project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateReceivableRequest;
import org.openapis.openapi.models.operations.CreateReceivableResponse;
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

            CreateReceivableRequest req = new CreateReceivableRequest(                new ReceivableCreateDTO() {{
                                calculationUnitId = 431760L;
                                catLogFile = new FileDTO() {{
                                    content = "voluptas";
                                    name = "Alfonso Bernier";
                                    token = "voluptates";
                                    url = "mollitia";
                                }};;
                                currencyId = 671794L;
                                description = "libero";
                                id = 324083L;
                                ignoreMinimumCharge = false;
                                invoiceId = "deleniti";
                                jobTypeId = 316220L;
                                languageCombination = new ChargeLanguageCombinationDTO() {{
                                    sourceLanguageId = 110477L;
                                    targetLanguageId = 833316L;
                                }};;
                                languageCombinationIdNumber = "ex";
                                minimumCharge = 7758.03;
                                quantity = 4053.73;
                                rate = 2811.53;
                                rateOrigin = ReceivableCreateDTORateOriginEnum.PRICE_LIST;
                                taskId = 713927L;
                                total = 299.5;
                                type = ReceivableCreateDTOTypeEnum.CAT;
                            }};, "cum");            

            CreateReceivableResponse res = sdk.projectsClassic.createReceivable(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createTask

Creates a new task for a given project.<p>
  Required fields:
  <ul>
    <li>languageCombination</li>
    <li>specializationId</li>
    <li>workflowId</li>
  </ul>
</p>


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateTaskRequest;
import org.openapis.openapi.models.operations.CreateTaskResponse;
import org.openapis.openapi.models.shared.ClassicPeopleDTO;
import org.openapis.openapi.models.shared.CommonLanguageCombinationDTO;
import org.openapis.openapi.models.shared.ContactsDTO;
import org.openapis.openapi.models.shared.InstructionsDTO;
import org.openapis.openapi.models.shared.ProjectDatesDTO;
import org.openapis.openapi.models.shared.ResponsiblePersonsDTO;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TaskCreateDTO;
import org.openapis.openapi.models.shared.TaskFileDTO;
import org.openapis.openapi.models.shared.TaskFileDTOCategoryEnum;
import org.openapis.openapi.models.shared.TimeDTO;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateTaskRequest req = new CreateTaskRequest(                new TaskCreateDTO() {{
                                clientTaskPONumber = "aliquid";
                                dates = new ProjectDatesDTO() {{
                                    actualDeliveryDate = new TimeDTO() {{
                                        value = 109784L;
                                    }};;
                                    actualStartDate = new TimeDTO() {{
                                        value = 530860L;
                                    }};;
                                    deadline = new TimeDTO() {{
                                        value = 606308L;
                                    }};;
                                    startDate = new TimeDTO() {{
                                        value = 85233L;
                                    }};;
                                }};;
                                files = new org.openapis.openapi.models.shared.TaskFileDTO[]{{
                                    add(new TaskFileDTO() {{
                                        category = TaskFileDTOCategoryEnum.REF;
                                        content = "culpa";
                                        name = "Miss Miranda Towne";
                                        token = "debitis";
                                        url = "voluptatem";
                                    }}),
                                    add(new TaskFileDTO() {{
                                        category = TaskFileDTOCategoryEnum.WORKFILE;
                                        content = "deleniti";
                                        name = "Ruben Williamson";
                                        token = "nemo";
                                        url = "asperiores";
                                    }}),
                                    add(new TaskFileDTO() {{
                                        category = TaskFileDTOCategoryEnum.WORKFILE;
                                        content = "ullam";
                                        name = "Desiree Leannon";
                                        token = "nam";
                                        url = "ipsam";
                                    }}),
                                }};
                                instructions = new InstructionsDTO() {{
                                    forProvider = "culpa";
                                    fromCustomer = "dolor";
                                    internal = "aliquam";
                                    notes = "inventore";
                                    paymentNoteForCustomer = "deleniti";
                                    paymentNoteForVendor = "veritatis";
                                }};;
                                languageCombination = new CommonLanguageCombinationDTO() {{
                                    sourceLanguageId = 274575L;
                                    targetLanguageId = 221396L;
                                }};;
                                name = "Alice Bailey";
                                people = new ClassicPeopleDTO() {{
                                    customerContacts = new ContactsDTO() {{
                                        additionalIds = new Long[]{{
                                            add(513760L),
                                        }};
                                        primaryId = 65604L;
                                        sendBackToId = 222658L;
                                    }};;
                                    responsiblePersons = new ResponsiblePersonsDTO() {{
                                        projectCoordinatorId = 856277L;
                                        projectManagerId = 369490L;
                                    }};;
                                }};;
                                specializationId = 162120L;
                                workflowId = 55107L;
                            }};, "quas");            

            CreateTaskResponse res = sdk.projectsClassic.createTask(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## create5

Creates a new Classic Project. If the specified service ID refers to Smart Project, 400 Bad Request is returned instead.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Create5Response;
import org.openapis.openapi.models.shared.ClassicPeopleDTO;
import org.openapis.openapi.models.shared.ClassicProjectCreateDTO;
import org.openapis.openapi.models.shared.ContactsDTO;
import org.openapis.openapi.models.shared.InstructionsDTO;
import org.openapis.openapi.models.shared.ProjectDatesDTO;
import org.openapis.openapi.models.shared.ResponsiblePersonsDTO;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TaskFileDTO;
import org.openapis.openapi.models.shared.TaskFileDTOCategoryEnum;
import org.openapis.openapi.models.shared.TimeDTO;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.ClassicProjectCreateDTO req = new ClassicProjectCreateDTO(911198L, 773456L, 884952L) {{
                categoriesIds = new Long[]{{
                    add(897277L),
                    add(153369L),
                }};
                dates = new ProjectDatesDTO() {{
                    actualDeliveryDate = new TimeDTO() {{
                        value = 332191L;
                    }};;
                    actualStartDate = new TimeDTO() {{
                        value = 199596L;
                    }};;
                    deadline = new TimeDTO() {{
                        value = 712927L;
                    }};;
                    startDate = new TimeDTO() {{
                        value = 432984L;
                    }};;
                }};;
                inputFiles = new org.openapis.openapi.models.shared.TaskFileDTO[]{{
                    add(new TaskFileDTO() {{
                        category = TaskFileDTOCategoryEnum.DICTIONARY;
                        content = "magnam";
                        name = "Kathleen Sauer";
                        token = "laboriosam";
                        url = "recusandae";
                    }}),
                    add(new TaskFileDTO() {{
                        category = TaskFileDTOCategoryEnum.WORKFILE;
                        content = "voluptatem";
                        name = "Alyssa Boyer";
                        token = "vero";
                        url = "est";
                    }}),
                }};
                instructions = new InstructionsDTO() {{
                    forProvider = "harum";
                    fromCustomer = "sequi";
                    internal = "doloribus";
                    notes = "repudiandae";
                    paymentNoteForCustomer = "optio";
                    paymentNoteForVendor = "occaecati";
                }};;
                name = "Allison Kuvalis";
                people = new ClassicPeopleDTO() {{
                    customerContacts = new ContactsDTO() {{
                        additionalIds = new Long[]{{
                            add(364912L),
                            add(551079L),
                        }};
                        primaryId = 260904L;
                        sendBackToId = 131903L;
                    }};;
                    responsiblePersons = new ResponsiblePersonsDTO() {{
                        projectCoordinatorId = 495970L;
                        projectManagerId = 200516L;
                    }};;
                }};;
                sourceLanguageId = 681740L;
                targetLanguagesIds = new Long[]{{
                    add(277340L),
                    add(97493L),
                    add(524380L),
                }};
            }};            

            Create5Response res = sdk.projectsClassic.create5(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deletePayable

Deletes a payable.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeletePayableRequest;
import org.openapis.openapi.models.operations.DeletePayableResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeletePayableRequest req = new DeletePayableRequest(851854L, "dicta");            

            DeletePayableResponse res = sdk.projectsClassic.deletePayable(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteReceivable

Deletes a receivable.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteReceivableRequest;
import org.openapis.openapi.models.operations.DeleteReceivableResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteReceivableRequest req = new DeleteReceivableRequest("nisi", 159845L);            

            DeleteReceivableResponse res = sdk.projectsClassic.deleteReceivable(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## delete12

Removes a project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Delete12Request;
import org.openapis.openapi.models.operations.Delete12Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            Delete12Request req = new Delete12Request("consectetur");            

            Delete12Response res = sdk.projectsClassic.delete12(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAllIds6

Returns projects' internal identifiers.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAllIds6Request;
import org.openapis.openapi.models.operations.GetAllIds6Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAllIds6Request req = new GetAllIds6Request() {{
                updatedSince = 46806L;
            }};            

            GetAllIds6Response res = sdk.projectsClassic.getAllIds6(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getById7

Returns project details. If the specified project ID refers to Smart Project, 400 Bad Request is returned instead.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetById7Request;
import org.openapis.openapi.models.operations.GetById7Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetById7Request req = new GetById7Request("cupiditate") {{
                embed = "reiciendis";
            }};            

            GetById7Response res = sdk.projectsClassic.getById7(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getContacts

Returns contacts of a given project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetContactsRequest;
import org.openapis.openapi.models.operations.GetContactsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetContactsRequest req = new GetContactsRequest("soluta");            

            GetContactsResponse res = sdk.projectsClassic.getContacts(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCustomFields5

Returns custom fields of a given project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCustomFields5Request;
import org.openapis.openapi.models.operations.GetCustomFields5Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetCustomFields5Request req = new GetCustomFields5Request("alias");            

            GetCustomFields5Response res = sdk.projectsClassic.getCustomFields5(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDates1

Returns dates of a given project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDates1Request;
import org.openapis.openapi.models.operations.GetDates1Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDates1Request req = new GetDates1Request("omnis");            

            GetDates1Response res = sdk.projectsClassic.getDates1(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getFileById

Downloads a file.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFileByIdRequest;
import org.openapis.openapi.models.operations.GetFileByIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetFileByIdRequest req = new GetFileByIdRequest("eos");            

            GetFileByIdResponse res = sdk.projectsClassic.getFileById(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getFinance

Returns finance of a given project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFinanceRequest;
import org.openapis.openapi.models.operations.GetFinanceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetFinanceRequest req = new GetFinanceRequest("occaecati");            

            GetFinanceResponse res = sdk.projectsClassic.getFinance(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getInstructions

Returns instructions of a given project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetInstructionsRequest;
import org.openapis.openapi.models.operations.GetInstructionsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetInstructionsRequest req = new GetInstructionsRequest("iste");            

            GetInstructionsResponse res = sdk.projectsClassic.getInstructions(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateContacts

Updates contacts of a given project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateContactsRequest;
import org.openapis.openapi.models.operations.UpdateContactsResponse;
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

            UpdateContactsRequest req = new UpdateContactsRequest(                new ContactsDTO() {{
                                additionalIds = new Long[]{{
                                    add(81369L),
                                }};
                                primaryId = 686362L;
                                sendBackToId = 881897L;
                            }};, "voluptatibus");            

            UpdateContactsResponse res = sdk.projectsClassic.updateContacts(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateCustomFields3

Updates custom fields of a given project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateCustomFields3Request;
import org.openapis.openapi.models.operations.UpdateCustomFields3Response;
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

            UpdateCustomFields3Request req = new UpdateCustomFields3Request(                new org.openapis.openapi.models.shared.CustomFieldDTO[]{{
                                add(new CustomFieldDTO() {{
                                    key = "omnis";
                                    name = "Darrell Lang";
                                    type = CustomFieldDTOTypeEnum.SELECTION;
                                    value = new java.util.HashMap<String, Object>() {{
                                        put("commodi", "itaque");
                                        put("commodi", "totam");
                                        put("earum", "modi");
                                    }};
                                }}),
                                add(new CustomFieldDTO() {{
                                    key = "nam";
                                    name = "Kenneth Hilpert Sr.";
                                    type = CustomFieldDTOTypeEnum.DATE;
                                    value = new java.util.HashMap<String, Object>() {{
                                        put("enim", "sint");
                                        put("nulla", "deserunt");
                                        put("esse", "nemo");
                                        put("reprehenderit", "est");
                                    }};
                                }}),
                                add(new CustomFieldDTO() {{
                                    key = "quis";
                                    name = "Tomas Ryan";
                                    type = CustomFieldDTOTypeEnum.MULTI_SELECTION;
                                    value = new java.util.HashMap<String, Object>() {{
                                        put("voluptas", "debitis");
                                        put("delectus", "quae");
                                    }};
                                }}),
                            }}, "minus");            

            UpdateCustomFields3Response res = sdk.projectsClassic.updateCustomFields3(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateDates1

Updates dates of a given project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateDates1Request;
import org.openapis.openapi.models.operations.UpdateDates1Response;
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

            UpdateDates1Request req = new UpdateDates1Request(                new ProjectDatesDTO() {{
                                actualDeliveryDate = new TimeDTO() {{
                                    value = 685478L;
                                }};;
                                actualStartDate = new TimeDTO() {{
                                    value = 675689L;
                                }};;
                                deadline = new TimeDTO() {{
                                    value = 231070L;
                                }};;
                                startDate = new TimeDTO() {{
                                    value = 244889L;
                                }};;
                            }};, "atque");            

            UpdateDates1Response res = sdk.projectsClassic.updateDates1(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateInstructions1

Updates instructions of a given project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateInstructions1Request;
import org.openapis.openapi.models.operations.UpdateInstructions1Response;
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

            UpdateInstructions1Request req = new UpdateInstructions1Request(                new InstructionsDTO() {{
                                forProvider = "ipsum";
                                fromCustomer = "impedit";
                                internal = "magni";
                                notes = "soluta";
                                paymentNoteForCustomer = "repudiandae";
                                paymentNoteForVendor = "nam";
                            }};, "dolore");            

            UpdateInstructions1Response res = sdk.projectsClassic.updateInstructions1(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updatePayable

Updates a payable.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdatePayableRequest;
import org.openapis.openapi.models.operations.UpdatePayableResponse;
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

            UpdatePayableRequest req = new UpdatePayableRequest(                new PayableDTO() {{
                                calculationUnitId = 482892L;
                                currencyId = 453094L;
                                description = "sequi";
                                id = 493958L;
                                ignoreMinimumCharge = false;
                                invoiceId = "neque";
                                jobId = new java.util.HashMap<String, Object>() {{
                                    put("deleniti", "quibusdam");
                                    put("iure", "odit");
                                    put("voluptatibus", "vel");
                                    put("magnam", "quibusdam");
                                }};
                                jobTypeId = 78969L;
                                languageCombination = new ChargeLanguageCombinationDTO() {{
                                    sourceLanguageId = 818034L;
                                    targetLanguageId = 726878L;
                                }};;
                                languageCombinationIdNumber = "architecto";
                                minimumCharge = 9754.25;
                                quantity = 1563.83;
                                rate = 7820.9;
                                rateOrigin = PayableDTORateOriginEnum.PRICE_LIST;
                                total = 2470.45;
                                type = PayableDTOTypeEnum.SIMPLE;
                            }};, 36561L, "vel");            

            UpdatePayableResponse res = sdk.projectsClassic.updatePayable(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateReceivable

Updates a receivable.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateReceivableRequest;
import org.openapis.openapi.models.operations.UpdateReceivableResponse;
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

            UpdateReceivableRequest req = new UpdateReceivableRequest(                new ReceivableDTO() {{
                                calculationUnitId = 406922L;
                                currencyId = 107617L;
                                description = "vero";
                                id = 568218L;
                                ignoreMinimumCharge = false;
                                invoiceId = "eum";
                                jobTypeId = 246557L;
                                languageCombination = new ChargeLanguageCombinationDTO() {{
                                    sourceLanguageId = 284086L;
                                    targetLanguageId = 596433L;
                                }};;
                                languageCombinationIdNumber = "earum";
                                minimumCharge = 1175.25;
                                quantity = 7722.66;
                                rate = 9758.84;
                                rateOrigin = ReceivableDTORateOriginEnum.FILLED_MANUALLY;
                                taskId = 932562L;
                                total = 26.77;
                                type = ReceivableDTOTypeEnum.SIMPLE;
                            }};, "itaque", 242178L);            

            UpdateReceivableResponse res = sdk.projectsClassic.updateReceivable(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
