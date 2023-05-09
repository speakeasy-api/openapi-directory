# Conversation

### Available Operations

* [GetConversation](#getconversation) - Retrieve order conversation

## GetConversation

List all order conversations of an order by its order ID.

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
    res, err := s.Conversation.GetConversation(ctx, operations.GetConversationRequest{
        Accept: "illum",
        ContentType: "vel",
        OrderID: "1172452900788-01",
        Reason: sdk.String("data-validation"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetConversations != nil {
        // handle response
    }
}
```
