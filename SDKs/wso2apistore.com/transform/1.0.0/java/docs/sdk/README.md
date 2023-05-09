# SDK

## Overview

This API provides XML to JSON, JSON to XML transformations.

### Available Operations

* [postJsontoxml](#postjsontoxml)
* [postXmltojson](#postxmltojson)

## postJsontoxml

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostJsontoxmlResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = "provident"            

            PostJsontoxmlResponse res = sdk.sdk.postJsontoxml(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postXmltojson

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostXmltojsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = "distinctio"            

            PostXmltojsonResponse res = sdk.sdk.postXmltojson(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
