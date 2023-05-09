# Certificates

### Available Operations

* [CertificateAdd](#certificateadd) - Adds a certificate to the specified account.
* [CertificateCancelDeletion](#certificatecanceldeletion) - Cancels a failed deletion of a certificate from the specified account.
* [CertificateDelete](#certificatedelete) - Deletes a certificate from the specified account.
* [CertificateGet](#certificateget) - Gets information about the specified certificate.
* [CertificateList](#certificatelist) - Lists all of the certificates that have been added to the specified account.

## CertificateAdd

Adds a certificate to the specified account.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Certificates.CertificateAdd(ctx, operations.CertificateAddRequest{
        CertificateAddParameter: shared.CertificateAddParameter{
            CertificateFormat: shared.CertificateAddParameterCertificateFormatEnumPfx.ToPointer(),
            Data: "delectus",
            Password: sdk.String("tempora"),
            Thumbprint: "suscipit",
            ThumbprintAlgorithm: "molestiae",
        },
        APIVersion: "minus",
        ClientRequestID: sdk.String("placeat"),
        OcpDate: sdk.String("voluptatum"),
        ReturnClientRequestID: sdk.Bool(false),
        Timeout: sdk.Int(479977),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CertificateCancelDeletion

Cancels a failed deletion of a certificate from the specified account.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Certificates.CertificateCancelDeletion(ctx, operations.CertificateCancelDeletionRequest{
        APIVersion: "excepturi",
        ClientRequestID: sdk.String("nisi"),
        OcpDate: sdk.String("recusandae"),
        ReturnClientRequestID: sdk.Bool(false),
        Thumbprint: "temporibus",
        ThumbprintAlgorithm: "ab",
        Timeout: sdk.Int(337396),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CertificateDelete

Deletes a certificate from the specified account.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Certificates.CertificateDelete(ctx, operations.CertificateDeleteRequest{
        APIVersion: "veritatis",
        ClientRequestID: sdk.String("deserunt"),
        OcpDate: sdk.String("perferendis"),
        ReturnClientRequestID: sdk.Bool(false),
        Thumbprint: "ipsam",
        ThumbprintAlgorithm: "repellendus",
        Timeout: sdk.Int(957156),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CertificateGet

Gets information about the specified certificate.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Certificates.CertificateGet(ctx, operations.CertificateGetRequest{
        DollarSelect: sdk.String("quo"),
        APIVersion: "odit",
        ClientRequestID: sdk.String("at"),
        OcpDate: sdk.String("at"),
        ReturnClientRequestID: sdk.Bool(false),
        Thumbprint: "maiores",
        ThumbprintAlgorithm: "molestiae",
        Timeout: sdk.Int(799159),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Certificate != nil {
        // handle response
    }
}
```

## CertificateList

Lists all of the certificates that have been added to the specified account.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Certificates.CertificateList(ctx, operations.CertificateListRequest{
        DollarFilter: sdk.String("quod"),
        DollarSelect: sdk.String("esse"),
        APIVersion: "totam",
        ClientRequestID: sdk.String("porro"),
        Maxresults: sdk.Int(678880),
        OcpDate: sdk.String("dicta"),
        ReturnClientRequestID: sdk.Bool(false),
        Timeout: sdk.Int(720633),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CertificateListResult != nil {
        // handle response
    }
}
```
