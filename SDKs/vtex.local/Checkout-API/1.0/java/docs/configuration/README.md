# configuration

### Available Operations

* [clearorderFormMessages](#clearorderformmessages) - Clear orderForm messages
* [getWindowToChangeSeller](#getwindowtochangeseller) - Get window to change seller
* [getorderFormconfiguration](#getorderformconfiguration) - Get orderForm configuration
* [updateWindowToChangeSeller](#updatewindowtochangeseller) - Update window to change seller
* [updateorderFormconfiguration](#updateorderformconfiguration) - Update orderForm configuration

## clearorderFormMessages

This request removes all messages from the `messages` field of the orderForm , leaving it empty.

You must send an empty JSON in the body of the request.

The [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.

**Important**: **Request Body** must always be sent with empty value "{ }" in this endpoint.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClearorderFormMessagesRequest;
import org.openapis.openapi.models.operations.ClearorderFormMessagesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minima", "excepturi") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            ClearorderFormMessagesRequest req = new ClearorderFormMessagesRequest("accusantium", "iure", "culpa") {{
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("sapiente", "architecto");
                    put("mollitia", "dolorem");
                    put("culpa", "consequuntur");
                    put("repellat", "mollitia");
                }};
            }};            

            ClearorderFormMessagesResponse res = sdk.configuration.clearorderFormMessages(req);

            if (res.clearorderFormMessages200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getWindowToChangeSeller

Retrieves a marketplace’s window to change seller, that is, the period when it is possible to choose another seller to fulfill a given order after the original seller has canceled it.

The default period for this window is of 2 days, but it can be configured by the request Update window to change seller.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetWindowToChangeSellerRequest;
import org.openapis.openapi.models.operations.GetWindowToChangeSellerResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("occaecati", "numquam") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetWindowToChangeSellerRequest req = new GetWindowToChangeSellerRequest("commodi", "quam");            

            GetWindowToChangeSellerResponse res = sdk.configuration.getWindowToChangeSeller(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getorderFormconfiguration

Retrieves the settings that are currently applied to every orderForm in the account.

These settings are defined by the request [Update orderForm configuration](https://developers.vtex.com/reference/configuration#updateorderformconfiguration).

Always use this request to retrieve the current configuration before performing an update. By doing so you ensure that you are modifying only the properties you want.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetorderFormconfigurationRequest;
import org.openapis.openapi.models.operations.GetorderFormconfigurationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestiae", "velit") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetorderFormconfigurationRequest req = new GetorderFormconfigurationRequest("error", "quia");            

            GetorderFormconfigurationResponse res = sdk.configuration.getorderFormconfiguration(req);

            if (res.getorderFormconfiguration200ApplicationJSONAny != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateWindowToChangeSeller

Updates a marketplace’s window to change seller, that is, the period when it is possible to choose another seller to fulfill a given order after the original seller has canceled it.

It is possible to check the current window using the request Get window to change seller.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateWindowToChangeSellerRequest;
import org.openapis.openapi.models.operations.UpdateWindowToChangeSellerResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.WaitingTime;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quis", "vitae") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateWindowToChangeSellerRequest req = new UpdateWindowToChangeSellerRequest("laborum", "animi",                 new WaitingTime(317202L););            

            UpdateWindowToChangeSellerResponse res = sdk.configuration.updateWindowToChangeSeller(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateorderFormconfiguration

Determines settings that will apply to every orderForm in the account.

For example, if you create an app using this request, every orderForm of this account will have the custom fields created though it.

**Important**: always retrieve the current configuration before performing an update to ensure that you are modifying only the properties you want. Otherwise, old values can be overwritten. To retrieve the current configuration, use the request [Get orderForm configuration](https://developers.vtex.com/reference#getorderformconfiguration).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateorderFormconfigurationRequest;
import org.openapis.openapi.models.operations.UpdateorderFormconfigurationResponse;
import org.openapis.openapi.models.shared.PaymentConfiguration;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateorderFormconfigurationRequest;
import org.openapis.openapi.models.shared.UpdateorderFormconfigurationRequestApps;
import org.openapis.openapi.models.shared.UpdateorderFormconfigurationRequestTaxConfiguration;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("odit", "quo") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateorderFormconfigurationRequest req = new UpdateorderFormconfigurationRequest("sequi", "tenetur",                 new UpdateorderFormconfigurationRequest(false, false,                 new org.openapis.openapi.models.shared.UpdateorderFormconfigurationRequestApps[]{{
                                                add(new UpdateorderFormconfigurationRequestApps() {{
                                                    fields = new String[]{{
                                                        add("birthdayField"),
                                                        add("birthdayField"),
                                                        add("birthdayField"),
                                                    }};
                                                    id = "birthdayApp";
                                                    major = 1L;
                                                }}),
                                                add(new UpdateorderFormconfigurationRequestApps() {{
                                                    fields = new String[]{{
                                                        add("birthdayField"),
                                                        add("birthdayField"),
                                                        add("birthdayField"),
                                                        add("birthdayField"),
                                                    }};
                                                    id = "birthdayApp";
                                                    major = 1L;
                                                }}),
                                            }}, 13571, 97101, 622846L,                 new PaymentConfiguration(false) {{
                                                allowInstallmentsMerge = false;
                                            }};,                 new UpdateorderFormconfigurationRequestTaxConfiguration() {{
                                                appId = "temporibus";
                                                authorizationHeader = "laborum";
                                                url = "quasi";
                                            }};) {{
                                maskFirstPurchaseData = false;
                                maxNumberOfWhiteLabelSellers = 971945L;
                                paymentSystemToCheckFirstInstallment = "6";
                                recaptchaValidation = "voluptatibus";
                            }};);            

            UpdateorderFormconfigurationResponse res = sdk.configuration.updateorderFormconfiguration(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
