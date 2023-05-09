# ProjectsSmartV2

## Overview

To change the description use /examples/TagsDescriptions.json

### Available Operations

* [AddExternalFileLinks](#addexternalfilelinks)
* [AddFileLinks1](#addfilelinks1) - Adds file links to the project as added by PM.
* [AddFiles1](#addfiles1) - Adds files to the project as added by PM.
* [AddJobToProcess](#addjobtoprocess) - Returns process id.
* [Archive](#archive) - Prepares a ZIP archive that contains the specified files.
* [ChangeStatus2](#changestatus2) - Changes project status if possible (400 Bad Request is returned otherwise).
* [CreatePayable2](#createpayable2) - Adds a payable to a project.
* [CreateReceivable2](#createreceivable2) - Adds a receivable to a project.
* [Create6](#create6) - Creates a new Smart Project.
* [DeletePayable2](#deletepayable2) - Deletes a payable.
* [DeleteReceivable2](#deletereceivable2) - Deletes a receivable.
* [GetByExternalID1](#getbyexternalid1) - Returns project details.
* [GetByID9](#getbyid9) - Returns project details.
* [GetCATToolProjectInfo](#getcattoolprojectinfo) - Returns if cat tool project is created or queued.
* [GetContacts2](#getcontacts2) - Returns Client Contacts information for a project.
* [GetCustomFields8](#getcustomfields8) - Returns a list of custom field keys and values for a project.
* [GetDeliverableFiles](#getdeliverablefiles) - Returns list of files in a project, that are ready to be delivered to client.
* [GetFileByID2](#getfilebyid2) - Returns details of a file.
* [GetFileContentByID](#getfilecontentbyid) - Downloads a file content.
* [GetFiles](#getfiles) - Returns list of files in a project.
* [GetFinance2](#getfinance2) - Returns finance information for a project.
* [GetJobs](#getjobs) - Returns list of jobs in a project.
* [GetProcessID](#getprocessid) - Returns process id.
* [UpdateClientDeadline](#updateclientdeadline) - Updates Client Deadline for a project.
* [UpdateClientNotes](#updateclientnotes) - Updates Client Notes for a project.
* [UpdateClientReferenceNumber](#updateclientreferencenumber) - Updates Client Reference Number for a project.
* [UpdateContacts2](#updatecontacts2) - Updates Client Contacts for a project.
* [UpdateCustomField2](#updatecustomfield2) - Updates a custom field with a specified key in a project
* [UpdateInternalNotes](#updateinternalnotes) - Updates Internal Notes for a project.
* [UpdateOrderedOn](#updateorderedon) - Updates Order Date for a project.
* [UpdatePayable2](#updatepayable2) - Updates a payable.
* [UpdateReceivable2](#updatereceivable2) - Updates a receivable.
* [UpdateSourceLanguage](#updatesourcelanguage) - Updates source language for a project.
* [UpdateSpecialization](#updatespecialization) - Updates specialization for a project.
* [UpdateTargetLanguages](#updatetargetlanguages) - Updates target languages for a project.
* [UpdateVendorInstructions](#updatevendorinstructions) - Updates instructions for all vendors performing the jobs in a project.
* [UpdateVolume](#updatevolume) - Updates volume for a project.
* [UploadFile2](#uploadfile2) - Uploads file to the project as a file uploaded by PM.

## AddExternalFileLinks

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
    res, err := s.ProjectsSmartV2.AddExternalFileLinks(ctx, operations.AddExternalFileLinksRequest{
        ExternalFileDto: shared.ExternalFileDto{
            Category: sdk.String("delectus"),
            ExternalInfo: map[string]string{
                "vero": "odit",
                "repellat": "pariatur",
                "nemo": "reprehenderit",
            },
            Filename: sdk.String("aperiam"),
            LanguageCombinationIds: []shared.LanguageCombinationDto{
                shared.LanguageCombinationDto{
                    SourceLanguageID: sdk.Int64(325297),
                    TargetLanguageID: sdk.Int64(448369),
                },
                shared.LanguageCombinationDto{
                    SourceLanguageID: sdk.Int64(496915),
                    TargetLanguageID: sdk.Int64(567846),
                },
            },
            LanguageIds: []int64{
                621169,
            },
        },
        ProjectID: "veritatis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## AddFileLinks1

Adds file links to the project as added by PM. The following properties can be specified for each file link:<ul><li>url (required, 400 Bad Request is returned otherwise)</li><li>category (required, 400 Bad Request is returned otherwise)</li><li>languageIds – when the file category depends on a list of languages</li><li>languageCombinationIds – when the file category depends on a list of language combinations</li></ul>

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
    res, err := s.ProjectsSmartV2.AddFileLinks1(ctx, operations.AddFileLinks1Request{
        FileLinkCategorizationsDto: shared.FileLinkCategorizationsDto{
            FileLinks: []shared.FileLinkCategorizationDto{
                shared.FileLinkCategorizationDto{
                    Category: sdk.String("voluptate"),
                    ExternalInfo: map[string]string{
                        "itaque": "similique",
                        "optio": "ex",
                        "quaerat": "commodi",
                        "officiis": "placeat",
                    },
                    Filename: sdk.String("quidem"),
                    LanguageCombinationIds: []shared.LanguageCombinationDto{
                        shared.LanguageCombinationDto{
                            SourceLanguageID: sdk.Int64(463344),
                            TargetLanguageID: sdk.Int64(211455),
                        },
                        shared.LanguageCombinationDto{
                            SourceLanguageID: sdk.Int64(264619),
                            TargetLanguageID: sdk.Int64(59383),
                        },
                    },
                    LanguageIds: []int64{
                        876027,
                        194901,
                        918547,
                    },
                    ToBeGenerated: sdk.Bool(false),
                    URL: sdk.String("cum"),
                },
                shared.FileLinkCategorizationDto{
                    Category: sdk.String("dicta"),
                    ExternalInfo: map[string]string{
                        "veniam": "animi",
                        "dolores": "nam",
                        "dicta": "consequuntur",
                        "necessitatibus": "nobis",
                    },
                    Filename: sdk.String("ipsa"),
                    LanguageCombinationIds: []shared.LanguageCombinationDto{
                        shared.LanguageCombinationDto{
                            SourceLanguageID: sdk.Int64(980486),
                            TargetLanguageID: sdk.Int64(87382),
                        },
                        shared.LanguageCombinationDto{
                            SourceLanguageID: sdk.Int64(96450),
                            TargetLanguageID: sdk.Int64(386447),
                        },
                    },
                    LanguageIds: []int64{
                        729448,
                        566506,
                        578210,
                        367917,
                    },
                    ToBeGenerated: sdk.Bool(false),
                    URL: sdk.String("aliquam"),
                },
            },
        },
        ProjectID: "nostrum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## AddFiles1

Adds files to the project as added by PM. The files have to be uploaded beforehand (see "POST /v2/projects/{projectId}/files/upload" operation). The following properties can be specified for each file:<ul><li>category (required, 400 Bad Request is returned otherwise)</li><li>languageIds – when the file category depends on a list of languages</li><li>languageCombinationIds – when the file category depends on a list of language combinations</li></ul>

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
    res, err := s.ProjectsSmartV2.AddFiles1(ctx, operations.AddFiles1Request{
        FileCategorizationsDto: shared.FileCategorizationsDto{
            Files: []shared.FileCategorizationDto{
                shared.FileCategorizationDto{
                    Category: sdk.String("eligendi"),
                    FileID: sdk.String("sint"),
                    LanguageCombinationIds: []shared.LanguageCombinationDto{
                        shared.LanguageCombinationDto{
                            SourceLanguageID: sdk.Int64(944950),
                            TargetLanguageID: sdk.Int64(657319),
                        },
                        shared.LanguageCombinationDto{
                            SourceLanguageID: sdk.Int64(559774),
                            TargetLanguageID: sdk.Int64(517326),
                        },
                    },
                    LanguageIds: []int64{
                        484966,
                        51170,
                        901163,
                    },
                },
                shared.FileCategorizationDto{
                    Category: sdk.String("architecto"),
                    FileID: sdk.String("quos"),
                    LanguageCombinationIds: []shared.LanguageCombinationDto{
                        shared.LanguageCombinationDto{
                            SourceLanguageID: sdk.Int64(826862),
                            TargetLanguageID: sdk.Int64(731634),
                        },
                        shared.LanguageCombinationDto{
                            SourceLanguageID: sdk.Int64(725574),
                            TargetLanguageID: sdk.Int64(244032),
                        },
                        shared.LanguageCombinationDto{
                            SourceLanguageID: sdk.Int64(38557),
                            TargetLanguageID: sdk.Int64(963976),
                        },
                    },
                    LanguageIds: []int64{
                        741238,
                        216870,
                        238011,
                        903150,
                    },
                },
                shared.FileCategorizationDto{
                    Category: sdk.String("deserunt"),
                    FileID: sdk.String("doloremque"),
                    LanguageCombinationIds: []shared.LanguageCombinationDto{
                        shared.LanguageCombinationDto{
                            SourceLanguageID: sdk.Int64(333072),
                            TargetLanguageID: sdk.Int64(727481),
                        },
                        shared.LanguageCombinationDto{
                            SourceLanguageID: sdk.Int64(99733),
                            TargetLanguageID: sdk.Int64(584593),
                        },
                    },
                    LanguageIds: []int64{
                        756654,
                        820023,
                    },
                },
                shared.FileCategorizationDto{
                    Category: sdk.String("non"),
                    FileID: sdk.String("magnam"),
                    LanguageCombinationIds: []shared.LanguageCombinationDto{
                        shared.LanguageCombinationDto{
                            SourceLanguageID: sdk.Int64(150935),
                            TargetLanguageID: sdk.Int64(993002),
                        },
                        shared.LanguageCombinationDto{
                            SourceLanguageID: sdk.Int64(330267),
                            TargetLanguageID: sdk.Int64(164532),
                        },
                        shared.LanguageCombinationDto{
                            SourceLanguageID: sdk.Int64(813880),
                            TargetLanguageID: sdk.Int64(512905),
                        },
                        shared.LanguageCombinationDto{
                            SourceLanguageID: sdk.Int64(140384),
                            TargetLanguageID: sdk.Int64(863477),
                        },
                    },
                    LanguageIds: []int64{
                        347698,
                    },
                },
            },
        },
        ProjectID: "ab",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## AddJobToProcess

Returns process id.

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
    res, err := s.ProjectsSmartV2.AddJobToProcess(ctx, operations.AddJobToProcessRequest{
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

## Archive

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
    res, err := s.ProjectsSmartV2.Archive(ctx, shared.FilesDto{
        Files: []string{
            "tempore",
            "nisi",
            "voluptatibus",
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

## ChangeStatus2

Changes project status if possible (400 Bad Request is returned otherwise). The status has to be specified using one of the following keys: <ul><li>CANCELLED – available when the job has one of the following statuses: OPEN, STARTED</li></ul>

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
    res, err := s.ProjectsSmartV2.ChangeStatus2(ctx, operations.ChangeStatus2Request{
        ProjectStatusDTO: shared.ProjectStatusDTO{
            Status: sdk.String("quaerat"),
        },
        ProjectID: "blanditiis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CreatePayable2

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
    res, err := s.ProjectsSmartV2.CreatePayable2(ctx, operations.CreatePayable2Request{
        PayableCreateDTO: shared.PayableCreateDTO{
            CalculationUnitID: sdk.Int64(718627),
            CatLogFile: &shared.FileDTO{
                Content: sdk.String("nisi"),
                Name: sdk.String("Alma Rempel"),
                Token: sdk.String("facilis"),
                URL: sdk.String("ipsum"),
            },
            CurrencyID: sdk.Int64(318917),
            Description: sdk.String("voluptatibus"),
            ID: sdk.Int64(974589),
            IgnoreMinimumCharge: sdk.Bool(false),
            InvoiceID: sdk.String("consequuntur"),
            JobID: map[string]interface{}{
                "labore": "rerum",
                "eos": "reprehenderit",
                "nostrum": "neque",
                "iusto": "est",
            },
            JobTypeID: sdk.Int64(522176),
            LanguageCombination: &shared.ChargeLanguageCombinationDTO{
                SourceLanguageID: sdk.Int64(753890),
                TargetLanguageID: sdk.Int64(853606),
            },
            LanguageCombinationIDNumber: sdk.String("unde"),
            MinimumCharge: sdk.Float64(8894.48),
            Quantity: sdk.Float64(4956.17),
            Rate: sdk.Float64(2201.04),
            RateOrigin: shared.PayableCreateDTORateOriginEnumPriceProfile.ToPointer(),
            Total: sdk.Float64(6228.94),
            Type: shared.PayableCreateDTOTypeEnumCat.ToPointer(),
        },
        ProjectID: "vitae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CreateReceivable2

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
    res, err := s.ProjectsSmartV2.CreateReceivable2(ctx, operations.CreateReceivable2Request{
        ReceivableCreateDTO: shared.ReceivableCreateDTO{
            CalculationUnitID: sdk.Int64(491591),
            CatLogFile: &shared.FileDTO{
                Content: sdk.String("esse"),
                Name: sdk.String("Leon Collier"),
                Token: sdk.String("iusto"),
                URL: sdk.String("dignissimos"),
            },
            CurrencyID: sdk.Int64(729828),
            Description: sdk.String("illo"),
            ID: sdk.Int64(69182),
            IgnoreMinimumCharge: sdk.Bool(false),
            InvoiceID: sdk.String("incidunt"),
            JobTypeID: sdk.Int64(879174),
            LanguageCombination: &shared.ChargeLanguageCombinationDTO{
                SourceLanguageID: sdk.Int64(902581),
                TargetLanguageID: sdk.Int64(734814),
            },
            LanguageCombinationIDNumber: sdk.String("veniam"),
            MinimumCharge: sdk.Float64(1764.99),
            Quantity: sdk.Float64(9700.79),
            Rate: sdk.Float64(9391.61),
            RateOrigin: shared.ReceivableCreateDTORateOriginEnumPriceList.ToPointer(),
            TaskID: sdk.Int64(506312),
            Total: sdk.Float64(3670.46),
            Type: shared.ReceivableCreateDTOTypeEnumCat.ToPointer(),
        },
        ProjectID: "quisquam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## Create6

Creates a new Smart Project. If the specified service ID refers to Classic Project, 400 Bad Request is returned instead.

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
    res, err := s.ProjectsSmartV2.Create6(ctx, shared.ProjectCreateDTO{
        ClientID: sdk.Int64(197259),
        ExternalID: sdk.String("nihil"),
        Name: sdk.String("Joshua Greenfelder"),
        ServiceID: sdk.Int64(790463),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProjectDTOv2 != nil {
        // handle response
    }
}
```

## DeletePayable2

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
    res, err := s.ProjectsSmartV2.DeletePayable2(ctx, operations.DeletePayable2Request{
        PayableID: 591065,
        ProjectID: "laudantium",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteReceivable2

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
    res, err := s.ProjectsSmartV2.DeleteReceivable2(ctx, operations.DeleteReceivable2Request{
        ProjectID: "repudiandae",
        ReceivableID: 9683,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetByExternalID1

Returns project details.

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
    res, err := s.ProjectsSmartV2.GetByExternalID1(ctx, operations.GetByExternalID1Request{
        ExternalProjectID: "maxime",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetByID9

Returns project details. If the specified project ID refers to Classic Project, 400 Bad Request is returned instead.

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
    res, err := s.ProjectsSmartV2.GetByID9(ctx, operations.GetByID9Request{
        ProjectID: "aspernatur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetCATToolProjectInfo

Returns if cat tool project is created or queued.

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
    res, err := s.ProjectsSmartV2.GetCATToolProjectInfo(ctx, operations.GetCATToolProjectInfoRequest{
        ProjectID: "nam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetContacts2

Returns Client Contacts information for a project

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
    res, err := s.ProjectsSmartV2.GetContacts2(ctx, operations.GetContacts2Request{
        ProjectID: "expedita",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetCustomFields8

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
    res, err := s.ProjectsSmartV2.GetCustomFields8(ctx, operations.GetCustomFields8Request{
        ProjectID: "quas",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetDeliverableFiles

Returns list of files in a project, that are ready to be delivered to client. A file is considered deliverable to client when all of the following criteria are met:<ul><li>the file was added to a job in the last step in the process</li><li>the file is marked as verified (if it was added in a verification step and the file is verifiable, according to its category)</li><li>the job is finished (has Ready status)</li></ul>

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
    res, err := s.ProjectsSmartV2.GetDeliverableFiles(ctx, operations.GetDeliverableFilesRequest{
        ProjectID: "provident",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetFileByID2

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
    res, err := s.ProjectsSmartV2.GetFileByID2(ctx, operations.GetFileByID2Request{
        FileID: "repudiandae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetFileContentByID

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
    res, err := s.ProjectsSmartV2.GetFileContentByID(ctx, operations.GetFileContentByIDRequest{
        FileID: "rerum",
        FileName: "dignissimos",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetFiles

Returns list of files in a project. Only files added to the project (i.e. files that have assigned category and languages) are listed.

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
    res, err := s.ProjectsSmartV2.GetFiles(ctx, operations.GetFilesRequest{
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

## GetFinance2

Returns finance information for a project.

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
    res, err := s.ProjectsSmartV2.GetFinance2(ctx, operations.GetFinance2Request{
        ProjectID: "vero",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetJobs

Returns list of jobs in a project.

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
    res, err := s.ProjectsSmartV2.GetJobs(ctx, operations.GetJobsRequest{
        ProjectID: "similique",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetProcessID

Returns process id.

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
    res, err := s.ProjectsSmartV2.GetProcessID(ctx, operations.GetProcessIDRequest{
        ProjectID: "repellendus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateClientDeadline

Updates Client Deadline for a project.

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
    res, err := s.ProjectsSmartV2.UpdateClientDeadline(ctx, operations.UpdateClientDeadlineRequest{
        TimeDTO: shared.TimeDTO{
            Value: sdk.Int64(434827),
        },
        ProjectID: "dolorem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateClientNotes

Updates Client Notes for a project.

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
    res, err := s.ProjectsSmartV2.UpdateClientNotes(ctx, operations.UpdateClientNotesRequest{
        StringDTO: shared.StringDTO{
            Value: sdk.String("commodi"),
        },
        ProjectID: "impedit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateClientReferenceNumber

Updates Client Reference Number for a project.

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
    res, err := s.ProjectsSmartV2.UpdateClientReferenceNumber(ctx, operations.UpdateClientReferenceNumberRequest{
        StringDTO: shared.StringDTO{
            Value: sdk.String("commodi"),
        },
        ProjectID: "aut",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateContacts2

Updates Client Contacts for a project.

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
    res, err := s.ProjectsSmartV2.UpdateContacts2(ctx, operations.UpdateContacts2Request{
        SmartContactsDTO: shared.SmartContactsDTO{
            AdditionalIds: []int64{
                322829,
            },
            PrimaryID: sdk.Int64(60995),
        },
        ProjectID: "amet",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateCustomField2

Updates a custom field with a specified key in a project

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
    res, err := s.ProjectsSmartV2.UpdateCustomField2(ctx, operations.UpdateCustomField2Request{
        SmartCustomFieldDTO: shared.SmartCustomFieldDTO{
            Value: map[string]interface{}{
                "praesentium": "quidem",
                "cum": "amet",
                "quasi": "dicta",
                "laudantium": "doloremque",
            },
        },
        Key: "earum",
        ProjectID: "iusto",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateInternalNotes

Updates Internal Notes for a project.

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
    res, err := s.ProjectsSmartV2.UpdateInternalNotes(ctx, operations.UpdateInternalNotesRequest{
        StringDTO: shared.StringDTO{
            Value: sdk.String("amet"),
        },
        ProjectID: "provident",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateOrderedOn

Updates Order Date for a project.

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
    res, err := s.ProjectsSmartV2.UpdateOrderedOn(ctx, operations.UpdateOrderedOnRequest{
        TimeDTO: shared.TimeDTO{
            Value: sdk.Int64(677141),
        },
        ProjectID: "necessitatibus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdatePayable2

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
    res, err := s.ProjectsSmartV2.UpdatePayable2(ctx, operations.UpdatePayable2Request{
        PayableDTO: shared.PayableDTO{
            CalculationUnitID: sdk.Int64(592880),
            CurrencyID: sdk.Int64(920272),
            Description: sdk.String("consequatur"),
            ID: sdk.Int64(366244),
            IgnoreMinimumCharge: sdk.Bool(false),
            InvoiceID: sdk.String("molestiae"),
            JobID: map[string]interface{}{
                "facilis": "corrupti",
                "aperiam": "sint",
                "accusamus": "eos",
                "totam": "dicta",
            },
            JobTypeID: sdk.Int64(30661),
            LanguageCombination: &shared.ChargeLanguageCombinationDTO{
                SourceLanguageID: sdk.Int64(244376),
                TargetLanguageID: sdk.Int64(224413),
            },
            LanguageCombinationIDNumber: sdk.String("sunt"),
            MinimumCharge: sdk.Float64(9536.76),
            Quantity: sdk.Float64(2232.91),
            Rate: sdk.Float64(5823.2),
            RateOrigin: shared.PayableDTORateOriginEnumFilledManually.ToPointer(),
            Total: sdk.Float64(1074.72),
            Type: shared.PayableDTOTypeEnumCat.ToPointer(),
        },
        PayableID: 287544,
        ProjectID: "minus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateReceivable2

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
    res, err := s.ProjectsSmartV2.UpdateReceivable2(ctx, operations.UpdateReceivable2Request{
        ReceivableDTO: shared.ReceivableDTO{
            CalculationUnitID: sdk.Int64(456704),
            CurrencyID: sdk.Int64(32356),
            Description: sdk.String("perferendis"),
            ID: sdk.Int64(698558),
            IgnoreMinimumCharge: sdk.Bool(false),
            InvoiceID: sdk.String("ea"),
            JobTypeID: sdk.Int64(46791),
            LanguageCombination: &shared.ChargeLanguageCombinationDTO{
                SourceLanguageID: sdk.Int64(489459),
                TargetLanguageID: sdk.Int64(998026),
            },
            LanguageCombinationIDNumber: sdk.String("velit"),
            MinimumCharge: sdk.Float64(7841.15),
            Quantity: sdk.Float64(5886.39),
            Rate: sdk.Float64(2313.82),
            RateOrigin: shared.ReceivableDTORateOriginEnumAutocalculated.ToPointer(),
            TaskID: sdk.Int64(490110),
            Total: sdk.Float64(2358.34),
            Type: shared.ReceivableDTOTypeEnumCat.ToPointer(),
        },
        ProjectID: "natus",
        ReceivableID: 839807,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateSourceLanguage

Updates source language for a project.

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
    res, err := s.ProjectsSmartV2.UpdateSourceLanguage(ctx, operations.UpdateSourceLanguageRequest{
        SourceLanguageDTO: shared.SourceLanguageDTO{
            SourceLanguageID: sdk.Int64(639622),
        },
        ProjectID: "amet",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateSpecialization

Updates specialization for a project.

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
    res, err := s.ProjectsSmartV2.UpdateSpecialization(ctx, operations.UpdateSpecializationRequest{
        SpecializationDTO: shared.SpecializationDTO{
            SpecializationID: sdk.Int64(948541),
        },
        ProjectID: "aspernatur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateTargetLanguages

Updates target languages for a project.

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
    res, err := s.ProjectsSmartV2.UpdateTargetLanguages(ctx, operations.UpdateTargetLanguagesRequest{
        TargetLanguagesDTO: shared.TargetLanguagesDTO{
            TargetLanguageIds: []int64{
                931077,
                848346,
                670762,
                490420,
            },
        },
        ProjectID: "vero",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateVendorInstructions

Updates instructions for all vendors performing the jobs in a project. See also "PUT /jobs/{jobId}/instructions" for updating instructions for a specific job in a project or quote.

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
    res, err := s.ProjectsSmartV2.UpdateVendorInstructions(ctx, operations.UpdateVendorInstructionsRequest{
        StringDTO: shared.StringDTO{
            Value: sdk.String("qui"),
        },
        ProjectID: "consectetur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateVolume

Updates volume for a project.

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
    res, err := s.ProjectsSmartV2.UpdateVolume(ctx, operations.UpdateVolumeRequest{
        BigDecimalDTO: shared.BigDecimalDTO{
            Value: sdk.Float64(9958.16),
        },
        ProjectID: "explicabo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UploadFile2

Uploads file to the project as a file uploaded by PM. Only one file can be uploaded at once. When the upload is finished the file has to be added by specifying its category and languages (see "PUT /v2/projects/{projectId}/files/add" operation

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
    res, err := s.ProjectsSmartV2.UploadFile2(ctx, operations.UploadFile2Request{
        FileToUploadDto: shared.FileToUploadDto{
            File: &shared.FileToUploadDtoFile{
                Content: []byte("explicabo"),
                File: "exercitationem",
            },
        },
        ProjectID: "nihil",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
