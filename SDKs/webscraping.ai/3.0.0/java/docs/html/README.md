# html

## Overview

Get full HTML content of pages with proxies and Chrome JS rendering

### Available Operations

* [getHTML](#gethtml) - Page HTML by URL

## getHTML

Returns just HTML on success, JSON on error

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetHTMLRequest;
import org.openapis.openapi.models.operations.GetHTMLResponse;
import org.openapis.openapi.models.shared.CountryEnum;
import org.openapis.openapi.models.shared.DeviceEnum;
import org.openapis.openapi.models.shared.ProxyEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("distinctio") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetHTMLRequest req = new GetHTMLRequest("quibusdam") {{
                country = CountryEnum.ES;
                device = DeviceEnum.TABLET;
                errorOn404 = false;
                errorOnRedirect = false;
                headers = new java.util.HashMap<String, String>() {{
                    put("illum", "vel");
                    put("error", "deserunt");
                    put("suscipit", "iure");
                }};
                js = false;
                jsTimeout = 297534L;
                proxy = ProxyEnum.RESIDENTIAL;
                timeout = 56713L;
            }};            

            GetHTMLResponse res = sdk.html.getHTML(req);

            if (res.getHTML200TextHTMLString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
