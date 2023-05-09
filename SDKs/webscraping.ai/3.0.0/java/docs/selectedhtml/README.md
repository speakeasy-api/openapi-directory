# selectedHTML

## Overview

Get HTML content of selected page areas (like price, search results, page title, etc.)

### Available Operations

* [getSelected](#getselected) - HTML of a selected page area by URL and CSS selector
* [getSelectedMultiple](#getselectedmultiple) - HTML of multiple page areas by URL and CSS selectors

## getSelected

Returns just HTML on success, JSON on error

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSelectedRequest;
import org.openapis.openapi.models.operations.GetSelectedResponse;
import org.openapis.openapi.models.shared.CountryEnum;
import org.openapis.openapi.models.shared.DeviceEnum;
import org.openapis.openapi.models.shared.ProxyEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("delectus") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSelectedRequest req = new GetSelectedRequest("tempora") {{
                country = CountryEnum.IT;
                device = DeviceEnum.MOBILE;
                errorOn404 = false;
                errorOnRedirect = false;
                headers = new java.util.HashMap<String, String>() {{
                    put("placeat", "voluptatum");
                    put("iusto", "excepturi");
                    put("nisi", "recusandae");
                    put("temporibus", "ab");
                }};
                js = false;
                jsTimeout = 337396L;
                proxy = ProxyEnum.DATACENTER;
                selector = "deserunt";
                timeout = 20218L;
            }};            

            GetSelectedResponse res = sdk.selectedHTML.getSelected(req);

            if (res.getSelected200TextHTMLString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSelectedMultiple

Always returns JSON

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSelectedMultipleRequest;
import org.openapis.openapi.models.operations.GetSelectedMultipleResponse;
import org.openapis.openapi.models.shared.CountryEnum;
import org.openapis.openapi.models.shared.DeviceEnum;
import org.openapis.openapi.models.shared.ProxyEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsam") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSelectedMultipleRequest req = new GetSelectedMultipleRequest("repellendus") {{
                country = CountryEnum.KR;
                device = DeviceEnum.TABLET;
                errorOn404 = false;
                errorOnRedirect = false;
                headers = new java.util.HashMap<String, String>() {{
                    put("at", "at");
                }};
                js = false;
                jsTimeout = 978619L;
                proxy = ProxyEnum.DATACENTER;
                selectors = new String[]{{
                    add("quod"),
                    add("esse"),
                    add("totam"),
                    add("porro"),
                }};
                timeout = 678880L;
            }};            

            GetSelectedMultipleResponse res = sdk.selectedHTML.getSelectedMultiple(req);

            if (res.selectedAreas != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
