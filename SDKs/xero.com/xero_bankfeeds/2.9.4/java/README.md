# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## SDK Available Operations


### bankFeeds

* `createFeedConnections` - Create one or more new feed connection
* `createStatements` - Creates one or more new statements
* `deleteFeedConnections` - Delete an existing feed connection
* `getFeedConnection` - Retrieve single feed connection based on a unique id provided
* `getFeedConnections` - Searches for feed connections
* `getStatement` - Retrieve single statement based on unique id provided
* `getStatements` - Retrieve all statements
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
