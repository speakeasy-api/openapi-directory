# vendorInvoices

## Overview

To change the description use /examples/TagsDescriptions.json

### Available Operations

* [createPayment1](#createpayment1) - Creates a new payment on the vendor account and assigns the payment to the invoice.
* [create4](#create4) - Creates a new invoice.
* [delete6](#delete6) - Removes a provider invoice.
* [delete7](#delete7) - Removes a provider payment.
* [getAllIds3](#getallids3) - Returns vendor invoices' internal identifiers.
* [getAll2](#getall2) - Lists all vendor invoices in all statuses (including not ready and drafts) that have been updated since a specific date.
* [getById3](#getbyid3) - Returns provider invoice details.
* [getDocument1](#getdocument1) - Generates provider invoice document (PDF).
* [getPayments1](#getpayments1) - Returns all payments for the vendor invoice.
* [send](#send) - Sends a provider invoice.
* [setStatus](#setstatus) - Changes invoice status to given status.

## createPayment1

Creates a new payment on the vendor account and assigns the payment to the invoice.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreatePayment1Request;
import org.openapis.openapi.models.operations.CreatePayment1Response;
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

            CreatePayment1Request req = new CreatePayment1Request(                new PaymentDTO() {{
                                amount = 9822.48;
                                notes = "alias";
                                paymentDate = new TimeDTO() {{
                                    value = 992667L;
                                }};;
                                paymentMethodId = 523365L;
                            }};, 118615L);            

            CreatePayment1Response res = sdk.vendorInvoices.createPayment1(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## create4

Creates a new invoice from jobs. Jobs are grouped by provider and currency, therefore multiple invoices can be created.If any of the jobs cannot be invoiced (ie. it is already invoiced) then an error is reported.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Create4Response;
import org.openapis.openapi.models.shared.ProviderInvoiceCreateDTO;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.ProviderInvoiceCreateDTO req = new ProviderInvoiceCreateDTO() {{
                jobsIds = new Long[]{{
                    add(938257L),
                    add(985360L),
                }};
            }};            

            Create4Response res = sdk.vendorInvoices.create4(req);

            if (res.providerInvoiceCreateResultDTO != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## delete6

Removes a provider invoice.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Delete6Request;
import org.openapis.openapi.models.operations.Delete6Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            Delete6Request req = new Delete6Request(244569L);            

            Delete6Response res = sdk.vendorInvoices.delete6(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## delete7

Removes a provider payment.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Delete7Request;
import org.openapis.openapi.models.operations.Delete7Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            Delete7Request req = new Delete7Request(260588L);            

            Delete7Response res = sdk.vendorInvoices.delete7(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAllIds3

Returns vendor invoices' internal identifiers.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAllIds3Request;
import org.openapis.openapi.models.operations.GetAllIds3Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAllIds3Request req = new GetAllIds3Request() {{
                updatedSince = 458212L;
            }};            

            GetAllIds3Response res = sdk.vendorInvoices.getAllIds3(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAll2

Lists all vendor invoices in all statuses (including not ready and drafts) that have been updated since a specific date.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAll2Request;
import org.openapis.openapi.models.operations.GetAll2Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAll2Request req = new GetAll2Request() {{
                updatedSince = 446547L;
            }};            

            GetAll2Response res = sdk.vendorInvoices.getAll2(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getById3

Returns provider invoice details.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetById3Request;
import org.openapis.openapi.models.operations.GetById3Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetById3Request req = new GetById3Request(757407L);            

            GetById3Response res = sdk.vendorInvoices.getById3(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDocument1

Generates provider invoice document (PDF).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDocument1Request;
import org.openapis.openapi.models.operations.GetDocument1Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDocument1Request req = new GetDocument1Request(94697L);            

            GetDocument1Response res = sdk.vendorInvoices.getDocument1(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPayments1

Returns all payments for the vendor invoice.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPayments1Request;
import org.openapis.openapi.models.operations.GetPayments1Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetPayments1Request req = new GetPayments1Request(203621L);            

            GetPayments1Response res = sdk.vendorInvoices.getPayments1(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## send

Sends a provider invoice.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SendRequest;
import org.openapis.openapi.models.operations.SendResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            SendRequest req = new SendRequest(876649L);            

            SendResponse res = sdk.vendorInvoices.send(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## setStatus

Changes invoice status to given status.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SetStatusRequest;
import org.openapis.openapi.models.operations.SetStatusResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StatusRequestDTO;
import org.openapis.openapi.models.shared.StatusRequestDTOStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            SetStatusRequest req = new SetStatusRequest(                new StatusRequestDTO() {{
                                status = StatusRequestDTOStatusEnum.SENT;
                            }};, 37534L);            

            SetStatusResponse res = sdk.vendorInvoices.setStatus(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
