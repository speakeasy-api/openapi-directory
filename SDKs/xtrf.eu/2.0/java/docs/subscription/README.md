# subscription

## Overview

To change the description use /examples/TagsDescriptions.json

### Available Operations

* [areHooksSupported](#arehookssupported) - This method can be used to determine if hooks are supported.
* [getAll4](#getall4) - Returns all subscriptions
* [subscribe](#subscribe) - Subscribe to event
* [unsubscribe](#unsubscribe) - Unsubscribe from event

## areHooksSupported

This method can be used to determine if hooks are supported.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AreHooksSupportedResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            AreHooksSupportedResponse res = sdk.subscription.areHooksSupported();

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAll4

Returns all subscriptions. Subscriptions are automatically removed if they do not work (ie. if 404 status is returned). To improve notification reliability one can use this method to check if subscription is still active and re-subscribe if necessary.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAll4Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAll4Response res = sdk.subscription.getAll4();

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## subscribe

Subscribe to event. Returns subscription Id.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SubscribeResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SubscriptionDTO;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.SubscriptionDTO req = new SubscriptionDTO() {{
                embed = "officia";
                event = "sint";
                filter = "ut";
                url = "numquam";
            }};            

            SubscribeResponse res = sdk.subscription.subscribe(req);

            if (res.subscribe201ApplicationVndXtrfV1PlusJsonString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## unsubscribe

Unsubscribe from job status changed event

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UnsubscribeRequest;
import org.openapis.openapi.models.operations.UnsubscribeResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            UnsubscribeRequest req = new UnsubscribeRequest("tenetur");            

            UnsubscribeResponse res = sdk.subscription.unsubscribe(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
