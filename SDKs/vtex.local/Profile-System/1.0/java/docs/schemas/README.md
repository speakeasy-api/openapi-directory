# schemas

### Available Operations

* [createOrUpdateProfileSchema](#createorupdateprofileschema) - Create or update profile schema

## createOrUpdateProfileSchema

Creates or updates profile schema.

> Each account has one profile schema. Updating it with this request will substitute the previous version.

> Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateOrUpdateProfileSchemaRequest;
import org.openapis.openapi.models.operations.CreateOrUpdateProfileSchemaResponse;
import org.openapis.openapi.models.shared.Schema;
import org.openapis.openapi.models.shared.SchemaProperties;
import org.openapis.openapi.models.shared.SchemaPropertiesFieldName;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("commodi", "molestiae") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateOrUpdateProfileSchemaRequest req = new CreateOrUpdateProfileSchemaRequest("application/json", "application/json") {{
                schema = new Schema("This schema describes a b2c customer profile.",                 new SchemaProperties() {{
                                    fieldName = new SchemaPropertiesFieldName(true, true, "string") {{
                                        items = new java.util.HashMap<String, Object>() {{
                                            put("qui", "impedit");
                                            put("cum", "esse");
                                        }};
                                    }};;
                                }};,                 new String[]{{
                                    add("excepturi"),
                                }}, "Client profile schema", "object") {{
                    documentTTL = 1825L;
                    vIndexed = new Object[]{{
                        add("perferendis"),
                    }};
                    vUnique = new Object[]{{
                        add("natus"),
                        add("sed"),
                    }};
                    version = 1L;
                }};;
            }};            

            CreateOrUpdateProfileSchemaResponse res = sdk.schemas.createOrUpdateProfileSchema(req);

            if (res.createOrUpdateProfileSchema201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
