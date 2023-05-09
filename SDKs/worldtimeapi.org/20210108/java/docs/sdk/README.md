# SDK

## Overview

A simple API to get the current time based on a request with a timezone.

### Available Operations

* [getIp](#getip) - request the current time based on the ip of the request. note: this is a "best guess" obtained from open-source data.
* [getIpTxt](#getiptxt) - request the current time based on the ip of the request. note: this is a "best guess" obtained from open-source data.
* [getIpIpv4](#getipipv4) - request the current time based on the ip of the request. note: this is a "best guess" obtained from open-source data.
* [getIpIpv4Txt](#getipipv4txt) - request the current time based on the ip of the request. note: this is a "best guess" obtained from open-source data.
* [getTimezone](#gettimezone) - a listing of all timezones.
* [getTimezoneTxt](#gettimezonetxt) - a listing of all timezones.
* [getTimezoneArea](#gettimezonearea) - a listing of all timezones available for that area.
* [getTimezoneAreaTxt](#gettimezoneareatxt) - a listing of all timezones available for that area.
* [getTimezoneAreaLocation](#gettimezonearealocation) - request the current time for a timezone.
* [getTimezoneAreaLocationTxt](#gettimezonearealocationtxt) - request the current time for a timezone.
* [getTimezoneAreaLocationRegion](#gettimezonearealocationregion) - request the current time for a timezone.
* [getTimezoneAreaLocationRegionTxt](#gettimezonearealocationregiontxt) - request the current time for a timezone.

## getIp

request the current time based on the ip of the request. note: this is a "best guess" obtained from open-source data.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetIpResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetIpResponse res = sdk.sdk.getIp();

            if (res.dateTimeJsonResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getIpTxt

request the current time based on the ip of the request. note: this is a "best guess" obtained from open-source data.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetIpTxtResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetIpTxtResponse res = sdk.sdk.getIpTxt();

            if (res.dateTimeTextResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getIpIpv4

request the current time based on the ip of the request. note: this is a "best guess" obtained from open-source data.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetIpIpv4Request;
import org.openapis.openapi.models.operations.GetIpIpv4Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetIpIpv4Request req = new GetIpIpv4Request("corrupti");            

            GetIpIpv4Response res = sdk.sdk.getIpIpv4(req);

            if (res.dateTimeJsonResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getIpIpv4Txt

request the current time based on the ip of the request. note: this is a "best guess" obtained from open-source data.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetIpIpv4TxtRequest;
import org.openapis.openapi.models.operations.GetIpIpv4TxtResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetIpIpv4TxtRequest req = new GetIpIpv4TxtRequest("provident");            

            GetIpIpv4TxtResponse res = sdk.sdk.getIpIpv4Txt(req);

            if (res.dateTimeTextResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTimezone

a listing of all timezones.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTimezoneResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTimezoneResponse res = sdk.sdk.getTimezone();

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTimezoneTxt

a listing of all timezones.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTimezoneTxtResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTimezoneTxtResponse res = sdk.sdk.getTimezoneTxt();

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTimezoneArea

a listing of all timezones available for that area.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTimezoneAreaRequest;
import org.openapis.openapi.models.operations.GetTimezoneAreaResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTimezoneAreaRequest req = new GetTimezoneAreaRequest("distinctio");            

            GetTimezoneAreaResponse res = sdk.sdk.getTimezoneArea(req);

            if (res.listJsonResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTimezoneAreaTxt

a listing of all timezones available for that area.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTimezoneAreaTxtRequest;
import org.openapis.openapi.models.operations.GetTimezoneAreaTxtResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTimezoneAreaTxtRequest req = new GetTimezoneAreaTxtRequest("quibusdam");            

            GetTimezoneAreaTxtResponse res = sdk.sdk.getTimezoneAreaTxt(req);

            if (res.listTextResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTimezoneAreaLocation

request the current time for a timezone.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTimezoneAreaLocationRequest;
import org.openapis.openapi.models.operations.GetTimezoneAreaLocationResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTimezoneAreaLocationRequest req = new GetTimezoneAreaLocationRequest("unde", "nulla");            

            GetTimezoneAreaLocationResponse res = sdk.sdk.getTimezoneAreaLocation(req);

            if (res.dateTimeJsonResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTimezoneAreaLocationTxt

request the current time for a timezone.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTimezoneAreaLocationTxtRequest;
import org.openapis.openapi.models.operations.GetTimezoneAreaLocationTxtResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTimezoneAreaLocationTxtRequest req = new GetTimezoneAreaLocationTxtRequest("corrupti", "illum");            

            GetTimezoneAreaLocationTxtResponse res = sdk.sdk.getTimezoneAreaLocationTxt(req);

            if (res.dateTimeTextResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTimezoneAreaLocationRegion

request the current time for a timezone.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTimezoneAreaLocationRegionRequest;
import org.openapis.openapi.models.operations.GetTimezoneAreaLocationRegionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTimezoneAreaLocationRegionRequest req = new GetTimezoneAreaLocationRegionRequest("vel", "error", "deserunt");            

            GetTimezoneAreaLocationRegionResponse res = sdk.sdk.getTimezoneAreaLocationRegion(req);

            if (res.dateTimeJsonResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTimezoneAreaLocationRegionTxt

request the current time for a timezone.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTimezoneAreaLocationRegionTxtRequest;
import org.openapis.openapi.models.operations.GetTimezoneAreaLocationRegionTxtResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTimezoneAreaLocationRegionTxtRequest req = new GetTimezoneAreaLocationRegionTxtRequest("suscipit", "iure", "magnam");            

            GetTimezoneAreaLocationRegionTxtResponse res = sdk.sdk.getTimezoneAreaLocationRegionTxt(req);

            if (res.dateTimeTextResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
