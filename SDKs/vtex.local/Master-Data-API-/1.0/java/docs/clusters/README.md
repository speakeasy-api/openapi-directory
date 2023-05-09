# clusters

## Overview

Lets you know if a particular document is in one or more clusters.

### Available Operations

* [validatedocumentbyclusters](#validatedocumentbyclusters) - Validate document by clusters

## validatedocumentbyclusters

Check if a document is present in one or more clusters (specific set of field values).

> There is a limit of five rules per request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ValidatedocumentbyclustersRequest;
import org.openapis.openapi.models.operations.ValidatedocumentbyclustersResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vel", "error") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            ValidatedocumentbyclustersRequest req = new ValidatedocumentbyclustersRequest("application/json", "{"foo":"DI<s&z:DMj","bar":"RMUEwn'@)]","bike":36824,"a":"zi.qq|MkkK","b":"i`+d\\W.Rxg","name":"*GM92ieK5U","prop":1878}", "Client", "Client-b818cbda-e489-11e6-94f4-0ac138d2d42e");            

            ValidatedocumentbyclustersResponse res = sdk.clusters.validatedocumentbyclusters(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
