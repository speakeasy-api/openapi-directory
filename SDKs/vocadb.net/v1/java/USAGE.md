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
                    before = "1992-11-18T12:57:30Z";
                    editEvent = "Restored";
                    entryFields = "AdditionalNames";
                    entryType = "Undefined";
                    fields = "Entry";
                    getTotalCount = false;
                    lang = "Japanese";
                    maxResults = 1332344506397849579;
                    since = "1972-06-08T12:39:38Z";
                    sortRule = "CreateDateDescending";
                    userId = 3388353400684496262;
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