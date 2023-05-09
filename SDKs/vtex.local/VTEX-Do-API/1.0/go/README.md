# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/vtex.local/VTEX-Do-API/1.0/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
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
    res, err := s.Note.GetNote(ctx, operations.GetNoteRequest{
        Accept: "application/json",
        ContentType: "application/json",
        NoteID: "654321cba",
        Reason: sdk.String("data-validation"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNote200ApplicationJSONAny != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Note](docs/note/README.md)

* [GetNote](docs/note/README.md#getnote) - Retrieve Note
* [GetNotesbyorderID](docs/note/README.md#getnotesbyorderid) - Get Notes by orderId
* [NewNote](docs/note/README.md#newnote) - Create Note

### [Task](docs/task/README.md)

* [AddComment](docs/task/README.md#addcomment) - Add Comment on a Task
* [EditTask](docs/task/README.md#edittask) - Update Task
* [GetTask](docs/task/README.md#gettask) - Retrieve Task
* [Listtasksbyassignee](docs/task/README.md#listtasksbyassignee) - List tasks
* [NewTask](docs/task/README.md#newtask) - Create Task
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
