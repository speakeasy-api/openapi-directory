# quotesClassic

## Overview

To change the description use /examples/TagsDescriptions.json

### Available Operations

* [createLanguageCombination1](#createlanguagecombination1) - Creates a new language combination for a given quote without creating a task.
* [createPayable1](#createpayable1) - Adds a payable.
* [createReceivable1](#createreceivable1) - Adds a receivable.
* [createTask1](#createtask1) - Creates a new task for a given quote.
* [deletePayable1](#deletepayable1) - Deletes a payable.
* [deleteReceivable1](#deletereceivable1) - Deletes a receivable.
* [delete13](#delete13) - Removes a quote.
* [getAllIds7](#getallids7) - Returns quotes' internal identifiers.
* [getById8](#getbyid8) - Returns quote details.
* [getCustomFields6](#getcustomfields6) - Returns custom fields of a given quote.
* [getDates2](#getdates2) - Returns dates of a given quote.
* [getFinance1](#getfinance1) - Returns finance of a given quote.
* [getInstructions1](#getinstructions1) - Returns instructions of a given quote.
* [send1](#send1) - Sends a quote for customer confirmation.
* [start](#start) - Starts a quote.
* [updateCustomFields4](#updatecustomfields4) - Updates custom fields of a given quote.
* [updateInstructions2](#updateinstructions2) - Updates instructions of a given quote.
* [updatePayable1](#updatepayable1) - Updates a payable.
* [updateReceivable1](#updatereceivable1) - Updates a receivable.

## createLanguageCombination1

Creates a new language combination for a given quote without creating a task.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateLanguageCombination1Request;
import org.openapis.openapi.models.operations.CreateLanguageCombination1Response;
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

            CreateLanguageCombination1Request req = new CreateLanguageCombination1Request(                new CommonLanguageCombinationDTO() {{
                                sourceLanguageId = 756654L;
                                targetLanguageId = 820023L;
                            }};, "non");            

            CreateLanguageCombination1Response res = sdk.quotesClassic.createLanguageCombination1(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createPayable1

Adds a payable.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreatePayable1Request;
import org.openapis.openapi.models.operations.CreatePayable1Response;
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

            CreatePayable1Request req = new CreatePayable1Request(                new PayableCreateDTO() {{
                                calculationUnitId = 298187L;
                                catLogFile = new FileDTO() {{
                                    content = "itaque";
                                    name = "Ollie Harris";
                                    token = "laudantium";
                                    url = "odit";
                                }};;
                                currencyId = 863477L;
                                description = "amet";
                                id = 347698L;
                                ignoreMinimumCharge = false;
                                invoiceId = "ab";
                                jobId = new java.util.HashMap<String, Object>() {{
                                    put("facilis", "tempore");
                                }};
                                jobTypeId = 395233L;
                                languageCombination = new ChargeLanguageCombinationDTO() {{
                                    sourceLanguageId = 977518L;
                                    targetLanguageId = 310840L;
                                }};;
                                languageCombinationIdNumber = "blanditiis";
                                minimumCharge = 7186.27;
                                quantity = 3924.3;
                                rate = 3359.77;
                                rateOrigin = PayableCreateDTORateOriginEnum.PRICE_LIST;
                                total = 7277.71;
                                type = PayableCreateDTOTypeEnum.CAT;
                            }};, "facere");            

            CreatePayable1Response res = sdk.quotesClassic.createPayable1(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createReceivable1

Adds a receivable.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateReceivable1Request;
import org.openapis.openapi.models.operations.CreateReceivable1Response;
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

            CreateReceivable1Request req = new CreateReceivable1Request(                new ReceivableCreateDTO() {{
                                calculationUnitId = 706061L;
                                catLogFile = new FileDTO() {{
                                    content = "ipsum";
                                    name = "Shari Wiza";
                                    token = "labore";
                                    url = "rerum";
                                }};;
                                currencyId = 179795L;
                                description = "reprehenderit";
                                id = 345506L;
                                ignoreMinimumCharge = false;
                                invoiceId = "neque";
                                jobTypeId = 480061L;
                                languageCombination = new ChargeLanguageCombinationDTO() {{
                                    sourceLanguageId = 664965L;
                                    targetLanguageId = 522176L;
                                }};;
                                languageCombinationIdNumber = "eligendi";
                                minimumCharge = 8536.06;
                                quantity = 6040.78;
                                rate = 8894.48;
                                rateOrigin = ReceivableCreateDTORateOriginEnum.PRICE_LIST;
                                taskId = 220104L;
                                total = 1180.41;
                                type = ReceivableCreateDTOTypeEnum.CAT;
                            }};, "porro");            

            CreateReceivable1Response res = sdk.quotesClassic.createReceivable1(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createTask1

Creates a new task for a given quote. Required fields are presented in the example.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateTask1Request;
import org.openapis.openapi.models.operations.CreateTask1Response;
import org.openapis.openapi.models.shared.ClassicPeopleDTO;
import org.openapis.openapi.models.shared.CommonLanguageCombinationDTO;
import org.openapis.openapi.models.shared.ContactsDTO;
import org.openapis.openapi.models.shared.CustomFieldDTO;
import org.openapis.openapi.models.shared.CustomFieldDTOTypeEnum;
import org.openapis.openapi.models.shared.InstructionsDTO;
import org.openapis.openapi.models.shared.ProjectDatesDTO;
import org.openapis.openapi.models.shared.ResponsiblePersonsDTO;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TaskDTO;
import org.openapis.openapi.models.shared.TaskFinanceDTO;
import org.openapis.openapi.models.shared.TaskJobsDTO;
import org.openapis.openapi.models.shared.TimeDTO;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateTask1Request req = new CreateTask1Request(                new TaskDTO() {{
                                clientTaskPONumber = "vitae";
                                customFields = new org.openapis.openapi.models.shared.CustomFieldDTO[]{{
                                    add(new CustomFieldDTO() {{
                                        key = "esse";
                                        name = "Leon Collier";
                                        type = CustomFieldDTOTypeEnum.NUMBER;
                                        value = new java.util.HashMap<String, Object>() {{
                                            put("libero", "illo");
                                            put("ab", "incidunt");
                                        }};
                                    }}),
                                    add(new CustomFieldDTO() {{
                                        key = "accusamus";
                                        name = "Geoffrey Hartmann";
                                        type = CustomFieldDTOTypeEnum.MULTI_SELECTION;
                                        value = new java.util.HashMap<String, Object>() {{
                                            put("praesentium", "nemo");
                                            put("repellat", "quisquam");
                                        }};
                                    }}),
                                }};
                                dates = new ProjectDatesDTO() {{
                                    actualDeliveryDate = new TimeDTO() {{
                                        value = 197259L;
                                    }};;
                                    actualStartDate = new TimeDTO() {{
                                        value = 467119L;
                                    }};;
                                    deadline = new TimeDTO() {{
                                        value = 534908L;
                                    }};;
                                    startDate = new TimeDTO() {{
                                        value = 75566L;
                                    }};;
                                }};;
                                finance = new TaskFinanceDTO() {{
                                    invoiceable = false;
                                }};;
                                id = 290248L;
                                idNumber = "assumenda";
                                instructions = new InstructionsDTO() {{
                                    forProvider = "aliquam";
                                    fromCustomer = "quisquam";
                                    internal = "provident";
                                    notes = "laudantium";
                                    paymentNoteForCustomer = "repudiandae";
                                    paymentNoteForVendor = "consequatur";
                                }};;
                                jobs = new TaskJobsDTO() {{
                                    jobCount = 805264;
                                    jobIds = new Long[]{{
                                        add(723942L),
                                    }};
                                }};;
                                languageCombination = new CommonLanguageCombinationDTO() {{
                                    sourceLanguageId = 711991L;
                                    targetLanguageId = 559174L;
                                }};;
                                name = "Lamar Prohaska";
                                people = new ClassicPeopleDTO() {{
                                    customerContacts = new ContactsDTO() {{
                                        additionalIds = new Long[]{{
                                            add(629377L),
                                            add(833982L),
                                            add(434827L),
                                            add(213835L),
                                        }};
                                        primaryId = 413801L;
                                        sendBackToId = 771226L;
                                    }};;
                                    responsiblePersons = new ResponsiblePersonsDTO() {{
                                        projectCoordinatorId = 415033L;
                                        projectManagerId = 12171L;
                                    }};;
                                }};;
                                projectId = 32055L;
                                quoteId = 322829L;
                            }};, "quae");            

            CreateTask1Response res = sdk.quotesClassic.createTask1(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deletePayable1

Deletes a payable.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeletePayable1Request;
import org.openapis.openapi.models.operations.DeletePayable1Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeletePayable1Request req = new DeletePayable1Request(229567L, "illum");            

            DeletePayable1Response res = sdk.quotesClassic.deletePayable1(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteReceivable1

Deletes a receivable.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteReceivable1Request;
import org.openapis.openapi.models.operations.DeleteReceivable1Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteReceivable1Request req = new DeleteReceivable1Request("praesentium", 695526L);            

            DeleteReceivable1Response res = sdk.quotesClassic.deleteReceivable1(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## delete13

Removes a quote.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Delete13Request;
import org.openapis.openapi.models.operations.Delete13Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            Delete13Request req = new Delete13Request("cum");            

            Delete13Response res = sdk.quotesClassic.delete13(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAllIds7

Returns quotes' internal identifiers.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAllIds7Request;
import org.openapis.openapi.models.operations.GetAllIds7Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAllIds7Request req = new GetAllIds7Request() {{
                updatedSince = 230411L;
            }};            

            GetAllIds7Response res = sdk.quotesClassic.getAllIds7(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getById8

Returns quote details. If the specified quote ID refers to Smart Quote, 400 Bad Request is returned instead.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetById8Request;
import org.openapis.openapi.models.operations.GetById8Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetById8Request req = new GetById8Request("quasi") {{
                embed = "dicta";
            }};            

            GetById8Response res = sdk.quotesClassic.getById8(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCustomFields6

Returns custom fields of a given quote.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCustomFields6Request;
import org.openapis.openapi.models.operations.GetCustomFields6Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetCustomFields6Request req = new GetCustomFields6Request("laudantium");            

            GetCustomFields6Response res = sdk.quotesClassic.getCustomFields6(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDates2

Returns dates of a given quote.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDates2Request;
import org.openapis.openapi.models.operations.GetDates2Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDates2Request req = new GetDates2Request("doloremque");            

            GetDates2Response res = sdk.quotesClassic.getDates2(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getFinance1

Returns finance of a given quote.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFinance1Request;
import org.openapis.openapi.models.operations.GetFinance1Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetFinance1Request req = new GetFinance1Request("earum");            

            GetFinance1Response res = sdk.quotesClassic.getFinance1(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getInstructions1

Returns instructions of a given quote.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetInstructions1Request;
import org.openapis.openapi.models.operations.GetInstructions1Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetInstructions1Request req = new GetInstructions1Request("iusto");            

            GetInstructions1Response res = sdk.quotesClassic.getInstructions1(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## send1

Sends a quote for customer confirmation. Quote status is changed to SENT and a document is sent to the customer.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Send1Request;
import org.openapis.openapi.models.operations.Send1Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            Send1Request req = new Send1Request("amet");            

            Send1Response res = sdk.quotesClassic.send1(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## start

Starts a quote.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartRequest;
import org.openapis.openapi.models.operations.StartResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartRequest req = new StartRequest("provident");            

            StartResponse res = sdk.quotesClassic.start(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateCustomFields4

Updates custom fields of a given quote.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateCustomFields4Request;
import org.openapis.openapi.models.operations.UpdateCustomFields4Response;
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

            UpdateCustomFields4Request req = new UpdateCustomFields4Request(                new org.openapis.openapi.models.shared.CustomFieldDTO[]{{
                                add(new CustomFieldDTO() {{
                                    key = "necessitatibus";
                                    name = "Cornelius Altenwerth";
                                    type = CustomFieldDTOTypeEnum.MULTI_SELECTION;
                                    value = new java.util.HashMap<String, Object>() {{
                                        put("corrupti", "aperiam");
                                        put("sint", "accusamus");
                                        put("eos", "totam");
                                    }};
                                }}),
                                add(new CustomFieldDTO() {{
                                    key = "dicta";
                                    name = "Dr. Shannon Fahey";
                                    type = CustomFieldDTOTypeEnum.CHECKBOX;
                                    value = new java.util.HashMap<String, Object>() {{
                                        put("beatae", "at");
                                        put("labore", "minus");
                                        put("esse", "voluptatem");
                                    }};
                                }}),
                                add(new CustomFieldDTO() {{
                                    key = "perferendis";
                                    name = "Nathaniel Beahan";
                                    type = CustomFieldDTOTypeEnum.DATE;
                                    value = new java.util.HashMap<String, Object>() {{
                                        put("provident", "consectetur");
                                        put("eligendi", "dignissimos");
                                        put("consectetur", "soluta");
                                        put("natus", "temporibus");
                                    }};
                                }}),
                            }}, "officia");            

            UpdateCustomFields4Response res = sdk.quotesClassic.updateCustomFields4(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateInstructions2

Updates instructions of a given quote.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateInstructions2Request;
import org.openapis.openapi.models.operations.UpdateInstructions2Response;
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

            UpdateInstructions2Request req = new UpdateInstructions2Request(                new InstructionsDTO() {{
                                forProvider = "amet";
                                fromCustomer = "tenetur";
                                internal = "aspernatur";
                                notes = "quo";
                                paymentNoteForCustomer = "itaque";
                                paymentNoteForVendor = "illum";
                            }};, "laborum");            

            UpdateInstructions2Response res = sdk.quotesClassic.updateInstructions2(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updatePayable1

Updates a payable.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdatePayable1Request;
import org.openapis.openapi.models.operations.UpdatePayable1Response;
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

            UpdatePayable1Request req = new UpdatePayable1Request(                new PayableDTO() {{
                                calculationUnitId = 490420L;
                                currencyId = 876285L;
                                description = "qui";
                                id = 232383L;
                                ignoreMinimumCharge = false;
                                invoiceId = "repellat";
                                jobId = new java.util.HashMap<String, Object>() {{
                                    put("explicabo", "exercitationem");
                                }};
                                jobTypeId = 471457L;
                                languageCombination = new ChargeLanguageCombinationDTO() {{
                                    sourceLanguageId = 252700L;
                                    targetLanguageId = 68093L;
                                }};;
                                languageCombinationIdNumber = "illo";
                                minimumCharge = 9438.51;
                                quantity = 6444.79;
                                rate = 9649.25;
                                rateOrigin = PayableDTORateOriginEnum.PRICE_LIST;
                                total = 7193.89;
                                type = PayableDTOTypeEnum.SIMPLE;
                            }};, 349993L, "labore");            

            UpdatePayable1Response res = sdk.quotesClassic.updatePayable1(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateReceivable1

Updates a receivable.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateReceivable1Request;
import org.openapis.openapi.models.operations.UpdateReceivable1Response;
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

            UpdateReceivable1Request req = new UpdateReceivable1Request(                new ReceivableDTO() {{
                                calculationUnitId = 254382L;
                                currencyId = 921193L;
                                description = "modi";
                                id = 450209L;
                                ignoreMinimumCharge = false;
                                invoiceId = "explicabo";
                                jobTypeId = 879857L;
                                languageCombination = new ChargeLanguageCombinationDTO() {{
                                    sourceLanguageId = 525809L;
                                    targetLanguageId = 44016L;
                                }};;
                                languageCombinationIdNumber = "odit";
                                minimumCharge = 5358.02;
                                quantity = 3167.3;
                                rate = 4527.3;
                                rateOrigin = ReceivableDTORateOriginEnum.FILLED_MANUALLY;
                                taskId = 326118L;
                                total = 7275.44;
                                type = ReceivableDTOTypeEnum.SIMPLE;
                            }};, "sit", 266788L);            

            UpdateReceivable1Response res = sdk.quotesClassic.updateReceivable1(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
