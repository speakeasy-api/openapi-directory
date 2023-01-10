<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()
    
    req := operations.ActivityEntryAPIGetListRequest{
        QueryParams: operations.ActivityEntryAPIGetListQueryParams{
            Before: "2000-12-30T00:58:45Z",
            EditEvent: "Updated",
            EntryFields: "MainPicture",
            EntryType: "Album",
            Fields: "Entry",
            GetTotalCount: true,
            Lang: "Default",
            MaxResults: 8152946618831078707,
            Since: "2000-02-24T19:20:37Z",
            SortRule: "CreateDate",
            UserID: 1938043663830596226,
        },
    }
    
    res, err := s.ActivityEntryAPI.ActivityEntryAPIGetList(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->