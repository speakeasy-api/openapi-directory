# SDK

### Available Operations

* [GetWolframAlphaResults](#getwolframalpharesults) - Get Wolfram|Alpha results
* [GetWolframCloudResults](#getwolframcloudresults) - Evaluate Wolfram Language code

## GetWolframAlphaResults

Get Wolfram|Alpha results

<https://products.wolframalpha.com/api>

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
    res, err := s.SDK.GetWolframAlphaResults(ctx, operations.GetWolframAlphaResultsRequest{
        Input: "provident",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetWolframCloudResults

Evaluate Wolfram Language code

<https://reference.wolfram.com/language/>

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
    res, err := s.SDK.GetWolframCloudResults(ctx, operations.GetWolframCloudResultsRequest{
        Input: "distinctio",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
