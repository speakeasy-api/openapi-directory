# clusters

## Overview

Lets you know if a particular document is in one or more clusters.

### Available Operations

* [validateDocumentbyClusters](#validatedocumentbyclusters) - Validate Document by Clusters

## validateDocumentbyClusters

Validate Document by Clusters

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ValidateDocumentbyClustersRequest;
import org.openapis.openapi.models.operations.ValidateDocumentbyClustersResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minus", "placeat") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            ValidateDocumentbyClustersRequest req = new ValidateDocumentbyClustersRequest("voluptatum",                 new Object[]{{
                                add("excepturi"),
                                add("nisi"),
                            }}, "recusandae", "temporibus");            

            ValidateDocumentbyClustersResponse res = sdk.clusters.validateDocumentbyClusters(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
