# utility

## Overview

The utility endpoint allows the Wealth Manager to upload information required by the system to support the daily operations (e.g. file uploads for daily jobs, calendar updates etc.)

### Available Operations

* [copyFileToS3](#copyfiletos3) - Upload a file

## copyFileToS3

Copy a file from the Wealth Manager's data store (system must have read permission for this store) to an internal data store

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CopyFileToS3Request;
import org.openapis.openapi.models.operations.CopyFileToS3RequestBody;
import org.openapis.openapi.models.operations.CopyFileToS3RequestBodyFilePaths;
import org.openapis.openapi.models.operations.CopyFileToS3Response;
import org.openapis.openapi.models.operations.CopyFileToS3Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CopyFileToS3Request req = new CopyFileToS3Request("minima") {{
                requestBody = new CopyFileToS3RequestBody(                new org.openapis.openapi.models.operations.CopyFileToS3RequestBodyFilePaths[]{{
                                    add(new CopyFileToS3RequestBodyFilePaths("iste", "temporibus") {{
                                        path = "consectetur";
                                        type = "adipisci";
                                    }}),
                                }});;
            }};            

            CopyFileToS3Response res = sdk.utility.copyFileToS3(req, new CopyFileToS3Security("accusantium") {{
                apiSecretKey = "YOUR_API_KEY_HERE";
            }});

            if (res.copyFileToS3200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
