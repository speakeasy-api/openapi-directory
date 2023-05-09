# settings

### Available Operations

* [editSettings](#editsettings) - Edit Subscriptions settings
* [getSettings](#getsettings) - Get Subscriptions Settings

## editSettings

Edits Subscriptions settings in your store.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EditSettingsRequest;
import org.openapis.openapi.models.operations.EditSettingsResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Settings;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veritatis", "deserunt") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            EditSettingsRequest req = new EditSettingsRequest("perferendis", "ipsam",                 new Settings("null",                 new String[]{{
                                                add("delivery"),
                                                add("delivery"),
                                                add("delivery"),
                                                add("delivery"),
                                            }}, 9L, false, false, true, false, false, "null", false, false, "NONE", false, "1.1"););            

            EditSettingsResponse res = sdk.settings.editSettings(req);

            if (res.settings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSettings

Lists the current Subscriptions settings in your store.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSettingsRequest;
import org.openapis.openapi.models.operations.GetSettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sapiente", "quo") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSettingsRequest req = new GetSettingsRequest("odit", "at");            

            GetSettingsResponse res = sdk.settings.getSettings(req);

            if (res.settings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
