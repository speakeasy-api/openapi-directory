# SDK

## Overview

Webcomic of romance, sarcasm, math, and language.

<https://xkcd.com/json.html>
### Available Operations

* [getInfo0Json](#getinfo0json) - Fetch current comic and metadata.

* [getComicIdInfo0Json](#getcomicidinfo0json) - Fetch comics and metadata  by comic id.


## getInfo0Json

Fetch current comic and metadata.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetInfo0JsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetInfo0JsonResponse res = sdk.sdk.getInfo0Json();

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getComicIdInfo0Json

Fetch comics and metadata  by comic id.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetComicIdInfo0JsonRequest;
import org.openapis.openapi.models.operations.GetComicIdInfo0JsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetComicIdInfo0JsonRequest req = new GetComicIdInfo0JsonRequest(5488.14);            

            GetComicIdInfo0JsonResponse res = sdk.sdk.getComicIdInfo0Json(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
