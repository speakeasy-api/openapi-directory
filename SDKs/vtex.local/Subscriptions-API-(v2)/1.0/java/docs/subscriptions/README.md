# subscriptions

### Available Operations

* [cancelSubscriptionsbySubscriptionId](#cancelsubscriptionsbysubscriptionid) - Cancel Subscriptions by SubscriptionId
* [getSubscriptionList](#getsubscriptionlist) - Get Subscription List
* [getfrequencyoptionsbysubscriptionId](#getfrequencyoptionsbysubscriptionid) - Get frequency options by subscriptionId
* [getsubscriptionbyId](#getsubscriptionbyid) - Retrieve subscription by ID
* [getsubscriptionstocustomer](#getsubscriptionstocustomer) - Retrieve customer's subscriptions
* [insertAddressesforSubscription](#insertaddressesforsubscription) - Insert Addresses for Subscription
* [updateSubscriptionsbySubscriptionId](#updatesubscriptionsbysubscriptionid) - Update Subscriptions by SubscriptionId

## cancelSubscriptionsbySubscriptionId

Cancels all Subscriptions of a subscription group. This operation does not have a rollback. Once cancelled, it cannot be re-activated

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CancelSubscriptionsbySubscriptionIdRequest;
import org.openapis.openapi.models.operations.CancelSubscriptionsbySubscriptionIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minima", "repellendus") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            CancelSubscriptionsbySubscriptionIdRequest req = new CancelSubscriptionsbySubscriptionIdRequest("totam", "similique", "1");            

            CancelSubscriptionsbySubscriptionIdResponse res = sdk.subscriptions.cancelSubscriptionsbySubscriptionId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSubscriptionList

Retrieves a list of Subscriptions linked to your store.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSubscriptionListRequest;
import org.openapis.openapi.models.operations.GetSubscriptionListResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("alias", "at") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSubscriptionListRequest req = new GetSubscriptionListRequest("quaerat", "tempora");            

            GetSubscriptionListResponse res = sdk.subscriptions.getSubscriptionList(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getfrequencyoptionsbysubscriptionId

Lists frequency options for the Subscription, filtering by `subscriptionId`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetfrequencyoptionsbysubscriptionIdRequest;
import org.openapis.openapi.models.operations.GetfrequencyoptionsbysubscriptionIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vel", "quod") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetfrequencyoptionsbysubscriptionIdRequest req = new GetfrequencyoptionsbysubscriptionIdRequest("officiis", "qui", "1");            

            GetfrequencyoptionsbysubscriptionIdResponse res = sdk.subscriptions.getfrequencyoptionsbysubscriptionId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getsubscriptionbyId

Lists Subscription's details, searching by `subscriptionId`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetsubscriptionbyIdRequest;
import org.openapis.openapi.models.operations.GetsubscriptionbyIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorum", "a") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetsubscriptionbyIdRequest req = new GetsubscriptionbyIdRequest("esse", "harum", "1");            

            GetsubscriptionbyIdResponse res = sdk.subscriptions.getsubscriptionbyId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getsubscriptionstocustomer

Retrieves details of a given customer's subscriptions, searching by that customer's `customerId`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetsubscriptionstocustomerRequest;
import org.openapis.openapi.models.operations.GetsubscriptionstocustomerResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iusto", "ipsum") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetsubscriptionstocustomerRequest req = new GetsubscriptionstocustomerRequest("quisquam", "tenetur", "user@vtex.com.br");            

            GetsubscriptionstocustomerResponse res = sdk.subscriptions.getsubscriptionstocustomer(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## insertAddressesforSubscription

Inserts address's information to complement the Subscription details.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.InsertAddressesforSubscriptionRequest;
import org.openapis.openapi.models.operations.InsertAddressesforSubscriptionResponse;
import org.openapis.openapi.models.shared.InsertAddressesforSubscriptionRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("amet", "tempore") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            InsertAddressesforSubscriptionRequest req = new InsertAddressesforSubscriptionRequest("accusamus", "numquam",                 new org.openapis.openapi.models.shared.InsertAddressesforSubscriptionRequest[]{{
                                add(new InsertAddressesforSubscriptionRequest("qui", "neque", "fugit", "magni", "odio", "sunt", "ullam", "nam", "hic", "voluptatem", "cumque", "soluta", "nobis", "et", "saepe", "ipsum") {{
                                    additionalComponents = "dolorem";
                                    addressId = "sapiente";
                                    addressName = "totam";
                                    addressType = "nihil";
                                    city = "Lake Corbinville";
                                    complement = "vel";
                                    country = "Romania";
                                    formattedAddress = "voluptas";
                                    geoCoordinate = "deserunt";
                                    neighborhood = "quam";
                                    number = "ipsum";
                                    postalCode = "15887";
                                    receiverName = "dicta";
                                    reference = "laborum";
                                    state = "totam";
                                    street = "11773 Kennedy Stream";
                                }}),
                                add(new InsertAddressesforSubscriptionRequest("quisquam", "vero", "omnis", "quis", "ipsum", "delectus", "voluptate", "consectetur", "vero", "tenetur", "dignissimos", "hic", "distinctio", "quod", "odio", "similique") {{
                                    additionalComponents = "veritatis";
                                    addressId = "nobis";
                                    addressName = "quos";
                                    addressType = "tempore";
                                    city = "Alvinaworth";
                                    complement = "dolorem";
                                    country = "France";
                                    formattedAddress = "labore";
                                    geoCoordinate = "adipisci";
                                    neighborhood = "dolorum";
                                    number = "architecto";
                                    postalCode = "05906";
                                    receiverName = "repellendus";
                                    reference = "porro";
                                    state = "doloribus";
                                    street = "75105 Kris Wall";
                                }}),
                            }}, "1");            

            InsertAddressesforSubscriptionResponse res = sdk.subscriptions.insertAddressesforSubscription(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateSubscriptionsbySubscriptionId

Update, add or alter information of a given Subscription, filtering by `subscriptionId`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateSubscriptionsbySubscriptionIdRequest;
import org.openapis.openapi.models.operations.UpdateSubscriptionsbySubscriptionIdResponse;
import org.openapis.openapi.models.shared.AdditionalComponent;
import org.openapis.openapi.models.shared.Frequency;
import org.openapis.openapi.models.shared.Item;
import org.openapis.openapi.models.shared.Metadatum;
import org.openapis.openapi.models.shared.PaymentMethod;
import org.openapis.openapi.models.shared.Plan;
import org.openapis.openapi.models.shared.Properties;
import org.openapis.openapi.models.shared.PurchaseSettings;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ShippingAddress;
import org.openapis.openapi.models.shared.Sku;
import org.openapis.openapi.models.shared.UpdateSubscriptionsbySubscriptionIdRequest;
import org.openapis.openapi.models.shared.Validity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("facilis", "vero") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateSubscriptionsbySubscriptionIdRequest req = new UpdateSubscriptionsbySubscriptionIdRequest("ducimus", "dolore",                 new UpdateSubscriptionsbySubscriptionIdRequest(false,                 new Item("quibusdam", 848944, 194342, 617877,                 new Sku("impedit", "aut", "voluptatibus", "exercitationem", "nulla", "fugit"););,                 new org.openapis.openapi.models.shared.Metadatum[]{{
                                                add(new Metadatum("vel",                 new Properties("possimus", "magnam", "ratione");) {{
                                                    name = "Domingo Kris";
                                                    properties = new Properties("ipsam", "ea", "aspernatur") {{
                                                        additionalProp1 = "alias";
                                                        additionalProp2 = "officia";
                                                        additionalProp3 = "tempora";
                                                    }};
                                                }}),
                                                add(new Metadatum("sapiente",                 new Properties("quisquam", "saepe", "ea");) {{
                                                    name = "Mabel Cartwright";
                                                    properties = new Properties("excepturi", "voluptatibus", "nostrum") {{
                                                        additionalProp1 = "quasi";
                                                        additionalProp2 = "ex";
                                                        additionalProp3 = "nulla";
                                                    }};
                                                }}),
                                                add(new Metadatum("eaque",                 new Properties("a", "libero", "aut");) {{
                                                    name = "Lewis Hartmann II";
                                                    properties = new Properties("recusandae", "aspernatur", "minima") {{
                                                        additionalProp1 = "ea";
                                                        additionalProp2 = "quo";
                                                        additionalProp3 = "consectetur";
                                                    }};
                                                }}),
                                                add(new Metadatum("placeat",                 new Properties("velit", "eum", "autem");) {{
                                                    name = "Margie Russel";
                                                    properties = new Properties("et", "dolorum", "laborum") {{
                                                        additionalProp1 = "accusamus";
                                                        additionalProp2 = "inventore";
                                                        additionalProp3 = "non";
                                                    }};
                                                }}),
                                            }},                 new Plan(                new Frequency(752135, "quas");, "assumenda",                 new Validity("nulla", "voluptas"););,                 new PurchaseSettings("libero",                 new PaymentMethod("quasi", "tempora");, "numquam", "explicabo", "provident", "ipsa");,                 new ShippingAddress(                new org.openapis.openapi.models.shared.AdditionalComponent[]{{
                                                                add(new AdditionalComponent("rem", "fuga",                 new String[]{{
                                                                                    add("quidem"),
                                                                                    add("fugiat"),
                                                                                }}) {{
                                                                    longName = "magnam";
                                                                    shortName = "odio";
                                                                    types = new String[]{{
                                                                        add("esse"),
                                                                        add("esse"),
                                                                    }};
                                                                }}),
                                                                add(new AdditionalComponent("praesentium", "quisquam",                 new String[]{{
                                                                                    add("ipsa"),
                                                                                }}) {{
                                                                    longName = "ut";
                                                                    shortName = "eum";
                                                                    types = new String[]{{
                                                                        add("assumenda"),
                                                                        add("eos"),
                                                                    }};
                                                                }}),
                                                            }}, "id", "quidem", "neque", "quo", "illum", "quo", "fuga",                 new Integer[]{{
                                                                add(178367),
                                                                add(373813),
                                                            }}, "ab", "cupiditate", "consequatur", "tempora", "debitis", "ipsam", "aspernatur");, "sequi");, "1");            

            UpdateSubscriptionsbySubscriptionIdResponse res = sdk.subscriptions.updateSubscriptionsbySubscriptionId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
