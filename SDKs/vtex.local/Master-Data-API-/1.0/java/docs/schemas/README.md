# schemas

### Available Operations

* [deleteschemabyname](#deleteschemabyname) - Delete schema by name
* [getschemabyname](#getschemabyname) - Get schema by name
* [getschemas](#getschemas) - Get schemas
* [saveschemabyname](#saveschemabyname) - Save schema by name

## deleteschemabyname

Deletes an existing schema for a given data entity.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteschemabynameRequest;
import org.openapis.openapi.models.operations.DeleteschemabynameResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error", "quia") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteschemabynameRequest req = new DeleteschemabynameRequest("application/json", "Client", "{{schema}}");            

            DeleteschemabynameResponse res = sdk.schemas.deleteschemabyname(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getschemabyname

Returns an existing schema for a given data entity.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetschemabynameRequest;
import org.openapis.openapi.models.operations.GetschemabynameResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quis", "vitae") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetschemabynameRequest req = new GetschemabynameRequest("application/json", "Client", "{{schema}}");            

            GetschemabynameResponse res = sdk.schemas.getschemabyname(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getschemas

Return the schemas saved.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetschemasRequest;
import org.openapis.openapi.models.operations.GetschemasResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laborum", "animi") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetschemasRequest req = new GetschemasRequest("application/json", "Client");            

            GetschemasResponse res = sdk.schemas.getschemas(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## saveschemabyname

Creates or edits a data entity schema. Learn more about [Master Data schemas](https://developers.vtex.com/vtex-rest-api/docs/master-data-schema-lifecycle)

> Note that if you send a `schemaName` that does not exist for that data entity, this request will create it.

This request can also be used to [create or edit Master Data v2 triggers](https://developers.vtex.com/vtex-rest-api/docs/setting-up-triggers-in-master-data-v2).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SaveschemabynameRequest;
import org.openapis.openapi.models.operations.SaveschemabynameResponse;
import org.openapis.openapi.models.shared.Name;
import org.openapis.openapi.models.shared.Properties;
import org.openapis.openapi.models.shared.SaveschemabynameRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("enim", "odit") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            SaveschemabynameRequest req = new SaveschemabynameRequest(                new SaveschemabynameRequest(                new Properties(                new Name("quo");););, "Client", "{{schema}}");            

            SaveschemabynameResponse res = sdk.schemas.saveschemabyname(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
