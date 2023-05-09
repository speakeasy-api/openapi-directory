# versions

## Overview

Master Data documents are versioned. This means that for each change a new version is generated. The `versions` APIs allows to query the versions and also apply the state of a document to the most current version.

### Available Operations

* [getversion](#getversion) - Get version
* [listversions](#listversions) - List versions
* [putversion](#putversion) - Put version

## getversion

Returns the version of a document.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetversionRequest;
import org.openapis.openapi.models.operations.GetversionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laborum", "quasi") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetversionRequest req = new GetversionRequest("application/json", "application/json", "Client", "Client-b818cbda-e489-11e6-94f4-0ac138d2d42e", "reiciendis");            

            GetversionResponse res = sdk.versions.getversion(req);

            if (res.getversion != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listversions

Allows to list the versions of a document.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListversionsRequest;
import org.openapis.openapi.models.operations.ListversionsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatibus", "vero") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListversionsRequest req = new ListversionsRequest("application/json", "application/json", "Client", "Client-b818cbda-e489-11e6-94f4-0ac138d2d42e") {{
                fields = "nihil";
                load = false;
            }};            

            ListversionsResponse res = sdk.versions.listversions(req);

            if (res.listversions != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putversion

Updates document with version values.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutversionRequest;
import org.openapis.openapi.models.operations.PutversionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("praesentium", "voluptatibus") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutversionRequest req = new PutversionRequest("application/json", "application/json", "Client", "Client-b818cbda-e489-11e6-94f4-0ac138d2d42e", "ipsa");            

            PutversionResponse res = sdk.versions.putversion(req);

            if (res.documentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
