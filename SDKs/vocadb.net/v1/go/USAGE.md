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
            Before: "2006-05-01T09:38:06Z",
            EditEvent: "Updated",
            EntryFields: "Description",
            EntryType: "Venue",
            Fields: "ArchivedVersion",
            GetTotalCount: true,
            Lang: "Japanese",
            MaxResults: 8274930044578894929,
            Since: "2011-08-12T10:11:12Z",
            SortRule: "CreateDateDescending",
            UserID: 8325060299420976708,
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