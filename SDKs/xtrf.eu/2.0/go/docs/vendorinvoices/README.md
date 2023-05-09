# VendorInvoices

## Overview

To change the description use /examples/TagsDescriptions.json

### Available Operations

* [CreatePayment1](#createpayment1) - Creates a new payment on the vendor account and assigns the payment to the invoice.
* [Create4](#create4) - Creates a new invoice.
* [Delete6](#delete6) - Removes a provider invoice.
* [Delete7](#delete7) - Removes a provider payment.
* [GetAllIds3](#getallids3) - Returns vendor invoices' internal identifiers.
* [GetAll2](#getall2) - Lists all vendor invoices in all statuses (including not ready and drafts) that have been updated since a specific date.
* [GetByID3](#getbyid3) - Returns provider invoice details.
* [GetDocument1](#getdocument1) - Generates provider invoice document (PDF).
* [GetPayments1](#getpayments1) - Returns all payments for the vendor invoice.
* [Send](#send) - Sends a provider invoice.
* [SetStatus](#setstatus) - Changes invoice status to given status.

## CreatePayment1

Creates a new payment on the vendor account and assigns the payment to the invoice.

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
    res, err := s.VendorInvoices.CreatePayment1(ctx, operations.CreatePayment1Request{
        PaymentDTO: shared.PaymentDTO{
            Amount: sdk.Float64(6525.15),
            Notes: sdk.String("quae"),
            PaymentDate: &shared.TimeDTO{
                Value: sdk.Int64(552646),
            },
            PaymentMethodID: sdk.Int64(44571),
        },
        InvoiceID: 251200,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## Create4

Creates a new invoice from jobs. Jobs are grouped by provider and currency, therefore multiple invoices can be created.If any of the jobs cannot be invoiced (ie. it is already invoiced) then an error is reported.

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
    res, err := s.VendorInvoices.Create4(ctx, shared.ProviderInvoiceCreateDTO{
        JobsIds: []int64{
            324052,
            305047,
            788165,
            557987,
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProviderInvoiceCreateResultDTO != nil {
        // handle response
    }
}
```

## Delete6

Removes a provider invoice.

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
    res, err := s.VendorInvoices.Delete6(ctx, operations.Delete6Request{
        InvoiceID: 162450,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## Delete7

Removes a provider payment.

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
    res, err := s.VendorInvoices.Delete7(ctx, operations.Delete7Request{
        PaymentID: 982445,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetAllIds3

Returns vendor invoices' internal identifiers.

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
    res, err := s.VendorInvoices.GetAllIds3(ctx, operations.GetAllIds3Request{
        UpdatedSince: sdk.Int64(81581),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetAll2

Lists all vendor invoices in all statuses (including not ready and drafts) that have been updated since a specific date.

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
    res, err := s.VendorInvoices.GetAll2(ctx, operations.GetAll2Request{
        UpdatedSince: sdk.Int64(400448),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetByID3

Returns provider invoice details.

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
    res, err := s.VendorInvoices.GetByID3(ctx, operations.GetByID3Request{
        InvoiceID: 513185,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetDocument1

Generates provider invoice document (PDF).

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
    res, err := s.VendorInvoices.GetDocument1(ctx, operations.GetDocument1Request{
        InvoiceID: 665872,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetPayments1

Returns all payments for the vendor invoice.

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
    res, err := s.VendorInvoices.GetPayments1(ctx, operations.GetPayments1Request{
        InvoiceID: 221329,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## Send

Sends a provider invoice.

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
    res, err := s.VendorInvoices.Send(ctx, operations.SendRequest{
        InvoiceID: 400879,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## SetStatus

Changes invoice status to given status.

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
    res, err := s.VendorInvoices.SetStatus(ctx, operations.SetStatusRequest{
        StatusRequestDTO: shared.StatusRequestDTO{
            Status: shared.StatusRequestDTOStatusEnumToBeSent.ToPointer(),
        },
        InvoiceID: 768195,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
