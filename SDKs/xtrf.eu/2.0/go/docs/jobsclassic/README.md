# JobsClassic

## Overview

To change the description use /examples/TagsDescriptions.json

### Available Operations

* [AssignFileToJobOutput](#assignfiletojoboutput)
* [AssignVendor](#assignvendor) - Assigns vendor to a job in a project.
* [ChangeStatus](#changestatus) - Changes job status if possible (400 Bad Request is returned otherwise).
* [GetJobDetails](#getjobdetails) - Returns job details by jobId.
* [GetJobFiles](#getjobfiles) - Returns list of input and output files of a job.
* [GetJobFiles1](#getjobfiles1) - Returns file metadata.
* [UpdateDates](#updatedates) - Updates dates of a given job.
* [UpdateInstructions](#updateinstructions) - Updates instructions for a job.

## AssignFileToJobOutput

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
    res, err := s.JobsClassic.AssignFileToJobOutput(ctx, operations.AssignFileToJobOutputRequest{
        TaskFileDTO: shared.TaskFileDTO{
            Category: shared.TaskFileDTOCategoryEnumTm.ToPointer(),
            Content: sdk.String("perferendis"),
            Name: sdk.String("Melanie Morar V"),
            Token: sdk.String("possimus"),
            URL: sdk.String("voluptates"),
        },
        JobID: "mollitia",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## AssignVendor

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
    res, err := s.JobsClassic.AssignVendor(ctx, operations.AssignVendorRequest{
        AssignVendorDTO: shared.AssignVendorDTO{
            RecalculateRates: sdk.Bool(false),
            VendorPriceProfileID: sdk.Int64(671794),
        },
        JobID: "libero",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ChangeStatus

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
    res, err := s.JobsClassic.ChangeStatus(ctx, operations.ChangeStatusRequest{
        JobStatusDTO: shared.JobStatusDTO{
            ExternalID: sdk.String("ad"),
            Status: sdk.String("deleniti"),
        },
        JobID: "enim",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetJobDetails

Returns job details by jobId.

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
    res, err := s.JobsClassic.GetJobDetails(ctx, operations.GetJobDetailsRequest{
        JobID: "vitae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetJobFiles

Returns list of input and output files of a job.

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
    res, err := s.JobsClassic.GetJobFiles(ctx, operations.GetJobFilesRequest{
        JobID: "repellendus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.JobFilesDTO != nil {
        // handle response
    }
}
```

## GetJobFiles1

Returns file metadata.

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
    res, err := s.JobsClassic.GetJobFiles1(ctx, operations.GetJobFiles1Request{
        FileID: 405036,
        JobID: "quo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FileMetadataDTO != nil {
        // handle response
    }
}
```

## UpdateDates

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
    res, err := s.JobsClassic.UpdateDates(ctx, operations.UpdateDatesRequest{
        JobDatesDto: shared.JobDatesDto{
            ActualEndDate: sdk.Int64(405373),
            ActualStartDate: sdk.Int64(281153),
            Deadline: sdk.Int64(321043),
            StartDate: sdk.Int64(713927),
        },
        JobID: "voluptatem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateInstructions

Updates instructions for a job.

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
    res, err := s.JobsClassic.UpdateInstructions(ctx, operations.UpdateInstructionsRequest{
        InstructionsDTO: shared.InstructionsDTO{
            ForProvider: sdk.String("molestias"),
            FromCustomer: sdk.String("cum"),
            Internal: sdk.String("aliquid"),
            Notes: sdk.String("beatae"),
            PaymentNoteForCustomer: sdk.String("voluptatum"),
            PaymentNoteForVendor: sdk.String("omnis"),
        },
        JobID: "veritatis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
