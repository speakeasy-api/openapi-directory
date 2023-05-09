# ProjectsClassic

## Overview

To change the description use /examples/TagsDescriptions.json

### Available Operations

* [CreateLanguageCombination](#createlanguagecombination) - Creates a new language combination for a given project without creating a task.
* [CreatePayable](#createpayable) - Adds a payable to a project.
* [CreateReceivable](#createreceivable) - Adds a receivable to a project.
* [CreateTask](#createtask) - Creates a new task for a given project.
* [Create5](#create5) - Creates a new Classic Project.
* [DeletePayable](#deletepayable) - Deletes a payable.
* [DeleteReceivable](#deletereceivable) - Deletes a receivable.
* [Delete12](#delete12) - Removes a project.
* [GetAllIds6](#getallids6) - Returns projects' internal identifiers.
* [GetByID7](#getbyid7) - Returns project details.
* [GetContacts](#getcontacts) - Returns contacts of a given project.
* [GetCustomFields5](#getcustomfields5) - Returns custom fields of a given project.
* [GetDates1](#getdates1) - Returns dates of a given project.
* [GetFileByID](#getfilebyid) - Downloads a file.
* [GetFinance](#getfinance) - Returns finance of a given project.
* [GetInstructions](#getinstructions) - Returns instructions of a given project.
* [UpdateContacts](#updatecontacts) - Updates contacts of a given project.
* [UpdateCustomFields3](#updatecustomfields3) - Updates custom fields of a given project.
* [UpdateDates1](#updatedates1) - Updates dates of a given project.
* [UpdateInstructions1](#updateinstructions1) - Updates instructions of a given project.
* [UpdatePayable](#updatepayable) - Updates a payable.
* [UpdateReceivable](#updatereceivable) - Updates a receivable.

## CreateLanguageCombination

Creates a new language combination for a given project without creating a task.

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
    res, err := s.ProjectsClassic.CreateLanguageCombination(ctx, operations.CreateLanguageCombinationRequest{
        CommonLanguageCombinationDTO: shared.CommonLanguageCombinationDTO{
            SourceLanguageID: sdk.Int64(722184),
            TargetLanguageID: sdk.Int64(877399),
        },
        ProjectID: "voluptatem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CreatePayable

Adds a payable to a project.

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
    res, err := s.ProjectsClassic.CreatePayable(ctx, operations.CreatePayableRequest{
        PayableCreateDTO: shared.PayableCreateDTO{
            CalculationUnitID: sdk.Int64(371919),
            CatLogFile: &shared.FileDTO{
                Content: sdk.String("vel"),
                Name: sdk.String("Frances Franey"),
                Token: sdk.String("sint"),
                URL: sdk.String("nulla"),
            },
            CurrencyID: sdk.Int64(643678),
            Description: sdk.String("esse"),
            ID: sdk.Int64(364463),
            IgnoreMinimumCharge: sdk.Bool(false),
            InvoiceID: sdk.String("reprehenderit"),
            JobID: map[string]interface{}{
                "quis": "sint",
                "accusamus": "impedit",
                "hic": "necessitatibus",
            },
            JobTypeID: sdk.Int64(991891),
            LanguageCombination: &shared.ChargeLanguageCombinationDTO{
                SourceLanguageID: sdk.Int64(404306),
                TargetLanguageID: sdk.Int64(376741),
            },
            LanguageCombinationIDNumber: sdk.String("debitis"),
            MinimumCharge: sdk.Float64(9661.48),
            Quantity: sdk.Float64(650.82),
            Rate: sdk.Float64(7918.8),
            RateOrigin: shared.PayableCreateDTORateOriginEnumFilledManually.ToPointer(),
            Total: sdk.Float64(6756.89),
            Type: shared.PayableCreateDTOTypeEnumSimple.ToPointer(),
        },
        ProjectID: "velit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CreateReceivable

Adds a receivable to a project.

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
    res, err := s.ProjectsClassic.CreateReceivable(ctx, operations.CreateReceivableRequest{
        ReceivableCreateDTO: shared.ReceivableCreateDTO{
            CalculationUnitID: sdk.Int64(538869),
            CatLogFile: &shared.FileDTO{
                Content: sdk.String("ipsum"),
                Name: sdk.String("Victor Rogahn"),
                Token: sdk.String("dolore"),
                URL: sdk.String("iusto"),
            },
            CurrencyID: sdk.Int64(453094),
            Description: sdk.String("sequi"),
            ID: sdk.Int64(493958),
            IgnoreMinimumCharge: sdk.Bool(false),
            InvoiceID: sdk.String("neque"),
            JobTypeID: sdk.Int64(778172),
            LanguageCombination: &shared.ChargeLanguageCombinationDTO{
                SourceLanguageID: sdk.Int64(535468),
                TargetLanguageID: sdk.Int64(844235),
            },
            LanguageCombinationIDNumber: sdk.String("iure"),
            MinimumCharge: sdk.Float64(1390.72),
            Quantity: sdk.Float64(9749.9),
            Rate: sdk.Float64(4269.04),
            RateOrigin: shared.ReceivableCreateDTORateOriginEnumPriceList.ToPointer(),
            TaskID: sdk.Int64(842855),
            Total: sdk.Float64(789.69),
            Type: shared.ReceivableCreateDTOTypeEnumCat.ToPointer(),
        },
        ProjectID: "libero",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CreateTask

Creates a new task for a given project.<p>
  Required fields:
  <ul>
    <li>languageCombination</li>
    <li>specializationId</li>
    <li>workflowId</li>
  </ul>
</p>


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
    res, err := s.ProjectsClassic.CreateTask(ctx, operations.CreateTaskRequest{
        TaskCreateDTO: shared.TaskCreateDTO{
            ClientTaskPONumber: sdk.String("architecto"),
            Dates: &shared.ProjectDatesDTO{
                ActualDeliveryDate: &shared.TimeDTO{
                    Value: sdk.Int64(975425),
                },
                ActualStartDate: &shared.TimeDTO{
                    Value: sdk.Int64(156383),
                },
                Deadline: &shared.TimeDTO{
                    Value: sdk.Int64(782090),
                },
                StartDate: &shared.TimeDTO{
                    Value: sdk.Int64(304198),
                },
            },
            Files: []shared.TaskFileDTO{
                shared.TaskFileDTO{
                    Category: shared.TaskFileDTOCategoryEnumWorkfile.ToPointer(),
                    Content: sdk.String("accusantium"),
                    Name: sdk.String("Rosemary Breitenberg"),
                    Token: sdk.String("eum"),
                    URL: sdk.String("velit"),
                },
            },
            Instructions: &shared.InstructionsDTO{
                ForProvider: sdk.String("ut"),
                FromCustomer: sdk.String("perspiciatis"),
                Internal: sdk.String("earum"),
                Notes: sdk.String("dicta"),
                PaymentNoteForCustomer: sdk.String("impedit"),
                PaymentNoteForVendor: sdk.String("voluptatibus"),
            },
            LanguageCombination: &shared.CommonLanguageCombinationDTO{
                SourceLanguageID: sdk.Int64(610987),
                TargetLanguageID: sdk.Int64(932562),
            },
            Name: sdk.String("Alma Waters"),
            People: &shared.ClassicPeopleDTO{
                CustomerContacts: &shared.ContactsDTO{
                    AdditionalIds: []int64{
                        224467,
                        483394,
                    },
                    PrimaryID: sdk.Int64(24753),
                    SendBackToID: sdk.Int64(39992),
                },
                ResponsiblePersons: &shared.ResponsiblePersonsDTO{
                    ProjectCoordinatorID: sdk.Int64(7468),
                    ProjectManagerID: sdk.Int64(639705),
                },
            },
            SpecializationID: sdk.Int64(927403),
            WorkflowID: sdk.Int64(408303),
        },
        ProjectID: "quidem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## Create5

Creates a new Classic Project. If the specified service ID refers to Smart Project, 400 Bad Request is returned instead.

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
    res, err := s.ProjectsClassic.Create5(ctx, shared.ClassicProjectCreateDTO{
        CategoriesIds: []int64{
            705148,
            809365,
        },
        CustomerID: 596065,
        Dates: &shared.ProjectDatesDTO{
            ActualDeliveryDate: &shared.TimeDTO{
                Value: sdk.Int64(709036),
            },
            ActualStartDate: &shared.TimeDTO{
                Value: sdk.Int64(537236),
            },
            Deadline: &shared.TimeDTO{
                Value: sdk.Int64(954334),
            },
            StartDate: &shared.TimeDTO{
                Value: sdk.Int64(455579),
            },
        },
        InputFiles: []shared.TaskFileDTO{
            shared.TaskFileDTO{
                Category: shared.TaskFileDTOCategoryEnumRef.ToPointer(),
                Content: sdk.String("necessitatibus"),
                Name: sdk.String("Rodolfo Hintz"),
                Token: sdk.String("error"),
                URL: sdk.String("esse"),
            },
            shared.TaskFileDTO{
                Category: shared.TaskFileDTOCategoryEnumTm.ToPointer(),
                Content: sdk.String("veritatis"),
                Name: sdk.String("Mrs. Glenn Bruen"),
                Token: sdk.String("qui"),
                URL: sdk.String("iste"),
            },
        },
        Instructions: &shared.InstructionsDTO{
            ForProvider: sdk.String("ex"),
            FromCustomer: sdk.String("nemo"),
            Internal: sdk.String("soluta"),
            Notes: sdk.String("libero"),
            PaymentNoteForCustomer: sdk.String("rem"),
            PaymentNoteForVendor: sdk.String("dolorum"),
        },
        Name: sdk.String("Beverly Abbott"),
        People: &shared.ClassicPeopleDTO{
            CustomerContacts: &shared.ContactsDTO{
                AdditionalIds: []int64{
                    63553,
                },
                PrimaryID: sdk.Int64(264333),
                SendBackToID: sdk.Int64(208253),
            },
            ResponsiblePersons: &shared.ResponsiblePersonsDTO{
                ProjectCoordinatorID: sdk.Int64(348357),
                ProjectManagerID: sdk.Int64(932394),
            },
        },
        ServiceID: 88248,
        SourceLanguageID: sdk.Int64(215398),
        SpecializationID: 602229,
        TargetLanguagesIds: []int64{
            714376,
            802894,
            157222,
            159146,
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

## DeletePayable

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
    res, err := s.ProjectsClassic.DeletePayable(ctx, operations.DeletePayableRequest{
        PayableID: 342137,
        ProjectID: "omnis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteReceivable

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
    res, err := s.ProjectsClassic.DeleteReceivable(ctx, operations.DeleteReceivableRequest{
        ProjectID: "libero",
        ReceivableID: 115661,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## Delete12

Removes a project.

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
    res, err := s.ProjectsClassic.Delete12(ctx, operations.Delete12Request{
        ProjectID: "id",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetAllIds6

Returns projects' internal identifiers.

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
    res, err := s.ProjectsClassic.GetAllIds6(ctx, operations.GetAllIds6Request{
        UpdatedSince: sdk.Int64(727888),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetByID7

Returns project details. If the specified project ID refers to Smart Project, 400 Bad Request is returned instead.

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
    res, err := s.ProjectsClassic.GetByID7(ctx, operations.GetByID7Request{
        Embed: sdk.String("fugiat"),
        ProjectID: "officia",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetContacts

Returns contacts of a given project.

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
    res, err := s.ProjectsClassic.GetContacts(ctx, operations.GetContactsRequest{
        ProjectID: "quos",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetCustomFields5

Returns custom fields of a given project.

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
    res, err := s.ProjectsClassic.GetCustomFields5(ctx, operations.GetCustomFields5Request{
        ProjectID: "placeat",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetDates1

Returns dates of a given project.

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
    res, err := s.ProjectsClassic.GetDates1(ctx, operations.GetDates1Request{
        ProjectID: "sit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetFileByID

Downloads a file.

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
    res, err := s.ProjectsClassic.GetFileByID(ctx, operations.GetFileByIDRequest{
        FileID: "iusto",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetFinance

Returns finance of a given project.

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
    res, err := s.ProjectsClassic.GetFinance(ctx, operations.GetFinanceRequest{
        ProjectID: "ipsa",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetInstructions

Returns instructions of a given project.

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
    res, err := s.ProjectsClassic.GetInstructions(ctx, operations.GetInstructionsRequest{
        ProjectID: "voluptates",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateContacts

Updates contacts of a given project.

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
    res, err := s.ProjectsClassic.UpdateContacts(ctx, operations.UpdateContactsRequest{
        ContactsDTO: shared.ContactsDTO{
            AdditionalIds: []int64{
                49348,
            },
            PrimaryID: sdk.Int64(517137),
            SendBackToID: sdk.Int64(292888),
        },
        ProjectID: "eligendi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateCustomFields3

Updates custom fields of a given project.

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
    res, err := s.ProjectsClassic.UpdateCustomFields3(ctx, operations.UpdateCustomFields3Request{
        RequestBody: []shared.CustomFieldDTO{
            shared.CustomFieldDTO{
                Key: sdk.String("voluptatem"),
                Name: sdk.String("Tamara D'Amore MD"),
                Type: shared.CustomFieldDTOTypeEnumSelection.ToPointer(),
                Value: map[string]interface{}{
                    "molestiae": "provident",
                    "accusamus": "necessitatibus",
                    "tempore": "sint",
                },
            },
            shared.CustomFieldDTO{
                Key: sdk.String("ea"),
                Name: sdk.String("Brittany Prosacco"),
                Type: shared.CustomFieldDTOTypeEnumMultiSelection.ToPointer(),
                Value: map[string]interface{}{
                    "cum": "at",
                    "alias": "quia",
                    "quidem": "fuga",
                    "repudiandae": "accusantium",
                },
            },
            shared.CustomFieldDTO{
                Key: sdk.String("expedita"),
                Name: sdk.String("Jesse Sporer"),
                Type: shared.CustomFieldDTOTypeEnumText.ToPointer(),
                Value: map[string]interface{}{
                    "corporis": "error",
                },
            },
        },
        ProjectID: "earum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateDates1

Updates dates of a given project.

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
    res, err := s.ProjectsClassic.UpdateDates1(ctx, operations.UpdateDates1Request{
        ProjectDatesDTO: shared.ProjectDatesDTO{
            ActualDeliveryDate: &shared.TimeDTO{
                Value: sdk.Int64(239337),
            },
            ActualStartDate: &shared.TimeDTO{
                Value: sdk.Int64(923306),
            },
            Deadline: &shared.TimeDTO{
                Value: sdk.Int64(630871),
            },
            StartDate: &shared.TimeDTO{
                Value: sdk.Int64(282837),
            },
        },
        ProjectID: "quidem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateInstructions1

Updates instructions of a given project.

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
    res, err := s.ProjectsClassic.UpdateInstructions1(ctx, operations.UpdateInstructions1Request{
        InstructionsDTO: shared.InstructionsDTO{
            ForProvider: sdk.String("quis"),
            FromCustomer: sdk.String("beatae"),
            Internal: sdk.String("unde"),
            Notes: sdk.String("molestiae"),
            PaymentNoteForCustomer: sdk.String("delectus"),
            PaymentNoteForVendor: sdk.String("cupiditate"),
        },
        ProjectID: "fugit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdatePayable

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
    res, err := s.ProjectsClassic.UpdatePayable(ctx, operations.UpdatePayableRequest{
        PayableDTO: shared.PayableDTO{
            CalculationUnitID: sdk.Int64(253625),
            CurrencyID: sdk.Int64(256916),
            Description: sdk.String("nesciunt"),
            ID: sdk.Int64(873557),
            IgnoreMinimumCharge: sdk.Bool(false),
            InvoiceID: sdk.String("officia"),
            JobID: map[string]interface{}{
                "optio": "necessitatibus",
                "corporis": "qui",
            },
            JobTypeID: sdk.Int64(708898),
            LanguageCombination: &shared.ChargeLanguageCombinationDTO{
                SourceLanguageID: sdk.Int64(532669),
                TargetLanguageID: sdk.Int64(587375),
            },
            LanguageCombinationIDNumber: sdk.String("minima"),
            MinimumCharge: sdk.Float64(8095.94),
            Quantity: sdk.Float64(3165.42),
            Rate: sdk.Float64(2040.72),
            RateOrigin: shared.PayableDTORateOriginEnumPriceList.ToPointer(),
            Total: sdk.Float64(7963.97),
            Type: shared.PayableDTOTypeEnumSimple.ToPointer(),
        },
        PayableID: 266408,
        ProjectID: "corporis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateReceivable

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
    res, err := s.ProjectsClassic.UpdateReceivable(ctx, operations.UpdateReceivableRequest{
        ReceivableDTO: shared.ReceivableDTO{
            CalculationUnitID: sdk.Int64(298264),
            CurrencyID: sdk.Int64(914971),
            Description: sdk.String("maiores"),
            ID: sdk.Int64(731744),
            IgnoreMinimumCharge: sdk.Bool(false),
            InvoiceID: sdk.String("aperiam"),
            JobTypeID: sdk.Int64(727547),
            LanguageCombination: &shared.ChargeLanguageCombinationDTO{
                SourceLanguageID: sdk.Int64(189753),
                TargetLanguageID: sdk.Int64(289913),
            },
            LanguageCombinationIDNumber: sdk.String("totam"),
            MinimumCharge: sdk.Float64(5777.09),
            Quantity: sdk.Float64(3759.94),
            Rate: sdk.Float64(7791.8),
            RateOrigin: shared.ReceivableDTORateOriginEnumPriceProfile.ToPointer(),
            TaskID: sdk.Int64(795591),
            Total: sdk.Float64(6845.53),
            Type: shared.ReceivableDTOTypeEnumSimple.ToPointer(),
        },
        ProjectID: "est",
        ReceivableID: 770873,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
