# prospects

### Available Operations

* [createProspect](#createprospect) - Create prospect
* [deleteProspect](#deleteprospect) - Delete prospect
* [getProspect](#getprospect) - Get prospect
* [getUnmaskedProspect](#getunmaskedprospect) - Get unmasked prospect
* [updateProspect](#updateprospect) - Update prospect

## createProspect

Creates new prospect.

> The `id` field returned by this request is the `prospectId` used to retrieve information on a specific prospect later.

> Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateProspectRequest;
import org.openapis.openapi.models.operations.CreateProspectResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellendus", "sapiente") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateProspectRequest req = new CreateProspectRequest("application/json", "application/json") {{
                requestBody = "quo";
            }};            

            CreateProspectResponse res = sdk.prospects.createProspect(req);

            if (res.createProspect201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteProspect

Deletes a prospect by `prospectId`.

> Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteProspectRequest;
import org.openapis.openapi.models.operations.DeleteProspectResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("odit", "at") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteProspectRequest req = new DeleteProspectRequest("application/json", "application/json", "51clk394-8534-447e-a0ca-1803p669c987");            

            DeleteProspectResponse res = sdk.prospects.deleteProspect(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getProspect

Retrieves the information of a specific prospect, by its `prospectId`.

> For security and privacy reasons, this request returns masked prospect data. For unmasked information, see Get unmasked prospect.

> Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProspectRequest;
import org.openapis.openapi.models.operations.GetProspectResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("at", "maiores") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetProspectRequest req = new GetProspectRequest("application/json", "application/json", "51clk394-8534-447e-a0ca-1803p669c987");            

            GetProspectResponse res = sdk.prospects.getProspect(req);

            if (res.getProspect200ApplicationJSONAnies != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUnmaskedProspect

Retrieves unmasked information of a specific prospect, by its `prospectId`.

> Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUnmaskedProspectRequest;
import org.openapis.openapi.models.operations.GetUnmaskedProspectResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestiae", "quod") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetUnmaskedProspectRequest req = new GetUnmaskedProspectRequest("application/json", "application/json", "51clk394-8534-447e-a0ca-1803p669c987", "data-validation");            

            GetUnmaskedProspectResponse res = sdk.prospects.getUnmaskedProspect(req);

            if (res.getUnmaskedProspect200ApplicationJSONAnies != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateProspect

Updates one or more fields of an existing prospect.

> Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateProspectRequest;
import org.openapis.openapi.models.operations.UpdateProspectResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quod", "esse") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateProspectRequest req = new UpdateProspectRequest("application/json", "application/json", "51clk394-8534-447e-a0ca-1803p669c987") {{
                requestBody = "totam";
            }};            

            UpdateProspectResponse res = sdk.prospects.updateProspect(req);

            if (res.updateProspect200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
