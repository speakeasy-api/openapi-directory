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
            CertificateFormat: shared.CertificateAddParameterCertificateFormatEnumCer.ToPointer(),
            Data: "iusto",
            Password: sdk.String("excepturi"),
            Thumbprint: "nisi",
            ThumbprintAlgorithm: "recusandae",
        },
        APIVersion: "temporibus",
        ClientRequestID: sdk.String("ab"),
        OcpDate: sdk.String("quis"),
        ReturnClientRequestID: sdk.Bool(false),
        Timeout: sdk.Int(87129),
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
        APIVersion: "deserunt",
        ClientRequestID: sdk.String("perferendis"),
        OcpDate: sdk.String("ipsam"),
        ReturnClientRequestID: sdk.Bool(false),
        Thumbprint: "repellendus",
        ThumbprintAlgorithm: "sapiente",
        Timeout: sdk.Int(778157),
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
        DollarSelect: sdk.String("quod"),
        APIVersion: "esse",
        ClientRequestID: sdk.String("totam"),
        OcpDate: sdk.String("porro"),
        ReturnClientRequestID: sdk.Bool(false),
        Thumbprint: "dolorum",
        ThumbprintAlgorithm: "dicta",
        Timeout: sdk.Int(720633),
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
        DollarFilter: sdk.String("officia"),
        DollarSelect: sdk.String("occaecati"),
        APIVersion: "fugit",
        ClientRequestID: sdk.String("deleniti"),
        Maxresults: sdk.Int(944669),
        OcpDate: sdk.String("optio"),
        ReturnClientRequestID: sdk.Bool(false),
        Timeout: sdk.Int(521848),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CertificateListResult != nil {
        // handle response
    }
}
```
