# SDK

## Overview

A registry of AI Plugins.

### Available Operations

* [getApiPlugins](#getapiplugins) - Returns a list of Wellknown ai-plugins json objects from the Wellknown ai-plugins registry.

## getApiPlugins

Returns a list of Wellknown ai-plugins json objects from the Wellknown ai-plugins registry.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApiPluginsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetApiPluginsResponse res = sdk.sdk.getApiPlugins();

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
