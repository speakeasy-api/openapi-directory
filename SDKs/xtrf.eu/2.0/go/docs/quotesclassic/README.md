# QuotesClassic

## Overview

To change the description use /examples/TagsDescriptions.json

### Available Operations

* [CreateLanguageCombination1](#createlanguagecombination1) - Creates a new language combination for a given quote without creating a task.
* [CreatePayable1](#createpayable1) - Adds a payable.
* [CreateReceivable1](#createreceivable1) - Adds a receivable.
* [CreateTask1](#createtask1) - Creates a new task for a given quote.
* [DeletePayable1](#deletepayable1) - Deletes a payable.
* [DeleteReceivable1](#deletereceivable1) - Deletes a receivable.
* [Delete13](#delete13) - Removes a quote.
* [GetAllIds7](#getallids7) - Returns quotes' internal identifiers.
* [GetByID8](#getbyid8) - Returns quote details.
* [GetCustomFields6](#getcustomfields6) - Returns custom fields of a given quote.
* [GetDates2](#getdates2) - Returns dates of a given quote.
* [GetFinance1](#getfinance1) - Returns finance of a given quote.
* [GetInstructions1](#getinstructions1) - Returns instructions of a given quote.
* [Send1](#send1) - Sends a quote for customer confirmation.
* [Start](#start) - Starts a quote.
* [UpdateCustomFields4](#updatecustomfields4) - Updates custom fields of a given quote.
* [UpdateInstructions2](#updateinstructions2) - Updates instructions of a given quote.
* [UpdatePayable1](#updatepayable1) - Updates a payable.
* [UpdateReceivable1](#updatereceivable1) - Updates a receivable.

## CreateLanguageCombination1

Creates a new language combination for a given quote without creating a task.

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
    res, err := s.QuotesClassic.CreateLanguageCombination1(ctx, operations.CreateLanguageCombination1Request{
        CommonLanguageCombinationDTO: shared.CommonLanguageCombinationDTO{
            SourceLanguageID: sdk.Int64(252700),
            TargetLanguageID: sdk.Int64(68093),
        },
        QuoteID: "illo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CreatePayable1

Adds a payable.

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
    res, err := s.QuotesClassic.CreatePayable1(ctx, operations.CreatePayable1Request{
        PayableCreateDTO: shared.PayableCreateDTO{
            CalculationUnitID: sdk.Int64(943851),
            CatLogFile: &shared.FileDTO{
                Content: sdk.String("deserunt"),
                Name: sdk.String("Kyle Reichel"),
                Token: sdk.String("labore"),
                URL: sdk.String("numquam"),
            },
            CurrencyID: sdk.Int64(921193),
            Description: sdk.String("modi"),
            ID: sdk.Int64(450209),
            IgnoreMinimumCharge: sdk.Bool(false),
            InvoiceID: sdk.String("explicabo"),
            JobID: map[string]interface{}{
                "rem": "aperiam",
                "odit": "deleniti",
                "enim": "voluptate",
                "similique": "minima",
            },
            JobTypeID: sdk.Int64(727544),
            LanguageCombination: &shared.ChargeLanguageCombinationDTO{
                SourceLanguageID: sdk.Int64(300189),
                TargetLanguageID: sdk.Int64(24272),
            },
            LanguageCombinationIDNumber: sdk.String("modi"),
            MinimumCharge: sdk.Float64(4301.16),
            Quantity: sdk.Float64(1995.29),
            Rate: sdk.Float64(6521.25),
            RateOrigin: shared.PayableCreateDTORateOriginEnumPriceList.ToPointer(),
            Total: sdk.Float64(8532.46),
            Type: shared.PayableCreateDTOTypeEnumSimple.ToPointer(),
        },
        QuoteID: "molestiae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CreateReceivable1

Adds a receivable.

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
    res, err := s.QuotesClassic.CreateReceivable1(ctx, operations.CreateReceivable1Request{
        ReceivableCreateDTO: shared.ReceivableCreateDTO{
            CalculationUnitID: sdk.Int64(330600),
            CatLogFile: &shared.FileDTO{
                Content: sdk.String("reiciendis"),
                Name: sdk.String("Dr. Pauline Ankunding"),
                Token: sdk.String("commodi"),
                URL: sdk.String("numquam"),
            },
            CurrencyID: sdk.Int64(677045),
            Description: sdk.String("possimus"),
            ID: sdk.Int64(452399),
            IgnoreMinimumCharge: sdk.Bool(false),
            InvoiceID: sdk.String("consectetur"),
            JobTypeID: sdk.Int64(200637),
            LanguageCombination: &shared.ChargeLanguageCombinationDTO{
                SourceLanguageID: sdk.Int64(310629),
                TargetLanguageID: sdk.Int64(929476),
            },
            LanguageCombinationIDNumber: sdk.String("minus"),
            MinimumCharge: sdk.Float64(1226.62),
            Quantity: sdk.Float64(7151.43),
            Rate: sdk.Float64(4813.75),
            RateOrigin: shared.ReceivableCreateDTORateOriginEnumFilledManually.ToPointer(),
            TaskID: sdk.Int64(91728),
            Total: sdk.Float64(7049.48),
            Type: shared.ReceivableCreateDTOTypeEnumSimple.ToPointer(),
        },
        QuoteID: "autem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CreateTask1

Creates a new task for a given quote. Required fields are presented in the example.

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
    res, err := s.QuotesClassic.CreateTask1(ctx, operations.CreateTask1Request{
        TaskDTO: shared.TaskDTO{
            ClientTaskPONumber: sdk.String("fuga"),
            CustomFields: []shared.CustomFieldDTO{
                shared.CustomFieldDTO{
                    Key: sdk.String("rem"),
                    Name: sdk.String("Brandy Langosh Jr."),
                    Type: shared.CustomFieldDTOTypeEnumText.ToPointer(),
                    Value: map[string]interface{}{
                        "delectus": "mollitia",
                        "nulla": "officia",
                        "sed": "voluptatem",
                        "alias": "eveniet",
                    },
                },
            },
            Dates: &shared.ProjectDatesDTO{
                ActualDeliveryDate: &shared.TimeDTO{
                    Value: sdk.Int64(941668),
                },
                ActualStartDate: &shared.TimeDTO{
                    Value: sdk.Int64(27982),
                },
                Deadline: &shared.TimeDTO{
                    Value: sdk.Int64(278325),
                },
                StartDate: &shared.TimeDTO{
                    Value: sdk.Int64(185448),
                },
            },
            Finance: &shared.TaskFinanceDTO{
                Invoiceable: sdk.Bool(false),
            },
            ID: sdk.Int64(185897),
            IDNumber: sdk.String("necessitatibus"),
            Instructions: &shared.InstructionsDTO{
                ForProvider: sdk.String("harum"),
                FromCustomer: sdk.String("explicabo"),
                Internal: sdk.String("beatae"),
                Notes: sdk.String("aliquid"),
                PaymentNoteForCustomer: sdk.String("modi"),
                PaymentNoteForVendor: sdk.String("optio"),
            },
            Jobs: &shared.TaskJobsDTO{
                JobCount: sdk.Int(975095),
                JobIds: []int64{
                    639463,
                    730478,
                    520678,
                },
            },
            LanguageCombination: &shared.CommonLanguageCombinationDTO{
                SourceLanguageID: sdk.Int64(192846),
                TargetLanguageID: sdk.Int64(397919),
            },
            Name: sdk.String("Krista Kuphal"),
            People: &shared.ClassicPeopleDTO{
                CustomerContacts: &shared.ContactsDTO{
                    AdditionalIds: []int64{
                        997918,
                        861123,
                        671116,
                        617657,
                    },
                    PrimaryID: sdk.Int64(883780),
                    SendBackToID: sdk.Int64(42906),
                },
                ResponsiblePersons: &shared.ResponsiblePersonsDTO{
                    ProjectCoordinatorID: sdk.Int64(392967),
                    ProjectManagerID: sdk.Int64(700856),
                },
            },
            ProjectID: sdk.Int64(924840),
            QuoteID: sdk.Int64(913285),
        },
        QuoteID: "non",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeletePayable1

Deletes a payable.

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
    res, err := s.QuotesClassic.DeletePayable1(ctx, operations.DeletePayable1Request{
        PayableID: 524577,
        QuoteID: "quia",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteReceivable1

Deletes a receivable.

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
    res, err := s.QuotesClassic.DeleteReceivable1(ctx, operations.DeleteReceivable1Request{
        QuoteID: "ullam",
        ReceivableID: 786860,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## Delete13

Removes a quote.

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
    res, err := s.QuotesClassic.Delete13(ctx, operations.Delete13Request{
        QuoteID: "dicta",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetAllIds7

Returns quotes' internal identifiers.

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
    res, err := s.QuotesClassic.GetAllIds7(ctx, operations.GetAllIds7Request{
        UpdatedSince: sdk.Int64(973017),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetByID8

Returns quote details. If the specified quote ID refers to Smart Quote, 400 Bad Request is returned instead.

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
    res, err := s.QuotesClassic.GetByID8(ctx, operations.GetByID8Request{
        Embed: sdk.String("eligendi"),
        QuoteID: "quae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetCustomFields6

Returns custom fields of a given quote.

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
    res, err := s.QuotesClassic.GetCustomFields6(ctx, operations.GetCustomFields6Request{
        QuoteID: "officiis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetDates2

Returns dates of a given quote.

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
    res, err := s.QuotesClassic.GetDates2(ctx, operations.GetDates2Request{
        QuoteID: "architecto",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetFinance1

Returns finance of a given quote.

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
    res, err := s.QuotesClassic.GetFinance1(ctx, operations.GetFinance1Request{
        QuoteID: "architecto",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetInstructions1

Returns instructions of a given quote.

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
    res, err := s.QuotesClassic.GetInstructions1(ctx, operations.GetInstructions1Request{
        QuoteID: "enim",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## Send1

Sends a quote for customer confirmation. Quote status is changed to SENT and a document is sent to the customer.

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
    res, err := s.QuotesClassic.Send1(ctx, operations.Send1Request{
        QuoteID: "optio",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## Start

Starts a quote.

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
    res, err := s.QuotesClassic.Start(ctx, operations.StartRequest{
        QuoteID: "rem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateCustomFields4

Updates custom fields of a given quote.

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
    res, err := s.QuotesClassic.UpdateCustomFields4(ctx, operations.UpdateCustomFields4Request{
        RequestBody: []shared.CustomFieldDTO{
            shared.CustomFieldDTO{
                Key: sdk.String("facilis"),
                Name: sdk.String("Ms. Tommie Morar"),
                Type: shared.CustomFieldDTOTypeEnumDateAndTime.ToPointer(),
                Value: map[string]interface{}{
                    "itaque": "maxime",
                    "modi": "consequuntur",
                },
            },
        },
        QuoteID: "assumenda",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateInstructions2

Updates instructions of a given quote.

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
    res, err := s.QuotesClassic.UpdateInstructions2(ctx, operations.UpdateInstructions2Request{
        InstructionsDTO: shared.InstructionsDTO{
            ForProvider: sdk.String("vero"),
            FromCustomer: sdk.String("doloribus"),
            Internal: sdk.String("impedit"),
            Notes: sdk.String("porro"),
            PaymentNoteForCustomer: sdk.String("accusamus"),
            PaymentNoteForVendor: sdk.String("totam"),
        },
        QuoteID: "reiciendis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdatePayable1

Updates a payable.

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
    res, err := s.QuotesClassic.UpdatePayable1(ctx, operations.UpdatePayable1Request{
        PayableDTO: shared.PayableDTO{
            CalculationUnitID: sdk.Int64(66074),
            CurrencyID: sdk.Int64(573444),
            Description: sdk.String("nihil"),
            ID: sdk.Int64(458412),
            IgnoreMinimumCharge: sdk.Bool(false),
            InvoiceID: sdk.String("iure"),
            JobID: map[string]interface{}{
                "nesciunt": "debitis",
                "vel": "neque",
            },
            JobTypeID: sdk.Int64(357758),
            LanguageCombination: &shared.ChargeLanguageCombinationDTO{
                SourceLanguageID: sdk.Int64(375350),
                TargetLanguageID: sdk.Int64(163684),
            },
            LanguageCombinationIDNumber: sdk.String("officia"),
            MinimumCharge: sdk.Float64(4413.74),
            Quantity: sdk.Float64(7160.33),
            Rate: sdk.Float64(2628),
            RateOrigin: shared.PayableDTORateOriginEnumPriceProfile.ToPointer(),
            Total: sdk.Float64(5220.62),
            Type: shared.PayableDTOTypeEnumCat.ToPointer(),
        },
        PayableID: 35160,
        QuoteID: "veniam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateReceivable1

Updates a receivable.

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
    res, err := s.QuotesClassic.UpdateReceivable1(ctx, operations.UpdateReceivable1Request{
        ReceivableDTO: shared.ReceivableDTO{
            CalculationUnitID: sdk.Int64(906232),
            CurrencyID: sdk.Int64(206063),
            Description: sdk.String("facere"),
            ID: sdk.Int64(307173),
            IgnoreMinimumCharge: sdk.Bool(false),
            InvoiceID: sdk.String("quos"),
            JobTypeID: sdk.Int64(984773),
            LanguageCombination: &shared.ChargeLanguageCombinationDTO{
                SourceLanguageID: sdk.Int64(851809),
                TargetLanguageID: sdk.Int64(668577),
            },
            LanguageCombinationIDNumber: sdk.String("delectus"),
            MinimumCharge: sdk.Float64(2452.78),
            Quantity: sdk.Float64(1105.22),
            Rate: sdk.Float64(2010.96),
            RateOrigin: shared.ReceivableDTORateOriginEnumFilledManually.ToPointer(),
            TaskID: sdk.Int64(74895),
            Total: sdk.Float64(9979.95),
            Type: shared.ReceivableDTOTypeEnumSimple.ToPointer(),
        },
        QuoteID: "doloribus",
        ReceivableID: 823753,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
