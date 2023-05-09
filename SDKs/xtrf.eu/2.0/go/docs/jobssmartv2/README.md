# JobsSmartV2

## Overview

To change the description use /examples/TagsDescriptions.json

### Available Operations

* [AddExternalFileLink](#addexternalfilelink)
* [AddFileLinks](#addfilelinks) - Adds file link to the project as a link delivered in the job.
* [AddFiles](#addfiles) - Adds files to the project as delivered in the job.
* [AssignVendor1](#assignvendor1) - Assigns vendor to a job in a project.
* [ChangeDates](#changedates) - Updates dates of a given job.
* [ChangeStatus1](#changestatus1) - Changes job status if possible (400 Bad Request is returned otherwise).
* [GetByExternalID](#getbyexternalid)
* [GetDeliveredFiles](#getdeliveredfiles) - Returns list of files delivered in the job.
* [GetFileByID1](#getfilebyid1) - Returns details for a job.
* [GetSharedReferenceFiles](#getsharedreferencefiles) - Returns list of files shared with the job as Reference Files.
* [GetSharedWorkFiles](#getsharedworkfiles) - Returns list of files shared with the job as Work Files.
* [ShareAsReferenceFiles](#shareasreferencefiles) - Shares selected files as Reference Files with a job in a project.
* [ShareAsWorkFiles](#shareasworkfiles) - Shares selected files as Work Files with a job in a project.
* [StopSharing](#stopsharing) - Stops sharing selected files with a job in a project.
* [UpdateInstructions4](#updateinstructions4) - Updates instructions for a job.
* [UploadFile1](#uploadfile1) - Uploads file to the project as a file delivered in the job.

## AddExternalFileLink

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
    res, err := s.JobsSmartV2.AddExternalFileLink(ctx, operations.AddExternalFileLinkRequest{
        ExternalFileDto: shared.ExternalFileDto{
            Category: sdk.String("rerum"),
            ExternalInfo: map[string]string{
                "culpa": "voluptatem",
                "sapiente": "officiis",
                "architecto": "fuga",
            },
            Filename: sdk.String("pariatur"),
            LanguageCombinationIds: []shared.LanguageCombinationDto{
                shared.LanguageCombinationDto{
                    SourceLanguageID: sdk.Int64(29190),
                    TargetLanguageID: sdk.Int64(1207),
                },
                shared.LanguageCombinationDto{
                    SourceLanguageID: sdk.Int64(534917),
                    TargetLanguageID: sdk.Int64(937219),
                },
                shared.LanguageCombinationDto{
                    SourceLanguageID: sdk.Int64(404244),
                    TargetLanguageID: sdk.Int64(958308),
                },
                shared.LanguageCombinationDto{
                    SourceLanguageID: sdk.Int64(524184),
                    TargetLanguageID: sdk.Int64(796320),
                },
            },
            LanguageIds: []int64{
                992074,
                190567,
            },
        },
        JobID: "ullam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## AddFileLinks

Adds file link to the project as a link delivered in the job. The following properties can be specified for each file link:<ul><li>url (required, 400 Bad Request is returned otherwise)</li><li>category (required, 400 Bad Request is returned otherwise)</li><li>languageIds – when the file category depends on a list of languages</li><li>languageCombinationIds – when the file category depends on a list of language combinations</li></ul>

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
    res, err := s.JobsSmartV2.AddFileLinks(ctx, operations.AddFileLinksRequest{
        FileLinkCategorizationsDto: shared.FileLinkCategorizationsDto{
            FileLinks: []shared.FileLinkCategorizationDto{
                shared.FileLinkCategorizationDto{
                    Category: sdk.String("illum"),
                    ExternalInfo: map[string]string{
                        "impedit": "quibusdam",
                        "nam": "ipsam",
                        "culpa": "dolor",
                    },
                    Filename: sdk.String("aliquam"),
                    LanguageCombinationIds: []shared.LanguageCombinationDto{
                        shared.LanguageCombinationDto{
                            SourceLanguageID: sdk.Int64(537279),
                            TargetLanguageID: sdk.Int64(85311),
                        },
                    },
                    LanguageIds: []int64{
                        221396,
                        8689,
                    },
                    ToBeGenerated: sdk.Bool(false),
                    URL: sdk.String("architecto"),
                },
            },
        },
        JobID: "sit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## AddFiles

Adds files to the project as delivered in the job. The files have to be uploaded beforehand (see "POST /jobs/{jobId}/files/upload" operation). The following properties can be specified for each file:<ul><li>category (required, 400 Bad Request is returned otherwise)</li><li>languageIds – when the file category depends on a list of languages</li><li>languageCombinationIds – when the file category depends on a list of language combinations</li></ul>

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
    res, err := s.JobsSmartV2.AddFiles(ctx, operations.AddFilesRequest{
        FileCategorizationsDto: shared.FileCategorizationsDto{
            Files: []shared.FileCategorizationDto{
                shared.FileCategorizationDto{
                    Category: sdk.String("fugit"),
                    FileID: sdk.String("ab"),
                    LanguageCombinationIds: []shared.LanguageCombinationDto{
                        shared.LanguageCombinationDto{
                            SourceLanguageID: sdk.Int64(65604),
                            TargetLanguageID: sdk.Int64(222658),
                        },
                        shared.LanguageCombinationDto{
                            SourceLanguageID: sdk.Int64(856277),
                            TargetLanguageID: sdk.Int64(369490),
                        },
                        shared.LanguageCombinationDto{
                            SourceLanguageID: sdk.Int64(162120),
                            TargetLanguageID: sdk.Int64(55107),
                        },
                    },
                    LanguageIds: []int64{
                        911198,
                        773456,
                        884952,
                    },
                },
                shared.FileCategorizationDto{
                    Category: sdk.String("esse"),
                    FileID: sdk.String("necessitatibus"),
                    LanguageCombinationIds: []shared.LanguageCombinationDto{
                        shared.LanguageCombinationDto{
                            SourceLanguageID: sdk.Int64(332191),
                            TargetLanguageID: sdk.Int64(199596),
                        },
                    },
                    LanguageIds: []int64{
                        432984,
                        426943,
                        528234,
                    },
                },
            },
        },
        JobID: "magnam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## AssignVendor1

Assigns vendor to a job in a project.

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
    res, err := s.JobsSmartV2.AssignVendor1(ctx, operations.AssignVendor1Request{
        VendorPriceProfileDTO: shared.VendorPriceProfileDTO{
            VendorPriceProfileID: sdk.Int64(349440),
        },
        JobID: "ab",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ChangeDates

Updates dates of a given job.

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
    res, err := s.JobsSmartV2.ChangeDates(ctx, operations.ChangeDatesRequest{
        JobDatesDto: shared.JobDatesDto{
            ActualEndDate: sdk.Int64(781480),
            ActualStartDate: sdk.Int64(421844),
            Deadline: sdk.Int64(751022),
            StartDate: sdk.Int64(388319),
        },
        JobID: "recusandae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ChangeStatus1

Changes job status if possible (400 Bad Request is returned otherwise). The status has to be specified using one of the following keys:<ul><li>OPEN – available when the job has one of the following statuses: ACCEPTED, CANCELED</li><li>ACCEPTED – available when the job has one of the following statuses: OPEN (Vendor and dates have to be set before calling the operation), STARTED</li><li>STARTED – available when the job has one of the following statuses: ACCEPTED, READY</li><li>READY – available when the job has one of the following statuses: STARTED</li><li>CANCELLED – available when the job has one of the following statuses: OPEN, ACCEPTED, STARTED, OFFERS_SENT</li><li>OFFERS_SENT – not available as a target status for this operation</li></ul>

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
    res, err := s.JobsSmartV2.ChangeStatus1(ctx, operations.ChangeStatus1Request{
        JobStatusDTO: shared.JobStatusDTO{
            ExternalID: sdk.String("consequuntur"),
            Status: sdk.String("voluptatem"),
        },
        JobID: "exercitationem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetByExternalID

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
    res, err := s.JobsSmartV2.GetByExternalID(ctx, operations.GetByExternalIDRequest{
        ExternalID: sdk.String("necessitatibus"),
        ExternalProjectID: sdk.String("quasi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetDeliveredFiles

Returns list of files delivered in the job.

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
    res, err := s.JobsSmartV2.GetDeliveredFiles(ctx, operations.GetDeliveredFilesRequest{
        JobID: "nisi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetFileByID1

Returns details for a job.

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
    res, err := s.JobsSmartV2.GetFileByID1(ctx, operations.GetFileByID1Request{
        JobID: "at",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetSharedReferenceFiles

Returns list of files shared with the job as Reference Files.

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
    res, err := s.JobsSmartV2.GetSharedReferenceFiles(ctx, operations.GetSharedReferenceFilesRequest{
        JobID: "vero",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetSharedWorkFiles

Returns list of files shared with the job as Work Files.

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
    res, err := s.JobsSmartV2.GetSharedWorkFiles(ctx, operations.GetSharedWorkFilesRequest{
        JobID: "est",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ShareAsReferenceFiles

Shares selected files as Reference Files with a job in a project. The files and the job have to be part of the same project. The operation is finished successfully even if some of the selected files were already shared with the job. If a file was shared with the job as Work File, it will now be shared as Reference File (and not as Work File).

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
    res, err := s.JobsSmartV2.ShareAsReferenceFiles(ctx, operations.ShareAsReferenceFilesRequest{
        FilesDto: shared.FilesDto{
            Files: []string{
                "sequi",
                "doloribus",
                "repudiandae",
            },
        },
        JobID: "optio",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ShareAsWorkFiles

Shares selected files as Work Files with a job in a project. The files and the job have to be part of the same project. The operation is finished successfully even if some of the selected files were already shared with the job. If a file was shared with the job as Reference File, it will now be shared as Work File (and not as Reference File).

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
    res, err := s.JobsSmartV2.ShareAsWorkFiles(ctx, operations.ShareAsWorkFilesRequest{
        FilesDto: shared.FilesDto{
            Files: []string{
                "nemo",
                "voluptate",
                "blanditiis",
            },
        },
        JobID: "officia",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## StopSharing

Stops sharing selected files with a job in a project. The files and the job have to be part of the same project. The operation is finished successfully even if some of the selected files were not shared with the job.

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
    res, err := s.JobsSmartV2.StopSharing(ctx, operations.StopSharingRequest{
        FilesDto: shared.FilesDto{
            Files: []string{
                "numquam",
                "nemo",
            },
        },
        JobID: "quos",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateInstructions4

Updates instructions for a job. See also "PUT /projects/{projectId}/vendorInstructions" and "PUT /quotes/{quoteId}/vendorInstructions" for updating instructions for all jobs in a project or quote.

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
    res, err := s.JobsSmartV2.UpdateInstructions4(ctx, operations.UpdateInstructions4Request{
        StringDTO: shared.StringDTO{
            Value: sdk.String("eius"),
        },
        JobID: "aspernatur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UploadFile1

Uploads file to the project as a file delivered in the job. Only one file can be uploaded at once. When the upload is finished the file has to be added by specifying its category and languages (see "PUT /jobs/{jobId}/files/add" operation).

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
    res, err := s.JobsSmartV2.UploadFile1(ctx, operations.UploadFile1Request{
        FileToUploadDto: shared.FileToUploadDto{
            File: &shared.FileToUploadDtoFile{
                Content: []byte("ducimus"),
                File: "nesciunt",
            },
        },
        JobID: "fuga",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
