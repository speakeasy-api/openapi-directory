# events

### Available Operations

* [getEvent](#getevent) - Get event
* [getEventsCount](#geteventscount) - Get events count
* [listEvents](#listevents) - List events

## getEvent

Get event

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEventRequest;
import org.openapis.openapi.models.operations.GetEventResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetEventRequest req = new GetEventRequest("placeat");            

            GetEventResponse res = sdk.events.getEvent(req);

            if (res.events != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEventsCount

Get events count

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEventsCountDirectionEnum;
import org.openapis.openapi.models.operations.GetEventsCountRequest;
import org.openapis.openapi.models.operations.GetEventsCountResponse;
import org.openapis.openapi.models.operations.GetEventsCountStatesEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetEventsCountRequest req = new GetEventsCountRequest() {{
                direction = GetEventsCountDirectionEnum.OUTBOUND;
                fromDate = 479977L;
                states = GetEventsCountStatesEnum.ACTIVE;
                toDate = 392785L;
            }};            

            GetEventsCountResponse res = sdk.events.getEventsCount(req);

            if (res.eventsCount != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listEvents

List events

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListEventsDirectionEnum;
import org.openapis.openapi.models.operations.ListEventsOrderEnum;
import org.openapis.openapi.models.operations.ListEventsRequest;
import org.openapis.openapi.models.operations.ListEventsResponse;
import org.openapis.openapi.models.operations.ListEventsStatesEnum;
import org.openapis.openapi.models.operations.ListEventsTypesEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListEventsRequest req = new ListEventsRequest() {{
                direction = ListEventsDirectionEnum.OUTBOUND;
                fromDate = 836079L;
                offset = 71036L;
                order = ListEventsOrderEnum.DESC;
                size = 87129L;
                sort = "deserunt";
                states = ListEventsStatesEnum.INITIALIZING;
                toDate = 368241L;
                types = ListEventsTypesEnum.CALL;
            }};            

            ListEventsResponse res = sdk.events.listEvents(req);

            if (res.events != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
