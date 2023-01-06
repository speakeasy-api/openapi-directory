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
            Before: "2000-04-24T20:32:49Z",
            EditEvent: "Restored",
            EntryFields: "PVs",
            EntryType: "User",
            Fields: "Entry",
            GetTotalCount: false,
            Lang: "Japanese",
            MaxResults: 4241079167890233799,
            Since: "2017-11-27T18:48:48Z",
            SortRule: "CreateDateDescending",
            UserID: 1067385579007318616,
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