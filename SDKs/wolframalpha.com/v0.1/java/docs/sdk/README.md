# SDK

### Available Operations

* [getWolframAlphaResults](#getwolframalpharesults) - Get Wolfram|Alpha results
* [getWolframCloudResults](#getwolframcloudresults) - Evaluate Wolfram Language code

## getWolframAlphaResults

Get Wolfram|Alpha results

<https://products.wolframalpha.com/api>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetWolframAlphaResultsRequest;
import org.openapis.openapi.models.operations.GetWolframAlphaResultsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetWolframAlphaResultsRequest req = new GetWolframAlphaResultsRequest("provident");            

            GetWolframAlphaResultsResponse res = sdk.sdk.getWolframAlphaResults(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getWolframCloudResults

Evaluate Wolfram Language code

<https://reference.wolfram.com/language/>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetWolframCloudResultsRequest;
import org.openapis.openapi.models.operations.GetWolframCloudResultsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetWolframCloudResultsRequest req = new GetWolframCloudResultsRequest("distinctio");            

            GetWolframCloudResultsResponse res = sdk.sdk.getWolframCloudResults(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
