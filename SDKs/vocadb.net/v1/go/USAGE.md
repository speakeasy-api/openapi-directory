<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.ActivityEntryAPIGetListRequest{
        QueryParams: operations.ActivityEntryAPIGetListQueryParams{
            Before: "2022-09-10T05:11:41.969Z",
            EditEvent: "Deleted",
            EntryFields: "PVs",
            EntryType: "User",
            Fields: "ArchivedVersion",
            GetTotalCount: false,
            Lang: "English",
            MaxResults: 544883,
            Since: "2022-05-24T06:52:34.091Z",
            SortRule: "CreateDateDescending",
            UserID: 623564,
        },
    }

    ctx := context.Background()
    res, err := s.ActivityEntryAPI.ActivityEntryAPIGetList(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->