# ClientInvoices

## Overview

To change the description use /examples/TagsDescriptions.json

### Available Operations

* [CreatePayment](#createpayment) - Adds a new payment to the client invoice. The invoice payment status (Not Paid, Partially Paid, Fully Paid) is automatically recalculated.
* [Create1](#create1) - Creates a new invoice.
* [Delete1](#delete1) - Removes a client invoice.
* [Delete2](#delete2) - Removes a customer payment.
* [DownloadDocuments](#downloaddocuments) - Generates client invoices' documents.
* [Duplicate](#duplicate) - Duplicate client invoice.
* [DuplicateAsProForma](#duplicateasproforma) - Duplicate client invoice as pro forma.
* [GetAll](#getall) - Lists all client invoices in all statuses (including not ready and drafts) that have been updated since a specific date.
* [GetAllIds](#getallids) - Returns client invoices' internal identifiers.
* [GetByID](#getbyid) - Returns client invoice details.
* [GetDates](#getdates) - Returns dates of a given client invoice.
* [GetDocument](#getdocument) - Generates client invoice document (PDF).
* [GetPaymentTerms](#getpaymentterms) - Returns payment terms of a given client invoice.
* [GetPayments](#getpayments) - Returns all payments for the client invoice.
* [SendReminder](#sendreminder) - Sends reminder.
* [SendReminders](#sendreminders) - Sends reminders. Returns number of sent e-mails.

## CreatePayment

Adds a new payment to the client invoice. The invoice payment status (Not Paid, Partially Paid, Fully Paid) is automatically recalculated.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            XAuthAccessToken: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.ClientInvoices.CreatePayment(ctx, operations.CreatePaymentRequest{
        PaymentDTO: shared.PaymentDTO{
            Amount: sdk.Float64(6601.74),
            Notes: sdk.String("labore"),
            PaymentDate: &shared.TimeDTO{
                Value: sdk.Int64(290077),
            },
            PaymentMethodID: sdk.Int64(383462),
        },
        InvoiceID: 618016,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## Create1

Creates a new invoice from tasks. Tasks are grouped by client and currency, therefore multiple invoices can be created.If any of the tasks cannot be invoiced (ie. it is already invoiced, not invoiceable, not associated with a project) then an error is reported.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            XAuthAccessToken: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.ClientInvoices.Create1(ctx, shared.CustomerInvoiceCreateDTO{
        PrepaymentsIds: []int64{
            428769,
            878453,
            135474,
        },
        TasksIds: []int64{
            298282,
        },
        Type: shared.CustomerInvoiceCreateDTOTypeEnumFinal.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## Delete1

Removes a client invoice.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            XAuthAccessToken: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.ClientInvoices.Delete1(ctx, operations.Delete1Request{
        InvoiceID: 569965,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## Delete2

Removes a customer payment.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            XAuthAccessToken: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.ClientInvoices.Delete2(ctx, operations.Delete2Request{
        PaymentID: 354047,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DownloadDocuments

Generates client invoices' documents.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            XAuthAccessToken: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.ClientInvoices.DownloadDocuments(ctx, shared.DownloadDocumentsRequestDTO{
        Ids: []int64{
            551816,
            574325,
            33625,
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## Duplicate

Duplicate client invoice.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            XAuthAccessToken: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.ClientInvoices.Duplicate(ctx, operations.DuplicateRequest{
        InvoiceID: 653201,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DuplicateAsProForma

Duplicate client invoice as pro forma.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            XAuthAccessToken: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.ClientInvoices.DuplicateAsProForma(ctx, operations.DuplicateAsProFormaRequest{
        InvoiceID: 968962,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetAll

Lists all client invoices in all statuses (including not ready and drafts) that have been updated since a specific date.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            XAuthAccessToken: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.ClientInvoices.GetAll(ctx, operations.GetAllRequest{
        UpdatedSince: sdk.Int64(652103),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetAllIds

Returns client invoices' internal identifiers.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            XAuthAccessToken: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.ClientInvoices.GetAllIds(ctx, operations.GetAllIdsRequest{
        UpdatedSince: sdk.Int64(320997),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetByID

Returns client invoice details.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            XAuthAccessToken: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.ClientInvoices.GetByID(ctx, operations.GetByIDRequest{
        Embed: sdk.String("eum"),
        InvoiceID: 221262,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetDates

Returns dates of a given client invoice.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            XAuthAccessToken: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.ClientInvoices.GetDates(ctx, operations.GetDatesRequest{
        InvoiceID: 896547,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetDocument

Generates client invoice document (PDF).

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            XAuthAccessToken: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.ClientInvoices.GetDocument(ctx, operations.GetDocumentRequest{
        InvoiceID: 141264,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetPaymentTerms

Returns payment terms of a given client invoice.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            XAuthAccessToken: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.ClientInvoices.GetPaymentTerms(ctx, operations.GetPaymentTermsRequest{
        InvoiceID: 367562,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetPayments

Returns all payments for the client invoice.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            XAuthAccessToken: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.ClientInvoices.GetPayments(ctx, operations.GetPaymentsRequest{
        InvoiceID: 97260,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## SendReminder

Sends reminder.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            XAuthAccessToken: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.ClientInvoices.SendReminder(ctx, operations.SendReminderRequest{
        InvoiceID: 435865,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## SendReminders

Sends reminders. Returns number of sent e-mails.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            XAuthAccessToken: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.ClientInvoices.SendReminders(ctx, shared.SendRemindersRequestDTO{
        Ids: []int64{
            891924,
            260341,
            806194,
            537023,
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
