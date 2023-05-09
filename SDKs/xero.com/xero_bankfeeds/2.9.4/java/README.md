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
import org.openapis.openapi.models.operations.CreateFeedConnectionsRequest;
import org.openapis.openapi.models.operations.CreateFeedConnectionsResponse;
import org.openapis.openapi.models.operations.CreateFeedConnectionsSecurity;
import org.openapis.openapi.models.shared.CountryCodeEnum;
import org.openapis.openapi.models.shared.CurrencyCodeEnum;
import org.openapis.openapi.models.shared.Error;
import org.openapis.openapi.models.shared.ErrorTypeEnum;
import org.openapis.openapi.models.shared.FeedConnection;
import org.openapis.openapi.models.shared.FeedConnectionAccountTypeEnum;
import org.openapis.openapi.models.shared.FeedConnectionStatusEnum;
import org.openapis.openapi.models.shared.FeedConnections;
import org.openapis.openapi.models.shared.Pagination;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateFeedConnectionsRequest req = new CreateFeedConnectionsRequest(                new FeedConnections() {{
                                items = new org.openapis.openapi.models.shared.FeedConnection[]{{
                                    add(new FeedConnection() {{
                                        accountId = "079a88ea-276d-41fb-a1f1-366ef3e22921";
                                        accountName = "Joe's Savings Account";
                                        accountNumber = "3809087654321500";
                                        accountToken = "10000123";
                                        accountType = FeedConnectionAccountTypeEnum.BANK;
                                        country = CountryCodeEnum.GB;
                                        currency = CurrencyCodeEnum.AUD;
                                        error = new Error() {{
                                            detail = "The application has not been configured to use these API endpoints.";
                                            status = 403L;
                                            title = "Invalid Application";
                                            type = ErrorTypeEnum.INVALID_APPLICATION;
                                        }};
                                        id = "0d3cf8d-95dc-4466-8dc0-47e6d1197e28";
                                        status = FeedConnectionStatusEnum.REJECTED;
                                    }}),
                                    add(new FeedConnection() {{
                                        accountId = "079a88ea-276d-41fb-a1f1-366ef3e22921";
                                        accountName = "Joe's Savings Account";
                                        accountNumber = "3809087654321500";
                                        accountToken = "10000123";
                                        accountType = FeedConnectionAccountTypeEnum.BANK;
                                        country = CountryCodeEnum.GB;
                                        currency = CurrencyCodeEnum.AUD;
                                        error = new Error() {{
                                            detail = "The application has not been configured to use these API endpoints.";
                                            status = 403L;
                                            title = "Invalid Application";
                                            type = ErrorTypeEnum.INVALID_APPLICATION;
                                        }};
                                        id = "0d3cf8d-95dc-4466-8dc0-47e6d1197e28";
                                        status = FeedConnectionStatusEnum.REJECTED;
                                    }}),
                                    add(new FeedConnection() {{
                                        accountId = "079a88ea-276d-41fb-a1f1-366ef3e22921";
                                        accountName = "Joe's Savings Account";
                                        accountNumber = "3809087654321500";
                                        accountToken = "10000123";
                                        accountType = FeedConnectionAccountTypeEnum.BANK;
                                        country = CountryCodeEnum.GB;
                                        currency = CurrencyCodeEnum.AUD;
                                        error = new Error() {{
                                            detail = "The application has not been configured to use these API endpoints.";
                                            status = 403L;
                                            title = "Invalid Application";
                                            type = ErrorTypeEnum.INVALID_APPLICATION;
                                        }};
                                        id = "0d3cf8d-95dc-4466-8dc0-47e6d1197e28";
                                        status = FeedConnectionStatusEnum.REJECTED;
                                    }}),
                                }};
                                pagination = new Pagination() {{
                                    itemCount = 2L;
                                    page = 1L;
                                    pageCount = 1L;
                                    pageSize = 10L;
                                }};;
                            }};, "provident");            

            CreateFeedConnectionsResponse res = sdk.bankFeeds.createFeedConnections(req, new CreateFeedConnectionsSecurity("distinctio") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.feedConnections != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [bankFeeds](docs/bankfeeds/README.md)

* [createFeedConnections](docs/bankfeeds/README.md#createfeedconnections) - Create one or more new feed connection
* [createStatements](docs/bankfeeds/README.md#createstatements) - Creates one or more new statements
* [deleteFeedConnections](docs/bankfeeds/README.md#deletefeedconnections) - Delete an existing feed connection
* [getFeedConnection](docs/bankfeeds/README.md#getfeedconnection) - Retrieve single feed connection based on a unique id provided
* [getFeedConnections](docs/bankfeeds/README.md#getfeedconnections) - Searches for feed connections
* [getStatement](docs/bankfeeds/README.md#getstatement) - Retrieve single statement based on unique id provided
* [getStatements](docs/bankfeeds/README.md#getstatements) - Retrieve all statements
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
