# stubMappings

## Overview

Operations on stub mappings

User documentation
<http://wiremock.org/docs/stubbing/>
### Available Operations

* [deleteAdminMappings](#deleteadminmappings) - Delete all stub mappings
* [deleteAdminMappingsStubMappingId](#deleteadminmappingsstubmappingid) - Delete a stub mapping
* [getAdminMappings](#getadminmappings) - Get all stub mappings
* [getAdminMappingsStubMappingId](#getadminmappingsstubmappingid) - Get stub mapping by ID
* [postAdminMappings](#postadminmappings) - Create a new stub mapping
* [postAdminMappingsFindByMetadata](#postadminmappingsfindbymetadata) - Find stubs by matching on their metadata
* [postAdminMappingsImport](#postadminmappingsimport) - Import stub mappings
* [postAdminMappingsRemoveByMetadata](#postadminmappingsremovebymetadata) - Delete stub mappings matching metadata
* [postAdminMappingsReset](#postadminmappingsreset) - Reset stub mappings
* [postAdminMappingsSave](#postadminmappingssave) - Persist stub mappings
* [putAdminMappingsStubMappingId](#putadminmappingsstubmappingid) - Update a stub mapping

## deleteAdminMappings

Delete all stub mappings

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteAdminMappingsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteAdminMappingsResponse res = sdk.stubMappings.deleteAdminMappings();

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteAdminMappingsStubMappingId

Delete a stub mapping

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteAdminMappingsStubMappingIdRequest;
import org.openapis.openapi.models.operations.DeleteAdminMappingsStubMappingIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteAdminMappingsStubMappingIdRequest req = new DeleteAdminMappingsStubMappingIdRequest("excepturi");            

            DeleteAdminMappingsStubMappingIdResponse res = sdk.stubMappings.deleteAdminMappingsStubMappingId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAdminMappings

Get all stub mappings

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAdminMappingsRequest;
import org.openapis.openapi.models.operations.GetAdminMappingsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAdminMappingsRequest req = new GetAdminMappingsRequest() {{
                limit = 139972L;
                offset = 407183L;
            }};            

            GetAdminMappingsResponse res = sdk.stubMappings.getAdminMappings(req);

            if (res.getAdminMappings200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAdminMappingsStubMappingId

Get stub mapping by ID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAdminMappingsStubMappingIdRequest;
import org.openapis.openapi.models.operations.GetAdminMappingsStubMappingIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAdminMappingsStubMappingIdRequest req = new GetAdminMappingsStubMappingIdRequest("accusantium");            

            GetAdminMappingsStubMappingIdResponse res = sdk.stubMappings.getAdminMappingsStubMappingId(req);

            if (res.getAdminMappingsStubMappingId200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postAdminMappings

Create a new stub mapping

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostAdminMappingsRequestBody;
import org.openapis.openapi.models.operations.PostAdminMappingsRequestBodyRequest;
import org.openapis.openapi.models.operations.PostAdminMappingsRequestBodyRequestBasicAuthCredentials;
import org.openapis.openapi.models.operations.PostAdminMappingsRequestBodyResponse;
import org.openapis.openapi.models.operations.PostAdminMappingsRequestBodyResponseDelayDistributionLogNormal;
import org.openapis.openapi.models.operations.PostAdminMappingsRequestBodyResponseDelayDistributionLogNormalTypeEnum;
import org.openapis.openapi.models.operations.PostAdminMappingsRequestBodyResponseDelayDistributionUniform;
import org.openapis.openapi.models.operations.PostAdminMappingsRequestBodyResponseDelayDistributionUniformTypeEnum;
import org.openapis.openapi.models.operations.PostAdminMappingsRequestBodyResponseFaultEnum;
import org.openapis.openapi.models.operations.PostAdminMappingsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostAdminMappingsRequestBody req = new PostAdminMappingsRequestBody() {{
                id = "1fb576b0-d5f0-4d30-85fb-b2587053202c";
                metadata = new java.util.HashMap<String, Object>() {{
                    put("dolor", "vero");
                    put("nostrum", "hic");
                }};
                name = "Alejandro Purdy DDS";
                newScenarioState = "consequuntur";
                persistent = false;
                postServeActions = new java.util.HashMap<String, Object>() {{
                    put("error", "eaque");
                    put("occaecati", "rerum");
                    put("adipisci", "asperiores");
                }};
                priority = 934214L;
                request = new PostAdminMappingsRequestBodyRequest() {{
                    basicAuthCredentials = new PostAdminMappingsRequestBodyRequestBasicAuthCredentials("modi", "iste");;
                    bodyPatterns = new java.util.HashMap<String, Object>[]{{
                        add(new java.util.HashMap<String, Object>() {{
                            put("pariatur", "provident");
                            put("nobis", "libero");
                            put("delectus", "quaerat");
                        }}),
                        add(new java.util.HashMap<String, Object>() {{
                            put("aliquid", "dolorem");
                            put("dolorem", "dolor");
                            put("qui", "ipsum");
                        }}),
                        add(new java.util.HashMap<String, Object>() {{
                            put("excepturi", "cum");
                            put("voluptate", "dignissimos");
                            put("reiciendis", "amet");
                            put("dolorum", "numquam");
                        }}),
                    }};
                    cookies = new java.util.HashMap<String, Object>() {{
                        put("ipsa", "ipsa");
                    }};
                    headers = new java.util.HashMap<String, Object>() {{
                        put("odio", "quaerat");
                        put("accusamus", "quidem");
                    }};
                    method = "voluptatibus";
                    queryParameters = new java.util.HashMap<String, Object>() {{
                        put("natus", "eos");
                        put("atque", "sit");
                    }};
                    url = "fugiat";
                    urlPath = "ab";
                    urlPathPattern = "soluta";
                    urlPattern = "dolorum";
                }};;
                requiredScenarioState = "iusto";
                response = new PostAdminMappingsRequestBodyResponse() {{
                    additionalProxyRequestHeaders = new java.util.HashMap<String, Object>() {{
                        put("dolorum", "deleniti");
                        put("omnis", "necessitatibus");
                    }};
                    base64Body = "distinctio";
                    body = "asperiores";
                    bodyFileName = "nihil";
                    delayDistribution = new PostAdminMappingsRequestBodyResponseDelayDistributionLogNormal() {{
                        median = 456015L;
                        sigma = 6630.78;
                        type = PostAdminMappingsRequestBodyResponseDelayDistributionLogNormalTypeEnum.LOGNORMAL;
                    }};;
                    fault = PostAdminMappingsRequestBodyResponseFaultEnum.RANDOM_DATA_THEN_CLOSE;
                    fixedDelayMilliseconds = 263322L;
                    fromConfiguredStub = false;
                    headers = new java.util.HashMap<String, Object>() {{
                        put("perferendis", "amet");
                    }};
                    jsonBody = new java.util.HashMap<String, Object>() {{
                        put("accusamus", "ad");
                        put("saepe", "suscipit");
                        put("deserunt", "provident");
                        put("minima", "repellendus");
                    }};
                    proxyBaseUrl = "totam";
                    status = 628982L;
                    statusMessage = "alias";
                    transformerParameters = new java.util.HashMap<String, Object>() {{
                        put("quaerat", "tempora");
                        put("vel", "quod");
                        put("officiis", "qui");
                        put("dolorum", "a");
                    }};
                    transformers = new String[]{{
                        add("harum"),
                        add("iusto"),
                    }};
                }};;
                scenarioName = "ipsum";
                uuid = "cf3be453-f870-4b32-ab5a-73429cdb1a84";
            }};            

            PostAdminMappingsResponse res = sdk.stubMappings.postAdminMappings(req);

            if (res.postAdminMappings201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postAdminMappingsFindByMetadata

Find stubs by matching on their metadata

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostAdminMappingsFindByMetadataRequestBodyJSONEquals;
import org.openapis.openapi.models.operations.PostAdminMappingsFindByMetadataRequestBodyJSONPathMatch;
import org.openapis.openapi.models.operations.PostAdminMappingsFindByMetadataRequestBodyNegativeRegularExpressionMatch;
import org.openapis.openapi.models.operations.PostAdminMappingsFindByMetadataRequestBodyRegularExpressionMatch;
import org.openapis.openapi.models.operations.PostAdminMappingsFindByMetadataRequestBodyStringContains;
import org.openapis.openapi.models.operations.PostAdminMappingsFindByMetadataRequestBodyStringEquals;
import org.openapis.openapi.models.operations.PostAdminMappingsFindByMetadataRequestBodyXMLEquality;
import org.openapis.openapi.models.operations.PostAdminMappingsFindByMetadataRequestBodyXPathMatch;
import org.openapis.openapi.models.operations.PostAdminMappingsFindByMetadataResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = new PostAdminMappingsFindByMetadataRequestBodyStringContains("distinctio") {{
                contains = "dolores";
            }}            

            PostAdminMappingsFindByMetadataResponse res = sdk.stubMappings.postAdminMappingsFindByMetadata(req);

            if (res.postAdminMappingsFindByMetadata200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postAdminMappingsImport

Import given stub mappings to the backing store

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostAdminMappingsImportResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostAdminMappingsImportResponse res = sdk.stubMappings.postAdminMappingsImport();

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postAdminMappingsRemoveByMetadata

Delete stub mappings matching metadata

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostAdminMappingsRemoveByMetadataRequestBodyJSONEquals;
import org.openapis.openapi.models.operations.PostAdminMappingsRemoveByMetadataRequestBodyJSONPathMatch;
import org.openapis.openapi.models.operations.PostAdminMappingsRemoveByMetadataRequestBodyNegativeRegularExpressionMatch;
import org.openapis.openapi.models.operations.PostAdminMappingsRemoveByMetadataRequestBodyRegularExpressionMatch;
import org.openapis.openapi.models.operations.PostAdminMappingsRemoveByMetadataRequestBodyStringContains;
import org.openapis.openapi.models.operations.PostAdminMappingsRemoveByMetadataRequestBodyStringEquals;
import org.openapis.openapi.models.operations.PostAdminMappingsRemoveByMetadataRequestBodyXMLEquality;
import org.openapis.openapi.models.operations.PostAdminMappingsRemoveByMetadataRequestBodyXPathMatch;
import org.openapis.openapi.models.operations.PostAdminMappingsRemoveByMetadataResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = new PostAdminMappingsRemoveByMetadataRequestBodyJSONPathMatch("quam") {{
                ignoreArrayOrder = false;
                ignoreExtraElements = false;
                matchesJsonPath = "aliquid";
            }}            

            PostAdminMappingsRemoveByMetadataResponse res = sdk.stubMappings.postAdminMappingsRemoveByMetadata(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postAdminMappingsReset

Restores stub mappings to the defaults defined back in the backing store

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostAdminMappingsResetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostAdminMappingsResetResponse res = sdk.stubMappings.postAdminMappingsReset();

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postAdminMappingsSave

Save all persistent stub mappings to the backing store

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostAdminMappingsSaveResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostAdminMappingsSaveResponse res = sdk.stubMappings.postAdminMappingsSave();

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putAdminMappingsStubMappingId

Update a stub mapping

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutAdminMappingsStubMappingIdRequest;
import org.openapis.openapi.models.operations.PutAdminMappingsStubMappingIdRequestBody;
import org.openapis.openapi.models.operations.PutAdminMappingsStubMappingIdRequestBodyRequest;
import org.openapis.openapi.models.operations.PutAdminMappingsStubMappingIdRequestBodyRequestBasicAuthCredentials;
import org.openapis.openapi.models.operations.PutAdminMappingsStubMappingIdRequestBodyResponse;
import org.openapis.openapi.models.operations.PutAdminMappingsStubMappingIdRequestBodyResponseDelayDistributionLogNormal;
import org.openapis.openapi.models.operations.PutAdminMappingsStubMappingIdRequestBodyResponseDelayDistributionLogNormalTypeEnum;
import org.openapis.openapi.models.operations.PutAdminMappingsStubMappingIdRequestBodyResponseDelayDistributionUniform;
import org.openapis.openapi.models.operations.PutAdminMappingsStubMappingIdRequestBodyResponseDelayDistributionUniformTypeEnum;
import org.openapis.openapi.models.operations.PutAdminMappingsStubMappingIdRequestBodyResponseFaultEnum;
import org.openapis.openapi.models.operations.PutAdminMappingsStubMappingIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutAdminMappingsStubMappingIdRequest req = new PutAdminMappingsStubMappingIdRequest("molestias") {{
                requestBody = new PutAdminMappingsStubMappingIdRequestBody() {{
                    id = "d2322715-bf0c-4bb1-a31b-8b90f3443a11";
                    metadata = new java.util.HashMap<String, Object>() {{
                        put("quas", "itaque");
                    }};
                    name = "Jodi Skiles";
                    newScenarioState = "ut";
                    persistent = false;
                    postServeActions = new java.util.HashMap<String, Object>() {{
                        put("cupiditate", "qui");
                        put("quae", "laudantium");
                        put("odio", "occaecati");
                    }};
                    priority = 977496L;
                    request = new PutAdminMappingsStubMappingIdRequestBodyRequest() {{
                        basicAuthCredentials = new PutAdminMappingsStubMappingIdRequestBodyRequestBasicAuthCredentials("quisquam", "vero");;
                        bodyPatterns = new java.util.HashMap<String, Object>[]{{
                            add(new java.util.HashMap<String, Object>() {{
                                put("ipsum", "delectus");
                                put("voluptate", "consectetur");
                            }}),
                            add(new java.util.HashMap<String, Object>() {{
                                put("tenetur", "dignissimos");
                                put("hic", "distinctio");
                                put("quod", "odio");
                                put("similique", "facilis");
                            }}),
                            add(new java.util.HashMap<String, Object>() {{
                                put("ducimus", "dolore");
                                put("quibusdam", "illum");
                                put("sequi", "natus");
                                put("impedit", "aut");
                            }}),
                        }};
                        cookies = new java.util.HashMap<String, Object>() {{
                            put("exercitationem", "nulla");
                            put("fugit", "porro");
                            put("maiores", "doloribus");
                            put("iusto", "eligendi");
                        }};
                        headers = new java.util.HashMap<String, Object>() {{
                            put("alias", "officia");
                            put("tempora", "ipsam");
                        }};
                        method = "ea";
                        queryParameters = new java.util.HashMap<String, Object>() {{
                            put("vel", "possimus");
                        }};
                        url = "magnam";
                        urlPath = "ratione";
                        urlPathPattern = "ex";
                        urlPattern = "laudantium";
                    }};;
                    requiredScenarioState = "dicta";
                    response = new PutAdminMappingsStubMappingIdRequestBodyResponse() {{
                        additionalProxyRequestHeaders = new java.util.HashMap<String, Object>() {{
                            put("maiores", "quasi");
                        }};
                        base64Body = "ex";
                        body = "nulla";
                        bodyFileName = "excepturi";
                        delayDistribution = new PutAdminMappingsStubMappingIdRequestBodyResponseDelayDistributionUniform() {{
                            lower = 343605L;
                            type = PutAdminMappingsStubMappingIdRequestBodyResponseDelayDistributionUniformTypeEnum.UNIFORM;
                            upper = 960835L;
                        }};;
                        fault = PutAdminMappingsStubMappingIdRequestBodyResponseFaultEnum.RANDOM_DATA_THEN_CLOSE;
                        fixedDelayMilliseconds = 906556L;
                        fromConfiguredStub = false;
                        headers = new java.util.HashMap<String, Object>() {{
                            put("impedit", "corporis");
                            put("veniam", "aliquid");
                        }};
                        jsonBody = new java.util.HashMap<String, Object>() {{
                            put("magnam", "ea");
                        }};
                        proxyBaseUrl = "quo";
                        status = 232234L;
                        statusMessage = "recusandae";
                        transformerParameters = new java.util.HashMap<String, Object>() {{
                            put("minima", "eaque");
                        }};
                        transformers = new String[]{{
                            add("libero"),
                            add("aut"),
                            add("aut"),
                            add("deleniti"),
                        }};
                    }};;
                    scenarioName = "impedit";
                    uuid = "42e141aa-c366-4c8d-96b1-442907474778";
                }};;
            }};            

            PutAdminMappingsStubMappingIdResponse res = sdk.stubMappings.putAdminMappingsStubMappingId(req);

            if (res.putAdminMappingsStubMappingId200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
