# score

## Overview

It allows to record and remove points in the` Score2` fields.

### Available Operations

* [deletescorebyfield](#deletescorebyfield) - Delete score by field
* [putscorebyfield](#putscorebyfield) - Put score by field
* [putscores](#putscores) - Put scores

## deletescorebyfield

Allows you to remove a key from a specific field.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeletescorebyfieldRequest;
import org.openapis.openapi.models.operations.DeletescorebyfieldResponse;
import org.openapis.openapi.models.shared.DeletescorebyfieldRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi", "accusantium") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeletescorebyfieldRequest req = new DeletescorebyfieldRequest("iure",                 new DeletescorebyfieldRequest("culpa");, "doloribus", "sapiente", "architecto");            

            DeletescorebyfieldResponse res = sdk.score.deletescorebyfield(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putscorebyfield

It allows to punctuate in a specific field.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutscorebyfieldRequest;
import org.openapis.openapi.models.operations.PutscorebyfieldResponse;
import org.openapis.openapi.models.shared.PutscorebyfieldRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("mollitia", "dolorem") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutscorebyfieldRequest req = new PutscorebyfieldRequest("culpa",                 new PutscorebyfieldRequest("consequuntur", 995300, "mollitia");, "occaecati", "numquam", "commodi");            

            PutscorebyfieldResponse res = sdk.score.putscorebyfield(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putscores

It allows punctuate in more than one field and more than one key.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutscoresRequest;
import org.openapis.openapi.models.operations.PutscoresResponse;
import org.openapis.openapi.models.shared.PutscoresRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quam", "molestiae") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutscoresRequest req = new PutscoresRequest("velit",                 new org.openapis.openapi.models.shared.PutscoresRequest[]{{
                                add(new PutscoresRequest("animi", "enim", 138183, "quo") {{
                                    field = "quia";
                                    key = "quis";
                                    point = 110375;
                                    until = "laborum";
                                }}),
                                add(new PutscoresRequest("possimus", "aut", 97101, "error") {{
                                    field = "sequi";
                                    key = "tenetur";
                                    point = 368725;
                                    until = "id";
                                }}),
                                add(new PutscoresRequest("voluptatibus", "vero", 468651, "praesentium") {{
                                    field = "temporibus";
                                    key = "laborum";
                                    point = 96098;
                                    until = "reiciendis";
                                }}),
                            }}, "voluptatibus", "ipsa");            

            PutscoresResponse res = sdk.score.putscores(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
