# SessionManagement

### Available Operations

* [PostSessions](#postsessions) - Update Order Configuration

## PostSessions

Updates the Order Configuration. You should use this route every time you edit a configuration value

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
    res, err := s.SessionManagement.PostSessions(ctx, operations.PostSessionsRequest{
        Accept: "quod",
        ContentType: "esse",
        RequestBody: &operations.PostSessionsRequestBody{
            Public: operations.PostSessionsRequestBodyPublic{
                CustomSessionKeys: operations.PostSessionsRequestBodyPublicCustomSessionKeys{
                    Value: "totam",
                },
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostSessions200ApplicationJSONAny != nil {
        // handle response
    }
}
```
