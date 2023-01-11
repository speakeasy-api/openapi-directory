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
                    xeroTenantId = "quia";
                }};
                request = new FeedConnections() {{
                    items = new openapisdk.models.shared.FeedConnection[]() {{
                        add(new FeedConnection() {{
                            accountId = "sit";
                            accountName = "repellat";
                            accountNumber = "non";
                            accountToken = "facilis";
                            accountType = "id";
                            country = "EH";
                            currency = "MZN";
                            error = new Error() {{
                                detail = "at";
                                status = 128128406467790285;
                                title = "doloribus";
                                type = "invalid-user-role";
                            }};
                            id = "eius";
                            status = "REJECTED";
                        }}),
                    }};
                    pagination = new Pagination() {{
                        itemCount = 3176699975339092757;
                        page = 8003821886561498988;
                        pageCount = 351141413603251213;
                        pageSize = 6866269448178866334;
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