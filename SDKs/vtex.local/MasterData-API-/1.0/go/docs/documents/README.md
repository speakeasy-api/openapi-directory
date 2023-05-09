# Documents

## Overview

The APIs within this group are used to save documents and query them by id.

If the document has the id attribute or has fields that have been set to indexes with unique values, VTEX Master Data will attempt to identify the document. If the document is found a change will be made. If it is not found, an inclusion will be made. ** This scenario does not apply to the API with the POST verb**.

Another important note: The id field will only be considered on the **POST** verb if the ID type entered in the Data Entity is the option:

```
A chave primária será informada pelo cliente através do atributo 'id'
```

Otherwise, a new document will always be created.

### Response status code

1. Status Code 201: Document created successfully
2. Status Code 200: Document changed successfully
3. Status Code 304: There were no changes to the document
4. Status Code 400: Invalid information in JSON
5. Status Code 403: Unauthorized access


### Available Operations

* [Createnewdocument](#createnewdocument) - Create new document
* [Createorupdateentiredocument](#createorupdateentiredocument) - Create or update entire document
* [Createorupdatepartialdocument](#createorupdatepartialdocument) - Create or update partial document
* [Deletedocument](#deletedocument) - Delete document
* [Getdocument](#getdocument) - Get document
* [Updateentiredocument](#updateentiredocument) - Update entire document
* [Updatepartialdocument](#updatepartialdocument) - Update partial document

## Createnewdocument

Creates documents through a JSON object where the key is the name of the field.

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
            AppKey: "YOUR_API_KEY_HERE",
            AppToken: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Documents.Createnewdocument(ctx, operations.CreatenewdocumentRequest{
        Accept: "omnis",
        RequestBody: map[string]interface{}{
            "cum": "perferendis",
            "doloremque": "reprehenderit",
        },
        Acronym: "ut",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Createnewdocument != nil {
        // handle response
    }
}
```

## Createorupdateentiredocument

Create or update entire document

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
            AppKey: "YOUR_API_KEY_HERE",
            AppToken: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Documents.Createorupdateentiredocument(ctx, operations.CreateorupdateentiredocumentRequest{
        Accept: "maiores",
        RequestBody: map[string]interface{}{
            "corporis": "dolore",
        },
        Acronym: "iusto",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## Createorupdatepartialdocument

Create or update partial document

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
            AppKey: "YOUR_API_KEY_HERE",
            AppToken: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Documents.Createorupdatepartialdocument(ctx, operations.CreateorupdatepartialdocumentRequest{
        Accept: "dicta",
        RequestBody: map[string]interface{}{
            "enim": "accusamus",
            "commodi": "repudiandae",
            "quae": "ipsum",
        },
        Acronym: "quidem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## Deletedocument

It allows to delete a document.

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
            AppKey: "YOUR_API_KEY_HERE",
            AppToken: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Documents.Deletedocument(ctx, operations.DeletedocumentRequest{
        Accept: "molestias",
        ContentType: "excepturi",
        Acronym: "pariatur",
        ID: "488e1e91-e450-4ad2-abd4-4269802d502a",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## Getdocument

Retrieves a document.

Assign the `_fields` parameter in the query string to retrieve the desired fields. If you want to return all the fields use `_fields=_all`.

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
            AppKey: "YOUR_API_KEY_HERE",
            AppToken: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Documents.Getdocument(ctx, operations.GetdocumentRequest{
        Accept: "excepturi",
        ContentType: "tempora",
        Acronym: "facilis",
        ID: "b4f63c96-9e9a-43ef-a77d-fb14cd66ae39",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Usingfilters != nil {
        // handle response
    }
}
```

## Updateentiredocument

Update entire document

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
            AppKey: "YOUR_API_KEY_HERE",
            AppToken: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Documents.Updateentiredocument(ctx, operations.UpdateentiredocumentRequest{
        Accept: "enim",
        RequestBody: map[string]interface{}{
            "delectus": "quidem",
            "provident": "nam",
            "id": "blanditiis",
            "deleniti": "sapiente",
        },
        Acronym: "amet",
        ID: "a6699707-4ba4-4469-b6e2-141959890afa",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## Updatepartialdocument

Update partial document

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
            AppKey: "YOUR_API_KEY_HERE",
            AppToken: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Documents.Updatepartialdocument(ctx, operations.UpdatepartialdocumentRequest{
        Accept: "ad",
        RequestBody: map[string]interface{}{
            "dolor": "necessitatibus",
            "odit": "nemo",
        },
        Acronym: "quasi",
        ID: "6fe4c8b7-11e5-4b7f-92ed-028921cddc69",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
