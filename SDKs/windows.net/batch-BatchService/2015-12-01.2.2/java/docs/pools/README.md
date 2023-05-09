# pools

### Available Operations

* [poolAdd](#pooladd) - Adds a pool to the specified account.
* [poolDelete](#pooldelete) - Deletes a pool from the specified account.
* [poolDisableAutoScale](#pooldisableautoscale) - Disables automatic scaling for a pool.
* [poolEnableAutoScale](#poolenableautoscale) - Enables automatic scaling for a pool.
* [poolEvaluateAutoScale](#poolevaluateautoscale) - Gets the result of evaluating an automatic scaling formula on the pool.
* [poolExists](#poolexists) - Gets basic properties of a pool.
* [poolGet](#poolget) - Gets information about the specified pool.
* [poolGetAllPoolsLifetimeStatistics](#poolgetallpoolslifetimestatistics) - Gets lifetime summary statistics for all of the pools in the specified account. Statistics are aggregated across all pools that have ever existed in the account, from account creation to the last update time of the statistics.
* [poolList](#poollist) - Lists all of the pools in the specified account.
* [poolListPoolUsageMetrics](#poollistpoolusagemetrics) - Lists the usage metrics, aggregated by pool across individual time intervals, for the specified account.
* [poolPatch](#poolpatch) - Updates the properties of a pool.
* [poolResize](#poolresize) - Changes the number of compute nodes that are assigned to a pool.
* [poolStopResize](#poolstopresize) - Stops an ongoing resize operation on the pool. This does not restore the pool to its previous state before the resize operation: it only stops any further changes being made, and the pool maintains its current state.
* [poolUpdateProperties](#poolupdateproperties) - Updates the properties of a pool.
* [poolUpgradeOS](#poolupgradeos) - Upgrades the operating system of the specified pool.

## poolAdd

Adds a pool to the specified account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PoolAddRequest;
import org.openapis.openapi.models.operations.PoolAddResponse;
import org.openapis.openapi.models.shared.ApplicationPackageReference;
import org.openapis.openapi.models.shared.CertificateReference;
import org.openapis.openapi.models.shared.CertificateReferenceStoreLocationEnum;
import org.openapis.openapi.models.shared.EnvironmentSetting;
import org.openapis.openapi.models.shared.MetadataItem;
import org.openapis.openapi.models.shared.PoolAddParameter;
import org.openapis.openapi.models.shared.ResourceFile;
import org.openapis.openapi.models.shared.StartTask;
import org.openapis.openapi.models.shared.TaskSchedulingPolicy;
import org.openapis.openapi.models.shared.TaskSchedulingPolicyNodeFillTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PoolAddRequest req = new PoolAddRequest(                new PoolAddParameter("veniam", "animi", "dolores") {{
                                applicationPackageReferences = new org.openapis.openapi.models.shared.ApplicationPackageReference[]{{
                                    add(new ApplicationPackageReference("necessitatibus") {{
                                        applicationId = "dicta";
                                        version = "consequuntur";
                                    }}),
                                    add(new ApplicationPackageReference("ducimus") {{
                                        applicationId = "nobis";
                                        version = "ipsa";
                                    }}),
                                    add(new ApplicationPackageReference("quasi") {{
                                        applicationId = "maiores";
                                        version = "veritatis";
                                    }}),
                                }};
                                autoScaleEvaluationInterval = "laboriosam";
                                autoScaleFormula = "pariatur";
                                certificateReferences = new org.openapis.openapi.models.shared.CertificateReference[]{{
                                    add(new CertificateReference("doloribus", "eligendi") {{
                                        storeLocation = CertificateReferenceStoreLocationEnum.LOCALMACHINE;
                                        storeName = "occaecati";
                                        thumbprint = "nemo";
                                        thumbprintAlgorithm = "aliquam";
                                        visibility = "nostrum";
                                    }}),
                                    add(new CertificateReference("totam", "molestias") {{
                                        storeLocation = CertificateReferenceStoreLocationEnum.LOCALMACHINE;
                                        storeName = "enim";
                                        thumbprint = "hic";
                                        thumbprintAlgorithm = "animi";
                                        visibility = "quas";
                                    }}),
                                    add(new CertificateReference("iste", "assumenda") {{
                                        storeLocation = CertificateReferenceStoreLocationEnum.LOCALMACHINE;
                                        storeName = "eaque";
                                        thumbprint = "saepe";
                                        thumbprintAlgorithm = "architecto";
                                        visibility = "quos";
                                    }}),
                                }};
                                displayName = "tempore";
                                enableAutoScale = false;
                                enableInterNodeCommunication = false;
                                maxTasksPerNode = 725574;
                                metadata = new org.openapis.openapi.models.shared.MetadataItem[]{{
                                    add(new MetadataItem() {{
                                        name = "Lucia Rutherford";
                                        value = "adipisci";
                                    }}),
                                }};
                                resizeTimeout = "saepe";
                                startTask = new StartTask() {{
                                    commandLine = "deserunt";
                                    environmentSettings = new org.openapis.openapi.models.shared.EnvironmentSetting[]{{
                                        add(new EnvironmentSetting() {{
                                            name = "Ms. Sally Rempel";
                                            value = "eligendi";
                                        }}),
                                    }};
                                    maxTaskRetryCount = 820023;
                                    resourceFiles = new org.openapis.openapi.models.shared.ResourceFile[]{{
                                        add(new ResourceFile() {{
                                            blobSource = "magnam";
                                            filePath = "itaque";
                                        }}),
                                        add(new ResourceFile() {{
                                            blobSource = "sed";
                                            filePath = "asperiores";
                                        }}),
                                    }};
                                    runElevated = false;
                                    waitForSuccess = false;
                                }};;
                                targetDedicated = 330267;
                                targetOSVersion = "consequuntur";
                                taskSchedulingPolicy = new TaskSchedulingPolicy(TaskSchedulingPolicyNodeFillTypeEnum.UNMAPPED);;
                            }};, "laudantium") {{
                clientRequestId = "odit";
                ocpDate = "pariatur";
                returnClientRequestId = false;
                timeout = 227362;
            }};            

            PoolAddResponse res = sdk.pools.poolAdd(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## poolDelete

Deletes a pool from the specified account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PoolDeleteRequest;
import org.openapis.openapi.models.operations.PoolDeleteResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PoolDeleteRequest req = new PoolDeleteRequest("exercitationem", "ab") {{
                ifMatch = "velit";
                ifModifiedSince = "facilis";
                ifNoneMatch = "tempore";
                ifUnmodifiedSince = "nisi";
                clientRequestId = "voluptatibus";
                ocpDate = "quaerat";
                returnClientRequestId = false;
                timeout = 503748;
            }};            

            PoolDeleteResponse res = sdk.pools.poolDelete(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## poolDisableAutoScale

Disables automatic scaling for a pool.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PoolDisableAutoScaleRequest;
import org.openapis.openapi.models.operations.PoolDisableAutoScaleResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PoolDisableAutoScaleRequest req = new PoolDisableAutoScaleRequest("distinctio", "nisi") {{
                clientRequestId = "quis";
                ocpDate = "nisi";
                returnClientRequestId = false;
                timeout = 727771;
            }};            

            PoolDisableAutoScaleResponse res = sdk.pools.poolDisableAutoScale(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## poolEnableAutoScale

Enables automatic scaling for a pool.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PoolEnableAutoScaleRequest;
import org.openapis.openapi.models.operations.PoolEnableAutoScaleResponse;
import org.openapis.openapi.models.shared.PoolEnableAutoScaleParameter;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PoolEnableAutoScaleRequest req = new PoolEnableAutoScaleRequest(                new PoolEnableAutoScaleParameter() {{
                                autoScaleEvaluationInterval = "minus";
                                autoScaleFormula = "facere";
                            }};, "facilis", "ipsum") {{
                ifMatch = "ad";
                ifModifiedSince = "voluptatibus";
                ifNoneMatch = "voluptatibus";
                ifUnmodifiedSince = "consequuntur";
                clientRequestId = "debitis";
                ocpDate = "labore";
                returnClientRequestId = false;
                timeout = 700928;
            }};            

            PoolEnableAutoScaleResponse res = sdk.pools.poolEnableAutoScale(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## poolEvaluateAutoScale

Gets the result of evaluating an automatic scaling formula on the pool.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PoolEvaluateAutoScaleRequest;
import org.openapis.openapi.models.operations.PoolEvaluateAutoScaleResponse;
import org.openapis.openapi.models.shared.PoolEvaluateAutoScaleParameter;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PoolEvaluateAutoScaleRequest req = new PoolEvaluateAutoScaleRequest(                new PoolEvaluateAutoScaleParameter("eos");, "reprehenderit", "nostrum") {{
                clientRequestId = "neque";
                ocpDate = "iusto";
                returnClientRequestId = false;
                timeout = 664965;
            }};            

            PoolEvaluateAutoScaleResponse res = sdk.pools.poolEvaluateAutoScale(req);

            if (res.autoScaleRun != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## poolExists

Gets basic properties of a pool.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PoolExistsRequest;
import org.openapis.openapi.models.operations.PoolExistsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PoolExistsRequest req = new PoolExistsRequest("rem", "eligendi") {{
                dollarSelect = "fugiat";
                ifMatch = "unde";
                ifModifiedSince = "officiis";
                ifNoneMatch = "ducimus";
                ifUnmodifiedSince = "dolor";
                clientRequestId = "dicta";
                ocpDate = "error";
                returnClientRequestId = false;
                timeout = 784731;
            }};            

            PoolExistsResponse res = sdk.pools.poolExists(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## poolGet

Gets information about the specified pool.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PoolGetRequest;
import org.openapis.openapi.models.operations.PoolGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PoolGetRequest req = new PoolGetRequest("vitae", "dignissimos") {{
                dollarExpand = "esse";
                dollarSelect = "fugiat";
                ifMatch = "ad";
                ifModifiedSince = "aspernatur";
                ifNoneMatch = "enim";
                ifUnmodifiedSince = "delectus";
                clientRequestId = "iusto";
                ocpDate = "dignissimos";
                returnClientRequestId = false;
                timeout = 729828;
            }};            

            PoolGetResponse res = sdk.pools.poolGet(req);

            if (res.cloudPool != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## poolGetAllPoolsLifetimeStatistics

Gets lifetime summary statistics for all of the pools in the specified account. Statistics are aggregated across all pools that have ever existed in the account, from account creation to the last update time of the statistics.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PoolGetAllPoolsLifetimeStatisticsRequest;
import org.openapis.openapi.models.operations.PoolGetAllPoolsLifetimeStatisticsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PoolGetAllPoolsLifetimeStatisticsRequest req = new PoolGetAllPoolsLifetimeStatisticsRequest("illo") {{
                clientRequestId = "ab";
                ocpDate = "incidunt";
                returnClientRequestId = false;
                timeout = 879174;
            }};            

            PoolGetAllPoolsLifetimeStatisticsResponse res = sdk.pools.poolGetAllPoolsLifetimeStatistics(req);

            if (res.poolStatistics != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## poolList

Lists all of the pools in the specified account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PoolListRequest;
import org.openapis.openapi.models.operations.PoolListResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PoolListRequest req = new PoolListRequest("saepe") {{
                dollarExpand = "tempore";
                dollarFilter = "veniam";
                dollarSelect = "eos";
                clientRequestId = "reiciendis";
                maxresults = 939161;
                ocpDate = "reprehenderit";
                returnClientRequestId = false;
                timeout = 506312;
            }};            

            PoolListResponse res = sdk.pools.poolList(req);

            if (res.cloudPoolListResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## poolListPoolUsageMetrics

Lists the usage metrics, aggregated by pool across individual time intervals, for the specified account.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PoolListPoolUsageMetricsRequest;
import org.openapis.openapi.models.operations.PoolListPoolUsageMetricsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PoolListPoolUsageMetricsRequest req = new PoolListPoolUsageMetricsRequest("nemo") {{
                dollarFilter = "repellat";
                clientRequestId = "quisquam";
                endtime = OffsetDateTime.parse("2022-07-14T12:02:01.961Z");
                maxresults = 534908;
                ocpDate = "illo";
                returnClientRequestId = false;
                starttime = OffsetDateTime.parse("2022-03-04T11:21:13.023Z");
                timeout = 304173;
            }};            

            PoolListPoolUsageMetricsResponse res = sdk.pools.poolListPoolUsageMetrics(req);

            if (res.poolListPoolUsageMetricsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## poolPatch

Updates the properties of a pool.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PoolPatchRequest;
import org.openapis.openapi.models.operations.PoolPatchResponse;
import org.openapis.openapi.models.shared.ApplicationPackageReference;
import org.openapis.openapi.models.shared.CertificateReference;
import org.openapis.openapi.models.shared.CertificateReferenceStoreLocationEnum;
import org.openapis.openapi.models.shared.EnvironmentSetting;
import org.openapis.openapi.models.shared.MetadataItem;
import org.openapis.openapi.models.shared.PoolPatchParameter;
import org.openapis.openapi.models.shared.ResourceFile;
import org.openapis.openapi.models.shared.StartTask;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PoolPatchRequest req = new PoolPatchRequest(                new PoolPatchParameter() {{
                                applicationPackageReferences = new org.openapis.openapi.models.shared.ApplicationPackageReference[]{{
                                    add(new ApplicationPackageReference("repudiandae") {{
                                        applicationId = "provident";
                                        version = "laudantium";
                                    }}),
                                    add(new ApplicationPackageReference("aspernatur") {{
                                        applicationId = "consequatur";
                                        version = "maxime";
                                    }}),
                                    add(new ApplicationPackageReference("quas") {{
                                        applicationId = "nam";
                                        version = "expedita";
                                    }}),
                                    add(new ApplicationPackageReference("rerum") {{
                                        applicationId = "provident";
                                        version = "repudiandae";
                                    }}),
                                }};
                                certificateReferences = new org.openapis.openapi.models.shared.CertificateReference[]{{
                                    add(new CertificateReference("dolorem", "commodi") {{
                                        storeLocation = CertificateReferenceStoreLocationEnum.LOCALMACHINE;
                                        storeName = "vero";
                                        thumbprint = "similique";
                                        thumbprintAlgorithm = "repellendus";
                                        visibility = "iure";
                                    }}),
                                    add(new CertificateReference("quae", "amet") {{
                                        storeLocation = CertificateReferenceStoreLocationEnum.UNMAPPED;
                                        storeName = "commodi";
                                        thumbprint = "aut";
                                        thumbprintAlgorithm = "voluptatem";
                                        visibility = "ad";
                                    }}),
                                }};
                                metadata = new org.openapis.openapi.models.shared.MetadataItem[]{{
                                    add(new MetadataItem() {{
                                        name = "Willis Rippin Sr.";
                                        value = "laudantium";
                                    }}),
                                    add(new MetadataItem() {{
                                        name = "Lana Kris";
                                        value = "dolorum";
                                    }}),
                                    add(new MetadataItem() {{
                                        name = "Mrs. Terrence Waelchi";
                                        value = "itaque";
                                    }}),
                                    add(new MetadataItem() {{
                                        name = "Johnnie Baumbach";
                                        value = "eos";
                                    }}),
                                }};
                                startTask = new StartTask() {{
                                    commandLine = "totam";
                                    environmentSettings = new org.openapis.openapi.models.shared.EnvironmentSetting[]{{
                                        add(new EnvironmentSetting() {{
                                            name = "Dr. Shannon Fahey";
                                            value = "occaecati";
                                        }}),
                                    }};
                                    maxTaskRetryCount = 539813;
                                    resourceFiles = new org.openapis.openapi.models.shared.ResourceFile[]{{
                                        add(new ResourceFile() {{
                                            blobSource = "at";
                                            filePath = "labore";
                                        }}),
                                    }};
                                    runElevated = false;
                                    waitForSuccess = false;
                                }};;
                            }};, "minus", "esse") {{
                ifMatch = "voluptatem";
                ifModifiedSince = "perferendis";
                ifNoneMatch = "rerum";
                ifUnmodifiedSince = "ea";
                clientRequestId = "aperiam";
                ocpDate = "dignissimos";
                returnClientRequestId = false;
                timeout = 998026;
            }};            

            PoolPatchResponse res = sdk.pools.poolPatch(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## poolResize

Changes the number of compute nodes that are assigned to a pool.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PoolResizeRequest;
import org.openapis.openapi.models.operations.PoolResizeResponse;
import org.openapis.openapi.models.shared.PoolResizeParameter;
import org.openapis.openapi.models.shared.PoolResizeParameterNodeDeallocationOptionEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PoolResizeRequest req = new PoolResizeRequest(                new PoolResizeParameter(243678) {{
                                nodeDeallocationOption = PoolResizeParameterNodeDeallocationOptionEnum.RETAINEDDATA;
                                resizeTimeout = "provident";
                            }};, "consectetur", "eligendi") {{
                ifMatch = "dignissimos";
                ifModifiedSince = "consectetur";
                ifNoneMatch = "soluta";
                ifUnmodifiedSince = "natus";
                clientRequestId = "temporibus";
                ocpDate = "officia";
                returnClientRequestId = false;
                timeout = 228857;
            }};            

            PoolResizeResponse res = sdk.pools.poolResize(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## poolStopResize

Stops an ongoing resize operation on the pool. This does not restore the pool to its previous state before the resize operation: it only stops any further changes being made, and the pool maintains its current state.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PoolStopResizeRequest;
import org.openapis.openapi.models.operations.PoolStopResizeResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PoolStopResizeRequest req = new PoolStopResizeRequest("tenetur", "aspernatur") {{
                ifMatch = "quo";
                ifModifiedSince = "itaque";
                ifNoneMatch = "illum";
                ifUnmodifiedSince = "laborum";
                clientRequestId = "dignissimos";
                ocpDate = "vero";
                returnClientRequestId = false;
                timeout = 185348;
            }};            

            PoolStopResizeResponse res = sdk.pools.poolStopResize(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## poolUpdateProperties

Updates the properties of a pool.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PoolUpdatePropertiesRequest;
import org.openapis.openapi.models.operations.PoolUpdatePropertiesResponse;
import org.openapis.openapi.models.shared.ApplicationPackageReference;
import org.openapis.openapi.models.shared.CertificateReference;
import org.openapis.openapi.models.shared.CertificateReferenceStoreLocationEnum;
import org.openapis.openapi.models.shared.EnvironmentSetting;
import org.openapis.openapi.models.shared.MetadataItem;
import org.openapis.openapi.models.shared.PoolUpdatePropertiesParameter;
import org.openapis.openapi.models.shared.ResourceFile;
import org.openapis.openapi.models.shared.StartTask;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PoolUpdatePropertiesRequest req = new PoolUpdatePropertiesRequest(                new PoolUpdatePropertiesParameter(                new org.openapis.openapi.models.shared.ApplicationPackageReference[]{{
                                                add(new ApplicationPackageReference("explicabo") {{
                                                    applicationId = "repellat";
                                                    version = "explicabo";
                                                }}),
                                            }},                 new org.openapis.openapi.models.shared.CertificateReference[]{{
                                                add(new CertificateReference("deserunt", "delectus") {{
                                                    storeLocation = CertificateReferenceStoreLocationEnum.LOCALMACHINE;
                                                    storeName = "non";
                                                    thumbprint = "ab";
                                                    thumbprintAlgorithm = "illo";
                                                    visibility = "hic";
                                                }}),
                                                add(new CertificateReference("numquam", "repudiandae") {{
                                                    storeLocation = CertificateReferenceStoreLocationEnum.CURRENTUSER;
                                                    storeName = "distinctio";
                                                    thumbprint = "in";
                                                    thumbprintAlgorithm = "exercitationem";
                                                    visibility = "labore";
                                                }}),
                                            }},                 new org.openapis.openapi.models.shared.MetadataItem[]{{
                                                add(new MetadataItem() {{
                                                    name = "Judith Thompson Sr.";
                                                    value = "deleniti";
                                                }}),
                                                add(new MetadataItem() {{
                                                    name = "Colleen Murazik";
                                                    value = "magnam";
                                                }}),
                                            }}) {{
                                startTask = new StartTask() {{
                                    commandLine = "sit";
                                    environmentSettings = new org.openapis.openapi.models.shared.EnvironmentSetting[]{{
                                        add(new EnvironmentSetting() {{
                                            name = "Robin O'Hara";
                                            value = "nostrum";
                                        }}),
                                        add(new EnvironmentSetting() {{
                                            name = "Mrs. Lynn Wisozk Jr.";
                                            value = "eveniet";
                                        }}),
                                    }};
                                    maxTaskRetryCount = 483753;
                                    resourceFiles = new org.openapis.openapi.models.shared.ResourceFile[]{{
                                        add(new ResourceFile() {{
                                            blobSource = "numquam";
                                            filePath = "dolorum";
                                        }}),
                                        add(new ResourceFile() {{
                                            blobSource = "possimus";
                                            filePath = "voluptate";
                                        }}),
                                    }};
                                    runElevated = false;
                                    waitForSuccess = false;
                                }};;
                            }};, "consectetur", "nesciunt") {{
                clientRequestId = "quaerat";
                ocpDate = "itaque";
                returnClientRequestId = false;
                timeout = 791228;
            }};            

            PoolUpdatePropertiesResponse res = sdk.pools.poolUpdateProperties(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## poolUpgradeOS

Upgrades the operating system of the specified pool.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PoolUpgradeOSRequest;
import org.openapis.openapi.models.operations.PoolUpgradeOSResponse;
import org.openapis.openapi.models.shared.PoolUpgradeOSParameter;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PoolUpgradeOSRequest req = new PoolUpgradeOSRequest(                new PoolUpgradeOSParameter("sunt");, "distinctio", "iusto") {{
                ifMatch = "quas";
                ifModifiedSince = "et";
                ifNoneMatch = "facilis";
                ifUnmodifiedSince = "amet";
                clientRequestId = "autem";
                ocpDate = "fuga";
                returnClientRequestId = false;
                timeout = 5310;
            }};            

            PoolUpgradeOSResponse res = sdk.pools.poolUpgradeOS(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
