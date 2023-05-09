# feedV3

### Available Operations

* [commititemfeedorderstatus](#commititemfeedorderstatus) - Commit feed items
* [feedConfiguration](#feedconfiguration) - Create or update feed configuration
* [feedConfigurationDelete](#feedconfigurationdelete) - Delete feed configuration
* [getFeedConfiguration](#getfeedconfiguration) - Get feed configuration
* [getfeedorderstatus1](#getfeedorderstatus1) - Retrieve feed items
* [testJSONataExpression](#testjsonataexpression) - Test JSONata expression

## commititemfeedorderstatus

Commit items in the [feed](https://developers.vtex.com/docs/guides/orders-feed) queue.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CommititemfeedorderstatusRequest;
import org.openapis.openapi.models.operations.CommititemfeedorderstatusResponse;
import org.openapis.openapi.models.shared.CommititemfeedorderstatusRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veritatis", "deserunt") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            CommititemfeedorderstatusRequest req = new CommititemfeedorderstatusRequest("perferendis",                 new CommititemfeedorderstatusRequest(                new String[]{{
                                                add("repellendus"),
                                                add("sapiente"),
                                            }});, "quo");            

            CommititemfeedorderstatusResponse res = sdk.feedV3.commititemfeedorderstatus(req);

            if (res.commititemfeedorderstatus200TextPlainObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## feedConfiguration

The Orders Feed v3 is the best way to create order integrations. Below you can find details on the configuration API specification, and to know more see our [Feed v3 guide](https://developers.vtex.com/vtex-rest-api/docs/orders-feed) and our [order integration guide](https://developers.vtex.com/vtex-rest-api/docs/erp-integration-set-up-order-integration)

There are two types of filtering that can be used. The `FromWorkflow` type filters orders by status, whereas the `FromOrders` type uses JSONata expressions to filter orders according to any property in the orders JSON document. This enables stores to filter delivered orders and orders in which products have been added or removed, for example. To learn more, access the [JSONata documentation](https://docs.jsonata.org/overview.html) and test filtering JSONata expressions with our [Test JSONata expression](https://developers.vtex.com/docs/api-reference/orders-api#post-/api/orders/expressions/jsonata) endpoint.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FeedConfigurationRequest;
import org.openapis.openapi.models.operations.FeedConfigurationResponse;
import org.openapis.openapi.models.shared.FeedConfigurationRequest;
import org.openapis.openapi.models.shared.FeedFilter;
import org.openapis.openapi.models.shared.Queue;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("odit", "at") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            FeedConfigurationRequest req = new FeedConfigurationRequest("at", "maiores",                 new FeedConfigurationRequest(                new FeedFilter("molestiae") {{
                                                disableSingleFire = false;
                                                expression = "quod";
                                                status = new String[]{{
                                                    add("esse"),
                                                    add("totam"),
                                                    add("porro"),
                                                    add("dolorum"),
                                                }};
                                            }};,                 new Queue(3456000, 250);););            

            FeedConfigurationResponse res = sdk.feedV3.feedConfiguration(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## feedConfigurationDelete

Deletes the configuration set up in [Feed v3](https://developers.vtex.com/docs/guides/orders-feed).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FeedConfigurationDeleteRequest;
import org.openapis.openapi.models.operations.FeedConfigurationDeleteResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dicta", "nam") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            FeedConfigurationDeleteRequest req = new FeedConfigurationDeleteRequest("officia", "occaecati");            

            FeedConfigurationDeleteResponse res = sdk.feedV3.feedConfigurationDelete(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getFeedConfiguration

The Orders Feed v3 is the best way to create order integrations. Below you can find details on the configuration API specification, and to know more see our [Feed v3 guide](https://developers.vtex.com/vtex-rest-api/docs/orders-feed) and our [order integration guide](https://developers.vtex.com/vtex-rest-api/docs/erp-integration-set-up-order-integration).

> 📘 Onboarding guide 
>
> Check the new [Orders onboarding guide](https://developers.vtex.com/vtex-rest-api/docs/orders-overview). We created this guide to improve the onboarding experience for developers at VTEX. It assembles all documentation on our Developer Portal about Orders and is organized by focusing on the developer's journey.



### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFeedConfigurationRequest;
import org.openapis.openapi.models.operations.GetFeedConfigurationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugit", "deleniti") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetFeedConfigurationRequest req = new GetFeedConfigurationRequest("hic", "optio");            

            GetFeedConfigurationResponse res = sdk.feedV3.getFeedConfiguration(req);

            if (res.getFeedConfiguration200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getfeedorderstatus1

Retrieve items from [feed](https://developers.vtex.com/docs/guides/orders-feed) queue. 

The event will be removed if the message `send retry` is equal to, or greater than the maximum retention period.

> This API will return `404 Not Found` if there is no [Feed Configuration](https://developers.vtex.com/docs/guides/orders-feed) available for the given X-VTEX-API-AppKey.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Getfeedorderstatus1Request;
import org.openapis.openapi.models.operations.Getfeedorderstatus1Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("totam", "beatae") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            Getfeedorderstatus1Request req = new Getfeedorderstatus1Request("commodi", "molestiae", "modi");            

            Getfeedorderstatus1Response res = sdk.feedV3.getfeedorderstatus1(req);

            if (res.getfeedorderstatuses != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## testJSONataExpression

This endpoint allows you to test a JSON document with a JSONata expression, returning `true` if the document meets the criteria posed in the expression, or `false` if it does not.

Since JSONata expressions can be used to filter order updates in the [Orders API feed and hook](https://developers.vtex.com/docs/guides/orders-feed), this endpoint can be used to test an expression's results before configuring the [feed or hook](https://developers.vtex.com/docs/guides/orders-feed).

Learn more about how to use JSONata expressions, in the [JSONata documentation](https://docs.jsonata.org/overview.html).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TestJSONataExpressionRequest;
import org.openapis.openapi.models.operations.TestJSONataExpressionResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TestJSONataExpression;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("qui", "impedit") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            TestJSONataExpressionRequest req = new TestJSONataExpressionRequest("cum", "esse") {{
                testJSONataExpression = new TestJSONataExpression("ipsum", "excepturi");;
            }};            

            TestJSONataExpressionResponse res = sdk.feedV3.testJSONataExpression(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
