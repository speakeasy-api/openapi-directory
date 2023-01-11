<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { ActivityEntryApiGetListRequest, ActivityEntryApiGetListResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: ActivityEntryApiGetListRequest = {
  queryParams: {
    before: "2006-05-01T09:38:06Z",
    editEvent: "Updated",
    entryFields: "Description",
    entryType: "Venue",
    fields: "ArchivedVersion",
    getTotalCount: true,
    lang: "Japanese",
    maxResults: 8274930044578894929,
    since: "2011-08-12T10:11:12Z",
    sortRule: "CreateDateDescending",
    userId: 8325060299420976708,
  },
};

sdk.activityEntryApi.activityEntryApiGetList(req).then((res: ActivityEntryApiGetListResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->