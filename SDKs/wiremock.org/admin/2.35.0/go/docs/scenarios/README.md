# Scenarios

## Overview

Scenarios support modelling of stateful behaviour

User documentation
<http://wiremock.org/docs/stateful-behaviour/>
### Available Operations

* [GetAdminScenarios](#getadminscenarios) - Get all scenarios
* [PostAdminScenariosReset](#postadminscenariosreset) - Reset the state of all scenarios

## GetAdminScenarios

Get all scenarios

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Scenarios.GetAdminScenarios(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAdminScenarios200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostAdminScenariosReset

Reset the state of all scenarios

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Scenarios.PostAdminScenariosReset(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
