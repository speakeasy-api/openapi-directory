# quotesSmartV2

## Overview

To change the description use /examples/TagsDescriptions.json

### Available Operations

* [addFiles2](#addfiles2) - Adds files to the quote as added by PM.
* [archive1](#archive1) - Prepares a ZIP archive that contains the specified files.
* [changeStatus3](#changestatus3) - Changes quote status if possible (400 Bad Request is returned otherwise).
* [createPayable3](#createpayable3) - Adds a payable to a quote.
* [createReceivable3](#createreceivable3) - Adds a receivable to a quote.
* [create7](#create7) - Creates a new Smart Quote.
* [deletePayable3](#deletepayable3) - Deletes a payable.
* [deleteReceivable3](#deletereceivable3) - Deletes a receivable.
* [getById10](#getbyid10) - Returns quote details.
* [getContacts3](#getcontacts3) - Returns Client Contacts information for a quote.
* [getCustomFields9](#getcustomfields9) - Returns a list of custom field keys and values for a project.
* [getFileById3](#getfilebyid3) - Returns details of a file.
* [getFileContentById1](#getfilecontentbyid1) - Downloads a file content.
* [getFiles1](#getfiles1) - Returns list of files in a quote.
* [getFinance3](#getfinance3) - Returns finance information for a quote.
* [getJobs1](#getjobs1) - Returns list of jobs in a quote.
* [updateBusinessDays](#updatebusinessdays) - Updates Business Days for a quote.
* [updateClientNotes1](#updateclientnotes1) - Updates Client Notes for a quote.
* [updateClientReferenceNumber1](#updateclientreferencenumber1) - Updates Client Reference Number for a quote.
* [updateContacts3](#updatecontacts3) - Updates Client Contacts for a quote.
* [updateCustomField3](#updatecustomfield3) - Updates a custom field with a specified key in a quote.
* [updateExpectedDeliveryDate](#updateexpecteddeliverydate) - Updates Expected Delivery Date for a quote.
* [updateInternalNotes1](#updateinternalnotes1) - Updates Internal Notes for a quote.
* [updatePayable3](#updatepayable3) - Updates a payable.
* [updateQuoteExpiry](#updatequoteexpiry) - Updates Quote Expiry Date for a quote.
* [updateReceivable3](#updatereceivable3) - Updates a receivable.
* [updateSourceLanguage1](#updatesourcelanguage1) - Updates source language for a quote.
* [updateSpecialization1](#updatespecialization1) - Updates specialization for a quote.
* [updateTargetLanguages1](#updatetargetlanguages1) - Updates target languages for a quote.
* [updateVendorInstructions1](#updatevendorinstructions1) - Updates instructions for all vendors performing the jobs in a quote.
* [updateVolume1](#updatevolume1) - Updates volume for a quote.
* [uploadFile3](#uploadfile3) - Uploads file to the quote as a file uploaded by PM.

## addFiles2

Adds files to the quote as added by PM. The files have to be uploaded beforehand (see "POST v2/quotes/{quoteId}/files/upload" operation). The following properties can be specified for each file:<ul><li>category (required, 400 Bad Request is returned otherwise)</li><li>languageIds – when the file category depends on a list of languages</li><li>languageCombinationIds – when the file category depends on a list of language combinations</li></ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddFiles2Request;
import org.openapis.openapi.models.operations.AddFiles2Response;
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

            AddFiles2Request req = new AddFiles2Request(                new TimeDTO() {{
                                value = 430116L;
                            }};, "nesciunt");            

            AddFiles2Response res = sdk.quotesSmartV2.addFiles2(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## archive1

Prepares a ZIP archive that contains the specified files.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Archive1Response;
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
                    add("dignissimos"),
                    add("fugiat"),
                    add("nostrum"),
                }};
            }};            

            Archive1Response res = sdk.quotesSmartV2.archive1(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## changeStatus3

Changes quote status if possible (400 Bad Request is returned otherwise). The status has to be specified using one of the following keys: <ul><li>PENDING – available when the job has one of the following statuses: REQUESTED, REJECTED</li><li>SENT – available when the job has one of the following statuses: PENDING</li><li>APPROVED – available when the job has one of the following statuses: REQUESTED, PENDING, SENT, APPROVED_BY_CLIENT</li><li>REJECTED – available when the job has one of the following statuses: REQUESTED, PENDING, SENT</li></ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ChangeStatus3Request;
import org.openapis.openapi.models.operations.ChangeStatus3Response;
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

            ChangeStatus3Request req = new ChangeStatus3Request(                new ProjectStatusDTO() {{
                                status = "molestiae";
                            }};, "veniam");            

            ChangeStatus3Response res = sdk.quotesSmartV2.changeStatus3(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createPayable3

Adds a payable to a quote.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreatePayable3Request;
import org.openapis.openapi.models.operations.CreatePayable3Response;
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

            CreatePayable3Request req = new CreatePayable3Request(                new PayableCreateDTO() {{
                                calculationUnitId = 969206L;
                                catLogFile = new FileDTO() {{
                                    content = "ab";
                                    name = "Maria Ankunding";
                                    token = "commodi";
                                    url = "numquam";
                                }};;
                                currencyId = 677045L;
                                description = "possimus";
                                id = 452399L;
                                ignoreMinimumCharge = false;
                                invoiceId = "consectetur";
                                jobId = new java.util.HashMap<String, Object>() {{
                                    put("quaerat", "itaque");
                                }};
                                jobTypeId = 791228L;
                                languageCombination = new ChargeLanguageCombinationDTO() {{
                                    sourceLanguageId = 122662L;
                                    targetLanguageId = 715143L;
                                }};;
                                languageCombinationIdNumber = "iusto";
                                minimumCharge = 5580.51;
                                quantity = 917.28;
                                rate = 7049.48;
                                rateOrigin = PayableCreateDTORateOriginEnum.PRICE_PROFILE;
                                total = 4186.37;
                                type = PayableCreateDTOTypeEnum.CAT;
                            }};, "alias");            

            CreatePayable3Response res = sdk.quotesSmartV2.createPayable3(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createReceivable3

Adds a receivable to a quote.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateReceivable3Request;
import org.openapis.openapi.models.operations.CreateReceivable3Response;
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

            CreateReceivable3Request req = new CreateReceivable3Request(                new ReceivableCreateDTO() {{
                                calculationUnitId = 526413L;
                                catLogFile = new FileDTO() {{
                                    content = "aut";
                                    name = "Mr. Dwayne Sipes PhD";
                                    token = "delectus";
                                    url = "mollitia";
                                }};;
                                currencyId = 859003L;
                                description = "officia";
                                id = 152027L;
                                ignoreMinimumCharge = false;
                                invoiceId = "voluptatem";
                                jobTypeId = 664L;
                                languageCombination = new ChargeLanguageCombinationDTO() {{
                                    sourceLanguageId = 910073L;
                                    targetLanguageId = 941668L;
                                }};;
                                languageCombinationIdNumber = "voluptatem";
                                minimumCharge = 2783.25;
                                quantity = 1854.48;
                                rate = 1858.97;
                                rateOrigin = ReceivableCreateDTORateOriginEnum.AUTOCALCULATED;
                                taskId = 691508L;
                                total = 1267.27;
                                type = ReceivableCreateDTOTypeEnum.SIMPLE;
                            }};, "aliquid");            

            CreateReceivable3Response res = sdk.quotesSmartV2.createReceivable3(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## create7

Creates a new Smart Quote. If the specified service ID refers to Classic Quote, 400 Bad Request is returned instead.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Create7Response;
import org.openapis.openapi.models.shared.QuoteCreateDTO;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.QuoteCreateDTO req = new QuoteCreateDTO() {{
                clientId = 264649L;
                name = "Courtney Maggio";
                opportunityOfferId = 520678L;
                serviceId = 192846L;
            }};            

            Create7Response res = sdk.quotesSmartV2.create7(req);

            if (res.quoteDTOv2 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deletePayable3

Deletes a payable.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeletePayable3Request;
import org.openapis.openapi.models.operations.DeletePayable3Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeletePayable3Request req = new DeletePayable3Request(397919L, "ea");            

            DeletePayable3Response res = sdk.quotesSmartV2.deletePayable3(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteReceivable3

Deletes a receivable.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteReceivable3Request;
import org.openapis.openapi.models.operations.DeleteReceivable3Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteReceivable3Request req = new DeleteReceivable3Request("impedit", 498388L);            

            DeleteReceivable3Response res = sdk.quotesSmartV2.deleteReceivable3(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getById10

Returns quote details. If the specified quote ID refers to Classic Quote, 400 Bad Request is returned instead.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetById10Request;
import org.openapis.openapi.models.operations.GetById10Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetById10Request req = new GetById10Request("odit");            

            GetById10Response res = sdk.quotesSmartV2.getById10(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getContacts3

Returns Client Contacts information for a quote.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetContacts3Request;
import org.openapis.openapi.models.operations.GetContacts3Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetContacts3Request req = new GetContacts3Request("velit");            

            GetContacts3Response res = sdk.quotesSmartV2.getContacts3(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCustomFields9

Returns a list of custom field keys and values for a project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCustomFields9Request;
import org.openapis.openapi.models.operations.GetCustomFields9Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetCustomFields9Request req = new GetCustomFields9Request("reiciendis");            

            GetCustomFields9Response res = sdk.quotesSmartV2.getCustomFields9(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getFileById3

Returns details of a file.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFileById3Request;
import org.openapis.openapi.models.operations.GetFileById3Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetFileById3Request req = new GetFileById3Request("repellat");            

            GetFileById3Response res = sdk.quotesSmartV2.getFileById3(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getFileContentById1

Downloads a file content.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFileContentById1Request;
import org.openapis.openapi.models.operations.GetFileContentById1Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetFileContentById1Request req = new GetFileContentById1Request("nulla", "laborum");            

            GetFileContentById1Response res = sdk.quotesSmartV2.getFileContentById1(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getFiles1

Returns list of files in a quote. Only files added to the quote (i.e. files that have assigned category and languages) are listed.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFiles1Request;
import org.openapis.openapi.models.operations.GetFiles1Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetFiles1Request req = new GetFiles1Request("natus");            

            GetFiles1Response res = sdk.quotesSmartV2.getFiles1(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getFinance3

Returns finance information for a quote.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFinance3Request;
import org.openapis.openapi.models.operations.GetFinance3Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetFinance3Request req = new GetFinance3Request("accusamus");            

            GetFinance3Response res = sdk.quotesSmartV2.getFinance3(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getJobs1

Returns list of jobs in a quote.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetJobs1Request;
import org.openapis.openapi.models.operations.GetJobs1Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetJobs1Request req = new GetJobs1Request("doloremque");            

            GetJobs1Response res = sdk.quotesSmartV2.getJobs1(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateBusinessDays

Updates Business Days for a quote.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateBusinessDaysRequest;
import org.openapis.openapi.models.operations.UpdateBusinessDaysResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateBusinessDaysRequest req = new UpdateBusinessDaysRequest(392967, "rerum");            

            UpdateBusinessDaysResponse res = sdk.quotesSmartV2.updateBusinessDays(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateClientNotes1

Updates Client Notes for a quote.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateClientNotes1Request;
import org.openapis.openapi.models.operations.UpdateClientNotes1Response;
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

            UpdateClientNotes1Request req = new UpdateClientNotes1Request(                new StringDTO() {{
                                value = "recusandae";
                            }};, "voluptates");            

            UpdateClientNotes1Response res = sdk.quotesSmartV2.updateClientNotes1(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateClientReferenceNumber1

Updates Client Reference Number for a quote.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateClientReferenceNumber1Request;
import org.openapis.openapi.models.operations.UpdateClientReferenceNumber1Response;
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

            UpdateClientReferenceNumber1Request req = new UpdateClientReferenceNumber1Request(                new StringDTO() {{
                                value = "non";
                            }};, "rem");            

            UpdateClientReferenceNumber1Response res = sdk.quotesSmartV2.updateClientReferenceNumber1(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateContacts3

Updates Client Contacts for a quote.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateContacts3Request;
import org.openapis.openapi.models.operations.UpdateContacts3Response;
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

            UpdateContacts3Request req = new UpdateContacts3Request(                new SmartContactsDTO() {{
                                additionalIds = new Long[]{{
                                    add(354225L),
                                }};
                                primaryId = 786860L;
                            }};, "dicta");            

            UpdateContacts3Response res = sdk.quotesSmartV2.updateContacts3(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateCustomField3

Updates a custom field with a specified key in a quote.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateCustomField3Request;
import org.openapis.openapi.models.operations.UpdateCustomField3Response;
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

            UpdateCustomField3Request req = new UpdateCustomField3Request(                new SmartCustomFieldDTO() {{
                                value = new java.util.HashMap<String, Object>() {{
                                    put("eligendi", "quae");
                                    put("officiis", "architecto");
                                    put("architecto", "enim");
                                    put("optio", "rem");
                                }};
                            }};, "perferendis", "facilis");            

            UpdateCustomField3Response res = sdk.quotesSmartV2.updateCustomField3(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateExpectedDeliveryDate

Updates Expected Delivery Date for a quote.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateExpectedDeliveryDateRequest;
import org.openapis.openapi.models.operations.UpdateExpectedDeliveryDateResponse;
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

            UpdateExpectedDeliveryDateRequest req = new UpdateExpectedDeliveryDateRequest(                new TimeDTO() {{
                                value = 967055L;
                            }};, "a");            

            UpdateExpectedDeliveryDateResponse res = sdk.quotesSmartV2.updateExpectedDeliveryDate(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateInternalNotes1

Updates Internal Notes for a quote.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateInternalNotes1Request;
import org.openapis.openapi.models.operations.UpdateInternalNotes1Response;
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

            UpdateInternalNotes1Request req = new UpdateInternalNotes1Request(                new StringDTO() {{
                                value = "iste";
                            }};, "dicta");            

            UpdateInternalNotes1Response res = sdk.quotesSmartV2.updateInternalNotes1(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updatePayable3

Updates a payable.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdatePayable3Request;
import org.openapis.openapi.models.operations.UpdatePayable3Response;
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

            UpdatePayable3Request req = new UpdatePayable3Request(                new PayableDTO() {{
                                calculationUnitId = 552439L;
                                currencyId = 356315L;
                                description = "dolore";
                                id = 266284L;
                                ignoreMinimumCharge = false;
                                invoiceId = "itaque";
                                jobId = new java.util.HashMap<String, Object>() {{
                                    put("modi", "consequuntur");
                                    put("assumenda", "vero");
                                    put("doloribus", "impedit");
                                    put("porro", "accusamus");
                                }};
                                jobTypeId = 518990L;
                                languageCombination = new ChargeLanguageCombinationDTO() {{
                                    sourceLanguageId = 969168L;
                                    targetLanguageId = 66074L;
                                }};;
                                languageCombinationIdNumber = "sint";
                                minimumCharge = 4724.14;
                                quantity = 4584.12;
                                rate = 4382.56;
                                rateOrigin = PayableDTORateOriginEnum.PRICE_LIST;
                                total = 2027.96;
                                type = PayableDTOTypeEnum.CAT;
                            }};, 423588L, "neque");            

            UpdatePayable3Response res = sdk.quotesSmartV2.updatePayable3(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateQuoteExpiry

Updates Quote Expiry Date for a quote.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateQuoteExpiryRequest;
import org.openapis.openapi.models.operations.UpdateQuoteExpiryResponse;
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

            UpdateQuoteExpiryRequest req = new UpdateQuoteExpiryRequest(                new TimeDTO() {{
                                value = 357758L;
                            }};, "voluptas");            

            UpdateQuoteExpiryResponse res = sdk.quotesSmartV2.updateQuoteExpiry(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateReceivable3

Updates a receivable.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateReceivable3Request;
import org.openapis.openapi.models.operations.UpdateReceivable3Response;
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

            UpdateReceivable3Request req = new UpdateReceivable3Request(                new ReceivableDTO() {{
                                calculationUnitId = 163684L;
                                currencyId = 641133L;
                                description = "reprehenderit";
                                id = 716033L;
                                ignoreMinimumCharge = false;
                                invoiceId = "eius";
                                jobTypeId = 56372L;
                                languageCombination = new ChargeLanguageCombinationDTO() {{
                                    sourceLanguageId = 522062L;
                                    targetLanguageId = 978154L;
                                }};;
                                languageCombinationIdNumber = "accusantium";
                                minimumCharge = 3314.52;
                                quantity = 9062.32;
                                rate = 2060.63;
                                rateOrigin = ReceivableDTORateOriginEnum.AUTOCALCULATED;
                                taskId = 307173L;
                                total = 5525.81;
                                type = ReceivableDTOTypeEnum.CAT;
                            }};, "fugiat", 668577L);            

            UpdateReceivable3Response res = sdk.quotesSmartV2.updateReceivable3(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateSourceLanguage1

Updates source language for a quote.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateSourceLanguage1Request;
import org.openapis.openapi.models.operations.UpdateSourceLanguage1Response;
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

            UpdateSourceLanguage1Request req = new UpdateSourceLanguage1Request(                new SourceLanguageDTO() {{
                                sourceLanguageId = 962396L;
                            }};, "velit");            

            UpdateSourceLanguage1Response res = sdk.quotesSmartV2.updateSourceLanguage1(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateSpecialization1

Updates specialization for a quote.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateSpecialization1Request;
import org.openapis.openapi.models.operations.UpdateSpecialization1Response;
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

            UpdateSpecialization1Request req = new UpdateSpecialization1Request(                new SpecializationDTO() {{
                                specializationId = 110522L;
                            }};, "nesciunt");            

            UpdateSpecialization1Response res = sdk.quotesSmartV2.updateSpecialization1(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateTargetLanguages1

Updates target languages for a quote.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateTargetLanguages1Request;
import org.openapis.openapi.models.operations.UpdateTargetLanguages1Response;
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

            UpdateTargetLanguages1Request req = new UpdateTargetLanguages1Request(                new TargetLanguagesDTO() {{
                                targetLanguageIds = new Long[]{{
                                    add(74895L),
                                    add(997995L),
                                    add(363214L),
                                }};
                            }};, "doloribus");            

            UpdateTargetLanguages1Response res = sdk.quotesSmartV2.updateTargetLanguages1(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateVendorInstructions1

Updates instructions for all vendors performing the jobs in a quote. See also "PUT /jobs/{jobId}/instructions" for updating instructions for a specific job in a project or quote.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateVendorInstructions1Request;
import org.openapis.openapi.models.operations.UpdateVendorInstructions1Response;
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

            UpdateVendorInstructions1Request req = new UpdateVendorInstructions1Request(                new StringDTO() {{
                                value = "possimus";
                            }};, "unde");            

            UpdateVendorInstructions1Response res = sdk.quotesSmartV2.updateVendorInstructions1(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateVolume1

Updates volume for a quote.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateVolume1Request;
import org.openapis.openapi.models.operations.UpdateVolume1Response;
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

            UpdateVolume1Request req = new UpdateVolume1Request(                new BigDecimalDTO() {{
                                value = 2754.25;
                            }};, "explicabo");            

            UpdateVolume1Response res = sdk.quotesSmartV2.updateVolume1(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## uploadFile3

Uploads file to the quote as a file uploaded by PM. Only one file can be uploaded at once. When the upload is finished the file has to be added by specifying its category and languages (see "PUT /v2/quotes/{quoteId}/files/add" operation).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UploadFile3Request;
import org.openapis.openapi.models.operations.UploadFile3Response;
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

            UploadFile3Request req = new UploadFile3Request(                new FileToUploadDto() {{
                                file = new FileToUploadDtoFile("ipsam".getBytes(), "cupiditate");;
                            }};, "optio");            

            UploadFile3Response res = sdk.quotesSmartV2.uploadFile3(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
