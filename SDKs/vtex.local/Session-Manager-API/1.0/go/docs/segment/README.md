# Segment

### Available Operations

* [GetSegment](#getsegment) - Get Segment

## GetSegment

You can add certain public fields in the query string and the system will attempt to fulfill it. Values such as `cultureInfo` and `utm` are overwriteable, just keep in mind such changes will not be reflected in the client's session.

If you wish to change the value on the session (and thus be reflected on the segment without special query strings), then use the PATCH request to session.

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
    res, err := s.Segment.GetSegment(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
