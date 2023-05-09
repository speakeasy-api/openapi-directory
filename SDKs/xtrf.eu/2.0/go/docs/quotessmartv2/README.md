# QuotesSmartV2

## Overview

To change the description use /examples/TagsDescriptions.json

### Available Operations

* [AddFiles2](#addfiles2) - Adds files to the quote as added by PM.
* [Archive1](#archive1) - Prepares a ZIP archive that contains the specified files.
* [ChangeStatus3](#changestatus3) - Changes quote status if possible (400 Bad Request is returned otherwise).
* [CreatePayable3](#createpayable3) - Adds a payable to a quote.
* [CreateReceivable3](#createreceivable3) - Adds a receivable to a quote.
* [Create7](#create7) - Creates a new Smart Quote.
* [DeletePayable3](#deletepayable3) - Deletes a payable.
* [DeleteReceivable3](#deletereceivable3) - Deletes a receivable.
* [GetByID10](#getbyid10) - Returns quote details.
* [GetContacts3](#getcontacts3) - Returns Client Contacts information for a quote.
* [GetCustomFields9](#getcustomfields9) - Returns a list of custom field keys and values for a project.
* [GetFileByID3](#getfilebyid3) - Returns details of a file.
* [GetFileContentByID1](#getfilecontentbyid1) - Downloads a file content.
* [GetFiles1](#getfiles1) - Returns list of files in a quote.
* [GetFinance3](#getfinance3) - Returns finance information for a quote.
* [GetJobs1](#getjobs1) - Returns list of jobs in a quote.
* [UpdateBusinessDays](#updatebusinessdays) - Updates Business Days for a quote.
* [UpdateClientNotes1](#updateclientnotes1) - Updates Client Notes for a quote.
* [UpdateClientReferenceNumber1](#updateclientreferencenumber1) - Updates Client Reference Number for a quote.
* [UpdateContacts3](#updatecontacts3) - Updates Client Contacts for a quote.
* [UpdateCustomField3](#updatecustomfield3) - Updates a custom field with a specified key in a quote.
* [UpdateExpectedDeliveryDate](#updateexpecteddeliverydate) - Updates Expected Delivery Date for a quote.
* [UpdateInternalNotes1](#updateinternalnotes1) - Updates Internal Notes for a quote.
* [UpdatePayable3](#updatepayable3) - Updates a payable.
* [UpdateQuoteExpiry](#updatequoteexpiry) - Updates Quote Expiry Date for a quote.
* [UpdateReceivable3](#updatereceivable3) - Updates a receivable.
* [UpdateSourceLanguage1](#updatesourcelanguage1) - Updates source language for a quote.
* [UpdateSpecialization1](#updatespecialization1) - Updates specialization for a quote.
* [UpdateTargetLanguages1](#updatetargetlanguages1) - Updates target languages for a quote.
* [UpdateVendorInstructions1](#updatevendorinstructions1) - Updates instructions for all vendors performing the jobs in a quote.
* [UpdateVolume1](#updatevolume1) - Updates volume for a quote.
* [UploadFile3](#uploadfile3) - Uploads file to the quote as a file uploaded by PM.

## AddFiles2

Adds files to the quote as added by PM. The files have to be uploaded beforehand (see "POST v2/quotes/{quoteId}/files/upload" operation). The following properties can be specified for each file:<ul><li>category (required, 400 Bad Request is returned otherwise)</li><li>languageIds – when the file category depends on a list of languages</li><li>languageCombinationIds – when the file category depends on a list of language combinations</li></ul>

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
    res, err := s.QuotesSmartV2.AddFiles2(ctx, operations.AddFiles2Request{
        TimeDTO: shared.TimeDTO{
            Value: sdk.Int64(603323),
        },
        QuoteID: "incidunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## Archive1

Prepares a ZIP archive that contains the specified files.

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
    res, err := s.QuotesSmartV2.Archive1(ctx, shared.FilesDto{
        Files: []string{
            "ipsam",
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

## ChangeStatus3

Changes quote status if possible (400 Bad Request is returned otherwise). The status has to be specified using one of the following keys: <ul><li>PENDING – available when the job has one of the following statuses: REQUESTED, REJECTED</li><li>SENT – available when the job has one of the following statuses: PENDING</li><li>APPROVED – available when the job has one of the following statuses: REQUESTED, PENDING, SENT, APPROVED_BY_CLIENT</li><li>REJECTED – available when the job has one of the following statuses: REQUESTED, PENDING, SENT</li></ul>

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
    res, err := s.QuotesSmartV2.ChangeStatus3(ctx, operations.ChangeStatus3Request{
        ProjectStatusDTO: shared.ProjectStatusDTO{
            Status: sdk.String("cupiditate"),
        },
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

## CreatePayable3

Adds a payable to a quote.

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
    res, err := s.QuotesSmartV2.CreatePayable3(ctx, operations.CreatePayable3Request{
        PayableCreateDTO: shared.PayableCreateDTO{
            CalculationUnitID: sdk.Int64(2064),
            CatLogFile: &shared.FileDTO{
                Content: sdk.String("quidem"),
                Name: sdk.String("Gertrude Will"),
                Token: sdk.String("debitis"),
                URL: sdk.String("officia"),
            },
            CurrencyID: sdk.Int64(575062),
            Description: sdk.String("ut"),
            ID: sdk.Int64(256768),
            IgnoreMinimumCharge: sdk.Bool(false),
            InvoiceID: sdk.String("tenetur"),
            JobID: map[string]interface{}{
                "libero": "in",
            },
            JobTypeID: sdk.Int64(329651),
            LanguageCombination: &shared.ChargeLanguageCombinationDTO{
                SourceLanguageID: sdk.Int64(403147),
                TargetLanguageID: sdk.Int64(791762),
            },
            LanguageCombinationIDNumber: sdk.String("ab"),
            MinimumCharge: sdk.Float64(1081.65),
            Quantity: sdk.Float64(9431.43),
            Rate: sdk.Float64(3923.19),
            RateOrigin: shared.PayableCreateDTORateOriginEnumAutocalculated.ToPointer(),
            Total: sdk.Float64(2212.18),
            Type: shared.PayableCreateDTOTypeEnumSimple.ToPointer(),
        },
        QuoteID: "fuga",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CreateReceivable3

Adds a receivable to a quote.

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
    res, err := s.QuotesSmartV2.CreateReceivable3(ctx, operations.CreateReceivable3Request{
        ReceivableCreateDTO: shared.ReceivableCreateDTO{
            CalculationUnitID: sdk.Int64(326903),
            CatLogFile: &shared.FileDTO{
                Content: sdk.String("architecto"),
                Name: sdk.String("Beth Cummerata"),
                Token: sdk.String("praesentium"),
                URL: sdk.String("dolor"),
            },
            CurrencyID: sdk.Int64(349898),
            Description: sdk.String("expedita"),
            ID: sdk.Int64(706411),
            IgnoreMinimumCharge: sdk.Bool(false),
            InvoiceID: sdk.String("impedit"),
            JobTypeID: sdk.Int64(24577),
            LanguageCombination: &shared.ChargeLanguageCombinationDTO{
                SourceLanguageID: sdk.Int64(363482),
                TargetLanguageID: sdk.Int64(633987),
            },
            LanguageCombinationIDNumber: sdk.String("consequuntur"),
            MinimumCharge: sdk.Float64(2305.71),
            Quantity: sdk.Float64(6447.34),
            Rate: sdk.Float64(2687.09),
            RateOrigin: shared.ReceivableCreateDTORateOriginEnumPriceList.ToPointer(),
            TaskID: sdk.Int64(800256),
            Total: sdk.Float64(9322.5),
            Type: shared.ReceivableCreateDTOTypeEnumCat.ToPointer(),
        },
        QuoteID: "quisquam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## Create7

Creates a new Smart Quote. If the specified service ID refers to Classic Quote, 400 Bad Request is returned instead.

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
    res, err := s.QuotesSmartV2.Create7(ctx, shared.QuoteCreateDTO{
        ClientID: sdk.Int64(316550),
        Name: sdk.String("Mr. Kristopher Torphy"),
        OpportunityOfferID: sdk.Int64(60335),
        ServiceID: sdk.Int64(751033),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.QuoteDTOv2 != nil {
        // handle response
    }
}
```

## DeletePayable3

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
    res, err := s.QuotesSmartV2.DeletePayable3(ctx, operations.DeletePayable3Request{
        PayableID: 898193,
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

## DeleteReceivable3

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
    res, err := s.QuotesSmartV2.DeleteReceivable3(ctx, operations.DeleteReceivable3Request{
        QuoteID: "dicta",
        ReceivableID: 426002,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetByID10

Returns quote details. If the specified quote ID refers to Classic Quote, 400 Bad Request is returned instead.

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
    res, err := s.QuotesSmartV2.GetByID10(ctx, operations.GetByID10Request{
        QuoteID: "perspiciatis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetContacts3

Returns Client Contacts information for a quote.

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
    res, err := s.QuotesSmartV2.GetContacts3(ctx, operations.GetContacts3Request{
        QuoteID: "debitis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetCustomFields9

Returns a list of custom field keys and values for a project.

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
    res, err := s.QuotesSmartV2.GetCustomFields9(ctx, operations.GetCustomFields9Request{
        QuoteID: "ullam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetFileByID3

Returns details of a file.

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
    res, err := s.QuotesSmartV2.GetFileByID3(ctx, operations.GetFileByID3Request{
        FileID: "architecto",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetFileContentByID1

Downloads a file content.

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
    res, err := s.QuotesSmartV2.GetFileContentByID1(ctx, operations.GetFileContentByID1Request{
        FileID: "accusantium",
        FileName: "perferendis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetFiles1

Returns list of files in a quote. Only files added to the quote (i.e. files that have assigned category and languages) are listed.

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
    res, err := s.QuotesSmartV2.GetFiles1(ctx, operations.GetFiles1Request{
        QuoteID: "veritatis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetFinance3

Returns finance information for a quote.

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
    res, err := s.QuotesSmartV2.GetFinance3(ctx, operations.GetFinance3Request{
        QuoteID: "provident",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetJobs1

Returns list of jobs in a quote.

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
    res, err := s.QuotesSmartV2.GetJobs1(ctx, operations.GetJobs1Request{
        QuoteID: "cumque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateBusinessDays

Updates Business Days for a quote.

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
    res, err := s.QuotesSmartV2.UpdateBusinessDays(ctx, operations.UpdateBusinessDaysRequest{
        RequestBody: 435531,
        QuoteID: "quibusdam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateClientNotes1

Updates Client Notes for a quote.

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
    res, err := s.QuotesSmartV2.UpdateClientNotes1(ctx, operations.UpdateClientNotes1Request{
        StringDTO: shared.StringDTO{
            Value: sdk.String("quod"),
        },
        QuoteID: "nemo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateClientReferenceNumber1

Updates Client Reference Number for a quote.

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
    res, err := s.QuotesSmartV2.UpdateClientReferenceNumber1(ctx, operations.UpdateClientReferenceNumber1Request{
        StringDTO: shared.StringDTO{
            Value: sdk.String("recusandae"),
        },
        QuoteID: "velit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateContacts3

Updates Client Contacts for a quote.

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
    res, err := s.QuotesSmartV2.UpdateContacts3(ctx, operations.UpdateContacts3Request{
        SmartContactsDTO: shared.SmartContactsDTO{
            AdditionalIds: []int64{
                493591,
                388404,
            },
            PrimaryID: sdk.Int64(152283),
        },
        QuoteID: "odio",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateCustomField3

Updates a custom field with a specified key in a quote.

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
    res, err := s.QuotesSmartV2.UpdateCustomField3(ctx, operations.UpdateCustomField3Request{
        SmartCustomFieldDTO: shared.SmartCustomFieldDTO{
            Value: map[string]interface{}{
                "provident": "cum",
                "doloribus": "facilis",
                "quidem": "itaque",
            },
        },
        Key: "laboriosam",
        QuoteID: "unde",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateExpectedDeliveryDate

Updates Expected Delivery Date for a quote.

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
    res, err := s.QuotesSmartV2.UpdateExpectedDeliveryDate(ctx, operations.UpdateExpectedDeliveryDateRequest{
        TimeDTO: shared.TimeDTO{
            Value: sdk.Int64(263767),
        },
        QuoteID: "perspiciatis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateInternalNotes1

Updates Internal Notes for a quote.

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
    res, err := s.QuotesSmartV2.UpdateInternalNotes1(ctx, operations.UpdateInternalNotes1Request{
        StringDTO: shared.StringDTO{
            Value: sdk.String("hic"),
        },
        QuoteID: "cum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdatePayable3

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
    res, err := s.QuotesSmartV2.UpdatePayable3(ctx, operations.UpdatePayable3Request{
        PayableDTO: shared.PayableDTO{
            CalculationUnitID: sdk.Int64(135548),
            CurrencyID: sdk.Int64(725784),
            Description: sdk.String("nam"),
            ID: sdk.Int64(279172),
            IgnoreMinimumCharge: sdk.Bool(false),
            InvoiceID: sdk.String("recusandae"),
            JobID: map[string]interface{}{
                "id": "saepe",
                "autem": "quo",
                "nesciunt": "illum",
                "nemo": "illum",
            },
            JobTypeID: sdk.Int64(706872),
            LanguageCombination: &shared.ChargeLanguageCombinationDTO{
                SourceLanguageID: sdk.Int64(247618),
                TargetLanguageID: sdk.Int64(649534),
            },
            LanguageCombinationIDNumber: sdk.String("assumenda"),
            MinimumCharge: sdk.Float64(9279.77),
            Quantity: sdk.Float64(7189.81),
            Rate: sdk.Float64(8668.61),
            RateOrigin: shared.PayableDTORateOriginEnumPriceList.ToPointer(),
            Total: sdk.Float64(8161.51),
            Type: shared.PayableDTOTypeEnumCat.ToPointer(),
        },
        PayableID: 911451,
        QuoteID: "laborum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateQuoteExpiry

Updates Quote Expiry Date for a quote.

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
    res, err := s.QuotesSmartV2.UpdateQuoteExpiry(ctx, operations.UpdateQuoteExpiryRequest{
        TimeDTO: shared.TimeDTO{
            Value: sdk.Int64(276337),
        },
        QuoteID: "maxime",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateReceivable3

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
    res, err := s.QuotesSmartV2.UpdateReceivable3(ctx, operations.UpdateReceivable3Request{
        ReceivableDTO: shared.ReceivableDTO{
            CalculationUnitID: sdk.Int64(369523),
            CurrencyID: sdk.Int64(60),
            Description: sdk.String("suscipit"),
            ID: sdk.Int64(647210),
            IgnoreMinimumCharge: sdk.Bool(false),
            InvoiceID: sdk.String("molestias"),
            JobTypeID: sdk.Int64(672889),
            LanguageCombination: &shared.ChargeLanguageCombinationDTO{
                SourceLanguageID: sdk.Int64(668218),
                TargetLanguageID: sdk.Int64(577413),
            },
            LanguageCombinationIDNumber: sdk.String("labore"),
            MinimumCharge: sdk.Float64(7773.78),
            Quantity: sdk.Float64(194.62),
            Rate: sdk.Float64(1435.28),
            RateOrigin: shared.ReceivableDTORateOriginEnumPriceList.ToPointer(),
            TaskID: sdk.Int64(301309),
            Total: sdk.Float64(3085.28),
            Type: shared.ReceivableDTOTypeEnumCat.ToPointer(),
        },
        QuoteID: "hic",
        ReceivableID: 342921,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateSourceLanguage1

Updates source language for a quote.

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
    res, err := s.QuotesSmartV2.UpdateSourceLanguage1(ctx, operations.UpdateSourceLanguage1Request{
        SourceLanguageDTO: shared.SourceLanguageDTO{
            SourceLanguageID: sdk.Int64(888265),
        },
        QuoteID: "unde",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateSpecialization1

Updates specialization for a quote.

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
    res, err := s.QuotesSmartV2.UpdateSpecialization1(ctx, operations.UpdateSpecialization1Request{
        SpecializationDTO: shared.SpecializationDTO{
            SpecializationID: sdk.Int64(860311),
        },
        QuoteID: "error",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateTargetLanguages1

Updates target languages for a quote.

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
    res, err := s.QuotesSmartV2.UpdateTargetLanguages1(ctx, operations.UpdateTargetLanguages1Request{
        TargetLanguagesDTO: shared.TargetLanguagesDTO{
            TargetLanguageIds: []int64{
                298613,
                344289,
                460909,
            },
        },
        QuoteID: "corrupti",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateVendorInstructions1

Updates instructions for all vendors performing the jobs in a quote. See also "PUT /jobs/{jobId}/instructions" for updating instructions for a specific job in a project or quote.

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
    res, err := s.QuotesSmartV2.UpdateVendorInstructions1(ctx, operations.UpdateVendorInstructions1Request{
        StringDTO: shared.StringDTO{
            Value: sdk.String("fuga"),
        },
        QuoteID: "facere",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateVolume1

Updates volume for a quote.

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
    res, err := s.QuotesSmartV2.UpdateVolume1(ctx, operations.UpdateVolume1Request{
        BigDecimalDTO: shared.BigDecimalDTO{
            Value: sdk.Float64(7736.59),
        },
        QuoteID: "quasi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UploadFile3

Uploads file to the quote as a file uploaded by PM. Only one file can be uploaded at once. When the upload is finished the file has to be added by specifying its category and languages (see "PUT /v2/quotes/{quoteId}/files/add" operation).

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
    res, err := s.QuotesSmartV2.UploadFile3(ctx, operations.UploadFile3Request{
        FileToUploadDto: shared.FileToUploadDto{
            File: &shared.FileToUploadDtoFile{
                Content: []byte("deserunt"),
                File: "quod",
            },
        },
        QuoteID: "laboriosam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
