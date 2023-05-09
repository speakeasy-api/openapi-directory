# DataEntities

## Overview

Set of APIs that returns the structure of the data entities.

### Available Operations

* [Getdataentitystructure](#getdataentitystructure) - Get data entity structure
* [Listdataentities](#listdataentities) - List data entities

## Getdataentitystructure

Returns the data entity structure with its respective fields and data type.

### Response status code

1. Status Code `403`: Access not allowed
2. Status Code `200`: Retrieves data entity structure

> All headers listed below are required.

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
    res, err := s.DataEntities.Getdataentitystructure(ctx, operations.GetdataentitystructureRequest{
        Accept: "vero",
        ContentType: "nihil",
        Acronym: "praesentium",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Getdataentityfields != nil {
        // handle response
    }
}
```

## Listdataentities

Retrieves the list of existing data entities in the store.

### Response status code

1. Status Code `403`: Access not allowed
2. Status Code `200`: Retrieves data entity list

> All headers listed below are required.

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
    res, err := s.DataEntities.Listdataentities(ctx, operations.ListdataentitiesRequest{
        Accept: "voluptatibus",
        ContentType: "ipsa",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Listdataentities != nil {
        // handle response
    }
}
```
