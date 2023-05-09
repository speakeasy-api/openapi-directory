# recordings

## Overview

Stub mapping record and snapshot functions

User documentation
<http://wiremock.org/docs/record-playback/>
### Available Operations

* [getAdminRecordingsStatus](#getadminrecordingsstatus) - Get recording status
* [postAdminRecordingsSnapshot](#postadminrecordingssnapshot) - Take a snapshot recording
* [postAdminRecordingsStart](#postadminrecordingsstart) - Start recording
* [postAdminRecordingsStop](#postadminrecordingsstop) - Stop recording

## getAdminRecordingsStatus

Get recording status

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAdminRecordingsStatusResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAdminRecordingsStatusResponse res = sdk.recordings.getAdminRecordingsStatus();

            if (res.getAdminRecordingsStatus200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postAdminRecordingsSnapshot

Take a snapshot recording

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostAdminRecordingsSnapshotRequestBody;
import org.openapis.openapi.models.operations.PostAdminRecordingsSnapshotRequestBodyCaptureHeaders;
import org.openapis.openapi.models.operations.PostAdminRecordingsSnapshotRequestBodyExtractBodyCriteria;
import org.openapis.openapi.models.operations.PostAdminRecordingsSnapshotRequestBodyFilters;
import org.openapis.openapi.models.operations.PostAdminRecordingsSnapshotRequestBodyFiltersBasicAuthCredentials;
import org.openapis.openapi.models.operations.PostAdminRecordingsSnapshotRequestBodyRequestBodyPattern1;
import org.openapis.openapi.models.operations.PostAdminRecordingsSnapshotRequestBodyRequestBodyPattern1MatcherEnum;
import org.openapis.openapi.models.operations.PostAdminRecordingsSnapshotRequestBodyRequestBodyPattern2;
import org.openapis.openapi.models.operations.PostAdminRecordingsSnapshotRequestBodyRequestBodyPattern2MatcherEnum;
import org.openapis.openapi.models.operations.PostAdminRecordingsSnapshotRequestBodyRequestBodyPattern3;
import org.openapis.openapi.models.operations.PostAdminRecordingsSnapshotRequestBodyRequestBodyPattern3MatcherEnum;
import org.openapis.openapi.models.operations.PostAdminRecordingsSnapshotRequestBodyRequestBodyPattern4;
import org.openapis.openapi.models.operations.PostAdminRecordingsSnapshotRequestBodyRequestBodyPattern4MatcherEnum;
import org.openapis.openapi.models.operations.PostAdminRecordingsSnapshotResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostAdminRecordingsSnapshotRequestBody req = new PostAdminRecordingsSnapshotRequestBody() {{
                captureHeaders = new java.util.HashMap<String, org.openapis.openapi.models.operations.PostAdminRecordingsSnapshotRequestBodyCaptureHeaders>() {{
                    put("totam", new PostAdminRecordingsSnapshotRequestBodyCaptureHeaders() {{
                        caseInsensitive = false;
                    }});
                    put("beatae", new PostAdminRecordingsSnapshotRequestBodyCaptureHeaders() {{
                        caseInsensitive = false;
                    }});
                    put("commodi", new PostAdminRecordingsSnapshotRequestBodyCaptureHeaders() {{
                        caseInsensitive = false;
                    }});
                    put("molestiae", new PostAdminRecordingsSnapshotRequestBodyCaptureHeaders() {{
                        caseInsensitive = false;
                    }});
                }};
                extractBodyCriteria = new PostAdminRecordingsSnapshotRequestBodyExtractBodyCriteria() {{
                    binarySizeThreshold = "18.2 GB";
                    textSizeThreshold = "18.2 GB";
                }};;
                filters = new PostAdminRecordingsSnapshotRequestBodyFilters() {{
                    basicAuthCredentials = new PostAdminRecordingsSnapshotRequestBodyFiltersBasicAuthCredentials("modi", "qui");;
                    bodyPatterns = new java.util.HashMap<String, Object>[]{{
                        add(new java.util.HashMap<String, Object>() {{
                            put("esse", "ipsum");
                            put("excepturi", "aspernatur");
                            put("perferendis", "ad");
                        }}),
                        add(new java.util.HashMap<String, Object>() {{
                            put("sed", "iste");
                            put("dolor", "natus");
                            put("laboriosam", "hic");
                        }}),
                        add(new java.util.HashMap<String, Object>() {{
                            put("fuga", "in");
                            put("corporis", "iste");
                            put("iure", "saepe");
                            put("quidem", "architecto");
                        }}),
                        add(new java.util.HashMap<String, Object>() {{
                            put("reiciendis", "est");
                        }}),
                    }};
                    cookies = new java.util.HashMap<String, Object>() {{
                        put("laborum", "dolores");
                        put("dolorem", "corporis");
                        put("explicabo", "nobis");
                    }};
                    headers = new java.util.HashMap<String, Object>() {{
                        put("omnis", "nemo");
                        put("minima", "excepturi");
                    }};
                    ids = new String[]{{
                        add("iure"),
                    }};
                    method = "culpa";
                    queryParameters = new java.util.HashMap<String, Object>() {{
                        put("sapiente", "architecto");
                        put("mollitia", "dolorem");
                        put("culpa", "consequuntur");
                        put("repellat", "mollitia");
                    }};
                    url = "occaecati";
                    urlPath = "numquam";
                    urlPathPattern = "commodi";
                    urlPattern = "quam";
                }};;
                persist = false;
                repeatsAsScenarios = false;
                requestBodyPattern = new PostAdminRecordingsSnapshotRequestBodyRequestBodyPattern2() {{
                    caseInsensitive = false;
                    matcher = PostAdminRecordingsSnapshotRequestBodyRequestBodyPattern2MatcherEnum.EQUAL_TO;
                }};;
                transformerParameters = new java.util.HashMap<String, Object>() {{
                    put("error", "quia");
                }};
                transformers = new String[]{{
                    add("vitae"),
                    add("laborum"),
                }};
            }};            

            PostAdminRecordingsSnapshotResponse res = sdk.recordings.postAdminRecordingsSnapshot(req);

            if (res.postAdminRecordingsSnapshot200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postAdminRecordingsStart

Begin recording stub mappings

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostAdminRecordingsStartRequestBody;
import org.openapis.openapi.models.operations.PostAdminRecordingsStartRequestBodyCaptureHeaders;
import org.openapis.openapi.models.operations.PostAdminRecordingsStartRequestBodyExtractBodyCriteria;
import org.openapis.openapi.models.operations.PostAdminRecordingsStartRequestBodyFilters;
import org.openapis.openapi.models.operations.PostAdminRecordingsStartRequestBodyFiltersBasicAuthCredentials;
import org.openapis.openapi.models.operations.PostAdminRecordingsStartRequestBodyRequestBodyPattern1;
import org.openapis.openapi.models.operations.PostAdminRecordingsStartRequestBodyRequestBodyPattern1MatcherEnum;
import org.openapis.openapi.models.operations.PostAdminRecordingsStartRequestBodyRequestBodyPattern2;
import org.openapis.openapi.models.operations.PostAdminRecordingsStartRequestBodyRequestBodyPattern2MatcherEnum;
import org.openapis.openapi.models.operations.PostAdminRecordingsStartRequestBodyRequestBodyPattern3;
import org.openapis.openapi.models.operations.PostAdminRecordingsStartRequestBodyRequestBodyPattern3MatcherEnum;
import org.openapis.openapi.models.operations.PostAdminRecordingsStartRequestBodyRequestBodyPattern4;
import org.openapis.openapi.models.operations.PostAdminRecordingsStartRequestBodyRequestBodyPattern4MatcherEnum;
import org.openapis.openapi.models.operations.PostAdminRecordingsStartResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostAdminRecordingsStartRequestBody req = new PostAdminRecordingsStartRequestBody() {{
                captureHeaders = new java.util.HashMap<String, org.openapis.openapi.models.operations.PostAdminRecordingsStartRequestBodyCaptureHeaders>() {{
                    put("enim", new PostAdminRecordingsStartRequestBodyCaptureHeaders() {{
                        caseInsensitive = false;
                    }});
                    put("odit", new PostAdminRecordingsStartRequestBodyCaptureHeaders() {{
                        caseInsensitive = false;
                    }});
                    put("quo", new PostAdminRecordingsStartRequestBodyCaptureHeaders() {{
                        caseInsensitive = false;
                    }});
                }};
                extractBodyCriteria = new PostAdminRecordingsStartRequestBodyExtractBodyCriteria() {{
                    binarySizeThreshold = "18.2 GB";
                    textSizeThreshold = "18.2 GB";
                }};;
                filters = new PostAdminRecordingsStartRequestBodyFilters() {{
                    basicAuthCredentials = new PostAdminRecordingsStartRequestBodyFiltersBasicAuthCredentials("sequi", "tenetur");;
                    bodyPatterns = new java.util.HashMap<String, Object>[]{{
                        add(new java.util.HashMap<String, Object>() {{
                            put("possimus", "aut");
                            put("quasi", "error");
                            put("temporibus", "laborum");
                        }}),
                        add(new java.util.HashMap<String, Object>() {{
                            put("reiciendis", "voluptatibus");
                        }}),
                    }};
                    cookies = new java.util.HashMap<String, Object>() {{
                        put("nihil", "praesentium");
                        put("voluptatibus", "ipsa");
                        put("omnis", "voluptate");
                        put("cum", "perferendis");
                    }};
                    headers = new java.util.HashMap<String, Object>() {{
                        put("reprehenderit", "ut");
                    }};
                    method = "maiores";
                    queryParameters = new java.util.HashMap<String, Object>() {{
                        put("corporis", "dolore");
                    }};
                    url = "iusto";
                    urlPath = "dicta";
                    urlPathPattern = "harum";
                    urlPattern = "enim";
                }};;
                persist = false;
                repeatsAsScenarios = false;
                requestBodyPattern = new PostAdminRecordingsStartRequestBodyRequestBodyPattern4() {{
                    matcher = PostAdminRecordingsStartRequestBodyRequestBodyPattern4MatcherEnum.EQUAL_TO_XML;
                }};;
                targetBaseUrl = "http://example.mocklab.io";
                transformerParameters = new java.util.HashMap<String, Object>() {{
                    put("repudiandae", "quae");
                    put("ipsum", "quidem");
                }};
                transformers = new String[]{{
                    add("excepturi"),
                    add("pariatur"),
                    add("modi"),
                }};
            }};            

            PostAdminRecordingsStartResponse res = sdk.recordings.postAdminRecordingsStart(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postAdminRecordingsStop

End recording of stub mappings

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostAdminRecordingsStopResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostAdminRecordingsStopResponse res = sdk.recordings.postAdminRecordingsStop();

            if (res.postAdminRecordingsStop200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
