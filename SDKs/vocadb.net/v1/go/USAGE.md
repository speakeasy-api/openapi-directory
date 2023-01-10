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
            Before: "2001-01-08T12:29:54Z",
            EditEvent: "Updated",
            EntryFields: "MainPicture",
            EntryType: "Album",
            Fields: "Entry",
            GetTotalCount: true,
            Lang: "Default",
            MaxResults: 8152946618831078707,
            Since: "2000-03-05T06:51:46Z",
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