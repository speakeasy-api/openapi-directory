# SDK

## Overview

Webcomic of romance, sarcasm, math, and language.

<https://xkcd.com/json.html>
### Available Operations

* [GetInfo0JSON](#getinfo0json) - Fetch current comic and metadata.

* [GetComicIDInfo0JSON](#getcomicidinfo0json) - Fetch comics and metadata  by comic id.


## GetInfo0JSON

Fetch current comic and metadata.


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
    res, err := s.SDK.GetInfo0JSON(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetComicIDInfo0JSON

Fetch comics and metadata  by comic id.


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
    res, err := s.SDK.GetComicIDInfo0JSON(ctx, operations.GetComicIDInfo0JSONRequest{
        ComicID: 5488.14,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
