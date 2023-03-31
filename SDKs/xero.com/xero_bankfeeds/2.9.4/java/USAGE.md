<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.CreateFeedConnectionsSecurity;
import org.openapis.openapi.models.operations.CreateFeedConnectionsHeaders;
import org.openapis.openapi.models.operations.CreateFeedConnectionsRequest;
import org.openapis.openapi.models.operations.CreateFeedConnectionsResponse;
import org.openapis.openapi.models.shared.FeedConnections;
import org.openapis.openapi.models.shared.Pagination;
import org.openapis.openapi.models.shared.FeedConnectionAccountTypeEnum;
import org.openapis.openapi.models.shared.FeedConnectionStatusEnum;
import org.openapis.openapi.models.shared.FeedConnection;
import org.openapis.openapi.models.shared.ErrorTypeEnum;
import org.openapis.openapi.models.shared.Error;
import org.openapis.openapi.models.shared.CurrencyCodeEnum;
import org.openapis.openapi.models.shared.CountryCodeEnum;
import org.openapis.openapi.models.shared.SchemeOAuth2;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateFeedConnectionsRequest req = new CreateFeedConnectionsRequest() {{
                security = new CreateFeedConnectionsSecurity() {{
                    oAuth2 = new SchemeOAuth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                headers = new CreateFeedConnectionsHeaders() {{
                    xeroTenantId = "corrupti";
                }};
                request = new FeedConnections() {{
                    items = new org.openapis.openapi.models.shared.FeedConnection[]{{
                        add(new FeedConnection() {{
                            accountId = "079a88ea-276d-41fb-a1f1-366ef3e22921";
                            accountName = "Joe's Savings Account";
                            accountNumber = "3809087654321500";
                            accountToken = "10000123";
                            accountType = "BANK";
                            country = "GB";
                            currency = "AUD";
                            error = new Error() {{
                                detail = "The application has not been configured to use these API endpoints.";
                                status = 403;
                                title = "Invalid Application";
                                type = "invalid-application";
                            }};
                            id = "0d3cf8d-95dc-4466-8dc0-47e6d1197e28";
                            status = "REJECTED";
                        }}),
                        add(new FeedConnection() {{
                            accountId = "079a88ea-276d-41fb-a1f1-366ef3e22921";
                            accountName = "Joe's Savings Account";
                            accountNumber = "3809087654321500";
                            accountToken = "10000123";
                            accountType = "BANK";
                            country = "GB";
                            currency = "AUD";
                            error = new Error() {{
                                detail = "The application has not been configured to use these API endpoints.";
                                status = 403;
                                title = "Invalid Application";
                                type = "invalid-application";
                            }};
                            id = "0d3cf8d-95dc-4466-8dc0-47e6d1197e28";
                            status = "REJECTED";
                        }}),
                        add(new FeedConnection() {{
                            accountId = "079a88ea-276d-41fb-a1f1-366ef3e22921";
                            accountName = "Joe's Savings Account";
                            accountNumber = "3809087654321500";
                            accountToken = "10000123";
                            accountType = "BANK";
                            country = "GB";
                            currency = "AUD";
                            error = new Error() {{
                                detail = "The application has not been configured to use these API endpoints.";
                                status = 403;
                                title = "Invalid Application";
                                type = "invalid-application";
                            }};
                            id = "0d3cf8d-95dc-4466-8dc0-47e6d1197e28";
                            status = "REJECTED";
                        }}),
                    }};
                    pagination = new Pagination() {{
                        itemCount = 2;
                        page = 1;
                        pageCount = 1;
                        pageSize = 10;
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