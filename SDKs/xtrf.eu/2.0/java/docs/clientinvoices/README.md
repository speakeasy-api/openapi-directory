# clientInvoices

## Overview

To change the description use /examples/TagsDescriptions.json

### Available Operations

* [createPayment](#createpayment) - Adds a new payment to the client invoice. The invoice payment status (Not Paid, Partially Paid, Fully Paid) is automatically recalculated.
* [create1](#create1) - Creates a new invoice.
* [delete1](#delete1) - Removes a client invoice.
* [delete2](#delete2) - Removes a customer payment.
* [downloadDocuments](#downloaddocuments) - Generates client invoices' documents.
* [duplicate](#duplicate) - Duplicate client invoice.
* [duplicateAsProForma](#duplicateasproforma) - Duplicate client invoice as pro forma.
* [getAll](#getall) - Lists all client invoices in all statuses (including not ready and drafts) that have been updated since a specific date.
* [getAllIds](#getallids) - Returns client invoices' internal identifiers.
* [getById](#getbyid) - Returns client invoice details.
* [getDates](#getdates) - Returns dates of a given client invoice.
* [getDocument](#getdocument) - Generates client invoice document (PDF).
* [getPaymentTerms](#getpaymentterms) - Returns payment terms of a given client invoice.
* [getPayments](#getpayments) - Returns all payments for the client invoice.
* [sendReminder](#sendreminder) - Sends reminder.
* [sendReminders](#sendreminders) - Sends reminders. Returns number of sent e-mails.

## createPayment

Adds a new payment to the client invoice. The invoice payment status (Not Paid, Partially Paid, Fully Paid) is automatically recalculated.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreatePaymentRequest;
import org.openapis.openapi.models.operations.CreatePaymentResponse;
import org.openapis.openapi.models.shared.PaymentDTO;
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

            CreatePaymentRequest req = new CreatePaymentRequest(                new PaymentDTO() {{
                                amount = 6601.74;
                                notes = "labore";
                                paymentDate = new TimeDTO() {{
                                    value = 290077L;
                                }};;
                                paymentMethodId = 383462L;
                            }};, 618016L);            

            CreatePaymentResponse res = sdk.clientInvoices.createPayment(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## create1

Creates a new invoice from tasks. Tasks are grouped by client and currency, therefore multiple invoices can be created.If any of the tasks cannot be invoiced (ie. it is already invoiced, not invoiceable, not associated with a project) then an error is reported.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Create1Response;
import org.openapis.openapi.models.shared.CustomerInvoiceCreateDTO;
import org.openapis.openapi.models.shared.CustomerInvoiceCreateDTOTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.CustomerInvoiceCreateDTO req = new CustomerInvoiceCreateDTO() {{
                prepaymentsIds = new Long[]{{
                    add(428769L),
                    add(878453L),
                    add(135474L),
                }};
                tasksIds = new Long[]{{
                    add(298282L),
                }};
                type = CustomerInvoiceCreateDTOTypeEnum.FINAL_;
            }};            

            Create1Response res = sdk.clientInvoices.create1(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## delete1

Removes a client invoice.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Delete1Request;
import org.openapis.openapi.models.operations.Delete1Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            Delete1Request req = new Delete1Request(569965L);            

            Delete1Response res = sdk.clientInvoices.delete1(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## delete2

Removes a customer payment.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Delete2Request;
import org.openapis.openapi.models.operations.Delete2Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            Delete2Request req = new Delete2Request(354047L);            

            Delete2Response res = sdk.clientInvoices.delete2(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## downloadDocuments

Generates client invoices' documents.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DownloadDocumentsResponse;
import org.openapis.openapi.models.shared.DownloadDocumentsRequestDTO;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.DownloadDocumentsRequestDTO req = new DownloadDocumentsRequestDTO() {{
                ids = new Long[]{{
                    add(551816L),
                    add(574325L),
                    add(33625L),
                }};
            }};            

            DownloadDocumentsResponse res = sdk.clientInvoices.downloadDocuments(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## duplicate

Duplicate client invoice.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DuplicateRequest;
import org.openapis.openapi.models.operations.DuplicateResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            DuplicateRequest req = new DuplicateRequest(653201L);            

            DuplicateResponse res = sdk.clientInvoices.duplicate(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## duplicateAsProForma

Duplicate client invoice as pro forma.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DuplicateAsProFormaRequest;
import org.openapis.openapi.models.operations.DuplicateAsProFormaResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            DuplicateAsProFormaRequest req = new DuplicateAsProFormaRequest(968962L);            

            DuplicateAsProFormaResponse res = sdk.clientInvoices.duplicateAsProForma(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAll

Lists all client invoices in all statuses (including not ready and drafts) that have been updated since a specific date.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAllRequest;
import org.openapis.openapi.models.operations.GetAllResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAllRequest req = new GetAllRequest() {{
                updatedSince = 652103L;
            }};            

            GetAllResponse res = sdk.clientInvoices.getAll(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAllIds

Returns client invoices' internal identifiers.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAllIdsRequest;
import org.openapis.openapi.models.operations.GetAllIdsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAllIdsRequest req = new GetAllIdsRequest() {{
                updatedSince = 320997L;
            }};            

            GetAllIdsResponse res = sdk.clientInvoices.getAllIds(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getById

Returns client invoice details.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetByIdRequest;
import org.openapis.openapi.models.operations.GetByIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetByIdRequest req = new GetByIdRequest(431418L) {{
                embed = "dolor";
            }};            

            GetByIdResponse res = sdk.clientInvoices.getById(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDates

Returns dates of a given client invoice.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDatesRequest;
import org.openapis.openapi.models.operations.GetDatesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDatesRequest req = new GetDatesRequest(896547L);            

            GetDatesResponse res = sdk.clientInvoices.getDates(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDocument

Generates client invoice document (PDF).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDocumentRequest;
import org.openapis.openapi.models.operations.GetDocumentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDocumentRequest req = new GetDocumentRequest(141264L);            

            GetDocumentResponse res = sdk.clientInvoices.getDocument(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPaymentTerms

Returns payment terms of a given client invoice.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPaymentTermsRequest;
import org.openapis.openapi.models.operations.GetPaymentTermsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetPaymentTermsRequest req = new GetPaymentTermsRequest(367562L);            

            GetPaymentTermsResponse res = sdk.clientInvoices.getPaymentTerms(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPayments

Returns all payments for the client invoice.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPaymentsRequest;
import org.openapis.openapi.models.operations.GetPaymentsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetPaymentsRequest req = new GetPaymentsRequest(97260L);            

            GetPaymentsResponse res = sdk.clientInvoices.getPayments(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## sendReminder

Sends reminder.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SendReminderRequest;
import org.openapis.openapi.models.operations.SendReminderResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            SendReminderRequest req = new SendReminderRequest(435865L);            

            SendReminderResponse res = sdk.clientInvoices.sendReminder(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## sendReminders

Sends reminders. Returns number of sent e-mails.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SendRemindersResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SendRemindersRequestDTO;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.SendRemindersRequestDTO req = new SendRemindersRequestDTO() {{
                ids = new Long[]{{
                    add(891924L),
                    add(260341L),
                    add(806194L),
                    add(537023L),
                }};
            }};            

            SendRemindersResponse res = sdk.clientInvoices.sendReminders(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
