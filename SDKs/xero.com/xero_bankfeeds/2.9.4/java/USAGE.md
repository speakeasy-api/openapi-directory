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

            CreateFeedConnectionsRequest req = new CreateFeedConnectionsRequest() {{
                security = new CreateFeedConnectionsSecurity() {{
                    oAuth2 = new SchemeOAuth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                headers = new CreateFeedConnectionsHeaders() {{
                    xeroTenantId = "sit";
                }};
                request = new FeedConnections() {{
                    items = new openapisdk.models.shared.FeedConnection[]() {{
                        add(new FeedConnection() {{
                            accountId = "culpa";
                            accountName = "expedita";
                            accountNumber = "consequuntur";
                            accountToken = "dolor";
                            accountType = "expedita";
                            country = "SO";
                            currency = "GGP";
                            error = new Error() {{
                                detail = "et";
                                status = 2661732831099943416;
                                title = "rerum";
                                type = "account-not-valid";
                            }};
                            id = "debitis";
                            status = "PENDING";
                        }}),
                    }};
                    pagination = new Pagination() {{
                        itemCount = 2339563716805116249;
                        page = 7144924247938981575;
                        pageCount = 161231572858529631;
                        pageSize = 7259475919510918339;
                    }};
                }};
            }};

            CreateFeedConnectionsResponse res = sdk.bankFeeds.createFeedConnections(req);

            if (res.feedConnections.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->