# SDK

## Overview

This API provides XML to JSON, JSON to XML transformations.

### Available Operations

* [PostJsontoxml](#postjsontoxml)
* [PostXmltojson](#postxmltojson)

## PostJsontoxml

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
    res, err := s.SDK.PostJsontoxml(ctx, "provident")
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostXmltojson

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
    res, err := s.SDK.PostXmltojson(ctx, "distinctio")
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
