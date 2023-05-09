# macros

## Overview

To change the description use /examples/TagsDescriptions.json

### Available Operations

* [run](#run) - Executes a macro.

## run

Runs a specified macro on a specified list of items ("list" variable in the macro code). The list of items can be empty if the macro doesn't use it. Additional custom parameters can be provided to the macro when necessary ("params" variable in the macro code).

 <BR>Note: Macros that support parameters can be also run from GUI (Views in Home Portal),so they should also handle the empty parameters map (e.g. by defining default values when parameters are not provided).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RunRequest;
import org.openapis.openapi.models.operations.RunResponse;
import org.openapis.openapi.models.shared.MacroRequestDTO;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RunRequest req = new RunRequest(                new MacroRequestDTO() {{
                                async = false;
                                ids = new Long[]{{
                                    add(936469L),
                                    add(745398L),
                                    add(940782L),
                                }};
                                params = new java.util.HashMap<String, java.util.HashMap<String, Object>>() {{
                                    put("eaque", new java.util.HashMap<String, Object>() {{
                                        put("perspiciatis", "maiores");
                                        put("debitis", "aliquid");
                                        put("porro", "suscipit");
                                        put("dolorem", "fugit");
                                    }});
                                    put("cumque", new java.util.HashMap<String, Object>() {{
                                        put("ratione", "animi");
                                        put("necessitatibus", "nulla");
                                        put("consequatur", "quasi");
                                    }});
                                    put("et", new java.util.HashMap<String, Object>() {{
                                        put("natus", "occaecati");
                                        put("suscipit", "adipisci");
                                    }});
                                    put("quasi", new java.util.HashMap<String, Object>() {{
                                        put("doloribus", "nulla");
                                    }});
                                }};
                            }};, 896582L);            

            RunResponse res = sdk.macros.run(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
