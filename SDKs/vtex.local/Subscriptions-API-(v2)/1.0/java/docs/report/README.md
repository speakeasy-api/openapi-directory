# report

### Available Operations

* [getreportstatusbyID](#getreportstatusbyid) - Get report status by ID
* [requestreportbyStatus](#requestreportbystatus) - Retrieve Subscription report by Status
* [requestreportbydate](#requestreportbydate) - Retrieve Subscription report by date
* [requestreportbyorderdate](#requestreportbyorderdate) - Retrieve Subscription report by order date
* [requestreportbyschedule](#requestreportbyschedule) - Retrieve Subscription report by schedule
* [requestreportbyupdate](#requestreportbyupdate) - Request report by update

## getreportstatusbyID

Retrieves the Subscription's report status, filtering by its reportId.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetreportstatusbyIDRequest;
import org.openapis.openapi.models.operations.GetreportstatusbyIDResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nulla", "corrupti") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetreportstatusbyIDRequest req = new GetreportstatusbyIDRequest("illum", "vel", "error");            

            GetreportstatusbyIDResponse res = sdk.report.getreportstatusbyID(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## requestreportbyStatus

Retrieves Subscriptions' reports, filtering by status. The report will be sent by email, to the address inserted in the API's path.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RequestreportbyStatusRequest;
import org.openapis.openapi.models.operations.RequestreportbyStatusResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt", "suscipit") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RequestreportbyStatusRequest req = new RequestreportbyStatusRequest("iure", "magnam", "user@vtex.com.br", 1);            

            RequestreportbyStatusResponse res = sdk.report.requestreportbyStatus(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## requestreportbydate

Retrieves a report with the subscriptions created at the date interval requested

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RequestreportbydateRequest;
import org.openapis.openapi.models.operations.RequestreportbydateResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("debitis", "ipsa") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RequestreportbydateRequest req = new RequestreportbydateRequest("delectus", "tempora", 20190101, 20190701, "user@vtex.com.br");            

            RequestreportbydateResponse res = sdk.report.requestreportbydate(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## requestreportbyorderdate

Retrieves a report regarding the Subscriptions created during the date interval of orders.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RequestreportbyorderdateRequest;
import org.openapis.openapi.models.operations.RequestreportbyorderdateResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit", "molestiae") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RequestreportbyorderdateRequest req = new RequestreportbyorderdateRequest("minus", "placeat", 20190101, 20190701, "user@vtex.com.br");            

            RequestreportbyorderdateResponse res = sdk.report.requestreportbyorderdate(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## requestreportbyschedule

Retrieves a report regarding the Subscriptions scheduled to execute at the date interval requested

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RequestreportbyscheduleRequest;
import org.openapis.openapi.models.operations.RequestreportbyscheduleResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatum", "iusto") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RequestreportbyscheduleRequest req = new RequestreportbyscheduleRequest("excepturi", "nisi", 20190101, 20190701, "user@vtex.com.br");            

            RequestreportbyscheduleResponse res = sdk.report.requestreportbyschedule(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## requestreportbyupdate

Retrieves a report regarding Subscriptions updated in the date interval chosen. The report will be sent by email, to the address inserted in the API's path.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RequestreportbyupdateRequest;
import org.openapis.openapi.models.operations.RequestreportbyupdateResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("recusandae", "temporibus") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RequestreportbyupdateRequest req = new RequestreportbyupdateRequest("ab", "quis", 20190101, 20190701, "user@vtex.com.br");            

            RequestreportbyupdateResponse res = sdk.report.requestreportbyupdate(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
