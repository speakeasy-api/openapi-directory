# orderHook

### Available Operations

* [deleteHookConfiguration](#deletehookconfiguration) - Delete hook configuration
* [getHookConfiguration](#gethookconfiguration) - Get hook configuration
* [hookConfiguration](#hookconfiguration) - Create or update hook configuration

## deleteHookConfiguration

Deletes a given hook configuration.

Learn more with the [orders hook guide](https://developers.vtex.com/vtex-rest-api/docs/orders-feed#hook).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteHookConfigurationRequest;
import org.openapis.openapi.models.operations.DeleteHookConfigurationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quo", "sequi") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteHookConfigurationRequest req = new DeleteHookConfigurationRequest("tenetur", "ipsam");            

            DeleteHookConfigurationResponse res = sdk.orderHook.deleteHookConfiguration(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getHookConfiguration

Retrieves a given hook's configuration details. Learn more with the [orders hook guide](https://developers.vtex.com/vtex-rest-api/docs/orders-feed#hook). 

> 📘 Onboarding guide 
>
> Check the new [Orders onboarding guide](https://developers.vtex.com/vtex-rest-api/docs/orders-overview). We created this guide to improve the onboarding experience for developers at VTEX. It assembles all documentation on our Developer Portal about Orders and is organized by focusing on the developer's journey.



### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetHookConfigurationRequest;
import org.openapis.openapi.models.operations.GetHookConfigurationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("id", "possimus") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetHookConfigurationRequest req = new GetHookConfigurationRequest("aut", "quasi") {{
                clientEmail = "customer@mail.com";
                page = "10";
                perPage = "15";
            }};            

            GetHookConfigurationResponse res = sdk.orderHook.getHookConfiguration(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## hookConfiguration

Configures filtering rules applied to orders hook. Learn more with the [orders hook guide](https://developers.vtex.com/vtex-rest-api/docs/orders-feed#hook).

There are two types of filtering that can be used: 

 - `FromWorkflow`: filters orders by status.

 - `FromOrders`: uses JSONata expressions to filter orders according to any property in the orders JSON document.

 This enables stores to filter delivered orders and orders in which products have been added or removed, for example.

To learn more, access the [JSONata documentation](https://docs.jsonata.org/overview.html) and test filtering JSONata expressions with our [expressions API](https://developers.vtex.com/docs/api-reference/orders-api#post-/api/orders/expressions/jsonata).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.HookConfigurationRequest;
import org.openapis.openapi.models.operations.HookConfigurationResponse;
import org.openapis.openapi.models.shared.Headers;
import org.openapis.openapi.models.shared.Hook;
import org.openapis.openapi.models.shared.HookConfigurationRequest;
import org.openapis.openapi.models.shared.HookFilter;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error", "temporibus") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            HookConfigurationRequest req = new HookConfigurationRequest("laborum", "quasi",                 new HookConfigurationRequest(                new HookFilter("reiciendis") {{
                                                disableSingleFire = false;
                                                expression = "voluptatibus";
                                                status = new String[]{{
                                                    add("nihil"),
                                                    add("praesentium"),
                                                    add("voluptatibus"),
                                                    add("ipsa"),
                                                }};
                                            }};,                 new Hook(                new Headers("omnis");, "voluptate");););            

            HookConfigurationResponse res = sdk.orderHook.hookConfiguration(req);

            if (res.hookConfiguration != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
