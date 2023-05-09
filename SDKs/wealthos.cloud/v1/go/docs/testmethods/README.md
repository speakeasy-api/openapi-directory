# TestMethods

## Overview

Test methods are used for easier testing of connectivity, keys and tokens. Since they are not tied to a speific functionality you can use them freely


### Available Operations

* [GetBEGreeting](#getbegreeting) - Wealth Manager Greeting for BE

## GetBEGreeting

Wealth Manager Greeting for BE

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
    res, err := s.TestMethods.GetBEGreeting(ctx, operations.GetBEGreetingSecurity{
        APISecretKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetBEGreeting200ApplicationJSONObject != nil {
        // handle response
    }
}
```
