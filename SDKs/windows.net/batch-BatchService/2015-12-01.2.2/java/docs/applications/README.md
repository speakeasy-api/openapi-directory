# applications

### Available Operations

* [applicationGet](#applicationget) - Gets information about the specified application.
* [applicationList](#applicationlist) - Lists all of the applications available in the specified account.

## applicationGet

Gets information about the specified application.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ApplicationGetRequest;
import org.openapis.openapi.models.operations.ApplicationGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ApplicationGetRequest req = new ApplicationGetRequest("nulla", "corrupti") {{
                clientRequestId = "illum";
                ocpDate = "vel";
                returnClientRequestId = false;
                timeout = 623564;
            }};            

            ApplicationGetResponse res = sdk.applications.applicationGet(req);

            if (res.applicationSummary != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## applicationList

Lists all of the applications available in the specified account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ApplicationListRequest;
import org.openapis.openapi.models.operations.ApplicationListResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ApplicationListRequest req = new ApplicationListRequest("deserunt") {{
                clientRequestId = "suscipit";
                maxresults = 437587;
                ocpDate = "magnam";
                returnClientRequestId = false;
                timeout = 891773;
            }};            

            ApplicationListResponse res = sdk.applications.applicationList(req);

            if (res.applicationListResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
