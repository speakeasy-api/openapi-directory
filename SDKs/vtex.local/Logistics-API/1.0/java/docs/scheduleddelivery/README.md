# scheduledDelivery

### Available Operations

* [addBlockedDeliveryWindows](#addblockeddeliverywindows) - Add blocked delivery windows
* [removeBlockedDeliveryWindows](#removeblockeddeliverywindows) - Remove blocked delivery windows
* [retrieveBlockedDeliveryWindows](#retrieveblockeddeliverywindows) - Retrieve blocked delivery windows
* [getApiLogisticsCapacityResourcesCarrierAtCapacityTypeAtShippingPolicyIdTimeFrames](#getapilogisticscapacityresourcescarrieratcapacitytypeatshippingpolicyidtimeframes) - Search capacity reservations in time range
* [getApiLogisticsCapacityResourcesCarrierAtCapacityTypeAtShippingPolicyIdTimeFramesWindowDayFWindowStartTimeTWindowEndTime](#getapilogisticscapacityresourcescarrieratcapacitytypeatshippingpolicyidtimeframeswindowdayfwindowstarttimetwindowendtime) - Get capacity reservation usage by window

## addBlockedDeliveryWindows

Adds blocked delivery windows for your store's shipping policies.

> Note that, while most of our API endpoints return time fields in UTC, this endpoint returns time adjusted to the configured time zone of the account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddBlockedDeliveryWindowsRequest;
import org.openapis.openapi.models.operations.AddBlockedDeliveryWindowsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolores", "perferendis") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            AddBlockedDeliveryWindowsRequest req = new AddBlockedDeliveryWindowsRequest("esse", "quas", ""2016-08-09T08:00:00"", "blanditiis");            

            AddBlockedDeliveryWindowsResponse res = sdk.scheduledDelivery.addBlockedDeliveryWindows(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## removeBlockedDeliveryWindows

Removes the blocked delivery windows set to your store's shipping policies.

> Note that, while most of our API endpoints return time fields in UTC, this endpoint returns time adjusted to the configured time zone of the account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RemoveBlockedDeliveryWindowsRequest;
import org.openapis.openapi.models.operations.RemoveBlockedDeliveryWindowsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laudantium", "voluptates") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RemoveBlockedDeliveryWindowsRequest req = new RemoveBlockedDeliveryWindowsRequest("minus", "autem", ""2016-08-09T08:00:00"", "vel");            

            RemoveBlockedDeliveryWindowsResponse res = sdk.scheduledDelivery.removeBlockedDeliveryWindows(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## retrieveBlockedDeliveryWindows

Lists all blocked delivery windows of your store's shipping policies, searching by carrier ID.

> Note that, while most of our API endpoints return time fields in UTC, this endpoint returns **Scheduled Delivery** related time fields adjusted to the configured time zone of the account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetrieveBlockedDeliveryWindowsRequest;
import org.openapis.openapi.models.operations.RetrieveBlockedDeliveryWindowsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("beatae", "quos") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RetrieveBlockedDeliveryWindowsRequest req = new RetrieveBlockedDeliveryWindowsRequest("consectetur", "soluta", "tenetur");            

            RetrieveBlockedDeliveryWindowsResponse res = sdk.scheduledDelivery.retrieveBlockedDeliveryWindows(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getApiLogisticsCapacityResourcesCarrierAtCapacityTypeAtShippingPolicyIdTimeFrames

Get information on all capacity reservations made to scheduled delivery windows in a given time range.

> Note that, while most of our API endpoints return time fields in UTC, this endpoint returns time adjusted to the configured time zone of the account.

> Note that the combined string `carrier@{capacityType}@{shippingPolicyId}` can be referred to as a "resource" in the API's messages.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApiLogisticsCapacityResourcesCarrierAtCapacityTypeAtShippingPolicyIdTimeFramesRequest;
import org.openapis.openapi.models.operations.GetApiLogisticsCapacityResourcesCarrierAtCapacityTypeAtShippingPolicyIdTimeFramesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("necessitatibus", "perspiciatis") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetApiLogisticsCapacityResourcesCarrierAtCapacityTypeAtShippingPolicyIdTimeFramesRequest req = new GetApiLogisticsCapacityResourcesCarrierAtCapacityTypeAtShippingPolicyIdTimeFramesRequest("application/vnd.vtex.availability.v1+json", "suscipit", "{{capacityType}}", "yyyy-mm-dd", "yyyy-mm-dd", "{{shippingPolicyId}}");            

            GetApiLogisticsCapacityResourcesCarrierAtCapacityTypeAtShippingPolicyIdTimeFramesResponse res = sdk.scheduledDelivery.getApiLogisticsCapacityResourcesCarrierAtCapacityTypeAtShippingPolicyIdTimeFrames(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getApiLogisticsCapacityResourcesCarrierAtCapacityTypeAtShippingPolicyIdTimeFramesWindowDayFWindowStartTimeTWindowEndTime

Retrieves capacity usage of a specific scheduled delivery reservation window.

> Note that, while most of our API endpoints return time fields in UTC, this endpoint returns time adjusted to the configured time zone of the account.

> Note that the combined string `carrier@{capacityType}@{shippingPolicyId}` can be referred to as a "resource" in the API's messages.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApiLogisticsCapacityResourcesCarrierAtCapacityTypeAtShippingPolicyIdTimeFramesWindowDayFWindowStartTimeTWindowEndTimeRequest;
import org.openapis.openapi.models.operations.GetApiLogisticsCapacityResourcesCarrierAtCapacityTypeAtShippingPolicyIdTimeFramesWindowDayFWindowStartTimeTWindowEndTimeResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ullam", "unde") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetApiLogisticsCapacityResourcesCarrierAtCapacityTypeAtShippingPolicyIdTimeFramesWindowDayFWindowStartTimeTWindowEndTimeRequest req = new GetApiLogisticsCapacityResourcesCarrierAtCapacityTypeAtShippingPolicyIdTimeFramesWindowDayFWindowStartTimeTWindowEndTimeRequest("application/vnd.vtex.availability.v1+json", "debitis", "{{capacityType}}", "{{shippingPolicyId}}", "yyyy-mm-dd", "hhmm", "hhmm");            

            GetApiLogisticsCapacityResourcesCarrierAtCapacityTypeAtShippingPolicyIdTimeFramesWindowDayFWindowStartTimeTWindowEndTimeResponse res = sdk.scheduledDelivery.getApiLogisticsCapacityResourcesCarrierAtCapacityTypeAtShippingPolicyIdTimeFramesWindowDayFWindowStartTimeTWindowEndTime(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
