<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

            ActivityEntryApiGetListRequest req = new ActivityEntryApiGetListRequest() {{
                queryParams = new ActivityEntryApiGetListQueryParams() {{
                    before = "2006-05-01T09:38:06Z";
                    editEvent = "Updated";
                    entryFields = "Description";
                    entryType = "Venue";
                    fields = "ArchivedVersion";
                    getTotalCount = true;
                    lang = "Japanese";
                    maxResults = 8274930044578894929;
                    since = "2011-08-12T10:11:12Z";
                    sortRule = "CreateDateDescending";
                    userId = 8325060299420976708;
                }};
            }};

            ActivityEntryApiGetListResponse res = sdk.activityEntryApi.activityEntryApiGetList(req);

            if (res.body.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->