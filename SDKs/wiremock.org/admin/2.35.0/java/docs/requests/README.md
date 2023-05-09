# requests

## Overview

Logged requests and responses received by the mock service

User documentation
<http://wiremock.org/docs/verifying/>
### Available Operations

* [deleteAdminRequests](#deleteadminrequests) - Delete all requests in journal
* [deleteAdminRequestsRequestId](#deleteadminrequestsrequestid) - Delete request by ID
* [getAdminRequests](#getadminrequests) - Get all requests in journal
* [getAdminRequestsUnmatched](#getadminrequestsunmatched) - Find unmatched requests
* [getAdminRequestsRequestId](#getadminrequestsrequestid) - Get request by ID
* [postAdminRequestsCount](#postadminrequestscount) - Count requests by criteria
* [postAdminRequestsFind](#postadminrequestsfind) - Find requests by criteria
* [postAdminRequestsRemove](#postadminrequestsremove) - Remove requests by criteria
* [postAdminRequestsRemoveByMetadata](#postadminrequestsremovebymetadata) - Delete requests mappings matching metadata
* [~~postAdminRequestsReset~~](#postadminrequestsreset) - Empty the request journal :warning: **Deprecated**

## deleteAdminRequests

Delete all requests in journal

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteAdminRequestsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteAdminRequestsResponse res = sdk.requests.deleteAdminRequests();

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteAdminRequestsRequestId

Delete request by ID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteAdminRequestsRequestIdRequest;
import org.openapis.openapi.models.operations.DeleteAdminRequestsRequestIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteAdminRequestsRequestIdRequest req = new DeleteAdminRequestsRequestIdRequest("praesentium");            

            DeleteAdminRequestsRequestIdResponse res = sdk.requests.deleteAdminRequestsRequestId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAdminRequests

Get all requests in journal

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAdminRequestsRequest;
import org.openapis.openapi.models.operations.GetAdminRequestsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAdminRequestsRequest req = new GetAdminRequestsRequest() {{
                limit = "rem";
                since = "voluptates";
            }};            

            GetAdminRequestsResponse res = sdk.requests.getAdminRequests(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAdminRequestsUnmatched

Get details of logged requests that weren't matched by any stub mapping

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAdminRequestsUnmatchedResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAdminRequestsUnmatchedResponse res = sdk.requests.getAdminRequestsUnmatched();

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAdminRequestsRequestId

Get request by ID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAdminRequestsRequestIdRequest;
import org.openapis.openapi.models.operations.GetAdminRequestsRequestIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAdminRequestsRequestIdRequest req = new GetAdminRequestsRequestIdRequest("quasi");            

            GetAdminRequestsRequestIdResponse res = sdk.requests.getAdminRequestsRequestId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postAdminRequestsCount

Count requests logged in the journal matching the specified criteria

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostAdminRequestsCountRequestBody;
import org.openapis.openapi.models.operations.PostAdminRequestsCountRequestBodyBasicAuthCredentials;
import org.openapis.openapi.models.operations.PostAdminRequestsCountResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostAdminRequestsCountRequestBody req = new PostAdminRequestsCountRequestBody() {{
                basicAuthCredentials = new PostAdminRequestsCountRequestBodyBasicAuthCredentials("repudiandae", "sint");;
                bodyPatterns = new java.util.HashMap<String, Object>[]{{
                    add(new java.util.HashMap<String, Object>() {{
                        put("incidunt", "enim");
                        put("consequatur", "est");
                        put("quibusdam", "explicabo");
                        put("deserunt", "distinctio");
                    }}),
                }};
                cookies = new java.util.HashMap<String, Object>() {{
                    put("labore", "modi");
                    put("qui", "aliquid");
                    put("cupiditate", "quos");
                    put("perferendis", "magni");
                }};
                headers = new java.util.HashMap<String, Object>() {{
                    put("ipsam", "alias");
                    put("fugit", "dolorum");
                    put("excepturi", "tempora");
                    put("facilis", "tempore");
                }};
                method = "labore";
                queryParameters = new java.util.HashMap<String, Object>() {{
                    put("eum", "non");
                    put("eligendi", "sint");
                    put("aliquid", "provident");
                    put("necessitatibus", "sint");
                }};
                url = "officia";
                urlPath = "dolor";
                urlPathPattern = "debitis";
                urlPattern = "a";
            }};            

            PostAdminRequestsCountResponse res = sdk.requests.postAdminRequestsCount(req);

            if (res.postAdminRequestsCount200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postAdminRequestsFind

Retrieve details of requests logged in the journal matching the specified criteria

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostAdminRequestsFindRequestBody;
import org.openapis.openapi.models.operations.PostAdminRequestsFindRequestBodyBasicAuthCredentials;
import org.openapis.openapi.models.operations.PostAdminRequestsFindResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostAdminRequestsFindRequestBody req = new PostAdminRequestsFindRequestBody() {{
                basicAuthCredentials = new PostAdminRequestsFindRequestBodyBasicAuthCredentials("dolorum", "in");;
                bodyPatterns = new java.util.HashMap<String, Object>[]{{
                    add(new java.util.HashMap<String, Object>() {{
                        put("maiores", "rerum");
                        put("dicta", "magnam");
                        put("cumque", "facere");
                        put("ea", "aliquid");
                    }}),
                    add(new java.util.HashMap<String, Object>() {{
                        put("accusamus", "non");
                        put("occaecati", "enim");
                        put("accusamus", "delectus");
                    }}),
                }};
                cookies = new java.util.HashMap<String, Object>() {{
                    put("provident", "nam");
                    put("id", "blanditiis");
                    put("deleniti", "sapiente");
                }};
                headers = new java.util.HashMap<String, Object>() {{
                    put("deserunt", "nisi");
                }};
                method = "vel";
                queryParameters = new java.util.HashMap<String, Object>() {{
                    put("omnis", "molestiae");
                    put("perferendis", "nihil");
                    put("magnam", "distinctio");
                }};
                url = "id";
                urlPath = "labore";
                urlPathPattern = "labore";
                urlPattern = "suscipit";
            }};            

            PostAdminRequestsFindResponse res = sdk.requests.postAdminRequestsFind(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postAdminRequestsRemove

Removed requests logged in the journal matching the specified criteria

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostAdminRequestsRemoveRequestBody;
import org.openapis.openapi.models.operations.PostAdminRequestsRemoveRequestBodyBasicAuthCredentials;
import org.openapis.openapi.models.operations.PostAdminRequestsRemoveResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostAdminRequestsRemoveRequestBody req = new PostAdminRequestsRemoveRequestBody() {{
                basicAuthCredentials = new PostAdminRequestsRemoveRequestBodyBasicAuthCredentials("natus", "nobis");;
                bodyPatterns = new java.util.HashMap<String, Object>[]{{
                    add(new java.util.HashMap<String, Object>() {{
                        put("aspernatur", "architecto");
                        put("magnam", "et");
                        put("excepturi", "ullam");
                        put("provident", "quos");
                    }}),
                    add(new java.util.HashMap<String, Object>() {{
                        put("accusantium", "mollitia");
                        put("reiciendis", "mollitia");
                        put("ad", "eum");
                    }}),
                }};
                cookies = new java.util.HashMap<String, Object>() {{
                    put("necessitatibus", "odit");
                }};
                headers = new java.util.HashMap<String, Object>() {{
                    put("quasi", "iure");
                    put("doloribus", "debitis");
                }};
                method = "eius";
                queryParameters = new java.util.HashMap<String, Object>() {{
                    put("deleniti", "facilis");
                    put("in", "architecto");
                    put("architecto", "repudiandae");
                    put("ullam", "expedita");
                }};
                url = "nihil";
                urlPath = "repellat";
                urlPathPattern = "quibusdam";
                urlPattern = "sed";
            }};            

            PostAdminRequestsRemoveResponse res = sdk.requests.postAdminRequestsRemove(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postAdminRequestsRemoveByMetadata

Delete requests mappings matching metadata

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostAdminRequestsRemoveByMetadataRequestBodyJSONEquals;
import org.openapis.openapi.models.operations.PostAdminRequestsRemoveByMetadataRequestBodyJSONPathMatch;
import org.openapis.openapi.models.operations.PostAdminRequestsRemoveByMetadataRequestBodyNegativeRegularExpressionMatch;
import org.openapis.openapi.models.operations.PostAdminRequestsRemoveByMetadataRequestBodyRegularExpressionMatch;
import org.openapis.openapi.models.operations.PostAdminRequestsRemoveByMetadataRequestBodyStringContains;
import org.openapis.openapi.models.operations.PostAdminRequestsRemoveByMetadataRequestBodyStringEquals;
import org.openapis.openapi.models.operations.PostAdminRequestsRemoveByMetadataRequestBodyXMLEquality;
import org.openapis.openapi.models.operations.PostAdminRequestsRemoveByMetadataRequestBodyXPathMatch;
import org.openapis.openapi.models.operations.PostAdminRequestsRemoveByMetadataResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = new PostAdminRequestsRemoveByMetadataRequestBodyXPathMatch("ea") {{
                matchesXpath = "pariatur";
                namespaces = new java.util.HashMap<String, Object>() {{
                    put("consequuntur", "praesentium");
                }};
                valuePattern = new java.util.HashMap<String, Object>() {{
                    put("magni", "sunt");
                    put("quo", "illum");
                    put("pariatur", "maxime");
                }};
            }}            

            PostAdminRequestsRemoveByMetadataResponse res = sdk.requests.postAdminRequestsRemoveByMetadata(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~postAdminRequestsReset~~

Empty the request journal

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostAdminRequestsResetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostAdminRequestsResetResponse res = sdk.requests.postAdminRequestsReset();

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
