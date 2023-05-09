# nearMisses

## Overview

Near misses allow querying of received requests or request patterns according to similarity

User documentation
<http://wiremock.org/docs/verifying/#near-misses>
### Available Operations

* [getAdminRequestsUnmatchedNearMisses](#getadminrequestsunmatchednearmisses) - Retrieve near-misses for all unmatched requests
* [postAdminNearMissesRequest](#postadminnearmissesrequest) - Find near misses matching specific request
* [postAdminNearMissesRequestPattern](#postadminnearmissesrequestpattern) - Find near misses matching request pattern

## getAdminRequestsUnmatchedNearMisses

Retrieve near-misses for all unmatched requests

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAdminRequestsUnmatchedNearMissesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAdminRequestsUnmatchedNearMissesResponse res = sdk.nearMisses.getAdminRequestsUnmatchedNearMisses();

            if (res.getAdminRequestsUnmatchedNearMisses200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postAdminNearMissesRequest

Find at most 3 near misses for closest stub mappings to the specified request

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostAdminNearMissesRequestRequestBody;
import org.openapis.openapi.models.operations.PostAdminNearMissesRequestResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostAdminNearMissesRequestRequestBody req = new PostAdminNearMissesRequestRequestBody() {{
                absoluteUrl = "http://localhost:56738/received-request/2";
                body = "Hello world";
                cookies = new java.util.HashMap<String, Object>() {{
                    put("provident", "distinctio");
                    put("quibusdam", "unde");
                    put("nulla", "corrupti");
                }};
                headers = new java.util.HashMap<String, Object>() {{
                    put("vel", "error");
                    put("deserunt", "suscipit");
                    put("iure", "magnam");
                    put("debitis", "ipsa");
                }};
                method = "GET";
                url = "/received-request/2";
            }};            

            PostAdminNearMissesRequestResponse res = sdk.nearMisses.postAdminNearMissesRequest(req);

            if (res.postAdminNearMissesRequest200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postAdminNearMissesRequestPattern

Find at most 3 near misses for closest logged requests to the specified request pattern

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostAdminNearMissesRequestPatternRequestBody;
import org.openapis.openapi.models.operations.PostAdminNearMissesRequestPatternRequestBodyBasicAuthCredentials;
import org.openapis.openapi.models.operations.PostAdminNearMissesRequestPatternResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostAdminNearMissesRequestPatternRequestBody req = new PostAdminNearMissesRequestPatternRequestBody() {{
                basicAuthCredentials = new PostAdminNearMissesRequestPatternRequestBodyBasicAuthCredentials("delectus", "tempora");;
                bodyPatterns = new java.util.HashMap<String, Object>[]{{
                    add(new java.util.HashMap<String, Object>() {{
                        put("minus", "placeat");
                        put("voluptatum", "iusto");
                    }}),
                    add(new java.util.HashMap<String, Object>() {{
                        put("nisi", "recusandae");
                        put("temporibus", "ab");
                        put("quis", "veritatis");
                    }}),
                }};
                cookies = new java.util.HashMap<String, Object>() {{
                    put("perferendis", "ipsam");
                    put("repellendus", "sapiente");
                    put("quo", "odit");
                }};
                headers = new java.util.HashMap<String, Object>() {{
                    put("at", "maiores");
                    put("molestiae", "quod");
                    put("quod", "esse");
                    put("totam", "porro");
                }};
                method = "dolorum";
                queryParameters = new java.util.HashMap<String, Object>() {{
                    put("nam", "officia");
                }};
                url = "occaecati";
                urlPath = "fugit";
                urlPathPattern = "deleniti";
                urlPattern = "hic";
            }};            

            PostAdminNearMissesRequestPatternResponse res = sdk.nearMisses.postAdminNearMissesRequestPattern(req);

            if (res.postAdminNearMissesRequestPattern200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
