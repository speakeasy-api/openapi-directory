# Dictionaries

## Overview

To change the description use /examples/TagsDescriptions.json

### Available Operations

* [GetActive](#getactive) - Returns active dictionary entities for all types.
* [GetActiveByType](#getactivebytype) - Returns active values from a given dictionary.
* [GetAllActive](#getallactive) - Returns active services list
* [GetAllByType](#getallbytype) - Returns all values (both active and not active) from a given dictionary.
* [GetAll1](#getall1) - Returns dictionary entities for all types. Both active and not active ones.
* [GetAll3](#getall3) - Returns services list
* [GetByTypeAndID](#getbytypeandid) - Returns specific value from a given dictionary.

## GetActive

Returns active dictionary entities for all types.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            XAuthAccessToken: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Dictionaries.GetActive(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetActiveByType

Returns active values from a given dictionary.

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
    res, err := s.Dictionaries.GetActiveByType(ctx, operations.GetActiveByTypeRequest{
        NameEquals: sdk.String("aliquid"),
        Type: "ipsa",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetAllActive

Returns active workflows list

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
    res, err := s.Dictionaries.GetAllActive(ctx, operations.GetAllActiveRequest{
        NameEquals: sdk.String("laborum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetAllByType

Returns all values (both active and not active) from a given dictionary.

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
    res, err := s.Dictionaries.GetAllByType(ctx, operations.GetAllByTypeRequest{
        NameEquals: sdk.String("sunt"),
        Type: "nostrum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetAll1

<div>
  <p>
    XTRF holds many user-defined dictionaries (ie. countries).
    Each dictionary contains a set of values (ie. Poland or Germany).
    A default value may be defined for a dictionary.
  </p>
  <p>
    Dictionary values are identified using internal identifier which is constant and unique among other values from the same dictionary.
    Please note that name used in dictionary values is presented in the locale of the current identity.
    The same dictionary value can have different names, ie. "Poland" for one user, "Polska" for another one.
  </p>
  <p>
    Possible dictionary types with short explanation:
    <ul>
      <li>calculationUnit - predefined values of how to calculate the volume of work into the price</li>
      <li>category - labels to organize data on the platform</li>
      <li>country - list of countries used on the platform</li>
      <li>currency - currencies used in financial operations in the system</li>
      <li>industry - industry sectors which clients specialize in</li>
      <li>jobType - services offered by a company used in customized workflows</li>
      <li>language - list of languages and its values used on the platform</li>
      <li>leadSource - lead/recruitment places where new clients and vendors may be found</li>
      <li>personDepartment - departments in which contact person may be assigned to</li>
      <li>personPosition - positions in which user may be associated with</li>
      <li>province - states and provinces used in various documents on the platform</li>
      <li>specialization - list of specific qualifications required to perform a specific job in the task, for ex. medical, military</li>
    </ul>
  </p>
</div>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            XAuthAccessToken: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Dictionaries.GetAll1(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetAll3

Returns workflows list. Both active and not active ones.

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
    res, err := s.Dictionaries.GetAll3(ctx, operations.GetAll3Request{
        NameEquals: sdk.String("fugiat"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetByTypeAndID

Returns specific value from a given dictionary.

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
    res, err := s.Dictionaries.GetByTypeAndID(ctx, operations.GetByTypeAndIDRequest{
        ID: 713767,
        Type: "aliquid",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
