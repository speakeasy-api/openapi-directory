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
import org.openapis.openapi.models.shared.CertificateReferenceVisibilityEnum;
import org.openapis.openapi.models.shared.CloudServiceConfiguration;
import org.openapis.openapi.models.shared.EnvironmentSetting;
import org.openapis.openapi.models.shared.ImageReference;
import org.openapis.openapi.models.shared.MetadataItem;
import org.openapis.openapi.models.shared.PoolAddParameter;
import org.openapis.openapi.models.shared.ResourceFile;
import org.openapis.openapi.models.shared.StartTask;
import org.openapis.openapi.models.shared.TaskSchedulingPolicy;
import org.openapis.openapi.models.shared.TaskSchedulingPolicyNodeFillTypeEnum;
import org.openapis.openapi.models.shared.VirtualMachineConfiguration;
import org.openapis.openapi.models.shared.WindowsConfiguration;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PoolAddRequest req = new PoolAddRequest(                new PoolAddParameter("delectus", "impedit") {{
                                applicationPackageReferences = new org.openapis.openapi.models.shared.ApplicationPackageReference[]{{
                                    add(new ApplicationPackageReference("saepe") {{
                                        applicationId = "ipsum";
                                        version = "adipisci";
                                    }}),
                                    add(new ApplicationPackageReference("quis") {{
                                        applicationId = "deserunt";
                                        version = "doloremque";
                                    }}),
                                    add(new ApplicationPackageReference("architecto") {{
                                        applicationId = "veniam";
                                        version = "libero";
                                    }}),
                                }};
                                autoScaleEvaluationInterval = "cupiditate";
                                autoScaleFormula = "molestiae";
                                certificateReferences = new org.openapis.openapi.models.shared.CertificateReference[]{{
                                    add(new CertificateReference("veniam", "consequuntur") {{
                                        storeLocation = CertificateReferenceStoreLocationEnum.UNMAPPED;
                                        storeName = "non";
                                        thumbprint = "magnam";
                                        thumbprintAlgorithm = "itaque";
                                        visibility = new org.openapis.openapi.models.shared.CertificateReferenceVisibilityEnum[]{{
                                            add(CertificateReferenceVisibilityEnum.UNMAPPED),
                                        }};
                                    }}),
                                    add(new CertificateReference("ab", "velit") {{
                                        storeLocation = CertificateReferenceStoreLocationEnum.UNMAPPED;
                                        storeName = "laudantium";
                                        thumbprint = "odit";
                                        thumbprintAlgorithm = "pariatur";
                                        visibility = new org.openapis.openapi.models.shared.CertificateReferenceVisibilityEnum[]{{
                                            add(CertificateReferenceVisibilityEnum.TASK),
                                        }};
                                    }}),
                                    add(new CertificateReference("nisi", "quis") {{
                                        storeLocation = CertificateReferenceStoreLocationEnum.UNMAPPED;
                                        storeName = "tempore";
                                        thumbprint = "nisi";
                                        thumbprintAlgorithm = "voluptatibus";
                                        visibility = new org.openapis.openapi.models.shared.CertificateReferenceVisibilityEnum[]{{
                                            add(CertificateReferenceVisibilityEnum.REMOTEUSER),
                                            add(CertificateReferenceVisibilityEnum.REMOTEUSER),
                                        }};
                                    }}),
                                    add(new CertificateReference("voluptatibus", "consequuntur") {{
                                        storeLocation = CertificateReferenceStoreLocationEnum.LOCALMACHINE;
                                        storeName = "libero";
                                        thumbprint = "minus";
                                        thumbprintAlgorithm = "facere";
                                        visibility = new org.openapis.openapi.models.shared.CertificateReferenceVisibilityEnum[]{{
                                            add(CertificateReferenceVisibilityEnum.STARTTASK),
                                            add(CertificateReferenceVisibilityEnum.TASK),
                                            add(CertificateReferenceVisibilityEnum.UNMAPPED),
                                        }};
                                    }}),
                                }};
                                cloudServiceConfiguration = new CloudServiceConfiguration("debitis") {{
                                    currentOSVersion = "labore";
                                    targetOSVersion = "rerum";
                                }};;
                                displayName = "eos";
                                enableAutoScale = false;
                                enableInterNodeCommunication = false;
                                maxTasksPerNode = 440777;
                                metadata = new org.openapis.openapi.models.shared.MetadataItem[]{{
                                    add(new MetadataItem() {{
                                        name = "Heidi O'Reilly";
                                        value = "fugiat";
                                    }}),
                                    add(new MetadataItem() {{
                                        name = "Stewart Kunze V";
                                        value = "porro";
                                    }}),
                                }};
                                resizeTimeout = "vitae";
                                startTask = new StartTask() {{
                                    commandLine = "dignissimos";
                                    environmentSettings = new org.openapis.openapi.models.shared.EnvironmentSetting[]{{
                                        add(new EnvironmentSetting() {{
                                            name = "Leon Collier";
                                            value = "iusto";
                                        }}),
                                        add(new EnvironmentSetting() {{
                                            name = "Mrs. Pam Bins";
                                            value = "saepe";
                                        }}),
                                    }};
                                    maxTaskRetryCount = 734814;
                                    resourceFiles = new org.openapis.openapi.models.shared.ResourceFile[]{{
                                        add(new ResourceFile() {{
                                            blobSource = "eos";
                                            fileMode = "reiciendis";
                                            filePath = "earum";
                                        }}),
                                        add(new ResourceFile() {{
                                            blobSource = "reprehenderit";
                                            fileMode = "praesentium";
                                            filePath = "nemo";
                                        }}),
                                    }};
                                    runElevated = false;
                                    waitForSuccess = false;
                                }};;
                                targetDedicated = 999809;
                                taskSchedulingPolicy = new TaskSchedulingPolicy(TaskSchedulingPolicyNodeFillTypeEnum.UNMAPPED);;
                                virtualMachineConfiguration = new VirtualMachineConfiguration(                new ImageReference("sequi", "nihil", "deleniti") {{
                                                    version = "illo";
                                                }};, "labore") {{
                                    windowsConfiguration = new WindowsConfiguration() {{
                                        enableAutomaticUpdates = false;
                                    }};;
                                }};;
                            }};, "assumenda") {{
                clientRequestId = "aliquam";
                ocpDate = "quisquam";
                returnClientRequestId = false;
                timeout = 591065;
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

            PoolDeleteRequest req = new PoolDeleteRequest("laudantium", "repudiandae") {{
                ifMatch = "consequatur";
                ifModifiedSince = "maxime";
                ifNoneMatch = "aspernatur";
                ifUnmodifiedSince = "nam";
                clientRequestId = "expedita";
                ocpDate = "quas";
                returnClientRequestId = false;
                timeout = 590858;
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

            PoolDisableAutoScaleRequest req = new PoolDisableAutoScaleRequest("repudiandae", "rerum") {{
                clientRequestId = "dignissimos";
                ocpDate = "corporis";
                returnClientRequestId = false;
                timeout = 873833;
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
                                autoScaleEvaluationInterval = "similique";
                                autoScaleFormula = "repellendus";
                            }};, "iure", "dolorem") {{
                ifMatch = "commodi";
                ifModifiedSince = "impedit";
                ifNoneMatch = "commodi";
                ifUnmodifiedSince = "aut";
                clientRequestId = "voluptatem";
                ocpDate = "ad";
                returnClientRequestId = false;
                timeout = 60995;
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

            PoolEvaluateAutoScaleRequest req = new PoolEvaluateAutoScaleRequest(                new PoolEvaluateAutoScaleParameter("amet");, "illum", "praesentium") {{
                clientRequestId = "quidem";
                ocpDate = "cum";
                returnClientRequestId = false;
                timeout = 230411;
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

            PoolExistsRequest req = new PoolExistsRequest("quasi", "dicta") {{
                ifMatch = "laudantium";
                ifModifiedSince = "doloremque";
                ifNoneMatch = "earum";
                ifUnmodifiedSince = "iusto";
                clientRequestId = "amet";
                ocpDate = "provident";
                returnClientRequestId = false;
                timeout = 677141;
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

            PoolGetRequest req = new PoolGetRequest("necessitatibus", "provident") {{
                dollarExpand = "repudiandae";
                dollarSelect = "consequatur";
                ifMatch = "nemo";
                ifModifiedSince = "molestiae";
                ifNoneMatch = "itaque";
                ifUnmodifiedSince = "facilis";
                clientRequestId = "corrupti";
                ocpDate = "aperiam";
                returnClientRequestId = false;
                timeout = 574092;
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

            PoolGetAllPoolsLifetimeStatisticsRequest req = new PoolGetAllPoolsLifetimeStatisticsRequest("accusamus") {{
                clientRequestId = "eos";
                ocpDate = "totam";
                returnClientRequestId = false;
                timeout = 115861;
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

            PoolListRequest req = new PoolListRequest("voluptatem") {{
                dollarExpand = "velit";
                dollarFilter = "dolor";
                dollarSelect = "sunt";
                clientRequestId = "a";
                maxresults = 223291;
                ocpDate = "occaecati";
                returnClientRequestId = false;
                timeout = 539813;
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

            PoolListPoolUsageMetricsRequest req = new PoolListPoolUsageMetricsRequest("beatae") {{
                dollarFilter = "at";
                clientRequestId = "labore";
                endtime = OffsetDateTime.parse("2021-08-18T21:49:42.668Z");
                maxresults = 32356;
                ocpDate = "perferendis";
                returnClientRequestId = false;
                starttime = OffsetDateTime.parse("2022-03-06T12:29:45.421Z");
                timeout = 46791;
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
import org.openapis.openapi.models.shared.CertificateReferenceVisibilityEnum;
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
                                    add(new ApplicationPackageReference("porro") {{
                                        applicationId = "repellat";
                                        version = "velit";
                                    }}),
                                    add(new ApplicationPackageReference("eligendi") {{
                                        applicationId = "provident";
                                        version = "consectetur";
                                    }}),
                                }};
                                certificateReferences = new org.openapis.openapi.models.shared.CertificateReference[]{{
                                    add(new CertificateReference("quo", "itaque") {{
                                        storeLocation = CertificateReferenceStoreLocationEnum.CURRENTUSER;
                                        storeName = "soluta";
                                        thumbprint = "natus";
                                        thumbprintAlgorithm = "temporibus";
                                        visibility = new org.openapis.openapi.models.shared.CertificateReferenceVisibilityEnum[]{{
                                            add(CertificateReferenceVisibilityEnum.STARTTASK),
                                            add(CertificateReferenceVisibilityEnum.UNMAPPED),
                                            add(CertificateReferenceVisibilityEnum.STARTTASK),
                                        }};
                                    }}),
                                    add(new CertificateReference("repellat", "explicabo") {{
                                        storeLocation = CertificateReferenceStoreLocationEnum.UNMAPPED;
                                        storeName = "laborum";
                                        thumbprint = "dignissimos";
                                        thumbprintAlgorithm = "vero";
                                        visibility = new org.openapis.openapi.models.shared.CertificateReferenceVisibilityEnum[]{{
                                            add(CertificateReferenceVisibilityEnum.STARTTASK),
                                        }};
                                    }}),
                                }};
                                metadata = new org.openapis.openapi.models.shared.MetadataItem[]{{
                                    add(new MetadataItem() {{
                                        name = "Mr. Marcia Fritsch";
                                        value = "deserunt";
                                    }}),
                                }};
                                startTask = new StartTask() {{
                                    commandLine = "delectus";
                                    environmentSettings = new org.openapis.openapi.models.shared.EnvironmentSetting[]{{
                                        add(new EnvironmentSetting() {{
                                            name = "Jared Heller";
                                            value = "repudiandae";
                                        }}),
                                        add(new EnvironmentSetting() {{
                                            name = "Maureen Champlin";
                                            value = "aperiam";
                                        }}),
                                    }};
                                    maxTaskRetryCount = 141817;
                                    resourceFiles = new org.openapis.openapi.models.shared.ResourceFile[]{{
                                        add(new ResourceFile() {{
                                            blobSource = "enim";
                                            fileMode = "voluptate";
                                            filePath = "similique";
                                        }}),
                                        add(new ResourceFile() {{
                                            blobSource = "minima";
                                            fileMode = "libero";
                                            filePath = "magnam";
                                        }}),
                                        add(new ResourceFile() {{
                                            blobSource = "sit";
                                            fileMode = "modi";
                                            filePath = "eum";
                                        }}),
                                    }};
                                    runElevated = false;
                                    waitForSuccess = false;
                                }};;
                            }};, "nesciunt", "mollitia") {{
                ifMatch = "dignissimos";
                ifModifiedSince = "fugiat";
                ifNoneMatch = "nostrum";
                ifUnmodifiedSince = "molestiae";
                clientRequestId = "veniam";
                ocpDate = "reiciendis";
                returnClientRequestId = false;
                timeout = 66207;
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

            PoolResizeRequest req = new PoolResizeRequest(                new PoolResizeParameter(265632) {{
                                nodeDeallocationOption = PoolResizeParameterNodeDeallocationOptionEnum.REQUEUE;
                                resizeTimeout = "aut";
                            }};, "eveniet", "odio") {{
                ifMatch = "commodi";
                ifModifiedSince = "numquam";
                ifNoneMatch = "dolorum";
                ifUnmodifiedSince = "possimus";
                clientRequestId = "voluptate";
                ocpDate = "consectetur";
                returnClientRequestId = false;
                timeout = 200637;
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

            PoolStopResizeRequest req = new PoolStopResizeRequest("quaerat", "itaque") {{
                ifMatch = "minus";
                ifModifiedSince = "sunt";
                ifNoneMatch = "distinctio";
                ifUnmodifiedSince = "iusto";
                clientRequestId = "quas";
                ocpDate = "et";
                returnClientRequestId = false;
                timeout = 704948;
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
import org.openapis.openapi.models.shared.CertificateReferenceVisibilityEnum;
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
                                                add(new ApplicationPackageReference("alias") {{
                                                    applicationId = "autem";
                                                    version = "fuga";
                                                }}),
                                            }},                 new org.openapis.openapi.models.shared.CertificateReference[]{{
                                                add(new CertificateReference("eaque", "saepe") {{
                                                    storeLocation = CertificateReferenceStoreLocationEnum.CURRENTUSER;
                                                    storeName = "quos";
                                                    thumbprint = "laudantium";
                                                    thumbprintAlgorithm = "repellendus";
                                                    visibility = new org.openapis.openapi.models.shared.CertificateReferenceVisibilityEnum[]{{
                                                        add(CertificateReferenceVisibilityEnum.STARTTASK),
                                                    }};
                                                }}),
                                                add(new CertificateReference("alias", "eveniet") {{
                                                    storeLocation = CertificateReferenceStoreLocationEnum.UNMAPPED;
                                                    storeName = "mollitia";
                                                    thumbprint = "nulla";
                                                    thumbprintAlgorithm = "officia";
                                                    visibility = new org.openapis.openapi.models.shared.CertificateReferenceVisibilityEnum[]{{
                                                        add(CertificateReferenceVisibilityEnum.STARTTASK),
                                                    }};
                                                }}),
                                                add(new CertificateReference("harum", "explicabo") {{
                                                    storeLocation = CertificateReferenceStoreLocationEnum.UNMAPPED;
                                                    storeName = "voluptatem";
                                                    thumbprint = "incidunt";
                                                    thumbprintAlgorithm = "qui";
                                                    visibility = new org.openapis.openapi.models.shared.CertificateReferenceVisibilityEnum[]{{
                                                        add(CertificateReferenceVisibilityEnum.UNMAPPED),
                                                    }};
                                                }}),
                                            }},                 new org.openapis.openapi.models.shared.MetadataItem[]{{
                                                add(new MetadataItem() {{
                                                    name = "Pauline Rowe";
                                                    value = "officia";
                                                }}),
                                            }}) {{
                                startTask = new StartTask() {{
                                    commandLine = "libero";
                                    environmentSettings = new org.openapis.openapi.models.shared.EnvironmentSetting[]{{
                                        add(new EnvironmentSetting() {{
                                            name = "Beth Jenkins";
                                            value = "odit";
                                        }}),
                                        add(new EnvironmentSetting() {{
                                            name = "Faith Zulauf";
                                            value = "natus";
                                        }}),
                                        add(new EnvironmentSetting() {{
                                            name = "Anthony Huel";
                                            value = "voluptates";
                                        }}),
                                    }};
                                    maxTaskRetryCount = 251627;
                                    resourceFiles = new org.openapis.openapi.models.shared.ResourceFile[]{{
                                        add(new ResourceFile() {{
                                            blobSource = "quia";
                                            fileMode = "ullam";
                                            filePath = "quisquam";
                                        }}),
                                        add(new ResourceFile() {{
                                            blobSource = "dicta";
                                            fileMode = "voluptatibus";
                                            filePath = "eligendi";
                                        }}),
                                        add(new ResourceFile() {{
                                            blobSource = "quae";
                                            fileMode = "officiis";
                                            filePath = "architecto";
                                        }}),
                                    }};
                                    runElevated = false;
                                    waitForSuccess = false;
                                }};;
                            }};, "architecto", "enim") {{
                clientRequestId = "optio";
                ocpDate = "rem";
                returnClientRequestId = false;
                timeout = 17060;
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

            PoolUpgradeOSRequest req = new PoolUpgradeOSRequest(                new PoolUpgradeOSParameter("facilis");, "reiciendis", "a") {{
                ifMatch = "iste";
                ifModifiedSince = "dicta";
                ifNoneMatch = "quos";
                ifUnmodifiedSince = "ullam";
                clientRequestId = "dolore";
                ocpDate = "modi";
                returnClientRequestId = false;
                timeout = 929292;
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
